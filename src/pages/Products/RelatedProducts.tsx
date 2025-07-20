import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function RelatedProductsSubsection() {
  // Product data for mapping
  const relatedProducts = [
    {
      id: 1,
      title: "Security Cabin",
      imageUrl: "./products/product_1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Compound Wall",
      imageUrl: "./products/product_2.png",
      featured: false,
    },
    {
      id: 3,
      title: "Labor Quarter",
      imageUrl: "./products/product_3.png",
      featured: false,
    },
    {
      id: 4,
      title: "Precast Foundation",
      imageUrl: "./products/product_4.png",
      featured: false,
    },
  ];

  return (
    <section className="w-full bg-white rounded-3xl overflow-hidden py-12">
      <div className="container mx-auto">
        <h2 className="text-[42px] font-extrabold text-[#1f8ccc] text-center leading-[54px] mb-10 font-['Mulish',Helvetica]">
          Related Products
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {relatedProducts.map((product) => (
            <Card
              key={product.id}
              className={`w-[382px] rounded-xl overflow-hidden shadow-[0px_0px_25.34px_#0000001f] ${product.featured ? "bg-[#032534]" : "bg-white"
                }`}
            >
              <CardContent className="p-0">
                <div
                  className={`${product.featured
                    ? "m-6 w-[364px] h-[252px]"
                    : "m-4 w-[350px] h-[242px]"
                    } bg-white rounded-[9px] overflow-hidden shadow-[0px_0px_25.34px_#0000001f]`}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={product.title}
                    src={product.imageUrl}
                  />
                </div>

                <div className="flex justify-between items-center px-6 py-4">
                  <span
                    className={`font-['Mulish',Helvetica] font-semibold text-base ${product.featured ? "text-white" : "text-[#1f8ccc]"
                      }`}
                  >
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
