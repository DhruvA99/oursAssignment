import React from "react";
import BannerImage from "../assets/bannerImage.png";
import Bhagavgita from "../assets/bhagavgita.png";
import NonDuality from "../assets/non-duality.png";
import SelfInquiry from "../assets/self-inquiry.png";
import classes from "./maincontent.module.css";

function MainContent() {
  return (
    <div className="flex flex-col ">
      <img className="w-3/6 pt-20 mx-auto" src={BannerImage} />
      <div className="w-5/6 mx-auto mt-6 px-4">
        <h1 className="font-bold text-3xl py-2 leading-10">
          Live a Yogic Lifestyle
        </h1>
        <span className="text-sm font-normal">
          A Daily Practice consisting of Yoga, Meditation, Chanting and
          Relaxation Techniques, led by Traditional Indian Practitioners.
        </span>
      </div>
      <div>
        <button className="py-3 px-3  bg-gray-800 text-white w-3/6 mx-auto my-5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-2xl ">
          Get Early Access
        </button>
      </div>
      <div className="relative py-4 mt-12">
        <div className={`${classes.heading1}`}>
          <span className="font-bold relative px-4 text-2xl tracking-wide z-10 bg-white">
            Why OURS?
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-3">
        <div className="flex flex-col justify-center items-center w-5/6 mx-auto my-10">
          <img src={Bhagavgita} className="w-1/6" />
          <span className="font-semibold text-lg">Traditional</span>
          <span className="font-normal text-sm">
            Designed by alumni of the oldest Yoga institutes in India.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center w-5/6 mx-auto my-10">
          <img src={NonDuality} className="w-1/6" />
          <span className="font-semibold text-lg">Holistic</span>
          <span className="font-normal text-sm">
            A set of daily practices for your mind, body and spirit.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center w-5/6 mx-auto my-10">
          <img src={SelfInquiry} className="w-1/6" />
          <span className="font-semibold text-lg">For Beginners</span>
          <span className="font-normal text-sm">
            Master the basics, and unlock new techniques as you progress.
          </span>
        </div>
      </div>
      <div className="w-full rounded-2xl bg-gray-800 text-white flex flex-col items-center justify-center py-12">
        <span className="font-semibold text-2xl w-3/5 py-2">
          “Yoga is the journey, of the self, through the self, to the self”
        </span>
        <span className="font-normal text-sm">Bhagavad Gītā, Verse 6.20</span>
        <div className="w-5/6 border-t-2 border-white my-6"></div>

        <span className="my-1 mx-2 w-11/12 text-left">
          Yoga is the ancient Indian science of healthy living - harmonizing the
          relationship between mind, body and environment. Much more than a
          physical exercise, it is a disciplined and holistic lifestyle that
          includes of a variety of practices.
        </span>
        <span className="my-1 mx-2 w-11/12 text-left">
          Traditional Yoga is a combination of Ethical Rules (Yamas), Personal
          Observances (Niyamas), Posture (Āsana), Breathing (Prāṇāyāma),
          Withdrawal (Pratyāhāra), Concentration (Dhāraṇā) and Meditation
          (Dhyāna).
        </span>
        <span className="my-1 mx-2 w-11/12 text-left">
          Our Sādhanā (Daily Practice) is designed for you to incorporate this
          Yogic lifestyle through short lessons, which can be viewed at your
          convenience.
        </span>
      </div>
    </div>
  );
}

export default MainContent;
