function movenav() {
    document.getElementById("blk").style.backgroundColor = "rgba(0,0,0,.7)";
}

function validate() {
    let n = document.getElementById("Name").value;
    e = document.getElementById("e_mail").value;

    let nx = /^[a-z A-Z]{3,15}$/;
    if (n == "") {
        alert("name is empty");
        return false;
    } else if (!nx.test(n)) {
        alert("name not in format");
    } else if (e == "") {
        alert("email is blank");
        return false;
    } else {
        alert("Table is booked");
        return true;
    }
}
