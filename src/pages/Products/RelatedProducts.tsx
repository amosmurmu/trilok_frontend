import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function RelatedProductsSubsection() {
  // Product data for mapping
  const relatedProducts = [
    {
      id: 1,
      title: "Security Cabin",
      imageUrl: "./products/product_1.png",
    },
    {
      id: 2,
      title: "Compound Wall",
      imageUrl: "./products/product_2.png",
    },
    {
      id: 3,
      title: "Labor Quarter",
      imageUrl: "./products/product_3.png",
    },
    {
      id: 4,
      title: "Precast Foundation",
      imageUrl: "./products/product_4.png",
    },
  ];

  return (
    <section className="w-full bg-white rounded-3xl overflow-hidden py-12">
      <div className="container mx-auto">
        <h2 className="text-[42px] font-extrabold text-[#1f8ccc] text-center leading-[54px] mb-10 ">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Card
              key={product.id}
              className="group w-full rounded-xl overflow-hidden shadow-[0px_0px_25.34px_#0000001f] bg-white hover:bg-[#032534] transition-colors duration-300"
            >
              <CardContent className="p-4">
                <div className="bg-white rounded-[9px] overflow-hidden shadow-[0px_0px_25.34px_#0000001f] mb-4">
                  <img
                    className="w-full h-[242px] object-cover"
                    alt={product.title}
                    src={product.imageUrl}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-base text-[#1f8ccc] group-hover:text-white">
                    {product.title}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-full bg-white shadow-[0px_0px_25.34px_#0000001f] p-0"
                  >
                    <img
                      className="w-[13px] h-2.5"
                      alt="Icon"
                      src="https://c.animaapp.com/mdaicrdxfhrOom/img/icon-1.svg"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
