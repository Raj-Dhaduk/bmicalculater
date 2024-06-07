"use client";
import React, { useState } from "react";
import './../Bimcal/page.css'

const page = () => {
  const [height, setHeigh] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState();
  const [error,setError]=useState()

  const Calculatebmi = (e) => {
    e.preventDefault();
    setError('');
    if (weight === '' || height === '') {
      setError('Please enter both weight and height');
      return;
    }

  const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height);

    if (isNaN(weightInKg) || isNaN(heightInMeters) || weightInKg <=0 || heightInMeters <= 0) {
      setError('Please enter valid numbers for weight and height');
      return;
    }
    
      const heightinmeater = heightInMeters / 100;
      const bmiValue = weightInKg / (heightinmeater * heightinmeater);
    setBmi(bmiValue.toFixed(2));

      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    
  };

  return (
    <div className="cal">
      <div className="box">
      <h1>BMI Calculater</h1>
      <form onSubmit={Calculatebmi}>
        <div className="height">
        <label>Height(cm):</label>
          <input
            type="number"
            placeholder="Enter Height"
            value={height}
            onChange={(e) => setHeigh(e.target.value)}
          />
        </div>

        <div className="weight">
          <label>Weight(Kg):</label>
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button type="submit">Calculate BMI</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bmi && (
        <div className="bmi">
          <h2>Your BMI is: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default page;
