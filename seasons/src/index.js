import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./components/Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // This is the ONLY TIME we do direct assignment to this.state
    this.state = { 
      lat: null, 
      errorMessage: '' 
    }
  }

  state = { lat: null, errorMessage: ""}
  // This function will be automatically called ONE time when our component first gets rendered
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), // We called setState! It comes automatically from React.component
      err => this.setState({ errorMessage: err.message })
    )
  }

  // It will be called every time the component gets updated
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!")
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <>Error: {this.state.errorMessage}</>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner msg="Waiting for geolocation..."/>
  }

  // React says we have to define render!!
  render() {
    return(
      <>
        {this.renderContent()}
      </>
    )
  }

}

ReactDOM.render(<App />, document.querySelector("#root"));
