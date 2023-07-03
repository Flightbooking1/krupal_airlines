export class Booking{
    constructor(
        public bookingId:number,
        public email:string,
        public journeyDate:Date,
        public bookingDate:Date,
        public status:string,
        public pnrNumber:string,
        public scheduleId:string
    ){}
}

export class Transaction{
    constructor(
        public transactionId:number,
        public transactionStatus:string,
        public transactionType:string,
        public amount:number,
        public booking:Booking
    ){}
}

export class Passenger{
    constructor(
        public passengerId:number,
        public passengerName:string,
        public passengerAge:string,
        public passengerAadhar:string,
        public passengerStatus:string,
        public seatNumber:string,
        public booking:Booking
    ){}
}

export class SearchFlight{
    constructor(
    public fromLocation?:string,
    public toLocation?:string,
    public departureDate?:Date,
    public returnDate?:Date,
    public passengers?:number
    ){}
}