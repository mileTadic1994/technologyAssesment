import axios from 'axios';

export const GET = 'get';
export const POST = 'post'
export const PUT = 'put';

const BASE_URL = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed'

const getAxios = (action, url) => async (data) => {
  return axios[action](`${BASE_URL}/${url}`, data)
}

export default getAxios;