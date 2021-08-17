import uniqid from "uniqid";

const imgFolder = require.context("../img", false, /\.(png|jpe?g|svg)$/);

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const CardModule = (function () {
  const images = importAll(imgFolder);
  let cards_ = [];
  for (const imgName in images) {
    let card = {
      id: uniqid(),
      imgsrc: images[imgName].default,
      description: imgName.split(".")[0],
      isClicked: false,
    };
    cards_.push(card);
  }
  return { cards_ };
})();
