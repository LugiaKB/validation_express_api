import { celebrate, Joi, Segments } from "celebrate";

export const officeValidation = {
    city: Joi.string(),
    phone: Joi.string(),
    addressLine1: Joi.string(),
    addressLine2: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    postalCode: Joi.string(),
    territory: Joi.string(),
};

export const OfficeCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(officeValidation)
                        .fork(Object.keys(officeValidation), (schema) => schema.required())
});

export const OfficeUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(officeValidation).min(1)
});

