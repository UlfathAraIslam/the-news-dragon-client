import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FcGoogle />Login with Google</Button>{' '}
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/>facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/>twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/>instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone/>
            <div className='bg-image'>
                <h3>Create an Amazing Newspaper</h3>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;