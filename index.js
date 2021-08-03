const express = require('express');
const repoContext = require('./repository/repository-wrapper');

const app = express();



app.listen(9000, function () {
    console.log("Server started. Listening on port9000.");
    });
    
app.get('/api/songs/', (req, res) => {
        const songs = repoContext.songs.findAllSongs();
        return res.send(songs);
});