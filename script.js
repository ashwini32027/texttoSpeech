function bol ()
{
    let val= document.getElementById("textha").value;
    if(!isNaN(val)&& val.trim()!=="")
    {
        alert("Use only text to Speech")
    }
    else if(val.trim()==="")
    {
        alert(" Please enter some text!");

    }
    else
    {
        let s=new SpeechSynthesisUtterance(val);
        speechSynthesis.speak(s);
    }
}
function createStars() {
    for (let i = 0; i < 200; i++) { // Number of stars
        let star = document.createElement("div");
        star.classList.add("star");

        // Random position for each star
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Append the star to body
        document.body.appendChild(star);
    }
}

createStars();

