// Interview form — language-site version (/share-your-story/).
//
// The interview needs a sign-in, and the sign-in session lives only on
// jonathanmccallum.com, so this page cannot submit directly. Instead the
// visitor writes their answers here (in their own language), copies the
// whole reply with one tap, then signs in on the main site and pastes the
// answers into the three boxes there. No API calls from this page.
function bootInterview() {
  var form = document.getElementById("interview-form");
  if (!form) return;
  var nameField = document.getElementById("interview-name");
  var socialField = document.getElementById("interview-social");
  var social2Field = document.getElementById("interview-social2");
  var q1 = document.getElementById("interview-q1");
  var q2 = document.getElementById("interview-q2");
  var q3 = document.getElementById("interview-q3");
  var copyArea = document.getElementById("interview-copy");
  var copyButton = document.getElementById("interview-copy-button");
  var copyResult = document.getElementById("interview-copy-result");
  if (!nameField || !q1 || !q2 || !q3 || !copyArea || !copyButton || !copyResult) return;

  function updateCopy() {
    var parts = [];
    if (nameField.value.trim()) parts.push("我的名字 / My name: " + nameField.value.trim());
    if (socialField.value.trim()) parts.push("我的主页 / My profile: " + socialField.value.trim());
    if (social2Field.value.trim()) parts.push("我的另一个主页 / My other profile: " + social2Field.value.trim());
    if (q1.value.trim()) parts.push("问题 1 / Question 1: " + q1.value.trim());
    if (q2.value.trim()) parts.push("问题 2 / Question 2: " + q2.value.trim());
    if (q3.value.trim()) parts.push("问题 3 / Question 3: " + q3.value.trim());
    copyArea.value = parts.join("\n\n");
  }

  [nameField, socialField, social2Field, q1, q2, q3].forEach(function (field) {
    field.addEventListener("input", updateCopy);
  });
  updateCopy();

  function copyText(text, area, done) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        area.select();
        document.execCommand("copy");
        done();
      });
    } else {
      area.select();
      document.execCommand("copy");
      done();
    }
  }

  copyButton.addEventListener("click", function () {
    updateCopy();
    var text = copyArea.value;
    if (!text.trim()) {
      copyResult.textContent = "请先写好答案，再从这里复制。";
      return;
    }
    copyText(text, copyArea, function () {
      copyResult.textContent = "已复制——完整答案已在剪贴板中。";
    });
  });
}

if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", bootInterview);
} else {
  bootInterview();
}
