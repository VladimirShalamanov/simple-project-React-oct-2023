import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/commets';

export const getAll = async (gameId) => {
    /* For filter work with the server */

    // const query = new URLSearchParams({
    //     where: `gameId="${gameId}"`
    // });

    // const result = await request.get(`${baseUrl}?${query.toString()}`);

    const result = await request.get(baseUrl);

    // temp solution until migration
    return Object.values(result).filter(c => c.gameId === gameId);
}

export const create = async (gameId, username, text) => {
    const newCommet = await request.post(baseUrl, {
        gameId,
        username,
        text,
    });

    return newCommet;
};