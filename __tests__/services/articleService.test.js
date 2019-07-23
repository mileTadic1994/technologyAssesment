import { getMostPopularArticles } from '../../services/articlesService';

jest.setTimeout(5000);

describe('Article Service', () => {
  it('Should be truthy', () => {
    expect(getMostPopularArticles).toBeTruthy()
  })
  it('flow success', async () => {
    const response = await getMostPopularArticles('all-sections', 7)();
    expect(response.status).toEqual(200)
  })
  it('bad api key', async () => {
    try {
      await getMostPopularArticles('all-sections', 7, 'bad-api-key')();
    } catch (err) {
      expect(err.response.status).toEqual(401)
    }
  })
})