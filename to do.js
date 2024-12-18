let list=document.getElementById("list");
let inputText=document.getElementById("inputText");
let parent=document.querySelector("parent");
let removebtn=document.getElementById("remove");


function addTask(){
    if (/^\s*$/.test(inputText.value)) { // Correctly accessing value
        alert("Please type something to add a task");
        }
        else{
        let li= document.createElement("li");
        li.innerHTML=inputText.value;
        let span= document.createElement("span");
        span.innerHTML= `<i class="fa-regular fa-trash-can"></i>`;
        let secondSpan=document.createElement('span');
        secondSpan.innerHTML=`<i class="fa-regular fa-circle"></i>`
        
        span.classList.add('span');
        secondSpan.classList.add('secondSpan');

        span.addEventListener("click", function(){
            li.remove();
        })
        li.addEventListener('click', function () {
            const icon=secondSpan.querySelector('i');
            if (icon.classList.contains('fa-circle')) {
                icon.classList.replace('fa-circle', 'fa-circle-check');
                li.style.textDecoration = 'line-through';
                li.style.color = '#3d3d3d';
                li.style.backgroundColor = '#4b4b4b5e';
            } else {
                icon.classList.replace('fa-circle-check', 'fa-circle');
                li.style.textDecoration = 'none';
                li.style.color = 'beige';
                li.style.backgroundColor = 'transparent';
            }
        });
        li.appendChild(span);
        li.appendChild(secondSpan);
        list.appendChild(li);
        }
        
        inputText.value="";
        
    };
    removebtn.addEventListener("click", function(){
        inputText.value='';
        
    });