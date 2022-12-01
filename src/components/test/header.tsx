import React from 'react';
import { Link } from 'react-router-dom';

const TestHeader: React.FC = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <span> | </span>
            <Link to="/getAll">Get All resources</Link>
            <span> | </span>
            <Link to="/getById">Get Single Resource</Link>
            <span> | </span>
            <Link to="/test">Test Link</Link>
        </div>
    );
};

export default TestHeader;
