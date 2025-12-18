import { Smartphone } from "lucide-react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300","400", "600", "700"],
  style: ["normal", "italic"]
});


const BarbershopPhoneCopy = ({ phone }: { phone: string }) => {
    return (
        <div className="flex justify-between pr-4 py-1">
            <div className="flex gap-2.5">
                <Smartphone />
                <p className={`${nunito.className} italic font-light`}>{phone}</p>
            </div>
            <span className="font-bold">Copiar</span>
        </div>
    )
}

export default BarbershopPhoneCopy;