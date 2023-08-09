import React from "react";
import "./App.css";

interface Contact {
  email: string;
  twitter: string;
  linkedin: string;
}

interface JsonData {
  "first name": string;
  "short bio": string;
  "public contacts": Contact;
}

const jsonData: JsonData = {
  "first name": "Dima",
  "short bio": "I love playing chess ♔",
  "public contacts": {
    email: "dmytro.olifir@gmail.com",
    twitter: "@olifirDD",
    linkedin: "linkedin.com/in/olifir.dd",
  },
};

const App: React.FC = () => {
  const {
    "first name": firstName,
    "short bio": shortBio,
    "public contacts": publicContacts,
  } = jsonData;

  return (
    <div>
      <h1>{firstName}</h1>
      <p>{shortBio}</p>
      <h2>Public Contacts</h2>
      <ul>
        <li>Email: {publicContacts.email}</li>
        <li>Twitter: {publicContacts.twitter}</li>
        <li>LinkedIn: {publicContacts.linkedin}</li>
      </ul>
    </div>
  );
};

export default App;
