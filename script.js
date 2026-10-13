function openGift() {

    let visitor =
    document.getElementById("visitor").value;

    let celebrant =
    document.getElementById("celebrant").value;

    let relationship =
    document.getElementById("relationship").value;

    let color =
    document.getElementById("color").value;

    if(
        visitor === "" ||
        celebrant === "" ||
        relationship === "" ||
        color === ""
    ){
        alert("Please complete all fields first 🎀");
        return;
    }

    for(let i = 0; i < 30; i++){

        const sparkle =
        document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.style.left =
        Math.random()*window.innerWidth + "px";

        sparkle.style.top =
        Math.random()*window.innerHeight + "px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{
            sparkle.remove();
        },1000);
    }

    setTimeout(()=>{

        document.body.innerHTML = `

        <div class="birthdayScene">

            <h1>
            🎉 Happy Birthday ${celebrant}! 🎉
            </h1>

            <br>

            <div class="cake" onclick="bounceCake(this)">
            🎂
            </div>

            <h2>
            From ${visitor}
            </h2>

            <br>

            <p>
            Wishing you happiness, success,
            love and wonderful memories!
            ✨💖🎂
            </p>

        </div>

        `;

    },1000);
}

function bounceCake(cake){

    cake.style.transform = "scale(1.4)";

    setTimeout(()=>{
        cake.style.transform = "scale(1)";
    },300);

}