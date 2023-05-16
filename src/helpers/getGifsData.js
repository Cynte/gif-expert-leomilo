export const getGifsData = async(search, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rzHZw3btegGKYLooZzDYW7WoPCs30Xwj&q=${search}&limit=${limit}`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifsData = data.map(i => ({
        id:i.id,
        title: i.title,
        url: i.images.downsized_large.url
    }))

    return gifsData
}
