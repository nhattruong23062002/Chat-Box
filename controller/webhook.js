module.exports = {
    getWebhook: async (req, res, next) => {
  
      let verifyToken = process.env.VERIFY_TOKEN
  
      let mode = req.query["hub.mode"];
      let token = req.query["hub.verify_token"];
      let challenge = req.query["hub.challenge"];
  
      // Check if a token and mode is in the query string of the request
      if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === verifyToken) {
          // Respond with the challenge token from the request
          console.log("WEBHOOK_VERIFIED");
          res.status(200).send(challenge);
        } else {
          // Respond with '403 Forbidden' if verify tokens do not match
          res.sendStatus(403);
        }
      }
    },
  
    createWebhook: async (req, res, next) => {
      let body = req.body;
  
      console.log(`\u{1F7EA} Received webhook:`);
      console.dir(body, { depth: null });
  
      if (body.object === "page") {
        // Returns a '200 OK' response to all requests
        res.status(200).send("EVENT_RECEIVED");
        // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.
      } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
      }
    },
  };
  