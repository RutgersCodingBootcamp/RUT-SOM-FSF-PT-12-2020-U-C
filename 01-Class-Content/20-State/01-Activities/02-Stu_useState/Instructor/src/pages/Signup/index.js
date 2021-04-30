import React, {useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  // state = {
      // valuename: initValues
  // }
  // setState({ valuename: newValue })

  // const [ valuename, setterFunctionName ] = useState( initValues );
  const [username, setUsername] = useState("some name");
  const [password, setPassword] = useState("111");
  const handleSubmit = e => {
    e.preventDefault();
    const user = document.querySelector("[name=username]").value;
    const pass = document.querySelector("[name=password]").value;
    
    setUsername(user);
    setPassword(pass);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {username}!</h3>
          <p>I probably shouldn't tell you this, but your password is {password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
