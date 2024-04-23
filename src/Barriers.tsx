import { Header } from "@/components/header";
import { Barrier } from "./components/barrier";
import costPic from "./assets/cost.jpg";
import transportationPic from "./assets/transport.jpeg";
import languagePic from "./assets/language.jpg";
import availabilityPic from "./assets/shortage.jpeg";
import { CardWrapper } from "@/components/card-wrapper";
import { HorizontalDisplay } from "./components/horizontal-display";

const cost: string = `One major barrier to healthcare access is the cost associated with medical care. Many individuals do not have health insurance or have limited coverage, making it difficult to afford necessary treatments, medications, or preventative care. Even with insurance, high deductibles, copays, and out-of-pocket expenses can still be prohibitive for many people. `;

const transport: string = `Lack of reliable transportation can also prevent individuals from accessing healthcare services. This is especially problematic for those who live in rural areas or urban centers with limited public transportation options. Without a way to get to medical appointments, individuals may not be able to receive necessary care.`;

const language: string = `For individuals who do not speak English fluently, language barriers can hinder their ability to communicate with healthcare providers and understand medical information. This can lead to misunderstandings, misdiagnoses, and inadequate treatment. Access to interpreters or translation services is essential to ensure effective communication and quality care for patients with limited English proficiency.`;

const availability: string = `In some regions, there may be a shortage of healthcare providers, especially in specialty areas or underserved communities. This can result in long wait times for appointments, limited availability of services, and difficulty accessing necessary care in a timely manner.`;

const Barriers = () => {
  return (
    <>
      <Header title="Barriers to Healthcare" />
      <CardWrapper>
        <HorizontalDisplay title="Cost" image={costPic} content={cost} />
      </CardWrapper>
      <CardWrapper>
        <HorizontalDisplay
          title="Lack of Transportation"
          image={transportationPic}
          content={transport}
        />
      </CardWrapper>
      <CardWrapper>
        <HorizontalDisplay
          title="Language Barriers"
          image={languagePic}
          content={language}
        />
      </CardWrapper>
      <CardWrapper>
        <HorizontalDisplay
          title="Limited Availability of Healthcare Providers"
          image={availabilityPic}
          content={availability}
        />
      </CardWrapper>
      {/* <p className="explanationP">
        Accessing healthcare can be challenging for many individuals due to a
        variety of barriers. Some common barriers include:
      </p> */}

      {/* <Barrier href={costPic} title="cost" content={cost} />
      <p className="explanationP">{barriers}</p> */}
    </>
  );
};

export default Barriers;
