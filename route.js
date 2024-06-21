const express = require("express");
const userdata = require("./module/userModel.js");

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Bonjour");
});

route.get("/userList", async (req, res) => {
  try {
    const listeUser = await userdata.find({});
    res.status(200).json(listeUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.get("/userList/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const userId = await userdata.findById(id);
    res.status(200).json(userId);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.post("/createUser", async (req, res) => {
  try {
    const user = await userdata.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

route.put("/modifyUser/:id", async (req,res) => {
    try {
        const {id} = req.params
        const modify = await userdata.findByIdAndUpdate(id, req.body)
if (!modify) {
    return res.status(400).json({
        message: `je n'ai pas pu trouver avec l'id ${id}`
    })
}
res.status(200).json(modify)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
        
    }
})

route.delete("/deleteUser/:id", async (req,res) => {
try {
    const {id} = req.params
    const supprimer = await userdata.findByIdAndDelete(id,)
    if (!supprimer) {
        return res.status(400).json({
            message: `je n'ai pas pu trouver avec l'id ${id}`
        })
    }
    res.status(200).json(supprimer)
} catch (error) {
    console.log(error.message);
    res.status(500).json({
        message:error.message
    })
}
})

module.exports = route;
