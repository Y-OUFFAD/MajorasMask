
function printEnemies(params:String[]) {
    let i: number= 0

    while (i < params.length){
        const text_min = params[i].toLowerCase()
        if (text_min.match("evil")||text_min.match("bad")||text_min.match("mean")||text_min.match("rotten")||text_min.match("cruel") ) {
           console.log(text_min.replace(" ","_"))
        }
        i++;
    }   
}  

export default printEnemies
