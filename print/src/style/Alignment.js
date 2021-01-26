/**
 * @Author yymt
 * @Date 2020/8/5 11:55
 * @Version 1.0
 */
// const CLEAR_LCR=0b111000;//清除左中右
// const CLEAR_TCB=0b000111;//清除上中下
let Alignment=Object.freeze({
    LEFT:0b1,
    CENTER:0b10,
    RIGHT:0b100,
    TOP:0b1000,
    CENTRAL:0b10000,
    BOTTOM:0b100000,
    setValue:setAlignment
});
function setAlignment(alignment,value) {
    return (alignment & (value<=4?0b111000 : 0b000111)) | value;
}
export default Alignment;