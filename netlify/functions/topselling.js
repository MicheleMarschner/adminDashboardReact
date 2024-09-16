exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify( [
        {
            "_id": 1,
            "preview": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
            "name": "product name",
            "price": 64,
            "sold": 124
        },
        {
            "_id": 2,
            "preview": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
            "name": "product name",
            "price": 46,
            "sold": 98
        },
        {
            "_id": 3,
            "preview": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
            "name": "product name",
            "price": 59,
            "sold": 74
        },
        {
            "_id": 4,
            "preview": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
            "name": "product name",
            "price": 32,
            "sold": 63
        },
        {
            "_id": 5,
            "preview": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
            "name": "product name",
            "price": 79,
            "sold": 41
        }
    ]
      )
    }
  }