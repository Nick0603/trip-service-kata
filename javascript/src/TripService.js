"use strict";

class TripService {
    constructor({userSession, tripDAO} = {}){
        this.userSession = userSession;
        this.tripDAO = tripDAO;
    }

    getTripsByUser(user) {
        let loggedUser = this.userSession.getLoggedUser();
        if (loggedUser == null) {
            throw new Error('User not logged in.');
        }
        return user.isFriendWith(loggedUser) ? this.tripDAO.findTripsByUser(user) : [];
    }
}

module.exports = TripService
