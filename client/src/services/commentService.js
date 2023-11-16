import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/commets';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const create = async (gameId, username, text) => {
    const newCommet = await request.post(baseUrl, {
        gameId,
        username,
        text,
    });

    return newCommet;
};