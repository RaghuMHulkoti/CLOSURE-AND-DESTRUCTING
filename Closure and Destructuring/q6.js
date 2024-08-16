function createPlaylist(playlistName) {
    let songs = [];

    return {
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },
        listSongs: function() {
            return songs;
        }
    };
}


function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}


function listSongs(playlist) {
    return playlist.listSongs();
}


// Create a new playlist
const myPlaylist = createPlaylist('My Favorite Songs');

// Add songs to the playlist
addSong(myPlaylist, 'Song 1', 'Artist 1');
addSong(myPlaylist, 'Song 2', 'Artist 2');

// List all songs in the playlist
console.log(listSongs(myPlaylist));
