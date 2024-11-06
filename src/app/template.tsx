import React from "react";
import { BsFillChatFill } from "react-icons/bs";

const template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <div className=" h-max w-max fixed bottom-[10%] right-[5%] cursor-pointer z-50 drop-shadow-xl shadow-xl hover:opacity-75">
            <div className="flex items-center flex-col gap-4">
            <div className="text-6xl text-violet-500 ">
            <BsFillChatFill/>
            </div>
            <div className="border-2 bg-white p-2 rounded-md drop-shadow-xl shadow-xl">Ask question here.</div>
            </div>
        </div>
      <main>{children}</main>
    </div>
  );
};

export default template;
