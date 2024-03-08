import { HtmlHead } from "../components/HtmlHead";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-pink px-4 py-12 font-display  text-green-normal">
        <div className=" text-center text-[76px] font-extrabold leading-[81px]">
          Happy <br /> Birthday
        </div>
        <img src="" alt="" className=" min-h-[50vh] py-6" />
        <div className="font-outline-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-6xl font-black text-transparent">
          21 21 21 21 21 <br />
          21 21 21 21 21 <br />
          21 21 21 21 21 <br />
          21 21 21 21 21 <br />
          21 21 21 21 21 <br />
          21 21 21 21 21 <br />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center text-3xl">My Lovely Flower Queen</div>
          <a>continue</a>
        </div>
      </div>
    </>
  );
}
