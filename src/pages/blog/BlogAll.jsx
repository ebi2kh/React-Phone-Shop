import React from "react";
import GalleryPost from "./GalleryPost";
import RowPost from "./RowPost";
import FavoritePost from "./FavoritePost";
import NewPost from "./NewPost";

function BlogAll() {
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="my-5 lg:my-10 p-1 md:p-3">
        <GalleryPost />
        <div className="md:flex w-full mt-14 gap-x-7">
          <RowPost />
          <NewPost />
          {/* <FavoritePost /> */}
        </div>
      </div>
    </div>
  );
}

export default BlogAll;
