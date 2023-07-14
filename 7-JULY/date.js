
function e(){
    const time = document.getElementById('date-list');

const fdate = document.getElementById('firstdate').value;
console.log(fdate);
const b = new Date(fdate).getTime();
console.log(b);
const a = new Date();
const sec = Math.floor(a/1000);
console.log(sec);
const difference =  (~~b)-(~~sec) ;
console.log(difference);
let output = ``;
if (difference < 60) {
    // Less than a minute has passed:
    output = `${difference} seconds ago`;
} else if (difference < 3600) {
    // Less than an hour has passed:
    output = `${Math.floor(difference / 60)} minutes ago`;
} else if (difference < 86400) {
    // Less than a day has passed:
    output = `${Math.floor(difference / 3600)} hours ago`;
} else if (difference < 2620800) {
    // Less than a month has passed:
    output = `${Math.floor(difference / 86400)} days ago`;
} else if (difference < 31449600) {
    // Less than a year has passed:
    output = `${Math.floor(difference / 2620800)} months ago`;
} else {
    // More than a year has passed:
    output = `${Math.floor(difference / 31449600)} years ago`;
}
console.log(output);

        document.querySelector('p').innerText=output;


}
