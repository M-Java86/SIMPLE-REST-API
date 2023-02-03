/* eslint-disable camelcase */
const { DataTypes } = require("sequelize");
const db = require("../db");

const User = require('./users')



const Post = db.sequelize.define(
    "Posts",
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        last_modified: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: true,
        updatedAt: "last_modified",
        createdAt: "created_at",
    }
);

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

module.exports = Post;