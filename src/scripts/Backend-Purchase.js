const apiKey = "";

function getAccount(accountId, accountType) {
  axios
    .get(`http://api.reimaginebanking.com/accounts/${accountId}?key=${apiKey}`)
    .then((res) => {
      var account = res.data;
      account.filter((account) => account.type === accountType);
    });
  return account;
}

function getBalance(accountId) {
  axios
    .get(`https://api.reimaginebanking.com/accounts/${accountID}?key=${apiKey}`)
    .then((res) => {
      var response = res.data;
      return response.balance;
    })
    .catch((e) => {
      console.log(e);
    });
}

function makePurchase(accountId, postData) {
  axios
    .post(
      `https://api.reimaginebanking.com/accounts/${accountID}/purchases?key=${apiKey}`,
      postData
    )
    .then((res) => {
      const response = res.data;
      if (response.code === 404) {
        throw new Error(response.message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}

export { getAccount, getBalance, makePurchase };
