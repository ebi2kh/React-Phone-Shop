import React from "react";

function Payment() {
  return (
    <section>
      <div className="container-fluid checkout mb-4">
        <div className="row mx-lg-4 mx-0">
          <div className="shop-head px-0">
            <div className="row">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb pb-3 pt-4 mb-0 fs-small">
                  <li className="breadcrumb-item text-muted">
                    <a href="#">خانه</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    نحوه پرداخت{" "}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="cart-body px-0">
            <div className="row d-flex align-items-start justify-content-center flex-wrap mx-0">
              <div className="col-lg-8">
                <div className="row pe-0 pe-lg-4">
                  <div className="col-12 px-0 bg-light border-bottom bg-white border-top py-3 d-flex align-items-center justify-content-start">
                    <div className="col-12 d-flex justify-content-start">
                      <span className="fs-small text-muted">
                        انتخاب نحوه پرداخت
                      </span>
                    </div>
                  </div>
                  <div className="col-12 bg-light border-bottom d-flex flex-wrap pb-2 pb-lg-0 align-items-center justify-content-start">
                    <div className="col-12 col-lg-12 py-3">
                      <div className="form-checkd-flex alight-items-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          <img
                            src="img/zarinpal.html"
                            className="payment-pay-logo mx-4 mb-3"
                            alt=""
                          />{" "}
                          <span className="text-muted ">
                            {" "}
                            پرداخت با زرین پال{" "}
                          </span>
                        </label>
                      </div>
                      <div className="form-check  d-flex alight-items-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          <img
                            src="img/Behpardakht-Mellat-Logo-PNG-Way2pay-99-05-26.png"
                            className="payment-pay-logo mx-4 mb-4"
                            alt=""
                          />{" "}
                          <span className="text-muted ">
                            {" "}
                            پرداخت با به پرداخت ملت{" "}
                          </span>
                        </label>
                      </div>
                      <div className="form-check d-flex  alight-items-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          <img
                            src="img/purse%20(1).html"
                            className="mx-4 payment-pay-logo"
                            alt=""
                          />{" "}
                          <span className="text-muted ">
                            {" "}
                            پرداخت با کیف پول ( موجودی : 2,000,000 تومان ){" "}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 border px-4 mt-3 mt-lg-0 py-0">
                <div className="row d-flex-c-c px-2 flex-column">
                  <div className="box-cart col-12">
                    <span className="text-muted fs-small">
                      {" "}
                      <i className="far fs-6 pe-1 fa-box-open" /> تعداد کالا ( 2
                      ){" "}
                    </span>
                    <span className="text-muted fs-small"> 2 عدد</span>
                  </div>
                  <div className="box-cart col-12">
                    <span className="text-muted fs-small">
                      <i className="far fs-6 pe-1 fa-usd-circle" /> قیمت کالاها{" "}
                    </span>
                    <span className="text-muted fs-small">
                      {" "}
                      600,000,000 تومان{" "}
                    </span>
                  </div>
                  <div className="box-cart text-muted">
                    <i className="far fa-info-circle pe-3" />
                    <span>
                      {" "}
                      هزینه ارسال پست عادی ، برای مبلغ خرید بیشتر از 300 تومان
                      رایگان می باشد{" "}
                    </span>
                  </div>
                  <div className="box-cart col-12">
                    <span className="text-muted fs-small">
                      <i className="far fs-6 pe-1 fa-usd-circle" /> هزینه ارسال
                      کالا{" "}
                    </span>
                    <span className="text-muted bg-warning px-2 rounded py-1 fs-small">
                      {" "}
                      45800 تومان{" "}
                    </span>
                    {/* <span class="text-light bg-down px-2 rounded py-1 fs-small"> رایگان </span> */}
                  </div>
                  <div className="box-price justify-content-betwwen text-muted w-100">
                    <div>
                      <i className="fas fa-sack-dollar text-warning pe-3 fs-small" />{" "}
                      <span> مبلغ قابل پرداخت </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-end flex-column">
                      <div className="text-muted w-100 py-0">
                        {" "}
                        <span className="fs-5 yekanB">600,000,000</span>{" "}
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-100 btn bg-red rounded py-2 text-light fs-small fw-bold mt-3 mb-3">
                    {" "}
                    انتقال به درگاه پرداخت{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
