<div className="flex justify-center items-center min-h-screen bg-green-600">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl flex">
    <div className="mr-10">
      <h1 className="text-2xl font-bold mb-4">Teknik Özellikler</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-green-500 text-left text-white">
              Özellikler
            </th>
            <th className="py-2 px-4 bg-green-500 text-left text-white">
              Değer
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{item.feature}</td>
              <td className="py-2 px-4">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex items-center justify-center">
      <Image
        src="/TableImage.png"
        alt="Product Image"
        className="w-64 h-auto rounded-lg "
        width={280}
        height={660}
      />
    </div>
  </div>
</div>;
