function checkCashRegister(price, cash, cid) {
  const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = cash - price;
  let change = [];
  let totalCid = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }

  totalCid = parseFloat(totalCid.toFixed(2));

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const unit = currencyUnits[cid[i][0]];
      let availableAmount = cid[i][1];
      let returnedAmount = 0;

      while (changeDue >= unit && availableAmount > 0) {
        changeDue -= unit;
        changeDue = parseFloat(changeDue.toFixed(2));
        availableAmount -= unit;
        returnedAmount += unit;
      }

      if (returnedAmount > 0) {
        change.push([cid[i][0], returnedAmount]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
  }
}

// Testing the function
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));