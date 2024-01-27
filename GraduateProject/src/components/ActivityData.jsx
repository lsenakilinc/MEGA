import { Component } from "react";
import Mountain1 from  "../assets/1.jpg"
import Mountain2 from  "../assets/2.jpg"
import Mountain3 from  "../assets/3.jpg"
import  Mountain4 from  "../assets/4.jpg"
import "./ActivityApp.css";

class ActivityData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="act-text">
                <h2>{this.props.heading}</h2>
                <p>
                {this.props.text}
                </p>
            </div>

            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
            </div>
        </div>  
        )
    }
}

export default ActivityData