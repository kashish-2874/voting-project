// var count=0;
// var Vcount = document.getElementsByClassName("Vcount");
// function countclicks(){
//     count=count+1;
//     Vcount.innerHTML = count;
// }


let poll={
    question:"CONTESTENTS",
    answers:[
        "MC STAN","NIMRIT KAUR AHLUWALIA","TINA DUTTA","ANKIT GUPTA","SUBUL TOUQEER","ABDU ROZIK","MANYA SINGH","ARCHANA GAUTAM","SOUNDARYA SHARMA","SHALIN BHANOT","SHREEJITA DE","SHIV THAKARE","PRIYANKA CHAHAR CHOUDHARY","SAJID KHAN"
    ],
    pollCount:168,
    answersweight:[15,12,12,12,12,12,12,12,12,12,12,12,12,12],//sum=20
    selectedAnswer:-1
};

let pollDOM={
    question:document.querySelector(".poll .question"),
    answers:document.querySelector(".poll .answers")
};

pollDOM.question.innerText=poll.question;
pollDOM.answers.innerHTML=poll.answers.map(function(answer,i){
    return (
        `
        <div class="answer" onclick="markAnswer('${i}')">
            ${answer}
            <span class="percentage-bar"></span>
            <span class="percentage-value"></span>
        </div>

        `
    );
}).join("");

function markAnswer(i){
    poll.selectedAnswer=+i;
    try{
        document.querySelector(".poll .answers .answer.selected").classList.remove("selected");

    } catch(msg){}
    document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");
    showResults();
}

function showResults(){
    let answers=document.querySelectorAll(".poll .answers .answer");
    for(let i=0;i<answers.length;i++){
        let percentage=0;
        if(i==poll.selectedAnswer){
            percentage=Math.round(
                (poll.answersweight[i]+1) *100/(poll.pollCount+1)
            );
        }else{
            percentage=Math.round(
            (poll.answersweight[1])*100/(poll.pollCount+1)
            );
        }
        answers[i].querySelector(".percentage-bar").style.width=percentage+"%";
        answers[i].querySelector(".percentage-value").innerText=percentage+"%";
    }
}
// function kashish(){
//     alert("your vote has been recorded succesfully!!");
// }
