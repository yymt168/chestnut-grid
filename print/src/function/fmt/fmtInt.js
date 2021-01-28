/**
 * @Author yymt
 * @Date 2021/1/28 9:27
 * @Version 1.0
 */
//$,000万

import fmtIntValue from "./fmtIntValue";
function fmtInt(value,fmt=',000',nullValue='') {
    value=fmtIntValue(value);
    if(null===value){
        return nullValue;
    }
    let match=fmt.match(/0+/);
    let result;
    if(match.length>0){
        let zeros=match[0];
        let zero_count=zeros.length;
        let index=fmt.indexOf(zeros);
        let prefix=fmt.substring(0,index-1);
        let separator=fmt.substring(index-1,index);
        let suffix=fmt.substring(index+zero_count);
        result=suffix;
        let pow=parseInt(Math.pow(10,zero_count));
        while (value){
            let tmp= (value % pow)+'';
            for(let i=tmp.length;i<zero_count;i++){
                tmp='0'+tmp;
            }
            value=parseInt(value / pow );
            result=(value?separator:'')+tmp+result;
        }
        result=prefix+result;
    }else{
        result=value+'';
    }
    return result;
}
export default fmtInt;