import React, { useState, useContext } from "react";
import contexts from "../../context/Context";
export default function Upload() {
  const upload = useContext(contexts.Notecontext);
  const [details, setDetails] = useState({
    title: "",
    description: "",
    tags: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(details);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (details.title.length === 0) {
      alert("please Provide Credentials");
    } else {
      upload.upload(details);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={details.title}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          onChange={handleChange}
          value={details.description}
          name="description"
          placeholder="Description"
        />
        <input
          type="text"
          onChange={handleChange}
          value={details.tags}
          name="tags"
          placeholder="Tags"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
