const searchController = require("../controllers/searchController")
const singleRepoController = require("../controllers/singleRepoController")
module.exports = (function() {
    'use strict';
    const externalRoutes = require('express').Router();

    externalRoutes.post('/search', async (req, res) => { 
        const data = await searchController({...req.body})
        res.json(data);
    });

    externalRoutes.get('/repo/:id', async (req, res) => { 
        let {id} = req.params
        const data = await singleRepoController({id: id})        
        res.json(data);
    });

    return externalRoutes;
})();