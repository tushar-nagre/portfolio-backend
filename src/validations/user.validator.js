import Joi from 'joi';

export const registrationPayload = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .lowercase()
        .required(),

    name: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    countryCode: Joi.string()
        .min(1)
        .required(),

    phoneNumber: Joi.string()
        .min(10)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    designation: Joi.string()
        .valid("Developer", "Geeky Student", "Bussiness Owner", "HR")
        .required()
});

export const registerVisitorPayload = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phoneNumber: Joi.string()
        .min(10)
        .required(),
    designation: Joi.string()
        .valid("Developer", "Geeky Student", "Bussiness Owner", "HR")
        .required(),
});