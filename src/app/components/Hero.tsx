import Image from "next/image";

export default function Hero(){
    return(
        <div className="max-w-[1216px] mx-auto">
            <Image src={"/Image.png"} alt="hero image" height={500} width={500} className="w-full"/>
        </div>
    )
}