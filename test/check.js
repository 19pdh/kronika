import readline from 'readline';
import Post from 'kronikarz/dist/Post';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (filePath) => {
  new Post(filePath);
});
