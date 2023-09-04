exports.OrderResponse = (res) => {
    return {
      ordId: res[0].ordId,
      clOrdIdRes: res[0].clOrdId,
      tagRes: res[0].tag,
      sCode: res[0].sCode,
      sMsg: res[0].sMsg,
    };
  };
  