"use client";
import React from 'react'
import Button from '@/app/components/Button';
import Image from 'next/image';
import thumb from '@/public/Images/shooting.jpeg';
export default function MissionPage() {
  return (
    <main className="mt-10">
        <div>
            <p className='mb-4'>this is mission page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at perspiciatis quo aut laboriosam tenetur eius quae officiis et? Atque nobis reprehenderit quaerat. Esse explicabo commodi ipsa necessitatibus ad. Quod soluta adipisci hic aliquid veniam beatae, id architecto similique mollitia? Et totam temporibus odio deleniti quaerat quae corrupti ab? Soluta ducimus esse rem tempora officiis a doloribus, odit temporibus praesentium consectetur saepe nulla cupiditate harum sit ipsa architecto aspernatur cumque eius delectus veritatis dignissimos iusto fugit quasi? Voluptas ducimus porro repellat corporis qui eius ipsam magni rem velit perspiciatis autem nostrum ex doloribus quas suscipit laudantium dolore eaque nobis, possimus quod omnis facere quidem praesentium? Quo impedit aliquid, accusamus labore nam consectetur at quidem incidunt optio ducimus commodi nihil unde!</p>
            
            

        </div>
        <Image placeholder='blur' src={thumb}  alt='thumb image' quality={100}/>

            <Button />
    </main>
  )
}
