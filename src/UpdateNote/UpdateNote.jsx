import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateNote = () => {
  const { id } = useParams();
  //   console.log(id);
  const [note, setNote] = useState("");

  useEffect(() => {
    fetch(`https://skill-street-backend-development-internship-server.vercel.app/notes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNote(data);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.titleInput.value;
    const note = form.contentInput.value;
    const date = form.dateInput.value;

    const noteObject = { title, note, date };
    console.log(noteObject);

    fetch(`https://skill-street-backend-development-internship-server.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(noteObject),
    });
  };
  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-3/5">
          <label className="form-control ">
            <div className="label">
              <span className="label-text text-2xl font-semibold">
                Update your note
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              defaultValue={note.title}
              placeholder="Title"
              name="titleInput"
            ></textarea>
            <textarea
              className="textarea textarea-bordered my-4"
              defaultValue={note.note}
              placeholder="Content"
              name="contentInput"
            ></textarea>
            <textarea
              className="textarea textarea-bordered"
              value={new Date()}
              name="dateInput"
            ></textarea>
            <button type="submit" className="btn btn-primary mt-2">
              Update
            </button>
            <div className="divider">OR</div>
            <Link to="/" className="flex justify-center">
              <button className="btn btn-primary mt-2">Home</button>
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
