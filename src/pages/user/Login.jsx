import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center text-right h-screen w-96 mx-auto">
      <div className="shadow-xl rounded-2xl p-8 bg-white">
        <form action="">
          <div className="mb-2">
            <a href="index.html">
              <img
                src="assets/image/logo.png"
                alt=""
                className="w-36 mx-auto"
              />
            </a>
          </div>
          <div className="opacity-80 text-lg mb-5">ورود</div>
          <div className="text-xs opacity-70 mb-2">
            شماره همراه یا ایمیل خود را وارد کنید:
          </div>
          <div className="mb-2">
            <input
              className="w-full drop-shadow-lg outline-none rounded-2xl py-2 text-center"
              type="text"
            />
          </div>
          <div className="text-xs opacity-70 mb-2">رمز عبور</div>
          <div className="mb-2">
            <input
              className="w-full drop-shadow-lg outline-none rounded-2xl py-2 text-center"
              type="password"
            />
          </div>
          <div className="text-center mt-5 mb-3">
            <button
              className="bg-red-500 hover:bg-red-600 transition text-white opacity-80 rounded-2xl w-full py-2"
              type="submit"
            >
              ورود
            </button>
          </div>
          <div className="text-xs opacity-80">
            ثبت نام یا ورود شما به منظور پذیرش
            <a href="#" className="text-red-500">
              قوانین و مقررات
            </a>
            ایران مارکت می باشد
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
