let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let audioSrc = document.getElementById("audioSrc")
let h1 = document.querySelector("h1")


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

progress.oninput = function () {
    song.currentTime = progress.value;
};

progress.onchange = function () {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
};


function playNext() {
    

    audioSrc.src = "Eminem - Lose Yourself [HD].mp3"; 
    song.load(); 
    song.play(); 

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    h1.textContent = "Lose Yourself"
}

function playPrev() {
    

    audioSrc.src = "Eminem - Mockingbird [Official Music Video].mp3"; // Change the source
    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    h1.textContent = "Mockingbird"
}
