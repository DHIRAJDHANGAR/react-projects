import { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";

class RegisterUser extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    number: "",
    gender: "",
    isMarried: "",
    student: "",
  };
  _handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type });

    if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
      return;
    }
    else if (type === "radio") {
        this.setState({
          [name]: checked,
        });
        return;
    }
    
    this.setState(
      {
        //[e.target.name]: e.target.value, // fName: Ankit, lName: Jain, email: a@a.com, contactNumber: 99, anyKey: anyValue
        [name]: value, // fName: Ankit, lName: Jain, email: a@a.com, contactNumber: 99, anyKey: anyValue
      },
      () => {
        console.log("Inside: ", this.state[name]);
      }
    );

    // console.log("Outside: ", this.state[name]);
  };

  _renderMaritalStatus = () => {
    const { isMarried } = this.state;
    if (isMarried === "") {
      return null;
    }

    return `I am ${isMarried ? "Married" : "Unmarried"}`;
  };

  _renderGenderStatus = () => {
    const { gender } = this.state;
    if (gender === "") {
      return null;
    }

    return `I am ${gender ? "Male" : "Female"}`;
  };

  _renderStudentStatus = () => {
    const { student } = this.state;
    if (student === "") {
      return null;
    }

    return `I am ${student ? "HTML" : "CSS"}`;
  };


  render() {
    const { fName, lName, email, number, gender, isMarried,student } = this.state;
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Input
                type="text"
                placeholder="Enter first name here"
                name="fName"
                value={fName}
                onChange={this._handleInputChange}
              />
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Enter last name here"
                name="lName"
                value={lName}
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Input
              type="email"
              name="email"
              placeholder="Enter email here"
              value={email}
              onChange={this._handleInputChange}
            />
          </Row>
          <Row>
            <Input
              type="number"
              placeholder="Enter phone number here"
              name="number"
              value={number}
              onChange={this._handleInputChange}
            />
          </Row>
          <Row>
            <Input
              type="checkbox"
              name="gender"
              checked={gender}
              onChange={this._handleInputChange}
            />
          </Row>
          <Row>
            <Input
              type="checkbox"
              name="isMarried"
              checked={isMarried}
              onChange={this._handleInputChange}
            />
          </Row>
          Gender:
          <Row>
            <Col>
              <Input
                type="radio"
                name="student"
                value={student}
                onChange={this._handleInputChange}
              />
            </Col>
            <Col>
              <Input
                type="radio"
                name="student"
                value={student}
                onChange={this._handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            {fName}
            <br />
            {lName}
            <br />
            {number}
            <br />
            {email}
            <br />
            {this._renderStudentStatus()}
            <br />
            {this._renderGenderStatus()}
            <br />
            {this._renderMaritalStatus()}
          </Row>
        </Container>
      </>
    );
  }
}
export default RegisterUser;
