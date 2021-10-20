import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contract pt-5">
            <div>
                <h1 className="font-weight fs-2">Contract</h1>
                <small className="font-weight fs-5">Submit your information and we will help all</small>
                <div className="from-contain">
                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control className="p-3" type="email" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control className="p-3" type="email" placeholder="Enter email" />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="p-3" type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="p-5" type="message" placeholder="Message" />
                        </Form.Group>
                        <Button className="btn-c" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="text-center pt-2">
                <h1 className="font-weight">Medical Press</h1>
                <div className="font-weight side-corn text-center m-5 p-3 ">
                    <p>121 King Street, Melbourne</p>
                    <br />
                    <p>Victoria 3000 Australia</p>
                    <br />

                    <p>Phone :+1-800-123-4567</p>
                    <br />
                    <p> Fax :+1-123-456-7890</p>
                    <br />
                    <p>Tele-phone: 9454354545</p>

                </div>
            </div>
        </div >
    );
};

export default Contact;