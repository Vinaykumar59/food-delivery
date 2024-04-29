import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
   const timer =  setInterval(() => {
      console.log("setInterval triggered in functional component");
    }, 1000);
// return inside useEffect is used to cleanup the code 
    return() => {
      clearInterval(timer)
    }
  });
  return <h1> This is contact us page</h1>;
};

export default ContactUs;
