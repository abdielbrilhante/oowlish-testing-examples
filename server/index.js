/* eslint-disable @typescript-eslint/no-var-requires, no-console, max-len */
const Chance = require('chance');
const { times } = require('lodash');
const express = require('express');
const cors = require('cors');

const app = express();
const chance = new Chance();
const db = {};

function populateDB() {
  const breeds = {
    canine: ['Labrador', 'Golden Retriever', 'German Shepherd'],
    feline: ['Persian', 'Abyssinian', 'British Shorthair'],
  };

  db.customers = times(20, () => ({
    id: chance.guid(),
    name: chance.name({ nationality: 'en' }),
    avatar: 'https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80',
    pets: times(chance.integer({ min: 2, max: 5 }), () => {
      const species = chance.pickone(['canine', 'feline']);
      return {
        id: chance.guid(),
        name: chance.name({ full: false, nationality: 'it' }).split(' ')[0],
        sex: chance.gender(),
        species: species,
        breed: chance.pickone(breeds[species]),
      };
    }),
  }));

  db.appointments = times(50, () => {
    const customer = chance.pickone(db.customers);
    return {
      id: chance.guid(),
      customer: customer,
      pet: chance.pickone(customer.pets),
      when: chance.date({ min: new Date('2022-08-01'), max: new Date('2022-12-31') }),
    };
  });
}

app.use(cors());

app.get('/appointments', (req, res) => {
  const compare = (item) => item.name.toLowerCase().includes(req.query.search.toLowerCase());
  const appointments = db.appointments.filter(
    (appt) => compare(appt.customer) || compare(appt.pet)
  );

  res.json(appointments.sort((l, r) => r.when - l.when));
});

app.get('/customers/:id', (req, res) => {
  const customer = db.customers.find((item) => item.id === req.params.id);
  res.json(customer);
});

populateDB();

app.listen(7171, () => {
  console.log('Server running on http://localhost:7171');
  console.log('Created customers', db.customers.map((customer) => customer.name));
});
