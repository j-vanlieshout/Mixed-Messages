

const vocabFactory = (str, type) => {
    const vocab = {
        str, //The part of the sentence
        type //Type of string. This could be: [percentage, noun, description, are, fact] 
        //Example: 90% of [percentage] people [noun (plural)] in Autralia [description] are [are] blind [fact]
    }
    return vocab
}

//structures:
//s1 = [precentage, noun(plural), description, are, fact]
//s2 = [description, , percentage, noun (plural) , are fact] !!extra comma!!
// [presentence, s1] (are you suggesting that 90% of ....) (is it true that... )

const nouns = ['people','women', 'men', 'animals', 'movies lovers', 'daytraders', 'kings'];
const makePercentages = nums =>{
    let p = []
    for (let i = 0;i<nums.length;i++){
        p.push(nums[i]+'% of')
    }
    return p;
}
const percentages = makePercentages([10,20,30,40,50,60,70,80,90]);
const descriptions = ['in Australia', 'with shoes', 'with cats', 'that aren\'t wearing socks right now', 'that don\'t like banana\'s' ];
const are = ['are'];
const facts = ['blue', 'afraid of mice', 'nightblind', 'living in fear of large boulders', 'happier than their neighbours', 'behind your curtains'];
const presentences = ['Did you know that', 'Are you are that'];
const structures = [['percentage', , 'noun', 'description', 'are', 'fact'],['percentage', 'noun', 'are', 'fact']];


const selectWord = (arr) => {
    return word = arr[Math.floor(Math.random()*arr.length)];
}


const makeMessages = () => {
    const structure = structures[Math.floor(Math.random()*structures.length)];
    let sentence = [];
    for(let i = 0;i<structure.length;i++){
        switch(structure[i]){
            case 'percentage':
                sentence.push(selectWord(percentages));
                break;
            case 'desciption':
                sentence.push(selectWord(descriptions));
                break;   
            case 'are':
                sentence.push('are');
                break;
            case 'fact':
                sentence.push(selectWord(facts));
                break;    
            case 'noun':
                sentence.push(selectWord(nouns));
                break;  
        }
    }

    return sentence.join(' ')
    
}
console.log(makeMessages());
console.log(makeMessages());
console.log(makeMessages());
console.log(makeMessages());
console.log(makeMessages());
console.log(makeMessages());
console.log(makeMessages());
console.log(makeMessages());
