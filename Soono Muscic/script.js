console.log("Welcome to Sptify")
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');





let songs=[
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },
    { somgName:"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"covers/1.jpg" },



        
]

// handl play/puse click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
    
})

// audioElement.play();
// listen to event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})