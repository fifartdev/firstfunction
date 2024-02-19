import { Client, Account, Databases } from "node-appwrite";

export default async function ({ req, res, log, error }) {
  const client = new Client();

  client
    .setEndpoint("https://fifartapp.eu/v1")
    .setProject("65cb29d9bd45ff3d39c2");

  const databases = new Databases(client);

  if (req.method === "GET") {
    const data = await databases.listDocuments(
      "65ccca601fd0e39ad991",
      "65ccca69938fb6387ea1"
    );
    return res.send(data.documents);
  }
}
