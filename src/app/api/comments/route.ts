import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(req:NextApiRequest,res:NextApiResponse) {
   try{
    const resp = await prisma.comment.findMany();
      // const response = await axios.get('https://jsonplaceholder.typicode.com/comments/3')
      return NextResponse.json(resp)
   }
   catch(err:any){
      return NextResponse.json(err,{status:500})
   }
}



// const comments = [
//          {
//       'avatar':'/ins.svg',
//     'text':'1Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//      'avatar':'/ins.svg',
//     'text':'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//       'avatar':'/ins.svg',
//    'text':'3Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//       'avatar':'/ins.svg',
//    'text':'4Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//       'avatar':'/ins.svg',
//    'text':'5Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//       'avatar':'/ins.svg',
//    'text':'6Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//       'avatar':'/ins.svg',
//    'text':'7Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     },
//     {
//       'avatar':'/ins.svg',
//    'text':'8Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti voluptatum veniam, vel quam architecto? Laborum hic illo fugit odit, sed quaerat id delectus totam facilis ratione corrupti tenetur quod.',
//     }
//       ]