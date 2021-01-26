import Container from "./container/Container";
import Line from "./line/Line";
import Cell from "./cell/Cell";

function Print(props) {
  let record=props.record;
  let sheet=record.sheets[0];

  return (
    <>
        <Container cols={sheet.cols} rows={sheet.rows} paper={sheet.paper} key={record.id}>
            <Line lines={sheet.lines} />
            <Cell cells={sheet.cells} />
        </Container>
        <hr className="print-hidden" style={{width:sheet.paper.width+'mm',marginLeft:0}}/>
    </>
  );
}

export default Print;
