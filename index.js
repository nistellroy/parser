
function start() {
    console.log("first");
}



async function go() {
    await setTimeout(start, 1000);

await console.log("second");
}

go();