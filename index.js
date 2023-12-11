

// team and player data
var playerData = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/210/2740.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 1,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 2,
        "playerName": "Yuvraj Singh",
        "from": "MI",
        "price": "1.00 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/210/113.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 3,
        "playerName": "Chris Morris",
        "from": "RR",
        "price": "16.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/210/836.png',
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 4,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "14.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 5,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png',
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 6,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "2.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png',
        "playerTeam": "Mumbai Indians"
    }

];

var teamData = [

    {
        "id": 0,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname":"MI (Mumbai Indians)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "WonCount": 5,
    },
    {
        "id": 1,
        "teamFullName": "Chennai Super Kings",
        "sName": "CSK",
        "fullSname":"CSK (Chennai Super King)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
        "WonCount": 5,
    },
    {
        "id": 2,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname":"RCB (Royal challengers Bangalore)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 3,
        "teamFullName": "Kolkata Knight Riders",
        "sName": "KKR",
        "fullSname":"KKR (Kolkata Knight Riders)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 4,
        "teamFullName": "Delhi Capitals",
        "sName": "DC",
        "fullSname":"DC (Delhi Capitals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 5,
        "teamFullName": "Gujarat Titan",
        "sName": "GT",
        "fullSname":"GT (Gujarat Tistan)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "WonCount": 1,
    },

    {
        "id": 6,
        "teamFullName": "Rajasthan Royals",
        "sName": "RR",
        "fullSname":"RR (Rajasthan Royals)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
        "WonCount": 1,
    },
    {
        "id": 7,
        "teamFullName": "Sunrises Hyderabad",
        "sName": "SH",
        "fullSname":"SH (Sunrises Hyderabad)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 8,
        "teamFullName": "Punjab Kings",
        "sName": "PBKS",
        "fullSname":"PBKS (Punjab Kings)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 9,
        "teamFullName": "Lucknow Super Giants",
        "sName": "LSG",
        "fullSname":"LSG (Lucknow Super Giants)" ,
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
        "WonCount": 0,
    },
   


];



var addteamclicked=()=>{
    window.open("./addTeam.html","_self")
}
var addPlayerClicked=()=>{
    window.open("./addPlayer.html","_self")
}





    let detailofTeam = [];
    let detailOfPlayer = [];
    var teamGrid = document.getElementById("container_teams")
    
    if(localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamData));
    
    if(localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerData));

    detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
    detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));

   


   
// search bar code goes here

var suggestArray=[];
for(var i=0;i<detailofTeam.length;i++){
    suggestArray.push(detailofTeam[i].sName)
    
}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".icon");



inputBox.onkeyup = (e)=>{
    if(e.keyCode==13){
        icon.click()
    }
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
      
        emptyArray = suggestArray.filter((data)=>{
           
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
           
            return data = `<li>${data}</li>`;
        });
        searchBar.classList.add("active"); 
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            
            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    }else{
        searchBar.classList.remove("active");
    }
}
function currentLi(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
   
        window.open(`./teams.html?name=${element.textContent}`,"_self")
    
    }
    searchBar.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// search bar code ends here

// grid cards for teams goes here

var teamMainBox=document.getElementById("container_teams");
for(var i=0;i<detailofTeam.length;i++){
teamMainBox.innerHTML+=`
<div    onclick="makethisinclick('${i}')"    class="minibox">
<img src="${detailofTeam[i].teamIcon}" class="mainimage" alt=""/> 
<div class="dataodcard">
  <p class="text1"> ${detailofTeam[i].teamFullName}   </p>
  <p class="text2"> Won Count : ${detailofTeam[i].WonCount} </p>
 
</div>
</div>
`

}

function makethisinclick(res){
    var clickedCard=detailofTeam[res].sName
    
    window.open(`./teams.html?name=${clickedCard}`,"_self")
    
    
}
