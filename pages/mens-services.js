import dynamic from "next/dynamic";
import Link from "next/link";
import { MensFeedBackSlider } from "../src/components/slider/FeedBackSlider";
import Layout from "../src/layout/Layout";
import Head from "next/head";
import Image from "next/image";

const Home1ProjectIsotop = dynamic(
  () => import("../src/components/isotop/Home1ProjectIsotop"),
  {
    ssr: false,
  }
);

const MensServices = () => {
  return (
    <div className="mens-theme">
      <Head>
        {/* Flaticon CSS is already imported in globals.css */}
      </Head>
      <Layout pageName={"Men&apos;s Services"}>
        {/* Fixed: Escaped apostrophes in pageName */}
        <style>{`
          :root {
            --primary-color: #B70704;
            --dark-bg: #1a1a1a;
            --darker-bg: #121212;
            --text-color: #ffffff;
            --muted-text: #b3b3b3;
            --border-color: #2d2d2d;
          }
          
          .mens-theme {
            --bs-body-bg: var(--dark-bg);
          --bs-body-color: var(--text-color);
        }
        
        .mens-theme body {
          background: var(--dark-bg);
          color: var(--text-color);
        }
        
        .mens-theme .hero-section,
        .mens-theme .about-section,
        .mens-theme .category-section {
          background: var(--darker-bg) !important;
          color: var(--text-color);
        }
        
        .mens-theme .hero-content h1,
        .mens-theme .section-title h2,
        .mens-theme .section-title .sub-title,
        .mens-theme .about-content h2,
        .mens-theme h1, .mens-theme h2, 
        .mens-theme h3, .mens-theme h4, 
        .mens-theme h5, .mens-theme h6 {
          color: var(--text-color) !important;
        }
        
        .mens-theme p,
        .mens-theme .section-title p,
        .mens-theme .feature-content span,
        .mens-theme .about-content p,
        .mens-theme .list-style-one {
          color: var(--muted-text) !important;
        }
        
        .mens-theme .category-item {
          background: var(--darker-bg) !important;
          border: 1px solid var(--border-color) !important;
          transition: all 0.3s ease;
          color: var(--muted-text);
        }
        
        .mens-theme .category-item h4 a {
          color: var(--text-color) !important;
          transition: color 0.3s ease;
        }
        
        .mens-theme .category-item:hover h4 a {
          color: var(--primary-color) !important;
        }
        
        .mens-theme .category-item .read-more {
          color: var(--primary-color) !important;
        }
        
        .mens-theme .category-item .read-more:hover {
          color: var(--text-color) !important;
        }
        
        .mens-theme .category-item i {
          color: var(--primary-color);
        }
        
        .mens-theme .category-item .bg-text {
          color: rgba(115, 115, 115, 0.2) !important;
        }
        
        .mens-theme .category-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-color: var(--primary-color) !important;
        }
        
        .mens-theme .theme-btn {
          transition: all 0.3s ease;
          font-size: 16px;
          padding: 12px 25px;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
        }
        
        .mens-theme .theme-btn:hover {
          background: var(--primary-color);
          color: white !important;
        }
        
        .mens-theme .theme-btn.style-two {
          background: var(--primary-color);
          color: white !important;
          border: 2px solid var(--primary-color);
        }
        
        .mens-theme .theme-btn.style-two:hover {
          background: transparent !important;
          color: var(--primary-color) !important;
        }
        
        .mens-theme .theme-btn.style-three {
          background: transparent;
          color: var(--primary-color) !important;
          border: 2px solid var(--primary-color);
        }
        
        .mens-theme .theme-btn.style-three:hover {
          background: var(--primary-color) !important;
          color: white !important;
        }
        
        .mens-theme .bg-text {
          color: rgba(115, 115, 115, 0.2) !important;
          font-size: 150px;
        }

        .mens-theme .sub-title {
          color: var(--text-color) !important;
        }
      `}</style>
      <Head>
        <title>Men&apos;s Services - Red Rouge Beauty &amp; Wellness</title>
        <meta name="description" content="Premium grooming and wellness services designed exclusively for men. Experience expert massages, facials, and waxing services at Red Rouge." />
        <meta name="keywords" content="men&apos;s spa, men&apos;s facial, men&apos;s massage, men&apos;s grooming, men&apos;s waxing, manzilian, beard facial, men&apos;s wellness" />
        <meta property="og:title" content="Men&apos;s Services - Red Rouge Beauty &amp; Wellness" />
        <meta property="og:description" content="Premium grooming and wellness services designed exclusively for men. Experience expert massages, facials, and waxing services at Red Rouge." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/hero/hero-right.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://redrougebeautywellness.com/mens-services" />
      </Head>
      {/* Hero Section Start */}
      <section className="hero-section rel z-1" style={{ 
        background: 'var(--darker-bg)',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 0 100px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="hero-content" style={{
                marginTop: '60px',
                marginBottom: '60px',
                position: 'relative',
                zIndex: '2'
              }}>
                <span className="bg-text" style={{
                  fontSize: 'clamp(80px, 15vw, 150px)',
                }}>
                  Gentlemen
                </span>
                <h1 className="wow fadeInUp delay-0-2s" style={{
                  color: 'var(--text-color)',
                  fontSize: 'clamp(32px, 6vw, 48px)',
                  lineHeight: '1.2',
                  fontWeight: '600',
                  marginBottom: '20px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Premium Men&apos;s Spa
                </h1>
                <p className="wow fadeInUp delay-0-3s" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  lineHeight: '1.7',
                  marginBottom: '30px',
                  maxWidth: '90%',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}>
                  Our men&apos;s treatments are designed to address specific concerns such as razor burn, ingrown hairs, and the effects of daily shaving. We use high-performance products that are specially formulated for men&apos;s skin.
                </p>
                <div className="hero-btn wow fadeInUp delay-0-4s" style={{ marginTop: '20px' }}>
                  <Link href="/booking">
                    <a className="theme-btn style-two" style={{
                      display: 'inline-block',
                      backgroundColor: '#B70704',
                      border: '2px solid #B70704',
                      color: 'white',
                      padding: '12px 25px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                      Book Now <i className="fas fa-long-arrow-alt-right" style={{ marginLeft: '5px' }} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right-image" style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '50%',
          height: '100%',
          zIndex: '1',
          opacity: '0.8'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, var(--darker-bg) 0%, rgba(26, 26, 26, 0.8) 30%, rgba(26, 26, 26, 0.4) 100%)',
            zIndex: '2'
          }}></div>
          <Image
            src="/assets/images/hero/men-spa.png"
            alt="Men&apos;s Spa &amp; Grooming"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            style={{
              filter: 'brightness(0.9)'
            }}
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Section Start */}
      <section className="about-section pt-150 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left rmb-55 wow fadeInLeft delay-0-2s">
                <div className="about-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* <img
                    src="/assets/images/services/service1.png"
                    alt="Men&apos;s Exfoliating Facial"
                    style={{ width: "100%", height: "auto" }}
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  {/* <span className="bg-text" style={{ color: 'rgba(115, 115, 115, 0.2)' }}>about</span> */}
                  <span className="sub-title">Gentleman&apos;s Retreat</span>
                  <h2>Luxurious Treatments Tailored for Men</h2>
                </div>
                <p>
                  At Red Rouge, we understand that men deserve specialized treatments that address their unique needs. Our men&apos;s services combine powerful techniques with premium products to deliver exceptional results in a sophisticated, comfortable environment.
                </p>
                <p>
                  Our team includes specialists in men&apos;s grooming who understand the unique needs of male skin and hair. We stay updated with the latest techniques and products in men&apos;s grooming to provide you with the best possible service.
                </p>
                <ul className="list-style-one pt-20 pb-25" style={{ color: 'var(--muted-text)' }}>
                  <li>Expert Male Technicians Available</li>
                  <li>Premium Products Designed for Men</li>
                  <li>Private Treatment Rooms</li>
                  <li>Personalized Service</li>
                  <li>Discreet &amp; Comfortable Environment</li>
                </ul>
                <div className="about-btns">
                  <Link href="/booking">
                    <a className="theme-btn style-two mr-15">
                      Book Now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="theme-btn style-three">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      {/* <section className="features-section rel z-1 pt-150 rpt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 align-self-end">
              <div className="features-image left-image wow fadeInDown delay-0-2s">
                <Image
                  src="/assets/images/services/feature-left.jpg"
                  alt="Feature"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="features-section-content">
                <div className="section-title text-center mb-15">
                  <span className="bg-text">Services</span>
                  <span className="sub-title">What We Offer</span>
                  <h2>Expertise in Men&apos;s Grooming</h2>
                </div>
                <div className="features-item-wrap pb-150">
                  <div className="feature-item wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-beauty" />
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link href="/service-details">Exfoliating Facial</Link>
                      </h4>
                      <span>Face, Bald Head, Back or Chest</span>
                    </div>
                  </div>
                  <div className="feature-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-beauty-treatment-1" />
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link href="/service-details">Anti-Aging Facial</Link>
                      </h4>
                      <span>Combat Signs of Aging</span>
                    </div>
                  </div>
                  <div className="feature-item wow fadeInUp delay-0-6s">
                    <div className="icon">
                      <i className="flaticon-spa" />
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link href="/service-details">Beard Facial</Link>
                      </h4>
                      <span>Specialized Beard Treatments</span>
                    </div>
                  </div>
                  <div className="feature-item wow fadeInUp delay-0-8s">
                    <div className="icon">
                      <i className="flaticon-massage-1" />
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link href="/service-details">Premium Massage</Link>
                      </h4>
                      <span>Deep Tissue, Sports, and Lymphatic</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="features-image right-image wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/services/feature-right.jpg"
                  alt="Feature"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="reatures-leaf">
          <Image
            src="/assets/images/shapes/feature-leaf.png"
            alt="Leaf"
            width={200}
            height={200}
          />
        </div>
      </section> */}
      {/* Features Section End */}
      {/* Project Section Start */}
      {/* <Home1ProjectIsotop /> */}
      {/* Project Section End */}
      {/* Services Section Start */}
      <section className="services-page pt-140 rpt-90 pb-90 rpb-40" style={{ backgroundColor: 'var(--darker-bg)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-65">
                <span className="sub-title" style={{ color: 'var(--primary-color)' }}>Our Services</span>
                <h2 style={{ color: 'var(--text-color)' }}>Premium Men&apos;s Grooming</h2>
                <p style={{ color: 'var(--muted-text)' }}>
                  Specialized treatments designed specifically for men&apos;s needs. Experience luxury and precision with our expert services.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-2s" style={{ backgroundColor: 'var(--dark-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <Image 
                    src="/assets/images/services/service-1.jpg" 
                    alt="Exfoliating Facial" 
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="service-content" style={{ padding: '25px' }}>
                  <i className="flaticon-hand-cream" style={{ color: '#fff' }} />
                  <h5 style={{ margin: '15px 0 10px' }}>
                    <Link href="/booking">Exfoliating Facial</Link>
                  </h5>
                  <p style={{ color: 'var(--muted-text)' }}>Deep cleansing treatment for face, bald head, back or chest</p>
                  <Link href="/booking">
                    <a className="read-more" style={{ color: 'var(--primary-color)' }}>
                      book now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-4s" style={{ backgroundColor: 'var(--dark-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <Image 
                    src="/assets/images/services/service-2.jpg" 
                    alt="Anti-Aging Facial" 
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="service-content" style={{ padding: '25px' }}>
                  <i className="flaticon-beauty-treatment" style={{ color: '#fff' }} />
                  <h5 style={{ margin: '15px 0 10px' }}>
                    <Link href="/booking">Anti-Aging Facial</Link>
                  </h5>
                  <p style={{ color: 'var(--muted-text)' }}>Combat signs of aging with powerful, targeted treatments</p>
                  <Link href="/booking">
                    <a className="read-more" style={{ color: 'var(--primary-color)' }}>
                      book now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-6s" style={{ backgroundColor: 'var(--dark-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <Image 
                    src="/assets/images/services/service-3.jpg" 
                    alt="Beard Facial" 
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="service-content" style={{ padding: '25px' }}>
                  <i className="flaticon-liner" style={{ color: '#fff' }} />
                  <h5 style={{ margin: '15px 0 10px' }}>
                    <Link href="/booking">Beard Facial</Link>
                  </h5>
                  <p style={{ color: 'var(--muted-text)' }}>Specialized treatment for beard maintenance and skin health</p>
                  <Link href="/booking">
                    <a className="read-more" style={{ color: 'var(--primary-color)' }}>
                      book now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-8s" style={{ backgroundColor: 'var(--dark-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <Image 
                    src="/assets/images/services/service-4.jpg" 
                    alt="Premium Massage" 
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="service-content" style={{ padding: '25px' }}>
                  <i className="flaticon-massage" style={{ color: '#fff' }} />
                  <h5 style={{ margin: '15px 0 10px' }}>
                    <Link href="/booking">Premium Massage</Link>
                  </h5>
                  <p style={{ color: 'var(--muted-text)' }}>Deep Tissue, Sports, and Lymphatic massage options</p>
                  <Link href="/booking">
                    <a className="read-more" style={{ color: 'var(--primary-color)' }}>
                      book now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-1-0s" style={{ backgroundColor: 'var(--dark-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <Image 
                    src="/assets/images/services/service-5.jpg" 
                    alt="Manzilian Wax" 
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="service-content" style={{ padding: '25px' }}>
                  <i className="flaticon-spa-2" style={{ color: '#fff' }} />
                  <h5 style={{ margin: '15px 0 10px' }}>
                    <Link href="/booking">Manzilian Wax</Link>
                  </h5>
                  <p style={{ color: 'var(--muted-text)' }}>Professional male intimate waxing with discretion and comfort</p>
                  <Link href="/booking">
                    <a className="read-more" style={{ color: 'var(--primary-color)' }}>
                      book now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-1-2s" style={{ backgroundColor: 'var(--dark-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <Image 
                    src="/assets/images/services/service-6.jpg" 
                    alt="Body Waxing" 
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <div className="service-content" style={{ padding: '25px' }}>
                  <i className="flaticon-cbd-oil" style={{ color: '#fff' }} />
                  <h5 style={{ margin: '15px 0 10px' }}>
                    <Link href="/booking">Body Waxing</Link>
                  </h5>
                  <p style={{ color: 'var(--muted-text)' }}>Chest, Back, Legs, Arms, Ears, Nose and more</p>
                  <Link href="/booking">
                    <a className="read-more" style={{ color: 'var(--primary-color)' }}>
                      book now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* Feedback Section Start */}
      {/* <section className="feedback-section rel z-1" style={{ backgroundColor: 'var(--darker-bg)', padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="feedback-left-image" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}>
                <Image
                  src="/assets/images/feedback/feedback-left.jpg"
                  alt="Feedback"
                  width={500}
                  height={600}
                  objectFit="cover"
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))', zIndex: 1 }}></div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="feedback-right-content" style={{ padding: '30px 20px 30px 50px' }}>
                <div className="feedback-content">
                  <span className="sub-title" style={{ color: 'var(--primary-color)', fontSize: '18px', fontWeight: '600', marginBottom: '15px', display: 'block' }}>Testimonials</span>
                  <h2 style={{ color: 'var(--text-color)', marginBottom: '30px', fontSize: '36px', fontWeight: '700' }}>What Our Clients Say</h2>
                  <div style={{ padding: '20px 0', position: 'relative' }}>
                    <MensFeedBackSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-leaf" style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: '0.4', zIndex: '1' }}>
          <Image
            src="/assets/images/shapes/feedback-leaf.png"
            alt="Feedback Leaf"
            width={150}
            height={150}
          />
        </div>
      </section> */}
      {/* Feedback Section End */}
      {/* Booking Section Start */}
      <section className="booking-section pb-20 pt-40" style={{ backgroundColor: 'var(--darker-bg)' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <div className="booking-item" style={{ backgroundColor: 'var(--dark-bg)', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div
                  className="booking-image wow fadeInUp delay-0-2s"
                  style={{
                    backgroundImage: "url(assets/images/booking/booking-left-men.png)",
                    height: '300px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    zIndex: '1'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
                    zIndex: '2'
                  }}></div>
                </div>
                <div className="booking-content wow fadeInUp delay-0-4s" style={{ padding: '40px' }}>
                  <span className="bg-text" style={{ color: 'rgba(115, 115, 115, 0.2)' }}>Booking</span>
                  <h3 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>Book Now</h3>
                  <p style={{ color: 'var(--muted-text)', marginBottom: '25px' }}>
                    Experience our premium men&apos;s services in a sophisticated, comfortable environment. Our expert technicians are dedicated to providing exceptional treatments tailored to men&apos;s unique needs.
                  </p>
                  <ul style={{ marginBottom: '25px' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
                      <i className="far fa-clock" style={{ color: 'var(--primary-color)', fontSize: '20px', marginRight: '15px', marginTop: '5px' }} />
                      <div className="booking-info" style={{ flex: '1' }}>
                        <p style={{ color: 'var(--muted-text)', marginBottom: '20px' }}>
                          <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '5px' }}>Working Hours:</strong>
                          Mon to Fri: 7:30 am — 1:00 am <br />
                          Sat: 9:00 am — 1:00 am <br />
                          Sun: 9:00 am — 11:30 pm
                        </p>
                        <Link href="/booking">
                          <a className="theme-btn style-two" style={{ 
                            display: 'inline-block',
                            backgroundColor: '#B70704',
                            borderColor: '#B70704',
                            color: 'white !important'
                          }}>
                            Book Now{" "}
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
              <div className="booking-item" style={{ backgroundColor: 'var(--dark-bg)', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div
                  className="booking-image wow fadeInUp delay-0-6s"
                  style={{
                    backgroundImage: "url(assets/images/booking/booking-right-men.png)",
                    height: '300px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    zIndex: '1'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
                    zIndex: '2'
                  }}></div>
                </div>
                <div className="booking-content wow fadeInUp delay-0-8s" style={{ padding: '40px' }}>
                  <span className="bg-text" style={{ color: 'rgba(115, 115, 115, 0.2)' }}>address</span>
                  <h3 style={{ color: 'var(--text-color)', marginBottom: '20px' }}>Contact us</h3>
                  <p style={{ color: 'var(--muted-text)', marginBottom: '25px' }}>
                    Have questions about our men&apos;s services? Our knowledgeable staff is ready to assist you and provide information about our premium treatments.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)', fontSize: '20px', minWidth: '25px', marginRight: '15px', marginTop: '5px' }}></i>
                      <div className="booking-info">
                        <h5 style={{ color: 'var(--text-color)', margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Location</h5>
                        <p style={{ color: 'var(--muted-text)', margin: 0 }}>523 Main Street, 2nd Floor, New York City</p>
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <i className="fas fa-phone-alt" style={{ color: 'var(--primary-color)', fontSize: '18px', minWidth: '25px', marginRight: '15px', marginTop: '5px' }}></i>
                      <div className="booking-info">
                        <h5 style={{ color: 'var(--text-color)', margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>Hotline</h5>
                        <p style={{ color: 'var(--muted-text)', margin: 0 }}>
                          <a href="tel:9514757090" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>(951) 475-7090</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Section End */}
      </Layout>
    </div>
  );
};

export default MensServices;
