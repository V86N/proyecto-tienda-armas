const {User, Token, Sequelize} = require("../models/index")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { jwt_secret } = require ("../config/config.json") ["development"]     
const { Op } = Sequelize

const UserController = {
    async create(req,res){
        try {
        req.body.password = await bcrypt.hash(req.body.password, 10)    
        const user = await User.create(req.body)
        res.status(201).send({message:"User created successfully", user})
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem", error})
        }
    },

    async delete(req,res){
      await User.destroy({
        where:{
          id: req.params.id
          }
      })
      res.send({message:`User with id ${req.params.id} deleted`})
    },
    
    async login(req, res) {
        const user = await User.findOne({
          where: {
            email: req.body.email,
          },
        });
        if (!user) {
          return res.status(400).send({ message: "Incorrect email or password" });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        // const isMatch = await bcrypt.compare("quieromuchoamitia","$10$wzRkyjrV30ay3tgFr.k/6OJ8VhZdBhKTf9t/tIfU0MYhktoTzgK6G")
        if (!isMatch) {
            return res.status(400).send({message: "Incorrect email or password"})
        }
        const token = jwt.sign({ id: user.id }, jwt_secret)
        Token.create ({ token, UserId: user.id })
        res.send({message:"Successfully logged",user})
      },

      async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'You have been disconected' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'Logout failed' })
        }
    }
}




module.exports = UserController