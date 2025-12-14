import React, { useState } from "react";
import From from "./components/From";
import Notes from "./components/Notes";
const App = () => {
  const [notes, setnotes] = useState([]);

  const DeleteNote = (index) => {
    setnotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row">
      <From notes={notes} setnotes={setnotes} />
      <Notes notes={notes} DeleteNote={DeleteNote} />
    </div>
  );
};

export default App;
