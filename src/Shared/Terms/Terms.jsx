import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo laboriosam autem corrupti, magnam exercitationem corporis, ab ipsa saepe fuga expedita sapiente quam sequi suscipit, dignissimos dolor accusantium vitae alias dicta?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;