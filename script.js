console.log("Welcome to Spotify");


//my code
let songIndex = 0;
let isPlaying  = false;
let songs = [
    {songname:"Roll Deep", filepath:"./Roll Deep.mp3"},
    {songname:"Brown Munde", filepath:"./Brown Munde - AP Dhillon.mp3"},
    {songname:"Levels", filepath:"./Levels(DjPunjab.Club).mp3"},
    {songname:"baarishein", filepath:"./Baarishien-Anuv-Jain.mp3"},
    {songname:"Solace", filepath:"./Solace.mp3"},
    {songname:"Hanji Hanji", filepath:"./Hanji Hanji - Amrit Maan.mp3"},
 ]
const banners = document.querySelectorAll('.sixbannerimg');
console.log(banners);
const audioElementArr = [];

songs.forEach((e,i)=>{
    audioElementArr[i] = new Audio(e.filepath);
})

banners.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        if(audioElementArr[i].paused || audioElementArr[i].currentTime<=0){
            if(isPlaying){
                audioElement.pause();
            }
            songIndex = i;
            audioElement = audioElementArr[i];
            audioElementArr[i].play();
            isPlaying = true;
            masterPlay.classList.remove('fa-solid circle-play');
            masterPlay.classList.add('fa- solid circle-pause');
            gif.style.opacity = 1;
        }
        else{
            audioElementArr[i].pause();
            isPlaying = false;
            masterPlay.classList.remove('fa- solid circle-pause');
            masterPlay.classList.add('fa-solid circle-play');
            gif.style.opacity = 0;
        }
    })
})





// masterPlay.addEventListener('click',()=>{
//     if(audioElementArr[songIndex].paused || audioElementArr[songIndex].currentTime<=0){
//         if(isPlaying){
//             audioElement.pause();
//         }
//         audioElement = audioElementArr[songIndex];
//         audioElementArr[songIndex].play();
//         isPlaying = true;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElementArr[songIndex].pause();
//         isPlaying = false;
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })

console.log(audioElementArr);
//end of my code




// let audioElement = new Audio('A:\atom\WEB DEVELOPMENT\spotify clone\Roll Deep.mp3.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let ProgressBar = document.getElementById('ProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('sixbannerimg'));



// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 

// // Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     ProgressBar.value = progress;
// })

// ProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })