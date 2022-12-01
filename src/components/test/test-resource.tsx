import { Grid } from 'carbon-components-react';
import React from 'react';
import TestHeader from './header';

const TestResource: React.FC = () => {
    return (
        <Grid>
            <TestHeader />
            <h3 className="st--m-t-16"> Info component</h3>
        </Grid>
    );
};

export default TestResource;
