import { NextResponse } from "next/server";

const langs = [
      {logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",name:"C++"},
      {logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/ruby/ruby.png",name:"Ruby"},
      {logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",name:"Python"},
      {logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",name:"JavaScript"},
      {logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",name:"TypeScript"},
      {logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",name:"Java"},
]

export async function GET() {
    return NextResponse.json(langs);
}