import faunadb, { query as q } from "faunadb"
import fs from "fs"

export default async function handler(req, res) {
  // Create a new Child Database
  const storeId = req.query.storeId;
  const adminClient = new faunadb.Client({ 
    domain: 'db.us.fauna.com',
    secret: process.env.FAUNA_ADMIN, 
  });

  try {
    const ret = await adminClient.query(
      q.CreateDatabase({ name: storeId })
    )
    // create a server key to access database
    const serverKey = await adminClient.query(
      q.CreateKey({
        database: q.Database(storeId),
        role: 'server',
      })
    )
    console.log(ret)
    console.log('serverKey', serverKey.secret)

    // upload the schema
    const data = fs.createReadStream('./shop.schema.graphql')
    const endpoint = `${process.env.FAUNA_GRAPHQL_ENDPOINT}/import?mode=merge`;
    const schemaRes = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${serverKey.secret}`, 
        "Content-Type": "text/plain"
      },
      body: data
    });

    console.log('schemaRes', schemaRes);

    return res.status(200).json({ key: serverKey.secret })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
}