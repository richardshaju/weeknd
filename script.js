let track_img = document.querySelector('.total-duration');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let curr_time = document.getElementsByClassName('curr_time')
let total_duration = document.getElementsByClassName('ttotal_duration')

let seek_slider = document.getElementsByClassName('.seek_slider');
let volume_slider = document.getElementsByClassName('.volume_slider');
document.getElementById('title').innerHTML = "Starboy"

let curr_track = document.createElement('audio');

//document.getElementById('music').type = "audio/mpeg"
//document.getElementById('music').src = ""
//curr_track.setAttribute("src","./music_stay.mp3")
curr_track.src = "./music_stay.mp3";
curr_track.id = 'myAudio'
curr_track.load();

function nextTrack() {
    setUpdate()
    x = curr_track.duration
    y = Math.floor(x);
    curr_track.play();
    document.getElementById('hi').innerHTML = '00:'+y;
    console.log(y);
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}