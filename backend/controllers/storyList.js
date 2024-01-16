const {Story} = require ('../models')
const { Op } = require ('sequelize')

exports.searchStory = async(req, res) => {
    try {
        //menerima request body 
        let {title, author} = req.body

        //validasi apakah user menginputkan data
        if(!title && !author) {
            return res.status(400).json({
               message: "Please input title or author"
            })
        }

        //mengambil data berdasarkan inputan user sebelumnya
        const search = await Story.findAll({
            where: {
              [Op.or]: {
                title,
                author
            }
            }
          })

        //validasi apakah data ditemukan atau tidak
        if(!search || search.length === 0) {
            return res.status(404).json({
                error: "Story Not Found"
            })
        }
        
        //response suksess
        return res.status(200).json({
            status: "Success",
            data: {search}
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

exports.filterStory = async(req, res) => {
    try {
        //menerima data dari request body
        let {category, status} = req.body

        //validasi apakah data diisi atau tidak
        if(!category && !status) {
            return res.status(400).json({
               message: "Please select category and status"
            })
        }

        //mengambil data berdasarkan category dan status
        const filter = await Story.findAll({
            where: { 
            category,
            status 
            }
          })

        //validasi apakah ditemukan story atau tidak
        if(!filter || filter.length === 0) {
            return res.status(404).json({
                error: "Story Not Found"
            })
        }
        
        //response sukses
        return res.status(200).json({
            status: "Success",
            data: {filter}
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

exports.displayStory = async(req, res) => {
    try {
        //mengambil semua data story
        const display = await Story.findAll()

        return res.status(200).json({
            status: "Success",
            data: {display}
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}
