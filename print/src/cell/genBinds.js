/**
 * @Author yymt
 * @Date 2021/1/26 10:02
 * @Version 1.0
 */
function genBinds(fromGenBinds) {
    let toBinds=[];
    if(fromGenBinds){
        for(let fromGenBind of fromGenBinds){
            genBind(fromGenBind,toBinds);
        }
    }
    return toBinds;
}

function genBind(fromGenBind,toBinds) {
    let [count,[offsetRowStart,offsetColStart,offsetRowEnd,offsetColEnd],cells]=fromGenBind;
    for(let i=1;i<=count;i++){
        for(let cell of cells){
            let [[rowStart,colStart,rowEnd,colEnd],bindInfo,alignment,font,isHtml]=cell;
            let index= i -1;
            rowStart += index*offsetRowStart;
            colStart += index*offsetColStart;
            if(rowEnd){
                rowEnd += index*offsetRowEnd;
            }
            if(colEnd){
                colEnd += index*offsetColEnd;
            }

            let [...replaceBindInfo]=bindInfo;
            let bindNames=bindInfo[0];
            let replaceBindNames=[];
            for(let k=0;k<bindNames.length;k++){
                replaceBindNames.push(bindNames[k].replace('[i]',i));
            }
            replaceBindInfo[0]=replaceBindNames;

            toBinds.push([[rowStart,colStart,rowEnd,colEnd],replaceBindInfo,alignment,font,isHtml?1:0]);
        }
    }
}
export default genBinds;