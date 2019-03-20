const mocha = require('mocha');
const assert = require('assert');
const routeFunctions = require('../controllers/threadcontroller');
const httpMocks = require('node-mocks-http');

mocha.describe('Create Thread', function () {
    it('Should respond with status code 422 if a thread title and content are missing.', function () {
        let req = httpMocks.createRequest({
            method: 'POST',
            url: '/thread/create',
            body: {title: '', content: ''}
        });

        let res = httpMocks.createResponse();

        routeFunctions.validateThreadBody(req, res, function() {});
        assert.strictEqual(res.statusCode, 422);
    });

    it('Should respond with status code 422 if only thread title is missing', function () {
        let req = httpMocks.createRequest({
            method: 'POST',
            url: '/thread/create',
            body: {title: '', content: 'Test content'}
        });

        let res = httpMocks.createResponse();

        routeFunctions.validateThreadBody(req, res, function() {});
        assert.strictEqual(res.statusCode, 422);
    });

    it('Should respond with status code 422 if only thread content is missing', function () {
        let req = httpMocks.createRequest({
            method: 'POST',
            url: '/thread/create',
            body: {title: 'Test title', content: ''}
        });

        let res = httpMocks.createResponse();

        routeFunctions.validateThreadBody(req, res, function() {});
        assert.strictEqual(res.statusCode, 422);
    });

    it('Should respond with status code 200 if thread title and content were entered.', function () {
        let req = httpMocks.createRequest({
            method: 'POST',
            url: '/thread/create',
            body: {title: 'Test title', content: 'Test Content'}
        });

        let res = httpMocks.createResponse();
        routeFunctions.validateThreadBody(req, res, function() {});
        assert.strictEqual(res.statusCode, 200);
    });
});