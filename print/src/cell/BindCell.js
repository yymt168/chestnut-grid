/**
 * @Author yymt
 * @Date 2021/1/25 16:50
 * @Version 1.0
 */
import genGridAreaStyle from "../style/genGridAreaStyle";
import genAlignmentStyle from "../style/genAlignmentStyle";
import genBindValue from "./genBindValue";

//bindInfo:[[bindName1,bindName2,...],'formatFunctionName,YYmmDD']
function BindCell(props) {
    let recordData=props.recordData;
    let fns=props.fns;
    let [range,bindInfo,alignment,style,isHtml]=props.cell;
    let computedStyle=Object.assign({},style);
    Object.assign(computedStyle,genGridAreaStyle(...range));
    Object.assign(computedStyle,genAlignmentStyle(alignment));

    let bindValue=genBindValue(bindInfo,fns,recordData);
    let result= !isHtml?<div style={computedStyle} >{bindValue}</div>:
        <div style={computedStyle}  dangerouslySetInnerHTML={{ __html: bindValue }}></div>;
    return result;
}

export default BindCell;