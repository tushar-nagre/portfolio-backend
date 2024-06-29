import express from 'express';
import HttpStatus, { StatusCodes } from 'http-status-codes';

class ResponseHelper {
    init() {
        express.response.success = this.success;
        express.response.successGuest = this.successGuest;
        express.response.successUser = this.successUser;
        express.response.created = this.created;
        express.response.error = this.error;
        express.response.notFound = this.notFound;
        express.response.badRequest = this.badRequest;
        express.response.notAuthorized = this.notAuthorized;
        express.response.throwError = this.throwError;
        express.response.tooManyRequests = this.tooManyRequests;
        express.response.tooLargeContent = this.tooLargeContent;
        // deprecated response helpers
        express.response.deprecatedSuccess = this.deprecatedSuccess;
        express.response.deprecatedSuccessGuest = this.deprecatedSuccessGuest;
        express.response.deprecatedSuccessUser = this.deprecatedSuccessUser;
        express.response.deprecatedCreated = this.deprecatedCreated;
        express.response.deprecatedError = this.deprecatedError;
        express.response.deprecatedNotFound = this.deprecatedNotFound;
        express.response.deprecatedBadRequest = this.deprecatedBadRequest;
        express.response.deprecatedNotAuthorized = this.deprecatedNotAuthorized;
        express.response.deprecatedThrowError = this.deprecatedThrowError;
        express.response.deprecatedTooManyRequests = this.deprecatedTooManyRequests;
    }

    created(data) {
        this.status(HttpStatus.CREATED).send({
            success: true,
            data: {
                ...data,
            },
        });
    }

    success(data, message) {
        this.status(HttpStatus.OK).send({
            success: true,
            data: {
                ...data,
                message,
            },
        });
    }

    successUser(data) {
        this.status(HttpStatus.OK).send({
            success: true,
            data: {
                ...data,
            },
        });
    }

    successGuest(data) {
        this.status(HttpStatus.OK).send({
            success: true,
            data: {
                ...data,
            },
        });
    }

    error(error) {
        this.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            data: {
                message: error,
            },
        });
    }

    notFound(message) {
        this.status(HttpStatus.NOT_FOUND).send({
            success: false,
            data: { message } || 'Not found.',
        });
    }

    badRequest(errors, data) {
        this.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            data: { message: errors, ...data },
        });
    }

    throwError(err) {
        // joi validation
        const error = err.details.reduce((prev, curr) => {
            prev[curr.path[0]] = curr.message.replace(/"/g, '');
            return prev;
        }, {});

        const errorMessage = Object.values(error);

        this.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            success: false,
            data: { message: errorMessage[0] },
        });
    }

    notAuthorized(error) {
        this.status(HttpStatus.UNAUTHORIZED).send({
            success: false,
            data: { message: error },
        });
    }

    tooManyRequests(data, retryTime) {
        return this.status(StatusCodes.TOO_MANY_REQUESTS).send({
            success: false,
            data: { message: data, otpExpireIn: retryTime },
        });
    }

    tooLargeContent(message) {
        this.status(HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE).send({
            success: false,
            data: {
                message,
            },
        });
    }

    deprecatedCreated(data) {
        this.status(HttpStatus.CREATED).send({
            success: true,
            data,
        });
    }

    deprecatedSuccess(data, message) {
        this.status(HttpStatus.OK).send({
            success: true,
            data,
            message,
        });
    }

    deprecatedSuccessUser(data) {
        this.status(HttpStatus.OK).send({
            success: true,
            data,
        });
    }

    deprecatedSuccessGuest(data) {
        this.status(HttpStatus.OK).send({
            success: true,
            ...data,
        });
    }

    deprecatedError(error) {
        this.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            error: {
                message: error,
            },
        });
    }

    deprecatedNotFound(message) {
        this.status(HttpStatus.NOT_FOUND).send({
            success: false,
            data: { message } || 'Not found.',
        });
    }

    deprecatedBadRequest(errors, data) {
        this.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            error: { message: errors, ...data },
        });
    }

    deprecatedThrowError(err) {
        // joi validation
        const error = err.details.reduce((prev, curr) => {
            prev[curr.path[0]] = curr.message.replace(/"/g, '');
            return prev;
        }, {});

        this.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
            success: false,
            error,
        });
    }

    deprecatedNotAuthorized(error) {
        this.status(HttpStatus.UNAUTHORIZED).send({
            success: false,
            error,
        });
    }

    deprecatedTooManyRequests(data, retryTime) {
        return this.status(StatusCodes.TOO_MANY_REQUESTS).send({
            success: false,
            message: data,
            otpExpireIn: retryTime,
        });
    }
}

export default ResponseHelper;
