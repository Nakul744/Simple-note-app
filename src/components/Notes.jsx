import React from "react";
import { X } from 'lucide-react';

const Notes = ({ notes,DeleteNote }) => {



  // <-- FIXED
  return (
    <div className="h-1/2 lg:h-screen lg:w-1/2 overflow-y-scroll scrollbar-hide bg-gray-700">
      <h1 className="p-5 text-center text-2xl bg-gray-900 text-white">
        Your Notes
      </h1>

      <div className="flex flex-wrap p-5 m-5">
        {notes.map(
          (
            note,
            idx // <-- FIXED + RETURN
          ) => (
            <div
              className="border h-70 w-50 rounded-2xl bg-[url('https://thumbs.dreamstime.com/b/elevate-your-notes-unique-paper-backgrounds-add-touch-creativity-to-your-notes-our-stunning-paper-note-background-273307091.jpg')] bg-cover bg-center flex flex-col m-5"
              key={idx}
            >
              <div className=" h-9 text-center py-3 text-2xl text-shadow-2xs ">
                {note.heading}
              </div>
              <div className="mx-6 my-3  h-43.5 rounded-2xl  p-2  overflow-y-auto scrollbar-hide ">
                <p>
                  {note.note}
                </p>
              </div>
              <div className="justify-center flex  ">
                <button onClick={() => DeleteNote(idx)} className="bg-red-400 px-1.5 rounded-2xl py-1"><X /></button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Notes;
