"use strict";

let assert = require('assert');
let TripService = require('../src/TripService');
let User = require('../src/User');
let Trip = require('../src/Trip');

const USER_TRIP_DATA = [new Trip(), new Trip()];
const NOT_LOGIN_USER = null;
const LOGINNED_USER = new User('Jenny');
const NO_FRIEND_USER = new User('Nick');
const WITH_FRIEND_USER = new User('Nick');
WITH_FRIEND_USER.addFriend(LOGINNED_USER);

describe('TripService', () => {

    it('shouldThrowExceptionWhenUserIsNotLoggedIn', () => {
        // Setup
        const service = new TripService();
        service.getLoggedUser = () => NOT_LOGIN_USER;

        // Exercise
        // Verify
        assert.throws(() => service.getTripsByUser(NO_FRIEND_USER), Error, 'User not logged in.');
    });

    it('shouldNotReturnTripsWhenLoggedUserIsNotAFriend' , () => {
        // Setup
        const expected = [];
        const service = new TripService();
        service.getLoggedUser = () => LOGINNED_USER;
        service.getTrips = () => USER_TRIP_DATA;
        assert.notDeepEqual(expected, USER_TRIP_DATA);
        // Exercise
        const actual = service.getTripsByUser(NO_FRIEND_USER);
        // Verify
        assert.deepEqual(actual, expected);
    })

    it('shouldReturnTripsWhenLoggedUserIsAFriend', () => {
        // Setup
        const expected = USER_TRIP_DATA;
        const service = new TripService();
        service.getLoggedUser = () => LOGINNED_USER;
        service.getTrips = () => USER_TRIP_DATA;
        // Exercise
        const actual = service.getTripsByUser(WITH_FRIEND_USER);
        // Verify
        assert.deepEqual(actual, expected);
    })
});