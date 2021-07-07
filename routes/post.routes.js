const Router = require('express');
const router = new Router();
const postController = require(`../controller/post.controller`);

/**
 * @swagger
 * definitions:
 *  Posts:
 *   type: object
 *   properties:
 *    id:
 *     type: integer
 *     description: id of post
 *     example: '1'
 *    title:
 *     type: string
 *     description: title of string at post
 *     example: 'NodeJS'
 *    content:
 *     type: string
 *     description: what includes post
 *     example: 'single page app'
 *    author:
 *     type: string
 *     description: who created post
 *     example: 'Name'
 *    created_at:
 *     type: string
 *     description: date of creating post
 *     example: '2021-07-01'
 */
router.post('/post', postController.createPost);
 /**
  * @swagger
  * /api/post:
  *  post:
  *   summary: create post
  *   tags: [Posts]
  *   description: create post for table
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Posts'
  *   responses:
  *    200:
  *     description: post created succesfully
  *    500:
  *     description: failure in creating post
  */
router.get('/post/:id', postController.getPostById);
/**
 * @swagger
 * /api/post/{id}:
 *   get:
 *     summary: get post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: post id
 *     responses:
 *       200:
 *         description: post by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Posts'
 *       404:
 *         description: post was not found
 */
router.put('/post', postController.updatePost);
/**
 * @swagger
 * /api/post:
 *  put:
  *   summary: update post
  *   tags: [Posts]
  *   description: update post for table
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Posts'
  *   responses:
  *    200:
  *     description: post update succesfully
  *    404:
  *     description: post was not found
  *    500:
  *     description: failure in updating post
 */
router.delete('/post/:id', postController.deletePost);
/**
 * @swagger
 * /api/post/{id}:
 *   delete:
 *     summary: Remove post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: post id
 *     responses:
 *       200:
 *         description: postwas deleted
 *       404:
 *         description: post was not found
 */

module.exports = router