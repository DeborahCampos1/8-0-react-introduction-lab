import { Component } from "react";

class NavBar extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id="navbar">
                <button>What is Pursuit</button>
                <button> Create an Account</button>
                <button>Sign In</button>
            </div>
        )
    }
}
export default NavBar 