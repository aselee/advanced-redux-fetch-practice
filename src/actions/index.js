
// fetch contacts

export function fetchContacts() {
    return function (dispatch) {
      fetch("http://localhost:4001/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsFetched(contacts));
      });
    };
  }

export function contactsFetched(contacts) {
    return {
      type: "CONTACTS_FETCHED",
      value: contacts
    };
  }

export function createContact(contact) {
    return function(dispatch) {
      fetch("http://localhost:4001/contacts", {
        method:'post',
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(res){
        return res.json();
      }).then(function(c){
        dispatch(contactCreated(c));
        // What else could I do here
      });
    };
  }

export function contactCreated(contact){
    return{
        type: "CONTACT_CREATED",
        value: contact
    };
}

// fetch vehicles

export function fetchVehicles() {
    return function (dispatch) {
        fetch ("http://localhost:4001/vehicles")
        .then( (response) => {
            return response.json();
        }).then((vehicles) => {
            dispatch(vehiclesFetched(vehicles));
        });
    };
}

export function vehiclesFetched(vehicles) {
    return {
        type: "VEHICLES_FETCHED",
        value: vehicles
    };
}

export function createVehicle(vehicle) {
    return function(dispatch) {
      fetch("http://localhost:4001/vehicles", {
        method:'post',
        body: JSON.stringify(vehicle),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(res){
        return res.json();
      }).then(function(c){
        dispatch(vehicleCreated(c));
        // What else could I do here
      });
    };
  }

export function vehicleCreated(vehicle){
    return{
        type: "VEHICLE_CREATED",
        value: vehicle
    };
}


// fetch comments

export function fetchComments() {
    return function (dispatch) {
        fetch ("http://localhost:4001/comments")
        .then( (response) => {
            return response.json();
        }).then((comments) => {
            dispatch(commentsFetched(comments));
        });
    };
}

export function commentsFetched(comments) {
    return {
        type: "COMMENTS_FETCHED",
        value: comments
    };
}

export function createComment(comments) {
    return function(dispatch) {
      fetch("http://localhost:4001/vehicles", {
        method:'post',
        body: JSON.stringify(commentsFetched),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(res){
        return res.json();
      }).then(function(c){
        dispatch(vehicleCreated(c));
        // What else could I do here
      });
    };
  }

export function commentCreated(comment){
    return{
        type: "COMMENT_CREATED",
        value: comment
    };
}


// fetch products

export function fetchProducts() {
    return function (dispatch) {
        fetch ("http://localhost:4001/products")
        .then( (response) => {
            return response.json();
        }).then((products) => {
            dispatch(productsFetched(products));
        });
    };
}

export function productsFetched(products) {
    return {
        type: "PRODUCTS_FETCHED",
        value: products
    };
}

export function createProduct(product) {
    return function(dispatch) {
      fetch("http://localhost:4001/products", {
        method:'post',
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(res){
        return res.json();
      }).then(function(c){
        dispatch(productCreated(c));
        // What else could I do here
      });
    };
  }

export function productCreated(product){
    return{
        type: "PRODUCT_CREATED",
        value: product
    };
}
