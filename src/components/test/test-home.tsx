import { Grid } from 'carbon-components-react';
import React from 'react';
import TestHeader from './header';

const TestHome: React.FC = () => {
    return (
        <Grid>
            <TestHeader />
            <h3 className="st--m-t-16">You are in Home Page</h3>
        </Grid>
    );
};

export default TestHome;
