const express = require("express")
const router = express.Router()
const authController = require("../controllers/Auth")
const userController = require("../controllers/User")
const postsController = require("../controllers/Post")
const middleware = require("../middleware/middleware")

//USER
//===================================================
router.get('/users',middleware, userController.users)
router.post('/register',userController.register)
router.post('/authenticate',authController.auth)

//==============================================
//POSTS
//==============================================
router.post('/create',middleware,postsController.create)
router.get("/posts",postsController.posts)
router.post("/like/:id",middleware,postsController.likes)
router.post("/deslike/:id",middleware,postsController.deslike)



module.exports = router;