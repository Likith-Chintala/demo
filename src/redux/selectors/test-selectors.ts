/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RootStateOrAny } from 'react-redux';

/* eslint-disable import/prefer-default-export */
export const selectAllResources = (state: RootStateOrAny) => state.testResources.resources.results;
export const selectAllResourcesCount = (state: RootStateOrAny) =>
    state.testResources.resources.count;
export const selectTestProcessingState = (state: RootStateOrAny) =>
    state.testResources.processingState;
