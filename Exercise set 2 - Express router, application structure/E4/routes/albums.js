const express = require('express')
const router = express.Router()

// Import controllers
const {
    showAlbums,
    getAlbums,
    getAlbumById,
    getAlbumQuery,
    createAlbum,
    updateAlbum,
    deleteAlbum,
} = require('../controllers/albums')

// Define routes
router.get('/', showAlbums)
router.get('/api/albums', getAlbums)
router.get('/api/albums/:albumId', getAlbumById),
router.get('/api/query', getAlbumQuery)
router.post('/api/albums', createAlbum)
router.put('/api/albums/:id', updateAlbum)
router.delete('/api/albums/:id', deleteAlbum)

module.exports = router