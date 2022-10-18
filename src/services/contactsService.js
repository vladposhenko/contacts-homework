import api from "../api/api";
import {CONTACTS_URI, POSTS_URI, USERS_URI} from "../constants";

export function getContactsList() {
  return api.get(CONTACTS_URI).then((resp) => resp.data);
}

export function getContact(id) {
  return api.get(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}

export function createContact(contact) {
  return api.post(CONTACTS_URI, contact).then((resp) => resp.data);
}

export function updateContact(contact) {
  debugger;
  return api.put(CONTACTS_URI + "/" + contact.id, contact).then((resp) => resp.data);
}

export function deleteContact(id) {
  return api.delete(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}

export function getUsers() {
  return api.get(USERS_URI).then((resp) => resp.data)
}

export function getPosts() {
  return api.get(POSTS_URI).then((resp) => resp.data)
}

export function getPost(id) {
  return api.get(POSTS_URI + "/" + id).then((resp) => resp.data);
}
