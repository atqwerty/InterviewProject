const url = process.argv[2];

if (!url) {
  console.log("Please run the program again and enter a URL");
  process.exit(1);
}

function main() {
  console.log(url);
}

main();
