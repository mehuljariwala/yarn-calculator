import React, { useState } from "react";
import "./Choice.css";

const Choice = ({ options, onChange, title, showBack, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    typeof option === "string"
      ? option.toLowerCase().includes(searchTerm.toLowerCase())
      : option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="choice-container">
      <h1 className="choice-title">
        {showBack && (
          <button className="back-button" onClick={onBack}>
            <svg viewBox="0 0 24 24" width={16} height={16}>
              <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
            </svg>
          </button>
        )}
        {title}
      </h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")}>
            ×
          </button>
        )}
      </div>

      <div className="choice-grid">
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            className="choice-item"
            onClick={() => onChange(option)}
          >
            {option}
          </div>
        ))}
        {filteredOptions.length === 0 && (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  );
};

export default Choice;
