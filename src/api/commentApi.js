import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/comments/";
const baseUrl = "http://localhost:3003/comments/";

export function getComments() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveComment(comment) {
  return fetch(baseUrl + (comment.id || ""), {
    method: comment.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(comment)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteComment(commentId) {
  return fetch(baseUrl + commentId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
