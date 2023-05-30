import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const message = `Current State is{"auther":${name},"rating":"${rating}","comment":"${comment}"}`;
  const submit = () => {
    if (name.length < 2) {
      alert("Name must be between 2 and 15 characters");
    } else if (name.length > 15) {
      alert("Name must be between 2 and 15 characters");
    } else {
      alert(message);
    }
  };

  return (
    <div className="App">
      <h1>Submit comment</h1>
      <form className="form">
        <div className="formContent">
          <label htmlFor="">Rating</label> <br />
          <select
            className="formInput"
            name=""
            id="inputRating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>{" "}
          <br />
        </div>
        <div className="formContent">
          <label htmlFor="">Your Name</label> <br />
          <input
            className="formInput"
            type="text"
            placeholder="Enter Name"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
        </div>
        <div className="formContent">
          <label htmlFor="">Comment</label>
          <br />
          <textarea
            className="formInput"
            name=""
            id="inputTextarea"
            // cols="10"
            // rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>{" "}
          <br />
        </div>
        <button type="submit" onClick={submit} className="submitButton">
          submit
        </button>{" "}
        <br />
      </form>
    </div>
  );
}

export default App;
