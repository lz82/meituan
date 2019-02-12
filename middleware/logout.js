import axios from 'axios'

export default async function (context) {
  const {status, data} = await axios.get('/user/logout')
  if (status === 200 && data.code === 0) {
    window.location.href = '/'
  }
}
