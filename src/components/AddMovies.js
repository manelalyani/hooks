import React from "react";
import { useState } from "react";

const AddMovies = ({ handleAddprops }) => {
  // get data from inputs
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState("");
  // submit
  const add = (e) => {
    e.preventDefault();
    const newmovie = { title, description, image };
    handleAddprops(newmovie);
    setTitle("");
    setdescription("");
    setImage("");

  };
  return (
    <>
      <form onSubmit={add}>
        <div>
          <label htmlFor="">Movie Image</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Movie Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Movie description </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <button>submit</button>
      </form>
    </>
  );
};

export default AddMovies;
