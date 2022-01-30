import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../redux/actions";
import { Loader } from "../Loader";

class StreamShow extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	};

	render() {
		if (!this.props.stream) {
			return <Loader />;
		}

		const { title, description } = this.props.stream;

		return (
      <div>
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