exports.makeResponse = (response, data) => {
  if (data.code === "0") {
    const list = [];
    data.data.map((dt) => {
      list.push(response(dt));
    });
    return list;
  } else {
    return null;
  }
};
