import RowLine from "./RowLine";
import ColLine from "./ColLine";
import genLines from "./genLines";
import {useMemo} from "react";

function Line(props) {
  let linesData=props.lines;
  let genLinesData=props.genLines;
  let allLines=useMemo(()=>genLines(genLinesData).concat(linesData),[linesData,genLinesData]);
  return (
      <>
        {
          allLines.map(line=>{
              let [rowStart,colStart,rowEnd,colEnd]=line;
              let key=`Line-${rowStart}-${colStart}-${rowEnd}-${colEnd}`;
              if(rowStart===rowEnd){
                  return <RowLine line={line} key={key}/>
              }else if(colStart===colEnd){
                  return <ColLine line={line} key={key}/>
              }else{
                  //斜线
                  return null;
              }
          })
        }
      </>
  );
}

export default Line;

