import Joi from 'joi';

export const validator = {
    body: (schema) => (req, res, next) => {
        const { error, value } = schema.validate(req.body);

        req.body = value;
        return error ? res.throwError(error) : next();
    },
    params: (schema) => (req, res, next) => {
        const { error, value } = schema.validate(req.params);

        req.params = value;
        return error ? res.throwError(error) : next();
    },
    query: (schema) => (req, res, next) => {
        const paginationSchema = Joi.object({
            limit: Joi.number().max(15).min(1).default(15),
            page: Joi.number().min(1).default(1),
        });
        const final = schema
            ? Joi.object().concat(paginationSchema).concat(schema)
            : paginationSchema;
        const { error, value } = final.validate(req.query);

        req.query = value;
        return error ? res.throwError(error) : next();
    },
};

export const isObjectId = /^[0-9a-fA-F]{24}$/;
