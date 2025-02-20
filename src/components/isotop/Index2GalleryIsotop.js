import { useEffect, useRef, useState } from "react";

const Index2GalleryIsotop = () => {
  const isotope = useRef();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      import("isotope-layout").then((Isotope) => {
        setTimeout(() => {
          isotope.current = new Isotope.default(".gallery-wrap", {
            itemSelector: ".gallery-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".gallery-item",
            },
            animationOptions: {
              duration: 750,
              easing: "linear",
              queue: false,
            },
          });
        }, 1000);
      });
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="gallery-section bg-green text-white text-center pt-140 rpt-90 pb-120 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <div className="section-title mb-65">
              <span className="bg-text">gallery</span>
              <h2>We Have Done Lot’s Of Projects Take a Look Our Gallery</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="gallery-wrap">
          <div className="gallery-item wow fadeInUp delay-0-2s">
            <img src="/assets/images/projects/project-1.jpg" alt="Facial Treatment" />
            <div className="gallery-overlay">
              <a href="/assets/images/projects/project-1.jpg">
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
          <div className="gallery-item wow fadeInUp delay-0-4s">
            <img src="/assets/images/projects/project-2.jpg" alt="Massage Room" />
            <div className="gallery-overlay">
              <a href="/assets/images/projects/project-2.jpg">
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
          <div className="gallery-item big-item wow fadeInUp delay-0-6s">
            <img src="/assets/images/projects/project-3.jpg" alt="Spa Interior" />
            <div className="gallery-overlay">
              <a href="/assets/images/projects/project-3.jpg">
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
          <div className="gallery-item wow fadeInUp delay-0-8s">
            <img src="/assets/images/projects/project-4.jpg" alt="Body Treatment" />
            <div className="gallery-overlay">
              <a href="/assets/images/projects/project-4.jpg">
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
          <div className="gallery-item wow fadeInUp delay-0-6s">
            <img src="/assets/images/projects/project-5.jpg" alt="Product Display" />
            <div className="gallery-overlay">
              <a href="/assets/images/projects/project-5.jpg">
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
          <div className="gallery-item wow fadeInUp delay-1-0s">
            <img src="/assets/images/projects/project-6.jpg" alt="Wellness Center" />
            <div className="gallery-overlay">
              <a href="/assets/images/projects/project-6.jpg">
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Index2GalleryIsotop;
