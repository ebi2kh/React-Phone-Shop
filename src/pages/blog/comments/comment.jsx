import React from "react";

function comment() {
  return (
    <div className="flex flex-col py-4 px-4 my-6 max-w-5xl rounded-2xl bg-white">
      {/* UO COMMENTS */}
      <div>
        <div>نظرات</div>
        <div className="pr-5 opacity-70 text-xs">3نظر</div>
      </div>
      {/* COMMENT */}
      <div className="bg-gray-50 rounded-xl px-5 py-3 my-2">
        <div className="flex items-center">
          <div>
            <img className="w-10" src="assets/image/userNotImage.png" alt="" />
          </div>
          <div className="text-sm opacity-60 pr-1">
            نوشته شده توسط امیررضا کریمی
          </div>
        </div>
        <div className="opacity-60 text-sm py-3">
          لورم است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است.
        </div>
        <div>
          <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
            پاسخ
          </button>
        </div>
        {/* RESPONSE */}
        <div className="bg-gray-100 rounded-xl pl-2 pr-5 sm:pr-8 py-3">
          <div className="flex items-center">
            <div>
              <img
                className="w-10"
                src="assets/image/userNotImage.png"
                alt=""
              />
            </div>
            <div className="text-sm opacity-60 pr-1">
              پاسخ داده شده توسط امیررضا کریمی
            </div>
          </div>
          <div className="opacity-60 text-sm py-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحامه و مجله در ستون و سطرآنچنان که لازم است.
          </div>
          <div>
            <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
              پاسخ
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl px-5 py-3 my-2">
        <div className="flex items-center">
          <div>
            <img className="w-10" src="assets/image/userNotImage.png" alt="" />
          </div>
          <div className="text-sm opacity-60 pr-1">
            نوشته شده توسط امیررضا کریمی
          </div>
        </div>
        <div className="opacity-60 text-sm py-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهو است. چاپگرها و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که لازم است.
        </div>
        <div>
          <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
            پاسخ
          </button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl px-5 py-3 my-2">
        <div className="flex items-center">
          <div>
            <img className="w-10" src="assets/image/userNotImage.png" alt="" />
          </div>
          <div className="text-sm opacity-60 pr-1">
            نوشته شده توسط امیررضا کریمی
          </div>
        </div>
        <div className="opacity-60 text-sm py-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گ ستون و سطرآنچنان که لازم است.
        </div>
        <div>
          <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
            پاسخ
          </button>
        </div>
        {/* RESPONSE */}
        <div className="bg-gray-100 rounded-xl pl-2 pr-5 sm:pr-8 py-3">
          <div className="flex items-center">
            <div>
              <img
                className="w-10"
                src="assets/image/userNotImage.png"
                alt=""
              />
            </div>
            <div className="text-sm opacity-60 pr-1">
              پاسخ داده شده توسط امیررضا کریمی
            </div>
          </div>
          <div className="opacity-60 text-sm py-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکهلازم است.
          </div>
          <div>
            <button className="mr-auto px-2 sm:px-4 py-2 opacity-80 md:w-auto text-xs sm:text-sm xl:text-base flex justify-center items-center">
              پاسخ
            </button>
          </div>
        </div>
      </div>
      {/* BOX SENT COMMENT */}
      <div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
          >
            نام شما:
          </label>
          <input
            type="text"
            className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="mailTicket"
          className="inline-block mb-2 ml-1 font-semibold text-xs text-slate-700"
        >
          نظر شما:
        </label>
        <textarea
          cols={30}
          rows={5}
          className="text-sm block w-full rounded-lg border border-gray-400 bg-white px-3 py-2 font-normal text-gray-700 outline-none focus:border-red-300"
          defaultValue={""}
        />
      </div>
      <button className="inline-block px-8 py-2 ml-auto font-semibold text-center text-white bg-red-500 rounded-lg shadow-md text-xs">
        ارسال نظر
      </button>
    </div>
  );
}

export default comment;
