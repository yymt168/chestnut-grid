/**
 * @Author yymt
 * @Date 2021/1/26 10:02
 * @Version 1.0
 */
function genLines(fromGenLines) {
    let toLines=[];
    if(fromGenLines){
        for(let fromGenLine of fromGenLines){
            genLine(fromGenLine,toLines);
        }
    }
    return toLines;
}

function genLine(fromGenLine,toLines) {
    let [count,[offsetRowStart,offsetColStart,offsetRowEnd,offsetColEnd],[rowStart,colStart,rowEnd,colEnd,width]]=fromGenLine;
    for(let i=1;i<=count;i++){
        let index= i -1;
        let x1= rowStart + index*offsetRowStart;
        let y1 = colStart + index*offsetColStart;
        let x2,y2;
        if(rowEnd){
            x2 = rowEnd + index*offsetRowEnd;
        }
        if(colEnd){
            y2 =colEnd + index*offsetColEnd;
        }
        toLines.push([x1,y1,x2,y2,width]);
    }
}
export default genLines;