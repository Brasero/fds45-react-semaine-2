const router = require('express').Router();
const ArticleController = require("../Controller/article.controller")

router.get("/getAll", ArticleController.getAll)
router.post("/addArticle", ArticleController.add)
router.put("/updateArticle/:id", ArticleController.update)
router.delete('/deleteArticle/:id', ArticleController.delete)

module.exports = router