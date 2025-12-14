import React, { useState } from "react";

const From = ({ notes, setnotes }) => {
  const [heading, setheading] = useState("");
  const [note, setnote] = useState("");

  const submitHandler = (e) => {
    console.log(heading, note);


    e.preventDefault();
    if(heading!='' || note!=''){
        setnotes([...notes, { heading, note }]);

    }
    

    setheading("");
    setnote("");
  };
  return (
    <div className="h-1/2 lg:h-screen lg:w-1/2 flex flex-col bg-gray-800 items-center justify-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col  justify-center items-center gap-5 border p-15 rounded-2xl  lg:w-90 bg-gray-500 "
      >
        <input
          type="text"
          name="heading"
          placeholder="Enter the heading "
          className="border p-4 rounded-2xl bg-gray-300 "
          value={heading}
          onChange={(e) => {
            setheading(e.target.value);
          }}
        />
        <textarea
          name="note"
          id=""
          className="p-5 border rounded-2xl bg-gray-300"
          placeholder="Enter the notes here.."
          value={note}
          onChange={(e) => {
            setnote(e.target.value);
          }}
        ></textarea>
        <button className="border h-10 rounded-xl bg-black text-white w-50">
          Add Note...
        </button>
      </form>
    </div>
  );
};

export default From;
