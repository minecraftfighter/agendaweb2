namee = document.getElementById("name");
pass = document.getElementById("pass");
an = document.getElementById("an");
ap1 = document.getElementById("ap1");
ap2 = document.getElementById("ap2");
pl1 = document.getElementById("pl1");
pl2 = document.getElementById("pl2");
pl3 = document.getElementById("pl3");
pl4 = document.getElementById("pl4");
pl5 = document.getElementById("pl5");
pl6 = document.getElementById("pl6");
pl7 = document.getElementById("pl7");
pl8 = document.getElementById("pl8");
pl9 = document.getElementById("pl9");
pl10 = document.getElementById("pl10");
pl11 = document.getElementById("pl11");
pl12 = document.getElementById("pl12");
pl13 = document.getElementById("pl13");
pl14 = document.getElementById("pl14");
pl15 = document.getElementById("pl15");
pl16 = document.getElementById("pl16");
pl17 = document.getElementById("pl17");
pl18 = document.getElementById("pl18");
rl1 = document.getElementById("rl1");
rl2 = document.getElementById("rl2");
rl3 = document.getElementById("rl3");
rl4 = document.getElementById("rl4");
rl5 = document.getElementById("rl5");
rl6 = document.getElementById("rl6");
rl7 = document.getElementById("rl7");
rl8 = document.getElementById("rl8");
rl9 = document.getElementById("rl9");
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
        g1 = document.getElementById("g1").style.visibility = "visible";
    }
}

function signup() {
    if(ap1 == ap2) {
        names.push(an);
        passes.push(ap1);
    }
}

function ch1() {
    if(pl1.value == "asd") {
        if(pl2.value == "asd") {
            if(pl3.value == "asd") {
                if(pl4.value == "asd") {
                    if(pl5.value == "asd") {
                        if(pl6.value == "asd") {
                            if(pl7.value == "asd") {
                                if(pl8.value == "asd") {
                                    if(pl9.value == "asd") {
                                        if(pl10.value == "asd") {
                                            if(pl11.value == "asd") {
                                                if(pl12.value == "asd") {
                                                    if(pl13.value == "asd") {
                                                        if(pl14.value == "asd") {
                                                            if(pl15.value == "asd") {
                                                                if(pl16.value == "asd") {
                                                                    if(pl17.value == "asd") {
                                                                        if(pl18.value == "asd") {
                                                                            c1 = document.getElementById("c1").style.visibility = "visible";
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }                    
                        }
                    }
                }
            }
        }
    }
    else {
        nc1 = document.getElementById("nc1").style.visibility = "visible";
    }
}

function ch2() {
    if(rl1.value == "lone lodge") {
        if(rl2.value == "pleasant park") {
            if(rl3.value == "snobby shoals") {
                if(rl4.value == "lil loot lake") {
                    if(rl5.value == "tilted towers") {
                        if(rl6.value == "sandy sheets") {
                            if(rl7.value == "dusty docks") {
                                if(rl8.value == "lazy laps") {
                                    if(rl9.value == "retail row") {
                                        c2 = document.getElementById("c2").style.visibility = "visible";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        nc2 = document.getElementById("nc2").style.visibility = "visible";
    }
}