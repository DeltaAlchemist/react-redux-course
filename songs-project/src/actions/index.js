// Action creator
export const selectSong = (song) => {
    // Return an action
    return {
        type: "SONG_SELECTED", // type is REQUIRED
        payload: song // payload is OPTIONAL
    }
}