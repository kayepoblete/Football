// Exercise 1 page 59, Excercise 1-4 page 67
"use strict";

let teams = [
    {code:"", name:"Select a team", plays:""},
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   ];

window.onload = function(){
    initTeamsDropdown();
}
const formTeam = document.getElementById("formTeam");
const teamsList = document.getElementById("teamsList");
function initTeamsDropdown(){
    for(let i = 0; i < teams.length; i++){
        let theOption = new Option(teams[i].name, teams[i].code);
        teamsList.appendChild(theOption);
    }
    // teamsList.value = "DEN"; //<---Defaults select to Denver
    // teamsList.value = null; //defaults to none of the teams
}

formTeam.addEventListener("submit", (e) => {
    e.preventDefault();
    if (teamsList.selectedIndex > 0) {
        let text = teamsList.options[teamsList.selectedIndex].text;
        let plays = teams[teamsList.selectedIndex].plays;
        document.getElementById("displayInfo").innerHTML = `You selected the ${text} who play in ${plays}`;
    }
    else{
        document.getElementById("displayInfo").innerHTML = "";
    }
});