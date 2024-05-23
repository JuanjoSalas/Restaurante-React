import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Reserve = () => {
  const initialValue = {
    name: "",
    date: "",
    numberPerson: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!data.name) {
      setMessage("");
    } else if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else if (data.numberPerson < 1) {
      setMessage("Number must be at least 1 person");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('Reserve', JSON.stringify(data))
    console.log(data);
    setData(initialValue);
    navigate("/");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Insert your name"
        onChange={handleInputChange}
        value={data.name}
      />
      <input
        type="datetime-local"
        name="date"
        id="date"
        placeholder="Insert date"
        onChange={handleInputChange}
        value={data.date}
      />
      <input
        type="number"
        name="numberPerson"
        id="numberPerson"
        placeholder="Number of People"
        onChange={handleInputChange}
        value={data.numberPerson}
      />
      <input type="submit" value="Send" disabled={btnDisabled} />
      <p>{message}</p>
    </form>
  );
};

export default Reserve;
