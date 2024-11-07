import React from 'react'

const BusinessValue = () => {
  return (
    <>
        <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base">
            Business Value
            </p>
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Reduce costs and save time
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-500 sm:text-base md:mb-12">
            Consolidate your IT stack with OSquare
          </p>
          {/* Features */}
          <section>
            {/* Container */}
            <div className="mx-auto w-full">
                {/* Features Content */}
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
                    {/* Features Item */}
                    <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10 justify-items-center">
                        <img
                        src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Icon1-per-user-licensing-savings-per-mnt_64x64?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=45&hei=45&qlt=100&fit=constrain"
                        alt=""
                        className="inline-block h-16 w-16 object-cover rounded-full "
                        />
                        {/* <h3 className="text-xl font-semibold">Support</h3> */}
                        <p className="text-sm text-gray-500">
                            USD$86.25 per-user licensing savings per month.
                        </p>
                    </div>
                    {/* Features Item */}
                    <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10 justify-items-center">
                        <img
                        src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Icon2-50-reduced-risk-of-data-breach_64x64?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=45&hei=45&qlt=100&fit=constrain"
                        alt=""
                        className="inline-block h-16 w-16 object-cover rounded-full "
                        />
                        {/* <h3 className="text-xl font-semibold">Organise</h3> */}
                        <p className="text-sm text-gray-500">
                            50% reduced risk of data breach.
                        </p>
                    </div>
                    {/* Features Item */}
                    <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10 justify-items-center">
                        <img
                        src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Icon3-50-reduction-in-help-desk-calls_64x64?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=45&hei=45&qlt=100&fit=constrain"
                        alt=""
                        className="inline-block h-16 w-16 object-cover rounded-full "
                        />
                        {/* <h3 className="text-xl font-semibold">Flexibility</h3> */}
                        <p className="text-sm text-gray-500">
                            50% reduction in help desk calls.
                        </p>
                    </div>
                </div>
            </div>
            </section>
          {/* Featues */}
        </div>
      </div>
    </section>
    </>
  )
}

export default BusinessValue