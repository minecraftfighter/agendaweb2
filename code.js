namee = document.getElementById("name");
pass = document.getElementById("pass");
names = ["asd"]
passes = ["cica", "kuka", "asd", "Hanna", "Csani"];
l1 = false;
l2 = false;

function signin() {
    if(passes.indexOf(pass.value) > -1) {
        l1 = true;
    }
    if(names.indexOf(namee.value) > -1) {
        l2 = true;
    }
    if(l1 == l2) {
        console.log("eee")
    }
}