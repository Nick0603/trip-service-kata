"use strict";

class TripService {
    constructor({userSession, tripDAO} = {}){
        this.userSession = userSession;
        this.tripDAO = tripDAO;
    }

    getTripsByUser(user) {
        let tripList = [];
        let loggedUser = this.userSession.getLoggedUser();
        if (loggedUser == null) {
            throw new Error('User not logged in.');
        }
        let isFriend = user.isFriendWith(loggedUser)
        if (isFriend) {
            tripList = this.tripDAO.findTripsByUser(user);
        }
        return tripList;
    }
}

module.exports = TripService
