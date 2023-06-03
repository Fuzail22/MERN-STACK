function Account() {
  balance = 1000;
  function withdraw(amountToWithdraw) {
    return balance - amountToWithdraw;
  }
  function deposit(amountToDeposit) {
    return balance + amountToDeposit;
  }
  function getBalance() {
    return balance;
  }
  return {
    withdraw: withdraw,
    deposit: deposit,
    getBalance: getBalance,
  };
}

let acc = Account();
console.log(acc.balance); // the variable is private in this design pattern
console.log(acc.getBalance());
