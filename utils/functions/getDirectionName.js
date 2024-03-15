const getDirectionName = (degree) => {
  if (degree <= 90) {
    return ["צפון","מזרח","מערב"];
  }

  if (degree > 90 && degree <= 180) {
    return ["מערב","דרום","מזרח"];
  }

  if (degree > 180 && degree <= 270) {
    return ["דרום","מערב","מזרח"];
  }

  if (degree > 270 && degree <= 360) {
    return ["צפון","מערב","מזרח"];
  }
};

export default getDirectionName;