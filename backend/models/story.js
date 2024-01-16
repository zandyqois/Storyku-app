'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate(models) {
      Story.hasMany(models.Chapters, {
        foreignKey: 'storiesID',
        as: 'chapters',
      })
    }
  }
  Story.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};