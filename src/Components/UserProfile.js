import { Component } from "react";

class UserProfile extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id="main-profile">
                <img src="profile.png" alt="profile-pic" />
                <h2> UserProfile Name </h2>
                <h3>React Creator</h3>
                <p> Lorem ipsiu</p>
            </div>
        )
    }
}

export default UserProfile
