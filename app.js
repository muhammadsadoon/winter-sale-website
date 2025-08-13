const outerLoader = document.getElementsByClassName("loader")[0];
const leftSideEl = document.getElementById("leftSide");
const navbar = document.getElementsByClassName("navbar")[0];
const displaySideEl = document.getElementsByClassName("displaySide")[0];
const tageListSideEl = document.getElementsByClassName("tageListSide")[0];
const tagBox = document.getElementById("tag-box");
const tagCcollections = document.getElementsByClassName("tag-collections")[0].childNodes[1];
let txt = ["Pents", "glass", "shirts"];

const handleAfterLoaderAnimation = () => {
    leftSideEl.style.animation = "moveUp ease 1s 0.1s";
    navbar.style.animation = "moveDownNavbar ease 1.2s";
    displaySideEl.style.animation = "moveUpCenter ease 1s 0.2s";
    tageListSideEl.style.animation = "moveLeft ease 1s 0.2s";
}

tagBox.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        text = tagBox.value;
        text.trim();
        if (text == "") return;
        else addCollection(text);
    }
})

const addCollection = (arg) => {
    let isExists = false;
    txt.forEach((e, i) => {
        if (e != arg) {
            isExists = true;
        }
    })
    if (isExists) {
        txt.push(arg);
    }
    console.log(txt);
    tagBox.value = "";
    showCollectionTags();
}
const showCollectionTags = () => {
    tagCcollections.innerHTML = "";
    txt.forEach(e => {
        let ilEl = document.createElement("li");
        let spanEl = document.createElement("span");
        let ilText = document.createTextNode(e);
        let spanText = document.createTextNode("x");
        spanEl.setAttribute("onclick", `deleteItem(this.parentNode,'${e}')`);
        spanEl.appendChild(spanText)
        ilEl.appendChild(ilText);
        ilEl.appendChild(spanEl)
        tagCcollections.appendChild(ilEl);
    })
}
const deleteItem = (element,arg)=>{
    element.parentNode.removeChild(element);
    txt.splice(txt.indexOf(arg),1);
    console.log(txt);
}
const loader = () => {
    outerLoader.style.animation = "loader ease 1s";
    handleAfterLoaderAnimation();
    setTimeout(() => {
        outerLoader.parentNode.style.display = "none";
    }, 1000);
}
showCollectionTags()
window.onload = loader;