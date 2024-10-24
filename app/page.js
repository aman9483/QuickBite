import Image from "next/image";
import Category from "./_components/crousalDishList"
import Line from "./_components/line"
import Cards from "./_components/Card"
import AllCardList from "./_components/AllListCards"

export default function Home() {
  return (
    <div>
    
    <Category/>

    <Cards/>

    <AllCardList/>
     
    </div>
  );
}
