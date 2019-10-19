import readline from "readline";
import { parsePost } from "kronikarz/dist/parsePost";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", filePath => {
  parsePost(filePath);
});
