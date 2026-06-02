const cssMap =
{
    main: "fish.css",
    lite: "lite.css",
    //bubbles: "funstuff/bubbles.css",
    //deep: "funstuff/deep.css",
    //volcano: "funstuff/volcano.css",
    //wtf: "funstuff/wtf.css",
};

const hash = window.location.hash.slice(1);
const css = cssMap[hash] || cssMap.main;

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = css;

document.head.appendChild(link);