import * as tuitsDao from './tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.image = "nasa.jpg";
    newTuit.topic = "NASA";
    newTuit.handle = "@nasa";
    newTuit.time = "1h";
    newTuit.dislikes = 0;
    newTuit.username = "NASA";
    newTuit.title = "Tesla stock falls below 200.";
    // tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    // const tuitIndex = tuits.findIndex(
    //     (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = 
    // {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate,updates);
    res.json(status);
    // res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params['tid'];
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter((t) =>
    // t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
    res.json(status);

}

// const findTuitById = (req, res) => {
//     const tuitId = req.params.tid;
//     const tuit = tuits
//       .find(t => t._id === tuitId);
//     res.json(tuit);
//   }  

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
//  app.get('/api/tuits/:tid', findTuitById);
}

