import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../redux/actions";
import { Loader } from "../Loader";

class StreamShow extends React.Component {

	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
		this.buildPlayer();
	};

	componentDidUpdate() {
		this.buildPlayer();
	}

	buildPlayer() {
		if (this.player || !this.props.stream) {
			return;
		}
		const { id } = this.props.match.params;
		this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8080/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
	};

	render() {
		if (!this.props.stream) {
			return <Loader />;
		}

		const { title, description } = this.props.stream;

		return (
      <div>
				<video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1 className="ui header">
          {title}
          <div className="sub header">{description}</div>
        </h1>
      </div>
    );
	};

};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};


export default connect(
	mapStateToProps, 
	{ fetchStream }
)(StreamShow);