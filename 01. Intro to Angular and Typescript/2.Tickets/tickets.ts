class Ticket{
    public destination: string;
    public price: number;
    public status: string;

    constructor(destination: string, price: number, status: string){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}
export function Trips(tickets: Array<string>, criteria: string){
let ticketinfo: Array<string> = tickets

let ticketArr: Array<Ticket> = [];

    ticketinfo.forEach(element => {
        let currElement = element.split('|');
        let destination = currElement[0];
        let price = Number(currElement[1]);
        let status = currElement[2];
        let ticket = new Ticket(destination, price, status);
        ticketArr.push(ticket);
    });

    switch (criteria){
        case 'destination': 
        ticketArr.sort((a, b) => a.destination.localeCompare(b.destination));
        break;
        case 'price': ticketArr.sort((a, b) => a.price -b.price);
        break;
        case 'status': ticketArr.sort((a, b) => a.status.localeCompare(b.status));
        break;
    }

console.log(ticketArr);
}

let result1 = Trips([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'destination'
    );

let result2 = Trips([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'status'
    );