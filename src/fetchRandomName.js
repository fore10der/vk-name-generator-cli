import fetchRandomUser from "./fetchRandomUser.js";
import * as cheerio from "cheerio";

const fetchRandomName = async () => {
    const count = await fetch('https://vkfaces.com/vk/users')
        .then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)

            return +$('#js-card-head .card-head__subtitle .text-icon__text')
                .text()
                .replace('человека', '')
                .replace('человек', '')
                .replace(/\s/g, '')
        })
    const [firstName] = (await fetchRandomUser(count)).split(' ')
    const [, secondName] = (await fetchRandomUser(count)).split(' ')

    return firstName + ' ' + secondName
}

export default fetchRandomName