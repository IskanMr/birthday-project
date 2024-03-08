import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { HtmlHead } from "../components/HtmlHead";

const NotFound = () => {
  return (
    <>
      <HtmlHead
        title="404"
        decription="[insert page description]"
        link="/404"
      />
      <div className="flex min-h-screen flex-grow flex-col items-center justify-center gap-6 p-8 text-green-normal sm:flex-row">
        <FontAwesomeIcon icon={faFrown} className=" text-red h-36 sm:h-48" />
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <h1 className="text-red mb-2 font-display text-8xl font-bold">404</h1>
          <p className="font-display text-xl">Halaman tidak ditemukan!</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
