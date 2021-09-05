
const form = document.querySelector('.test');
const response = document.querySelector('.response');
const tip = document.querySelector('.tip');
var LC = 0;
var WC = 0;
var SC = 0;
var NC = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    const pass = form.password.value;
    const check = Array.from(pass);
    len = check.length;
    for (let i = 0; i < len; i++) {
        if (check[i] >= "A" && check[i] <= "Z") {
            ++WC;
            console.log('adding UC');
        }
        else if (check[i] >= "a" && check[i] <= "z") {
            ++LC;
            console.log('adding lc');
        }
        else if (check[i] >= "0" && check[i] <= "9") {
            ++NC;
            console.log('adding number');
        }
        else {
            ++SC;
            console.log('adding sc');
        }
    }
    if (SC >= 2 && NC >= 2 && len >= 7) {
        response.innerHTML = "Strong";
        response.style.color = "green";
        document.getElementById("y").style.borderBottomColor = "green";
        document.getElementById("bar-1").style.background = "green";
        document.getElementById("bar-2").style.background = "green";
        document.getElementById("bar-3").style.background = "green";
    }

    else if ((len > 4) && (len < 7) && (SC == 0) && (WC === 0) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len > 4) && (len < 7) && (SC == 0) && (WC === 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len > 4) && (len < 7) && (WC === 0) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len > 4) && (len < 7) && (SC == 0) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li><br><li>It should include Numbers</li>";
    }

    else if ((len > 4) && (len < 7) && (SC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li>";
    }

    else if ((len > 4) && (len < 7) && (WC === 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len > 4) && (len < 7) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include Numbers</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (WC === 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (WC === 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li><br><li>It should include Numbers</li>";
    }

    else if ((len >= 1) && (len <= 4) && (WC === 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
        tip.innerHTML.style.liststyletype = "none";
    }

    else if ((len >= 1) && (len <= 4) && (WC === 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include special characters.</li>";
        tip.innerHTML.style.liststyletype = "none";
    }

    else if ((len >= 1) && (len <= 4) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 7 characters.</li><br><li>It should include Numbers</li>";
        tip.innerHTML.style.liststyletype = "none";
    }

    else {
        response.textContent = "Try again";
        response.style.color = "orange";
        document.getElementById("y").style.borderBottomColor = "orange";
        document.getElementById("bar-1").style.background = "gray";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "";
    }
})



function check() {
    const form = document.querySelector('.teut');
    const result = document.querySelector('.result');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const pass = form.password.value;
        var LC = 0;
        var WC = 0;
        var SC = 0;
        var NC = 0;
        var poss = 0;
        var time = 0;
        var len = pass.length;
        var test = Array.from(pass);
        for (let i = 0; i < len; i++) {
            if (test[i] >= "A" && test[i] <= "Z") {
                ++WC;
            }
            else if (test[i] >= "a" && test[i] <= "z") {
                ++LC;
            }
            else if (test[i] >= "0" && test[i] <= "9") {
                ++NC;
            }
            else {
                ++SC;
            }
        }
        if (NC != 0)
            poss = poss + 10;

        if (SC != 0)
            poss = poss + 33;

        if (LC != 0)
            poss = poss + 26;

        if (WC != 0)
            poss = poss + 26;

        time = (poss ** len) / 30000000;
        const ti = time;
        const tinmin = (time / 60);
        const tinhr = (time / 3600);
        const tinday = (time / 86400);
        const tweek = (time / 604800);
        const tinmon = (time / 18144000);
        const tinyear = (time / 217728000);


        var sec = ti.toFixed(0);
        var min = tinmin.toFixed(0);
        var hr = tinhr.toFixed(0);
        var day = tinday.toFixed(0);
        var week = tweek.toFixed(0);
        var mon = tinmon.toFixed(0);
        var year = tinyear.toFixed(0);


        console.log(sec);
        if (sec <= 0) {
            result.textContent = "It would be bruteforced Instantly";
        }
        else if (min <= 0) {
            result.textContent = `It would be bruteforced in ${sec} seconds`;
        }
        else if (hr <= 0) {
            result.textContent = `It would be bruteforced in ${min} minutes`;
        }
        else if (day <= 0) {
            result.textContent = `It would be bruteforced in ${hr} hour`;
        }
        else if (week <= 0) {
            result.textContent = `It would be bruteforced in ${day} days`;
        }
        else if (mon <= 0) {
            result.textContent = `It would be bruteforced in ${week} weeks`;
        }
        else if (year <= 0) {
            result.textContent = `It would be bruteforced in ${mon} months`;
        }
        else if (year >= 0) {
            result.textContent = `It would be bruteforced in ${year} years`;
        }
    })
}
