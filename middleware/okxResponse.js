exports.makeResponse = (response, data) => {
  if (data.code === "0") {
    const list = [];
    data.data.map((dt) => {
      list.push(response(dt));
    });
    return {
      data: list,
      error: null
    };
  } else {
    return {
      data: null,
      error: data
    };
  }
};
