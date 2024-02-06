const diceBtn=document.getElementById('dice-btn')
const dice=document.getElementById('dice')
const advice=document.getElementById('advice')
const adviceId=document.getElementById('advice-id');
const url='https://api.adviceslip.com/advice';

diceBtn.addEventListener('click',async()=>{
    dice.classList.add('animate-spin');
    try {
        const data=await fetch(url);
        const response=await data.json();
        // destructing with alias name
        const {slip:{id:responseId,advice:responseAdvice}}=response
        adviceId.textContent=responseId;
        advice.textContent=responseAdvice;
        

    } catch (error) {
        console.log(error);
    }
    finally {
        // Remove the class after the response is fetched
        dice.classList.remove('animate-spin');
    }
})