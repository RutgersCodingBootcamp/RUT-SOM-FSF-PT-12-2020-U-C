function MiniBank(balance) {
  this.balance = balance;
  // 1. Define a property named `statement`. Assign an initial value of an array containing the `balance` parameter passed to the constructor.
  this.statement = [balance];

  // 2. Add a `setBalance` function. This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.
  this.setBalance = value => {
    this.balance = value;
  };

  // 3. Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.
  this.updateStatement = value => {
    this.getStatement().push(value);
  };

  // 4. Write a `getStatement` function that returns the `statement` property.
  this.getStatement = () => {
    return this.statement;
  };

  // 5. Write a `printStatement` function that prints each element in the `statement` array on its own line.
  this.printStatement = () => {
    console.log("--- Your Statement ---");
    this.getStatement().forEach( (value,i) => console.log(`Entry ${i + 1}: ${value < 0 ? "(" + (-1 * value) + ")" : value}`));
    console.log("--- ---");
  };

  //   6. Write a `deposit` function that takes a value and performs the following:
  this.deposit = value => {
    //    - Calls `updateStatement` to record the deposit transaction.
    //    - Calls `setBalance` to update the `balance` property.
    this.updateStatement(value);
    this.setBalance(this.getBalance() + value);
  };
  // 7. Write a `withdraw` function that takes a value and performs the following:
  this.withdraw = value => {
    //    - Calls `updateStatement` to record the withdrawal transaction. (Be sure to use a negative number here.)
    //    - Calls `setBalance` to update the `balance` property.
    this.updateStatement(value * -1);
    this.setBalance(this.getBalance() - value);
  }
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


let bank = new MiniBank(100);

// bank.updateStatement(-10);
// bank.setBalance(90);
bank.withdraw(10);

bank.deposit(2500);

bank.printBalance();

bank.printStatement();