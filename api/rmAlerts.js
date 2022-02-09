const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.URI, { useUnifiedTopology: true });

async function connectDb() {
  const DBNAME = "radixdb";
  return client.connect().then((client) => client.db(DBNAME));
}

module.exports = async function (req, res) {
  const { address, validators } = req.body;
  const db = await connectDb();
  let status = 200;
  const alerts = await db.collection("alerts").findOne({ address: address });
  if (validators.length === alerts.alerts.length) {
    alerts.alerts = [];
  } else {
    alerts.alerts = alerts.alerts.filter(
      (value) => !validators.includes(value["validator"])
    );
  }

  const updated = await db
    .collection("alerts")
    .updateOne({ address: address }, { $set: { alerts: alerts.alerts } });

  res.status(status).json({ updated: true });
};
