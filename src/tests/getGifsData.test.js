import { getGifsData } from '../helpers/getGifsData';

describe('getGifsData', () => {
  it('fetches gifs data from Giphy API', async () => {
    const search = 'cats';
    const limit = 10;
    const gifsData = await getGifsData(search, limit);

    expect(gifsData).toBeDefined();
    expect(gifsData).toHaveLength(limit);
    expect(gifsData[0]).toHaveProperty('id');
    expect(gifsData[0]).toHaveProperty('title');
    expect(gifsData[0]).toHaveProperty('url');
  });
  });