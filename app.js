function playSong(url, title) {
    const audio = document.getElementById("audioPlayer");
    const nowPlaying = document.getElementById("nowPlaying");
    audio.src = url;
    nowPlaying.innerText = "Now Playing: " + title;
    audio.play();
}
