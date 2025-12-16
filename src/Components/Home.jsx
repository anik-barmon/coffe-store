import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-6 p-24">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
