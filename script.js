let managmentBtn = document.querySelector(".managment-btn");

let content = {
    count : 0,
    first: `<div class="row w-100 animate__animated animate__fadeInDown" data-id="first" id="managment-content">
    <div class="col-md-12 col-lg-4 d-flex justify-content-center">
        <div class="managment-person">
            <i class="fa-solid fa-volleyball"></i>
            <h4>Title goes here</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta repellat ullam quia
                asperiores sapiente.</p>
        </div>
    </div>
    <div class="col-md-12 col-lg-4 d-flex justify-content-center">
        <div class="managment-person">
            <i class="fa-solid fa-bowling-ball"></i>
            <h4>Title goes here</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta repellat ullam quia
                asperiores sapiente.</p>
        </div>
    </div>
    <div class="col-md-12 col-lg-4 d-flex justify-content-center">
        <div class="managment-person">
            <i class="fa-solid fa-dumbbell"></i>
            <h4>Title goes here</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta repellat ullam quia
                asperiores sapiente.</p>
        </div>
    </div>
</div>`,
    second: `<div class="row w-100 animate__animated animate__fadeInDown" data-id="second" id="managment-content">
   <div class="col-md-12 col-lg-4 d-flex justify-content-center">
       <div class="managment-person">
           <i class="fa-solid fa-football"></i>
           <h4>Title goes here</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta repellat ullam quia
               asperiores sapiente.</p>
       </div>
   </div>
   <div class="col-md-12 col-lg-4 d-flex justify-content-center">
       <div class="managment-person">
           <i class="fa-solid fa-table-tennis-paddle-ball"></i>
           <h4>Title goes here</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta repellat ullam quia
               asperiores sapiente.</p>
       </div>
   </div>
   <div class="col-md-12 col-lg-4 d-flex justify-content-center">
       <div class="managment-person">
           <i class="fa-solid fa-person-running"></i>
           <h4>Title goes here</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta repellat ullam quia
               asperiores sapiente.</p>
       </div>
   </div>
</div>`
}

let addMore = () => {
    let section = document.querySelector(".managment");
    let btn = document.querySelector(".managment-btn");
    if(content.count === 0){
        btn.insertAdjacentHTML("beforebegin", content.first)
        content.count++;
        return
    }
    if(content.count === 1){
        btn.insertAdjacentHTML("beforebegin", content.second)
        content.count++;
        btn.innerText = "Close"
        return
    }
    if(content.count === 2){
        section.removeChild(document.querySelector("[data-id='first']"));
        section.removeChild(document.querySelector("[data-id='second']"));
        content.count = 0;
        btn.innerText = "More"
        return;
    }
}

document.querySelector(".managment-btn").onclick = addMore;


// about-slide


let devDiv = document.getElementsByClassName("about-us-right")[0]


// up
document.querySelector(".fa-angle-up").onclick = () =>{ 
    let temp = devDiv.children[0];
    devDiv.appendChild(temp);
    devDiv.children[devDiv.children.length-1].style.setProperty("display", "none","important")
    devDiv.children[devDiv.children.length-2].style.setProperty("display", "none","important")
    devDiv.children[devDiv.children.length-3].style.setProperty("display", "flex","important")
    devDiv.children[devDiv.children.length-4].style.setProperty("display", "flex","important")
    temp = "";
}

// down 
document.querySelector(".fa-angle-down").onclick = () =>{ 
    let temp = devDiv.children[devDiv.children.length-1];
    devDiv.removeChild(devDiv.children[devDiv.children.length-1])
    devDiv.insertAdjacentElement("afterbegin",temp);
    devDiv.children[devDiv.children.length-1].style.setProperty("display", "none","important")
    devDiv.children[devDiv.children.length-2].style.setProperty("display", "none","important")
    devDiv.children[devDiv.children.length-3].style.setProperty("display", "flex","important")
    devDiv.children[devDiv.children.length-4].style.setProperty("display", "flex","important")
    temp = "";  
}


// our team
let arrSlide = [...document.querySelector(".team-slide").children];
let slideText = [...document.querySelector(".team-text").children]
devActivation = (event) => {
    arrSlide.forEach((el)=>{
        el.classList.remove("active-team-developer");
    });
    event.target.classList.add("active-team-developer");
    if(event.target.classList.contains("team-developer-avatar-first")){
        slideText[0].style.setProperty("display", "inline-block", "important")
        slideText[1].style.setProperty("display", "none", "important")
        slideText[2].style.setProperty("display", "none", "important")
    }
    else if(event.target.classList.contains("team-developer-avatar-second")){
        slideText[0].style.setProperty("display", "none", "important")
        slideText[1].style.setProperty("display", "inline-block", "important")
        slideText[2].style.setProperty("display", "none", "important")
    }
    else if(event.target.classList.contains("team-developer-avatar-third")){
        slideText[0].style.setProperty("display", "none", "important")
        slideText[1].style.setProperty("display", "none", "important")
        slideText[2].style.setProperty("display", "inline-block", "important")
    }
}

arrSlide.forEach((el)=>{
    el.onclick = devActivation;;
});


