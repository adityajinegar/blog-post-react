import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://blog-post-reactjs.herokuapp.com/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
    </div>
  );
};

export default Home;
