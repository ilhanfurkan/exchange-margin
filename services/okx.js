// const { response } = require('express');
const okxRequest = require('../helper/okx_request');
const response = require('../helper/response');
const axios = require('axios');

exports.getInstruments = async function() {
    try {
        const method = "GET";
      
        const newHead = await okxRequest.newGetRequestHeaders(
            process.env.OKX_API_KEY,
            process.env.OKX_PASSPHRASE,
            process.env.OKX_SECRET_KEY,
            process.env.OKX_BASE_PATH+'public/instruments?instType=SPOT'
        );
           console.log(process.env.OKX_URL+process.env.OKX_BASE_PATH+'public/instruments?instType=SPOT')
        const result = await axios.get(
            process.env.OKX_URL+process.env.OKX_BASE_PATH+'public/instruments?instType=SPOT',
            {
                headers: {
                    ...newHead
                },
            }
        );
        console.log('result',result)
        return result.data.data;
    } catch (error) {
        return response.errorResponse(res, "Bad Request", 400, error.message)
    }
}