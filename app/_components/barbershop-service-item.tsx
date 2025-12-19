"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Barbershop, BarsershopService } from "@prisma/client";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent } from "./ui/sheet";
import { X } from "lucide-react";
import { PageContainer, PageSection, PageSectionScroller } from "./ui/page";
import { Calendar } from "./ui/calendar";

const BarbershopServiceItem = ({ barbershop, service }: { barbershop: Barbershop, service: BarsershopService }) => {
  const [isBookingActive, setIsBookingActive] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [availableHours, setAvailableHours] = useState<string[]>(getAvalibleHours());
  const [selectedHour, setSelectedHour] = useState<string>(
    "09:00"
  );

  const centsToReais = (cents: number) => {
    const price = Number(cents) / 100;
    return price.toFixed(2).replace(".", ",");
  };

  const formatDate = () => {
    if (!date) return "";

    const day = date.getDate();
    const formattedDay = day < 10 ? `0${day}` : day.toString();

    const month = date.toLocaleString("pt-BR", {
      month: "long",
    });

    return `${formattedDay} de ${month}`;
  };


  function getAvalibleHours(): string[] {
    const hours = [];
    for (let i = 9; i <= 18; i++) {
      const hourString = (i < 10 ? "0" : "") + i + ":00";
      hours.push(hourString);
      if (i === 18) break;
      const hourHalfString = (i < 10 ? "0" : "") + i + ":30";
      hours.push(hourHalfString);
    }
    return hours;
  }

  return (
    <>
      <div className="flex w-full gap-3 p-4">
        <div className="relative min-h-28 min-w-28">
          <Image
            src={service.imageUrl}
            alt="Imagem de serviço"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="gap-0.3 flex flex-col">
            <h3 className="font-bold">{service.name}</h3>
            <p className="font-light text-gray-600">{service.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold">
              R$ {centsToReais(service.priceInCents)}
            </span>
            <Button
              className="rounded-2xl bg-green-700 text-white hover:bg-green-800"
              onClick={() => setIsBookingActive(true)}
            >
              Reservar
            </Button>
          </div>
        </div>
      </div>

      <Sheet open={isBookingActive} onOpenChange={setIsBookingActive}>
        <SheetContent
          side="right"
          className="w-[95%] py-6 [&>button:first-of-type]:hidden"
        >
          <PageContainer className="flex flex-col h-full">
            <div className="flex items-center justify-between py-2">
              <h2 className="text-2xl font-bold">Fazer Reserva</h2>
              <div className="flex justify-end">
                <SheetClose asChild>
                  <button className="hover:bg-muted rounded-full p-2 text-slate-600">
                    <X className="h-7 w-7" />
                  </button>
                </SheetClose>
              </div>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full"
              buttonVariant="ghost"
            />

            <PageSectionScroller>
              {availableHours.map((hour, index) => (
                <button
                  onClick={() => setSelectedHour(hour)}
                  className={`rounded-4xl border border-muted px-4 py-2 ${hour === selectedHour ? "bg-green-800 text-white" : ""}`}
                  key={index}
                >
                  {hour}
                </button>
              ))}
            </PageSectionScroller>

            <div className="p-3 rounded-md">
              <PageSection>
                <div className="flex w-full justify-between font-bold">
                  <p>{service.name}</p>
                  <p>R$ {centsToReais(service.priceInCents)}</p>
                </div>
                <div className="flex justify-between text-gray-500">
                  <p>Data</p>
                  <p>{formatDate()}</p>
                </div>
                <div className="flex justify-between text-gray-500">
                  <p>Horário</p>
                  <p>{selectedHour}</p>
                </div>
                <div className="flex justify-between text-gray-500">
                  <p>Barbearia</p>
                  <p>{barbershop.name}</p>
                </div>
              </PageSection>
            </div>

            <Button className="w-full bg-green-800 hover:bg-green-900 py-6 rounded-3xl text-md mt-auto">Confirmar</Button>

          </PageContainer>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default BarbershopServiceItem;
