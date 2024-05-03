import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { user } from "../Utils/userContext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  async componentDidMount() {
    console.log("parent mounted");
  }

//   in class based components since we cannot use hooks , react provides us <context.consumer> component 
//  which has a callback function within which we can access data
  render() {
    console.log("parent render");
    return (
      <div className="about-us">
        <h5>This is About Us Page</h5>
        {/* <User name="Vinay Kumar" /> */}
        <user.Consumer>
            {(data) => <h1>User: {data.loggedInUser}</h1>}
        </user.Consumer>
        <UserClass name="child 1 :Vinay Kumar Class" location="Bangalore" />
        <UserClass name="child 2: Vinay Kumar Class" location="Bangalore" />

      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <h5>This is About Us Page</h5>
//       {/* <User name="Vinay Kumar" /> */}

//       <UserClass name="Vinay Kumar Class" location="Bangalore"/>
//     </div>
//   );
// };

export default AboutUs;

// explain how the components lifecycle occurs here with 2 child components
// => parent constructor
// parent render
// child1 constructor
// child1 render
// child2 constructor
// child2 render
// child1 componentDidMount
// child2 componentDidMount
// parent componentDidMount

// explaination => 
//  react lifecycle happends in two phases : => 1) render Phase, 2) Commit Phase

// react first completes the render phase first for parent and all its child components 
// which includes constructor and render later react goes to commit phase of lifecycle where it just 
// updates the DOM

//  react batches all the components for both render phase and commit phase, because of this behaviour
//  componentDidMount gets called in the end
// “Render phase” => Pure and has no side effects. May be paused, aborted or restarted by React.
// “Commit phase” => Can work with DOM, run side effects, schedule updates.


// lifecycle process
// constructor 
// render
// componentDidMount() --> here api call is made and data is stored in state
// componentDidUpdate() -->  since data is updated in the state variable  this lifecycle method is called 
//    => HTML DOM update 
//    => render
