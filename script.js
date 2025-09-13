const tasbihBtn = document.getElementById("tasbihbtn");
const imageCon = document.querySelector(".image");
const tasbihEl = document.querySelector(".tasbih");
const playEl = document.querySelector(".play");
const countEl = document.querySelector(".count");
const pauseBtn = document.querySelector(".pause");
const ResetBtn = document.querySelector(".Reset");
const returnBtn = document.querySelector(".return");
const aistighfarBtn = document.getElementById("aistighfarbtn");
const aistighfarEl = document.querySelector(".aistighfar");
const play2 = document.getElementById("play2");
const count2El = document.getElementById("count2");
const pause2 = document.getElementById("pause2")
const Reset2 = document.getElementById("Reset2");
const return2 = document.getElementById("return2");
const salaahBtn = document.getElementById("salaah_ealaa_alnabaa");
const salaahEl = document.querySelector(".salaah_ealaa_alnabaa");
const play3 = document.getElementById("play3");
const pause3 = document.getElementById("pause3");
const Reset3 = document.getElementById("Reset3");
const return3 = document.getElementById("return3");
const count3 = document.getElementById("count3");
let interval = null;
let count = 0;



// تهيئة زر التسبيح

tasbihBtn.addEventListener("click", ()=>{

    imageCon.classList.add("stop");
    tasbihEl.classList.remove("stop");
    playEl.addEventListener("click", ()=>{

        if (!interval){
          interval = setInterval(() => {
            count++;
            countEl.textContent = count;
        }, 4500);
    }
    });

    pauseBtn.addEventListener("click", ()=>{

        clearInterval(interval);
        interval = null;
    })

    ResetBtn.addEventListener("click", ()=>{

        countEl.textContent = '0';
        count = 0
        clearInterval(interval);

    })

    returnBtn.addEventListener("click", ()=>{

    imageCon.classList.remove("stop");
    tasbihEl.classList.add("stop");
    })
    
});

// تهيئة زر الإستغفار


aistighfarBtn.addEventListener("click", ()=>{

     imageCon.classList.add("stop");
    aistighfarEl.classList.remove("stop"); 
    play2.addEventListener("click", ()=>{

        if (!interval){

            interval = setInterval(() => {
                
                count++;
                count2El.textContent = count;
                
            }, 4500);
        }
    });   

      pause2.addEventListener("click", ()=>{

        clearInterval(interval);
        interval = null;
    });

    Reset2.addEventListener("click", ()=>{

         count2El.textContent = '0';
        count = 0
        clearInterval(interval);

    });

    return2.addEventListener("click", ()=>{

        imageCon.classList.remove("stop");
    aistighfarEl.classList.add("stop");

    })
});



// لتهيئة زر الصلاة على النبي

salaahBtn.addEventListener("click", ()=>{

    imageCon.classList.add("stop");
    salaahEl.classList.remove("stop");

      play3.addEventListener("click", ()=>{

        if (!interval){

            interval = setInterval(() => {
                count++;
                count3.textContent = count;
            }, 6700);
            
        }
    });

    pause3.addEventListener("click", ()=>{

        clearInterval(interval);
        interval = null;
    })

     Reset3.addEventListener("click", ()=>{

        count3.textContent = '0';
        count = 0
        clearInterval(interval);

    });

    return3.addEventListener("click", ()=>{

    imageCon.classList.remove("stop");
    salaahEl.classList.add("stop");
    })
         
})



