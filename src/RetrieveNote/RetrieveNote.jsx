import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RetrieveNote = () => {
  const deleteNote = (id) => {
    //       console.log(id);

    fetch(`https://skill-street-backend-development-internship-server.vercel.app/trash/${id}`, {
      method: "DELETE",
    });
  };

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://skill-street-backend-development-internship-server.vercel.app/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  }, []);

  //       console.log(notes);

  return (
    <div className="mx-5 mt-5">
      {notes.length > 0 ? (
        notes.map((note) => (
          <div
            key={note._id}
            className="collapse collapse-arrow bg-base-200 my-1"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title">{note.title}</div>
            <div className="collapse-content">
              <p className="text-2xl">{note.note}</p>
              <p className="mt-5">{note.date}</p>
              <div className="flex justify-around">
                <Link to={`/updateNote/${note._id}`}>
                  <button className="btn btn-primary mt-5">Update</button>
                </Link>
                <Link>
                  <button
                    className="btn btn-primary mt-5"
                    onClick={() => deleteNote(note._id)}
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-4xl font-bold text-center">No note to show</p>
      )}
    </div>
  );
};

export default RetrieveNote;
