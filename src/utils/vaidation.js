export default function validation(
  parent = document.querySelector(".modal__edit")
) {
  let flag = true;
  const priceTemplate = /^[0-9]*[.]?[0-9]+$/;
  // eslint-disable-next-line no-useless-escape
  const articleTemplate = /([A-Z\.]{1})+[0-9\.]{2,}/;

  if (parent.querySelector("#name").value.length < 5) {
    parent.querySelector(".errorName").style.display = "block";
    flag = false;
  } else {
    parent.querySelector(".errorName").style.display = "";
  }
  if (!articleTemplate.test(parent.querySelector("#article").value)) {
    parent.querySelector(".errorArticle").style.display = "block";
    flag = false;
  } else {
    parent.querySelector(".errorArticle").style.display = "";
  }
  if (!priceTemplate.test(+parent.querySelector("#priceModal").value)) {
    parent.querySelector(".errorPrice").style.display = "block";
    flag = false;
  } else {
    parent.querySelector(".errorPrice").style.display = "";
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
