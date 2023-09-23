import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const currentUser = {
        "username": "NASA",
        "handle": "@nasa",
        "image": "nasa.jpg",
       };
       
       const templateTuit = {
        ...currentUser,
        "topic": "Space",
        "time": "2h",
        "liked": false,
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes":0,
        "disliked":false
       }
    const newtuit = {...templateTuit,...tuit}
    const response = await axios.post(TUITS_API, newtuit)
    return response.data;
}

export const findTuits  = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
    const response = await axios
    .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}