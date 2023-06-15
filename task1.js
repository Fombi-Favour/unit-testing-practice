const stringLength = (string) => {
    let count = 0;
    if(string.length >= 1 && string.length <= 10){
        for(let i = 0; i < string.length; i++){
            if(string[i] !== ''){
                count++;
            }
        }
        return count;
    } else throw Error("Invalid string");
};

module.exports = stringLength