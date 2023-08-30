exports.makeResponse = (response, data) => {
  const list = [];
  data.map((dt) => {
    list.push(response(dt));
  });
  return list;
};
