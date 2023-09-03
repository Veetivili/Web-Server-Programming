// Import data
const { albums} = require('../db/data')

// Get methods
const getAlbums =('/api/albums', (req, res) => {
    const newAlbums = albums.map(album => {
        const { id, artist, title, year, genre, tracks } = album
        return { id, artist, title, year, genre, tracks }
    })
    res.json(newAlbums)
})

const getAlbumById = ('/api/albums/:albumId', (req, res) => {
    const { albumId } = req.params

    const singleAlbum = albums.find(album => album.id === Number(albumId))
    
    if (!singleAlbum) {
        return res.status(404).json({success: false, msg: `No album with id ${albumId}`})
    }
    res.json(singleAlbum)
})

const getAlbumQuery = ('/api/query', (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedAlbums = [...albums]

    if (search) {
        sortedAlbums = sortedAlbums.filter(album => {
            return album.artist.startsWith(search)
        })
    }
    if (limit) {
        sortedAlbums = sortedAlbums.slice(0, Number(limit))
    }
    if (sortedAlbums.length < 1) {
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedAlbums)
})

// Update method

const updateAlbum = ('/api/albums/:id', (req, res) => {
    const { id } = req.params
    const { artist, title, year, genre, tracks } = req.body
    
    const album = albums.find(album => album.id === Number(id))

    if (!album) {
        return res.status(404).json({success: false, msg: `No album with id ${id}`})
    }

    const newAlbum = albums.map(album => {
        if (album.id === Number(id)) {
            album.artist = artist
            album.title = title
            album.year = year
            album.genre = genre
            album.tracks = tracks
        }
        return album
    })
    res.status(200).json({success: true, data: newAlbum})
})

// Delete method

const deleteAlbum = ('/api/albums/:id', (req, res) => {
    const { id } = req.params
    const album = albums.find(album => album.id === Number(id))

    if (!album) {
        return res.status(404).json({success: false, msg: `No album with id ${id}`})
    }

    const newAlbums = albums.filter(album => album.id !== Number(id))
    res.status(200).json({success: true, data: newAlbums})
})

// Post method

const createAlbum = ('/api/albums', (req, res) => {
    console.log(req.body)
    const { artist, title, year, genre, tracks } = req.body
    if (!artist || !title || !year || !genre || !tracks) {
        return res.status(400).json({success: false, msg: 'Please provide all required fields'})
    }
    const newAlbum = { id: albums.length + 1, artist, title, year, genre, tracks }
    albums.push(newAlbum)
    res.status(201).json({success: true, data: newAlbum})
})

module.exports = { getAlbums, getAlbumById, getAlbumQuery, createAlbum, updateAlbum, deleteAlbum }