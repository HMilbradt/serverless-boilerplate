'use strict';

module.exports.index = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless Boilerplate is up and running 🎉 🔥 ✅',
      input: event,
    }),
  };

  callback(null, response);
};
