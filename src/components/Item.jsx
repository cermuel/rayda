import React from "react";

const Item = ({ image, name, title, bid }) => {
  const abbrev = name?.split(" ");
  return (
    <div className="w-[290px] h-[353px] my-2 flex flex-col gap-3 border-[1px] rounded-xl border-[#D0D5DD] p-3">
      <img className="h-[130px] rounded-md w-full" src={image} alt={name} />
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
        Current Bid: <span className="font-bold">{bid}</span>
      </div>
      <div className="h-[1px] w-full bg-[#EAECF0]"></div>
      <button className="w-full rounded-lg py-3 bg-[#004CCC] text-white text-sm font-semibold">
        Add to wishlist
      </button>
    </div>
  );
};

export default Item;
