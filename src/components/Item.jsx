import React from "react";
// { image, name, title, bid }
const Item = () => {
  const name = "John Doe";
  const title =
    "Apple MacBook Air 13' M1 Chip 8GB 256GB 2020 Model - Rose Gold";
  const abbrev = name?.split(" ");
  const price = "₦141,999";
  return (
    <div className="w-[290px] h-[353px] my-2 flex flex-col gap-3 border-[1px] rounded-xl border-[#D0D5DD] p-3">
      <div className="h-[130px] bg-red-300 rounded-md w-full"></div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#F2F4F7] rounded-full flex items-center justify-center text-[#475467] text-sm font-medium">
          {abbrev[0][0] + "" + abbrev[1][0]}
        </div>
        <div className="text-[#344054] font-medium text-xs">
          {name}
          <span className="font-light">{"(Highest bidder)"}</span>
        </div>
      </div>
      <div className="text-[#101828] text-sm font-semibold">{title}</div>
      <div className="text-[#344054] text-sm">
        Current Bid: <span className="font-bold">{price}</span>
      </div>
      <div className="h-[1px] w-full bg-[#EAECF0]"></div>
      <button className="w-full rounded-lg py-3 bg-[#004CCC] text-white text-sm font-semibold">
        Add to wishlist
      </button>
    </div>
  );
};

export default Item;
