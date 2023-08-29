const response = require('../helper/response');
const okx = require('../services/okx');

const DIVIDE_VOLUMES = 20;

exports.getPairs = async function(req, res) { 
    try {
        const result = await okx.getInstruments();

        const PairsResponse = [];

        for (let i = 0; i<result.length; i++) {
            const data = result[i];

            const pairsResponseItem = {
               ticker_id: data.instId.replace('-','_'),
               base: data.baseCcy,
               target: data.quoteCcy,
        };
        PairsResponse.push(pairsResponseItem);
    }
     return response.defaultResponse(res, PairsResponse, 200, "Success");
    } catch (error) {
        console.log('controller error',error)
        return response.errorResponse(res, "Bad Request", 400);
    }
}