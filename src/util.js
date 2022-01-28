const fs = require("fs");
const path = require("path");

const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src);
  if (!exists) throw Error("We can't copy the file");
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((c) => {
      copyRecursiveSync(path.join(src, c), path.join(dest, c));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

module.exports = {
  copyRecursiveSync,
};
