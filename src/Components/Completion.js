import { useContext } from "react"
import { userContext } from "./UserContext";
import * as XLSX from 'xlsx'


export default function Completion() {
    const userCtx = useContext(userContext);


    const downloadToExcel = () => {
      
        var data = JSON.parse('['+JSON.stringify(userCtx)+']')
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const dataURL = URL.createObjectURL(new Blob([excelBuffer], { type: 'application/octet-stream' }));
        const link = document.createElement('a');
        link.href = dataURL;
        link.setAttribute('download', 'data.xlsx');
        document.body.appendChild(link);
        link.click();
      };
    
    
    return (
        <div className="mb-1 gap-4 col-5 mx-auto rounded  p-5 border border-success border border-5">
            <h1 className="p-3">thank you!  {userCtx.firstName} {userCtx.lastName} </h1>
            <button className="btn-outline-primary"
                onClick={() => downloadToExcel()}
            >Download Excel</button>
        </div>
    )
}
