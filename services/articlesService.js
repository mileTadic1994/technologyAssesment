import axios, { GET } from '../utils/axios';
import { NYTimesApiKey } from '../utils/apiKeys';

export const SECTIONS = {
  ALL: 'all-sections',
}

export const PERIODS = {
  DAY: 1,
  WEEK: 7,
  MONTH: 30,
}

export const getMostPopularArticles = (section, period, apiKey = NYTimesApiKey) => {
  return axios(GET, `/${section}/${period}.json?api-key=${apiKey}`)
}