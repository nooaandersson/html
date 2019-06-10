function hello() {
    var e = document.getElementById("text").innerHTML;
    if (e == "hej") {
        document.getElementById("text").innerHTML = "welcome";
    }
}