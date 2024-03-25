import React, { createContext, useState, useMemo } from "react";
import data from "../blogData";
// Create Context Object
export const BlogContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const BlogContextProvider = (props) => {
  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Function to change the page
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    // window.scrollTo(0, 30); // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Calculate the top favorites whenever 'posts' changes
  const topFavorites = useMemo(() => {
    return [...posts].sort((a, b) => b.favorite - a.favorite).slice(0, 5);
  }, [posts]);

  const newestPosts = useMemo(() => {
    return [...posts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  }, [posts]);
  return (
    <BlogContext.Provider
      value={{
        posts,
        setPosts,
        topFavorites,
        newestPosts,
        changePage,
        postsPerPage,
        currentPage,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
