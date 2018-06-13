import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { Container, Row, Col, Button } from 'reactstrap';

import './RegisterForm.scss';
class RegisterForm extends Component {

  render() {
    return (
      <div className="">
        <h1>Register Form</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={values => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          render={() => (
            <Container>
              <Col md={{offset: 3, size: 6}}>
              <Form>
                <Row>
                  <Field name="firstName" placeholder="Jane" />
                </Row>
                <Row>
                  <Field name="lastName" placeholder="Doe" />
                </Row>
                <Row>
                  <Field name="email" placeholder="jane@acme.com" type="email" />
                </Row>
                <Row>
                  <Field name="password" placeholder="********" type="password" />
                </Row>
                <Row>
                  <Field name="date" placeholder="m-d-y" type="date" />
                </Row>
                <Row>
                  <Button className="primaryButtonRegister" type="submit">Zarejestruj</Button>
                </Row>
              </Form>
              </Col>
            </Container>
          )}
        />
      </div>
    );
  }
}

export default RegisterForm;
