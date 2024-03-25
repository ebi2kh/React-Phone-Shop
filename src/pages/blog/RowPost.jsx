import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext ";
import { Route, Link } from "react-router-dom";
import Pagination from "./Pagination";
import "./RowPost.css";
function RowPost() {
  const { posts, currentPage, changePage, postsPerPage } =
    useContext(BlogContext);

  // Calculate the index of the first and last post on the current page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the posts for the current page
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);
  console.log(currentPosts);

  return (
    <div className="fade-in w-full md:w-8/12 lg:w-9/12">
      {currentPosts.map((post) => {
        return (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="fade-in flex flex-col sm:flex md:flex-row items-center shadow-sm p-2 mx-auto my-6 max-w-md md:max-w-full rounded-2xl bg-white "
          >
            <div className="md:ml-6 mb-3 md:mb-0">
              <img
                className="hover:scale-105 transition rounded-xl w-full md:w-auto mx-auto max-h-56"
                src={post.image}
                alt=""
              />
            </div>
            <div className="grid gap-y-5 w-full">
              <div className="text-lg opacity-80 mx-auto md:mx-0 md:h-10 pt-3 flex justify-start items-center">
                {post.title}
              </div>
              <div className="text-sm opacity-80 md:h-16 flex justify-start items-start">
                {post.content.split(" ").slice(0, 20).join(" ")}...
              </div>
              <div className="flex justify-end text-xs opacity-75 md:gap-x-2 mx-auto md:mx-0">
                <div>{post.author}</div>
                <div>{post.date.toLocaleDateString()}</div>
              </div>
            </div>
          </Link>
        );
      })}

      {/* Render the pagination buttons */}

      <Pagination totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default RowPost;
