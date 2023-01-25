/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let markovChains ={};
    let markovArray = this.words;
    for(let i = 0 ; i < markovArray.length ; i++){
        if(markovChains[markovArray[i]]){
            if(markovArray[i+1] === undefined){
                markovChains[markovArray[i]].push(null);
            }else{
                markovChains[markovArray[i]].push(markovArray[i+1]);
            }
        }else{
            markovChains[markovArray[i]]=new Array();
            if(markovArray[i+1] === undefined){
                markovChains[markovArray[i]].push(null);
            }else{
                markovChains[markovArray[i]].push(markovArray[i+1]);
            }
        }

    }
    return markovChains;


  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    

  }
}

let mm = new MarkovMachine("the cat in the hat");
console.log(mm.makeChains());

let springboard = new MarkovMachine("the cat in the hat is in the hat");
console.log(springboard.makeChains());


console.log(mm.makeText())