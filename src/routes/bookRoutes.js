const express =require('express');

const bookController = require("../controllers/bookController");
const router = express.Router();


router.get("/",bookController.getAllBooks);
router.post("/",bookController.postBook);
router.put("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);


module.exports = router;