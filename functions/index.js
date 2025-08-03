const { onCall } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');

setGlobalOptions({
  serviceAccount:
    'compute-custom@default-sa-test-90b15.iam.gserviceaccount.com',
});

const addmessage = onCall((request) => {
  return {
    message: 'Hello World',
  };
});

exports.testGroup = {
  addmessage,
};
