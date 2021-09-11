
$(document).ready(function () {
    $("#content").load("main-profile.html")
    $("#foods").click(function () {
        $("#content").load("burgers.html")
    })
    $("#menu").click(function () {
        $("#content").load("food-menu.html")
    })
    $("#order").click(function () {
        $("#content").load("sign-up.html")
    })
});