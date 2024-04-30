import React from "react";

import data from "../../blogData";
import { Link } from "react-router-dom";
function BlogSlider() {
  // Function to get 4 random unique indices for selecting unique blog posts
  const getRandomIndices = (dataLength, numItems) => {
    let indices = new Set();
    while (indices.size < numItems) {
      const randomIndex = Math.floor(Math.random() * dataLength);
      indices.add(randomIndex);
    }
    return Array.from(indices);
  };

  // Select 4 random blog posts
  const randomIndices = getRandomIndices(data.length, 8);
  const randomPosts = randomIndices.map((index) => data[index]);

  return (
    <div className="bg-white rounded-2xl py-8 shadow-xl my-10">
      <div className="flex justify-between px-5 md:px-10 items-center">
        <div className="text-red-500">خواندنی ها</div>
        <Link to={"/blog"}>
          <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
            مطالب بیشتر
            {/* <img className="w-4" src="assets/image/arrow-left.png" alt="" /> */}
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-5">
        {randomPosts.map((post) => {
          return (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
            >
              <div>
                <img
                  className="rounded-xl hover:scale-105 transition"
                  src={post.image}
                  alt=""
                />
              </div>
              <div className="text-sm opacity-90 py-5">{post.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BlogSlider;
