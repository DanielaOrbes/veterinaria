import Joi from "joi";

export const schemaFormAddPaciente = Joi.object({
    mascota : Joi.string()
      .max(20)
      .required()
      .messages({
        "string.empy" : "El nombre de la mascota es requerida", 
        "string.max" : "Máximo de 20 caracteres" 
      }),

      duenio : Joi.string()
      .max(20)
      .required()
      .messages({
        "string.empy" : "El nombre del duenio es requerido", 
        "string.max" : "Máximo de 20 caracteres" 
      }),

      email : Joi.string()
      .required()
      .email({tlds : false})
      .messages({
        "string.email" : "El formato es incorrecto", 
        "string.empy" : "El email es obligatorio" 
      }),

      raza : Joi.string()
      .max(20)
      .required()
      .messages({
        "string.empy" : "La raza es requerida", 
        "string.max" : "Máximo de 20 caracteres" 
      }),
})