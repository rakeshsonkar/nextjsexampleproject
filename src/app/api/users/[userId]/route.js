import {  NextResponse } from "next/server";

export function DELETE(request,{params}){
    //console.log(params);
    const {userId} = params;
    console.log(userId);
    return NextResponse.json({
        Message:"message  testing the  data "
    })
}