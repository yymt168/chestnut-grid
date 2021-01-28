/**
 * @Author yymt
 * @Date 2021/1/25 16:50
 * @Version 1.0
 */
import genGridAreaStyle from "../style/genGridAreaStyle";
import genAlignmentStyle from "../style/genAlignmentStyle";


function FixCell(props) {
    let [range,text,alignment,style,isHtml]=props.cell;
    let computedStyle=Object.assign({},style);
    Object.assign(computedStyle,genGridAreaStyle(...range));
    Object.assign(computedStyle,genAlignmentStyle(alignment));

    let result= !isHtml?<div style={computedStyle}>{text}</div>:
        <div style={computedStyle}  dangerouslySetInnerHTML={{ __html: text }}></div>;
    return result;
}

export default FixCell;