/**
 * @Author yymt
 * @Date 2021/1/26 16:06
 * @Version 1.0
 */
//[[bindName1,bindName2,...],'formatFunctionName,YYmmDD']
//formatFunctionName(recordData[bindName1],recordData[bindName2],...,'YYmmDD')

function genBindValue(bindInfo,recordData,fns) {
    let bindValue;
    let bindNames=bindInfo[0];
    if(1===bindInfo.length){
        bindValue=recordData[bindNames[0]];
    }else if(2===bindInfo.length){
        let fmtStr=bindInfo[1].split(',');
        let fn=fns[fmtStr[0]];
        if(fn){
            let params=[];
            for(let i=0;i<bindNames.length;i++){
                params.push(recordData[bindNames[i]]);
            }
            let [,rest]=fmtStr;
            bindValue=fn(...params.concat(rest));
        }
    }
    return bindValue;
}

export default genBindValue;