/**
 * @Author yymt
 * @Date 2021/1/28 9:27
 * @Version 1.0
 */

function fmtIntValue(value) {
    if(typeof value==='string' && ''===value.trim()){
        return null;
    }
    value=Number(value);
    return !isNaN(value)?parseInt(value):null;
}

export default fmtIntValue;