import React from 'react';
import Layout from "../src/layout/Layout";
import Link from "next/link";
import Slider from "react-slick";
import { hero3Slider } from "../src/sliderProps";
import { FeedBackSliderWithArrow } from "../src/components/slider/FeedBackSlider";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Index2GalleryIsotop from "../src/components/isotop/Index2GalleryIsotop";
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import heavy components
const DynamicGalleryIsotop = dynamic(() => import("../src/components/isotop/Index2GalleryIsotop"), {
  ssr: false,
  loading: () => <p>Loading Gallery...</p>
});

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const Index4 = () => {
    return (
        <Layout>
            <Head>
                <title>Red Rouge Beauty & Wellness - Premium Spa & Medical Services</title>
                <meta name="description" content="Experience luxury beauty treatments, medical weight loss, body sculpting, and wellness services at Red Rouge Beauty & Wellness. Book your premium spa experience today." />
                <meta name="keywords" content="spa, beauty, wellness, medical weight loss, hydrafacial, body sculpting, facial services, massage, red rouge" />
                <meta property="og:title" content="Red Rouge Beauty & Wellness - Premium Spa & Medical Services" />
                <meta property="og:description" content="Experience luxury beauty treatments, medical weight loss, body sculpting, and wellness services at Red Rouge Beauty & Wellness." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/images/slider/slider1.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://redrougebeautywellness.com" />
            </Head>
            {/* Slider Section Start */}
            <div className="slider-section">
                <Slider {...hero3Slider}>
                    <div
                        className="slider-single-item slider-single-item-1"
                    >
                        <div className="container">
                            <span className="bg-text">Beauty & Wellness</span>
                            <span className="sub-title">Welcome to Red Rouge</span>
                            <h1 className="hero-title">Premier Beauty & Wellness Day Spa</h1>
                            <div className="slider-btn">
                                <Link href="/booking">
                                    <a className="theme-btn style-six">
                                        Book Now <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                                <Link href="/services">
                                    <a className="theme-btn style-five">
                                        Our services <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="slider-single-item slider-single-item-2"
                        style={{ backgroundImage: "url()" }}
                    >
                        <div className="container">
                            <span className="bg-text">Facial Services</span>
                            <span className="sub-title">Signature Treatments</span>
                            <h1>Luxury Facials & HydraFacials</h1>
                            <div className="slider-btn">
                                <Link href="/booking">
                                    <a className="theme-btn style-six">
                                        Book Now <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                                <Link href="/services">
                                    <a className="theme-btn style-five">
                                        Our services <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="slider-single-item slider-single-item-3"
                        style={{ backgroundImage: "url()" }}
                    >
                        <div className="container">
                            <span className="bg-text">Medical Services</span>
                            <span className="sub-title">Professional Care</span>
                            <h1>Medical Weight Loss & Body Sculpting</h1>
                            <div className="slider-btn">
                                <Link href="/booking">
                                    <a className="theme-btn style-six">
                                        Book Now <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                                <Link href="/services">
                                    <a className="theme-btn style-five">
                                        Our services <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="slider-single-item slider-single-item-4"
                        style={{ backgroundImage: "url()" }}
                    >
                        <div className="slider-overlay"></div>
                        <div className="container">
                            <span className="bg-text">Spa Services</span>
                            <span className="sub-title">Premium Spa Experience</span>
                            <h1>Spa & Relaxation</h1>
                            <div className="slider-btn">
                                <Link href="/booking">
                                    <a className="theme-btn style-six">
                                        Book Now <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                                <Link href="/services">
                                    <a className="theme-btn style-five">
                                        Our services <i className="fas fa-long-arrow-alt-right" />
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
                                    <h2>Your Premier Beauty & Wellness Destination</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right-text wow fadeInRight delay-0-2s">
                                <p>
                                    Experience luxury and transformation at Red Rouge Beauty & Wellness. 
                                    Our expert team specializes in premium services including luxury facials, 
                                    professional massage therapy, advanced medical weight loss solutions, and 
                                    innovative body sculpting treatments.
                                </p>
                                <Link href="/booking">
                                    <a className="read-more mt-10">
                                        Book Now <i className="fas fa-long-arrow-alt-right" />
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
                                    alt="Facial Services"
                                />
                                <div className="about-offer-content">
                                    <span className="bg-text">Premium</span>
                                    <h4>Facial Services</h4>
                                    <span>Advanced Skincare Solutions</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-offer-item">
                                <img
                                    src="assets/images/about/about-offer2.jpg"
                                    alt="Body Treatments"
                                />
                                <div className="about-offer-content">
                                    <span className="bg-text">Expert</span>
                                    <h4>Body Treatments</h4>
                                    <span>Professional Care</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-offer-item">
                                <img
                                    src="assets/images/about/about-offer3.jpg"
                                    alt="Medical Services"
                                />
                                <div className="about-offer-content">
                                    <span className="bg-text">Medical</span>
                                    <h4>Weight Loss</h4>
                                    <span>Transformative Results</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}
            
            {/* Video Section Start */}
            <div className="video-section-two wow fadeInUp delay-0-2s"
                style={{ backgroundImage: "url(-video.jpg)" }}>
                <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" 
                    className="mfp-iframe video-play">
                    <i className="fas fa-play" />
                </a>
            </div>
            {/* Video Section End */}
            
            {/* Services Section Start */}
            <section className="services-page pt-140 rpt-90 pb-90 rpb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-65">
                                <img
                                    className="bg-image"
                                    src="assets/images/shapes/service-bg.png"
                                    alt="Leaf"
                                />
                                <span className="sub-title">Our Services</span>
                                <h3>
                                    Discover our curated collection of premium beauty and wellness services. Experience a wide range of luxurious treatments, expert care, and personalized attention.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item wow fadeInUp delay-0-2s">
                                <img src="assets/images/services/service-1.jpg" alt="Facial Services" />
                                <div className="service-content">
                                    <i className="flaticon-beauty" />
                                    <h5>
                                        <Link href="/service-details">Facial Services</Link>
                                    </h5>
                                    <p>Luxury facials, microdermabrasion, and premium hydrafacials</p>
                                    <Link href="/service-details">
                                        <a className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item wow fadeInUp delay-0-4s">
                                <img src="assets/images/services/service-2.jpg" alt="Massage Services" />
                                <div className="service-content">
                                    <i className="flaticon-massage" />
                                    <h5>
                                        <Link href="/service-details">Massage Services</Link>
                                    </h5>
                                    <p>Swedish, deep tissue, and specialized therapeutic massages</p>
                                    <Link href="/service-details">
                                        <a className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item wow fadeInUp delay-0-6s">
                                <img src="assets/images/services/service-3.jpg" alt="Body Treatments" />
                                <div className="service-content">
                                    <i className="flaticon-relax" />
                                    <h5>
                                        <Link href="/service-details">Body Treatments</Link>
                                    </h5>
                                    <p>Fat reduction, body sculpting, and luxury body scrubs</p>
                                    <Link href="/service-details">
                                        <a className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item wow fadeInUp delay-0-8s">
                                <img src="assets/images/services/service-4.jpg" alt="Medical Services" />
                                <div className="service-content">
                                    <i className="flaticon-spa" />
                                    <h5>
                                        <Link href="/service-details">Medical Services</Link>
                                    </h5>
                                    <p>Medical weight loss and semaglutide consultations</p>
                                    <Link href="/service-details">
                                        <a className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item wow fadeInUp delay-1-0s">
                                <img src="assets/images/services/service-5.jpg" alt="Waxing Services" />
                                <div className="service-content">
                                    <i className="flaticon-beauty" />
                                    <h5>
                                        <Link href="/service-details">Waxing Services</Link>
                                    </h5>
                                    <p>Full-service waxing for face and body</p>
                                    <Link href="/service-details">
                                        <a className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item wow fadeInUp delay-1-2s">
                                <img src="assets/images/services/service-6.jpg" alt="Specialty Services" />
                                <div className="service-content">
                                    <i className="flaticon-spa" />
                                    <h5>
                                        <Link href="/service-details">Specialty Services</Link>
                                    </h5>
                                    <p>Teeth whitening and skin tightening treatments</p>
                                    <Link href="/service-details">
                                        <a className="read-more">
                                            read more <i className="fas fa-long-arrow-alt-right" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}
            
            {/* Booking Section Start */}
            <section className="booking-section-three rel z-1 bg-light-gray pt-140 rpt-90 pb-150 rpb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="booking-three-content rmb-55">
                                <div className="section-title mb-30">
                                    <span className="bg-text">Book</span>
                                    <span className="sub-title">Make Appointment</span>
                                    <h2>Schedule Your Beauty & Wellness Journey</h2>
                                </div>
                                <p>Elevate your beauty and wellness journey with our curated collection of premium services.</p>
                                <Link href="/contact">
                                    <a className="read-more">
                                        learn more <i className="fas fa-long-arrow-alt-right" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // Add form submission logic here
                                }}
                                className="booking-from bg-white p-4 rounded shadow-sm"
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
                                                required
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
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Phone Number"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <select 
                                                name="services" 
                                                id="services" 
                                                className="form-control"
                                                required
                                            >
                                                <option value="">Select Service</option>
                                                <optgroup label="Facial Services">
                                                    <option value="acne-facial">Acne Facial</option>
                                                    <option value="microdermabrasion">Microdermabrasion Facial</option>
                                                    <option value="mens-facial">Men&apos;s Facial</option>
                                                    <option value="prp-microneedling">PRP Microneedling Facial</option>
                                                    <option value="diamond-hydrafacial">Diamond Hydrafacial</option>
                                                    <option value="platinum-hydrafacial">Platinum Hydrafacial</option>
                                                </optgroup>
                                                <optgroup label="Massage Services">
                                                    <option value="swedish-60">Swedish Massage (60 min)</option>
                                                    <option value="swedish-90">Swedish Massage (90 min)</option>
                                                    <option value="deep-tissue-30">Deep Tissue Massage (30 min)</option>
                                                    <option value="deep-tissue-60">Deep Tissue Massage (60 min)</option>
                                                    <option value="deep-tissue-90">Deep Tissue Massage (90 min)</option>
                                                    <option value="prenatal">Prenatal Massage</option>
                                                    <option value="lymphatic">Post-operative Lymphatic Massage</option>
                                                </optgroup>
                                                <optgroup label="Body Treatments">
                                                    <option value="fat-reduction">Fat Reduction</option>
                                                    <option value="body-sculpting">Body Sculpting</option>
                                                    <option value="v-steaming">V-steaming</option>
                                                    <option value="body-scrub">Body Scrub</option>
                                                    <option value="body-boot-camp">Body Boot Camp</option>
                                                </optgroup>
                                                <optgroup label="Medical Services">
                                                    <option value="medical-weight-loss">Medical Weight Loss</option>
                                                    <option value="semaglutide">Semaglutide Weight Loss Consultation</option>
                                                    <option value="mesotherapy">Mesotherapy</option>
                                                </optgroup>
                                                <optgroup label="Specialty Services">
                                                    <option value="teeth-whitening">Teeth Whitening</option>
                                                    <option value="skin-tightening">Skin Tightening Facelift</option>
                                                    <option value="vadazzling">Vadazzling</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <select 
                                                name="time" 
                                                id="time" 
                                                className="form-control"
                                                required
                                            >
                                                <option value="">Select Time</option>
                                                <option value="9:00">9:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="13:00">1:00 PM</option>
                                                <option value="14:00">2:00 PM</option>
                                                <option value="15:00">3:00 PM</option>
                                                <option value="16:00">4:00 PM</option>
                                                <option value="17:00">5:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
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
            {/* <section className="products-section text-center pt-140 rpt-90 pb-115 rpb-65">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="section-title mb-65">
                                <span className="bg-text">products</span>
                                <span className="sub-title">Red Rouge Products</span>
                                <h2>Discover Our Signature Collection</h2>
                                <p>Elevate your beauty and wellness journey with our curated collection of premium services.</p>
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
                                                alt="Red Rouge Signature Body Scrub"
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
                                    <Link href="/product-details">
                                        <a>Red Rouge Signature Body Scrub</a>
                                    </Link>
                                </h5>
                                <p className="product-description">Our luxurious signature scrub for radiant, glowing skin</p>
                                <span className="price">$45.00</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product-item wow fadeInUp delay-0-4s">
                                <div className="image">
                                    <Link href="/product-details">
                                        <a>
                                            <img
                                                src="assets/images/products/product-2.jpg"
                                                alt="Red Rouge Coffee-gasm Body Scrub"
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
                                    <Link href="/product-details">
                                        <a>Red Rouge Coffee-gasm Body Scrub</a>
                                    </Link>
                                </h5>
                                <p className="product-description">Energizing coffee scrub for smooth, firm skin</p>
                                <span className="price">$38.00</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product-item wow fadeInUp delay-0-6s">
                                <div className="image">
                                    <Link href="/product-details">
                                        <a>
                                            <img
                                                src="assets/images/products/product-3.jpg"
                                                alt="Red Rouge Lemon Peppermint Essence Body Scrub"
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
                                    <Link href="/product-details">
                                        <a>Lemon Peppermint Essence Scrub</a>
                                    </Link>
                                </h5>
                                <p className="product-description">Refreshing citrus blend for invigorated skin</p>
                                <span className="price">$38.00</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product-item wow fadeInUp delay-0-8s">
                                <div className="image">
                                    <Link href="/product-details">
                                        <a>
                                            <img
                                                src="assets/images/products/product-4.jpg"
                                                alt="Red Rouge Gift Card"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="/product-details">
                                        <a>Red Rouge Gift Card</a>
                                    </Link>
                                </h5>
                                <p className="product-description">The perfect gift for any occasion</p>
                                <span className="price">Starting at $50</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-lg-12">
                            <Link href="/shop">
                                <a className="theme-btn style-three">
                                    View All Products <i className="fas fa-long-arrow-alt-right" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Products Section End */}
            
            {/* Feedback Section Start */}
            <section className="feedback-section pt-120 rpt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <FeedBackSliderWithArrow />
                        </div>
                    </div>
                </div>
            </section>
            {/* Feedback Section End */}
            
            {/* Gallery Section Start */}
            <DynamicGalleryIsotop />
            {/* Gallery Section End */}

            {/* Instagram Section Start */}
            <section className="instagram-section pt-120 rpt-90 pb-95 rpb-65">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="section-title text-center mb-65">
                                <span className="bg-text">instagram</span>
                                <span className="sub-title">Follow Us</span>
                                <h2>Follow Red Rouge on Instagram</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Instagram Slider */}
                    </div>
                    <div className="instagram-bottom text-center mt-35">
                        <Link href="https://www.instagram.com/redrougebeautywellness">
                            <a className="theme-btn style-three">
                                Follow Us On Instagram <i className="fab fa-instagram"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Instagram Section End */}
        </Layout>
    );
};

export default Index4;
