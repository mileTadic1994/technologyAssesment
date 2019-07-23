import axios, { GET } from '../utils/axios';
import NYTimesApiKey from '../utils/NYTimesApiKey';

export const getMostPopularArticles = (section, period) => {
  return axios(GET, `/${section}/${period}.json?api-key=${NYTimesApiKey}`)
}