import Link from "next/link";
import Slider from "react-slick";
import { hero3Slider } from "../src/sliderProps";

const SectionLibrary = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="section-library-item">
        <h2 className="section-library-title">Hero Section</h2>
        <p className="section-library-description">A full-width hero section with text content, list items, and CTA buttons. Originally from index2.js</p>
        
        <div className="section-library-component">
          <section className="hero-section-two rel z-1 bg-green">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="hero-content-two mt-225 mb-170">
                    <span className="sub-title wow fadeInUp delay-0-2s">
                      Welcome to Lezar
                    </span>
                    <h1 className="wow fadeInUp delay-0-4s">
                      Organic Fresh Spa Treatment Center
                    </h1>
                    <ul className="list-style-two pt-10 wow fadeInUp delay-0-6s">
                      <li>Natural Glow Face Treatments</li>
                      <li>Organic Products For Body</li>
                      <li>Low Cost Treatments</li>
                      <li>Experts Team Members</li>
                    </ul>
                    <div className="hero-btn mt-15 wow fadeInUp delay-0-8s">
                      <Link href="/about">
                        <a className="theme-btn mt-15 style-four">
                          Learn more <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </Link>
                      <Link href="/services">
                        <a className="theme-btn mt-15 style-five">
                          Our services <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-right-image">
              <img src="assets/images/hero/hero-circle.png" alt="Hero" />
              <img
                className="wow fadeInUp delay-0-2s"
                src="assets/images/hero/hero-two-right.png"
                alt="Heo Right"
              />
            </div>
            <div className="hero-green-lear">
              <img src="assets/images/shapes/hero-green-leaf.png" alt="Leaf" />
            </div>
            <div className="hero-three-shapes">
              <img src="assets/images/shapes/hero-three-shapes.png" alt="Shape" />
            </div>
          </section>
        </div>
      </div>

      {/* Slider Section */}
      <div className="section-library-item">
        <h2 className="section-library-title">Slider Section</h2>
        <p className="section-library-description">A full-width slider section with multiple slides, each containing text content and CTA buttons. Originally from index.js</p>
        
        <div className="section-library-component">
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
        </div>
      </div>

      {/* About Section */}
      <div className="section-library-item">
        <h2 className="section-library-title">About Section</h2>
        <p className="section-library-description">A content-rich about section with text content, images, and video integration. Originally from about.js</p>
        
        <div className="section-library-component">
          <section className="about-page-section rel z-2 pt-140 rpt-90">
            <div className="container">
              <div className="row mb-55">
                <div className="col-lg-5">
                  <div className="about-page-content wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-30">
                      <span className="bg-text">about</span>
                      <span className="sub-title">Who We Are</span>
                      <h2>Quality &amp; Natural Beauty Salon</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-page-right-text wow fadeInRight delay-0-2s">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium totam rem aperia eaque
                      ipsa quae abillo inventore veritatis quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim quia voluptas sit
                      aspernatur aut odit aut fugit sed consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt porro quisquam
                    </p>
                    <p>
                      Nemo enim quia voluptas sit aspernatur aut odit aut fugit sed
                      consequuntur magni dolores ratione voluptatem sequi nesciunt
                      quisquam
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="about-page-left mb-30 wow fadeInUp delay-0-2s">
                    <img
                      src="assets/images/about/about-page-left.jpg"
                      alt="About"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-page-right-video mb-30 wow fadeInUp delay-0-4s">
                    <img
                      src="assets/images/about/about-page-right.jpg"
                      alt="About"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About Section (index.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">About Section (Home)</h2>
        <p className="section-library-description">An about section with text content and three featured service boxes. Originally from index.js</p>
        
        <div className="section-library-component">
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
                      Discover a tranquil oasis at Red Rouge Beauty & Wellness Day
                      Spa. We specialize in transformative treatments including
                      massage therapy, hydrafacials, medical weight loss, and body
                      contouring services.
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
        </div>
      </div>

      {/* About Section (index2.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">About Section (Home 2)</h2>
        <p className="section-library-description">An about section with image, decorative elements, and content. Originally from index2.js</p>
        
        <div className="section-library-component">
          <section className="about-section-two rel py-150 rpy-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-left rel pt-10 rmb-55 wow fadeInLeft delay-0-2s">
                    <img src="assets/images/about/about-two-left.jpg" alt="About" />
                    <div className="circle-image">
                      <img
                        src="assets/images/shapes/about-circle.png"
                        alt="Circle"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content wow fadeInRight delay-0-2s">
                    <div className="section-title mb-30">
                      <span className="bg-text">about</span>
                      <span className="sub-title">Who We Are</span>
                      <h2>
                        We Provide Quality &amp; Natural Beauty Spa Treatments
                      </h2>
                    </div>
                    <p>
                      Sed ut persiciatis unde omnis iste natus error sit voluptate
                      maccusantium doloremque laudantium totam rem aperiam eaque
                      ipsa quae abillo inventore veritatis quasi architecto
                      beatae vitae dicta sunt explicabo. Nemo enim quia voluptas
                      sit aspernatur aut odit aut fugit sed consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt porro
                      quisquam
                    </p>
                    <i>
                      Natus sit voluptate maccusantium doloremque laudantium totam
                      rem aperiam eaque ipsa quae inventore
                    </i>
                    <div className="about-btn mt-30">
                      <Link href="/about">
                        <a className="theme-btn style-three">
                          read more <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right-leaf">
              <img
                src="assets/images/shapes/about-right-leaf.png"
                alt="About Leaf"
              />
            </div>
          </section>
        </div>
      </div>

      {/* About Section (index3.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">About Section (Home 3)</h2>
        <p className="section-library-description">An about section with image and list features. Originally from index3.js</p>
        
        <div className="section-library-component">
          <section className="about-section pt-150 rpt-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-left rmb-55 wow fadeInLeft delay-0-2s">
                    <img src="assets/images/about/about-left.jpg" alt="About" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content wow fadeInRight delay-0-2s">
                    <div className="section-title mb-30">
                      <span className="bg-text">about</span>
                      <span className="sub-title">Who We Are</span>
                      <h2>Quality &amp; Natural Beauty Salon</h2>
                    </div>
                    <p>
                      Sed ut persiciatis unde omnis iste natus error sit voluptate
                      maccusantium doloremque laudantium totam rem aperiam eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explic aboemo enim ipsa
                    </p>
                    <ul className="list-style-one pt-20 pb-25">
                      <li>Natural Beauty Salon</li>
                      <li>Professional Women Spa Service</li>
                      <li>Experience Hair Treatments</li>
                    </ul>
                    <Link href="/about">
                      <a className="theme-btn style-two">
                        read more <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Service Section (index.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Service Section (Home)</h2>
        <p className="section-library-description">A grid of service items with icons and images. Originally from index.js</p>
        
        <div className="section-library-component">
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
        </div>
      </div>

      {/* Service Section (services.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Service Section (Services Page)</h2>
        <p className="section-library-description">A grid of service items with images and icons. Originally from services.js</p>
        
        <div className="section-library-component">
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
                    <span className="sub-title">What We Offer</span>
                    <h3>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur, vel illum qui
                      dolorem eum fugiat quo voluptas nulla pariatur
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="service-item wow fadeInUp delay-0-2s">
                    <img src="assets/images/services/service-1.jpg" alt="Service" />
                    <div className="service-content">
                      <i className="flaticon-cut" />
                      <h5>
                        <Link href="/service-details">Hair Cutting</Link>
                      </h5>
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
                    <img src="assets/images/services/service-2.jpg" alt="Service" />
                    <div className="service-content">
                      <i className="flaticon-nail" />
                      <h5>
                        <Link href="/service-details">Nail Polish</Link>
                      </h5>
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
                    <img src="assets/images/services/service-3.jpg" alt="Service" />
                    <div className="service-content">
                      <i className="flaticon-massage-1" />
                      <h5>
                        <Link href="/service-details">Body Massage</Link>
                      </h5>
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
                    <img src="assets/images/services/service-4.jpg" alt="Service" />
                    <div className="service-content">
                      <i className="flaticon-relax" />
                      <h5>
                        <Link href="/service-details">Spa &amp; Foot</Link>
                      </h5>
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
                    <img src="assets/images/services/service-5.jpg" alt="Service" />
                    <div className="service-content">
                      <i className="flaticon-beauty-treatment-1" />
                      <h5>
                        <Link href="/service-details">Hair Colors</Link>
                      </h5>
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
                    <img src="assets/images/services/service-6.jpg" alt="Service" />
                    <div className="service-content">
                      <i className="flaticon-liner" />
                      <h5>
                        <Link href="/service-details">Brow Polish</Link>
                      </h5>
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
        </div>
      </div>

      {/* Services Section (about.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Services Section (About Page)</h2>
        <p className="section-library-description">A grid of service categories with icons and descriptions. Originally from about.js</p>
        
        <div className="section-library-component">
          <section className="about-page pb-120 pt-110">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9">
                  <div className="section-title text-center mb-65">
                    <span className="bg-text">Services</span>
                    <span className="sub-title">Our Services</span>
                    <h2>Popular Services We Provide For Customers</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-section">
              <div className="category-item style-two wow fadeInUp delay-0-2s">
                <i className="flaticon-nail" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Nail Polish</Link>
                  </h4>
                </div>
                <p>Quis autem velum reprender eoluptate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
              <div className="category-item style-two wow fadeInUp delay-0-4s">
                <i className="flaticon-eyebrow" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Brow Polish</Link>
                  </h4>
                </div>
                <p>Quis autem velum reprender eoluptate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
              <div className="category-item style-two wow fadeInUp delay-0-6s">
                <i className="flaticon-hairdresser" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Hair Dresser</Link>
                  </h4>
                </div>
                <p>Quis autem velum reprender eoluptate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
              <div className="category-item style-two wow fadeInUp delay-0-8s">
                <i className="flaticon-pedicure" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Foot Massage</Link>
                  </h4>
                </div>
                <p>Quis autem velum reprender eoluptate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
              <div className="category-item style-two wow fadeInUp delay-1-0s">
                <i className="flaticon-cosmetics" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Cosmetics</Link>
                  </h4>
                </div>
                <p>Quis autem velum reprender eoluptate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Services Section (pricing.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Services Section (Pricing Page)</h2>
        <p className="section-library-description">A two-column layout of service items with icons and prices. Originally from pricing.js</p>
        
        <div className="section-library-component">
          <section className="pricing-section pricing-page rel z-1 pt-140 rpt-90 mb-120 rmb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-10">
                  <div className="section-title text-center mb-65">
                    <span className="bg-text">Menus</span>
                    <span className="sub-title">Pricing Package</span>
                    <h2>Spa &amp; Beauty Treatments</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="pricing-wrap wow fadeInLeft delay-0-2s">
                    <div className="pricing-item">
                      <i className="flaticon-hot-stone" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Body Treatments</h5>
                          <span className="price">259</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                    <div className="pricing-item">
                      <i className="flaticon-sauna" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Sauna Relax</h5>
                          <span className="price">123</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                    <div className="pricing-item">
                      <i className="flaticon-spa" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Geothermal Spa</h5>
                          <span className="price">352</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                    <div className="pricing-item">
                      <i className="flaticon-diet" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Backbone Therapy</h5>
                          <span className="price">853</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                    <div className="pricing-item">
                      <i className="flaticon-stones" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Professional Care</h5>
                          <span className="price">352</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="pricing-wrap wow fadeInRight delay-0-2s">
                    <div className="pricing-item">
                      <i className="flaticon-hand-cream" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Hand &amp; Feet</h5>
                          <span className="price">259</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                    <div className="pricing-item">
                      <i className="flaticon-beauty-treatment" />
                      <div className="pricing-content">
                        <div className="pricing-title">
                          <h5>Body Wrap</h5>
                          <span className="price">123</span>
                        </div>
                        <p>Sed ut perspiciatis unde omnis.......</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Service Details Section (service-details.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Service Details Section</h2>
        <p className="section-library-description">A detailed view of a service with images, benefits, and FAQ. Originally from service-details.js</p>
        
        <div className="section-library-component">
          <section className="service-details py-150 rpy-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="service-details-content-wrap">
                    <div className="service-details-image wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/services/service-details.jpg"
                        alt="Service Details"
                      />
                    </div>
                    <div className="service-details-content icon-before wow fadeInUp delay-0-2s">
                      <h3>Hair Cutting &amp; Color Treatments</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium dolore mque laudantium, totam rem
                        aperiam, eaque ipsa quae ainventores veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem voluptas sit aspernatur aut odit aut fugit
                      </p>
                      <p>
                        Totam rem aperiam, eaque ipsa quae ainventores veritatis et
                        quasi architecto beatae vitae dicta sunt explic aboemo enim
                        ipsam voluptatem voluptas
                      </p>
                      <h3>Benefit For Hair Treatments</h3>
                      <p>
                        Omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium totam rem aperiam, eaque ipsa quae ainventores
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo enim ipsam voluptatem voluptas{" "}
                      </p>
                      <ul className="list-style-one my-25">
                        <li>Best For Human Health</li>
                        <li>Always Be Strong &amp; Motivate</li>
                        <li>Best For Human Health</li>
                        <li>Always Be Strong &amp; Motivate</li>
                        <li>Best For Human Health</li>
                        <li>Always Be Strong &amp; Motivate</li>
                      </ul>
                    </div>
                    <div className="service-middle-images">
                      <div className="row">
                        <div className="col-sm-6 wow fadeInLeft delay-0-2s">
                          <img
                            src="assets/images/services/middle-left.jpg"
                            alt="Service Middle"
                          />
                        </div>
                        <div className="col-sm-6 wow fadeInRight delay-0-2s">
                          <img
                            src="assets/images/services/middle-right.jpg"
                            alt="Service Middle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="service-details-content mb-80 wow fadeInUp delay-0-2s">
                      <h3>Take Care Hair &amp; Health</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium dolore mque laudantium, totam rem
                        aperiam, eaque ipsa quae ainventores veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem voluptas sit aspernatur aut odit aut fugit
                      </p>
                    </div>
                    <hr />
                    <div className="next-prev-service mt-60">
                      <div className="nps-item prev-item wow fadeInLeft delay-0-2s">
                        <Link href="/service-details">
                          <img src="assets/images/services/prev.jpg" alt="Servce" />
                        </Link>
                        <div className="nps-content">
                          <h6>
                            <Link href="/service-details">
                              Spa &amp; Foot Massage
                            </Link>
                          </h6>
                          <span>Beauty Treatments</span>
                          <Link href="/service-details">
                            <a className="read-more">
                              read more{" "}
                              <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Link href="/services">
                        <a className="all-services">
                          <i className="fas fa-th-large" />
                        </a>
                      </Link>
                      <div className="nps-item next-item wow fadeInRight delay-0-2s">
                        <div className="nps-content">
                          <h6>
                            <Link href="/service-details">
                              Hair &amp; Nail Polish
                            </Link>
                          </h6>
                          <span>Beauty Treatments</span>
                          <Link href="/service-details">
                            <a className="read-more">
                              read more{" "}
                              <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </Link>
                        </div>
                        <Link href="/service-details">
                          <img src="assets/images/services/next.jpg" alt="Servce" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="service-sidebar rmt-55">
                    <div className="widget category-widget wow fadeInUp delay-0-2s">
                      <h5 className="widget-title">Services Category</h5>
                      <ul>
                        <li>
                          <a href="#">
                            Hair Cutting &amp; Colors{" "}
                            <span className="fas fa-long-arrow-alt-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Body Treatments{" "}
                            <span className="fas fa-long-arrow-alt-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Brow &amp; Nail Polish{" "}
                            <span className="fas fa-long-arrow-alt-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Spa &amp; Body Treatments{" "}
                            <span className="fas fa-long-arrow-alt-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Foot Massage{" "}
                            <span className="fas fa-long-arrow-alt-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nail Colors &amp; Fitting{" "}
                            <span className="fas fa-long-arrow-alt-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Booking Section (booking.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Booking Section (Booking Page)</h2>
        <p className="section-library-description">A grid of service offerings with icons. Originally from booking.js</p>
        
        <div className="section-library-component">
          <section className="offer-section text-center rel z-1 pt-140 rpt-90 pb-120 rpb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9 col-md-10">
                  <div className="section-title mb-65">
                    <span className="bg-text">Offer</span>
                    <span className="sub-title">Who We Offer</span>
                    <h2>Quality &amp; Natural Spa Salon</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <Link href="/service-details">
                    <a className="offer-item wow fadeInUp delay-0-2s">
                      <i className="flaticon-relax" />
                      <h5>Body Relax</h5>
                    </a>
                  </Link>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <Link href="/service-details">
                    <a className="offer-item wow fadeInUp delay-0-4s">
                      <i className="flaticon-beauty" />
                      <h5>Facials</h5>
                    </a>
                  </Link>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <Link href="/service-details">
                    <a className="offer-item wow fadeInUp delay-0-6s">
                      <i className="flaticon-massage" />
                      <h5>Massages</h5>
                    </a>
                  </Link>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <Link href="/service-details">
                    <a className="offer-item wow fadeInUp delay-0-8s">
                      <i className="flaticon-cbd-oil" />
                      <h5>Oil Therapy</h5>
                    </a>
                  </Link>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <Link href="/service-details">
                    <a className="offer-item wow fadeInUp delay-1-0s">
                      <i className="flaticon-spa-1" />
                      <h5>Sauna</h5>
                    </a>
                  </Link>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                  <Link href="/service-details">
                    <a className="offer-item wow fadeInUp delay-1-2s">
                      <i className="flaticon-hair-removal" />
                      <h5>Cosmetology</h5>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Booking Section (index.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Booking Section (Home)</h2>
        <p className="section-library-description">A booking form with contact fields and service selection. Originally from index.js</p>
        
        <div className="section-library-component">
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
        </div>
      </div>

      {/* Booking Section (index2.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Booking Section (Home 2)</h2>
        <p className="section-library-description">A booking form with contact fields and service selection, styled with a different theme. Originally from index2.js</p>
        
        <div className="section-library-component">
          <section className="booking-section-three rel z-1 bg-light-gray pt-140 rpt-90 pb-150 rpb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="booding-three-content rmb-55">
                    <div className="section-title mb-30">
                      <span className="bg-text">Book</span>
                      <span className="sub-title">Make Appointment</span>
                      <h2>Get Hair Treatment Booking Seat</h2>
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
                            <option value="service1">Hair Cutting</option>
                            <option value="service2">Foot Massage</option>
                            <option value="service3">Nail Colors</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="form-group mb-0">
                          <button
                            type="submit"
                            className="theme-btn w-100 style-three"
                          >
                            Make appointment{" "}
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
        </div>
      </div>

      {/* Booking Section (index3.js) */}
      <div className="section-library-item">
        <h2 className="section-library-title">Booking Section (Home 3)</h2>
        <p className="section-library-description">A two-column booking section with working hours and contact information. Originally from index3.js</p>
        
        <div className="section-library-component">
          <section className="booking-section pb-20">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6">
                  <div className="booking-item">
                    <div
                      className="booking-image wow fadeInUp delay-0-2s"
                      style={{
                        backgroundImage:
                          "url(assets/images/booking/booking-left.jpg)",
                      }}
                    />
                    <div className="booking-content wow fadeInUp delay-0-4s">
                      <span className="bg-text">Booking</span>
                      <h3>Working Hours</h3>
                      <p>
                        Quis autem vel eum repreh enderit voluptate velit esse quame
                        molestiae consequatur veillum
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          <div className="booking-info">
                            <p>
                              Mon to Fri: 7:30 am — 1:00 am <br />
                              Sat: 9:00 am — 1:00 am <br />
                              Sun: 9:00 am — 11:30 pm
                            </p>
                            <Link href="/booking">
                              <a className="theme-btn">
                                appointment{" "}
                                <i className="fas fa-long-arrow-alt-right" />
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="booking-item">
                    <div
                      className="booking-image wow fadeInUp delay-0-6s"
                      style={{
                        backgroundImage:
                          "url(assets/images/booking/booking-right.jpg)",
                      }}
                    />
                    <div className="booking-content wow fadeInUp delay-0-8s">
                      <span className="bg-text">address</span>
                      <h3>Contact us</h3>
                      <p>
                        Quis autem vel eum repreh enderit voluptate velit esse quame
                        molestiae consequatur veillum
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          <div className="booking-info">
                            <h5>Location</h5>
                            <p>523 Main Street, 2nd Floor, New York City</p>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-clock" />
                          <div className="booking-info">
                            <h5>Hotline</h5>
                            <p>Call : +012 (345) 6789</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SectionLibrary;
