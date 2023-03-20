import gradient from "./assets/Image.png";
import logo from "./assets/logo.svg";
import { AiOutlineLike } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

export default function App() {
  return (
    <main className="bg-[#FCFCFD] w-screen p-8">
      <section className="border-b-[1px] pb-4 flex items-center justify-between border-[#EAECF0] mb-7">
        <div>
          <h1 className="text-[#101828] text-3xl font-semibold">Welcome</h1>
          <p className="text-[#475467]">
            Your current sales auction and activity.
          </p>
        </div>
        <div className="relative">
          <IoNotificationsOutline className="text-4xl" />
          <div className="absolute bottom-[-4px] right-[-4px] rounded-full bg-[#F04438] text-white text-xs h-6 w-6 flex items-center justify-center">
            2
          </div>
        </div>
      </section>
      <section className="relative h-[330px] rounded-xl border-[1px] border-[#EAECF0] p-4 my-6">
        <img
          src={gradient}
          alt={"Gradient"}
          className="w-full h-[58%] rounded-lg"
        />
        <div className="flex justify-between">
          <img
            src={logo}
            alt={"Gradient"}
            className="absolute bottom-2 h-[50%] rounded-full"
          />
          <div className="pl-[12%] mt-2">
            <h1 className="text-[#101828] text-2xl font-semibold">
              Starts in: 3 days : 2 hours : 24 minutes{" "}
            </h1>
            <div className="flex mt-2 gap-2 items-center">
              <div className="text-[#B54708] text-sm bg-[#FFFAEB] rounded-2xl py-1 px-3 flex items-center gap-1 font-medium">
                <RxDotFilled />
                Not Live
              </div>
              <div className="text-[#475467]">Layers Auction</div>
            </div>
          </div>
          <div className="px-3 py-2 mt-2">
            <div className="flex gap-2 text-sm items-center text-[#344054] font-semibold rounded-lg border-[1px] border-[#344054] px-4 py-2">
              <AiOutlineLike />
              Accept Invite
            </div>
          </div>
        </div>
      </section>
      <section className="rounded-xl border-[1px] border-[#EAECF0] px-4 py-8">
        <div className="flex justify-between items-center"></div>
      </section>
    </main>
  );
}
