const express = require('express'); 
const mongoose = require('mongoose'); 
const Ranking = require('../models/ranking');
const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

exports.loadRankingController = async (req, res)=> {

    console.log("getting Ranking"); 
    try {
        console.log("verifying"); 
        const rankings = await Ranking.find({}, (err, rankings) => {
            // user is a single document which may be null for no results
            if (err) {

              console.log("err: ", err)
              return;
            }
            if (rankings) {
                console.log(rankings);
                return res.send(rankings)
            } else {
                console.log(rankings);
                return res.send(rankings)
            }
          });

    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}

exports.loadRankingControllerById = async (req, res)=> {
    const { id } = req.params.id
    try {
        console.log("Loading"); 
        const rankings = await Rankings.findById(req.params.id).exec();
        console.log(req.params.id);
        console.log(rankings);
        return res.send(rankings)

    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}




