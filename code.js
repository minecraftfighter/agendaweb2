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
rl1 = document.getElementById("rl12");
rl2 = document.getElementById("rl22");
rl3 = document.getElementById("rl32");
rl4 = document.getElementById("rl42");
rl5 = document.getElementById("rl52");
rl6 = document.getElementById("rl62");
rl7 = document.getElementById("rl72");
rl8 = document.getElementById("rl82");
rl9 = document.getElementById("rl92");
rl12 = document.getElementById("rl12");
rl22 = document.getElementById("rl22");
rl32 = document.getElementById("rl32");
rl42 = document.getElementById("rl42");
rl52 = document.getElementById("rl52");
rl62 = document.getElementById("rl62");
rl72 = document.getElementById("rl72");
rl82 = document.getElementById("rl82");
rl92 = document.getElementById("rl92");
prg1 = document.getElementById("pr1");
prg2 = document.getElementById("pr2");
prg3 = document.getElementById("pr3");
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
    if(pl1.value == "wiffy wharf") {
        if(pl2.value == "flodded frogs") {
            if(pl3.value == "magic mosses") {
                if(pl4.value == "pumped power") {
                    if(pl5.value == "demons dojo") {
                        if(pl6.value == "twinkle terrace") {
                            if(pl7.value == "lost lake") {
                                if(pl8.value == "brutal boxcars") {
                                    if(pl9.value == "nightshift forest") {
                                        if(pl10.value == "warriors watch") {
                                            if(pl11.value == "foxy floodgate") {
                                                if(pl12.value == "seaport") {
                                                    if(pl13.value == "shining span") {
                                                        if(pl14.value == "burd") {
                                                            if(pl15.value == "canyon crossing") {
                                                                if(pl16.value == "masked meadows") {
                                                                    if(pl17.value == "hopeful heights") {
                                                                        if(pl18.value == "shoguns solitude") {
                                                                            alert("Correct");
                                                                        }
                                                                        else {
                                                                            alert("Incorrect");
                                                                        }
                                                                    }
                                                                    else {
                                                                        alert("Incorrect");
                                                                    }
                                                                }
                                                                else {
                                                                    alert("Incorrect");
                                                                }
                                                            }
                                                            else {
                                                                alert("Incorrect");
                                                            }
                                                        }
                                                        else {
                                                            alert("Incorrect");
                                                        }
                                                    }
                                                    else {
                                                        alert("Incorrect");
                                                    }
                                                }
                                                else {
                                                    alert("Incorrect");
                                                }
                                            }
                                            else {
                                                alert("Incorrect");
                                            }
                                        }
                                        else {
                                            alert("Incorrect");
                                        }
                                    }
                                    else {
                                        alert("Incorrect");
                                    }
                                }
                                else {
                                    alert("Incorrect");
                                }
                            }
                            else {
                                alert("Incorrect");
                            }
                        }
                        else {
                            alert("Incorrect");
                        }
                    }
                    else {
                        alert("Incorrect");
                    }
                }
                else {
                    alert("Incorrect");
                }
            }
            else {
                alert("Incorrect");
            }
        }
        else {
            alert("Incorrect");
        }
    }
    else {
        alert("Incorrect");
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
                                        alert("Correct");
                                    }
                                    else {
                                        alert("Incorrect");
                                    }
                                }
                                else {
                                    alert("Incorrect");
                                }
                            }
                            else {
                                alert("Incorrect");
                            }
                        }
                        else {
                            alert("Incorrect");
                        }
                    }
                    else {
                        alert("Incorrect");
                    }
                }
                else {
                    alert("Incorrect");
                }
            }
            else {
                alert("Incorrect");
            }
        }
        else {
            alert("Incorrect");
        }
    }
    else {
        alert("Incorrect");
    }
}

function ch3() {
    if(rl12.value == "snobby sands") {
        if(rl22.value == "fossil fields") {
            if(rl32.value == "lizard links") {
                if(rl42.value == "adobe abodes") {
                    if(rl52.value == "twisted trailers") {
                        if(rl62.value == "paradise palms") {
                            if(rl72.value == "sunburnt shafts") {
                                if(rl82.value == "shady springs") {
                                    if(rl92.value == "guaco town") {
                                        alert("Correct");
                                    }
                                    else {
                                        alert("Incorrect");
                                    }
                                }
                                else {
                                    alert("Incorrect");
                                }
                            }
                            else {
                                alert("Incorrect");
                            }
                        }
                        else {
                            alert("Incorrect");
                    }
                    else {
                        alert("Incorrect");
                    }
                }
                else {
                    alert("Incorrect");
                }
            }
            else {
                alert("Incorrect");
            }
        }
        else {
            alert("Incorrect");
        }
    }
    else {
        alert("Incorrect");
    }
}

function prg() {
    if(prg1.value == true) {
        if(prg2.value == false) {
            if(prg3.value == false) {
                alert("Correct");
            }
        }
    }
    else {
        alert("Incorrect");
    }
}
