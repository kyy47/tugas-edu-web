import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

function AboutUs() {
  return (
    <section className=" md:p-10 mt-6 md:mt-0" id="about-us">
      <div className="relative flex flex-col justify-center">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="py-5 text-sm">
          your have any questions or need further assistance, please feel free
          to reach out to us.
        </p>
        <div className="flex flex-col mb-5 w-1/2">
          <div className="py-2">
            <div className="flex">
              <a href="info@eduweb.co.id">
                <FiMail size={40} />
              </a>
              <div className="pl-3">
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-sm text-gray-500">info@eduweb.co.id.</p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex">
              <a href="">
                <FiPhone size={40} />
              </a>
              <div className="pl-3">
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-sm text-gray-500">89 77 090 2221</p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="flex">
              <a href="">
                <GrLocation size={40} />
              </a>
              <div className="pl-3">
                <h3 className="font-semibold text-gray-800">Adress</h3>
                <p className="text-sm text-gray-500">
                  Jalan Raya Zamia, No.2 Desa Lelede Banyumulek, Kediri, West{" "}
                  <br />
                  Lombok Regency, West Nusa Tenggara 83362.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
