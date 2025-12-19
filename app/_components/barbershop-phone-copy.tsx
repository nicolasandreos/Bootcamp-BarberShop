"use client"

import { Smartphone } from "lucide-react";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { Button } from "./ui/button";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300","400", "600", "700"],
  style: ["normal", "italic"]
});

const BarbershopPhoneCopy = ({ phone }: { phone: string }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyPhone = async (text: string) => {
        if (!text) return;
        if (isCopied === true) return;
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => {setIsCopied(false)}, 2000)
    }

    return (
        <div className="relative flex justify-between pr-4 py-1">
            <div className="flex gap-2.5">
                <Smartphone />
                <p className={`${nunito.className} italic font-light`}>{phone}</p>
            </div>
            <button onClick={() => copyPhone(phone)} className="font-bold">Copiar</button>

            <Button
                className={`absolute left-1/2 top-full mt-5 -translate-x-1/2 transform transition-all duration-800 ease-out rounded-full bg-gray-800 text-white px-4 py-1 shadow-lg ${isCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                Copiado!
            </Button>
        </div>
    )
}

export default BarbershopPhoneCopy;