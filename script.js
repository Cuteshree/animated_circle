const circles = document.querySelector(".circle");

circles.forEach(circles => {
    let dots = circle.getAttribute("data-dots");
    let marked = circle.getAttribute("data-percent");
    let percent = Math.floor(dots * marked/100);
    let rotate = 360/dots;
    let point = ""
    for(let i = 0; i<dots;i++){
        point += <div class= "points" style ="--i: $(i); --rot: ${rotate}deg"></div>;
    }

    circle.innerHTML =point;
    const pointsMarkeed = circle.querySelectorAll(".points");
    for(let i = 0; i<percent; i++){
        pointsMarkeed[i].classList.add("marked")
    }
});