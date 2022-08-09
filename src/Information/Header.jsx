import { Component } from "react";
import "./main.css";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          gender:"",
          date:"",
          time: "",
          number: "",
          email:"",
          city :"",
          feedback:"",
    }
}
    render(){
        return(
            <>
            <div className="parent">
                <div className="header">Personal Information Form</div>
                <div className="name">Name: 
                <input placeholder="Enter Full Name"
                onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    });
                }}/>
                </div>
                <div className="define-gender">
                Gender:
                <input type="radio" name="gender" className="gender" value={"male"} onChange={(e) => {
                    this.setState({
                        gender: e.target.value
                    });
                }}/>MALE
                <input type="radio" name="gender" className="gender" value={"female"} onChange={(e) => {
                    this.setState({
                        gender: e.target.value
                    });
                }}/>FEMALE
            </div>
            <div className="date-time">
                DATE:
                <input type="date" onChange={(e) => {
                    this.setState({
                        date: e.target.value
                    });
                }}/>
                TIME:
                <input type="time" onChange={(e) => {
                    this.setState({
                        time: e.target.value
                    });
                }}/></div>
              
            <div className="number-mail">
                <input type="number" placeholder="PHONE NO:" onChange={(e) => {
                    this.setState({
                        number: e.target.value
                    });
                }}/>
                <input type="email" placeholder="Email:" onChange={(e) => {
                    this.setState({
                        email: e.target.value
                    });
                }}/>
            </div>
            <div className="city-name">City: 
                <input type="checkbox" value={"Mumbai"} onChange={(e) => {
                    this.setState({
                        city: e.target.value
                    });
                }}/>Mumbai
                <input type="checkbox" value={"Pune"} onChange={(e) => {
                    this.setState({
                        city: e.target.value
                    });
                }}/>Pune
                <input type="checkbox" value={"Nashik"} onChange={(e) => {
                    this.setState({
                        city: e.target.value
                    });
                }}/>Nashik
                </div>Feedback :
                <textarea cols="30" rows="10" placeholder="Write Feedback Here...!" onChange={(e) => {
                    this.setState({
                        feedback: e.target.value
                    });
                }}></textarea>
            </div>
            <div className="information">
                <div>Full Name = {this.state.name}</div>
                <div>Email = {this.state.email}</div>
                <div>Number = {this.state.number}</div>
                <div>Birthdate = {this.state.date}</div>
                <div>Gender = {this.state.gender}</div>
                <div>Feedback for me = {this.state.feedback}</div>
                <div>City = {this.state.city}</div>
                <div>Time = {this.state.time}</div>
            </div>
            </>
        );
    };
};
export default Header;