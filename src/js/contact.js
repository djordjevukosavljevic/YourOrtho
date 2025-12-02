const contactMsg = function() {
    document.getElementById("msgbtn").onclick = function () {
        window.alert("We are still working on this feature");
        window.location.href = "http://localhost:3000/#hero";
    }
}

export default contactMsg;