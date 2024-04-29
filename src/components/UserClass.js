import React from "react" 
import { GIT_URL } from "../Utils/constants"

class UserClass extends React.Component {
    // in class based components whenever an instance of component is created "first constructor" is called, 
    // then "render" method is called
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 1,
            userInfo: {
                name: "Dummy",
                location: "default"
            }
        }
        console.log(this.props.name,"child constructor");
    }

    async componentDidMount() {
        console.log(this.props.name,"child mounted");
        const data = await fetch(GIT_URL);
        const res = await data.json();
        this.setState({
            userInfo: res
        })
        this.timer = setInterval(() => {
            console.log("set Interval triggered")
        }, 1000)
    }

    componentDidUpdate() {
        console.log("component Updated");
    }

    componentWillUnmount() {
        console.log("component will unmount");
        clearInterval(this.timer);
    }
    render() {
        // const {name, location} = this.props;
        const {count, count1} = this.state;
        const { name, location, avatar_url } = this.state.userInfo;
        console.log(this.props.name,"child render");
        return (
            <div className="about-us-page">
                <h1>class component</h1>
                <h1>count: {count}</h1>
                <button onClick={() => {
                    // never update state variables directly 
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Update count</button>
                {/* <h1>count1: {count1}</h1> */}
                <img src={avatar_url} className="avatar-logo"/>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h4>Contact: vinaykumarakl1998@gmail.com</h4>
          </div>
        )
    }
}

export default UserClass;