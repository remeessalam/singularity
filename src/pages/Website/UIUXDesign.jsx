import React from "react";
import img1 from "../../assets/images/services-details/blockchain1.jpg";
import img2 from "../../assets/images/services-details/blockchain2.jpeg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const UIUXDesign = () => {
  const prev = services[2];
  const next = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-top"
        alt="uiux"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          UI/UX Design
        </h2>
        <p data-aos="fade-up" className="description">
          Great design is at the heart of every great user experience. At AI
          Company, we specialize in creating intuitive and visually stunning
          interfaces that make digital products easy to use and enjoyable. Our
          UI/UX design services focus on enhancing user satisfaction by
          improving the usability, accessibility, and interaction of your
          products.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          User-Centered Design for Business Success
        </h2>
        <p data-aos="fade-up" className="description">
          We prioritize users in every step of our design process. Whether it’s
          conducting in-depth research, building wireframes, or testing
          usability, our goal is to create designs that serve real people with
          real needs. At AI Company, we help businesses translate their vision
          into products that are not only functional but a delight to use.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="uiux"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Wireframing & Prototyping
              </h3>
            </div>
            <p>
              Visualize your product with detailed wireframes and prototypes
              that map the user journey and guide development.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                User Interface (UI) Design
              </h3>
            </div>
            <p>
              Create beautiful, functional interfaces that reflect your brand
              and provide a seamless experience across all platforms.
            </p>
          </div>
        </div>
      </div>
      <p>
        At AI Company, we believe UI/UX design goes beyond aesthetics. We build
        experiences that resonate with your audience by combining creativity
        with strategic thinking. From user research to final delivery, our team
        ensures every element contributes to a more engaging, user-friendly
        digital product.
      </p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={prev.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{prev.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              <IoIosArrowRoundBack className="text-2xl" /> Previous
            </p>
          </div>
        </Link>
        <Link to={next.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt=""
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UIUXDesign;
