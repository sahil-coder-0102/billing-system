// Songs data with artist-specific songs
const songs = [
    {
        artist: "Artist 1",
        title: "Song Title 1",
        img: "song1.jpg",
        src: "alan walker.mp3"
    },
    {
        artist: "Artist 1",
        title: "Song Title 2",
        img: "song2.jpg",
        src: "song2.mp3"
    },
    {
        artist: "Artist 2",
        title: "Song Title 3",
        img: "song3.jpg",
        src: "song3.mp3"
    },
    {
        artist: "Artist 2",
        title: "Song Title 4",
        img: "song4.jpg",
        src: "song4.mp3"
    }
    // Add more songs with different artists
];

let currentSongIndex = 0;
let currentArtistSongs = [];

const audio = new Audio();

// Function to display songs by selected artist
function displaySongsByArtist(artistName) {
    const songList = document.getElementById("songList");
    songList.innerHTML = ""; // Clear the song list first
    currentArtistSongs = songs.filter(song => song.artist === artistName);
    
    currentArtistSongs.forEach((song, index) => {
        const songItem = document.createElement("li");
        songItem.onclick = () => playSong(index);

        const img = document.createElement("img");
        img.src = song.img;
        img.alt = song.title;

        const songDetails = document.createElement("div");
        const songTitle = document.createElement("h5");
        songTitle.textContent = song.title;
        const songArtist = document.createElement("p");
        songArtist.textContent = song.artist;

        songDetails.appendChild(songTitle);
        songDetails.appendChild(songArtist);
        songItem.appendChild(img);
        songItem.appendChild(songDetails);

        songList.appendChild(songItem);
    });
    playSong(0); // Automatically play the first song of the artist
}

// Function to play a specific song
function playSong(index) {
    currentSongIndex = index;
    const song = currentArtistSongs[currentSongIndex];
    audio.src = song.src;
    document.getElementById("currentSongTitle").textContent = song.title;
    document.getElementById("currentSongArtist").textContent = song.artist;
    document.getElementById("currentSongImage").src = song.img;
   
}