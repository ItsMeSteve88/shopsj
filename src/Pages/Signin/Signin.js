import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

const Title = styled.h1`
text-align: center;`;

const Box = styled.div`
  background-color: lightgray;
  width: 50%;
  height: 40%;
  padding: 20px;
  margin: 0 auto;
  border: 2px groove black;
  border-radius: 10px;
`;



const Signin = () => {
  return (
    <Container>
      {/* registration form */}
    <Box>
      <Title>LOG IN NOW</Title>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{color: 'white', backgroundColor: 'green', borderColor: 'green'}}>
          Submit
        </Button>
      </Form>
    </Box>
  </Container>
  )
}

export default Signin