const { Zoo } = require('../models/models');
const { check, validationResult, body } = require("express-validator")

const index = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistaAnimales = async (req, res) => {
    const animales = await Zoo.find()
    res.json({ animales })
}

const vistaAnimalUnico = async (req, res) => {
    try {
        const animal = await Zoo.findById(req.params.id)
        res.json({ animal })
    } catch (error) {
        res.status(400).json({ msg: "no se encontro el id", error })
    }
}

const crearAnimales = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const animalito = new Zoo(req.body);
            await animalito.save()
            res.status(201).json({ animalito, msg: 'guardado' })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({ msg: 'no se pudo guardar', err })
    }
}

const editarAnimales = async (req, res) => {
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const { id } = req.params
            const nuevoAnimal = await Zoo.findByIdAndUpdate(id, req.body)
            res.status(201).json({ nuevoAnimal, msg: "datos exitosamente cambiados" })
        } else {
            res.status(501).json(error)
        }
    } catch (err) {
        res.status(501).json({ msg: 'no se pudo cambiar' })
    }
}

const borrarAnimales = async (req, res) => {
    try {
        const animal = await Zoo.findByIdAndDelete(req.params.id)
        res.json({ msg: "elemento borrado", animal })
    } catch (error) {
        res.status(400).json({ msg: "No se pudo borrar", error })
    }
}


module.exports = { index, crearAnimales, vistaAnimales, vistaAnimalUnico, editarAnimales, borrarAnimales }

