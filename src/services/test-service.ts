/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const fetchResources = async () => {
    // This URL needs to be updated based on your domain;
    const fetchUrl = 'https://help.strobes.co/api/v2/help_center/articles/search.json?query=asset';
    const response = await axios.get(fetchUrl);
    if (response && [200, 201].indexOf(response.status) !== -1) {
        return response.data;
    }
    throw new Error('Error occurred while fetching records');
};
