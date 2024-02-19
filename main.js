export default async function ({ req, res, log, error }) {
  if (req.method === "GET") {
    return res.send("Hello Soulio");
  }
  if (req.method === "GET") {
    return log;
  }
}
