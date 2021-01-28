/**
 * @Author yymt
 * @Date 2021/1/28 8:50
 * @Version 1.0
 */

function fmtString(str,fmt='',nullValue='') {
    return str?fmt.replace('${value}',str):nullValue
}

export default fmtString;