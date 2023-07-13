import { NextResponse } from 'next/server';

const cardsData = [
    {image:"https://wallpaperaccess.com/full/4391662.jpg",name:"Software And App Development"},
    {image:"https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",name:"Website Development And SEO"},
    {image:"https://t4.ftcdn.net/jpg/03/54/34/51/360_F_354345119_TqAOr4z9cyArqlYl6rhN4pMH4Rkku9VD.jpg",name:"Cloud Services"},
    {image:"https://roboticsandautomationnews.com/wp-content/uploads/2022/03/artificial-intelligence-rpa.jpg",name:"Robotics And Automation"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPilESw5KgMPZFcCxMO3Md0ayzjkWfftKwiOqhOeYS4y_DFNEoMn9WpUvrgjb41cTemI0&usqp=CAU",name:"3D Printing And Prototyping"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6PO5q_oJ6-k1MXq6iRBDuwinJm1s35otqej3JuyVeqNvLVTf2_vkBjTPzGSFksTVYTw&usqp=CAU",name:"Data Science And Analytics"},
    {image:"https://bluehealthintelligence.com/wp-content/uploads/2021/01/ai_learning_v2-846x442.jpg",name:"AI And Machine Learning"},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMn8m8HW1dmOB9ISA_AXPl5EJFxiJ1_6YqE0uw6fK2Mt_6RCvIm1G1k8qcZ_jagMIkkyA&usqp=CAU",name:"IOT, AR And VR"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKkIVuFaPVRu72fKlpwurO-8HhxJHvtNoYg&usqp=CAU",name:"BlockChain"},
    {image:"https://img.freepik.com/premium-photo/group-it-consultant-working-by-interface-ui-management-big-data-analyze-financial-document-company_3535-1528.jpg",name:"Tech Consultancy"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zd3G7u67a2yyOA20Nf7RW15bnQWOtqMOqg&usqp=CAU",name:"Research And Development"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTcNbiWIrRncZrs1wL6B-cY60T8ZXFzB5hWi0jz00RX9FvXN1rscusukcKq_YwJa2fO0A&usqp=CAU",name:"Data Security"}
];

export async function GET() {
  return NextResponse.json(cardsData);
}