exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
       [
        {
            "_id": 1,
            "number": "#2457",
            "customer": "Brandon Jacob",
            "product": "product name",
            "price": 64,
            "status": "Approved"
        },
        {
            "_id": 2,
            "number": "#2147",
            "customer": "Bridie Kessler",
            "product": "product name",
            "price": 47,
            "status": "Pending"
        },
        {
            "_id": 3,
            "number": "#2049",
            "customer": "Ashleigh Langosh",
            "product": "product name",
            "price": 147,
            "status": "Approved"
        },
        {
            "_id": 4,
            "number": "#2644",
            "customer": "Angus Grady",
            "product": "product name",
            "price": 67,
            "status": "Rejected"
        },
        {
            "_id": 5,
            "number": "#3592",
            "customer": "Raheen Lehner",
            "product": "product name",
            "price": 135,
            "status": "Approved"
        }
    ]
      )
    }
  }