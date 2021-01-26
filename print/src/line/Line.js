import RowLine from "./RowLine";
import ColLine from "./ColLine";

function Line(props) {
  let lines=props.lines;
  return (
      <>
        {
          lines.map(line=>{
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

