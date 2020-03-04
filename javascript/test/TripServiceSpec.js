"use strict";

let assert = require('assert');
let TripService = require('../src/TripService');
let User = require('../src/User');

describe('TripService', () => {

    it('shouldThrowExceptionWhenUserIsNotLoggedIn', () => {
        const service = new TripServiceUnderTest();
        assert.throws(() => service.getTripsByUser(), Error, 'User not logged in.');
    });

    it('shouldNotReturnTripsWhenLoggedUserIsNotAFriend' , () => {
        const expected = [];
        const noAnyFriendUser = new User();
        const service = new TripServiceUnderTest({loggedUser: 'userId'});
        const actual = service.getTripsByUser(noAnyFriendUser);
        assert.deepEqual(actual, expected);
    })
});

class TripServiceUnderTest extends TripService{
    constructor({loggedUser, trips} = {}){
        super();
        this.loggedUser = loggedUser || null;
        this.trips = trips || ['trips']
    }

    getLoggedUser(){
        return this.loggedUser;
    }

    getTrips(){
        return this.trips;
    }
}