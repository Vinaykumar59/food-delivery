import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("setInterval triggered in functional component");
    }, 1000);
    // return inside useEffect is used to cleanup the code
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4"> This is contact us page</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="name" />
        <input type="text" className="border border-black p-2 m-2" placeholder="message" />
        <button className="border border-black p-2 m-2 rounded bg-slate-100">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
