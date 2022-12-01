/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, FilterDataType, ProcessingType, StDataTable } from '@strobes/components';
import { Grid } from 'carbon-components-react';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as TestActions from 'redux/actions/test-actions';
import {
    selectAllResources,
    selectAllResourcesCount,
    selectTestProcessingState,
} from 'redux/selectors/test-selectors';
import TestHeader from './header';

interface Props {
    allResources: any;
    allResourcesCount: number;
    getAll(): void;
    processingState: any;
}

const headerData: Field[] = [
    {
        key: 'title',
        displayName: 'Title',
        endpointKey: 'title',
        dataType: FilterDataType.String,
    },
    {
        key: 'name',
        displayName: 'Name',
        endpointKey: 'name',
        dataType: FilterDataType.String,
    },
    {
        key: 'snippet',
        displayName: 'Code Snippet',
        endpointKey: 'snippet',
        dataType: FilterDataType.String,
    },
    {
        key: 'html_url',
        displayName: 'Link',
        endpointKey: 'link',
        dataType: FilterDataType.String,
    },
];

const GetAll: React.FC<Props> = ({ allResources, getAll, allResourcesCount, processingState }) => {
    useEffect(() => {
        getAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [loading, setLoading] = useState<boolean>(true);
    const buildData = () => {
        return (
            <div>
                <p>Resources Count: {allResourcesCount}</p>
                <StDataTable
                    showTableLoading={loading}
                    rows={allResources || []}
                    headers={headerData}
                />
            </div>
        );
    };

    useEffect(() => {
        if (processingState && processingState.status === ProcessingType.Success) {
            setLoading(false);
        }
        if (processingState && processingState.status === ProcessingType.Failure) {
            setLoading(false);
        }
    }, [processingState]);
    return (
        <Grid>
            <TestHeader />
            {allResources && buildData()}
        </Grid>
    );
};

const mapStateToProps = (state: any) => {
    return {
        allResources: selectAllResources(state),
        allResourcesCount: selectAllResourcesCount(state),
        processingState: selectTestProcessingState(state),
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    getAll: () => dispatch(TestActions.fetchRecordsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAll);
