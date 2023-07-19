import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/76/76/about-us-website-landing-page-design-vector-25637676.jpg" />
            <h1>About</h1>
            <h2>This is Suraj's React learning phase</h2>
            <User name = {"Suraj Kumar (Function)"}/>
            <UserClass name = {"Suaraj Kumar (Function)"} location = {"Hajipur Class"}/>
        </div>
    )
}

export default About;