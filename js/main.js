const texts = [ 
'> Danny.currentLocation',
' "Santa Barbara, CA"',
'> Danny.contactInfo',
'["',
'dannyshindel@gmail.com',
'", "',
'LinkedIn',
'", "',
'github',
'"]',
'> Danny.resume',
'"',
'dannyshindel.pdf',
'"',
'> Danny.skills',
'["Javascript", "CSS", "HTML", "React", "Python", "Django", "Express", "MongoDB", "Postgresql", "Node", "AWS"]',
'> Danny.education',
'["Software Engineering - General Assembly",',
'"B.S. Landscape Architecture - University of California, Davis"]',
'> Danny.interests',
'["design", "surfing", "ceramics", "film"]',
'> '];
let count = 0;
let index = 0;
let text = 0;
let currentText = '';
let letter = '';

const nameType = ["> Danny Shindel"];
let countName = 0;
let indexName = 0;
let currentTextName = '';
let letterName = '';

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
const textEl17 = document.querySelector('.typing17');
const textEl18 = document.querySelector('.typing18');
const textEl19 = document.querySelector('.typing19');
const textEl20 = document.querySelector('.typing20');
const textEl21 = document.querySelector('.typing21');
const nameEl = document.querySelector('.typingName');

document.getElementById('portfolio').addEventListener('click', clickPortfolio);
document.getElementById('gmail').addEventListener('click', clickGmail);
document.getElementById('linkedin').addEventListener('click', clickLinkedIn);
document.getElementById('github').addEventListener('click', clickGitHub);

const doc = [textEl0, textEl1, textEl2, textEl3, textEl4, textEl5, textEl6, textEl7,
    textEl8, textEl9, textEl10, textEl11, textEl12, textEl13, textEl14, textEl15,
    textEl16, textEl17, textEl18, textEl19, textEl20, textEl21]
const classes = new Array(22).fill().map((e, i) => `typing${i}`)


type()
typeName()

function type() {
    doc[text].classList.remove("erwin");
    if (count !== text) {
        if (text === 21) return
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
    setTimeout(type, 10);
}

function typeName() {
    if (countName > 0) {
        return
    }
    currentTextName = nameType[0];
    letterName = currentTextName.slice(0, ++indexName);
    nameEl.textContent = letterName;
    if (letterName.length === currentTextName.length) {
        countName++;
        indexName = 0;
        currentTextName = ''
    }
    setTimeout(typeName, 100);
}

function clickGmail() {
    document.getElementById('gmailLink').click();
}

function clickLinkedIn() {
    window.open(
        'https://www.linkedin.com/in/dannyshindel',
        '_blank' 
    );
}

function clickGitHub() {
    window.open(
        'https://github.com/danny-shindel',
        '_blank' 
    );
}

function clickPortfolio() {
    window.open(
        './pdf/Daniel.Shindel.Resume.pdf',
        '_blank' 
    );
}




