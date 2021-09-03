const { Router } = require('express')
const AnimeController = require('../controllers/AnimeController')
const AnimeRouter = Router()

AnimeRouter.post('/newAnime', AnimeController.createAnime)
AnimeRouter.get('/allAnime',AnimeController.allAnime)
AnimeRouter.delete('/:id',AnimeController.deleteAnime)

module.exports = AnimeRouter