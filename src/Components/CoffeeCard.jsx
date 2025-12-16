import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, price, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      timer: 5000,
    }).then((result) => {
      if (result.isConfirmed) {
        //send delete request to server
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
                timer: 1500,
              });
              //remove deleted coffee from UI
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-gray-800 card-side   shadow-sm">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="flex   text-white">
        <div
          className="py-4 flex flex-col gap-2
        justify-center"
        >
          <h2 className="">Name: {name}</h2>
          <p>{details}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
        </div>
        <div className=" flex flex-col justify-center gap-4 ml-16">
          <Link to={`/coffee/${_id}`}>
            <button className="btn btn-primary">View</button>
          </Link>
          <Link to={`/update-coffe/${coffee._id}`}>
            <button className="btn btn-sm btn-primary">Update</button>
          </Link>

          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
