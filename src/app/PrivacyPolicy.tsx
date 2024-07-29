import Image from "next/image";

import TechnicalSpecifications from "./TechnicalSpecifications";

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-archivo bg-white">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-green-800 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">GIZLILIK POLITIKASI</h1>
            <p className="mt-2">
              All graphical assets in this template are licensed for personal
              and commercial use. If you'd like to use a specific asset, please
              check the license below
            </p>
          </div>
        </header>
        <main className="container mx-auto my-10 p-6 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Kişisel Verilerin Korunması Kanunu Kapsamında Genel Bilgilendirme ve
            Aydınlatma Metni
          </h2>
          <p>
            İşbu bilgilendirme ve aydınlatma metni INFINIA' nın, 24/3/2016
            tarihinde kabul edilen 6698 sayılı Kişisel Verilerin Korunması
            Kanunu ve ilgili sair mevzuat kapsamında, kişisel verilerin hukuka
            uygun olarak toplanması, elde edilmesi, saklanması, paylaşılması ve
            gizliliğinin korunması sırasında Veri Sahiplerinin bilgilendirilmesi
            ve aydınlatılması amacıyla hazırlanmıştır. Bu kapsamda aşağıda
            açıklanacak olan şart ve amaçlar ile hukuka uygun şekilde işlenecek
            veriler açısından ilgili kanunun 10. Maddesi gereği aydınlatma
            yükümlülüğümüzün yerine getirilmesi amacıyla bu bilgilendirme metni
            bilgi ve incelemenize sunulmaktadır.
          </p>
        </main>
      </div>
    </main>
  );
}
