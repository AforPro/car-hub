"use client";

import { CusButProps } from "@/type";
import Image from "next/image";
import React from "react";

const CusButton = ({
  title,
  containerStyle,
  handleClick,
  btntype,
  textStyles,
  righticon,
}: CusButProps) => {
  return (
    <button
      disabled={false}
      type={btntype || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {righticon && (
        <div className="relative w-6 h-6">
          <Image src={righticon} fill alt="icon" className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CusButton;
