import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import ConfettiExplosion from "react-confetti-explosion";

import { HtmlHead } from "../components/HtmlHead";
import { MusicPlayer } from "../components/MusicPlayer";
import Images from "../components/imageImport";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faNoteSticky,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

import bgDuck from "../assets/img/bg-duck.png";
import Cake from "../assets/img/cake.svg";
import Cat from "../assets/img/cat.svg";
import CatOpen from "../assets/img/cat-open.svg";
import Duck from "../assets/img/duck.svg";
import DuckOpen from "../assets/img/duck-open.svg";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    name: null,
    src: null,
    description: null,
  });
  const [section, setSection] = useState("message");
  const [showMusic, setShowMusic] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pickClicked, setPickClicked] = useState("cat");

  const bigExplodeProps = {
    force: 0.6,
    duration: 6500,
    particleCount: 200,
    floorHeight: 1600,
    floorWidth: 1600,
  };

  const source = {
    position: "absolute",
    right: "50%",
    left: "50%",
    top: "50%",
    bottom: "50%",
  };

  const onConfettiClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const resetSelectedImage = () => {
    setShowImage(false);
    setSelectedImage({ name: null, src: null, description: null });
  };

  const onImageClick = (image) => {
    setShowImage(true);
    setSelectedImage(image);
  };

  const onXClick = () => {
    setShowModal(false);
    onConfettiClick();
  };

  const button =
    "w-[72px] py-1 bg-green-lighter text-green-normal text-sm transition duration-300 ease-in-out font-medium border-2 border-green-normal";
  const buttonActive =
    "w-[72px] py-1 bg-green-normal text-white text-sm transition duration-300 ease-in-out border-2 border-green-normal";

  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="sebuah website untuk merayakan ulang tahun seorang wanita yang sangat spesial!"
        link="/"
      />
      <div className="relative flex min-h-screen flex-col bg-blue py-2">
        {section === "message" && (
          <div>
            <div className="mx-4 mt-6 flex flex-col space-y-3 rounded-md bg-white p-2 text-lg outline-2 outline-green-normal ">
              <div>
                SELAMAT ULANG TAHUN BUNGAKU CINTAKU KASIHKU SAYANGKU! 🎉🎉🎉
              </div>
              <div>
                Makaci udah mau spend a lot of time with me, eating, main, and
                exploring places. I really love spending time with you 💜
              </div>
              <div>
                Semoga dengan bertambahnya umur kamu, kamu semakin sukses,
                semakin cantik, semakin pinter, semakin makin yang baik baik
              </div>
            </div>
            <div className="flex items-center justify-around">
              <img src={Cat} alt="cat" />
              <img src={Duck} alt="duck" />
            </div>
          </div>
        )}

        {section === "galery" && (
          <div className="z-10 grid grid-cols-3 gap-[2px]">
            {Images.map((image, index) => (
              <VisibilitySensor>
                <img
                  key={index}
                  src={image.src}
                  alt={`${image.name}`}
                  onClick={() => onImageClick(image)}
                  className="h-[32vw] w-full object-cover"
                />
              </VisibilitySensor>
            ))}
          </div>
        )}

        {/* Bottom section  */}
        <div
          className={`${
            showMusic ? "" : "translate-y-[63%]"
          } fixed bottom-0 z-[11] mb-4 flex w-full flex-col justify-center transition-all duration-300 ease-in-out`}
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
              <FontAwesomeIcon
                icon={faNoteSticky}
                className={`${
                  section === "galery" ? " text-green-normal" : "text-white"
                } h-4 transition-all duration-300 ease-in-out`}
              />
            </button>
            <button
              className={`${
                section === "galery" ? buttonActive : button
              } rounded-r-md`}
              onClick={() => setSection("galery")}
            >
              <FontAwesomeIcon
                icon={faPhotoFilm}
                className={`${
                  section === "message" ? " text-green-normal" : "text-white"
                } h-4 transition-all duration-300 ease-in-out`}
              />
            </button>
          </div>
          <MusicPlayer />
        </div>

        {/* Modal image */}
        <div
          className={`modal ${
            showImage ? "open" : "close"
          } absolute z-20 flex min-h-screen w-screen flex-col overflow-hidden bg-white px-8 py-16 text-green-normal backdrop-blur-md`}
        >
          <img
            src={selectedImage.src}
            alt={`${selectedImage.name}`}
            className=" h-full object-cover"
          />
          <div className=" pt-2 text-center text-lg text-black">
            {selectedImage.description}
          </div>
          <button onClick={() => resetSelectedImage()}>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className=" mt-6 h-6 text-black"
            />
          </button>
        </div>

        {/* Modal Beginning */}
        <div
          className={`modal ${
            showModal ? "open" : "close"
          } absolute z-20 flex min-h-screen w-screen flex-col items-center overflow-hidden bg-pink py-6 text-green-normal`}
        >
          <div className=" text-center font-title text-[100px] leading-[100px]">
            Happy <br /> Birthday
          </div>
          <img
            src={Cake}
            alt="cake"
            className="w-4/5"
            onClick={() => setShowConfetti(true)}
          />
          <div className="fixed bottom-0 z-[1] mb-4 flex w-full flex-col justify-center">
            <div className=" text-center font-title text-3xl">to: </div>
            <div className="mb-7 text-center font-title text-4xl">
              My Lovely Cute Flower
            </div>
            <button onClick={() => onXClick()}>
              <FontAwesomeIcon icon={faXmarkCircle} className=" text-red h-6" />
            </button>
          </div>
        </div>

        {/* Background duck */}
        {/* <div
          src={bgDuck}
          className=" absolute top-0  min-h-screen w-full bg-duck bg-contain"
          alt=""
        /> */}

        {showConfetti && (
          <div style={source}>
            <ConfettiExplosion {...bigExplodeProps} />
          </div>
        )}
      </div>
    </>
  );
}
