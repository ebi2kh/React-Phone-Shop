import React from "react";
import "../css/bootstrap.css";
import "../css/min.css";
import "../css/owl.css";
import "../css/responsive.css";
import zarinpalllogofooter from "../img/zarinpalllogofooter.webp";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid footer shadow-sm">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="row ">
                <div className="footer-head pt-4 px-5 px-lg-5">
                  <div className="row px-0 px-lg-5 mt-2">
                    <div className="col-md-2 col-6 px-0 footer-item-links d-flex flex-column">
                      <span className="text-dark fw-bold">دسترسی سریع</span>
                      <ul className="ps-4 mt-3">
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            فروشگاه{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            درباره ما{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            تماس با ما{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            سبد خرید
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            صفحه اصلی
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-2 col-6 px-0 footer-item-links d-flex flex-column">
                      <span className="text-dark"> محصولات الکترونیک </span>
                      <ul className="ps-4 mt-3">
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            لپ تاپ{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            کیس اسمبل شده{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            هدفون و هندزفری{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            لوازم جانبی گوشی{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            لوازم جانبی لب تاپ{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 px-0 footer-item-links d-flex ms-lg-5 flex-column">
                      <span className="text-dark"> تماس با ما </span>
                      <ul className="ps-4 mt-3">
                        <li className="fil-li">
                          <a href="#" className="fil-links fcb text-light">
                            {" "}
                            <i className="far fa-user-headset" /> 09901595095{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> پارس آباد ،
                            خیابان شهید صدوقی ، دفتر مرکزی{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            <i className="fas fa-envelope" />{" "}
                            alizadevesal@gmail.com{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            {" "}
                            <i className="fab fa-instagram-square" />{" "}
                            vesalalizadeh.ir{" "}
                          </a>
                        </li>
                        <li className="fil-li">
                          <a href="#" className="fil-links">
                            <i className="fab fa-whatsapp-square" /> 09901595095
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 px-0 ms-0 d-flex justify-content-center">
                      <ul className="ps-4 mt-md-3 d-flex-c-c">
                        <li>
                          <a href="#">
                            <img
                              src={zarinpalllogofooter}
                              className="col-10 col-md-6 col-lg-10"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="img/enamad.webp"
                              className="col-10 col-md-6 col-lg-10"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="img/samandehi.webp"
                              className="col-10 col-md-6 col-lg-10"
                              alt=""
                            />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-body ">
                  <div className="row px-3 px-md-5 d-flex-c-b py-3 py-lg-5 ">
                    <div className="col-md-3 d-flex justify-content-center">
                      <img
                        src="img/logo-light.png"
                        className="footer-body-img mx-auto"
                        alt=""
                      />
                    </div>
                    <div className="col-md-9">
                      <p className="text-light paragraph mb-1">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                        هدف بهبود می باشد.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="footer-footer bg-wihte d-flex-c-b py-3">
                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <span className="text-muted mb-1 mb-lg-0">
                        {" "}
                        تمامی حقوق برای وب پارادیس محفوظ می باشد{" "}
                      </span>{" "}
                    </div>
                    <div className="col-md-6 text-end">
                      {" "}
                      <span className="text-muted">
                        {" "}
                        طراح وبسایت وصال علی زاده{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
