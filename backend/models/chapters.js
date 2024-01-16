'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chapters extends Model {
    static associate(models) {
      Chapters.belongsTo(models.Story, {
        foreignKey: 'storiesID',
        as: 'story',
      })
    }
  }
  Chapters.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    storiesID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Stories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    chapterTitle: {
      type: DataTypes.STRING
    },
    chapterStory: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Chapters',
  });
  return Chapters;
};