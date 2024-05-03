import * as request from "../lib/request";

const baseUlr = "http://localhost:3030/jsonstore/comments"

export const create = async (gameId, username, text) => {
 const newComment = await request.post(baseUlr, {
    gameId,
    username,
    text
 });

 return newComment;

}