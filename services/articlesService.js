import axios, { GET } from '../utils/axios';
import { NYTimesApiKey } from '../utils/apiKeys';

export const getMostPopularArticles = (section, period, apiKey) => {
  return axios(GET, `/${section}/${period}.json?api-key=${apiKey ? apiKey : NYTimesApiKey}`)
}