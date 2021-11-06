import React from "react";
import { useState } from "react";
import "../App.css";

// const validText = /^\d{a,z}$/;

const ActivityForm = () => {
  // const [text, setText] = useState('');

  //   const handleChange = ({ target })=> {
  //       const newText = target.value;
  //       const isValid = newText;
  //       if (isValid) {
  //         setText(newText);
  //       }
  //   };

  // const [user, setUser] = useState({
  //   name: "",
  //   description: "",
  // });

  // const handleInputs = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;
  //   value = e.target.value;
  //   setUser({ ...user, [name]: value });
  // };
  // https://www.youtube.com/watch?v=KUF9-QAxjZc

  return (
    <>
      <a className="logo-style" href="#">
        fitrack
      </a>
      <div class="container">
        <h4>Activity Group</h4>
        <form>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              required
              placeholder="Enter your name"
              minlength="4"
              // value={user.name}
              // onChange={handleInputs}
              pattern="[A-Za-z]"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter description"
              style={{ backgroundColor: "#eee" }}
              minlength="10"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Select Activity:</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              style={{ backgroundColor: "#eee" }}
            >
              <option>Run</option>
              <option>Bicycle</option>
              <option>Ride</option>
              <option>Swim</option>
              <option>Walk</option>
              <option>Hike</option>
            </select>
          </div>

          <div className="form-group">
            <label for="duration">Duration(hours):</label>
            <input
              className="inputreact without_ampm"
              type="time"
              id="duration"
              name="duration"
              min="1"
              max="12"
              step="0.001"
            />
          </div>

          <div className="form-group">
            <label for="datee">Date:</label>
            <input type="date" id="datee" required />
          </div>

          <button id="button" type="submit" className="btn mb-2">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default ActivityForm;
