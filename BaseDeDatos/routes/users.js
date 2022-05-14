var express = require('express');
var router = express.Router();
const { vistaAnimales, crearAnimales, vistaAnimalUnico, editarAnimales, borrarAnimales } = require('../controller/controller');
const { check, validationResult, body } = require('express-validator');
const { validaId } = require('../middleware/validarId')

/* GET users listing. */
router.get('/ver', vistaAnimales);
router.get('/ver/:id', validaId, vistaAnimalUnico);
router.post('/crear',
    [check("name").not().isEmpty().withMessage("ingrese algun nombre").isLength({ max: 10, min: 3 }).withMessage("el nombre debe tener minimo 3 letras y maximo 10 letras"),
    check("concept").not().isEmpty().withMessage("ingrese algun dato").isLength({ min: 1 }).withMessage("el nombre debe tener minimo 1 letra"),
    check("weight").not().isEmpty().withMessage("ingrese algun nuemero").isLength({ max: 10, min: 1 }).withMessage("el nombre debe tener minimo 1 letra y maximo 10 letras"),
    check("height").not().isEmpty().withMessage("ingrese algun nuemero").isLength({ max: 10, min: 1 }).withMessage("el nombre debe tener minimo 1 letra y maximo 10 letras"),
    check("age").not().isEmpty().withMessage("ingrese alguna edad").isLength({ max: 5, min: 1 }).withMessage("el nombre debe tener minimo 3 letras "),
    check("country").not().isEmpty().withMessage("ingrese algun lugar").isLength({ max: 10, min: 3 }).withMessage("el nombre debe tener minimo 3 letras y maximo 10 letras"),
    check("place").not().isEmpty().withMessage("ingrese algun pais").isLength({ max: 35, min: 3 }).withMessage("el nombre debe tener minimo 3 letras y maximo 25 letras"),
    ], crearAnimales);
router.put('/editar/:id',
    [check("name").not().isEmpty().withMessage("ingrese algun nombre").isLength({ max: 10, min: 3 }).withMessage("el nombre debe tener minimo 3 letras y maximo 10 letras"),
    check("concept").not().isEmpty().withMessage("ingrese algun dato").isLength({ min: 1 }).withMessage("el nombre debe tener minimo 1 letra"),
    check("weight").not().isEmpty().withMessage("ingrese algun nuemero").isLength({ max: 10, min: 1 }).withMessage("el nombre debe tener minimo 1 letra y maximo 10 letras"),
    check("height").not().isEmpty().withMessage("ingrese algun nuemero").isLength({ max: 10, min: 1 }).withMessage("el nombre debe tener minimo 1 letra y maximo 10 letras"),
    check("age").not().isEmpty().withMessage("ingrese alguna edad").isLength({ max: 5, min: 1 }).withMessage("el nombre debe tener minimo 3 letras "),
    check("country").not().isEmpty().withMessage("ingrese algun lugar").isLength({ max: 10, min: 3 }).withMessage("el nombre debe tener minimo 3 letras y maximo 10 letras"),
    check("place").not().isEmpty().withMessage("ingrese algun pais").isLength({ max: 35, min: 3 }).withMessage("el nombre debe tener minimo 3 letras y maximo 25 letras"),
    ], editarAnimales);
router.delete('/eliminar/:id', validaId, borrarAnimales)

module.exports = router;


