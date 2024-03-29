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

import Clouds from "../assets/img/clouds2.png";
import Grass from "../assets/img/grass.png";
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
  const [catPick, setCatPick] = useState(false);
  const [duckPick, setDuckPick] = useState(false);

  const bigExplodeProps = {
    force: 0.8,
    duration: 3000,
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
    zIndex: 100,
  };

  const resetSelectedImage = () => {
    setShowImage(false);
    setSelectedImage({ name: null, src: null, description: null });
  };

  const onConfettiClick = () => {
    setShowConfetti(true);
    const audio = new Audio(
      "https://pointxpal.com/wp-content/uploads/2024/03/confeti.mp3"
    );
    audio.play();
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };

  const onImageClick = (image) => {
    setShowImage(true);
    setSelectedImage(image);
  };

  const onXClick = () => {
    setShowModal(false);
    onConfettiClick();
  };

  const onCatClick = () => {
    setCatPick(true);
    onConfettiClick();
    const audio = new Audio(
      "https://pointxpal.com/wp-content/uploads/2024/03/meow.mp3"
    );
    audio.play();
    setTimeout(() => {
      setCatPick(false);
    }, 600);
  };

  const onDuckClick = () => {
    setDuckPick(true);
    onConfettiClick();
    const audio = new Audio(
      "https://pointxpal.com/wp-content/uploads/2024/03/quack.mp3"
    );
    audio.play();
    setTimeout(() => {
      setDuckPick(false);
    }, 600);
  };

  const button =
    "w-[72px] py-1 bg-pink-light text-green text-sm transition duration-300 ease-in-out font-medium border-2 border-pink";
  const buttonActive =
    "w-[72px] py-1 bg-pink text-white text-sm transition duration-300 ease-in-out border-2 border-pink";

  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="sebuah website untuk merayakan ulang tahun seorang wanita yang sangat spesial!"
        link="/"
      />
      <div
        className="relative flex min-h-screen flex-col bg-blue py-2"
        style={{
          backgroundImage: `url(${Clouds})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {section === "message" && (
          <div>
            <div
              className="mx-4 mt-6 flex flex-col space-y-3 rounded-md bg-white p-2 text-lg outline-2 outline-green "
              style={{
                boxShadow:
                  "10px 12px 0px rgba(0, 0, 0, 0.3), -1px -1px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
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

            <div className=" absolute bottom-[27vh] z-[10] flex w-full items-center justify-around">
              <img
                src={catPick ? CatOpen : Cat}
                alt="cat"
                className="translate-y-3"
                onClick={() => onCatClick()}
              />
              <img
                src={duckPick ? DuckOpen : Duck}
                alt="duck"
                onClick={() => onDuckClick()}
              />
            </div>
            <div
              className=" absolute bottom-0 flex h-[30vh] w-full bg-green-lighter"
              style={{
                backgroundImage: `url(${Grass})`,
                backgroundRepeat: "repeat",
                backgroundSize: "contain",
              }}
            />
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
              } mt-4 h-6 text-pink transition-all duration-300 ease-in-out`}
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
                  section === "galery" ? " text-pink" : "text-pink-light"
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
                  section === "message" ? " text-pink" : "text-pink-light"
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
          } absolute z-20 flex min-h-screen w-screen flex-col overflow-hidden bg-white px-8 py-16 text-green backdrop-blur-md`}
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
          } absolute z-20 flex min-h-screen w-screen flex-col items-center overflow-hidden bg-pink py-6 text-green`}
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
        <div
          src={Clouds}
          className=" absolute top-0 h-[70vh] w-full "
          alt="clouds"
        />

        {showConfetti && (
          <div style={source}>
            <ConfettiExplosion {...bigExplodeProps} />
          </div>
        )}
      </div>
    </>
  );
}
