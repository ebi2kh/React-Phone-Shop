import React from "react";

function SingleProduct() {
  return (
    <section>
      <div className="container-fluid product">
        <div className="row mx-lg-4 mx-0">
          <div className="product-head px-0">
            <div className="row">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb pb-3 pt-4 mb-0 fs-small">
                  <li className="breadcrumb-item text-muted">
                    <a href="#">خانه</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">محصولات</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    لپتاپ مدل Galaxy A50 SM-A505F/DS
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="product-body px-0 mb-4">
            <div className="row d-flex align-items-start">
              <div className="col-lg-4 pb-right px-0 py-2 position-relative border-end">
                <div
                  className="owl-carousel owl-progallery mx-auto rounded px-lg-3 owl-rtl owl-loaded owl-drag"
                  data-slider-id={1}
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: 2102,
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: "525.455px" }}
                      >
                        <div>
                          <img
                            src="img/product4.webp"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "525.455px" }}>
                        <div>
                          <img
                            src="img/product5.webp"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "525.455px" }}>
                        <div>
                          <img
                            src="img/product6.webp"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "525.455px" }}>
                        <div>
                          <img
                            src="img/product3.webp"
                            className="w-100"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <span aria-label="Next">›</span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                    <button role="button" className="owl-dot">
                      <span />
                    </button>
                  </div>
                </div>
                <div
                  className="owl-thumbs px-0 d-flex-c-c px-3"
                  data-slider-id={1}
                >
                  <button
                    className="owl-thumb-item bg-wihte shadow-bm rounded p-1 mx-1"
                    data-fancybox="gallery"
                    href="img/product4.webp"
                  >
                    <img src="img/product4.webp" alt="" />{" "}
                  </button>
                  <button
                    className="owl-thumb-item bg-wihte shadow-bm rounded p-1 mx-1"
                    data-fancybox="gallery"
                    href="img/product5.webp"
                  >
                    <img src="img/product5.webp" alt="" />{" "}
                  </button>
                  <button
                    className="owl-thumb-item bg-wihte shadow-bm rounded p-1 mx-1"
                    data-fancybox="gallery"
                    href="img/product6.webp"
                  >
                    <img src="img/product6.webp" alt="" />{" "}
                  </button>
                  <button
                    className="owl-thumb-item bg-wihte shadow-bm rounded p-1 mx-1"
                    data-fancybox="gallery"
                    href="img/product3.webp"
                  >
                    <img src="img/product3.webp" alt="" />{" "}
                  </button>
                </div>
              </div>
              <div className="col-lg-8 px-0 mt-4 mt-lg-0">
                <div className="row d-flex align-items-start mx-0">
                  <div className="col-lg-7 px-4 ps-lg-4 pe-lg-0 pro-inf mx-0 px-0">
                    <h2 className="fs-6 fw-bold txt-muted mb-2 pro-inf-title">
                      لپ تاپ 15.6 اینچی ایسوس مدل ROG Strix G513IE-HN060
                    </h2>
                    <span className="text-muted fs-small d-block">
                      Electric Screwdriver
                    </span>
                    <div className="pri-code col-12 mt-1">
                      <span> کد کالا : 1450 </span>
                    </div>
                    <div className="category">
                      <span className="text-muted">
                        {" "}
                        دسته بندی :{" "}
                        <a href="#" className="text-danger">
                          {" "}
                          لپ تاپ و الترابوک{" "}
                        </a>{" "}
                      </span>
                      <span className="text-muted border-start ps-2">
                        {" "}
                        برند{" "}
                        <a href="#" className="text-danger">
                          {" "}
                          اپل{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="product-informations mt-3">
                      <p className="text-muted mb-0"> مشخصات محصول </p>
                      <ul className="p-0">
                        <li>
                          <p>
                            {" "}
                            سری پردازنده :{" "}
                            <span className="text-danger"> Ryzen 7 </span>{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            ظرفیت حافظه RAM :{" "}
                            <span className="text-danger"> 8 گیگابایت </span>
                          </p>
                        </li>
                        <li className="d-flex justify-content-start">
                          <p>
                            {" "}
                            نوع حافظه RAM :{" "}
                            <span className="text-danger"> DDR4 </span>{" "}
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            سازنده پردازنده گرافیکی :{" "}
                            <span className="text-danger"> NVIDIA</span>
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            اندازه صفحه نمایش ;{" "}
                            <span className="text-danger"> 15.6 اینچ </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            {" "}
                            دقت صفحه نمایش :{" "}
                            <span className="text-danger">
                              {" "}
                              1080 × 1920 پیکسل - Full HD{" "}
                            </span>
                          </p>
                        </li>
                        <li className="d-flex justify-content-start">
                          <p>
                            {" "}
                            طبقه‌بندی :{" "}
                            <span className="text-danger">
                              {" "}
                              مخصوص بازی، کاربری عمومی{" "}
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="select-color ">
                      <p className="text-muted mb-2"> انتخاب رنگ </p>
                      <div className="w-100 d-flex alight-items-center justify-content-start px-0 sel-color">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            {" "}
                            <div
                              className="color"
                              style={{ backgroundColor: "#ffffff" }}
                            >
                              {" "}
                            </div>{" "}
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            {" "}
                            <div
                              className="color"
                              style={{ backgroundColor: "#2e2e2e" }}
                            >
                              {" "}
                            </div>{" "}
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            {" "}
                            <div
                              className="color"
                              style={{ backgroundColor: "#fd1d1d" }}
                            >
                              {" "}
                            </div>{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 mt-3 mt-lg-0">
                    <div className="col-12 mx-0 pt-3 pb-2 px-4 border d-flex-c-c flex-column">
                      <div className="d-flex-c-c">
                        <div className="bg-red timer text-light d-flex-c-c flex-column rounded shadow-bm mb-0 mx-1">
                          <p className="mb-0">23</p> <span> ثانیه </span>{" "}
                        </div>
                        <div className="bg-red timer text-light d-flex-c-c flex-column rounded shadow-bm mb-0 mx-1">
                          <p className="mb-0">59</p> <span> دقیقه </span>{" "}
                        </div>
                        <div className="bg-red timer text-light d-flex-c-c flex-column rounded shadow-bm mb-0 mx-1">
                          <p className="mb-0">12</p> <span> ساعت </span>{" "}
                        </div>
                        <div className="bg-red timer text-light d-flex-c-c flex-column rounded shadow-bm mb-0 mx-1">
                          <p className="mb-0">0</p> <span> روز </span>{" "}
                        </div>
                      </div>
                      <span className="text-muted fs-small mt-3">
                        {" "}
                        زمان باقیمانده تا پایان تخفیف{" "}
                      </span>
                    </div>
                    <div className="col-12 mx-0 mt-2 py-3 px-3 border d-flex-c-c flex-column">
                      <div className="d-flex-c-c w-100 flex-column">
                        <div className="box-buy text-muted">
                          <i className="far fa-box-check pe-3" />{" "}
                          <span>
                            {" "}
                            گارانتی ۶ ماهه تعویض بازرگانی پارس پردیس{" "}
                          </span>
                        </div>
                        <div className="box-buy text-muted">
                          <i className="far fa-bookmark pe-3 ps-1" />{" "}
                          <span className="text-light py-1 bg-success rounded px-2 me-2">
                            {" "}
                            موجود در انباری{" "}
                          </span>{" "}
                          <span> ارسال پس از 4 روز کاری </span>
                          {/* <i class="far fa-bookmark pe-3"></i> <span class="text-light py-1 bg-red rounded px-2 me-2"> موجود در انباری </span> <span> در حال حاضر  ناموجود است </span> */}
                        </div>
                        <div className="box-buy text-muted">
                          <i className="far fa-info-circle pe-3" />
                          <span>
                            {" "}
                            امکان برگشت کالا در گروه ساعت هوشمند با دلیل "انصراف
                            از خرید" تنها در صورتی مورد قبول است که پلمب کالا
                            باز نشده باشد.{" "}
                          </span>
                        </div>
                        <div className="box-price justify-content-betwwen text-muted w-100">
                          <div>
                            <i className="fas fa-sack-dollar text-warning pe-3" />{" "}
                            <span> قیمت محصول </span>
                          </div>
                          <div className="d-flex align-items-center justify-content-end flex-column">
                            <div className="text-muted">
                              {" "}
                              <del className="text-danger pe-2">
                                {" "}
                                2,500,000{" "}
                              </del>{" "}
                              <span className="bg-red px-2 text-light text-center rounded">
                                {" "}
                                8%{" "}
                              </span>
                            </div>
                            <div className="text-muted w-100 py-0">
                              {" "}
                              <span className="fs-5 yekanB">
                                2,000,000{" "}
                              </span>{" "}
                              <span>تومان</span>
                            </div>
                          </div>
                        </div>
                        <button className="w-100 btn bg-red rounded py-2 text-light fs-small fw-bold mt-3">
                          {" "}
                          افزودن به سبد خرید{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-footer fs-small px-0 mb-4">
            <div className="border-bottom pb-3">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link px-3 active"
                    id="descriptions-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#descriptions-tab-page"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    توضیحات کالا
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link px-3"
                    id="technical-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#technical-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    مشخصات فنی
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link px-3"
                    id="comments-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#comments-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    نظرات{" "}
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="descriptions-tab-page"
                  role="tabpanel"
                  aria-labelledby="descriptions-tab"
                  tabIndex={0}
                >
                  <p className="text-muted mt-4">
                    {" "}
                    لپ ‌تاپ ROG Strix G513IE-HN060 از محصولات شرکت «ایسوس» محسوب
                    می‌شود که با طراحی زیبا روانه بازار شده است. بدنه‌ شیک ROG
                    Strix G513IE-HN060 به‌ گونه‌ای طراحی شده که لپ‌ تاپی رده
                    ‌بالا را نوید می‌‌دهد. این لپ تاپ و 2.1 کیلوگرم وزن دارد و
                    برای جا‌به‌‌جایی دائمی آن مشکل خاصی نخواهید داشت. صفحه
                    ‌نمایش 15.6 اینچی این محصول دارای وضوح تصویر FullHD است.
                    پورت‌های USB و HDMI روی لبه ‌های این مدل از ایسوس دیده
                    می‌‌شود که با استفاده از آن‌‌ها می‌توان انواع ابزارهای جانبی
                    را بدون نیاز{" "}
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="technical-tab-pane"
                  role="tabpanel"
                  aria-labelledby="technical-tab"
                  tabIndex={0}
                >
                  <div className="row my-4 mx-lg-4">
                    <div className="col-12 px-4 px-lg-0">
                      <div className="row">
                        <div className="d-flex-c-b flex-wrap w-100 px-0 mb-2">
                          <div className="rounded py-3 technical-right px-3">
                            وزن
                          </div>
                          <div className="rounded py-3 technical-left px-3">
                            ۲.۱ کیلوگرم{" "}
                          </div>
                        </div>
                        <div className="d-flex-c-b flex-wrap col-12 px-0 mb-2">
                          <div className="rounded py-3 technical-right px-3">
                            ابعاد
                          </div>
                          <div className="rounded py-3 technical-left px-3">
                            ۳۵۴x۲۵۹x۲۵.۹ میلی‌متر{" "}
                          </div>
                        </div>
                        <div className="d-flex-c-b flex-wrap col-12 px-0 mb-2">
                          <div className="rounded py-3 technical-right px-3">
                            سازنده پردازنده
                          </div>
                          <div className="rounded py-3 technical-left px-3">
                            AMD
                          </div>
                        </div>
                        <div className="d-flex-c-b flex-wrap col-12 px-0 mb-2">
                          <div className="rounded py-3 technical-right px-3">
                            سری پردازنده
                          </div>
                          <div className="rounded py-3 technical-left px-3">
                            {" "}
                            Ryzen ۷
                          </div>
                        </div>
                        <div className="d-flex-c-b flex-wrap col-12 px-0 mb-2">
                          <div className="rounded py-3 technical-right px-3">
                            مدل پردازنده
                          </div>
                          <div className="rounded py-3 technical-left px-3">
                            {" "}
                            ۴۸۰۰H{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="comments-tab-pane"
                  role="tabpanel"
                  aria-labelledby="comments-tab"
                  tabIndex={0}
                >
                  <div className="w-100 mt-3">
                    <div className="row">
                      <div className="col-12 commemts-head border-bottom pb-2 d-flex-c-c flex-wrap px-4">
                        <div className="col-lg-6 col-12 pe-lg-5">
                          {/* <span class="text-warning"> لطفا برای ثبت نظر ابتدا وارد حساب کاربری خود شوید </span> */}
                          <form action="#" method="get">
                            <div className="form-group">
                              <textarea
                                name=""
                                className="form-control fw-bold fs-small pt-3"
                                id=""
                                cols={6}
                                rows={6}
                                placeholder="نظر یا پرسش خود را مطرح کنید ..."
                                defaultValue={""}
                              />
                            </div>
                            <button className="btn bg-red rounded px-3 py-2 text-light mt-2">
                              {" "}
                              ثبت نظر{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-6 col-12 pb-3 pb-lg-5 mt-2 mt-lg-0">
                          <p className="mb-2 text-dark">
                            {" "}
                            نظرات و پرسش و پاسخ{" "}
                          </p>
                          <span className="text-muted">
                            {" "}
                            برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود
                            شوید. اگر این محصول را قبلا از دیجی‌کالا خریده
                            باشید، نظر شما به عنوان مالک محصول ثبت خواهد شد.{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 commemts-body pb-2 d-flex-c-c mt-4 px-0">
                        <div className="col-lg-12 cm-card bg-light py-3">
                          <div className="cm-card-head d-flex-c-b px-3">
                            <div className="d-flex-c-b flex-wrap w-100">
                              <div className="d-flex justify-content-start col-12 col-lg-6">
                                <img
                                  src="img/fc377d0cd92124769962556a3bcfb094.jpg"
                                  className="rounded-circle"
                                  alt=""
                                />
                                <div className="ms-3">
                                  <span className="text-muted mb-1 d-block">
                                    {" "}
                                    وصال علی زاده{" "}
                                  </span>
                                  <span className="text-muted">
                                    {" "}
                                    در تاریخ : 1401/04/24{" "}
                                  </span>
                                  <div className="text-warning mt-1">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-end col-12 col-lg-6">
                                <div className="text-muted px-3 rounded my-1 text-light fs-small py-1">
                                  {" "}
                                  خرید این محصول را پیشنهاد میکنم{" "}
                                </div>
                                <button className="btn btn-sm bg-red text-light px-2">
                                  {" "}
                                  پاسخ{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="cm-card-body d-flex-c-b px-3">
                            <div className="d-flex-c-b w-100">
                              <p className="mb-0 text-muted mt-2">
                                پاسخ فروشنده : حسن لورم ایپسوم متن ساختگی با
                                تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                                مجله در ستون و سطرآنچنان که لازم است و برای
                                شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                با هدف بهبود ابزارهای کاربردی می باشد.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-10 cm-card bg-wihte mt-3 mx-auto py-3">
                            <div className="cm-card-head d-flex-c-b px-3">
                              <div className="d-flex-c-b flex-wrap w-100">
                                <div className="d-flex justify-content-start col-12 col-lg-6">
                                  <img
                                    src="img/fc377d0cd92124769962556a3bcfb094.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                  <div className="ms-3">
                                    <span className="text-muted mb-1 d-block">
                                      {" "}
                                      وصال علی زاده{" "}
                                    </span>
                                    <span className="text-muted">
                                      {" "}
                                      در تاریخ : 1401/04/24{" "}
                                    </span>
                                    <div className="text-warning mt-1">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-end col-12 col-lg-6">
                                  <div className="text-muted px-3 rounded my-1 text-light fs-small py-1">
                                    {" "}
                                    خرید این محصول را پیشنهاد میکنم{" "}
                                  </div>
                                  <button className="btn btn-sm bg-red text-light px-2">
                                    {" "}
                                    پاسخ{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="cm-card-body d-flex-c-b px-3">
                              <div className="d-flex-c-b w-100">
                                <p className="mb-0 text-muted mt-2">
                                  پاسخ فروشنده : حسن لورم ایپسوم متن ساختگی با
                                  تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                  از طراحان گرافیک است. چاپگرها و متون بلکه
                                  روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                  و برای شرایط فعلی تکنولوژی مورد نیاز و
                                  کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                  می باشد.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 widget-right mt-3 px-3 py-0">
              <div className="row">
                <div className="widget-right-header d-flex-c-b">
                  <span className="text-muted fs-6 pt-3 pb-2">
                    {" "}
                    محصولات مشابه{" "}
                  </span>
                  <a href="#" className="fs-small text-muted">
                    {" "}
                    مشاهده همه
                  </a>
                </div>
                <div className="my-4">
                  <div className="owl-carousel owl-widget-Similar owl-theme owl-rtl owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(1146px, 0px, 0px)",
                          transition: "all 0s ease 0s",
                          width: 4583,
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product4.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product8.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product6.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product10.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product4.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product8.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product6.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "562.803px", marginLeft: 10 }}
                        >
                          <div className="item my-2">
                            <div className="box-widge rounded bg-wihte">
                              <div className="wnd-right-box-head px-4 rounded position-relative ">
                                <img
                                  src="img/product10.webp"
                                  className="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div className="wnd-right-box-body px-2 mt-2 text-center ">
                                <a href=" " className="link text-muted fs-6 ">
                                  {" "}
                                  لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                                </a>
                              </div>
                              <div className="w-100 px-2">
                                <div className=" d-flex-c-b mt-2 ">
                                  <span className="text-success fs-small">
                                    {" "}
                                    54,000,000 تومان
                                  </span>
                                  <span className="text-warning fs-small">
                                    {" "}
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                      >
                        <i className="far fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                      >
                        <i className="far fa-chevron-left" />
                      </button>
                    </div>
                    <div className="owl-dots">
                      <button role="button" className="owl-dot active">
                        <span />
                      </button>
                      <button role="button" className="owl-dot">
                        <span />
                      </button>
                      <button role="button" className="owl-dot">
                        <span />
                      </button>
                      <button role="button" className="owl-dot">
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
