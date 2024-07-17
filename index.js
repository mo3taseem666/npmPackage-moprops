function moprops(line) {
  return line
    .split(",")
    .map((el) => {
      return `${el}={${el}}`;
    })
    .join(" ");
}

module.exports = moprops;
