
function Container(props) {
  let cols=props.cols;
  let rows=props.rows;
  let {unit='mm', width=210, height=297, left=0, right=0, top=0, bottom=0}=props.paper;
  let colRatio=cols.reduce((total,num)=>total+num);
  colRatio=1.0*(width -left -right)/colRatio;

  let rowRatio=rows.reduce((total,num)=>total+num);
  rowRatio=1.0*(height -top -bottom)/rowRatio;

  let style={
    width:width+unit,
    height:height+unit,
    padding:`${left}mm ${top}mm ${right}mm ${bottom}mm`,
    gridTemplateColumns:cols.map(col=>(col*colRatio).toFixed(2)).join(unit+' ')+unit,
    gridTemplateRows:rows.map(row=>(row*rowRatio).toFixed(2)).join(unit+' ')+unit
  };
  return (
    <div className="chestnut-grid" style={style}>
      {props.children}
    </div>
  );
}

export default Container;
