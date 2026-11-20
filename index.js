const url = process.argv[2];

if (!url) {
  console.log("Please run the program again and enter a URL");
  process.exit(1);
}

async function main() {
  for (let i = 1; i <= 10; i++) {
    const start = performance.now();
    const res = await fetch(url);
    const body = await res.arrayBuffer();

    const sec = (performance.now() - start) / 1000;
    const mb = body.byteLength / 1e6;

    totalMB += mb;
    totalSec += sec;
    console.log(
      `Request ${i}: ${res.status}, ${mb.toFixed(2)} MB, ${sec.toFixed(2)} s`,
    );
  }
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
