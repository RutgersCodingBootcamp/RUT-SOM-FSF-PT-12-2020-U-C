function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance]; // a list of transactions 1,10,-5,5000
  //   2. Add a `setBalance` function. This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.
  this.setBalance = value => {
    this.balance = value;
  };

  // 3. Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.
  this.updateStatement = num => {
    this.statement.push(num);
  };

  // 4. Write a `getStatement` function that returns the `statement` property.
  this.getStatement = () =>{
    return this.statement;
  };

  // 5. Write a `printStatement` function that prints each element in the `statement` array on its own line.
  this.printStatement = () => {
    console.log("--- Your Statement ---");
    this.getStatement().forEach( (value, i) => console.log(`Entry ${i + 1}: ${value}`));
    console.log("--- End ---");
  };
  //   6. Write a `deposit` function that takes a value and performs the following:
  this.deposit = value => {
    //    - Calls `updateStatement` to record the deposit transaction.
    //    - Calls `setBalance` to update the `balance` property.
    this.updateStatement(value);

    this.setBalance(this.getBalance() + value);

  }
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

let bank = new MiniBank(5000);

// bank.printBalance();

// bank.updateStatement(-10);

// bank.setBalance(bank.getBalance() - 10);

// bank.printStatement();

// console.log(bank.getStatement());
// bank.printBalance();

bank.withdraw(2000);
bank.deposit(100);
bank.printStatement();
bank.printBalance();