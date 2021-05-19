const texts = [ 
'> Danny.currentLocation',
'> "Santa Barbara, CA"',
'> Danny.contactInfo',
'> ["',
'dannyshindel@gmail.com',
'", "',
'LinkedIn',
'", "',
'github',
'"]',
'> Danny.resume',
'> "',
'dannyshindel.pdf',
'"',
'> Danny.interests',
'> ["design", "surfing", "ceramics", "motorcycles"]',
'> '];
let count = 0;
let index = 0;
let text = 0;
let currentText = '';
let letter = '';

const textEl0 = document.querySelector('.typing0');
const textEl1 = document.querySelector('.typing1');
const textEl2 = document.querySelector('.typing2');
const textEl3 = document.querySelector('.typing3');
const textEl4 = document.querySelector('.typing4');
const textEl5 = document.querySelector('.typing5');
const textEl6 = document.querySelector('.typing6');
const textEl7 = document.querySelector('.typing7');
const textEl8 = document.querySelector('.typing8');
const textEl9 = document.querySelector('.typing9');
const textEl10 = document.querySelector('.typing10');
const textEl11 = document.querySelector('.typing11');
const textEl12 = document.querySelector('.typing12');
const textEl13 = document.querySelector('.typing13');
const textEl14 = document.querySelector('.typing14');
const textEl15 = document.querySelector('.typing15');
const textEl16 = document.querySelector('.typing16');

document.getElementById('portfolio').addEventListener('click', clickPortfolio);
document.getElementById('gmail').addEventListener('click', clickGmail);
document.getElementById('linkedin').addEventListener('click', clickLinkedIn);
document.getElementById('github').addEventListener('click', clickGitHub);

const classes = ['typing0', 'typing1', 'typing2', 'typing3', 'typing4', 'typing5', 'typing6', 'typing7', 'typing8', 'typing9', 'typing10', 'typing11', 'typing12', 'typing13', 'typing14', 'typing15', 'typing16']
const doc = [textEl0, textEl1, textEl2, textEl3, textEl4, textEl5, textEl6, textEl7, textEl8, textEl9, textEl10, textEl11, textEl12, textEl13, textEl14, textEl15, textEl16]


type()

function type() {
    doc[text].classList.remove("erwin");
    if (count !== text) {
        if (text === 16) return
        doc[text].classList.remove(classes[text])
        text++;
        setTimeout(type, 5);
        return
    }
    currentText = texts[text];
    letter = currentText.slice(0, ++index);
    doc[text].textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        currentText = ''
    }
    setTimeout(type, 15);
}

function clickGmail() {
    window.open(
        'mailto:dannyshindel@gmail.com',
        '_blank' // <- This is what makes it open in a new window.
    );
}

function clickLinkedIn() {
    window.open(
        'https://www.linkedin.com/in/dannyshindel',
        '_blank' // <- This is what makes it open in a new window.
    );
}

function clickGitHub() {
    window.open(
        'https://https://github.com/danny-shindel',
        '_blank' // <- This is what makes it open in a new window.
    );
}

function clickPortfolio() {
    window.open(
        'https://www.linkedin.com/in/dannyshindel',
        '_blank' // <- This is what makes it open in a new window.
    );
}




