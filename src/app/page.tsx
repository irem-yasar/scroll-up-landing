import Image from "next/image";
import wifiSymbol from "./wifi.png";
import Card from "./Card";
import Features from "./Features";
import { features } from "process";
import Privacy from "./PrivacyPolicy";
import TechnicalSpecifications from "./TechnicalSpecifications";
import Link from "next/link";
const items = [
  { feature: "Çözünürlük", value: "256 × 640" },
  { feature: "Pixel Aralığı", value: "1.5 - 1.86 - 2.5 mm" },
  { feature: "Optimal İzleme Mesafesi", value: "~2 metre" },
  { feature: "İzleme Açısı", value: "120" },
  { feature: "Parlaklık", value: "500 nits" },
  { feature: "Yenileme Hızı", value: "3840 Hz" },
  { feature: "Tarama", value: "1/32" },
  { feature: "Çalışma Gerilimi", value: "220VAC" },
  { feature: "Ortalama Güç Tüketimi", value: "260W" },
  { feature: "Ağırlık", value: "30 kg" },
  { feature: "Katlanmış taşıma boyutları", value: "80 × 48.5 × 38 cm" },
  { feature: "Taşınabilirlik", value: "Evet" },
  { feature: "Otomatik Açma/Kapama", value: "Evet" },
  { feature: "Güç Kablosu Uzunluğu", value: "3 m" },
];
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
  const featureTexts = [
    {
      text: "Kolayca kontrol edilebilir",
    },
    {
      text: "Kolayca kontrol edilebilir",
    },
    {
      text: "Kolayca kontrol edilebilir",
    },
  ];
  const sponsors = [
    {
      name: "tubitak",
      logoUrl: "/tubitak.png",
    },
    {
      name: "wisersense",
      logoUrl: "/wisersense.png",
    },
    {
      name: "kontrolmatik",
      logoUrl: "/KontrolmatikTech.png",
    },
    {
      name: "plans",
      logoUrl: "/plans.png",
    },
    {
      name: "fenerbahce",
      logoUrl: "/fenerbahce.png",
    },
    {
      name: "cocacola",
      logoUrl: "/cocacola.png",
    },
    {
      name: "deico",
      logoUrl: "/deico.png",
    },
    {
      name: "migros",
      logoUrl: "/migros.png",
    },
    {
      name: "martı",
      logoUrl: "/martı.png",
    },
    {
      name: "aselsan",
      logoUrl: "/aselsan.png",
    },
    {
      name: "İstanbulKentUni",
      logoUrl: "/İstanbulKentUni.png",
    },
    {
      name: "GUHEM",
      logoUrl: "/GUHEM.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-archivo bg-white">
      <div className="mt-10  px-10 flex h-44 flex-col lg:flex-row lg:items-center lg:justify-between w-[1200px]">
        <div className="flex flex-col w-[535px] text-5xl">
          <h1 className="font-bold mb-2">Taşınabilir LED Ekranla</h1>
          <h2 className="font-extralight mb-4">Modern Görüntü Deneyimi</h2>
        </div>
        <div className="flex h-full w-[535px] lg:text-left items-end  ">
          <p className="font-archivo text-gray-600">
            Scrollup, olağanüstü taşınabilirliği, kullanım esnekliği ve
            kullanıcı dostu arayüzü ile dinamik ve geçici mekanlar için özel
            olarak tasarlanmış bir LED ekran serisidir.
          </p>
        </div>
      </div>
      <Image
        src="/greenscreen.png"
        alt="Image"
        width={"1140"}
        height={"500"}
        className="rounded-3xl"
      />
      <div className="flex flex-wrap items-center  xl:w-[1000px] h-[340px] justify-center mt-[64px] px-[14px] ">
        {sponsors.map((card, index) => (
          <div className="w-1/4  p-2">
            <Card key={index} color="white" imageUrl={card.logoUrl} onlyImage />
          </div>
        ))}
      </div>

      <div className=" flex justify-between w-full h-[80vh] mt-80 ">
        <div className="flex flex-col gap-5 py-24 px-40 text-white  w-[60%] h-full rounded-r-[40px] rounded-tl-none rounded-bl-none bg-[#3bb24a]">
          <h3 className="font-bold leading-tight w-[600] h-[440] text-[40px]">
            Scrollup Uygulama
          </h3>
          <div className="text-[16px] w-[600] h-[90] tracking-widest ">
            Scrollup mobil uygulama ile kolayca kontrol edilebilir. Uygulama,
            kullanıcıların dinamik ve güncel bir görüntüleme deneyimi için
            görüntüleri ve videoları sorunsuz bir şekilde yüklemelerine,
            planlamalarına ve düzenlemelerine olanak tanır.
          </div>

          <div className="gap-16 ml-8 flex flex-col w-[600] ">
            {featureTexts.map((card, index) => (
              <Features text={card.text} />
            ))}
          </div>
        </div>

        <div className="w-[40%] mt-auto mb-auto ">
          <Image src="/Homepage.png" alt="Image" width={401} height={406} />
        </div>
      </div>

      <div className="px-10 w-[1200px] flex flex-col pt-14 text-[40px] text-left">
        <div className="font-bold ">Her Zaman, Her Yerde</div>
        <div className=" font-extralight ">Dikkat Çeken Taşınabilir Ekran</div>
        <div className=" font-sans font-thin text-[16px] leading-8 w-3/5">
          Her detayı, görsel etkinlikleri maksimize etmek üzere düşünülmüş bu
          ürünler, yüksek çözünürlükleri ile konumlandığı ortamda dikkat çeker
          ve sizin mesajınızı en etkin şekilde vermenize destek olur.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center xl:w-[1160px] mt-4 ">
        {cards.map((card, index) => (
          <div className="w-1/4 p-5">
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              color="grey"
            />
          </div>
        ))}
      </div>
      <div className="w-full text-center flex items-center flex-col mb-16 pt-[100px]">
        <div className="w-[500px] flex flex-col gap-10">
          <div className="font-bold text-4xl">Her Zaman, Her Yerde</div>
          <div className="font-thin leading-8">
            Scrollup kullanarak, görsel iletişim faaliyetlerinizi herhangi bir
            yerde etkin ve dikkat çekici bir şekilde gerçekleştirin. Kompakt ve
            çarpıcı tasarımı ile marka çalışmalarınızı dikkat çekici bir şekilde
            sergileyin, anlık yönetin.
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center justify-center gap-4 h-[700px] w-[1140px] ">
        <div className="flex items-center justify-center h-full flex-col w-2/3">
          <div className="h-full w-full relative">
            <Image
              src="/Adv2.jpg"
              alt="Image2"
              layout="fill"
              className=" rounded-xl shadow-lg"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="h-full flex flex-col gap-4 w-1/3 ">
          <div className="relative h-1/2">
            <Image
              src="/Adv3.jpg"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
              className=" rounded-xl shadow-lg"
            />
          </div>
          <div className="relative h-1/2">
            <Image
              src="/Adv.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-5 h-[600px] w-[1140px] mt-16">
        <div className=" w-1/2 h-full relative">
          <Image
            src="/Adv4.png"
            alt="Image 4"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="w-1/2 h-full  relative">
          <Image
            src="/Adv5.jpg"
            alt="Image 5"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className=" flex justify-between w-full h-[80vh] mb-80 mt-20 ">
        <div className="flex flex-col gap-5 py-4 pt-20 pl-20 text-white  w-[60%] h-[1000px] rounded-r-[40px] rounded-tl-none rounded-bl-none bg-[#3bb24a]">
          <div className=" p-6 rounded-lg  max-w-4xl flex">
            <div className="mr-10 pr-44 w-full items-start">
              <h1 className="text-4xl font-bold mb-8 font-">
                Teknik Özellikler
              </h1>
              <div>
                <div className="min-w-full border rounded-xl  ">
                  <div>
                    <div className="flex rounded">
                      <div className="w-1/2 py-4 px-4 bg-transparent border-r text-left font-bold">
                        Özellikler
                      </div>
                      <div className="w-1/2 py-4 px-4 bg-transparent text-left font-bold">
                        Değer
                      </div>
                    </div>
                  </div>
                  <div>
                    {items.map((item, index) => (
                      <div key={index} className="flex border-t">
                        <div className="w-1/2 border-r py-2 px-4">
                          {item.feature}
                        </div>
                        <div className="w-1/2 py-2 px-4">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] my-36  ">
          <Image src="/TableImage.png" alt="Image" width={280} height={660} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-white px-4 mt-20">
        <div className="w-full md:w-[65%] max-w-3xl md:mr-6 ">
          <div className="p-6 ">
            <div className="text-3xl text-[#161c24] font-archivo mb-6">
              İş Ortağımız Olun
            </div>
            <div className="mb-4 font-extralight text-[#586272] leading-8 w-4/5 ">
              Scrollup ile iş ortaklığı kurarak yenilikçi görsel iletişimin bir
              parçası olmak için lütfen formu doldurun. İletişim bilgileriniz
              üzerinden ekibimiz en kısa sürede sizinle iletişim kuracaktır.
            </div>
            <div className="space-y-4 pb-[120px]">
              <div className="flex flex-wrap -mx-2  ">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold ">
                    Yetkilinin Adı*
                  </label>
                  <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Yetkilinin Soyadı*
                  </label>
                  <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Telefon*
                  </label>
                  <input className="w-full p-2 border rounded" type="tel" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    E-posta*
                  </label>
                  <input className="w-full p-2 border rounded" type="email" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Firma Adı*
                  </label>
                  <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    İl
                  </label>
                  <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="w-full px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Kısa Mesaj
                  </label>
                  <textarea className="w-full p-2 border  rounded"></textarea>
                </div>
              </div>
              <div className="flex items-center mb-4 px-2">
                <input type="checkbox" className="mr-2" />
                <div className="font-[14px] pl-[20px]  ">
                  <Link
                    href={"/privacy"}
                    target="_blank"
                    className="text-[#443fde]"
                  >
                    Hizmet koşullarını ve Gizlilik Politikasını {""}
                  </Link>
                  kabul ediyorum.
                </div>
              </div>
              <div className="px-2">
                <button className="w-[200px] h-[60px] bg-[#3BB24A] text-white font-medium py-2 px-4 rounded-lg">
                  Mesaj Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[370px] h-[240px] justify-center items-center md:w-1/3 mt-8 md:mt-0 bg-[#f9fffc] p-6 rounded-lg shadow-lg">
          <div className="text-[#111418] leading-8 font-sans text-[14px]">
            <div>Bilkent Cyberpark Tepe Building B01</div>
            <div>Çankaya, Ankara/Turkey</div>
            <div>info@infinia.com</div>
            <div>+90 (312) 265 05 09</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-white px-4 mt-20">
        <div className="w-full md:w-[65%] max-w-3xl md:mr-6 ">
          <div className="p-6 ">
            <div className="text-3xl text-[#161c24] font-archivo mb-6">
              Bize Ulaşın
            </div>
            <div className="mb-4 font-extralight text-[#586272] leading-8 w-4/5 ">
              Markanızı etkin bir şekilde ön plana çıkartmak için bizimle
              iletişime geçin. Talebiniz üzerine, ekibimiz en kısa sürede
              sizinle iletişim kuracaktır.
            </div>
            <div className="space-y-4 pb-[120px]">
              <div className="flex flex-wrap -mx-2  ">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold ">
                    Ad*
                  </label>
                  <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Soyad*
                  </label>
                  <input className="w-full p-2 border rounded" type="text" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Telefon*
                  </label>
                  <input className="w-full p-2 border rounded" type="tel" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    E-posta*
                  </label>
                  <input className="w-full p-2 border rounded" type="email" />
                </div>

                <div className="w-full px-2 mb-4">
                  <label className="block text-[#246b49] mb-2 font-semibold">
                    Kısa Mesaj
                  </label>
                  <textarea className="w-full p-2 border  rounded"></textarea>
                </div>
              </div>
              <div className="flex items-center mb-4 px-2">
                <input type="checkbox" className="mr-2" />
                <div className="font-[14px] pl-[20px]  ">
                  <Link
                    href={"/privacy"}
                    target="_blank"
                    className="text-[#443fde]"
                  >
                    Hizmet koşullarını ve Gizlilik Politikasını {""}
                  </Link>
                  kabul ediyorum.
                </div>
              </div>
              <div className="px-2">
                <button className="w-[200px] h-[60px] bg-[#3BB24A] text-white font-medium py-2 px-4 rounded-lg">
                  Mesaj Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[370px] h-[240px] justify-center items-center md:w-1/3 mt-8 md:mt-0 bg-[#f9fffc] p-6 rounded-lg shadow-lg">
          <div className="text-[#111418] leading-8 font-sans text-[14px]">
            <div>Bilkent Cyberpark Tepe Building B01</div>
            <div>Çankaya, Ankara/Turkey</div>
            <div>info@infinia.com</div>
            <div>+90 (312) 265 05 09</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[320px] bg-[#3bb24a] pt-[40px]">
        <div className="m-auto w-[1140px] ">
          <Image
            src="/logo.png"
            alt="logo"
            width={160}
            height={50}
            className="mt-10"
          ></Image>
          <div className="border-b pt-10 border-white "></div>
          <div className="flex py-[42px] justify-between">
            <div className="font-sans font-[14px]  text-white">
              Scrollup. All Rights Reserved, 2024.
            </div>
            <div className="flex gap-7 items-end ">
              <Link
                href={
                  "https://www.linkedin.com/company/infiniadesignandinnovation/mycompany/"
                }
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  width={22}
                  height={22}
                  alt="linkedin"
                ></Image>
              </Link>
              <Link
                href={"https://www.instagram.com/infiniaofficial/"}
                target="_blank"
              >
                <Image
                  src="/insta.png"
                  alt="instagram"
                  width={20}
                  height={20}
                ></Image>
              </Link>

              <Link href={"https://x.com/INFINIAofficial"} target="_blank">
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={16}
                  height={16}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
