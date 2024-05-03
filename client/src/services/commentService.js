import * as request from "../lib/request";

const baseUlr = "http://localhost:3030/jsonstore/comments"

export const getAll = async() => {
    const result = await request.get(baseUlr)

    return Object.values(result)
}

export const create = async (gameId, username, text) => {
 const newComment = await request.post(baseUlr, {
    gameId,
    username,
    text
 });

 return newComment;

}