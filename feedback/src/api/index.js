import { BACKEND_DOMAIN } from "../config";
export const getUserData = async (url) => {
  const resp = await fetch(`${BACKEND_DOMAIN}${url}`);
  const data = await resp.json();
  return data;
};

export const getData = async (url) => {
  const resp = await fetch(`${BACKEND_DOMAIN}${url}`);
  const data = await resp.json();
  return data;
};
export const postData = async (url,data) => {
  const rep = await fetch(`${BACKEND_DOMAIN}${url}`, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
    },
  });
};
export const deleteData = async (url, id) => {
  const rep = await fetch(`${BACKEND_DOMAIN}${url}/${id}`, {
    method: "DELETE",
  });
};
export const putData = async (url, id, data) => {
  const rep = await fetch(`${BACKEND_DOMAIN}${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
