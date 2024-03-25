import img1 from "../assets/image/blog/lavazem.jpg";
import img2 from "../assets/image/blog/bag.jpg";
import img3 from "../assets/image/blog/car.jpg";
import img4 from "../assets/image/blog/chador.jpg";

function Blog() {
  return (
    <div className="bg-white rounded-2xl py-8 shadow-xl my-10">
      <div className="flex justify-between px-5 md:px-10 items-center">
        <div className="text-red-500">خواندنی ها</div>
        <a href="blog.html">
          <div className="transition px-4 py-2 rounded-xl flex justify-center items-center text-red-500 hover:text-red-600">
            مطالب بیشتر
            <img className="w-4" src="assets/image/arrow-left.png" alt="" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 gap-5">
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src={img1}
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">
            لوازم آشپزی مورد نیاز من.
          </div>
        </a>
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src={img2}
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">
            چه چیزهایی با خودم نیازه ببرم کوه؟
          </div>
        </a>
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src={img3}
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">
            چرا نباید در هوای بارانی در فصل زمستان و بهار آفرود بریم؟
          </div>
        </a>
        <a
          href="blog(single).html"
          className="shadow-lg rounded-3xl p-4 hover:text-red-600 transition"
        >
          <div>
            <img
              className="rounded-xl hover:scale-105 transition"
              src={img4}
              alt=""
            />
          </div>
          <div className="text-sm opacity-90 py-5">چادر ضد آب یا پارچه ای؟</div>
        </a>
      </div>
    </div>
  );
}

export default Blog;
