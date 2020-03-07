"use strict";

class TripService {
    constructor({userSession, tripDAO} = {}){
        this.userSession = userSession;
        this.tripDAO = tripDAO;
    }

    getTripsByUser(user) {
        let tripList = [];
        let loggedUser = this.userSession.getLoggedUser();
        let isFriend = false;
        if (loggedUser == null) {
            throw new Error('User not logged in.');
        }
        let friends = user.getFriends();
        for (let i=0; i < friends.length; i++) {
            let friend = friends[i];
            if (friend == loggedUser) {
                isFriend = true;
                break;
            }
        };
        if (isFriend) {
            tripList = this.tripDAO.findTripsByUser(user);
        }
        return tripList;
    }
}

module.exports = TripService
