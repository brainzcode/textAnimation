let index = 0

const rand = (min, max) => {
    Math.floor(Math.random() * (min - max + 1)) + min;
}


const animate = star => {
    star.style.setProperty(`${rand(0, 100)}%`)
    
}