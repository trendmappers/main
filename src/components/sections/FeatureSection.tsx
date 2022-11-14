import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import FeatureCard from "components/FeatureCard";
import excitedImage from "../../../public/images/icons/excited.png";
import saveImage from "../../../public/images/icons/save.png";
import shareImage from "../../../public/images/icons/share.png";
import duplicateImage from "../../../public/images/icons/duplicate.png";
import cbImage from "../../../public/images/icons/cb.png";
import mbgImage from "../../../public/images/icons/mbg.png";
import tryImage from "../../../public/images/icons/qa.png";

const FeatureSection = () => {
  return (
    <Section sectionId="features">
      <Wrapper className="text-center text-white">
        <h1 className="title-1">The Best Merchant Partnership Ever.</h1>
        <div className="grid gap-6 md:grid-cols-4">
          <FeatureCard
            image={tryImage}
            title="Try-diligence"
            description="Research. Try it. Answer your own questions."
          />
          <FeatureCard
            image={cbImage}
            title="Do-diligence"
            description="Use the app wherever you go. Get your cashback."
          />
          <FeatureCard
            image={mbgImage}
            title="MoneyBack Guarantee"
            description="If you aren't 100% satisfied, cancel your $60 yearly subscription and get your refund. (Truly, this rarely happens...)"
          />
          <FeatureCard
            image={saveImage}
            title="Collect"
            description="Collect your savings and watch your account grow from doing what you normally do."
          />
          <FeatureCard
            image={excitedImage}
            title="Realize"
            description="Realize how beneficial this is for others. Especially in this 2022 economy."
          />
          <FeatureCard
            image={shareImage}
            title="Start to share"
            description="Use our online tools and share this with others you know would love to earn cashback from all of our partners."
          />
          <FeatureCard
            image={duplicateImage}
            title="Talk to Leadership & duplicate"
            description="Learn how to 1000x your volume by doing what your leaders do."
          />
          <FeatureCard
            image={excitedImage}
            title="Continue to earn & giveback"
            description="Use the app for your purchase. Credit Cards Bad. Starfish Good. Giveback after you have built a following."
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default FeatureSection;
