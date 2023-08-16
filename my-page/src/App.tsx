import React from "react";
import PersonInfo from "./components/PersonInfo"; // Import the PersonInfo component
import jsonData from "./data.json"; // Import the JSON data
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <PersonInfo
        firstName={jsonData["first name"]}
        shortBio={jsonData["short bio"]}
        publicContacts={jsonData["public contacts"]}
      />
    </div>
  );
};

export default App;
