window.onload = function () {
  if (window.location.href.includes("/s?k")) {
    alert("window.onload: search page");
    showSearchData();
  } else {
    alert("window.onload: item page");
    showItemData();
  }
};

// ============= functions for Search page =============

function getPriceSearch(priceParentNode) {
  let n = priceParentNode.children[1].children[1];
  let nText = n.innerText;
  return parseInt(n.innerText.substring(0, nText.length - 2));
}

function showSearchData() {
  // let resultClass = "s-result-item";
  // let resultClass = "sg-col-inner";
  let resultClass = "a-price";
  let results = document.getElementsByClassName(resultClass);
  // alert("looping through " + results.length + "items");

  for (let i = 0; i < results.length; i++) {
    let result = results[i];
    if (result.classList.contains("a-text-price")) {
      // This element describes a price that is wrong because of a sale
      continue;
    }

    // result.style.background = "pink";
    let price = getPriceSearch(result);
    if (price > 40) {
      result.style.background = "orange";
    } else {
      result.style.background = "green";
    }
    // Other ways to show price information: change the search result image, add an image overlay, add warning text
  }
}

// ============= functions for Item page =============

var warningElement = document.createElement("p");
// warningElement.innerText = "Warning: if you buy this item, you'll be broke";
warningElement.style.fontSize = "20px";
warningElement.style.background = "orange";

function getPriceItem(priceString) {
  if (priceString.includes(" - ")) {
    // The user hasn't selected a specific item, so a range of prices is displayed.
    // Assume the highest price?
    return parseFloat(priceString.split(" - ")[1].substring(1));
  } else {
    // There's only once price displayed
    return parseFloat(priceString.substring(1));
  }
}

function showItemData() {
  let resultId = "priceblock_ourprice";
  let result = document.getElementById(resultId);
  if (result === null) {
    return;
  }

  result.style.background = "pink";
  warningElement.innerText =
    "Watch out: if you buy this item, you'll be broke because it costs $" +
    getPriceItem(result.innerText);
  // let price = getPriceNode(result);
  // if(price > 40) {
  //     result.style.background = "orange";
  // } else {
  //     result.style.background = "green";
  // }

  result.parentElement.parentElement.parentElement.parentElement.parentElement.appendChild(
    warningElement
  );
}
