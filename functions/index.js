'use strict';
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');

// TODO: Use firebase functions:config:set to configure your googleapi object:
// googleapi.client_id = Google API client ID,
// googleapi.client_secret = client secret, and
// googleapi.sheet_id = Google Sheet id (long string in middle of sheet URL)
const CONFIG_CLIENT_ID = functions.config().googleapi.client_id;
const CONFIG_CLIENT_SECRET = functions.config().googleapi.client_secret;
const CONFIG_SHEET_ID = functions.config().googleapi.sheet_id;

// TODO: Use firebase functions:config:set to configure your watchedpaths object:
// watchedpaths.data_path = Firebase path for data to be synced to Google Sheet
const CONFIG_DATA_PATH = functions.config().watchedpaths.data_path;

// The OAuth Callback Redirect.
// const FUNCTIONS_REDIRECT = `https://${process.env.GCLOUD_PROJECT}.firebaseapp.com/oauthcallback`;
const FUNCTIONS_REDIRECT = `https://us-central1-waves-2019.cloudfunctions.net/oauthcallback`;

// setup for authGoogleAPI
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const functionsOauthClient = new OAuth2Client(CONFIG_CLIENT_ID, CONFIG_CLIENT_SECRET,
  FUNCTIONS_REDIRECT);

// OAuth token cached locally.
let oauthTokens = null;

// visit the URL for this Function to request tokens
exports.authgoogleapi = functions.https.onRequest((req, res) => {
  res.set('Cache-Control', 'private, max-age=0, s-maxage=0');
  res.redirect(functionsOauthClient.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  }));
});

// setup for OauthCallback
const DB_TOKEN_PATH = '/api_tokens';

// after you grant access, you will be redirected to the URL for this Function
// this Function stores the tokens to your Firebase database
exports.oauthcallback = functions.https.onRequest(async (req, res) => {
  res.set('Cache-Control', 'private, max-age=0, s-maxage=0');
  const code = req.query.code;
  try {
    const { tokens } = await functionsOauthClient.getToken(code);
    // Now tokens contains an access_token and an optional refresh_token. Save them.
    await admin.database().ref(DB_TOKEN_PATH).set(tokens);
    return res.status(200).send('App successfully configured with new Credentials. '
      + 'You can now close this page.');
  } catch (error) {
    return res.status(400).send(error);
  }
});
// trigger function to write to Sheet when new data comes in on CONFIG_DATA_PATH
exports.appendrecordtospreadsheet = functions.database.ref(`${CONFIG_DATA_PATH}/{ITEM}`).onCreate(
  (snap) => {
    const { timeStamp, name, emailID, phone, gender, college, eventsRegistered } = snap.val();
    return appendPromise({
      spreadsheetId: CONFIG_SHEET_ID,
      range: 'A:G',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[timeStamp, name,college, emailID, phone, gender, eventsRegistered]],
      },
    });
  });

// accepts an append request, returns a Promise to append it, enriching it with auth
function appendPromise(requestWithoutAuth) {
  return new Promise((resolve, reject) => {
    return getAuthorizedClient().then((client) => {
      const sheets = google.sheets('v4');
      const request = requestWithoutAuth;
      request.auth = client;
      return sheets.spreadsheets.values.append(request, (err, response) => {
        if (err) {
          console.log(`The API returned an error: ${err}`);
          return reject(err);
        }
        return resolve(response.data);
      });
    });
  });
}

// checks if oauthTokens have been loaded into memory, and if not, retrieves them
async function getAuthorizedClient() {
  if (oauthTokens) {
    return functionsOauthClient;
  }
  const snapshot = await admin.database().ref(DB_TOKEN_PATH).once('value');
  oauthTokens = snapshot.val();
  functionsOauthClient.setCredentials(oauthTokens);
  return functionsOauthClient;
}

// HTTPS function to write new data to CONFIG_DATA_PATH, for testing
// exports.testsheetwrite = functions.https.onRequest(async (req, res) => {
//   const random1 = Math.floor(Math.random() * 100);
//   const random2 = Math.floor(Math.random() * 100);
//   const random3 = Math.floor(Math.random() * 100);
//   const ID = new Date().getUTCMilliseconds();
//   await admin.database().ref(`${CONFIG_DATA_PATH}/${ID}`).set({
//     firstColumn: random1,
//     secondColumn: random2,
//     thirdColumn: random3,
//   });
//   res.send(`Wrote ${random1}, ${random2}, ${random3} to DB, trigger should now update Sheet.`);
// });

class EventsRegistrationData {
  constructor(data) {
    if (
      !data ||
      !data.name ||
      !data.gender ||
      !data.emailID ||
      !data.college ||
      !data.phone ||
      !data.eventsRegistered ||
      !data.timeStamp
    ) {
      return {
        error: 1
      };
    }
    if (
      typeof data.name !== "string" ||
      typeof data.gender !== "string" ||
      typeof data.emailID !== "string" ||
      typeof data.college !== "string" ||
      typeof data.phone !== "string" ||
      typeof data.eventsRegistered !== "string" ||
      typeof data.timeStamp !== "string"
    ) {
      return {
        error: 2
      };
    }
    return (({
      name,
      gender,
      emailID,
      college,
      phone,
      eventsRegistered,
      timeStamp
    }) => ({
      name,
      gender,
      emailID,
      college,
      phone,
      eventsRegistered,
      timeStamp
    }))(data);
  }
}

exports.registerForEvents = functions.https.onCall(data => {
  const newReg = new EventsRegistrationData(data);
  const REGISTRATION_PATH = "/main/registrations/";
  const newRegRef = admin
    .database()
    .ref(REGISTRATION_PATH)
    .push();
  return newRegRef
    .set(newReg)
    .then(() => {
      console.log("Events Registration Success");
      return null;
    })
    .catch(err => {
      console.log("Registration failed.");
      console.log(err);
      return err;
    });
});
