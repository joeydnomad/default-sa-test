const { onCall } = require('firebase-functions/v2/https')

const addmessage = onCall((request) => {
    return {
        message: 'Hello World'
    }
})

exports.testGroup = {
  addmessage,
}
