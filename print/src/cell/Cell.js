/**
 * @Author yymt
 * @Date 2021/1/25 16:46
 * @Version 1.0
 */
import FixCell from "./FixCell";
import BindCell from "./BindCell";
import genBinds from "./genBinds";
import {useMemo} from 'react';

function Cell(props) {
    let cells=props.cells;
    let bindsData=cells.binds;
    let genBindsData=cells.genBinds;
    let allBinds=useMemo(()=>genBinds(genBindsData).concat(bindsData),[bindsData,genBindsData]);
    return (
        <>
            {
                cells.fixes.map(cell=><FixCell cell={cell} key={'fix-'+cell[0].join('-')}/>)
            }
            {
                allBinds.map(cell=><BindCell cell={cell} key={'bind-'+cell[0].join('-')}/>)
            }
        </>
    );
}

export default Cell;