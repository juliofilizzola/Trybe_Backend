const fs = require('fs').promises;

const requireSimpsons = () => {
  fs.readFile('./simpsons.json', 'utf-8')
  .then((simpsons) => {
    return JSON.parse(simpsons);
  })
  .then((persons) => {
    return persons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((results) => {
    results.forEach((result) => console.log(result));
  });
};

requireSimpsons();

const newSimpsons = (id) => {
  const simpsons = fs.readFile('./simpsons.json', 'utf-8')
  .then((persons) => JSON.parse(persons));

  const verification = simpsons.find((person) =>  person.id === id);

  if (!verification) throw new Error('id não encontrado');

  return verification;
}

newSimpsons(4);

