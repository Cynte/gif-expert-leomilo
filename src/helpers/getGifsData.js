export const getGifsData = async(search, limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rzHZw3btegGKYLooZzDYW7WoPCs30Xwj&q=${search}&limit=${limit}`
    const resp = await fetch(url)
    console.log(resp)
    const {data} = await resp.json()

    const gifsData = data.map(item => ({
        id:item.id,
        title: item.title,
        url: item.images.downsized_large.url
    }))

    console.log(gifsData)

    return gifsData
}
