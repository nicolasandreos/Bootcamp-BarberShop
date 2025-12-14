import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="px-5 space-y-4">
        <SearchInput />
        <Image src={banner} alt="Agende agora!" sizes="100vw" className="h-auto w-full"/>
        <h2 className="text-xs text-foreground uppercase font-semibold">Agendamentos</h2>
        <BookingItem date={new Date("2025-02-10T14:00:00Z")} serviceName="Corte de Cabelo" barberShopName="Barbearia do Jõao" barberShopImageUrl="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
      </div>
    </main>
  );
};

export default Home;