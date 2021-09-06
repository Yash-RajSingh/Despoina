const common = ["administrator","123456","123456789","picture1","password","pass123","12345678","111111","123123","12345","1234567890","senha","1234567",
"qwerty","abc123", "Million2","000000", "1234","iloveyou","aaron431","password1","qqww1122","123","omgpop","123321","654321",
"qwertyuiop","qwer123456","123456a","a123456","666666","asdfghjkl","ashley","987654321","unknown","zxcvbnm","112233","chatbooks",
"20100728","123123123","princess","jacket025","evite","123abc","123qwe","sunshine","121212","dragon","1q2w3e4r","5201314",
"159753","0123456789","pokemon","qwerty123","Bangbang123","jobandtalent","monkey","1qaz2wsx","abcd1234","default","aaaaaa","soccer",
"123654","ohmnamah23","12345678910","zing","shadow","102030","11111111","asdfgh","147258369","qazwsx","qwe123","michael","football",
"baseball","1q2w3e4r5t","party","daniel","asdasd","222222","myspace1","asd123","555555","a123456789","888888","7777777","fuckyou",
"1234qwer","superman","147258","999999","159357","love123","tigger","purple","samantha","charlie","babygirl","88888888","jordan23",
"789456123","jordan","anhyeuem","killer","basketball","michelle","1q2w3e","lol123","qwerty1","789456","6655321","nicole","naruto",
"master","chocolate","maggie","computer","hannah","jessica","123456789a","password123","hunter","686584","iloveyou1","987654321",
"justin","cookie","hello","blink182","andrew","25251325","love","987654","bailey","princess1","0123456","101010","12341234","a801016",
"1111","1111111","anthony","yugioh","fuckyou1","amanda","asdf1234","trustno1","butterfly","x4ivygA51F","iloveu","batman","starwars",
"summer","michael1","00000000","lovely","jakcgt333","buster","jennifer","babygirl1","family","456789","azerty","andrea","q1w2e3r4",
"qwer1234","hello123","10203","matthew","pepper","12345a","letmein","joshua","131313","123456b","madison","Sample123","777777",
"football1","jesus1","taylor","b123456","whatever","welcome","ginger","flower","333333","1111111111","robert","samsung","a12345",
"loveme","gabriel","alexander","cheese","passw0rd","142536","peanut","11223344","thomas","angel1"]
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
    for (i=0; i<=201;i++)
    {
        if (pass == common[i]) 
        { 
            response.textContent = "weak";
            response.style.color = "red";
            document.getElementById("y").style.borderBottomColor = "red";
            document.getElementById("bar-1").style.background = "red";
            document.getElementById("bar-2").style.background = "gray";
            document.getElementById("bar-3").style.background = "gray";
            tip.innerHTML = "<li>Among the 200 most breached passwords in 2020</li>";
            tip.innerHTML.style.liststyletype = "none";
        }
    }

    //CONDITIONS FOR A STRONG PASSWORD
    if (SC >= 1 && NC >= 1 && WC>1 && len >= 7) {
        response.innerHTML = "Strong";
        response.style.color = "green";
        document.getElementById("y").style.borderBottomColor = "green";
        document.getElementById("bar-1").style.background = "green";
        document.getElementById("bar-2").style.background = "green";
        document.getElementById("bar-3").style.background = "green";
    }
    else if (SC >= 2 && NC >= 2 && len >= 7) {
        response.innerHTML = "Strong";
        response.style.color = "green";
        document.getElementById("y").style.borderBottomColor = "green";
        document.getElementById("bar-1").style.background = "green";
        document.getElementById("bar-2").style.background = "green";
        document.getElementById("bar-3").style.background = "green";
    }
    else if (WC >= 2 && NC >= 2 && len >= 7) {
        response.innerHTML = "Strong";
        response.style.color = "green";
        document.getElementById("y").style.borderBottomColor = "green";
        document.getElementById("bar-1").style.background = "green";
        document.getElementById("bar-2").style.background = "green";
        document.getElementById("bar-3").style.background = "green";
    }
    else if (WC >= 2 && SC >= 2 && len >= 7) {
        response.innerHTML = "Strong";
        response.style.color = "green";
        document.getElementById("y").style.borderBottomColor = "green";
        document.getElementById("bar-1").style.background = "green";
        document.getElementById("bar-2").style.background = "green";
        document.getElementById("bar-3").style.background = "green";
    }

    //CONDITIONS FOR A MEDIUM PASSWORD

    else if ((len > 4) && (len <= 8) && (SC == 0) && (WC === 0) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len > 4) && (len <= 8) && (SC == 0) && (WC === 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len > 4) && (len <= 8) && (WC === 0) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len > 4) && (len <= 8) && (SC == 0) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Numbers</li>";
    }

    else if ((len > 4) && (len <= 8) && (SC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li>";
    }

    else if ((len > 4) && (len <= 8) && (WC === 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len > 4) && (len <= 8) && (NC == 0)) {
        response.textContent = "Medium";
        response.style.color = "yellow";
        document.getElementById("y").style.borderBottomColor = "yellow";
        document.getElementById("bar-1").style.background = "yellow";
        document.getElementById("bar-2").style.background = "yellow";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include Numbers</li>";
    }

    //CONDITIONS FOR A WEAK PASSWORD

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (WC === 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (WC === 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (WC === 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li><br><li>It should include Numbers</li>";
    }

    else if ((len >= 1) && (len <= 4) && (WC === 0) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include Uppercase alphabets</li><br><li>It should include Numbers</li>";
        tip.innerHTML.style.liststyletype = "none";
    }

    else if ((len >= 1) && (len <= 4) && (WC === 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include Uppercase alphabets</li>";
    }

    else if ((len >= 1) && (len <= 4) && (SC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include special characters.</li>";
        tip.innerHTML.style.liststyletype = "none";
    }

    else if ((len >= 1) && (len <= 4) && (NC == 0)) {
        response.textContent = "weak";
        response.style.color = "red";
        document.getElementById("y").style.borderBottomColor = "red";
        document.getElementById("bar-1").style.background = "red";
        document.getElementById("bar-2").style.background = "gray";
        document.getElementById("bar-3").style.background = "gray";
        tip.innerHTML = "<li>Password should atleast have 8 characters.</li><br><li>It should include Numbers</li>";
        tip.innerHTML.style.liststyletype = "none";
    }

    else if (len >= 9) {
        response.innerHTML = "Strong";
        response.style.color = "green";
        document.getElementById("y").style.borderBottomColor = "green";
        document.getElementById("bar-1").style.background = "green";
        document.getElementById("bar-2").style.background = "green";
        document.getElementById("bar-3").style.background = "green";
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

function GenPass() {
    var len = document.getElementById("pglength").value;
    var result = document.getElementById("final_pass");
    function arraycreation(srt, end) {
        const arr = [];
        for (let i = srt; i <= end; i++)
            arr.push(i);
        return arr;
    }
    var codes = arraycreation(65, 90).concat(arraycreation(97, 122)).concat(arraycreation(48, 57));
    if (document.getElementById("symbol").checked)
        codes = codes.concat(arraycreation(33, 47)).concat(arraycreation(58, 64)).concat(arraycreation(91, 96)).concat(arraycreation(123, 126));
    var password = [];
    var i;
    for (i = 0; i < len; i++) {
        const char1 = codes[Math.floor(Math.random() * codes.length)];
        password.push(String.fromCharCode(char1));
    }
    password = password.join('');
    result.value = password;
}


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