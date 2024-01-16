const { Story, Chapters } = require ('../models')
const { formatDate } = require('../config/formatDate.js')

exports.addStory = async (req,res) => {
    try {
        //mendapat data dari request body
        let {title, author, synopsis, category, tag, status} = req.body
        const cover = req.files && req.files.cover

        //validasi untuk field yang tidak diisikan
        if(!title || !author || !synopsis || !category || !cover || !tag || !status) {
          console.log("Bad Request: Missing required fields")
            return res.status(400).json({
                error: "Bad request"
            })
        }

        //code untuk mendapaat file dari request
        const coverFile = req.files.cover
        const uploadPath = 'image/' + coverFile.name

        //mengunggah file cover
        coverFile.mv(uploadPath, async(err) => {
            if (err) {
              console.error(err)
              return res.status(500).json({
                error: "Error uploading file",
              })
            }
      
            try {
              //menyimpan data baru ke db
              const newStory = await Story.create({
                title,
                author,
                synopsis,
                category,
                cover: uploadPath,
                tag,
                status,
            })

            //response berhasil
            return res.status(200).json({
                status: 'Success',
                data: { newStory },
            })
            } catch (dbError) {
              console.error(dbError)
              return res.status(500).json({
                error: "Error saving to the database"
              })
            }
          })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

exports.addChapters = async (req, res) => {
  try {
    //mendapat request dari body
    const { storiesID, chapterTitle, chapterStory } = req.body

    //validasi apakah storiedID ada di database
    const existingStoriesId = await Story.findByPk(storiesID)
    if (!existingStoriesId) {
      return res.status(404).json({ error: "Story not found" })
    }

    //menambah chapter baru ke db
    const newChapter = await Chapters.create({
      storiesID,
      chapterTitle,
      chapterStory
    })

    //response berhasil
    return res.status(201).json({
      status: "Success",
      data : {newChapter}
    })

  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
}

exports.listChapters = async (req, res) => {
  try {
    //mendapat reques dari parameter
    const { storiesID } = req.params

    // Validasi apakah storiesId ada dalam parameter
    if (!storiesID) {
      return res.status(400).json({
        error: 'Chapters Not Found'
      })
    }

    //mendapat semua isi chapter berdasarkan storiesID
    const chapters = await Chapters.findAll({
      where: {
        storiesID: storiesID,
      },
    })

    //mengubah format tanggal sesuai ketentuan 'DD MMMM YYYY'
    const formattedChapters = chapters.map((chapter) => ({
      id: chapter.id,
      storiesID: chapter.storiesID,
      chapterTitle: chapter.chapterTitle,
      chapterStory: chapter.chapterStory,
      createdAt: formatDate(chapter.createdAt),
      updatedAt: formatDate(chapter.updatedAt),
    }))

    //response sukses
    return res.status(200).json({
      status: 'Success',
      data: { chapters: formattedChapters },
    })
  } catch (error) {
      console.error(error)
      res.status(500).json({
          error: "Internal Server Error"
      })
  }
}

exports.delChapters = async (req, res) => {
  try {
    //mendapat request dri parameter
    const { id } = req.params

    // Check if the chapter exists
    const existingChapter = await Chapters.findByPk(id)
    if (!existingChapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }

    // Delete the chapter
    await existingChapter.destroy()

    //response sukses
    return res.status(200).json({
      status: 'Success',
      message: 'Chapter deleted successfully',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: 'Internal Server Error',
    })
  }
}

exports.editChapters = async (req, res) => {
  try {
    //mendapat id dari parameter
    const { id } = req.params

    // mengecek apakah ada chapter dengan id tersebut
    const existingChapter = await Chapters.findByPk(id)
    if (!existingChapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }

    //menyiapkan data untuk di update
    const updateChapters = {
      chapterTitle: req.body.chapterTitle || existingChapter.chapterTitle,
      chapterStory: req.body.chapterStory || existingChapter.chapterStory
    }

    //ORM untuk melakukan update
    await existingChapter.update(updateChapters)
    //mengambil data yang telah di update
    const updatedChapter = await Chapters.findByPk(id)

    //response sukses
    return res.status(200).json({
      status: 'Success',
      data: updatedChapter,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: "Internal Server Error"
    })
  }
}

