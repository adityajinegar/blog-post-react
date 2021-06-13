import { useState } from "react";
import BlogList from "./BlogList";

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
      <BlogList blogs={blogs} title="All Blogs!"></BlogList>
    </div>
  );
};

export default Home;
