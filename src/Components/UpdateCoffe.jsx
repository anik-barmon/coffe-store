import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    useLoaderData();

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    // console.log(updatedCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className=" p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add Coffee</h1>
        <p className="mt-4">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            {/* 1 */}
            <label className="label">Name</label>
            <input
              defaultValue={name}
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter coffee Name"
            />
          </fieldset>
          {/* 2 */}
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              defaultValue={quantity}
              name="quantity"
              type="text"
              className="input w-full"
              placeholder="Enter coffee quantity"
            />
          </fieldset>
          {/* 3 */}
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              defaultValue={supplier}
              name="supplier"
              type="text"
              className="input w-full"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          {/* 4 */}
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Taste</label>
            <input
              defaultValue={taste}
              name="taste"
              type="text"
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          {/* 5 */}
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              defaultValue={price}
              name="price"
              type="text"
              className="input w-full"
              placeholder="Enter coffee price"
            />
          </fieldset>
          {/* 6 */}
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              defaultValue={details}
              name="details"
              type="text"
              className="input w-full"
              placeholder="Enter coffee details"
            />
          </fieldset>
        </div>
        {/* 7 */}
        <fieldset className="fieldset   bg-base-200 border-base-300 rounded-box  border my-6 p-4">
          <label className="label mx-auto">photo</label>
          <input
            defaultValue={photo}
            name="photo"
            type="text"
            className="input text-center w-full"
            placeholder="Enter coffee photo URL"
          />
        </fieldset>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default UpdateCoffe;
