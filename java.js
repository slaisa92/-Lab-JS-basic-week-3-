console.log("I'm ready!");

// Iteration 1

let hacker1 = "Adrian"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alex"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2 

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

else {
    console.log(`WOW, you both have equally long name, ${hacker1.length} characters`);
}

//Iteration 3

let newDriversName = "";
for(let i=0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());

let newNavigatorsName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorsName +=hacker2[i];
}
console.log(newNavigatorsName);


hacker1 = hacker1.toLocaleLowerCase();
hacker2 = hacker2.toLocaleLowerCase();

if (hacker1 > hacker2)
    console.log("The Drivers name goes first.");

else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definately.");
}
else {
    console.log("WHat?! You both have the same name?");
}


//Bonus 1

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.

Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.`

let words = 0;
let et = 0;

let countText = text.split(' ');

for (let i=0; i < countText.length; i++) {
  if(countText[i].includes('\n')) {
    words++
  } else if(countText[i] || text[i]) {
    et++;
  }
  words++;
 }

console.log(words);
console.log(et);

//Bonus 2

let Check = "A man, a plan, a canal, Panama!";
Check = Check.replace(/[ ,!.]/g, "").toLowerCase();

let reverseCheck = Check.split('').reverse().join('');
 if(Check === reverseCheck) {
    console.log('String is a Palindrome');
 }
else {
    console.log('Not a palindrome');
}