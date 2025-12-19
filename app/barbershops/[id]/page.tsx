import BackButton from "@/app/_components/back-button";
import BarbershopPhoneCopy from "@/app/_components/barbershop-phone-copy";
import BarbershopServiceItem from "@/app/_components/barbershop-service-item";
import Footer from "@/app/_components/footer";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { PageContainer, PageSection, PageSectionTitle } from "@/app/_components/ui/page";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;
  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
        services: true
    }
  });

  if (!barbershop) return notFound();

  return (
    <>
        <div className="relative min-w-full min-h-70">
            <Image 
                fill
                src={barbershop.imageUrl}
                alt={barbershop.name}
                className="object-cover"
            />
            <BackButton />
        </div>
        <div className="relative z-10 -mt-12 bg-white rounded-t-3xl">
            <PageContainer>
                <div className="flex flex-col rounded-2xl gap-1">
                    <div className="flex gap-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/logo-barbershop.svg" alt="Logo Barbearia" className="object-cover" />
                        </Avatar>
                        <h1 className="text-2xl font-bold">{barbershop.name}</h1>
                    </div>
                    <p className="text-foreground/70">{barbershop.address}</p>
                </div>

                <PageSection>
                    <PageSectionTitle>Sobre nós</PageSectionTitle>
                    <p>{barbershop.description}</p>
                </PageSection>

                <PageSection>
                    <PageSectionTitle>Serviços</PageSectionTitle>
                    <div className="flex flex-col">
                        {barbershop.services.map((s) => (
                            <BarbershopServiceItem key={s.id} barbershop={barbershop} service={s}></BarbershopServiceItem>
                        ))}
                    </div>
                </PageSection>

                <PageSection>
                    <PageSectionTitle>Contato</PageSectionTitle>
                    {barbershop.phones.map((phone, index) => <BarbershopPhoneCopy key={index} phone={phone}/>)}
                </PageSection>
            </PageContainer>
            <Footer />
        </div>
    </>
  );
};

export default BarbershopPage;
