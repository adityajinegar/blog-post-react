import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new blog",
      body: "Lorem Ipsum...",
      author: "Aditya",
      id: 1,
    },
    {
      title: "Follow your heart",
      body: "Lorem Ipsum...",
      author: "Rajdeep",
      id: 2,
    },
    {
      title: "Welcome party!",
      body: "Lorem Ipsum...",
      author: "Rinkal",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
