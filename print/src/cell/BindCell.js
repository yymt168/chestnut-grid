/**
 * @Author yymt
 * @Date 2021/1/25 16:50
 * @Version 1.0
 */
import genGridAreaStyle from "../style/genGridAreaStyle";
import genAlignmentStyle from "../style/genAlignmentStyle";
import genFontStyle from "../style/genFontStyle";

//bindInfo:[[bindName1,bindName2,...],'formatFunctionName,YYmmDD']
function BindCell(props) {
    let [range,bindInfo,alignment,font,isHtml]=props.cell;
    let style={};
    Object.assign(style,genGridAreaStyle(...range));
    Object.assign(style,genAlignmentStyle(alignment));
    Object.assign(style,genFontStyle(font));

    let result= !isHtml?<div style={style}>{bindInfo[0][0]}</div>:
        <div style={style}  dangerouslySetInnerHTML={{ __html: bindInfo[0][0] }}></div>;
    return result;
}

export default BindCell;