function outputHello() {
  const childNode = document.getElementById("clear-pointer");
  childNode.nextElementSibling.previousElementSibling.innerText =
    "Sign in to your account";
}

function outputBody() {
  const body = document.body;
  const childInfo = document.getElementById("clear-pointer");
  childInfo.style.fontSize = "12px";
  childInfo.innerText = body.innerHTML;
}

function createEl (){
  const mainElement = document.getElementById("main");
  const typeElement = document.getElementById("creator-input").value;
  const createdElement = document.createElement(typeElement);
  createdElement.innerText = `Element \"${createdElement.localName}\" has been created!`;
  mainElement.appendChild(createdElement);
}

function clearContent() {
  const mainElement = document.getElementById("main");
  const pointer = document.getElementById("clear-pointer");
  pointer.innerText = "Content";
  let siblingElement = pointer.nextElementSibling;

  while (siblingElement != null) {
    mainElement.removeChild(siblingElement);
    siblingElement = pointer.nextElementSibling;
  }
}