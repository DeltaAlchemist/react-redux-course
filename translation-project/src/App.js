import React from "react";
import UserCreate from "./components/UserCreate";

class App extends React.Component {
  state = { language: 'en' };
  
  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return(
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('en')} />
          <i className="flag br" onClick={() => this.onLanguageChange('br')} />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;