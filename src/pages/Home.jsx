import { HtmlHead } from "../components/HtmlHead";
import { MusicPlayer } from "../components/MusicPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [section, setSection] = useState("message");

  const button =
    "w-[100px] py-1 bg-green-normal/50 text-white/95 text-sm transition duration-300 ease-in-out font-medium border-2 border-green-normal";
  const buttonActive =
    "w-[100px] py-1 bg-green-normal text-white text-sm transition duration-300 ease-in-out border-2 border-green-normal";

  // Array of image URLs
  const images = [
    "https://omahkayu.linkproductive.com/wp-content/uploads/2024/03/3.png",
    "https://omahkayu.linkproductive.com/wp-content/uploads/2024/03/3.png",
    "https://omahkayu.linkproductive.com/wp-content/uploads/2024/03/3.png",
    "https://omahkayu.linkproductive.com/wp-content/uploads/2024/03/3.png",
    "https://omahkayu.linkproductive.com/wp-content/uploads/2024/03/3.png",
    "https://omahkayu.linkproductive.com/wp-content/uploads/2024/03/3.png",
    // Add more image URLs here
  ];

  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <div className="relative flex h-screen flex-col overflow-clip bg-blue">
        {section === "message" && (
          <div className="px-4 pt-6 text-xl">
            Selamat ulang tahun ya cantik, semoga bla bla bla dan semakin bla
            bla bla. Thank you udah bla bla bla
          </div>
        )}

        {section === "galery" && (
          <div className="grid grid-cols-3 gap-1 px-4 py-7">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        )}

        {/* <button onClick={() => setShowModal(!showModal)}>Show modal</button> */}

        {/* Bottom section  */}
        <div className=" absolute bottom-0 z-[1] mb-4 flex w-full flex-col justify-center">
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
          <img src={selectedImage} alt="" className="h-full" />
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
          } absolute z-10 flex min-h-screen w-screen flex-col overflow-hidden bg-pink px-4 py-6 text-green-normal`}
        >
          <div className=" text-center font-title text-[100px] leading-[100px]">
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
            <button onClick={() => setShowModal(!showModal)}>
              <FontAwesomeIcon icon={faXmarkCircle} className=" text-red h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
