"use client";

import React from "react";
import Image from "next/image";
import SearchManuFacturer from "./SearchManuFacturer";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }: { otherClass: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="hi"
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
