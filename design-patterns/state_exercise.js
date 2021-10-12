class CombinationLock
{
  constructor(combination)
  {
    this.combination = combination;
    this.reset();
  }

  reset()
  {
    this.status = 'LOCKED';
    this.digitsEntered = 0;
    this.failed = false;
  }

  enterDigit(digit)
  {
    if (this.status === 'LOCKED')
      this.status = '';
    this.status += digit.toString();
    if (this.combination[this.digitsEntered] !== digit)
    {
      this.failed = true;
    }
    this.digitsEntered++;

    if (this.digitsEntered === this.combination.length)
      this.status = this.failed ? 'ERROR' : 'OPEN';
  }
}

    let cl = new CombinationLock([1, 2, 3, 4, 5]);
    //cl.status equal to CLOSED
    cl.enterDigit(1);
    //cl.status qual to 1
    cl.enterDigit(2);
    // cl.status equal to 12
    cl.enterDigit(3);
    // cl.status equal to 123
    cl.enterDigit(4);
    //cl.status equal to 1234
    cl.enterDigit(5);
    // cl.status Equal to OPEN