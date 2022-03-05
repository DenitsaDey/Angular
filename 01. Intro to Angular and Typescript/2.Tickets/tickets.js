"use strict";
exports.__esModule = true;
exports.Trips = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function Trips(tickets, criteria) {
    var ticketinfo = tickets;
    var ticketArr = [];
    ticketinfo.forEach(function (element) {
        var currElement = element.split('|');
        var destination = currElement[0];
        var price = Number(currElement[1]);
        var status = currElement[2];
        var ticket = new Ticket(destination, price, status);
        ticketArr.push(ticket);
    });
    switch (criteria) {
        case 'destination':
            ticketArr.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            ticketArr.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            ticketArr.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(ticketArr);
}
exports.Trips = Trips;
var result1 = Trips([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
var result2 = Trips([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
