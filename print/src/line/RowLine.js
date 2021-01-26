/**
 * @Author yymt
 * @Date 2021/1/25 15:59
 * @Version 1.0
 */
import genGridAreaStyle from "../style/genGridAreaStyle";
import DEFAULT_STYLE from "./LineDefaultStyle";

function RowLine(props) {
    let [rowStart,colStart,rowEnd,colEnd,width=1,style={}]=props.line;
    style=Object.assign({},DEFAULT_STYLE,style);
    style.borderWidth=width+'px 0 0 0';
    style.marginTop= - 0.5*width+'px';
    Object.assign(style,genGridAreaStyle(rowStart,colStart,rowEnd,colEnd));

    return (<div style={style}></div>);
}

export default RowLine;