// functionality for showing/hiding the comments and transcript sections

const showHideBtn = document.querySelector(".show-hide button");
const commentWrapper = document.querySelector(".comment-wrapper");
const showHideTranscriptBtn = document.querySelector(
  ".transcript-control button"
);

commentWrapper.style.display = "none";

showHideTranscriptBtn.onclick = function () {
  let showHideText = showHideTranscriptBtn.textContent;
  if (showHideText === "Show Transcript") {
    showHideTranscriptBtn.textContent = "Hide Transcript";
    document.querySelector(".transcript").style.display = "block";
  } else {
    showHideTranscriptBtn.textContent = "Show Transcript";
    document.querySelector(".transcript").style.display = "none";
  }
};

showHideBtn.onclick = function () {
  let showHideText = showHideBtn.textContent;
  if (showHideText === "Show comments") {
    showHideBtn.textContent = "Hide comments";
    commentWrapper.style.display = "block";
  } else {
    showHideBtn.textContent = "Show comments";
    commentWrapper.style.display = "none";
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector(".comment-form");
const nameField = document.querySelector("#name");
const commentField = document.querySelector("#comment");
const list = document.querySelector(".comment-container");

form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement("li");
  const namePara = document.createElement("p");
  const commentPara = document.createElement("p");
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = "";
  commentField.value = "";
}
