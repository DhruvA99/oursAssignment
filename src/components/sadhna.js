import React from "react";
import sadhna1 from "../assets/sadhna1.jpg";
import classes from "./sadhna.module.css";

function SadhnaComponent() {
  return (
    <>
      <div className="flex flex-col my-7 px-5">
        <span className="font-bold text-2xl">Sādhāna</span>
        <span className="font-light">
          Your Daily Practice for Holistic Wellbeing
        </span>
        <div className="pl-4">
          <div className="flex flex-col relative pl-2">
            <div className={`flex flex-col ${classes.carddiv}`}>
              <div className="w-full">
                <img
                  className="w-4/5 rounded-2xl mx-auto"
                  src={sadhna1}
                  alt="sadhna"
                />
              </div>
              <div className="flex flex-col text-left pt-3">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold">Hatha Yoga</span>
                  <span className="text-base font-medium">30 min</span>
                </div>
                <span className="text-gray-700">
                  Led by{" "}
                  <span className="text-black font-medium">
                    Harshvardhan Jhaveri
                  </span>
                </span>
                <span className="text-gray-700">
                  Alumni of{" "}
                  <span className="text-black font-medium">
                    Kaivalyadham Yoga Institute
                  </span>
                </span>

                <span className="text-gray-600 py-3">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </span>
              </div>
            </div>
            <div className={`flex flex-col ${classes.carddiv}`}>
              <div className="w-full">
                <img
                  className="w-4/5 rounded-2xl mx-auto"
                  src={sadhna1}
                  alt="sadhna"
                />
              </div>
              <div className="flex flex-col text-left pt-3">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold">Hatha Yoga</span>
                  <span className="text-base font-medium">30 min</span>
                </div>
                <span className="text-gray-700">
                  Led by{" "}
                  <span className="text-black font-medium">
                    Harshvardhan Jhaveri
                  </span>
                </span>
                <span className="text-gray-700">
                  Alumni of{" "}
                  <span className="text-black font-medium">
                    Kaivalyadham Yoga Institute
                  </span>
                </span>

                <span className="text-gray-600 py-3">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </span>
              </div>
            </div>
            <div className={`flex flex-col ${classes.carddiv}`}>
              <div className="w-full">
                <img
                  className="w-4/5 rounded-2xl mx-auto"
                  src={sadhna1}
                  alt="sadhna"
                />
              </div>
              <div className="flex flex-col text-left pt-3">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold">Hatha Yoga</span>
                  <span className="text-base font-medium">30 min</span>
                </div>
                <span className="text-gray-700">
                  Led by{" "}
                  <span className="text-black font-medium">
                    Harshvardhan Jhaveri
                  </span>
                </span>
                <span className="text-gray-700">
                  Alumni of{" "}
                  <span className="text-black font-medium">
                    Kaivalyadham Yoga Institute
                  </span>
                </span>

                <span className="text-gray-600 py-3">
                  Start your day with a combination of Postures (Āsana) and
                  Breathwork (Prāṇāyāma) to balance the energy in your body and
                  enhance meditation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SadhnaComponent;
