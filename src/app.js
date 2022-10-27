/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "he", "she"];
var adj = ["great", "big", "amazing"];
var noun = ["dog", "jogger", "driver"];
for (var i = 0; i < pronoun.length; i++)
  for (var j = 0; j < adj.length; j++)
    for (var k = 0; k < noun.length; k++)
      console.log(pronoun[i] + adj[i] + noun[i] + ".com");
