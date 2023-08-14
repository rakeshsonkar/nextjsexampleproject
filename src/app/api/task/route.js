
import { NextResponse } from "next/server"
import {TaskModel,TaskModelPost} from "@/model/TaskModel"

export  async function GET(request){
    var result = await TaskModel();
    return NextResponse.json(result);
    }

export   async function POST(request){
    try {
        const body = await request.json()
        console.log(body);
     var result = await TaskModelPost(body);
     
    return NextResponse.json({Message: "Data Added successfully"}); 
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({errorMessage: "Error fetching data"},{status:400}); 
    }
    
}