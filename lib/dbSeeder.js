// Module dependencies
const mongoose = require('mongoose'),
    Customer = require('../models/customer'),
    State = require('../models/state'),
    City = require('../models/city'),
    Taluka = require('../models/taluka'),
    Qualification = require('../models/qualification'),
    WorkArea = require('../models/workArea'),
    Project = require('../models/project'),
    dbConfig = require('./configLoader').databaseConfig,
    connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
    connection = null;

class DBSeeder {

    init() {
        mongoose.connection.db.listCollections({ name: 'customers' })
            .next((err, collinfo) => {
                if (!collinfo) {
                    console.log('Starting dbSeeder...');
                    this.seed();
                }
            });
    }

    seed() {

        console.log('Seeding data....');

        //Customers
        var customerNames =
            [
                "Marcus,HighTower,Male,acmecorp.com",
                "Jesse,Smith,Female,gmail.com",
                "Albert,Einstein,Male,outlook.com",
                "Dan,Wahlin,Male,yahoo.com",
                "Ward,Bell,Male,gmail.com",
                "Brad,Green,Male,gmail.com",
                "Igor,Minar,Male,gmail.com",
                "Miško,Hevery,Male,gmail.com",
                "Michelle,Avery,Female,acmecorp.com",
                "Heedy,Wahlin,Female,hotmail.com",
                "Thomas,Martin,Male,outlook.com",
                "Jean,Martin,Female,outlook.com",
                "Robin,Cleark,Female,acmecorp.com",
                "Juan,Paulo,Male,yahoo.com",
                "Gene,Thomas,Male,gmail.com",
                "Pinal,Dave,Male,gmail.com",
                "Fred,Roberts,Male,outlook.com",
                "Tina,Roberts,Female,outlook.com",
                "Cindy,Jamison,Female,gmail.com",
                "Robyn,Flores,Female,yahoo.com",
                "Jeff,Wahlin,Male,gmail.com",
                "Danny,Wahlin,Male,gmail.com",
                "Elaine,Jones,Female,yahoo.com",
                "John,Papa,Male,gmail.com"
            ];
        var addresses =
            [
                "1234 Anywhere St.",
                "435 Main St.",
                "1 Atomic St.",
                "85 Cedar Dr.",
                "12 Ocean View St.",
                "1600 Amphitheatre Parkway",
                "1604 Amphitheatre Parkway",
                "1607 Amphitheatre Parkway",
                "346 Cedar Ave.",
                "4576 Main St.",
                "964 Point St.",
                "98756 Center St.",
                "35632 Richmond Circle Apt B",
                "2352 Angular Way",
                "23566 Directive Pl.",
                "235235 Yaz Blvd.",
                "7656 Crescent St.",
                "76543 Moon Ave.",
                "84533 Hardrock St.",
                "5687534 Jefferson Way",
                "346346 Blue Pl.",
                "23423 Adams St.",
                "633 Main St.",
                "899 Mickey Way"
            ];

        var citiesStates =
            [
                "Phoenix,AZ,Arizona",
                "Encinitas,CA,California",
                "Seattle,WA,Washington",
                "Chandler,AZ,Arizona",
                "Dallas,TX,Texas",
                "Orlando,FL,Florida",
                "Carey,NC,North Carolina",
                "Anaheim,CA,California",
                "Dallas,TX,Texas",
                "New York,NY,New York",
                "White Plains,NY,New York",
                "Las Vegas,NV,Nevada",
                "Los Angeles,CA,California",
                "Portland,OR,Oregon",
                "Seattle,WA,Washington",
                "Houston,TX,Texas",
                "Chicago,IL,Illinois",
                "Atlanta,GA,Georgia",
                "Chandler,AZ,Arizona",
                "Buffalo,NY,New York",
                "Albuquerque,AZ,Arizona",
                "Boise,ID,Idaho",
                "Salt Lake City,UT,Utah",
                "Orlando,FL,Florida"
            ];

        var citiesIds = [5, 9, 44, 5, 36, 17, 16, 9, 36, 14, 14, 6, 9, 24, 44, 36, 25, 19, 5, 14, 5, 23, 38, 17];


        var zip = 85229;

        var orders =
            [
                { "product": "Basket", "price": 29.99, "quantity": 1 },
                { "product": "Yarn", "price": 9.99, "quantity": 1 },
                { "product": "Needes", "price": 5.99, "quantity": 1 },
                { "product": "Speakers", "price": 499.99, "quantity": 1 },
                { "product": "iPod", "price": 399.99, "quantity": 1 },
                { "product": "Table", "price": 329.99, "quantity": 1 },
                { "product": "Chair", "price": 129.99, "quantity": 4 },
                { "product": "Lamp", "price": 89.99, "quantity": 5 },
                { "product": "Call of Duty", "price": 59.99, "quantity": 1 },
                { "product": "Controller", "price": 49.99, "quantity": 1 },
                { "product": "Gears of War", "price": 49.99, "quantity": 1 },
                { "product": "Lego City", "price": 49.99, "quantity": 1 },
                { "product": "Baseball", "price": 9.99, "quantity": 5 },
                { "product": "Bat", "price": 19.99, "quantity": 1 }
            ];

        Customer.remove({});

        var l = customerNames.length,
            i,
            j,
            firstOrder,
            lastOrder,
            tempOrder,
            n = orders.length;

        for (i = 0; i < l; i++) {
            var nameGenderHost = customerNames[i].split(',');
            var cityState = citiesStates[i].split(',');
            var state = { 'id': citiesIds[i], 'abbreviation': cityState[1], 'name': cityState[2] };
            var customer = new Customer({
                'firstName': nameGenderHost[0],
                'lastName': nameGenderHost[1],
                'email': nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3],
                'address': addresses[i],
                'city': cityState[0],
                'state': state,
                'stateId': citiesIds[i],
                'zip': zip + i,
                'gender': nameGenderHost[2],
                'orderCount': 0
            });
            firstOrder = Math.floor(Math.random() * orders.length);
            lastOrder = Math.floor(Math.random() * orders.length);
            if (firstOrder > lastOrder) {
                tempOrder = firstOrder;
                firstOrder = lastOrder;
                lastOrder = tempOrder;
            }

            customer.orders = [];
            //console.log('firstOrder: ' + firstOrder + ", lastOrder: " + lastOrder);
            for (j = firstOrder; j <= lastOrder && j < n; j++) {
                var today = new Date();
                var tomorrow = new Date();
                tomorrow.setDate(today.getDate() + (Math.random() * 100));

                var o = {
                    "product": orders[j].product,
                    "price": orders[j].price,
                    "quantity": orders[j].quantity,
                    "date": tomorrow
                };
                customer.orders.push(o);
            }
            customer.orderCount = customer.orders.length;

            customer.save((err, cust) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted customer: ' + cust.firstName + ' ' + cust.lastName);
                }
            });
        }

        //States
        var states = [
            { "name": "Gujarat", "abbreviation": "GJ" },
            { "name": "Maharastra", "abbreviation": "MH" }
        ];

        var l = states.length,
            i;

        State.remove({});

        for (i = 0; i < l; i++) {
            var state = new State({ 'id': i + 1, 'name': states[i].name, 'abbreviation': states[i].abbreviation });
            state.save();
        }

        //Cities
        var cities =
            [
                { "name": "Baroda", "abbreviation": "BRC" },
                { "name": "Mumbai", "abbreviation": "BCT" }
            ];

        var l = cities.length,
            i;

        City.remove({});
        var state = { 'id': 1, 'abbreviation': 'GJ', 'name': 'Gujarat' };
        for (i = 0; i < l; i++) {
            var city = new City({ 'id': i + 1, 'name': cities[i].name, 'abbreviation': cities[i].abbreviation, 'state': state, 'stateId': state.id });
            city.save();
        }

        //Talukas
        var talukas =
            [
                { "name": "Baroda City", "abbreviation": "BRC" },
                { "name": "Padra", "abbreviation": "PAD" },
                { "name": "Jetalpur", "abbreviation": "JTP" },
                { "name": "Makarpura", "abbreviation": "MKP" }
            ];

        var l = talukas.length,
            i;

        Taluka.remove({});
        var state = { 'id': 1, 'abbreviation': 'GJ', 'name': 'Gujarat' };
        var city = { 'id': 1, 'abbreviation': 'BRC', 'name': 'Baroda', 'state': state, 'stateId': state.id };
        for (i = 0; i < l; i++) {
            var taluka = new Taluka({ 'id': i + 1, 'name': talukas[i].name, 'abbreviation': talukas[i].abbreviation, 'city': city, 'cityId': city.id });
            taluka.save();
        }

        //Qualifications
        var qualifications = [
            { "name": "SSC" },
            { "name": "HSC" },
            { "name": "Bachelors" },
            { "name": "Masters" },
            { "name": "Doctorate" },
            { "name": "ITI/Diploma" }
        ]

        var l = qualifications.length,
            i;

        Qualification.remove({});

        for (i = 0; i < l; i++) {
            var qualification = new Qualification({ 'id': i + 1, 'name': qualifications[i].name });
            qualification.save();
        }

        //WorkAreas
        var workAreas = [
            { "name": "Child Development" },
            { "name": "Women Development" },
            { "name": "Education" },
            { "name": "Health" },
            { "name": "Sports" },
            { "name": "Environment" },
            { "name": "Road Traffic Safety" },
            { "name": "Other" }
        ]

        var l = workAreas.length,
            i;

        WorkArea.remove({});

        for (i = 0; i < l; i++) {
            var workArea = new WorkArea({ 'id': i + 1, 'name': workAreas[i].name });
            workArea.save();
        }

        //Projects
        var projects = [
            { "projectName": "Project 1", "projectDescription": "Project 1 Description" },
            { "projectName": "Project 2", "projectDescription": "Project 2 Description" },
        ]

        var l = projects.length,
            i;

        Project.remove({});

        for (i = 0; i < l; i++) {
            var project = new Project({ 'id': i + 1, 'projectName': projects[i].projectName, 'projectDescription': projects[i].projectDescription });
            project.save();
        }

    }
}

module.exports = new DBSeeder();




