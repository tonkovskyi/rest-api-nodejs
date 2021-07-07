const db = require('../db')

class PostController {
    async createPost(req, res){
        const {title, content, author} = req.body
        const newPost = await db.query(`Insert INTO posts (title, content, author) values ($1, $2, $3) RETURNING *`, [title, content, author])
        res.json(newPost.rows[0])
    };
    async getPostById(req, res){
        const id = req.params.id
        const post = await db.query('SELECT * FROM posts where id = $1', [id])
        res.json(post.rows[0])
    };
    async updatePost(req, res){
        const {id, title, content, author} =req.body
        const post = await db.query('UPDATE posts set title = $1, content = $2, author = $3 where id = $4 RETURNING *', [title, content, author, id])
        res.json(post.rows[0])

    };
    async deletePost(req, res){
        const id = req.params.id
        const post = await db.query('DELETE FROM posts where id = $1', [id])
        res.json(post.rows[0])
    }
}

module.exports = new PostController()