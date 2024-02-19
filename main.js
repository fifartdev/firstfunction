import { Client, Account, Databases } from "node-appwrite";

export default async function (context) {
  const client = new Client();

  client
    .setEndpoint("https://fifartapp.eu/v1")
    .setProject("65cb29d9bd45ff3d39c2");

  const databases = new Databases(client);
  const accounts = new Account(client);
  if (context.req.method === "POST") {
    const data = await databases.listDocuments(
      "65ccca601fd0e39ad991",
      "65ccca69938fb6387ea1"
    );
    const activeUser = await accounts.get();
    return context.res.json([data.documents, activeUser]);
  }

  if (context.req.method === "GET") {
    return context.res.json(context);
  }
}
