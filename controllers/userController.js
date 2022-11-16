const express = require('express').Router()
const pool = require('../db/db')

//get all
const getUsers = async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users')
        res.status(200).json(users.rows)
    } catch (error) {
        res.status(500).json(error.message)
        console.log(error.message)
    }
}
//get id
const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [id])
        res.status(200).json(user.rows)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
//create
const createUser = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await pool.query('INSERT INTO users (username, password) VALUES($1, $2) RETURNING *', [username, password])
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
//update
const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, password } = req.body
        const user = await pool.query('UPDATE users SET username = $1, password = $2 WHERE user_id = $3', [username, password, id])
        res.status(203).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
//delete
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await pool.query('DELETE FROM users WHERE user_id = $1', [id])
        res.status(204).json(`${user} deleted successfully`)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }