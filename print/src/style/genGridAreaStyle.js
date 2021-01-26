/**
 * @Author yymt
 * @Date 2021/1/25 15:52
 * @Version 1.0
 */
function genGridAreaStyle(rowStart, colStart, rowEnd, colEnd, rowMax, colMax) {
    if(rowMax && rowEnd && rowEnd>rowMax){
        rowEnd=rowMax;
    }
    rowEnd=rowEnd || (rowStart+1);

    if(colMax && colEnd && colEnd>colMax){
        colEnd=colMax;
    }
    colEnd= colEnd || (colStart+1) ;
    return {gridArea:`${rowStart}/${colStart}/${rowEnd}/${colEnd}`};
}
export default genGridAreaStyle;