const { Story } = require('../models');

exports.editStory = async (req, res) => {
  try {
    // Mendapatkan ID story dari parameter URL
    const { id } = req.params

    // Mengecek apakah story dengan ID yang diberikan aa di database
    const existingStory = await Story.findByPk(id)
    if (!existingStory) {
      return res.status(404).json({ error: "Story not found" })
    }

    // Mengambil data dari request body
    const { title, author, synopsis, category, tag, status } = req.body

    // Mengecek apakah semua field yang diperlukan terisi
    if (!title || !author || !synopsis || !category || !tag || !status) {
      return res.status(400).json({ error: "Please fill all fields"})
    }

    // Memperbarui data story
    await existingStory.update({
      title,
      author,
      synopsis,
      category,
      tag,
      status,
    })

    // Mengambil data story yang telah diupdate
    const updatedStory = await Story.findByPk(id)

    // Mengirim respons sukses dengan data story yang telah diupdate
    return res.status(200).json({
      status: 'Success',
      data: updatedStory,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: "Internal Server Error",
    })
  }
}