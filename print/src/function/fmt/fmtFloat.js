/**
 * @Author yymt
 * @Date 2021/1/28 8:58
 * @Version 1.0
 */
import fmtFloatValue from "./fmtFloatValue";

function decode(str='') {
    let result=null;
    let index=str.indexOf('0.0');
    if(index>-1){
        let beforeText=index===0?'':str.substring(0,index);
        let afterText='';
        let num=1;
        let i=index+3;
        while (i<str.length && '0'===str[i]){
            num++;
            i++;
        }
        if(i<str.length) afterText=str.substring(i);
        result={afterText,beforeText,num};
    }
    return result;
}

// 0.0 $0.0e
function fmtFloat(value,fmt,nullValue='') {
    value=fmtFloatValue(value);
    if(null===value || undefined===value){
        return nullValue;
    }
    let result;
    let decodeObj=decode(fmt);
    if(decodeObj){
        let i=parseInt(value);
        result=i+(decodeObj.num>0?'.':'');
        for(let j=0;j<decodeObj.num;j++){
            value=10*value;
            result += parseInt(value) % 10;
        }
        result=decodeObj.beforeText+result+decodeObj.afterText;
    }else{
        result=value+'';
    }
    return result;
}

export default fmtFloat;