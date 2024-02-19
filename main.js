import { Client, Users } from "node-appwrite";

const client = new Client();

client
  .setEndpoint("https://fifartapp.eu/v1")
  .setProject("65cb29d9bd45ff3d39c2");

const users = new Users(client);

export default async function ({ req, res, log, error }) {
  const userList = await users.list();

  if (req.method === "GET") {
    userList.map((u) => {
      res.send("Hello ", u.email);
    });
  }
  if (req.method === "GET") {
    return log;
  }
}
