import Image from "next/image";
import wifiSymbol from "./wifi.png";
import Card from "./Card";
import Logos from "./Logos";

export default function Home() {
  const cards = [
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
    {
      title: "UZAKTAN KONTROL EDİLEBİLİRLİK",
      description: "Mobil uygulama aracılığıyla kolayca kontrol edilebilir",
      imageUrl: "/wifi.png",
    },
  ];

  const sponsors = [
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col p-4 items-center justify-center bg-white">
      <div className="mt-10  px-4 flex h-44 flex-col lg:flex-row lg:items-center lg:justify-between w-[1200px]">
        <div className="flex flex-col w-[535px] text-5xl">
          <h1 className="font-bold mb-2">Taşınabilir LED Ekranla</h1>
          <h2 className="font-extralight mb-4">Modern Görüntü Deneyimi</h2>
        </div>
        <div className="flex h-full w-[535px] lg:text-left items-end  ">
          <p className=" text-gray-600">
            Scrollup, olağanüstü taşınabilirliği, kullanım esnekliği ve
            kullanıcı dostu arayüzü ile dinamik ve geçici mekanlar için özel
            olarak tasarlanmış bir LED ekran serisidir.
          </p>
        </div>
      </div>
      <Image
        src="/greenscreen.png"
        alt="Image"
        width={"908"}
        height={"500"}
        className="rounded-lg"
      />

      <div className="flex flex-wrap items-center xl:w-[908px] justify-center mt-10 gap-14">
        {sponsors.map((logo, index) => (
          <Logos key={index} name={logo.name} logoUrl={logo.logoUrl} />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center xl:w-[1200px] gap-10 mt-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            color="white"
          />
        ))}
      </div>
    </main>
  );
}
