import Link from "next/link";
import Slider from "react-slick";
import { FeedBackItemThree } from "../src/components/slider/FeedBackSlider";
import Layout from "../src/layout/Layout";
import { hero3Slider } from "../src/sliderProps";
const index3 = () => {
  return (
    <Layout header={3} noPageBanner>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <div className="slider-section">
        <Slider {...hero3Slider}>
          <div
            className="slider-single-item slider-single-item-1"
            style={{ backgroundImage: "url(assets/images/slider/slider1.jpg)" }}
          >
            <div className="container">
              <span className="bg-text">Day Spa</span>
              <span className="sub-title">Welcome to Red Rouge</span>
              <h1 className="hero-title">Award Winning Beauty & Wellness Day Spa</h1>
              <div className="slider-btn">
                <Link href="/about">
                  <a className="theme-btn style-six">
                    Learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-five">
                    our services <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-single-item slider-single-item-2"
            style={{ backgroundImage: "url(assets/images/slider/slider1.jpg)" }}
          >
            <div className="container">
              <span className="bg-text">Day Spa</span>
              <span className="sub-title">Welcome to Red Rouge</span>
              <h1>Specializing in Massage & Hydrafacials</h1>
              <div className="slider-btn">
                <Link href="/about">
                  <a className="theme-btn style-six">
                    Learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-five">
                    our services <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-single-item slider-single-item-3"
            style={{ backgroundImage: "url(assets/images/slider/slider1.jpg)" }}
          >
            <div className="container">
              <span className="bg-text">Day Spa</span>
              <span className="sub-title">Welcome to Red Rouge</span>
              <h1>Medical Weight Loss & Body Contouring</h1>
              <div className="slider-btn">
                <Link href="/about">
                  <a className="theme-btn style-six">
                    Learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-five">
                    our services <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Slider Section End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-2 pt-140 rpt-90 pb-120 rpb-70">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-6">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">about</span>
                  <span className="sub-title">Who We Are</span>
                  <h2>Your Premier Beauty & Wellness Day Spa</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right-text wow fadeInRight delay-0-2s">
                <p>
                  Discover a tranquil oasis at Red Rouge Beauty & Wellness Day Spa. We specialize in transformative treatments 
                  including massage therapy, hydrafacials, medical weight loss, and body contouring services.
                </p>
                <Link href="/about">
                  <a className="read-more mt-10">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="about-offer-item">
                <img
                  src="assets/images/about/about-offer1.jpg"
                  alt="About Offer"
                />
                <div className="about-offer-content">
                  <span className="bg-text">Spa</span>
                  <h4>Massage Therapy</h4>
                  <span>Relaxation & Wellness</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-offer-item">
                <img
                  src="assets/images/about/about-offer2.jpg"
                  alt="About Offer"
                />
                <div className="about-offer-content">
                  <span className="bg-text">Face</span>
                  <h4>Hydrafacials</h4>
                  <span>Skin Rejuvenation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-offer-item">
                <img
                  src="assets/images/about/about-offer3.jpg"
                  alt="About Offer"
                />
                <div className="about-offer-content">
                  <span className="bg-text">Body</span>
                  <h4>Body Contouring</h4>
                  <span>Shape & Sculpt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Booking Hours Section Start */}
      <section className="booking-hours-area bg-light-gray rel z-1">
        <div
          className="booking-hour-image bgs-cover"
          style={{
            backgroundImage: "url(assets/images/booking/booking-three.jpg)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="booking-hours-content pb-150 pt-140 rpt-0 rpb-100 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">hours</span>
                  <span className="sub-title">Day Spa</span>
                  <h2>Business Hours</h2>
                </div>
                <p>
                  Visit our tranquil facility for a rejuvenating experience. We offer flexible hours to accommodate your schedule.
                </p>
                <ul className="booking-hours py-20 wow fadeInRight delay-0-2s">
                  <li>
                    <span className="date">Monday to Friday</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">10:00 am — 6:00 pm</span>
                  </li>
                  <li>
                    <span className="date">Saturday</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">10:00 am — 6:00 pm</span>
                  </li>
                  <li>
                    <span className="date">Sunday</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">Closed</span>
                  </li>
                </ul>
                <Link href="/booking">
                  <a className="theme-btn style-six">
                    book appointment <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-circle">
          <img src="assets/images/shapes/service-circle.png" alt="Circle" />
        </div>
        <div className="booking-bg-icon">
          <i className="flaticon-hair-iron" />
        </div>
      </section>
      {/* Booking Hours Section End */}
      {/* Service Section Start */}
      <section className="service-section-two text-center pt-140 rpt-90 pb-120 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title mb-65">
                <span className="bg-text">Services</span>
                <span className="sub-title">Our Services</span>
                <h2>Premier Spa & Wellness Treatments</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-spa" />
                  </div>
                  <img
                    src="assets/images/services/service-two1.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Face</span>
                </div>
                <h5>Hydrafacials</h5>
                <p>Advanced skincare for radiant, healthy skin</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-hands" />
                  </div>
                  <img
                    src="assets/images/services/service-two2.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Body</span>
                </div>
                <h5>Massage Therapy</h5>
                <p>Deep tissue, lymphatic, and relaxation massage</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-weight" />
                  </div>
                  <img
                    src="assets/images/services/service-two3.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Weight</span>
                </div>
                <h5>Medical Weight Loss</h5>
                <p>Personalized programs for effective results</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-vector-square" />
                  </div>
                  <img
                    src="assets/images/services/service-two4.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Shape</span>
                </div>
                <h5>Body Contouring</h5>
                <p>Advanced sculpting and toning treatments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Project Section Start */}
      <section className="project-section-two pb-120 rpb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="project-item-two">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <h3>Luxury Spa Experience</h3>
                  <h5>Massage & Wellness</h5>
                  <Link href="/portfolio-details">
                    <a className="theme-btn style-five">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-item-two">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <h3>Advanced Skincare</h3>
                  <h5>Hydrafacials & Treatments</h5>
                  <Link href="/portfolio-details">
                    <a className="theme-btn style-five">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="project-item-two big-item">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <h3>Body Transformation</h3>
                  <h5>Medical Weight Loss & Contouring</h5>
                  <Link href="/portfolio-details">
                    <a className="theme-btn style-five">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="project-item-two video-item">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play mb-10"
                  >
                    <i className="fas fa-play" />
                  </a>
                  <span className="bg-text">Watch Videos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section End */}
      {/* Booking Section Start */}
      <section className="booking-section-three rel z-1 bg-light-gray pt-140 rpt-90 pb-150 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="booding-three-content rmb-55">
                <div className="section-title mb-30">
                  <span className="bg-text">Book</span>
                  <span className="sub-title">Make Appointment</span>
                  <h2>Schedule Your Wellness Journey</h2>
                </div>
                <Link href="/contact">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                onClick={(e) => e.preventDefault()}
                action="#"
                className="booking-from"
              >
                <div className="row clearfix">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-30">
                    <div className="form-group z-2">
                      <select name="services" id="services">
                        <option value="services">Services</option>
                        <option value="massage">Massage Therapy</option>
                        <option value="hydrafacial">Hydrafacial</option>
                        <option value="weightloss">Medical Weight Loss</option>
                        <option value="contouring">Body Contouring</option>
                        <option value="waxing">Waxing Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn w-100 style-six"
                      >
                        Book Appointment{" "}
                        <i className="fas fa-long-arrow-alt-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="booking-circle">
          <img src="assets/images/shapes/service-circle.png" alt="Circle" />
        </div>
      </section>
      {/* Booking Section End */}
      {/* Products Section Start */}
      <section className="products-section text-center pt-140 rpt-90 pb-115 rpb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title mb-65">
                <span className="bg-text">products</span>
                <span className="sub-title">Red Rouge Products</span>
                <h2>Shop Our Exclusive Spa Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Link href="/product-details">
                    <a>
                      <img
                        src="assets/images/products/product-1.jpg"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Red Rouge Signature Body Scrub</Link>
                </h5>
                <span className="price">$18.99</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Link href="/product-details">
                    <img
                      src="assets/images/products/product-2.jpg"
                      alt="Product"
                    />
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Coffee Gasm Body Scrub</Link>
                </h5>
                <span className="price">$18.99</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Link href="/product-details">
                    <img
                      src="assets/images/products/product-3.jpg"
                      alt="Product"
                    />
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Lemon Peppermint Essence Scrub</Link>
                </h5>
                <span className="price">$18.99</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <Link href="/product-details">
                    <img
                      src="assets/images/products/product-4.jpg"
                      alt="Product"
                    />
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Luxury Gift Card</Link>
                </h5>
                <span className="price">Starting at $50</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section End */}
      {/* Feedback Section Start */}
      <div className="feedback-section rel z-1 bg-light-gray">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-6">
              <FeedBackItemThree />
            </div>
            <div className="col-xl-6">
              <div
                className="feedback-left-image bgs-cover h-100"
                style={{
                  backgroundImage:
                    "url(assets/images/testimonials/testimonial-right.jpg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Section End */}
      {/* Blog Section Start */}
      <section className="blog-section rel z-1 pt-140 rpt-90 mb-120 rmb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title text-center mb-65">
                <span className="bg-text">Blog</span>
                <span className="sub-title">Wellness Blog</span>
                <h2>Latest Spa & Wellness News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="news-item-two">
                <ul className="title-meta">
                  <li>
                    <i className="far fa-user-circle" /> <a href="#">Robert</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" /> <a href="#">(05)</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Smase Podcast Episode Chris Ferdinande
                  </Link>
                </h5>
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/blog-two1.jpg" alt="Blog" />
                  </Link>
                </div>
                <p>Quis autem vel eum sure repreh enderit quin voluptate velit esse</p>
                <Link href="/blog-details">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item-two">
                <ul className="title-meta">
                  <li>
                    <i className="far fa-user-circle" /> <a href="#">Robert</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" /> <a href="#">(05)</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Meet Touch Design For Mobile Interfaces
                  </Link>
                </h5>
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/blog-two2.jpg" alt="Blog" />
                  </Link>
                </div>
                <p>Quis autem vel eum sure repreh enderit quin voluptate velit esse</p>
                <Link href="/blog-details">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item-two">
                <ul className="title-meta">
                  <li>
                    <i className="far fa-user-circle" /> <a href="#">Robert</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" /> <a href="#">(05)</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Guide To Modern CSS Colors With RGB
                  </Link>
                </h5>
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/blog-two3.jpg" alt="Blog" />
                  </Link>
                </div>
                <p>Quis autem vel eum sure repreh enderit quin voluptate velit esse</p>
                <Link href="/blog-details">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default index3;
