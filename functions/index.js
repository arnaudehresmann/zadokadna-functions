const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onRequest((req, res) => {
  const zadokaDateString = req.query.date;
  console.log(zadokaDateString);
  const zadokaYear = zadokaDateString.substr(0, 4);
  const zadokaMonth = parseInt(zadokaDateString.substr(4, 2)) - 1;
  const zadokaDay = zadokaDateString.sustr(6, 2);
  const zadokaDate = new Date(zadokaYear, zadokaMonth, zadokaDay);
  
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  console.log(currentDate.toString())

  const path = "";
  if(currentDate <= zadokaDate) {
    var db = admin.database();
    var ref = db.ref('/daily/' + zadokaDateString);
    return ref.once("value", (snapshot) => {
      (snapshot.val() && snapshot.val().path) || "";
    });     
  }

  return path;
});
