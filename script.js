// overlay contact
function openNav() {
    document.getElementById("CONTACT").style.height = "100%";
    document.getElementById("CONTACT").style.width = "100%";
  }

function closeNav() {
    document.getElementById("CONTACT").style.height = "0";
    document.getElementById("CONTACT").style.width = "0";
}

// contact
let messages = [];
list = (e) => {
    e.preventDefault();
    const x = document.inbox.email.value;
    const atpostion = x.indexOf("@");
    const dotpostion = x.lastIndexOf(".");

        if (document.getElementById('name').value == ''){
                inbox["name"].focus();
          alert ("Please enter a Valid Name");

                return false;
        }
        if (atpostion < 1 || dotpostion < atpostion + 2 || dotpostion + 2>= x.length) {
          inbox["email"].focus();
          alert ("Please enter a valid Email Address");
          return false
      }
        if (document.getElementById('contactNumber').value == ''){
            inbox["contactNumber"].focus();
          alert ("Please enter a valid Contact Number");

            return false;
        }
        if (document.getElementById('message').value == ''){
            inbox["message"].focus();
          alert ("Please enter a Message");

            return false;
        }
        let message = {
            id: Date.now(),
            name: document.getElementById("name").value,
            contact: document.getElementById("contactNumber").value,
            email: document.getElementById("email").value,
            msg: document.getElementById("message").value,
        }
        messages.push(message);  
        console.table(messages);
        //  Saving to local storage
        localStorage.setItem("message", JSON.stringify(messages));
        document.inbox.reset();     
}
document.getElementById("send").addEventListener("click", list)

// home
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Denver Jose",
  "a Web Developer",
  "Learning Everyday!"
];
const typingDelay = 70;
const erasingDelay = 40;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});