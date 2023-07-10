interface props {
    iccid?: string;
    country?: string;
}
export const Roaming:React.FC<props> = ({iccid, country}) => {
    return (
        <div className="flex flex-col gap-8 font-montserrat lg:text-[20px] text-[16px]">
            <p className="font-montserratbold lg:text-[24px] text-[16px]">Connect to wifi Scan QR Code Enable data roaming</p>
            <div className="flex flex-col gap-2 bg-[#EBF6FF] p-10 text-left rounded-[24px]">
                <div className="">
                    <span className="font-montserratbold">ICCID: </span>{iccid}
                </div>
                {/* <div className="">
                    <span className="font-montserratbold">Serial Nmber: </span>xxxxxxxxxxxxxx
                </div> */}
                <hr className="border-[#A5D6FF]" />
                <div className="">
                    <span className="font-montserratbold">Coverage: </span>{country}
                </div>
                <hr className="border-[#A5D6FF]" />
                <p className="">
                    To install your eSIM, please follow these simple instructions:<br />
                    <br />
                    1. Go to Settings &gt; Cellular/Mobile &gt; Add Cellular/Mobile Plan on your eSIM-capable phone.<br />
                    2. Scan the QR code provided with your eSIM, either by displaying it on another device or printing it out.<br />
                    3. Confirm the SIM plan details and label the eSIM.<br />
                    4. Follow the eSIM Installation guide for more information.<br />
                    <br />
                    If you have purchased a plan that requires you to change the APN settings, please use the following<br />
                </p>
                <p className="font-montserratbold">Settings:</p>
                <div>
                    <span>Caribbean plan: </span>Change to &quot;boost&quot;
                </div>
                <div>
                    <span>All other plans: </span>Change to &quot;globaldata&quot;
                </div>
                <p>To access data, make sure to enable data roaming.</p>
                <p>eSIMs can only be installed once. Do NOT DELETE/REMOVE your eSIM from your device after successful installation.</p>
                <div>If you need further support check <a href="#" className="text-[#F2B21B]">URL</a></div>
            </div>
        </div>
    )
}