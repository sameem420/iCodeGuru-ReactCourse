import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from 'react'

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;