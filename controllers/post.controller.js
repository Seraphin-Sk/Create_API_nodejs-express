const postModel = require('../models/post.model'); 

// Affiche API post model
module.exports.allPosts = async (req, res) => {
    try {
        const docs = await postModel.find().sort({ createdAt: -1 });
        return res.status(200).send(docs);
    } catch (err) {
        return res.status(400).send('Il y a une erreur de la réponse' + " " + err);
    }
};

// Crée API post model
module.exports.addPost = async (req, res) => {
    const newPost = new postModel({
        title: req.body.title,
        content: req.body.content,
        autor: req.body.autor,  // Assure-toi d'utiliser le bon champ
    });

    // Ajoute le nouveau post à la base de données
    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};







//affiched API post model
// module.exports.allPosts = (req, res) => {
//     postModel.find((err, docs) => {
//         if (!err) return res.status(200).send(docs);
//         else return res.status(400).send( 'Il y a une erreur de la réponse' + " " + err)
//     })
//     .sort({createdAt: '-1'})
// }
 