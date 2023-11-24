import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    /* For filter work with the server */

    // temp solution until migration
    // use filter with '/jsonstore/'
    // use query with '/data/'

    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query.toString()}`);

    // const result = await request.get(baseUrl);

    // return result.filter(c => c.gameId === gameId);

    return result;
}

export const create = async (gameId, text) => {
    const newCommet = await request.post(baseUrl, {
        gameId,
        text,
    });

    return newCommet;
};