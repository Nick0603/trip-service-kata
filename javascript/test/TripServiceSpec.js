"use strict";

let assert = require('assert');
let TripService = require('../src/TripService');

describe('TripService', () => {

    it('shouldThrowExceptionWhenUserIsNotLoggedIn', () => {
        const service = new TripServiceUnderTest();
        assert.throws(() => service.getTripsByUser(), Error, 'User not logged in.');
    });

});

class TripServiceUnderTest extends TripService{
    getLoggedUser(){
        return null;
    }
}