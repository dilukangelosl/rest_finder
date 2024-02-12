import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { DataTable } from "@/components/table/data-table";
import { columns } from "@/components/table/columns";


export default function Home() {
  const [lat,setLat] = useState("6.927079");
  const [lng, setLng] = useState("79.861244")
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)


  async function search(){
      setLoading(true);

      try {
        const response = await axios.get(`https://xajw1g5l72.execute-api.us-east-1.amazonaws.com/dev/${lat}/${lng}`);
        console.log(response.data)
       if(response.data){
        setData([...response.data])
       }
      } catch (error:any) {
        console.log(error)
          alert(error.message)
      }finally{
        setLoading(false)
      }
  }
  return (
   <main className="w-full min-h-screen py-32 bg-gray-950 flex items-center justify-center flex-col">
      <h1 className="text-white">PLACE FINDER</h1>

      <div className="p-4 shadow-sm m-3 border border-slate-600 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
        <div className="flex flex-col gap-1">
          <span className="text-slate-200">Latitude</span>
        <Input placeholder="LATITUDE" value={lat} onChange={e =>  setLat(e.target.value)}/>
        </div>

        <div className="flex flex-col gap-1">
        <span className="text-slate-200">Longitude</span>
          <Input placeholder="LONGITUDE" value={lng} onChange={e =>  setLng(e.target.value)}/>
        </div>
         
        </div>
        <Button className="w-full" onClick={() => search()}>{loading?"Loading...":"Search"}</Button>
      </div>

      <div className="container mx-auto py-10 bg-white">

      <DataTable columns={columns} data={data} />
      </div>
   </main>
  );
}
