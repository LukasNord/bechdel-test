'use strict'

const db = require('./index.js');
const mongoose = require('mongoose');

let filmSchema = mongoose.Schema({
  title : { type: String, required: true },
  plot : String,
  simplePlot : String,
  year : Number,
  actors : [ { actorName : String, character : String, actorActress : String } ],
  directors : [ { name : String, id : String } ],
  writers : [ { name : String, id : String } ],
  rated : String,
  genres : [ String ],
  urlPoster : String,
  idIMDB : String,
  urlIMDB : String,
  createdAt : { type : Date, default : Date.now },
  updatedAt : { type : Date, default : Date.now },
  bechdelResults : {
    pass : Boolean,
    bechdelScore : Number,
    numScenesPass : Number,
    numScenesDontPass : Number,
    numOfFemalesChars : Number,
    numOfMaleChars : Number,
    numOfFemalesCharsWithDialogue : Number,
    numOfMaleCharsWithDialogue : Number,
    totalLinesFemaleDialogue : Number,
    totalLinesMaleDialogue : Number
  }
});

const Film = mongoose.model( 'Film', filmSchema);

var listFilms = function() {
  var query = Film.find();

  query.exec(function(err, films) {
    if (err) {
      console.log(err);
    }

    console.log(accounts);
  });
}

module.exports = Film;