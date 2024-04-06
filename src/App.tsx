// import { useState } from "react";
//  import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      Jovlon, [4/5/2024 5:23 PM] mana obshi kod
      <div className="container grid gap-5">
        <div className="grid gap-4 items-start ">
          <img src="./assets/img/photo_2024-01-23_10-55-57.png" alt="user" />
          <h1 className="text-left font-semibold text-black text-xl">
            Javlon Bakhodirov
          </h1>
          <p className="text-left font-normal text-gray-500 text-lg">
            Frontend Developer
          </p>
        </div>
        <ul className="flex items-start justify-between">
          <li className="flex flex-col gap-2 text-left">
            <h2 className="font-medium text-lg text-black">Address</h2>
            <p className="font-normal text-base text-gray-500">
              2207 Beach Ave., Los Angeles
            </p>
          </li>
          <li className="flex flex-col gap-2 text-left">
            <h2 className="font-medium text-lg text-black">Phone</h2>
            <p className="font-normal text-base text-gray-500">
              +1 220 3938 1923
            </p>
          </li>
          <li className="flex flex-col gap-2 text-left">
            <h2 className="font-medium text-lg text-black">Email</h2>
            <p className="font-normal text-base text-gray-500">
              isabellafranc@gmail.com
            </p>
          </li>
        </ul>
        <div className="flex items-start gap-44">
          <h2 className="font-medium text-lg text-black">Email</h2>
          <p className="font-normal text-base text-gray-500 ">
            Graphic designer with +8 years of experience in branding and print
            design. Skilled at Adobe Creative Suite (Photoshop, Illustrator,
            InDesign) as well as sketching and hand drawing. Supervised 23 print
            design projects that resulted in an increase of 32% in savings.
          </p>
        </div>
        <div className="grid gap-4">
          <h1 className="font-medium text-lg text-black">Employment</h1>
          <div className="flex items-start ">
            <div className="flex flex-col gap-2 w-[95%]">
              <h2 className="font-medium text-lg text-black ">
                Oct 2012 — Sep 2015
              </h2>
              <p className="font-normal text-base text-gray-400">New York</p>
            </div>
            <div className="flex flex-col  gap-2">
              <h2 className="font-medium text-lg text-black">
                UI Designer at Market Studios
              </h2>
              <p className="font-normal text-base text-gray-500">
                Successfully translated subject matter into concrete design for
                newsletters, promotional materials and sales collateral. Created
                design theme and graphics for marketing and sales presentations,
                training videos and corporate websites.
              </p>
            </div>
          </div>
          <div className="flex items-start ">
            <div className="flex flex-col gap-2 w-[95%]">
              <h2 className="font-medium text-lg text-black ">
                Oct 2012 — Sep 2015
              </h2>
              <p className="font-normal text-base text-gray-400">New York</p>
            </div>
            <div className="flex flex-col  gap-2">
              <h2 className="font-medium text-lg text-black">
                UI Designer at Market Studios
              </h2>
              <p className="font-normal text-base text-gray-500">
                Successfully translated subject matter into concrete design for
                newsletters, promotional materials and sales collateral. Created
                design theme and graphics for marketing and sales presentations,
                training videos and corporate websites.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <h1 className="font-medium text-lg text-black">Education</h1>
          <div className="flex">
            <div className="flex flex-col gap-2 w-[30%]">
              <h2 className="font-medium text-lg text-black ">
                Oct 2012 — Sep 2015
              </h2>
              Jovlon, [4/5/2024 5:23 PM]
              <p className="font-normal text-base text-gray-400">New York</p>
            </div>
            <div className="flex flex-col  gap-2">
              <h2 className="font-medium text-lg text-black">
                Los Angeles University
              </h2>
              <p className="font-normal text-base text-gray-500">
                Master of Graphic Design
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-48">
          <h1 className="font-medium text-lg text-black">Skills</h1>
          <div className="flec flex-col gap-4">
            <ul className="flex items-center gap-12">
              <li className="list-disc ">
                <p className="font-normal text-base text-gray-500">Figma</p>
              </li>
              <li className="list-disc ">
                <p className="font-normal text-base text-gray-500">
                  Adobe Photoshop
                </p>
              </li>
              <li className="list-disc ">
                <p className="font-normal text-base text-gray-500">
                  Premiere Pro
                </p>
              </li>
            </ul>
            <ul className="flex items-center gap-12">
              <li className="list-disc ">
                <p className="font-normal text-base text-gray-500">Figma</p>
              </li>
              <li className="list-disc ">
                <p className="font-normal text-base text-gray-500">
                  Adobe Photoshop
                </p>
              </li>
              <li className="list-disc ">
                <p className="font-normal text-base text-gray-400">
                  Premiere Pro
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
