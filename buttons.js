/**
 * Created by Lina Andersson on 2017-03-30.
 */

/*Changes the active color of the buttons*/
function changeActiveButton(active, notActive){
    document.getElementById(active).style.backgroundColor = "#C8C8C8";

    document.getElementById(notActive).style.backgroundColor = "#626262";

    if (active == "sellButton") {
        document.getElementById("sellState").style.display = "none";
        document.getElementById("buyState").style.display = "block";

        document.getElementById("sellArea").style.display = "none";
        document.getElementById("buyArea").style.display = "block";
    } else {
        document.getElementById("buyState").style.display = "none";
        document.getElementById("sellState").style.display = "block";

        document.getElementById("buyArea").style.display = "none";
        document.getElementById("sellArea").style.display = "block";
    }

}