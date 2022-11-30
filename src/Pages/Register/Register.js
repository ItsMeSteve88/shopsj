import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Container = styled.div`
  border-radius: 10px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: coral;
`;

const Title = styled.h1`
text-align: center;`;

const Box = styled.div`
background-color: lightgray;
width: 50%;
height: 50%;
padding: 20px;
margin: 0 auto;
border: 2px groove black;
border-radius: 10px;
`;

const Register = () => {
  return (
    <Container>
          {/* registration form */}
      <Box>
          <Title>REGISTER WITH US HERE</Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="email" placeholder="Surname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Click here to ignore our eventual email spam, we won't take it personally." />
          </Form.Group>
                  <Button variant="primary" type="submit" style={{ color: 'white', backgroundColor: 'green', borderColor: 'green' }}>
            Submit
          </Button>
        </Form>
      </Box>
    </Container>
  );
};

export default Register;
