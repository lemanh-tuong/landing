import axios from 'axios';
const url = 'https://my-project-6-264609.firebaseio.com/Home%20Page'

const fetchPage = axios.get(url)

export default fetchPage;
