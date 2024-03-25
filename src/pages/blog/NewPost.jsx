import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext ";
function NewPost() {
  const { newestPosts } = useContext(BlogContext);
  return (
    <div className="w-full md:w-4/12 lg:w-3/12 max-w-xl mx-auto">
      <div className="lg:block p-3 space-y-4 mx-2 md:ml-3 bg-white rounded-2xl">
        <div className="opacity-90 border-b pb-3">جدیدترین مقاله ها:</div>
        {newestPosts.map((post) => {
          return (
            <a
              key={post.id}
              href="blog(single).html"
              className="flex flex-row items-center p-1"
            >
              <div className="md:ml-3  mb-3 md:mb-0">
                <img
                  className="hover:scale-105 transition rounded-lg w-44"
                  src={post.image}
                  alt=""
                />
              </div>
              <div className="w-full px-3 md:px-0">
                <div className="mx-auto text-sm h-10 opacity-90">
                  {post.title}
                </div>
                <div className="text-xs md:flex justify-start opacity-75  mx-auto md:mx-0 pb-3">
                  <div>{post.date.toLocaleDateString()}</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default NewPost;
