// Exercise 1 page 59
"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   ];

window.onload = function(){
    const teamsList = document.getElementById("teamsList");
    for(let i = 0; i < teams.length; i++){
        let theOption = new Option(teams[i].name, teams[i].code);
        teamsList.appendChild(theOption);
    }
}