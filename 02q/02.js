//
const LIST = document.querySelector(".list");
const CLASSNAMETRUE = "true";
const CLASSNAMERED = "red";
const CLASSNAMEGREEN = "green";

LIST.onclick = (event) => {
    event.stopPropagation();
    const LI = event.target;
    if (LI.nodeName !== "LI") return
    if (event.target.classList.contains(CLASSNAMETRUE))
        {
        LI.classList.add(CLASSNAMEGREEN)
        }
    else {
        LI.classList.add(CLASSNAMERED)
    }
}

//
const obj1 = {
    userName: "Peter Ivanov",
    getUser: function() {
        return this.userName;
    }
}

const obj2 = {
    userName: "Maria Petrova"
}

const f1 = obj1.getUser;

const f2 = f1.bind(obj1);

const f3 = f1.bind(obj2);

console.log(f1())
console.log(f2())
console.log(f3())


//
const OUTDIV = document.querySelector(".out")

const button = {
    type: "button",
    text: "Кнопочка",
    render: function() {
        const b = document.createElement(this.type);
        b.textContent = this.text;
        return b;
    }
};

const text = {
    type: "p",
    text: "Текст текст текст текст"
};

const renderItem = button.render;
const renderButton = renderItem.bind(button);
const renderTextObj = renderItem.bind(text);
const renderText = renderItem.bind({type : "div", text : "Текст в div"});

OUTDIV.append(renderButton());
OUTDIV.append(renderTextObj());
OUTDIV.append(renderText());

//
const SPANTESTONE = document.querySelector(".test-1");
const SPANTESTTWO = document.querySelector(".test-2");

function getWith() {
    console.log(this.offsetWidth);
}

const getWith2 = getWith.bind(SPANTESTTWO);
SPANTESTONE.onclick = getWith2;
const getWith1 = getWith.bind(SPANTESTONE);
SPANTESTTWO.onclick = getWith1;
