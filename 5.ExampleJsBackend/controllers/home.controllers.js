const { createuserservice } = require("../services/home.service");

function getHome(req, res) {
  res.json({
    name: "hemant",
    class: "12th",
    age: 17,
  });
}

function getDetails(req, res) {
  res.json({
    detail: "its nice",
  });
}


// CRUD

async function createUser(req, res) {
    const { username, password, email } = req.body;
    try{
    
        await createuserservice();
    
        res.json({
        message: "success !! created the user " + userObj._id,
        });
    }catch(error){
        res.status(500).json({
            message: "Some error occured " +  error.message,
        });
    }
}

module.exports = { getHome, getDetails, createUser };
