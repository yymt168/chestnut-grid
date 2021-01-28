/**
 * @Author yymt
 * @Date 2021/1/28 8:44
 * @Version 1.0
 */

function fmtDateValue(value) {
    let result=null;
    if(typeof value==='string'){
        value=value.trim();
    }
    if(value){
        if(!isNaN(value)){
            value=Number(value);
        }
        result=new Date(value);
        if(isNaN(+value)){
            result=null;
        }
    }
    return result;
}

export default fmtDateValue;