let userS = 0;
let compS = 0;

let choices = document.querySelectorAll(".choice");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");
let resultS = document.querySelector(".result");

getchoice = ()=>{

    let value = Math.floor(Math.random() * (3)) ;

    if(value == 1)
    {
        return "paper";
    }
    if(value == 2)
    {
        return "scissors";
    }
    if(value == 0)
    {
        return "rock";
    }
     
} ;

choices.forEach((choice)=> {
    choice.addEventListener("click" , ()=>{

        let uc = choice.getAttribute("id") ;
        let cc = getchoice();
       // console.log(`user choose: ${uc} comp choose: ${cc}`);

        if((uc === "paper" && cc === "rock") || (uc === "scissors" && cc === "paper") || (uc === "rock" && cc === "scissors") ){
            userS +=1;
            userscore.innerText = userS;
            resultS.innerText = `!! aab  to jeetne ki adat hogya h !! `;
            resultS.style.backgroundColor = "green";
            console.log(`user win`);
        }
        if((uc === "scissors" && cc === "rock") || (uc === "rock" && cc === "paper") || (uc === "paper" && cc === "scissors") ){
            compS +=1;
            compscore.innerText = compS;
            resultS.innerText = `mai toh tut gya   `;
            resultS.style.backgroundColor = "red";
            console.log(`comp win`);
        }

        if((uc === "paper" && cc === "paper") || (uc === "scissors" && cc === "scissors") || (uc === "rock" && cc === "rock") ){
            resultS.innerText = `Chana kha dimaag aaega `;
            resultS.style.backgroundColor = "#081b31";
            console.log(`draw`);
        }


    } );
});



