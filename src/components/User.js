import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="about-us-page">
      <h1>function component</h1>
      <h1>count: {count}</h1>
      <h1>count1: {count1}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Bangalore</h2>
      <h4>Contact: vinaykumarakl1998@gmail.com</h4>
    </div>
  );
};

export default User;
