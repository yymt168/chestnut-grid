/**
 * @Author yymt
 * @Date 2020/8/5 15:50
 * @Version 1.0
 */
import Alignment from "./Alignment";

function genAlignmentStyle(alignment=(Alignment.CENTER | Alignment.CENTRAL)) {
    let style={};
    if((alignment & Alignment.LEFT)>0){
        style.textAlign='left';
        style.justifyContent='flex-start';
    }else if ((alignment & Alignment.RIGHT)>0){
        style.textAlign='right';
        style.justifyContent='flex-end';
    }else{
        style.textAlign='center';
    }

    if((alignment & Alignment.Top)>0){
        style.verticalAlign='top';
        style.alignSelf='start';
    }else if ((alignment & Alignment.BOTTOM)>0){
        style.verticalAlign='bottom';
        style.alignSelf='end';
    }else{
        style.verticalAlign='central';
    }
    return style;
}
export default genAlignmentStyle;