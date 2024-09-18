exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify( [
            {
                "_id": 1,
                "img": "https://cdn.dummyjson.com/recipe-images/1.webp",
                "title": "Recipe 1",
                "subtitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui, et consectetur quos amet earum pariatur itaque perferendis, voluptatem libero!",
                "category": "Recipe"
            },
            {
                "_id": 2,
                "img": "https://cdn.dummyjson.com/recipe-images/2.webp",
                "title": "Recipe 2",
                "subtitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui, et consectetur quos amet earum pariatur itaque perferendis, voluptatem libero!",
                "category": "Recipe"
            },
            {
                "_id": 3,
                "img": "https://cdn.dummyjson.com/recipe-images/3.webp",
                "title": "Recipe 3",
                "subtitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui, et consectetur quos amet earum pariatur itaque perferendis, voluptatem libero!",
                "category": "Recipe"
            },
            {
                "_id": 4,
                "img": "https://cdn.dummyjson.com/recipe-images/4.webp",
                "title": "Recipe 4",
                "subtitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui, et consectetur quos amet earum pariatur itaque perferendis, voluptatem libero!",
                "category": "Recipe"
            },
            {
                "_id": 5,
                "img": "https://cdn.dummyjson.com/recipe-images/5.webp",
                "title": "Recipe 5",
                "subtitle": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima qui, et consectetur quos amet earum pariatur itaque perferendis, voluptatem libero!",
                "category": "Recipe"
            }
        ]
      )
    }
  }