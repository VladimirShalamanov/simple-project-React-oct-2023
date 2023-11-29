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
    // In server sort not work for now!
    // -> discord - sortBy works without URLSearchParams
    // sortBy: `_createdOn desc`,

    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query.toString()}`);

    // const query = new URLSearchParams({
    //     distinct: "_ownerId='35c62d76-8152-4626-8712-eeb96381bea8'",       
    // });

    // const result = await request.get(`${baseUrl}?${query.toString()}`);

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