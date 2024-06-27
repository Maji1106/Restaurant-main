import React from "react";

const RestaurantItem = ({ name, description, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt={name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Restaurant = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-8">
      {boxData.map((item, index) => (
        <RestaurantItem
          key={index}
          name={item.name}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

const boxData = [
  {
    name: "ก๋วยเตี๋ยวไก่ตุ๋นรสเด็ด - ถนนบางขุนนนท์",
    description: "Noodles",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023120908361478140/detail/menueditor_item_dec59aeeb99142bc8d37157cb2d5f73d_1702110890233135808.webp",
  },
  {
    name: "ข้าวผัดน้ำมันเนื้อ + เนื้อทอด",
    description: "แนะนำความสุกแรร์",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023080806195519213/detail/menueditor_item_1f426f9cec2944b2836ee15cb9771e2a_1691475413248048750.webp",
  },
  {
    name: "Just egg +กาแฟสดเย็น",
    description: "ไข่​ข้นแฮมผัดชีสและเนย",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023052404032725828/detail/menueditor_item_8dcc201a92684c37b3f7f7493a222c3a_1684900886364864119.webp",
  },
  {
    name: "ซีฟู้ดผัดขี้เมา",
    description: "เส้นนุ่ม สดใหม่",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE20240329080514064708/detail/menueditor_item_cd1fdb54a3254316b0d94c01b6c563db_1712728569240789025.webp",
  },
  {
    name: "น้ำดื่ม",
    description: "ทำใหม่ทุกเช้า สดชื่นทุกดื่ม",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023052609370714749/detail/menueditor_item_a8dffadefa054477ab9ccc2e53ffd4e6_1685093732936575804.webp",
  },
  {
    name: "ก๋วยเตี๋ยวน้ำ ลูกชิ้นปลา",
    description: "น้ำซุปหอมหวาน ต้มกระดูกหมู",
    image:
      "https://food-cms.grab.com/compressed_webp/items/THITE2023052609213088569/detail/menueditor_item_68897c21ecef47e8809f4ba856a51cd2_1685092660321656936.webp",
  },
];

export default Restaurant;
