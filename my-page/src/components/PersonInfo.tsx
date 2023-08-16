import React from "react";

interface PersonInfoProps {
  firstName: string;
  shortBio: string;
  publicContacts: {
    email: string;
    twitter: string;
    linkedin: string;
  };
}

const PersonInfo: React.FC<PersonInfoProps> = ({
  firstName,
  shortBio,
  publicContacts,
}) => (
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

export default PersonInfo;
