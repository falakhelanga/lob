import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[10vh] flex justify-center items-center bg-white">
        <Image src="/telus.png" alt="logo" width={200} height={200} />
      </div>
      <div className=" py-4 h-[60vh]">
        <div className="px-4">
          <div className="text-sm text-gray-600 mb-2">Available Funds</div>
          <div className="flex items-center gap-x-2">
            <Image src="/usa-flag.jpg" alt="logo" width={30} height={30} />
            <div className="h-full font-bold flex items-center pb-1">
              $851.20 USD
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Image
              src="/south-african-flag.jpg"
              alt="logo"
              width={30}
              height={30}
            />
            <div className="h-full font-bold flex items-center pb-1">
              R0.00 ZAR
            </div>
          </div>
        </div>
        <div className="bg-[#4B286D] py-2 flex flex-col justify-center items-center text-white mt-4">
          <div className="bg-white/55 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </div>
          <div className="mt-4">Transfer Funds</div>
        </div>
        <div className="px-4 pt-4">
          <div className="text-xl text-[#4B8A23]">Transfer Funds</div>
          <div className="font-semibold mt-2">From:</div>
          <div>My Available Funds</div>
          <div className="font-semibold mt-4">To:</div>
          <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
            <option>Please select...</option>
            <option>Sivela-**9187</option>
            <option>Sivela-**8843</option>
          </select>
          <button className="w-full bg-[#4B8A23] text-white rounded-md p-2 mt-8">
            Continue
          </button>
        </div>
      </div>
      <div className="px-4 bg-white py-4">
        <div className="text-xs text-center">
          The Hyperwallet Virtual Visa® Prepaid Card is issued by The Bancorp
          Bank, N.A., Member FDIC pursuant to license from Visa U.S.A. Inc. Card
          can be used everywhere Visa debit cards are accepted. The Hyperwallet
          Mastercard® Prepaid Card The Hyperwallet Virtual Visa® Prepaid Card is
          issued by PACE Savings & Credit Union Limited, pursuant to a license
          from Visa Inc. The Hyperwallet Virtual Visa® Prepaid Card is issued by
          Valitor hf. pursuant to license from Visa Europe Ltd. The Hyperwallet
          Virtual Visa® Prepaid Card is issued by Pathward, N.A., Member FDIC,
          pursuant to a license from Visa U.S.A. Inc. Card can be used
          everywhere Visa debit cards are accepted online, by telephone, or mail
          order. The Hyperwallet Mastercard® Prepaid Card is issued by Choice
          Bank Ltd. pursuant to license by Mastercard International
          Incorporated. Mastercard® and the Mastercard Brand Mark are registered
          trademarks of Mastercard International Incorporated. Hyperwallet is a
          member of the PayPal group of companies and provides services globally
          through its affiliates. These affiliates are regulated in various
          jurisdictions as follows: In Canada, through Hyperwallet Systems Inc.,
          registered with the Financial Transactions and Reports Analysis Centre
          (FINTRAC), no. M08905000, and with Revenu Québec, no. 10232, with a
          principal business address at 1200-475 Howe Street, Vancouver, BC V6C
          2B3; in the United States, through PayPal, Inc., registered with the
          US Financial Crimes Enforcement Network and licensed in various U.S.
          states as a money transmitter, NMLS ID no. 910457, with a principal
          address at 2211 N. First Street, San Jose, CA, 95131; in Australia,
          through Hyperwallet Systems Australia Pty Ltd, ABN 38 616 937 716,
          registered with the Australian Securities and Investments Commission,
          Australian Financial Service Licence no. 499092, with a registered
          office at Level 24, 1 York Street, Sydney, NSW 2000; in the European
          Economic Area through PayPal (Europe) S.à r.l. et Cie, S.C.A. (R.C.S.
          Luxembourg B 118 349), a duly licensed Luxembourg credit institution
          in the sense of Article 2 of the law of 5 April 1993 on the financial
          sector, as amended, and under the prudential supervision of the
          Luxembourg supervisory authority, the Commission de Surveillance du
          Secteur Financier; in the United Kingdom, through PayPal UK Ltd,
          authorised and regulated by the Financial Conduct Authority (FCA) as
          an electronic money institution under the Electronic Money Regulations
          2011 for the issuance of electronic money (firm reference number
          994790) and in relation to its regulated consumer credit activities
          under the Financial Services and Markets Act 2000 (firm reference
          number 996405). Some of PayPal UK Ltd’s products including PayPal Pay
          in 3 and PayPal Working Capital are not regulated by the FCA.
          Cryptocurrency services are largely unregulated by the FCA.
        </div>
      </div>
    </div>
  );
}
