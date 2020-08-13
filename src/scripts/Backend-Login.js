const apiKey = "";
const 

function confirmLogin(firstName, lastName, accountId) {
  var account_id = "", first_name = "", last_name = "";
  axios.get(`http://api.reimaginebanking.com/customers/${accountId}/accounts?key=${apiKey}`)
    .then(res => {
        const account = res.data;
        this.setState({ accountId, firstName, lastName });           
        account_id = account._id;
        first_name = account.first_name;
        last_name = account.last_name;
    })
  return confirmation = account_id === accountId && first_name === firstName && last_name === lastName;
}

function makeAccount(customerId, postData) {
  axios.get(`http://api.reimaginebanking.com/customers/${accountId}?key=${apiKey}`)
}

export { confirmLogin }