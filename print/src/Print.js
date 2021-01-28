import Container from "./container/Container";
import Line from "./line/Line";
import Cell from "./cell/Cell";
import fns from "./function/fns";
import {useMemo} from 'react';

function Print(props) {
  let record=props.record;
  let sheet=record.sheets[0];
  let recordData=record.data;
  let genFns=useMemo(()=>{
      let result=Object.create(fns);
      for(let [fnName,...params] of record.defines.formats){
          result[fnName]=new Function(...params);
      }
      return result;
  },[record.defines.formats]);

  return (
    <>
        <Container cols={sheet.cols} rows={sheet.rows} paper={sheet.paper} key={record.id}>
            <Line lines={sheet.lines} genLines={sheet.genLines} />
            <Cell cells={sheet.cells} recordData={recordData} fns={genFns} />
        </Container>
        <hr className="print-hidden" style={{width:sheet.paper.width+'mm',marginLeft:0}}/>
    </>
  );
}

export default Print;
