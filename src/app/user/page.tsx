'use client';

import ScreenMobile from "@/components/ScreenMobile";
import HeaderTabs from "@/components/user/HeaderTabs";
import OrderButton from "@/components/user/OrderButton";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import MenuList from "@/components/user/MenuList";

export default function Home() {
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(searchParams.get('accessKey'))
  }, [searchParams])

  return (
    <ScreenMobile>
      <HeaderTabs />
      <div className="flex flex-col gap-2 px-3 pt-16 pb-24 bg-gray-100">
        <div className="flex flex-row justify-between w-full">
          <p className=" w-1/3 font-bold text-lg pl-1"> โต๊ะที่ : 21 </p>
          <p className=" w-2/3 font-bold text-lg pl-12"> เวลาในการทาน : 54 นาที </p>
        </div>
        <p className="text-primary text-xl text-right pr-1"> 20:18 น. </p>
        <div className=" m-2">
          <MenuList title="หมู" />
        </div>
      </div>
      <OrderButton />
    </ScreenMobile>
  );
}
