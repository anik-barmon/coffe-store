import React from "react";
import { useLoaderData, useParams } from "react-router";

const CoffeeDetails = () => {
  const { id } = useParams();
  const coffees = useLoaderData();
  const coffee = coffees.find((c) => c._id === id);
  const { name, quantity, price, details, photo } = coffee;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-2">Quantity: {quantity}</p>
          <p className="py-2">Price: {price}</p>
          <p className="py-6">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
