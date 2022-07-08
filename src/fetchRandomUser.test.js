import fetchRandomUser from "./fetchRandomUser.js";


beforeEach(() => {
    fetch.resetMocks();
});

it("should user successfully fetched", async () => {
    fetch.mockResponseOnce('<html><title>Ivan Ivanov, Donetsk</title><div class="block_about"><div class="list-info__title">Ivan&nbsp;Ivanov</div></div></html>')

    const result = await fetchRandomUser(42)

    expect(result).toEqual('Ivan Ivanov')
});

it("should user successfully fetched with few refetch", async () => {
    fetch.mockResponses(
        '<html><title>DELETED </title><div class="block_about"><div class="list-info__title">Vasiliy&nbsp;Sidorov</div></div></html>',
        '<html><title>DELETED </title><div class="block_about"><div class="list-info__title">DELETED&nbsp;DELETED</div></div></html>',
        '<html><title>Ivan Ivanov, Donetsk</title><div class="block_about"><div class="list-info__title">Vladimir&nbsp;Ivanov</div></div></html>')

    const result = await fetchRandomUser(42)

    expect(result).toEqual('Vladimir Ivanov')
});