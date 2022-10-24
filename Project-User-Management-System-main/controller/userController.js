let db = require('../models/index');
let User = db.user;
// const User = require('../models/user');
module.exports = {
    main: async (req, res) => {
        try {
            const data = await User.findAll({});
            // for(var i=0; i<data.length; i++) {
            // var result = (data[i].id + data[i].name + data[i].email + data[i].phone);

                // var dataId = (data[i].id);
            //     console.log(dataId);
            //     var dataName = (data[i].name);
            //     console.log(dataName);
            //     var dataEmail = (data[i].email);
            //     console.log(dataEmail);
            //     var dataPhone = (data[i].phone);
            //     console.log(dataPhone);

            //     // var result = (data[i]);
            //     // console.log(result);
            //     // console.log(result.id);
            // }

            // data.forEach((element)=>{
            //     console.log(element);
            //     console.log(element.id);
            // })
            res.render("main",{
                data
            });
        } catch (error) {
            console.log("Something went wrong", error);
            res.status(200).send("Something went wrong");
        }
    },

    userForm: async (req, res) => {
        try {
            console.log("create");
            res.status(200).render("create");
        } catch (error) {
            console.log("Something went wrong");
            res.status(200).send("Something went wrong");
        }
    },

    fillForm: async (req, res) => {
        try {
            const {name,email,phone} = req.body;
            if(!name || !email || !phone){
                return res.status(400).send("Required fields can't be empty");
            }
            const emailFound = await User.findOne({
            where: {email: email}    
            });
            if(emailFound){
                res.status(409).send("Email already exist");
            }
            const phoneFound = await User.findOne({
                where: {phone: phone}    
                });
            if(phoneFound){
                res.status(409).send("Phone number already exist");
            }
            const data = await User.create({
                name: name,
                email: email,
                phone: phone,
            })
            console.log({data});
            res.status(200).redirect("/");
        } catch (e) {
            let message;
            e.errors.forEach(error => {
              switch(error.validatorKey){
                case 'isEmail':
                  message = "'@ must be includes in your email'";     // here error will come from the model while in (len and islowercase) error is come from the controller
                  break;
                  case 'isInt':
                    message = "Phone number must be an integer number";
                    break;
                    case 'len':
                      message = "only 11 integers are allow";
                      break;
              }
            });
            res.status(200).send(message);
          }
      },

      editUser: async (req, res) => {
        try {
            const {id} = req.params;
            const data = await User.findOne({
                where: {id: id},
            })
            raw: true
            res.status(200).render("edit", {data});
        } catch (error) {
            console.log("Something went wrong");
            res.status(200).send("Something went wrong");
        }
    },

    updateUser: async (req, res) => {
        try {
            const {id} = req.params;
            const {name,email,phone} = req.body;
            const data = await User.update({
                name: name ? name : id.name,
                email: email ? email : id.email,
                phone: phone ? phone : id.phone,
              },{
                where: {id: id}
              });
              console.log(data);
            res.redirect('/');
        } catch (error) {
            console.log("Something went wrong", error);
            res.status(200).send("Something went wrong!!!!!!!!!!!!!");
        }
    },

    viewUser: async (req, res) => {
        try {
            const {id} = req.params;
            const data = await User.findOne({
                where: {id: id}
            })
            res.status(200).render("user",{data});
        } catch (error) {
            console.log("Something went wrong");
            res.status(200).send("Something went wrong");
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {id} = req.params;
            const data = await User.destroy({
                where: {id}
            })
            console.log("User deleted successfully");
            res.status(200).redirect('/');
        } catch (error) {
            console.log("Something went wrong");
            res.status(200).send("Something went wrong");
        }
    },
}