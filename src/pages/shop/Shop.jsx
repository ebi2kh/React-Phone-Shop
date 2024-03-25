import React from "react";

function Shop() {
  return (
    <section>
      <div className="container-fluid shop mb-5">
        <div className="row mx-lg-4 mx-0">
          <div className="shop-head px-0">
            <div className="row">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb pb-3 pt-4 mb-0 fs-small">
                  <li className="breadcrumb-item text-muted">
                    <a href="#">خانه</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    فروشگاه{" "}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="shop-body px-0">
            <div className="row d-flex align-items-start px-4 px-lg-0">
              <div className="col-lg-3 pe-0 pe-lg-3 px-0">
                <div className="d-flex-c-c flex-column bg-wihte border rounded mt-3 py-3 pb-2 px-3 overflow-hidden">
                  <div className="form-check form-switch w-100">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      فقط کالاهای موجود
                    </label>
                  </div>
                </div>
                <div className="d-flex-c-c flex-column bg-wihte border rounded mt-3 px-3 overflow-hidden">
                  <div className="sb-box-title w-100 py-2 position-relative">
                    <span className="text-muted fs-small fw-bold">
                      {" "}
                      دسته بندی ها{" "}
                    </span>
                  </div>
                  <div className="d-flex alight-items-center justify-content-start flex-wrap">
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        همه کالا ها
                      </label>
                    </div>
                    <div className="form-check w-100 fs-samll">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        لپ تاپ
                      </label>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        الترابوک
                      </label>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        سیستم خانگی
                      </label>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        لوازم جانبی
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex-c-c flex-column bg-wihte border rounded mt-3 px-3 overflow-hidden">
                  <div className="sb-box-title w-100 py-2 position-relative">
                    <span className="text-muted fs-small fw-bold"> برند </span>
                  </div>
                  <div className="d-flex alight-items-center justify-content-start flex-wrap">
                    <div className="form-group mb-2 w-100">
                      <input
                        className="form-control fs-small fw-bold"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="جستجوی برند ..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        همه برند ها
                      </label>
                    </div>
                    <div className="form-check w-100 fs-samll">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        APPLE
                      </label>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        ASUZE
                      </label>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        TSCO
                      </label>
                    </div>
                    <div className="form-check w-100">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label text-muted fs-samll"
                        htmlFor="flexCheckDefault"
                      >
                        LENOVO
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 px-0">
                <div className="shb-left px-0 col-12 pb-0">
                  <div className="row">
                    <div className="shbl-head d-flex alight-items-center border-bottom justify-content-start pb-3 w-100">
                      <div className="d-flex align-items-center justify-content-start w-100">
                        <div className="d-flex-c-b ms-2 shblh-btn-main w-100">
                          <div className="shblh-btn-main-right ">
                            <i className="fas fa-sort-amount-down pe-2 pt-2" />{" "}
                            <span className="fs-small">
                              {" "}
                              مرتب سازی بر اساس :{" "}
                            </span>
                            <a href="#" className="px-2 me-1">
                              {" "}
                              جدید ترین{" "}
                            </a>
                            <a href="#" className="px-2 me-1">
                              {" "}
                              پر فروش ترین{" "}
                            </a>
                            <a href="#" className="px-2 me-1">
                              {" "}
                              ارزان ترین{" "}
                            </a>
                            <a href="#" className="px-2 me-1">
                              {" "}
                              گران ترین{" "}
                            </a>
                            <a href="#" className="px-2 me-1">
                              {" "}
                              پیشنهاد خرید{" "}
                            </a>
                            <a href="#" className="px-2 me-1">
                              {" "}
                              تخفیفی ترین{" "}
                            </a>
                          </div>
                          <div className="pt-2 shblh-btn-main-right">
                            <a href="#"> 1095 کالا </a>
                          </div>
                          <div className="pt-2 d-none w-100 flex-wrap shblh-btn-main-mobile">
                            <div className="col-6 mb-2">
                              <i className="fas fa-sort-amount-down pe-2 pt-2" />{" "}
                              <span className="fs-small">
                                {" "}
                                مرتب سازی بر اساس :{" "}
                              </span>
                            </div>
                            <select
                              className="form-select col-6 fw-bold fs-small"
                              aria-label="Default select example"
                            >
                              <option value={1}>جدید ترین</option>
                              <option value={2}>پر فروش ترین</option>
                              <option value={3}>گران ترین</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shbl-body mt-3">
                      <div className="shnlb-main d-flex align-items-start justify-content-between flex-wrap">
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product6.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product4.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product5.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product2.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product10.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product8.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product6.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product10.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                        <div className="shnlbm-box bg-light rounded">
                          <div className="wnd-right-box-head px-4 rounded position-relative ">
                            <img
                              src="img/product2.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="wnd-right-box-body px-2 mt-0 text-center ">
                            <a href="#" className="link text-muted fs-6">
                              {" "}
                              لپ تاپ 15.6 اینچی لنوو مدل ideaPad L36-R16
                            </a>
                          </div>
                          <div className="w-100 px-2 pb-3">
                            <div className="d-flex-c-b mt-2">
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
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mt-3 mb-0 text-muted fs-small">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              قبلی
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              بعدی
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default Shop;
