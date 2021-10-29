import axios from 'axios';

export const list = async (params) => {
    let url = 'https://rickandmortyapi.com/api/character/?';

    const paramsURL = new URLSearchParams(params?.filter).toString();
    url += paramsURL;

    const result = await axios.request({
        url,
        method: 'GET'
    });

    return result.data;
}