import { Client } from "node-appwrite";

const client = new Client();

client
  .setEndpoint("https://fifartapp.eu/v1")
  .setProject("65cb29d9bd45ff3d39c2");

export default async function ({ req, res, log, error }) {
  if (req.method === "GET") {
    return res.send(client);
  }
  if (req.method === "GET") {
    return log;
  }
}
