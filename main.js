import { Client, Account, Databases } from "node-appwrite";

const client = new Client();

client
  .setEndpoint("https://fifartapp.eu/v1")
  .setProject("65cb29d9bd45ff3d39c2");
//   .setKey(
//     "423db325d23d13e112eb987bed073f0a08b2ea0f492802b40cfff764b669f169b750249b7b3482bd0f7175dd8f5da56c1ac0fee81e01b642123c40f56a42c15cdb6eca8b7283c903169335f77f90b4f7aab1eb0203526cf17536c83f8f13a11dfc22cb4870bec2864eae05cf122536443337e3adb3a46b9d1bddc3fd605838f7"
//   );

const databases = new Databases(client);

export default async function ({ req, res, log, error }) {
  const data = await (
    await databases.listDocuments(
      "65ccca601fd0e39ad991",
      "65ccca69938fb6387ea1"
    )
  ).documents;

  if (req.method === "GET") {
    return res.send(data);
  }
}
