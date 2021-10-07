class Person
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory
{
  //the factory method that can change depends on the factory
  createPerson(name)
  {
    return new Person(
      PersonFactory.id++,
      name
    );
  }
}
PersonFactory.id = 0;

    let pf = new PersonFactory();

    let p1 = pf.createPerson('Chris');

    let p2 = pf.createPerson('Sarah');