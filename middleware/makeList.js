exports.makeList = (params, data) => {
  const list = [];
  data.map((dt) => {
    list.push(params(dt));
  });
  return list;
};
