import axios from 'axios';

const const FETCH_POSTS = 'FETCH_POSTS'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=@#$ASDZXC'
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request    
  }
}
