exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
       "recentactivity": [
        {
            "_id": 1,
            "time": "32 min",
            "color": "text-success",
            "content": "this is some description about the recent activity",
            "highlight": "lalal highlight"
        },
        {
            "_id": 2,
            "time": "56 min",
            "color": "text-danger",
            "content": "this is some description about the recent activity",
            "highlight": ""
        },
        {
            "_id": 3,
            "time": "2 h",
            "color": "text-primary",
            "content": "this is some description about the recent activity",
            "highlight": ""
        },
        {
            "_id": 4,
            "time": "1 day",
            "color": "text-info",
            "content": "this is some description about the recent activity",
            "highlight": "lalal highlight"
        },
        {
            "_id": 5,
            "time": "2 days",
            "color": "text-warning",
            "content": "this is some description about the recent activity",
            "highlight": ""
        },
        {
            "_id": 6,
            "time": "4 weeks",
            "color": "text-muted",
            "content": "this is some description about the recent activity",
            "highlight": ""
        }
    ]
      })
    }
  }