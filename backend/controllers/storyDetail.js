const { Story, Chapters } = require('../models')
const {formatDate} = require('../config/formatDate.js')

exports.getStoryDetail = async (req, res) => {
  try {
    const { id } = req.params

    // Ambil data Story beserta Chapternya
    const story = await Story.findByPk(id, {
      include: {
        model: Chapters,
        as: 'chapters'
    }
    })

    //validasi apakah story ditemukan
    if (!story) {
      return res.status(404).json({
        error: 'Story Not Found' 
    })
    }

    // Format tanggal untuk ditampilkan
    const formattedDate = formatDate(story.createdAt)

    //Format tanggal untuk chapters
    const formattedChapters = story.chapters.map((chapter) => ({
        id: chapter.id,
        storiesID: chapter.storiesID,
        chapterTitle: chapter.chapterTitle,
        chapterStory: chapter.chapterStory,
        createdAt: formatDate(chapter.createdAt),
      }))

    // Menampilkan halaman Detail Story
    res.status(200).json({
        title: story.title,
        author: story.author,
        synopsis: story.synopsis,
        category: story.category,
        cover: story.cover,
        tags: story.tag,
        status: story.status,
        chapters: formattedChapters,
        createdAt: formattedDate,
      })

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}