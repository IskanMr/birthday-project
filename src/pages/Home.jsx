import { HtmlHead } from "../components/HtmlHead";
import { MusicPlayer } from "../components/MusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faNoteSticky,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import bgDuck from "../assets/img/bg-duck.png";
import Images from "../components/imageImport";
import VisibilitySensor from "react-visibility-sensor";

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

  const resetSelectedImage = () => {
    setShowImage(false);
    setSelectedImage({ name: null, src: null, description: null });
  };

  const onImageClick = (image) => {
    setShowImage(true);
    setSelectedImage(image);
  };

  const button =
    "w-[72px] py-1 bg-green-lighter text-green-normal text-sm transition duration-300 ease-in-out font-medium border-2 border-green-normal";
  const buttonActive =
    "w-[72px] py-1 bg-green-normal text-white text-sm transition duration-300 ease-in-out border-2 border-green-normal";

  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <div className="relative flex min-h-screen flex-col bg-blue py-2">
        {section === "message" && (
          <div className="z-10 mx-4 mt-6 flex flex-col space-y-3 rounded-md bg-white p-2 text-lg outline-2 outline-green-normal ">
            <div>
              SELAMAT ULANG TAHUN BUNGAKU CINTAKU KASIHKU SAYANGKU! 🎉🎉🎉
            </div>
            <div>Thank you yaa udah mau sama aku (engga kepaksa kan)</div>
            <div>
              Semoga dengan bertambahnya umur kamu, kamu semakin sukses, semakin
              cantik, semakin pinter, semakin makin (yang baik baik)
            </div>
            <div>Thank you for </div>
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
          } absolute z-20 flex min-h-screen w-screen flex-col overflow-hidden bg-pink py-6 text-green-normal`}
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

        {/* Background duck */}
        <div
          src={bgDuck}
          className=" absolute top-0  min-h-screen w-full bg-duck bg-contain"
          alt=""
        />
      </div>
    </>
  );
}
