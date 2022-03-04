import React from "react";
import LanguageContext from "../contexts/LanguageContext";


class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text =
      this.context.language === "en"
        ? "Select a language: "
        : "Escolha um idioma: ";
    return (
      <div>
        {text}
        <i className="flag us" onClick={() => this.context.onLanguageChange("en")} />
        <i className="flag br" onClick={() => this.context.onLanguageChange("br")} />
      </div>
    );

  }

}

export default LanguageSelector;