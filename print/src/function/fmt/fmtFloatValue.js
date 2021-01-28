/**
 * @Author yymt
 * @Date 2021/1/28 8:58
 * @Version 1.0
 */

function fmtFloatValue(value) {
    if(typeof value==='string'){
        value=value.trim();
        if(''===value) value=null;
    }
    return (value && !isNaN(value)) || (0===value)?Number(value):null;
}

export default fmtFloatValue;