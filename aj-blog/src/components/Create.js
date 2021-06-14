import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Naruto");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.blog("New blog added.");
      setIsLoading(false);
      // history.go(-1); // -1 means go back 1 step in histoy, 1 for forward in history
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog Author:</label>

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Naruto">Naruto</option>
          <option value="Sasuke">Sasuke</option>
          <option value="Minato">Minato</option>
        </select>

        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Addding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
