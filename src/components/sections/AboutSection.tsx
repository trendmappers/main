import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import Image from "next/image";
import partnerImage from "../../../public/images/starfish/partners.jpg";
import bizpartnerImage from "../../../public/images/starfish/business_partners.png";
import barcodeImage from "../../../public/images/starfish/barcode.png";
import payoutImage from "../../../public/images/starfish/payouts.png";

const AboutSection = () => {
  return (
    <Section sectionId="about">
      <Wrapper className="text-center text-white">
        <h1 className="title-1">Why use our Platform?</h1> 
        <p className="mx-auto max-w-lg">
          Major credit card companies pay themselves dividends and extra payment options because they use their own monopoly to do so while
          we simply pay this as a customer because of straight convenience. 
        </p>
        <div className="grid gap-10 py-10 md:grid-cols-2">
          <div className="space-y-2">
          <div>
            <h2 className="title-2">Learn how to 1000x Your Volume.</h2>
            <Image
                src={payoutImage}
                alt="Check the full list of over 500 & growing partners."
                width={500}
                height={270}
              />
          </div>
          </div>
          <div>
            <h2 className="title-1">Easy checkout. (Better than Gpay)</h2>
            <Image
                src={barcodeImage}
                alt="Check the full list of over 500 & growing partners."
                width={500}
                height={200}
              />
          </div>
          <div>
            <h2 className="title-1">Explore the Cash-Back Partners</h2>
            <div className="mx-auto max-w-lg">
            
              <Image
                src={partnerImage}
                alt="Check the full list of over 500 & growing partners."
                width={500}
                height={500}
              />
           
            </div>
          </div>
          <div className="mx-auto max-w-lg">
          <h2 className="title-1">Biggest names in Business in 2022</h2>
              <Image
                src={bizpartnerImage}
                alt="Check the full list of over 500 & growing partners."
                width={600}
                height={200}
              />
         <p className="mx-auto max-w-lg">
          Work with top leaders in the industry and simply learn how to share The Payment Merchant of the Future with us. ** MUST BE A CUSTOMER FOR 48 hours **
          We have leadership that has invested millions of hours and dollars into making this the easiest platform available. Become a part of our team or just
          try out the platform for %100 moneyback guarantee and see if you absolutely love the gateway and learn how to watch the transactions of your 
          very own team.
        </p>
            </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
