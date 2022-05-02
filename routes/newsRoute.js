const express = require("express");
const router = express.Router();
const NewsItemModel = require("../models/NewItem");

router.post("/addnewsitem", async function (req, res) {
  try {
    const newitem = new NewsItemModel(req.body);
    await newitem.save();
    res.send("News added successfully");
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.get("/getallnewsitems", async function (req, res) {
  try {
    const data = await NewsItemModel.find();

    res.send(data);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.post("/getnewsitembyid", async function (req, res) {
  try {
    const data = await NewsItemModel.findOne({ _id: req.body.newsid });

    res.send(data);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.post("/getnewsitembyuserid", async function (req, res) {
  try {
    const data = await NewsItemModel.find();
    const userPostedNewsItems = data.filter(
      (obj) => obj.postedBy.userid === req.body.userid
    );
    res.send(userPostedNewsItems);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.post("/editnewsitem", async function (req, res) {
  try {
    await NewsItemModel.findOneAndUpdate({_id: req.body.newsid}, req.body)
    res.send("News edited successfully")
  } catch(error){
    res.status(400).send(error)
  }
})

router.post("/deletenewsitem", async function (req, res) {
  try {
    await NewsItemModel.findByIdAndDelete({_id: req.body.newsid})
    res.send("News deleted successfully")
  } catch(error){
    res.status(400).send(error)
  }
})



module.exports = router;
