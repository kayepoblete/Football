// Exercise 1 page 59, 67
"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   ];

window.onload = function(){
    initTeamsDropdown();
    selectTeam();
}
const teamsList = document.getElementById("teamsList");
function initTeamsDropdown(){
    for(let i = 0; i < teams.length; i++){
        let theOption = new Option(teams[i].name, teams[i].code);
        teamsList.appendChild(theOption);
    }
    // teamsList.value = "DEN"; <---Defaults select to Denver
    teamsList.value = null; //defaults to none of the teams
}

function selectTeam(){
    const btnSelect = document.getElementById("btnSelect");
    btnSelect.addEventListener("click", displayTeam);
}

function displayTeam(){
    if (teamsList.selectedIndex >= 0) {
        let text = teamsList.options[teamsList.selectedIndex].text;
        let plays = teams[teamsList.selectedIndex].plays;
        document.getElementById("displayInfo").innerHTML = `You selected the ${text} who play in ${plays}`;
    }
}