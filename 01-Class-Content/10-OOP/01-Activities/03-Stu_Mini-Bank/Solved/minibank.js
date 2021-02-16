function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];

  this.getBalance = () => {
    return this.balance;
  };

  this.setBalance = (value) => {
    this.balance = value;
  };

  this.updateStatement = (value) => {
    this.statement.push(value);
  };

  this.getStatement = () => {
    // Calling Array#slice(0) returns a copy of the array.
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    return this.statement.slice(0);
  };

  this.printStatement = () => {
    const statement = this.getStatement();
    for (let i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);
    }
  };

  this.deposit = (value) => {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error("'value' must be a positive number!");
    }
    const newBalance = this.getBalance() + value;
    this.setBalance(newBalance);
    this.updateStatement(newBalance);
    console.log(`Deposited ${value}!`);
  };

  this.withdraw = (value) => {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error("'value' must be a positive number");
    }
    const newBalance = this.getBalance() - value;
    if (newBalance < 0) {
      throw new Error('Insufficient funds for this transaction');
    }
    this.setBalance(newBalance);
    this.updateStatement(-value);
    console.log(`Withdrew ${value}!`);
  };

  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}

const bank = new MiniBank(0);
bank.printBalance();

bank.deposit(85);
bank.printBalance();

bank.withdraw(20);
bank.printBalance();

bank.printStatement();
