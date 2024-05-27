
import { hostname } from "@/config";
import PLaceholderImage from "@/public/image/product/placeholder_600x.webp";
import Image from "next/image";
import Link from "next/link";
import request from "./api/request";
import HeroSection from "./components/HeroSection/HeroSection";
import OnlyForYou from "./components/Home/OnlyForYou";
import ProductCard from "./components/ProductCard";




 
async function getData() {
  const home = await request(`get-categories`);
  const campaign = await request(`get-campaign`);

  const section = await request(`get-product-section`);
   const newData = await request(`get-new-arrival-product?page=1`);

   const campaignBrand = await request(`get-campaign-brand`);

   const contact = await request("contact-info");


  return {
    home,
    campaign,
    category: home?.data?.data,
    slider: home?.data?.slider,
    feature_category: home?.data?.featured_category,
    brand: home?.data?.home_brands,
    newData,
    section,
    campaignBrand,
    contact,
  };
 
}

export const revalidate = 0;


export default async function Home() {

 
  const {
    home,
    category,
    slider,
    campaign,
    feature_category,
    section,
    brand,
    newData,
    campaignBrand,
    contact,
  } = await getData();
  

  // console.log("campaignBrand", campaignBrand);


  return (
    <div className=" bg-white text-black pb-2">
      <HeroSection category={category} slider={slider} />

      {campaign?.data?.campaigns?.length > 0 ? (
        <div className="bg-gray-100 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="relative group text-xl xs:text-lg  xms:text-lg sm:text-lg xls:text-lg font-semibold text-center tracking-wider">
              Deals you can not Miss
              <div className="absolute w-[250px] left-1/2 transform -translate-x-1/2 -bottom-2 h-0.5 bg-orange-600"></div>
            </div>

            <div className="grid grid-cols-4 xs:grid-cols-2 xms:grid-cols-2 sm:grid-cols-2 xls:grid-cols-2 px-2 gap-5 xs:gap-2 xms:gap-2 pt-10 pb-5">
              {campaign?.data?.campaigns?.map((item, index) => (
                <Link key={index} href={`/campaign-product/${item?.slug}`}>
                  <div className="h-[265px] xs:h-[150px] xms:h-[150px] sm:h-[250px]  xls:h-[150px] w-full">
                    {item?.image == null ? (
                      <Image
                        width={100}
                        height={100}
                        src={PLaceholderImage}
                        className="h-full w-full object-fill rounded-md"
                      />
                    ) : (
                      <Image
                        width={100}
                        height={100}
                        src={` ${hostname}/storage/${item?.image_path}${item?.image}`}
                        className="h-full w-full object-fill rounded-md"
                      />
                    )}
                  </div>
                  <div className="text-center uppercase font-semibold pt-3">
                    {item?.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {campaignBrand?.data?.data?.length > 0 ? (
        <div className="bg-gray-200 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="relative group text-xl xs:text-lg xls:text-lg  font-semibold text-center tracking-wider">
              {contact?.data?.data?.brand_campaign_text}
              <div className="absolute w-[300px] left-1/2 transform -translate-x-1/2 -bottom-2 h-0.5 bg-orange-600"></div>
            </div>

            <div className="grid grid-cols-4 xs:grid-cols-2  xms:grid-cols-2 sm:grid-cols-2 xls:grid-cols-2 gap-5 xs:gap-2 pt-10 pb-5 px-3">
              {campaignBrand?.data?.data?.map((item, index) => (
                <Link key={index} href={`/campaign-category/${item?.slug}`}>
                  <div className="h-[265px] xs:h-[150px] xms:h-[150px] sm:h-[250px]  xls:h-[150px] w-full">
                    {item?.image == null ? (
                      <Image
                        width={100}
                        height={100}
                        src={PLaceholderImage}
                        className="h-full w-full object-fill rounded-md"
                      />
                    ) : (
                      <Image
                        width={100}
                        height={100}
                        src={` ${hostname}/storage/${item?.image_path}${item?.image}`}
                        className="h-full w-full object-fill rounded-md"
                      />
                    )}
                  </div>
                  <div className="text-center uppercase font-semibold pt-3">
                    {item?.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {feature_category?.length > 0 ? (
        <div className="bg-gray-100 py-5 px-3">
          <div className="max-w-7xl mx-auto">
            <div className="relative group text-xl xs:text-lg  xls:text-lg  font-semibold tracking-wider">
              Featured Category
              <div className="absolute w-[220px] left-28 transform -translate-x-1/2 -bottom-2 h-0.5 bg-orange-600"></div>
            </div>

            <div className="grid grid-cols-4 xs:grid-cols-2 xms:grid-cols-2 sm:grid-cols-2 xls:grid-cols-2 gap-5 xs:gap-2 pt-10 pb-5">
              {feature_category?.map((item, index) => (
                <Link
                  href={`/product-category/${item?.slug}`}
                  key={index}
                  className="cursor-pointer"
                >
                  <div className="h-[265px] xs:h-[150px]  xms:h-[150px] sm:h-[150px] w-full">
                    {item?.image == null ? (
                      <Image
                        width={100}
                        height={100}
                        src={PLaceholderImage}
                        className="h-full w-full object-fill rounded-md"
                      />
                    ) : (
                      <Image
                        width={100}
                        height={100}
                        src={`${hostname}/storage/${item?.image_path}${item?.image}`}
                        className="h-full w-full object-fill rounded-md"
                      />
                    )}
                  </div>
                  <div className="text-center uppercase font-semibold pt-3">
                    {item?.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="bg-white py-10 relative mb-5">
        <div className="max-w-7xl mx-auto shadow-lg px-4 py-3">
          {section?.data?.data?.map((section, sectionindex) => (
            <div key={sectionindex}>
              {section?.section_product_list?.length > 0 ? (
                <div className="relative group text-xl xs:text-lg xls:text-lg  xms:text-lg font-semibold tracking-wider">
                  {section?.name}
                  <div className="absolute w-[320px] left-40 transform -translate-x-1/2 -bottom-2 h-0.5 bg-orange-600"></div>
                </div>
              ) : null}

              {section?.section_product_list?.length > 0 ? (
                <div className="grid grid-cols-4 xs:grid-cols-2 xms:grid-cols-2 sm:grid-cols-2 xls:grid-cols-2 mt-10 pb-5">
                  {section?.section_product_list?.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 p-3 xs:text-center xms:text-center xls:text-center"
                    >
                      <ProductCard item={item} />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="bg-white py-6">
          <div className="max-w-7xl mx-auto shadow-lg px-3">
            <OnlyForYou
              newData={newData?.data?.new_arrival}
              totalData={newData?.data?.new_arrival?.total}
            />
          </div>
        </div>

        <div className="py-5 mt-[-15px] bg-[#449666] w-[100%] h-[120px] text-center">
          <div className=" max-w-7xl mx-auto text-cente cursor-pointer px-4">
            <div className="flex items-center justify-between sm:justify-center">
              <div className="flex items-center">
                <div className="info-svg-wrapper info-icon w-[60px] xs:w-[80px] h-[60px] xs:h-[80px] xls:h-[80px]"></div>
                <div>
                  <h5 className="px-3 text-white text-[20px]">
                    Download App and Get 5% Extra Discount
                  </h5>
                </div>
              </div>
              <div className="xs:hidden xms:hidden xls:hidden sm:hidden">
                <div>
                  <h5 className="text-white">Follow Us On</h5>
                  <div className="flex items-center justify-around">
                    <div className="w-[30px] h-[30px]">
                      <Image
                        width={100}
                        height={100}
                        src="/image/social/facebook.png"
                        alt="facebook"
                      />
                    </div>
                    <div className="w-[30px] h-[30px]">
                      <Image
                        width={100}
                        height={100}
                        src="/image/social/instagram.png"
                        alt="instagram"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto shadow-lg px-4 py-3">
          <div className="grid grid-cols-3 xs:grid-cols-1 xms:grid-cols-1 xls:grid-cols-1 sm:grid-cols-2 gap-10 mt-10 p-5">
            <div>
              <div className="font-bold border-b-2 border-red-500">
                <h5 className="font-bold mb-3 xs:text-center xms:text-center xls:text-center">
                  COSMETICS SHOP IN BANGLADESH,
                </h5>
              </div>
              <div className="mt-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque quia dolorem voluptatibus? Deleniti provident saepe
                  voluptatibus nam pariatur cupiditate quis.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold border-b-2 border-red-500">
                <h5 className="font-bold mb-3 xs:text-center xms:text-center xls:text-center">
                  DELIVERY PROCESS AT A GLANCE
                </h5>
              </div>
              <div className="mt-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque quia dolorem voluptatibus? Deleniti provident saepe
                  voluptatibus nam pariatur cupiditate quis.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold border-b-2 border-red-500">
                <h5 className="font-bold mb-3 xs:text-center xms:text-center xls:text-center">
                  WHY DO YOU CHOOSE OGERIO
                </h5>
              </div>
              <div className="mt-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque quia dolorem voluptatibus? Deleniti provident saepe
                  voluptatibus nam pariatur cupiditate quis.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold border-b-2 border-red-500">
                <h5 className="font-bold mb-3 xs:text-center xms:text-center xls:text-center">
                  COSMETICS SHOP IN BANGLADESH
                </h5>
              </div>
              <div className="mt-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque quia dolorem voluptatibus? Deleniti provident saepe
                  voluptatibus nam pariatur cupiditate quis.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold border-b-2 border-red-500">
                <h5 className="font-bold mb-3 xs:text-center xms:text-center xls:text-center">
                  DELIVERY PROCESS AT A GLANCE
                </h5>
              </div>
              <div className="mt-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque quia dolorem voluptatibus? Deleniti provident saepe
                  voluptatibus nam pariatur cupiditate quis. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Officiis voluptates
                  reiciendis sed eveniet natus amet excepturi voluptatum nobis
                  sit cumque.
                </p>
              </div>
            </div>
            <div>
              <div className="font-bold border-b-2 border-red-500">
                <h5 className="font-bold mb-3 xs:text-center xms:text-center xls:text-center">
                  COSMETICS SHOP IN BANGLADESH
                </h5>
              </div>
              <div className="mt-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque quia dolorem voluptatibus? Deleniti provident saepe
                  voluptatibus nam pariatur cupiditate quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
