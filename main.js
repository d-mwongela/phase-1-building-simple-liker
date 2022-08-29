// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph");
likes.forEach((like) => {
    like.addEventListener("click", () => {
        mimicServerCall()
            .then(() => {
                if (like.innerHTML === EMPTY_HEART) {
                    like.innerHTML = FULL_HEART;
                    like.classList.add("activated-heart");
                } else {
                    like.innerHTML = EMPTY_HEART;
                    like.classList.remove("activated-heart");
                }
            })
            .catch(() => {
                document.getElementById("modal").classList.remove("hidden");
                setTimeout(() => {
                    document.getElementById("modal").classList.add("hidden");
                }, 3000);
            });
    });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
