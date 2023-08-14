import { NextResponse } from "next/server"
import {fetchElectricityData} from "@/model/UserModel"


export  async function GET(request){
var result = await fetchElectricityData();
return NextResponse.json(result);
}


 export function POST(request){

    const body = request.body;
    console.log(body);
    return NextResponse.json[{
        message:"posting data in  user"
    }]

 }

 export function DELETE(request){
    console.log("delete api called");
    return NextResponse.json({
        message:"delete  user !!",
        "status":true
    })
 }
 export function PUT(){
 }
 
  