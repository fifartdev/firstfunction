import { Client, Account } from "node-appwrite";

const client = new Client();

client
  .setEndpoint("https://fifartapp.eu/v1")
  .setProject("65cb29d9bd45ff3d39c2");

const accounts = new Account(client);
const allSessions = await accounts.listSessions();

export default async function ({ req, res, log, error }) {
  if (req.method === "GET") {
    if (allSessions) {
      return res.send(allSessions);
    }
    return res.send("no active sessions");
  }
  if (req.method === "GET") {
    return log;
  }
}
