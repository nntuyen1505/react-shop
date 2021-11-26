import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    yourname: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    reviewTitle: yup.string().required("This field is required"),
    review: yup.string().required("This field is required"),
  })
  .required();

export default function Reviews() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  let showReviewForm = () => {
    document.querySelector("#reviewForm").classList.toggle("show");
  };

  return (
    <section className="pt-9 pb-11" id="reviews">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Heading */}
            <h4 className="mb-10 text-center">Customer Reviews</h4>
            {/* Header */}
            <div className="row align-items-center">
              <div className="col-12 col-md-auto">
                {/* Dropdown */}
                <div className="dropdown mb-4 mb-md-0">
                  {/* Toggle */}
                  <Link
                    className="dropdown-toggle text-reset"
                    data-toggle="dropdown"
                    to="#"
                  >
                    <strong>Sort by: Newest</strong>
                  </Link>
                  {/* Menu */}
                  <div className="dropdown-menu mt-3">
                    <Link className="dropdown-item" to="#!">
                      Newest
                    </Link>
                    <Link className="dropdown-item" to="#!">
                      Oldest
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md text-md-center">
                {/* Rating */}
                <div
                  className="rating text-dark h6 mb-4 mb-md-0"
                  data-value={4}
                >
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                </div>
                {/* Count */}
                <strong className="font-size-sm ml-2">Reviews (3)</strong>
              </div>
              <div className="col-12 col-md-auto">
                {/* Button */}
                <Link
                  className="btn btn-sm btn-dark"
                  data-toggle="collapse"
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showReviewForm();
                  }}
                >
                  Write Review
                </Link>
              </div>
            </div>
            {/* New Review */}
            <div className="collapse" id="reviewForm">
              {/* Divider */}
              <hr className="my-8" />
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12 mb-6 text-center">
                    {/* Text */}
                    <p className="mb-1 font-size-xs">Score:</p>
                    {/* Rating form */}
                    <div className="rating-form">
                      {/* Input */}
                      <input
                        className="rating-input"
                        type="range"
                        min={1}
                        max={5}
                        defaultValue={5}
                      />
                      {/* Rating */}
                      <div className="rating h5 text-dark" data-value={5}>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label className="sr-only" htmlFor="reviewName">
                        Your Name:
                      </label>
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Your Name *"
                        {...register("yourname")} 
                      />
                        <p className="error-class">{errors.yourname?.message}</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label className="sr-only" htmlFor="reviewEmail">
                        Your Email:
                      </label>
                      <input
                        className="form-control form-control-sm"
                        
                        type="email"
                        placeholder="Your Email *"
                        {...register("email")} 
                      />
                        <p className="error-class">{errors.email?.message}</p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Name */}
                    <div className="form-group">
                      <label className="sr-only" htmlFor="reviewTitle">
                        Review Title:
                      </label>
                      <input
                        className="form-control form-control-sm"
                       
                        type="text"
                        placeholder="Review Title *"
                        {...register("reviewTitle")} 
                      />
                        <p className="error-class">{errors.reviewTitle?.message}</p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Name */}
                    <div className="form-group">
                      <label className="sr-only" htmlFor="reviewText">
                        Review:
                      </label>
                      <textarea
                        className="form-control form-control-sm"
                        rows={5}
                        placeholder="Review *"
                        {...register("review")} 
                        />
                          <p className="error-class">{errors.review?.message}</p>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    {/* Button */}
                    <button className="btn btn-outline-dark" type="submit">
                      Post Review
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Reviews */}
            <div className="mt-8">
              {/* Review */}
              <div className="review">
                <div className="review-body">
                  <div className="row">
                    <div className="col-12 col-md-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xxl mb-6 mb-md-0">
                        <span className="avatar-title rounded-circle">
                          <i className="fa fa-user" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md">
                      {/* Header */}
                      <div className="row mb-6">
                        <div className="col-12">
                          {/* Rating */}
                          <div
                            className="rating font-size-sm text-dark"
                            data-value={5}
                          >
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          {/* Time */}
                          <span className="font-size-xs text-muted">
                            Logan Edwards,{" "}
                            <time dateTime="2019-07-25">25 Jul 2019</time>
                          </span>
                        </div>
                      </div>
                      {/* Title */}
                      <p className="mb-2 font-size-lg font-weight-bold">
                        So cute!
                      </p>
                      {/* Text */}
                      <p className="text-gray-500">
                        Justo ut diam erat hendrerit. Morbi porttitor, per eu.
                        Sodales curabitur diam sociis. Taciti lobortis nascetur.
                        Ante laoreet odio hendrerit. Dictumst curabitur nascetur
                        lectus potenti dis sollicitudin habitant quis
                        vestibulum.
                      </p>
                      {/* Footer */}
                      <div className="row align-items-center">
                        <div className="col-auto d-none d-lg-block">
                          {/* Text */}
                          <p className="mb-0 font-size-sm">
                            Was this review helpful?
                          </p>
                        </div>
                        <div className="col-auto mr-auto">
                          {/* Rate */}
                          <div className="rate">
                            <Link
                              className="rate-item"
                              data-toggle="vote"
                              data-count={3}
                              to="#"
                              role="button"
                            >
                              <i className="fe fe-thumbs-up" />
                            </Link>
                            <Link
                              className="rate-item"
                              data-toggle="vote"
                              data-count={0}
                              to="#"
                              role="button"
                            >
                              <i className="fe fe-thumbs-down" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                          {/* Text */}
                          <p className="mb-0 font-size-sm">Comments (0)</p>
                        </div>
                        <div className="col-auto">
                          {/* Button */}
                          <Link
                            className="btn btn-xs btn-outline-border"
                            to="#!"
                          >
                            Comment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Review */}
              <div className="review">
                {/* Body */}
                <div className="review-body">
                  <div className="row">
                    <div className="col-12 col-md-auto">
                      {/* Avatar */}
                      <div className="avatar avatar-xxl mb-6 mb-md-0">
                        <span className="avatar-title rounded-circle">
                          <i className="fa fa-user" />
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md">
                      {/* Header */}
                      <div className="row mb-6">
                        <div className="col-12">
                          {/* Rating */}
                          <div
                            className="rating font-size-sm text-dark"
                            data-value={3}
                          >
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                            <div className="rating-item">
                              <i className="fas fa-star" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          {/* Time */}
                          <span className="font-size-xs text-muted">
                            Sophie Casey,{" "}
                            <time dateTime="2019-07-07">07 Jul 2019</time>
                          </span>
                        </div>
                      </div>
                      {/* Title */}
                      <p className="mb-2 font-size-lg font-weight-bold">
                        Cute, but too small
                      </p>
                      {/* Text */}
                      <p className="text-gray-500">
                        Shall good midst can't. Have fill own his multiply the
                        divided. Thing great. Of heaven whose signs.
                      </p>
                      {/* Footer */}
                      <div className="row align-items-center">
                        <div className="col-auto d-none d-lg-block">
                          {/* Text */}
                          <p className="mb-0 font-size-sm">
                            Was this review helpful?
                          </p>
                        </div>
                        <div className="col-auto mr-auto">
                          {/* Rate */}
                          <div className="rate">
                            <Link
                              className="rate-item"
                              data-toggle="vote"
                              data-count={2}
                              to="#"
                              role="button"
                            >
                              <i className="fe fe-thumbs-up" />
                            </Link>
                            <Link
                              className="rate-item"
                              data-toggle="vote"
                              data-count={1}
                              to="#"
                              role="button"
                            >
                              <i className="fe fe-thumbs-down" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                          {/* Text */}
                          <p className="mb-0 font-size-sm">Comments (1)</p>
                        </div>
                        <div className="col-auto">
                          {/* Button */}
                          <Link
                            className="btn btn-xs btn-outline-border"
                            to="#!"
                          >
                            Comment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Child review */}
                <div className="review review-child">
                  <div className="review-body">
                    {/* Content */}
                    <div className="row">
                      <div className="col-12 col-md-auto">
                        {/* Avatar */}
                        <div className="avatar avatar-xxl mb-6 mb-md-0">
                          <span className="avatar-title rounded-circle">
                            <i className="fa fa-user" />
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md">
                        {/* Header */}
                        <div className="row mb-6">
                          <div className="col-12">
                            {/* Rating */}
                            <div
                              className="rating font-size-sm text-dark"
                              data-value={4}
                            >
                              <div className="rating-item">
                                <i className="fas fa-star" />
                              </div>
                              <div className="rating-item">
                                <i className="fas fa-star" />
                              </div>
                              <div className="rating-item">
                                <i className="fas fa-star" />
                              </div>
                              <div className="rating-item">
                                <i className="fas fa-star" />
                              </div>
                              <div className="rating-item">
                                <i className="fas fa-star" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            {/* Time */}
                            <span className="font-size-xs text-muted">
                              William Stokes,{" "}
                              <time dateTime="2019-07-14">14 Jul 2019</time>
                            </span>
                          </div>
                        </div>
                        {/* Title */}
                        <p className="mb-2 font-size-lg font-weight-bold">
                          Very good
                        </p>
                        {/* Text */}
                        <p className="text-gray-500">
                          Made face lights yielding forth created for image
                          behold blessed seas.
                        </p>
                        {/* Footer */}
                        <div className="row align-items-center">
                          <div className="col-auto d-none d-lg-block">
                            {/* Text */}
                            <p className="mb-0 font-size-sm">
                              Was this review helpful?
                            </p>
                          </div>
                          <div className="col-auto mr-auto">
                            {/* Rate */}
                            <div className="rate">
                              <Link
                                className="rate-item"
                                data-toggle="vote"
                                data-count={7}
                                to="#"
                                role="button"
                              >
                                <i className="fe fe-thumbs-up" />
                              </Link>
                              <Link
                                className="rate-item"
                                data-toggle="vote"
                                data-count={0}
                                to="#"
                                role="button"
                              >
                                <i className="fe fe-thumbs-down" />
                              </Link>
                            </div>
                          </div>
                          <div className="col-auto d-none d-lg-block">
                            {/* Text */}
                            <p className="mb-0 font-size-sm">Comments (0)</p>
                          </div>
                          <div className="col-auto">
                            {/* Button */}
                            <Link
                              className="btn btn-xs btn-outline-border"
                              to="#!"
                            >
                              Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <nav className="d-flex justify-content-center mt-9">
              <ul className="pagination pagination-sm text-gray-400">
                <li className="page-item">
                  <Link className="page-link page-link-arrow" to="#">
                    <i className="fa fa-caret-left" />
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link page-link-arrow" to="#">
                    <i className="fa fa-caret-right" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
