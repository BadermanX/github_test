const getFavoritesController = require("../controllers/getFavoritesController")
const addFavoritesController = require("../controllers/addFavoritesController")
const editFavoritesController = require("../controllers/editFavoritesController")
const deleteFavoritesController = require("../controllers/deleteFavoritesController")

module.exports = (function() {
    'use strict';
    const externalRoutes = require('express').Router();

    externalRoutes.get('/get_fav', async (req, res) => { 
        const data = await getFavoritesController()
        res.json(data);
    });

    externalRoutes.post('/add_fav', async (req, res) => { 
        const data = await addFavoritesController({...req.body})
        res.json(data);
    });

    externalRoutes.patch('/edit_fav', async (req, res) => { 
        const data = await editFavoritesController({...req.body})
        res.json(data);
    });

    externalRoutes.delete('/delete_fav', async (req, res) => { 
        const data = await deleteFavoritesController({...req.body})
        res.json(data);
    });
    
    return externalRoutes;
})();