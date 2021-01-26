/**
 * @Author yymt
 * @Date 2021/1/25 15:59
 * @Version 1.0
 */
import genGridAreaStyle from "../style/genGridAreaStyle";
import DEFAULT_STYLE from "./LineDefaultStyle";

function ColLine(props) {
    let [rowStart,colStart,rowEnd,colEnd,width=1,style={}]=props.line;
    style=Object.assign({},DEFAULT_STYLE,style);
    style.borderWidth='0 0 0 '+width+'px';
    style.marginLeft= - 0.5*width+'px';
    Object.assign(style,genGridAreaStyle(rowStart,colStart,rowEnd,colEnd));

    return (<div style={style}></div>);
}

export default ColLine;