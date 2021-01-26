/**
 * @Author yymt
 * @Date 2021/1/25 17:23
 * @Version 1.0
 */
function genFontStyle({name,size,weight,lineHeight,textDecoration}) {
    let style={};
    if(name) {
        style.fontFamily=name;
    }
    if(size) {
        style.fontSize=size;
    }
    if(weight) {
        style.fontWeight=weight;
    }
    if(lineHeight) {
        style.lineHeight=lineHeight;
    }
    if(textDecoration) {
        style.textDecoration=textDecoration;
    }
    return style;
}

export default  genFontStyle;