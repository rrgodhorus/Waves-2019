const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

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
