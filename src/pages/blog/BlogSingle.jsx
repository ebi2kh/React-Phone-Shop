import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext ";
import { useParams } from "react-router-dom";
import NewPost from "./NewPost";
function BlogSingle({ match }) {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const { posts } = useContext(BlogContext);
  const post = posts.find((p) => p.id === parseInt(id));
  console.log(post);
  return post ? (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className=" md:flex lg:flex mt-0 mb-5 lg:mt-10 lg:mb-8 p-1 md:p-3">
        <div className="md:flex w-full gap-x-7  md:w-8/12 lg:w-9/12">
          <div className="w-full md:w-8/12 lg:w-9/12">
            <span className="flex flex-col py-2 px-3 mt-6 lg:mt-0 max-w-5xl rounded-2xl bg-white">
              <div>
                <div className="flex flex-wrap gap-x-3 text-xs opacity-75 py-1">
                  <div className="flex">
                    <div>تاریخ: </div>
                    <div>{post.date.toLocaleDateString()}</div>
                  </div>
                  <div className="flex">
                    <div>نویسنده: </div>
                    <div>{post.author}</div>
                  </div>
                  <div className="flex">
                    <div>دسته بندی: </div>
                    <div>{post.category}</div>
                  </div>
                  <div className="flex">
                    <div>امتیاز: </div>
                    <div>4.2</div>
                  </div>
                </div>
              </div>
              <img
                className="rounded-2xl my-3"
                src={post.image}
                alt="not found"
              />
              <div>
                <div className="text-2xl opacity-95 py-3">{post.title}</div>
                <div className="opacity-70 pb-3 leading-6 text-sm">
                  {post.content}
                </div>
              </div>
            </span>
            {/* BOX COMMENTS */}
          </div>
        </div>{" "}
        <NewPost />
      </div>
    </div>
  ) : (
    <p>Post not found</p>
  );
}

export default BlogSingle;
