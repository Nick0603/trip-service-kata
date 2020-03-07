'use strict';

module.exports = class User {
  constructor(name, trips = [], friends = []) {
    this.name = name;
    this.trips = trips;
    this.friends = friends;
  }

  getFriends() {
    return this.friends;
  }

  addFriend(user) {
    this.friends.push(user);
  }

  addTrip(trip) {
    this.trips.add(trip);
  }

  isFriendWith(user) {
    return this.friends.includes(user);
  }
};
