const express = require('express')
const Book = require('../models/Book')
const Author = require('../models/Author')



exports.getAllBooks = async(req, res) => {
    try {
        const books = await Book.find()
        return res.status(200).json(books)
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

exports.getBookById = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(404).json({message : 'No se encontro el recurso'})
        }
        return res.status(200).json(book)
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

exports.createBook = async(req, res) => {
    try {
        const newBook = new Book(req.body)
        await newBook.save()
        return res.status(201).json(newBook)
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

exports.updateBook = async(req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new : true})
        if (!updatedBook) {
            return res.status(404).json({message : 'No se encontro el recurso'})
        }
        return res.status(200).json(updatedBook)
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'No se encontró el recurso' });
        }

       
        const authors = await Author.find();
        const libroAsociado = authors.some(author =>
            author.libros.includes(deletedBook._id)
        );

        if (libroAsociado) {
            return res.status(400).json({ message: 'No se puede eliminar el libro porque está asociado a un autor' });
        }

        return res.status(200).json({ message: 'Se eliminó el libro correctamente' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
