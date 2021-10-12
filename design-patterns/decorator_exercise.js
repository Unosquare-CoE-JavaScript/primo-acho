class Bird
{
  constructor(age=0)
  {
    this.age = age;
  }

  fly()
  {
    return this.age < 10 ? 'flying' : 'too old';
  }
}
//this is also a decorator taken from bird
class Lizard
{
  constructor(age=0)
  {
    this.age = age;
  }

  crawl()
  {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}
//this is the decorator class taken from bird
class Dragon
{
  constructor(age=0)
  {
    this._bird = new Bird();
    this._lizard = new Lizard();
    this._age = age;
  }

  set age(value) {
    this._age = this._bird.age
      = this._lizard.age = value;
  }

  get age() { return this._age; }

  fly() { return this._bird.fly(); }
  crawl() { return this._lizard.crawl(); }
}

    let dragon = new Dragon();

    dragon.fly();
    dragon.crawl()

    dragon.age = 20;

    dragon.fly();
    dragon.crawl();