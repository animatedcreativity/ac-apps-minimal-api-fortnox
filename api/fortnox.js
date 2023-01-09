exports = module.exports = function() {
  var mod = {
    createOrder: async function(options, newFnOrder) {
      var url = options.fnApiUrl + "orders";
      console.log(app.consoleColors.bgBlue, "POST Creating order:", newFnOrder.Order.YourOrderNumber + " " + url);
      var result = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Accept-Encoding": "application/json",
          "Content-Type": "application/json",
          "Access-Token": options.fnAccessToken,
          "Client-Secret": options.fnClientSecret,
        },
        body: JSON.stringify(newFnOrder)
      });
      if (result.status >= 200 && result.status <= 201) {
        return await result.json();
      }
    },
    updateCustomer: async function(options, CustomerNumber, updatedFnCustomer) {
      var url = options.fnApiUrl + "customers/" + CustomerNumber;
      console.log(app.consoleColors.bgBlue, "PUT Updating customer:", updatedFnCustomer.Customer.Email + " " + url);
      var result = await fetch(url, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Accept-Encoding": "application/json",
          "Content-Type": "application/json",
          "Access-Token": options.fnAccessToken,
          "Client-Secret": options.fnClientSecret,
        },
        body: JSON.stringify(updatedFnCustomer)
      });
      if (result.status >= 200 && result.status <= 201) {
        return await result.json();
      }
    },
    createCustomer: async function(options, newFnCustomer) {
      var url = options.fnApiUrl + "customers";
      console.log(app.consoleColors.bgBlue, "POST Creating customer:", newFnCustomer.Email + " " + url);
      var result = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Accept-Encoding": "application/json",
          "Content-Type": "application/json",
          "Access-Token": options.fnAccessToken,
          "Client-Secret": options.fnClientSecret,
        },
        body: JSON.stringify(newFnCustomer)
      });
      if (result.status >= 200 && result.status <= 201) {
        return await result.json();
      }
    },
    getCustomers: async function(options, email) {
      var url = options.fnApiUrl + "customers?email=" + email;
      console.log(app.consoleColors.bgBlue, "Getting customer:", email + " " + url);
      var result = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Accept-Encoding": "application/json",
          "Content-Type": "application/json",
          "Access-Token": options.fnAccessToken,
          "Client-Secret": options.fnClientSecret,
        }
      });
      if (result.status === 200) {
        var json = await result.json();
        return json.Customers;
      }
    }
  };
  return mod;
}