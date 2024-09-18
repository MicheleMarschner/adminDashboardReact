exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
            "_id": 1,
            "time": "32 min",
            "color": "text-success",
            "content": "Password change",
            "highlight": "Security: "
        },
        {
            "_id": 2,
            "time": "56 min",
            "color": "text-danger",
            "content": "Login from new device detected",
            "highlight": "Security: "
        },
        {
            "_id": 3,
            "time": "2 h",
            "color": "text-primary",
            "content": "Establishing custom filter",
            "highlight": "Report: "
        },
        {
            "_id": 4,
            "time": "1 day",
            "color": "text-info",
            "content": "Monthly report download",
            "highlight": "Report: "
        },
        {
            "_id": 5,
            "time": "2 days",
            "color": "text-warning",
            "content": "Change of Administrator",
            "highlight": "Security: "
        },
        {
            "_id": 6,
            "time": "4 weeks",
            "color": "text-muted",
            "content": "Password change",
            "highlight": "Security: "
        }
    ] 
      )
    }
  }