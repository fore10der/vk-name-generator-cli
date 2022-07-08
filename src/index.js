const fetchRandomName = require('./fetchRandomName')

async function main() {
    console.log(await fetchRandomName())
}

main()