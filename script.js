let startBtn = document.querySelector("#start");
let msg = document.querySelector("#msg");
let input = document.querySelector("input");
let showAns = document.querySelector("#ans");

const arr = ["python","java","c++","javascript","html","css","angular","reactjs","nodejs",
                "php","swift","mongodb"];

const createNewWord = () =>{
    let ranWord = Math.floor(Math.random()*arr.length);
    // console.log(arr[ranWord]);
    return arr[ranWord];
}

const shuffleWord = (newWord) =>{
    for (let i = newWord.length-1; i>0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let temp = newWord[i];
        newWord[i] = newWord[j];
        newWord[j] = temp;
    }
    return newWord;
}

let play = false;
startBtn.addEventListener('click',function(){
    if(!play){
        play = true;
        startBtn.innerHTML = "Guess the word";
        input.classList.remove("hidden");
        showAns.classList.remove("hidden");
        newWord = createNewWord();
        shuffledWord = shuffleWord(newWord.split("")).join("");
        // console.log(shuffledWord);
        msg.innerHTML = `Guess the word: ${shuffledWord}`;
    }
    else{
        if(input.value === newWord){
            play = false;
            msg.innerHTML = "You guessed it right!!!";
            startBtn.innerHTML = "Play again???"
            input.value = "";
            showAns.classList.add("hidden");
        }else{
            msg.innerHTML = `Wrong guess, try again: ${shuffledWord}`;
            input.value = "";
            showAns.classList.remove("hidden");
        }
    }

});

showAns.addEventListener('click', function(){
    msg.innerHTML = `Correct word is "${newWord}"`;
    startBtn.innerHTML = "Play again???";
    play = false;
    input.value = "";
});