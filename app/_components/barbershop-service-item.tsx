import Image from "next/image";
import { Button } from "./ui/button";
import { BarsershopService } from "@prisma/client";

const BarbershopServiceItem = ({ service }: {service: BarsershopService}) => {
  return (
    <div className="w-full p-4 flex gap-3">
        <Image src={service.imageUrl} alt="Imagem de serviço" width={110} height={110} className="rounded-lg" />
        <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col gap-0.3">
                <h3 className="font-bold">{service.name}</h3>
                <p className="text-gray-600 font-light">{service.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-bold">R$ {service.priceInCents}</span>
                <Button className="rounded-2xl bg-green-700 text-white">Reservar</Button>
            </div>

        </div>
    </div>
  );
}

export default BarbershopServiceItem;