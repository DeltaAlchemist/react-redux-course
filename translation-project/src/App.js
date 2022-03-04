import React from "react";
import UserCreate from "./components/UserCreate";
import { LanguageStore } from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";
import LanguageSelector from "./components/LanguageSelector";

class App extends React.Component {
  state = { language: 'en' };
  
  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector
            language={this.state.language}
            onLanguageChange={this.onLanguageChange}
          />
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;