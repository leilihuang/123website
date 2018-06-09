import axios from 'axios';

class Ajax {
    defaultParams = {
      methods: 'GET',
    }
    api = params => axios({
      ...this.defaultParams,
      ...params,
    })
}

export default new Ajax();
