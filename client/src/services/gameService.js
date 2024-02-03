import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    // return Object.values(result);
    return result;
}

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
}

export const getLatest = async () => {
    // Exaples with URL and URI, this not worked with 
    // softuni practice server.

    // const query = new URLSearchParams({
    //     sortBy: `_createdOn desc`,
    //     offset: 0,
    //     pageSize: 3,
    // });

    // const query = encodeURIComponent('offset=0&pageSize=3');

    // Use multiple search with '&' => param&param
    // for Searching  => where=title LIKE "3"
    // for Sorting    => sortBy=_createdOn%20desc
    // for Pagination => offset=0&pageSize=3

    // const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
    const result = await request.get(`${baseUrl}?offset=0&pageSize=3`);

    return result;
}

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;
}

export const edit = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData);

    return result;
}

export const remove = async (gameId) => await request.remove(`${baseUrl}/${gameId}`);