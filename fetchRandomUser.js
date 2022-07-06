const cheerio = require("cheerio");
const fetchRandomUser = async (max) => {
    const random = Math.floor(Math.random() * max) + 1;


    return fetch('https://vkfaces.com/vk/user/id' + random)
        .then((res) => res.text())
        .then(async (text) => {
            const $ = cheerio.load(text)

            const title = $('title').text().replace(/\s/g, ' ')

            if (title === 'DELETED ') {
                return await fetchRandomUser(max)
            }

            return $('.block_about .list-info__title').text().replace(/\s/g, ' ')
        })
}

module.exports = fetchRandomUser