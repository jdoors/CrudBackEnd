const { Zoo } = require('../models/models')

const validaId = async (req, res, next) => {
    try {
        const animal = await Zoo.findById(req.params.id)
        if (animal !== null) {
            next()
        } else {
            res.json({ msg: "no es el Id correcto " })
        }
    } catch (error) {
        res.json({ msg: "no es el Id correcto " })
    }

}

module.exports = { validaId }
