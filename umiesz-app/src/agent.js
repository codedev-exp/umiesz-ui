import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const reponseBody = res => res.body;

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(reponseBody)
};

const Articles = {
    all: page => 
        requests.get('/articles?limit=15')
};

export default {
    Articles
};