import { Link } from "react-router-dom";

const CreateNote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = e.target.noteInput.value;
    const noteObject = { note: note };
    console.log(noteObject);
    fetch("https://skill-street-backend-development-internship-server.vercel.app/createNote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(noteObject),
    });

  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-3/5">
        <label className="form-control ">
          <div className="label">
            <span className="label-text text-2xl font-semibold">
              Write your note
            </span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write here"
            name="noteInput"
          ></textarea>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
          <div className="divider">OR</div>
          <Link to="/" className="flex justify-center">
            <button className="btn btn-primary mt-2">Home</button>
          </Link>
        </label>
      </form>
    </div>
  );
};

export default CreateNote;
