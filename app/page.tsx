import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/type";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const allCars = await fetchCars({
    manufacturer: params.manufacturer || "",
    year: params.year || 2022,
    fuel: params.fuel || "",
    limit: params.limit || 10,
    model: params.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold ">car cata;pgue</h1>
          <p>explor the car </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key="car" car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">we out of cars</h2>
            <p>{allCars?.massage}</p>
          </div>
        )}
      </div>
    </main>
  );
}
