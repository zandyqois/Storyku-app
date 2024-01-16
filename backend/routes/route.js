const express = require('express')
const router = express.Router()
const {searchStory, filterStory, displayStory} = require('../controllers/storyList.js')
const {addStory, addChapters, listChapters, delChapters, editChapters} = require('../controllers/addStory.js')
const {getStoryDetail} = require('../controllers/storyDetail.js')
const {editStory} = require('../controllers/editStory.js')

router.post("/", searchStory)           //route untuk search story berdasarkan title atau author
router.post("/filter", filterStory)     //route untuk filter story berdasarkan cateegory dan status
router.get("/display", displayStory)    //route untuk menampilkan story


router.post("/addstory", addStory)                      //route untuk menambah story
router.post("/add-chapter", addChapters)                //route untuk menambahkan chapter
router.get("/list-chapter/:storiesID", listChapters)    //route untuk menampilkan list chapter berdasarkan storiesID
router.delete("/delete/:id", delChapters)               //route untuk delete chapter berdasarkan id
router.put("/edit-chapter/:id", editChapters)           //route untuk edit chapter

router.get("/:id", getStoryDetail)      //route untuk mendapatkan story detail

router.post("/:id/edit", editStory)     //route untuk ediit story



module.exports = router