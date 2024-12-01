let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let animationFrameId;
function moveSlide() {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]); // Move the first element to the end
  animationFrameId = setTimeout(() => requestAnimationFrame(moveSlide), 3000);
}

// button "Next"
next.addEventListener('click', () => {
  clearTimeout(animationFrameId);
  let items = document.querySelectorAll('.item');
  moveSlide();
});

// Call the function every 5 seconds
animationFrameId = setTimeout(() => requestAnimationFrame(moveSlide), 4000);


prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
});


// Smooth appearance of text
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    } else {
      change.target.classList.remove('show');
    }
  });
}

let options = {
  threshold: [0.2]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.scroll-element');

for (let elm of elements) {
  observer.observe(elm);
}


