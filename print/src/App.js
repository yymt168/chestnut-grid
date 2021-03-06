import './App.css';
import {useState,useEffect} from 'react';
import Print from './Print';
import testRecords from './testdata/printTestData';

function App() {
    const [records,setRecords]=useState( []);
    useEffect(()=>{
        function msgEvtListener(msg) {
            let data=msg.data;
            if(data.type === 'grid-report-records'){
                setRecords(data.records);
            }
        }
        window.addEventListener('message',msgEvtListener);
        window.postMessage({type:'grid-report-records',records:testRecords},'*');
        return ()=> window.removeEventListener('message',msgEvtListener);
    },[]);

    return (
        <>
            {
                records.map(record=> <Print record={record} key={record.id} />)
            }
        </>
    );
}

export default App;
