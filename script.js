const accordionContent = document.querySelectorAll(".accordion");
const signup = document.getElementById('signup');
const overlay = document.getElementById('overlay');
const closeIBtn = document.querySelector('.close-i-btn');

closeIBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

signup.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.style.display = 'flex';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

accordionContent.forEach((item, index) => {
    let question = item.querySelector(".question");
    question.addEventListener('click', () => {
        item.classList.toggle("open");

        let answer = item.querySelector(".answer");
        if(item.classList.contains("open")) {
            answer.style.height = `${answer.scrollHeight}px`;
            item.querySelector("i").classList.replace('uil-angle-down', 'uil-angle-up');
        } else {
            answer.style.height = "0px";
            item.querySelector("i").classList.replace('uil-angle-up', 'uil-angle-down');
        }
        removeOpen(index)
    })
})

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".answer");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace('uil-angle-up', 'uil-angle-down');
        }
    })
}
