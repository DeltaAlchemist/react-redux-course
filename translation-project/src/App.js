import React from "react";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

class App extends React.Component {
  state = { language: 'en' };
  
  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    const text = this.state.language === "en" ? "Select a language: " : "Escolha um idioma: ";
    return(
      <div className="ui container">
        <div>
          {text}
          <i className="flag us" onClick={() => this.onLanguageChange('en')} />
          <i className="flag br" onClick={() => this.onLanguageChange('br')} />
        </div>
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;