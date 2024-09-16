exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify( [
            {
                "_id": 1,
                "img": "https://cdn.dummyjson.com/recipe-images/1.webp",
                "title": "Nihil lallal one title lala",
                "subtitle": "test",
                "category": "abc"
            },
            {
                "_id": 2,
                "img": "https://cdn.dummyjson.com/recipe-images/2.webp",
                "title": "Nihil lallal one title lala",
                "subtitle": "test",
                "category": "abc"
            },
            {
                "_id": 3,
                "img": "https://cdn.dummyjson.com/recipe-images/3.webp",
                "title": "Nihil lallal one title lala",
                "subtitle": "test",
                "category": "abc"
            },
            {
                "_id": 4,
                "img": "https://cdn.dummyjson.com/recipe-images/4.webp",
                "title": "Nihil lallal one title lala",
                "subtitle": "test",
                "category": "abc"
            },
            {
                "_id": 5,
                "img": "https://cdn.dummyjson.com/recipe-images/5.webp",
                "title": "Nihil lallal one title lala",
                "subtitle": "test",
                "category": "abc"
            }
        ]
      )
    }
  }