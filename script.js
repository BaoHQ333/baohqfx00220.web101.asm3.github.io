"use strict";

// FORM EMAIL
document.querySelector(".btn-submit").addEventListener("click", function () {
  const email = document.querySelector(".mailbox").value;
  const mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  const formEmail = document.querySelector(".form-email");
  const errMsg = document.querySelector(".error-msg");
  const listInfo = document.querySelector(".list-info");

  if (email.match(mailformat)) {
    formEmail.classList.add("hidden");
    listInfo.classList.remove("hidden");
  } else {
    errMsg.classList.remove("hidden");
  }
});

// FUNCTION SHOW BUTTON VIEW
const callContainer = (container) => document.querySelector(container);
const callBtnView = (btnView) => document.querySelector(btnView);

function mouseOver(container, btnView) {
  callContainer(container).addEventListener("mouseover", function () {
    callBtnView(btnView).classList.remove("hidden");
  });
}

// FUNCTION HIDE BUTTON VIEW
function mouseOut(container, btnView) {
  callContainer(container).addEventListener("mouseout", function () {
    callBtnView(btnView).classList.add("hidden");
  });
}

// FUNCTION CLICK ON BUTTON VIEW
const clickView = (btnView, hiddenContain) => {
  callBtnView(btnView).addEventListener("click", function () {
    if (callBtnView(btnView).textContent === "▼ view more") {
      document.querySelector(hiddenContain).classList.remove("hidden");
      callBtnView(btnView).textContent = "▲ view less";
    } else {
      document.querySelector(hiddenContain).classList.add("hidden");
      callBtnView(btnView).textContent = "▼ view more";
    }
  });
};

// KINH NGHIỆM
mouseOver(".container-exp", ".btnView-exp");
mouseOut(".container-exp", ".btnView-exp");
clickView(".btnView-exp", ".hidden-exp");

// HỌC VẤN
mouseOver(".container-school", ".btnView-school");
mouseOut(".container-school", ".btnView-school");
clickView(".btnView-school", ".hidden-school");

// HOẠT ĐỘNG
mouseOver(".container-action", ".btnView-action");
mouseOut(".container-action", ".btnView-action");
clickView(".btnView-action", ".hidden-action");

// SỞ THÍCH
mouseOver(".container-like", ".btnView-like");
mouseOut(".container-like", ".btnView-like");
clickView(".btnView-like", ".hidden-like");

// NGÔN NGỮ
mouseOver(".container-language", ".btnView-language");
mouseOut(".container-language", ".btnView-language");
clickView(".btnView-language", ".hidden-language");

// KỸ NĂNG
mouseOver(".container-skill", ".btnView-skill");
mouseOut(".container-skill", ".btnView-skill");
clickView(".btnView-skill", ".hidden-skill");
