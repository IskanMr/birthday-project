import { HtmlHead } from "../components/HtmlHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const onShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <div className="relative">
        <div
          className={`${
            showModal ? "block" : "hidden "
          }" absolute z-10 flex min-h-screen w-screen flex-col overflow-hidden bg-pink px-4 py-6 text-green-normal`}
        >
          <div className=" text-center font-title text-[24vw] leading-[24vw]">
            Happy <br /> Birthday
          </div>
          {/* <img src="" alt="" className=" min-h-[40vh] pb-6" /> */}
          <div className=" min-h-[40vh] pb-6"></div>
          <div className="font-outline-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-[56px] font-black leading-[56px] text-transparent">
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className=" text-left text-xl">to: </div>
            <div className="text-center font-title text-5xl">
              My Lovely Cute Flower
            </div>
            <button onClick={onShowModal}>
              <FontAwesomeIcon icon={faXmarkCircle} className=" text-red h-6" />
            </button>
          </div>
        </div>
        <button onClick={onShowModal}>Show modal</button>
      </div>
    </>
  );
}
