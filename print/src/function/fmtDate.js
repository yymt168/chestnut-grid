/**
 * @Author yymt
 * @Date 2021/1/26 16:32
 * @Version 1.0
 */

function dateTimeFormat(date, fmt){
    let o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(let k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

function fmtDate(date,fmt,nullValue='') {
    let result=nullValue;
    if(typeof date==='string'){
        date=date.trim();
    }
    if(date){
        if(!isNaN(date)){
            date=Number(date);
        }
        date=new Date(date);
        if(!isNaN(+date)){
            result=dateTimeFormat(date,fmt);
        }
    }
    return result;

}

export default fmtDate;