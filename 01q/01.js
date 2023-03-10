const TESTDIV = document.querySelector(".test");
const FIRSTDIV = document.querySelector(".out-1");
const SECONDDIV = document.querySelector(".out-2");
const LIST = document.querySelector(".list");
const CLASSNAMETRUE = "true";
const CLASSNAME1 = "out-1";
const CLASSNAME2 = "out-2";
const CLASSNAMEGREEN = "green";
const CLASSNAMERED = "red";

TESTDIV.onclick = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains(CLASSNAME1)) {
        console.log("1");
    }
    if (event.target.classList.contains(CLASSNAME2)) {
        console.log("2");
    }
}

LIST.onclick = (event) => {
    event.stopPropagation();
    const LI = event.target;
    if (LI.nodeName !== "LI") return

    if (LI.classList.contains(CLASSNAMETRUE)) {
        LI.classList.add(CLASSNAMEGREEN);
    }
    else  {
        LI.classList.add(CLASSNAMERED);
    }
}

document.querySelector("body").onclick = () => {
    console.log("body")
}

document.querySelector("section").onclick = () => {
    console.log("section")
}

document.querySelector(".test").onclick = () => {
    console.log("test")
}

document.querySelector(".out-1").onclick = (e) => {
    e.stopPropagation();
    console.log("out-1")
}

document.querySelector(".out-2").onclick = () => {
    console.log("out-2")
}
