import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return <div><i className="exclamation circle icon"></i>Select a song</div>
    }
    return(
        <div>
            <h3>Details for:</h3>
            <p>Title: {song.title}<br/>Duration: {song.duration} min</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)