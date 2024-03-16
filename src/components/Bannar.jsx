import React from "react";
import bgImg from "../img/bannarImg.jpg";
const Bannar = () => {
  return (
    <div
      className="hero min-h-[700px] sm:w-auto rounded-2xl w-[102%] p-2"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="w-auto text-gray-800">
          <h1 className="mb-5 sm:text-5xl text-3xl font-bold ">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="mb-5 sm:text-2xl opacity-80">
            "Unlock Culinary Mastery: Personalized Cooking Classes Await!"{" "}
            <br />
            "Craft Your Culinary Journey: Tailored Classes for Epicurean
            Excellence!"
          </p>
          <div className="sm:flex grid justify-center gap-6 mt-12 ">
            <button
              className="btn bg-green-500 border-none hover:bg-green-900 
            hover:text-white text-2xl"
            >
              Exolor Now
            </button>
            <button
              class="btn btn-outline btn-success text-black 
            hover:text-white text-2xl"
            >
              Our Feadback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
