import React from 'react';

const Pricing = () => {
  return (
    <section id="plans">
      {/* Container */}
      <div className="mx-auto max-w-2xl px-5 py-16 md:px-10 md:py-20">
        {/* Heading Container */}
        <div className="mx-auto mb-8 text-center md:mb-12 lg:mb-16">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold">
            Simple &amp; Affordable Pricing
          </h2>
          {/* Subheading */}
          <p className="mt-5 text-gray-500">30 days money-back guarantee</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8">
          {/* Pricing Card 1 */}
          <PricingCard
            title="Features"
            // price="$49"
            features={[
              "Attendance Management",
              "Project Management",
              "Human Resource Management",
              "Forms Management",
              "Lead Generation",
            ]}
            buttonText="Get started"
            products={[
              "/apps/ams.svg",
              "/apps/iteam.svg",
              "/apps/hr360.svg",
              "/apps/easyforms.svg",
              "/apps/leadkonnekt.svg",
            ]}
          />
          {/* Pricing Card 2 */}
          {/* <PricingCard
            title="Standard"
            price="$99"
            features={[
              "Attendance Management",
              "Project Management",
              "Human Resource Management",
            ]}
            buttonText="Get started"
            products={[
              "/apps/ams.svg",
              "/apps/iteam.svg",
              "/apps/hr360.svg",
            ]}
          /> */}
          {/* Pricing Card 3 */}
          {/* <PricingCard
            title="Pro"
            price="$199"
            features={[
              "Attendance Management",
              "Project Management",
              "Human Resource Management",
              "Forms Management",
              "Lead Generation",
            ]}
            buttonText="Get started"
            products={[
              "/apps/ams.svg",
              "/apps/iteam.svg",
              "/apps/hr360.svg",
              "/apps/easyforms.svg",
              "/apps/leadkonnekt.svg",
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
};

// PricingCard Component for reuse
const PricingCard = ({ title, price, features, buttonText, products }) => (
  <div className="flex flex-col items-center gap-6 rounded-md bg-gray-100 p-8 text-center">
    {/* Card Title */}
    <h3 className="text-2xl font-semibold">{title}</h3>

    {/* Features List */}
    <div className="grid gap-4">
      {features.map((feature, index) => (
        <div className="flex items-center justify-center" key={index}>
          <img
            src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9453a6e6cf6e_Vector%20(2).svg"
            alt=""
            className="mr-4 h-4 w-4"
          />
          <p className="text-sm">{feature}</p>
        </div>
      ))}
    </div>

    {/* Price Section */}
    <div className="text-center mt-2">
      {/* <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        {price}
        <span className="text-sm font-light">/month</span>
      </h2> */}

<div className="flex gap-2 overflow-x-auto">
  {products.map((product, index) => (
    <img
      key={index}
      src={product}
      alt={`Product ${index + 1}`}
      className="h-16 w-16 object-contain rounded" // Change to object-contain
    />
  ))}
</div>
      <a
        href="#"
        className="inline-block w-full rounded-md bg-[#172554] px-6 py-3 mt-3 font-semibold text-white"
      >
        {buttonText}
      </a>
    </div>
  </div>
);

export default Pricing;
