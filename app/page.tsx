'use client'
import { Image } from "@nextui-org/react";

export default function Home() {
    let list = ["/picture1.jpg", "/picture2.jpg", "/picture3.jpg", 
                "/picture4.jpg", "/picture5.jpg", "/picture6.jpg",
                "/picture7.jpg", "/picture8.jpg", "/picture9.jpg", 
                "/picture10.jpg", "/picture11.jpg", "/picture12.jpg"];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {list.map((item, index) =>  (
                <Picture img={item} key={index} />
            ))}
        </div>
    );
}

function Picture({ img }: any) {
    return (
        <Image
            alt="Whileyouweresleeping"
            className="rounded-none"
            src={img}
            width={500}
        />
    );
}
