$(document).ready(function () {
    $("#content1").load("retaurant.html")
    $("#drinks").click(function () {
        $("#content1").load("drinks-menu.html")
    })
    $("#burger").click(function () {
        $("#content1").load("burgers-menu.html")
    })
});