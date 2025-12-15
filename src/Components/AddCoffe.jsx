import React from "react";
import Swal from "sweetalert2";

const AddCoffe = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const details = form.details.value;
    // const photo = form.photo.value;
    // console.log(name, chef, supplier, taste, category, details, photo);
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    // send data to server {

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
        // console.log("after adding coffee", data);
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
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box  border p-4">
            {/* 1 */}
            <label className="label">Name</label>
            <input
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
            name="photo"
            type="text"
            className="input text-center w-full"
            placeholder="Enter coffee photo URL"
          />
        </fieldset>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default AddCoffe;
