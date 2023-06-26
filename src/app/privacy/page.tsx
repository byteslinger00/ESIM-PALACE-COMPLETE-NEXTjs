
export default function Page() {
    return (
        <main className="mt-[100px] relative">
            <section className="mi-medium:px-[300px] 2xl:px-[100px] px-6 my-[150px] font-montserrat text-dark-solid text-center">
                <div className="w-full flex flex-col gap-10">
                    <div className="flex flex-col gap-6 text-center mb-[20px]">
                        <h1 className="font-montserrat2xl md:text-[48px] text-[30px]">Privacy Policy</h1>
                        <p className="md:text-[20px] text-[16px] md:w-[600px] w-full mx-auto">See below for all our packages listed by country and region. Find data for everywhere you want to go.</p>
                    </div>
                    <div className="flex flex-col text-left gap-[32px] max-md:hidden">
                        <h2 className="font-montserratbold text-[32px] ">Topics:</h2>
                        <ul className="px-[20px] text-[24px] list-disc">
                            <li>eSim selection and purchase</li>
                            <li>Configuring your eSIM</li>
                            <li>Incompatibility</li>
                            <li>Defining terms</li>
                            <li>By using an eSIM</li>
                            <li>Troubleshooting</li>
                        </ul>
                    </div>
                    <select className="text-[14px] p-3 md:hidden border-[#EBF6FF] border-[1px] rounded-lg outline-none">
                        <option>eSim selection and purchase</option>
                        <option>Configuring your eSIM</option>
                        <option>Incompatibility</option>
                        <option>Defining terms</option>
                        <option>By using an eSIM</option>
                        <option>Troubleshooting</option>
                    </select>
                    <div className="flex flex-col text-left gap-[32px] max-w-[1095px]">
                        <h2 className="font-montserratbold md:text-[32px] text-[24px]">eSim selection and purchase</h2>
                        <p className="md:text-[20px] text-[16px]">
                            Check device compatibility: Ensure that your device supports eSIM functionality.
                            Most newer smartphones, tablets, and smartwatches have eSIM capabilities,
                            but it&apos;s always good to verify with the manufacturer or check the device specifications.
                            Determine your needs: Decide what you require from an eSIM. Consider factors such as data plans,
                            coverage, international roaming options, and pricing. Different eSIM providers offer various plans and features,
                            so it&apos;s essential to identify your requirements
                        </p>
                    </div>
                    <div className="flex flex-col text-left gap-[32px] max-w-[1095px]">
                        <h2 className="font-montserratbold md:text-[32px] text-[24px] ">Configuring your eSIM</h2>
                        <p className="md:text-[20px] text-[16px]">
                            Check device compatibility: Ensure that your device supports eSIM functionality.
                            Most newer smartphones, tablets, and smartwatches have eSIM capabilities,
                            but it&apos;s always good to verify with the manufacturer or check the device specifications.
                            Determine your needs: Decide what you require from an eSIM. Consider factors such as data plans,
                            coverage, international roaming options, and pricing. Different eSIM providers offer various plans and features,
                            so it&apos;s essential to identify your requirements
                        </p>
                        <ol className="px-[20px] md:text-[20px] text-[16px] list-decimal ">
                            <li>Research eSIM providers: Look for eSIM providers that offer services in your region or the area where
                                you&apos;ll be using the eSIM. Research their available plans, coverage, customer reviews, and pricing.
                                Some popular eSIM providers include Truphone, GigSky, Airalo, and Ubigi.
                            </li>
                            <li>Compare plans: Compare the eSIM plans offered by different providers. Look at factors like data allowances,
                                validity periods, speeds, and any additional features or services included. Consider both local and international plans,
                                depending on your usage and travel needs.
                            </li>
                            <li>IPurchase process: Once you&apos;ve chosen a suitable eSIM provider and plan, you can typically purchase the eSIM directly from their website.
                                Follow the instructions provided by the provider to complete the purchase, which may involve selecting your device, plan duration,
                                payment details, and activation process.
                            </li>
                        </ol>
                    </div>
                    <div className="flex flex-col text-left gap-[32px] max-w-[1095px]">
                        <h2 className="font-montserratbold md:text-[32px] text-[24px] ">By using an eSIM</h2>
                        <p className="md:text-[20px] text-[16px]">
                            Check device compatibility: Ensure that your device supports eSIM functionality. Most newer smartphones,
                            tablets, and smartwatches have eSIM capabilities, but it&apos;s always good to verify with the manufacturer or
                            check the device specifications. Determine your needs: Decide what you require from an eSIM. Consider factors
                            such as data plans, coverage, international roaming options, and pricing. Different eSIM providers offer various plans and features,
                            so it&apos;s essential to identify your requirements
                        </p>
                    </div>
                    <div className="flex flex-col text-left gap-[32px] max-w-[1095px]">
                        <h2 className="font-montserratbold md:text-[32px] text-[24px] ">Configuring your eSIM</h2>
                        <p className="md:text-[20px] text-[16px]">
                            Check device compatibility: Ensure that your device supports eSIM functionality.
                            Most newer smartphones, tablets, and smartwatches have eSIM capabilities,
                            but it&apos;s always good to verify with the manufacturer or check the device specifications.
                            Determine your needs: Decide what you require from an eSIM. Consider factors such as data plans,
                            coverage, international roaming options, and pricing. Different eSIM providers offer various plans and features,
                            so it&apos;s essential to identify your requirements
                        </p>
                        <ol className="px-[20px] md:text-[20px] text-[16px] list-decimal">
                            <li>Research eSIM providers: Look for eSIM providers that offer services in your region or the area where
                                you&apos;ll be using the eSIM. Research their available plans, coverage, customer reviews, and pricing.
                                Some popular eSIM providers include Truphone, GigSky, Airalo, and Ubigi.
                            </li>
                            <li>Compare plans: Compare the eSIM plans offered by different providers. Look at factors like data allowances,
                                validity periods, speeds, and any additional features or services included. Consider both local and international plans,
                                depending on your usage and travel needs.
                            </li>
                            <li>IPurchase process: Once you&apos;ve chosen a suitable eSIM provider and plan, you can typically purchase the eSIM directly from their website.
                                Follow the instructions provided by the provider to complete the purchase, which may involve selecting your device, plan duration,
                                payment details, and activation process.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    );
}
