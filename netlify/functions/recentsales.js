exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
       [
        {
            "_id": 1,
            "customerId": "#2457",
            "customer": "Brandon Jacob",
            "cartId": "#36",
            "price": 64,
            "status": "Approved"
        },
        {
            "_id": 2,
            "customerId": "#2147",
            "customer": "Bridie Kessler",
            "cartId": "#35",
            "price": 47,
            "status": "Pending"
        },
        {
            "_id": 3,
            "customerId": "#2049",
            "customer": "Ashleigh Langosh",
            "cartId": "#34",
            "price": 147,
            "status": "Approved"
        },
        {
            "_id": 4,
            "customerId": "#2644",
            "customer": "Angus Grady",
            "cartId": "#33",
            "price": 67,
            "status": "Rejected"
        },
        {
            "_id": 5,
            "customerId": "#3592",
            "customer": "Raheen Lehner",
            "cartId": "#32",
            "price": 135,
            "status": "Approved"
        }
    ]
      )
    }
  }