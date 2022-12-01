/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid } from 'carbon-components-react';
import React from 'react';
import { connect } from 'react-redux';
import TestHeader from './header';

export const TestComponent: React.FC = () => {
    return (
        <Grid>
            <TestHeader />
            <h3 className="st--m-t-16"> This is a Test Component</h3>
        </Grid>
    );
};

const mapStateToProps = (state: any, ownProps: any) => {};
const mapDispatchToProps = (dispatch: any) => {
    throw new Error('Function not implemented.');
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
