const Joi = require("joi") 
function regValidation(data){
        const schema = Joi.object({
            name: Joi
                    .string()
                    .required()
                    .min(2)
                    .max(18),
            email:Joi
                    .string()
                    .email()
                    .required(),
            password:Joi
                    .string()
                    .required()
                    .min(2)
                    .max(28),
            address:Joi
                    .string()
                    .min(2)
                    .max(250)                
       })
       const valid = schema.validate(data)
       return valid
}
function loginValidation(data){
    const schema = Joi.object({
        email:Joi
                .string()
                .email()
                .required(),
        password:Joi
                .string()
                .required()
                .min(2)
                .max(28)              
   })
   const valid= schema.validate(data);
   return valid
}

module.exports.regValidation = regValidation;
module.exports.loginValidation = loginValidation;

