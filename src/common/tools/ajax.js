import axios from 'axios';

class Ajax {
    host = 'http://club.123footballclub.com/football/';
    api = (params = {}) => {
      const defaultParams = {
        method: 'GET',
      };

      params.url = this.host + params.url;

      return new Promise((resolve, reject) => {
        axios({
          ...defaultParams,
          ...params,
        }).then(({ data }) => {
          resolve(data);
        }).catch(res => reject(res));
      });
    }
}

export default new Ajax();
