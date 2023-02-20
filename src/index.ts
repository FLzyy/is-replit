const envVar = [
  "REPLIT",
  "REPL_OWNER",
  "REPLIT_DB_URL",
  "REPL_ID",
  "REPL_IMAGE",
  "REPL_LANGUAGE",
  "REPL_PUBKEYS",
  "REPL_SLUG",
  "PRYBAR_FILE",
];

export default function isReplit(): boolean {
  for (let i = 0, n = envVar.length; i < n; i++) {
    if (!(envVar[i] in process.env)) {
      return false;
    }
  }

  return true;
}
