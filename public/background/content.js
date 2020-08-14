let load = function () {
  chrome.storage.sync.get(["firstName"], function (data) {
    alert("loading settings for firstName=" + data.firstName);
  });

  const budget = 200;
  const highlightPercent = 35;

  if (window.location.href.includes("/s?")) {
    // alert("window.onload: search page");
    showSearchData(budget, highlightPercent);
  } else {
    // alert("window.onload: item page");
    showItemData(budget, highlightPercent);
  }
};
window.onload = load;
// load();

// ============= functions for Search page =============

function getPriceSearch(priceParentNode) {
  // let n = priceParentNode.children[1].children[1];
  // let nText = n.innerText;
  let nText = priceParentNode.children[1].innerText;
  // return parseInt(n.innerText.substring(0, nText.length - 2));
  return parseFloat(nText.substring(1));
}

function showSearchData(budget, highlightPercent) {
  let warningElementSearch = document.createElement("p");
  warningElementSearch.innerText = "Text for a search result";
  warningElementSearch.style.fontSize = "20px";
  warningElementSearch.style.background = "purple";

  document.body.appendChild(warningElementSearch);
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
    // result.parentElement.parentElement.parentElement.parentElement.appendChild(warningElementSearch);

    // result.style.background = "pink";
    let price = getPriceSearch(result);
    let percent = (price / budget) * 100;
    if (percent > highlightPercent) {
      result.style.background = "orange";
      result.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(250, 160, 60, 50)"; // background color of the card
    } else {
      result.style.background = "green";
    }
    // Other ways to show price information: change the search result image, add an image overlay, add warning text
  }
}

// ============= functions for Item page =============

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

function showItemData(budget, highlightPercent) {
  let warningElementItem = document.createElement("p");
  warningElementItem.style.fontSize = "20px";

  let resultId = "priceblock_ourprice";
  let result = document.getElementById(resultId);
  if (result === null) {
    return;
  }

  result.style.background = "pink";
  let price = getPriceItem(result.innerText);
  let percent = (price / budget) * 100;
  if (percent > highlightPercent) {
    // result.style.background = "pink";
    warningElementItem.style.background = "orange";
  } else {
    // result.style.background = "rgb(0, 0, 100)";
    warningElementItem.style.background = "rgba(0, 200, 0, 100)";
  }
  warningElementItem.innerText =
    "At $" +
    price +
    ", this item is " +
    Math.floor(percent) +
    "% of your budget.";

  result.parentElement.parentElement.parentElement.parentElement.parentElement.appendChild(
    warningElementItem
  );
}
