exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify( [
        {
          "_id": 1,
          "sold": 124,
          "preview": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95
        },
        {
          "_id": 2,
          "sold": 98,
          "preview": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "name": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3
        },
        {
          "_id": 3,
          "sold": 74,
          "preview": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          "name": "Mens Cotton Jacket",
          "price": 55.99
        },
        {
          "_id": 4,
          "sold": 63,
          "preview": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          "name": "Mens Casual Slim Fit",
          "price": 15.99
        },
        {
          "_id": 5,
          "sold": 4,
          "preview": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          "price": 695
        }
      ]
      )
    }
  }