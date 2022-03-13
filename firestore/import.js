const fs = require("fs");
const YAML = require("js-yaml");
const admin = require("firebase-admin");
const serviceAccount = require("./service.json");

const fileName = process.argv[2];

const reDate = new RegExp(/^date/);
const reGeo = new RegExp(/^geo/);

let dateArray = process.argv.filter((item) => item.match(reDate))[0];
let geoArray = process.argv.filter((item) => item.match(reGeo))[0];

if (dateArray) {
  dateArray = dateArray.split("=")[1].split(",");
}

if (geoArray) {
  geoArray = geoArray.split("=")[1].split(",");
}

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dr-melfi-7d7f7-default-rtdb.firebaseio.com",
});

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

fs.readFile(fileName, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Turn string from file to an Array
  if (fileName.endsWith("yaml") || fileName.endsWith("yml")) {
    dataArray = YAML.safeLoad(data);
  } else {
    dataArray = JSON.parse(data);
  }

  updateCollection(dataArray);
});

async function updateCollection(dataArray) {
  for (const index in dataArray) {
    const collectionName = index;
    for (const doc in dataArray[index]) {
      if (dataArray[index].hasOwnProperty(doc)) {
        await startUpdating(collectionName, doc, dataArray[index][doc]);
      }
    }
  }
}

function startUpdating(collectionName, doc, data) {
  // convert date from unixtimestamp
  let parameterValid = true;

  if (parameterValid) {
    return new Promise((resolve) => {
      db.collection(collectionName)
        .doc(doc)
        .set(data)
        .then(() => {
          console.log(`${doc} is imported successfully to firestore!`);
          resolve("Data wrote!");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } else {
    console.log(
      `${doc} is not imported to firestore. Please check your parameters!`
    );
  }
}