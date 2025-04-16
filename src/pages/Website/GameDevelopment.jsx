import React from "react";
import img1 from "../../assets/images/services-details/game1.jpg";
import img2 from "../../assets/images/services-details/game2.png";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const GameDevelopment = () => {
  const prev = services[2];
  const next = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="game development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Game Development Services
        </h2>
        <p data-aos="fade-up" className="description">
          In today's fast-paced digital landscape, game development has become
          an essential component for businesses seeking to engage audiences,
          showcase innovation, and drive growth. At Singularity Designs, we
          offer comprehensive game development services designed to bring
          creative ideas to life and deliver immersive experiences. Our focus on
          delivering tailored solutions ensures that clients can captivate their
          users while optimizing performance across platforms.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Elevating Interactive Experiences
        </h2>
        <p data-aos="fade-up" className="description">
          Game development provides numerous advantages, including user
          engagement, brand storytelling, and immersive design. By investing in
          interactive experiences, organizations can significantly boost their
          digital presence and build lasting relationships with users. This
          creative medium is particularly beneficial for startups and
          entertainment brands, which can access unique technology to stand out
          without a hefty investment.
          <br />
          <br />
          At Singularity Designs, we offer a range of game development services,
          including mobile games, web-based games, and VR/AR game experiences.
          Our mobile solutions provide businesses with customized,
          high-performance games that reach wide audiences. With web games, we
          enable clients to engage users directly in-browser, enhancing
          accessibility and user convenience.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="game development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cross-Platform Compatibility
              </h3>
            </div>
            <p>
              Our game development services ensure seamless performance across
              devices, maximizing reach and user retention.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Creative Design and Mechanics
              </h3>
            </div>
            <p>
              We design engaging gameplay mechanics and captivating visuals,
              ensuring a memorable experience for all users.
            </p>
          </div>
        </div>
      </div>
      <p>
        As technology continues to evolve, Singularity Designs remains committed
        to exploring new advancements in game development. We stay informed
        about emerging trends and innovations, ensuring that our clients benefit
        from the latest capabilities. Our dedication to continuous improvement
        drives us to refine our gaming solutions, providing clients with
        cutting-edge experiences that elevate their brand impact.
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

export default GameDevelopment;
