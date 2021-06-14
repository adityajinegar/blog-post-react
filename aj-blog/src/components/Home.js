import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {




  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
    </div>
  );
};

export default Home;
