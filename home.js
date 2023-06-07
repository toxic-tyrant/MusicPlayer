console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Madeforyou/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('sixbannerimg'));


let songs = [
    {songname:"Just the Two of Us (feat. Bill Withers)", filepath:"./Madeforyou/1.mp3",coverPath:"./Covers/just the two of us.jpg"},
    {songname:"Daft Punk - Robot Rock", filepath:"./Madeforyou/2.mp3",coverPath:"./Covers/robot rock.jpg"},
    {songname:"Michael Bublé - Sway", filepath:"./Madeforyou/3.mp3",coverPath:"./Covers/sway.jpg"},
    {songname:"Nirvana - Something In The Way", filepath:"./Madeforyou/4.mp3",coverPath:"./Covers/Something in the way.jpg"},
    {songname:"Daft Punk - Lose Yourself to Dance", filepath:"./Madeforyou/5.mp3",coverPath:"./Covers/lose yourself to dance.jpg"},
    {songname:"Joji - Run", filepath:"./Madeforyou/6.mp3", coverPath:"./Covers/run.jpg"},
 ]

 songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})




const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('sixbannerimg')).forEach((element)=>{
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('sixbannerimg')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Madeforyou/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Madeforyou/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Madeforyou/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



