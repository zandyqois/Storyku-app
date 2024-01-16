# Story Apps

## <a name="introduction"></a> Introduction :
Project Story App untuk test submission MSIB di mitra BIGIO Fullstack Developer.
Disini aplikasi yang saya buat belum sempurna karena backend dan frontend aplikasi belum terintegrasi. 
Namun, untuk API yang saya buat sudah bisa berjalan dengan baik sesuai dengan fitur yang diminta.
Kemudian untuk tampilan website sudah saya buat semirip mungkin mengikuti struktur yang diminta.

Progress backend 100% done.

Progress frontend 80% done.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Libraries](#libraries)
- [Project Structure](#project-structures)
- [Youtube URL](#apk-link)

## <a name="features"></a> Features :
- Story List
- Add Story
- Story Detail
- Edit Story


## <a name="libraries"></a> Libraries :
Backend

- ExpressJS
- cors
- express-fileupload
- mysql2
- nodemon
- sequelize
- sequelize-cli

Frontend

- ReactJS
- bootstrap
- web-vitals
- react-scripts
- react-bootstrap
- react-dom
- react-router-dom

## <a name="project-structures"></a> Project Structure :
```
Storyku-app
      ├── backend
      │       ├── config
      │       |     ├── config.js
      │       |     └── formatDate.js
      │       ├── controllers
      │       |     ├── addStory.js
      │       |     ├── editStory.js
      │       |     ├── storyDetail.js
      │       |     └── storyList.js
      │       ├── image
      │       ├── migrations
      │       |     ├── 20240115085202-create-story.js
      │       |     └── 20240115171712-create-chapters.js
      │       ├── models
      │       |     ├── chapters.js
      │       |     ├── index.js
      │       |     └── story.js
      │       ├── routes
      │       |     └── route.js
      │       └── index.js
      ├── frontend
      │       ├── public
      │       |     ├── favicon.ico
      │       |     ├── index.html
      │       |     ├── logo192.png
      │       |     ├── logo512.png
      │       |     ├── manifest.json
      │       |     └── robots.txt
      │       └── src
      │            ├── pages
      │            |     ├──About.js
      │            |     ├──Home.js
      │            |     ├──layout.js
      │            |     ├──story.js
      │            |     ├──storyadd-chapter.js
      │            |     └──storyadd..js
      │            ├── App.css
      │            ├── App.js
      │            ├── App.test.js
      │            ├── index.css
      │            ├── index.js
      │            ├── logo.svg
      │            ├── reportWebVitals.js
      │            └── setupTests.txt
      └── README.md
```
## <a name="apk-link"></a> Youtube URL :
Video penjelasan dari progress yang saya buat bisa ditonton di [Storyku App Presentation](https://youtu.be/s8LXUga3gBs).

Thank You :cookie:
