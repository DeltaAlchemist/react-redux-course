import React from "react";

class LanguageSelector extends React.Component {

  render() {
    const text =
      this.props.language === "en"
        ? "Select a language: "
        : "Escolha um idioma: ";
    return (
      <div>
        {text}
        <i className="flag us" onClick={() => this.props.onLanguageChange("en")} />
        <i className="flag br" onClick={() => this.props.onLanguageChange("br")} />
      </div>
    );

  }

}

export default LanguageSelector;