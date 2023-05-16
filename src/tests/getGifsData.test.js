import { getGifsData } from '../helpers/getGifsData';

describe('Testing helper getGifsData', () => {

  it('should fetch gifs data from Giphy API', async () => {

    const search = 'cats';
    const limit = 1;
    const gifsData = await getGifsData(search, limit);

    expect(gifsData).toBeDefined();
    expect(gifsData).toHaveLength(limit);
    
  });

  it('should generate correct data structure', async () => {

    const search = 'dogs';
    const limit = 1;
    const gifsData = await getGifsData(search, limit);

    expect(gifsData[0]).toEqual({

      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)

    })

  });
});