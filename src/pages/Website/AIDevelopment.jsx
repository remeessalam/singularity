import React from "react";
import img1 from "../../assets/images/services-details/ai1.jpg";
import img2 from "../../assets/images/services-details/ai2.png";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack } from "react-icons/io";

const AIDevelopment = () => {
  const prev = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          AI Development
        </h2>
        <p data-aos="fade-up" className="description">
          At Singularity Designs, we specialize in delivering cutting-edge
          Artificial Intelligence solutions that automate processes, enhance
          decision-making, and elevate user experiences. With a focus on
          innovation and practicality, our AI development services are crafted
          to help businesses thrive in an increasingly digital and data-driven
          world.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Transforming Ideas into Intelligent Systems
        </h2>
        <p data-aos="fade-up" className="description">
          We work closely with businesses to identify opportunities for AI
          integration that drive measurable outcomes. From AI chatbots and
          virtual assistants to computer vision and natural language processing,
          our solutions are tailored to solve real-world challenges.
          <br />
          <br />
          Our AI services include predictive analytics, automated workflows,
          intelligent recommendation systems, and personalized digital
          interactions. Whether you're aiming to streamline operations or
          enhance customer engagement, we have the expertise to build smart
          systems that adapt and evolve with your business.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="AI systems"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">AI-Driven Automation</h3>
            </div>
            <p>
              We design intelligent systems that automate repetitive tasks,
              reduce manual errors, and improve productivity across departments.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Smart Insights & Analytics
              </h3>
            </div>
            <p>
              Gain deeper insights from your data with our custom AI solutions,
              helping you make faster, smarter, and data-informed decisions.
            </p>
          </div>
        </div>
      </div>
      <p>
        Our AI development team continuously explores advancements in artificial
        intelligence to ensure our clients stay ahead of the curve. From
        strategy to deployment, we’re here to build intelligent products that
        drive innovation and growth.
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
      </div>
    </div>
  );
};

export default AIDevelopment;
