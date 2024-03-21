import { HtmlHead } from "../components/HtmlHead";
import { MusicPlayer } from "../components/MusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import bgDuck from "../assets/img/bg-duck.png";
import Images from "../components/imageImport";
import { Img } from "react-image";
import "./Home.css";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [section, setSection] = useState("message");
  const [showMusic, setShowMusic] = useState(true);

  const MyLoader = () => <div>Loading...</div>;

  const MyErrorComponent = () => <div>Error loading image.</div>;

  const button =
    "w-[100px] py-1 bg-green-lighter text-green-normal text-sm transition duration-300 ease-in-out font-medium border-2 border-green-normal";
  const buttonActive =
    "w-[100px] py-1 bg-green-normal text-white text-sm transition duration-300 ease-in-out border-2 border-green-normal";

  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <div className="relative flex min-h-screen flex-col bg-blue">
        {section === "message" && (
          <div className="px-4 pt-6 text-xl">
            Selamat ulang tahun ya cantik, semoga bla bla bla dan semakin bla
            bla bla. Thank you udah bla bla bla
          </div>
        )}

        {section === "galery" && (
          <div className="grid grid-cols-3 gap-[2px] ">
            {Images.map((image, index) => (
              <Img
                key={index}
                loading="lazy"
                src={image}
                alt=""
                onClick={() => setSelectedImage(image)}
                className="h-[32vw] w-full object-cover"
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
              />
            ))}
          </div>
        )}

        {/* <button onClick={() => setShowModal(!showModal)}>Show modal</button> */}

        {/* Bottom section  */}
        <div
          className={`${
            showMusic ? "" : "translate-y-[63%]"
          } fixed bottom-0 z-[1] mb-4 flex w-full flex-col justify-center transition-all duration-300 ease-in-out`}
        >
          <button onClick={() => setShowMusic(!showMusic)}>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`${
                showMusic ? "rotate-180" : ""
              } mt-4 h-6 text-green-normal transition-all duration-300 ease-in-out`}
            />
          </button>
          <div className="mb-3 flex justify-center">
            <button
              className={`${
                section === "message" ? buttonActive : button
              } rounded-l-md`}
              onClick={() => setSection("message")}
            >
              Message
            </button>
            <button
              className={`${
                section === "galery" ? buttonActive : button
              } rounded-r-md`}
              onClick={() => setSection("galery")}
            >
              Galery
            </button>
          </div>
          <MusicPlayer />
        </div>

        {/* Modal image */}
        <div
          className={`modal ${
            selectedImage ? "open" : "close"
          } absolute z-10 flex min-h-screen w-screen flex-col overflow-hidden bg-black/50 px-4 py-6 text-green-normal backdrop-blur-md`}
        >
          <img src={selectedImage} alt="" className=" h-full" />
          <button onClick={() => setSelectedImage(null)}>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className=" mt-4 h-6 text-white"
            />
          </button>
        </div>

        {/* Modal Beginning */}
        <div
          className={`modal ${
            showModal ? "open" : "close"
          } absolute z-10 flex min-h-screen w-screen flex-col overflow-hidden bg-pink py-6 text-green-normal`}
        >
          <div className=" text-center font-title text-[100px] leading-[100px]">
            Happy <br /> Birthday
          </div>
          {/* <img src="" alt="" className=" min-h-[40vh] pb-6" /> */}
          <div className=" min-h-[40vh] pb-6"></div>
          {/* <div className="font-outline-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-[56px] font-black leading-[56px] text-transparent">
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
            21 21 21 21 21 21 21 <br />
          </div> */}
          <div className="fixed bottom-0 z-[1] mb-4 flex w-full flex-col justify-center">
            <div className=" text-center font-title text-3xl">to: </div>
            <div className="mb-7 text-center font-title text-4xl">
              My Lovely Cute Flower
            </div>
            <button onClick={() => setShowModal(!showModal)}>
              <FontAwesomeIcon icon={faXmarkCircle} className=" text-red h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
