
import React from "react";
import brandHiringImage from '../../assets/images/brandhiring.png';
import { useNavigate } from "react-router-dom"; 
import Navbar from "../Navbar";
export default function BrandHiring() {
  const navigate = useNavigate(); 
  return (
    <>
      <div className="bg-white w-full font-sans">
        <div
          className="relative w-full h-[555px] bg-cover bg-center bg-no-repeat flex items-center"
          style={{ backgroundImage: `url(${brandHiringImage})` }}
        // style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.fQQ-mRqXRZ_mxYbbXDiRmQHaEK&pid=Api&P=0&h=180')" } }
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          <div className="relative z-10 pl-10 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 leading-snug">
              Find, <span className="text-blue-600">Apply</span>, and <span className="text-blue-600">Grow </span>
              with the Right Articleship <span className="text-blue-600">Opportunities</span>
            </h1>
            <button onClick={()=>navigate('/jobsearch')} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl bg-white shadow-xl rounded-xl flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-8">
            <div className="flex-1 text-center">
              <img
                src="https://img.icons8.com/color/48/000000/checked-user-male.png"
                alt="Skilled Candidates"
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 text-lg">
                Recruit <span className="font-bold">Talented professionals </span> <br />for your business
              </p>
            </div>

            <div className="flex-1 text-center">
              <img
                src="https://img.icons8.com/color/48/000000/factory.png"
                alt="Industry Experience"
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 text-lg">
                Onboard interns with cutting-edge  <span className="font-bold">industry skills</span>
              </p>
            </div>

            <div className="flex-1 text-center">
              <img
                src="https://img.icons8.com/color/48/000000/money.png"
                alt="Budget Friendly"
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 text-lg">
                Industry-ready interns <span className="font-bold">cost-ready solutions.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
