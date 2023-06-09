const express = require("express");
const router = express.Router();

const answerDB = require('../Models/Answer.js');
router.post("/", async(req, res) => {
    try{
        await answerDB.create({
            answer: req.body.answer,
            questionId: req.body.questionId
        }).then(()=>{
            res.status(201).send({
                status: true,
                message: "Answer created successfully"
            })
        }).catch((e) => {
            res.status(400).send({
                status: false,
                message: "Bad request"
            })
        })
    }catch(err){
        res.status(500).send({
            status: false,
            message: `unexpected error occured\n${err}`
        });
    }
})
module.exports = router