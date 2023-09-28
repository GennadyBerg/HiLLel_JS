
const text = "Зашибись, падла!  пофиг на эту херню. Лох, щас  придет писец, Однако важно помнить, что жизнь - это не только литературные выражения, но и настоящие чувства, моменты и отношения, которые делают её ценной и интересной.";
const wrongWords = "Щас херня балда падла писец пофиг зашибись лох"

function filterWords(text, wrongWords) {
            text = text.toUpperCase();
            wrongWords = wrongWords.toUpperCase();
            let res;
            for (const bad of wrongWords) {
                        res = text.includes(bad) ? true : false;
            }
            return res;
}

const res = filterWords(text, wrongWords);
console.log(res);


//Зашибись, падла!  пофиг на эту херню. Лох, щас  придет писец...