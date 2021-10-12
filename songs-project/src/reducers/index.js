import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: "Runaway", duration: "7:15" },
        { title: "No Child Left Behind", duration: "2:35" },
        { title: "Father Strech My Hands", duration: "3:49" },
        { title: "Stronger", duration: "5:16" },
        { title: "Jesus Walks", duration: "4:41" },
        { title: "Reborn", duration: "5:20" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});