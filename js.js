let audio=document.getElementById("tea-party-audio");
let player=document.getElementById("player");

audio.addEventListener("play",()=>{
    player.classList.add("play");
})