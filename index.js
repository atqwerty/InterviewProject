const url = process.argv[2];

if (!url) {
  console.log("Please run the program again and enter a URL");
  process.exit(1);
}

async function main() {
  console.log(`Attempting to download from ${url}`);
  totalMB = 0;
  totalSec = 0;

  for (let i = 1; i <= 10; i++) {
    const start = performance.now();
    const res = await fetch(url);
    const body = await res.arrayBuffer();

    const sec = (performance.now() - start) / 1000;
    const mb = body.byteLength / 1e6;

    totalMB += mb;
    totalSec += sec;
    console.log(`Request #${i}: ${mb.toFixed(2)} MB, ${sec.toFixed(2)} s`);
  }

  console.log("Done!");
  console.log(`Average request time: ${(totalSec / 10).toFixed(2)} s`);
  console.log(`Total downloaded: ${totalMB.toFixed(2)} MB`);
  console.log(`Download speed: ${(totalMB / totalSec).toFixed(2)} MB/s`);
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
