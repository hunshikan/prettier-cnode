import axios from 'axios'

function fetch(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: data
      })
      .then(res => {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default fetch
