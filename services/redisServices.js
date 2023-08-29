exports.getSession = async function (token) {
    const { createClient } = require("redis");
  
    const host = process.env.REDIS_HOST;
    const password = process.env.REDIS_PASSWORD;
    const client = createClient({
      url: `redis://${host}`,
      password: password,
    });
    await client
      .connect()
      .then(() => console.log("redis connected successfully"));
  
    return await client
      .sMembers("redis_session")
      .then(async (res) => {
        if (res && res.length > 0) {
          const req = res.filter((item) => item === token);
          if (req && req.length > 0) {
            return await client
              .hGetAll("redis_session:" + req[0])
              .then((res) => JSON.parse(res.redisSession));
          }
  
          return null;
        }
      })
      .catch((err) => {
        console.warn(err);
        return null;
      });
  };