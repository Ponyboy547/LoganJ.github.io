function getBigger()
{
    document.getElementById("input").style.fontSize="24pt";
}

function getStyled()
{
    document.getElementById("input").style.fontWeight="bold";
    document.getElementById("input").style.color="blue";
    document.getElementById("input").style.textDecoration="underline";
}

function getUnstyled()
{
    document.getElementById("input").style.fontWeight="normal";
    document.getElementById("input").style.color="black";
    document.getElementById("input").style.textDecoration="none";
}

function mooify()
{
    document.getElementById("input").style.textTransform="uppercase";

    var str = document.getElementById("input").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");

    document.getElementById("input").value = str;
}

