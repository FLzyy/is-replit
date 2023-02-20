export default function isReplit(): boolean {
  return "REPL_ID" in process.env || "REPLIT" in process.env;
}
