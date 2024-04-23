import { Header } from "@/components/header";
import racialPic from "@/assets/racial.jpeg";
import incomePic from "@/assets/income.webp";
import ruralPic from "@/assets/rural.jpeg";
import { CardWrapper } from "@/components/card-wrapper";
import { VerticalDisplay } from "@/components/vertical-display";

const racial: string = `Racial and ethnic minorities, such as African Americans, Hispanics, and Native Americans, are more likely to face barriers to accessing healthcare services, including lack of health insurance, language barriers, and cultural differences. Studies have shown that racial and ethnic minorities are more likely to report delaying or forgoing medical care due to cost, leading to poorer health outcomes and higher rates of chronic conditions.`;

const income: string = `Low-income individuals also face challenges in accessing healthcare due to financial barriers. Without health insurance or the means to pay for medical care out of pocket, low-income individuals may be less likely to seek necessary healthcare services or medications. Lack of transportation to healthcare facilities and limited availability of healthcare providers in low-income communities further limit access to care for this population.`;

const rural: string = `Those living in rural areas face unique barriers to healthcare access, including long distances to healthcare facilities, limited availability of specialty care, and shortages of healthcare providers. Rural residents are also more likely to be uninsured or underinsured compared to their urban counterparts, further limiting their ability to access necessary medical services.
`;

const Disparities = () => {
  return (
    <>
      <Header title="Healthcare Disparities" />
      <CardWrapper>
        <VerticalDisplay
          title="Racial and Ethnic"
          content={racial}
          image={racialPic}
        />
      </CardWrapper>
      <CardWrapper>
        <VerticalDisplay
          title="Low Income"
          content={income}
          image={incomePic}
        />
      </CardWrapper>
      <CardWrapper>
        <VerticalDisplay title="Rural Areas" content={rural} image={ruralPic} />
      </CardWrapper>
    </>
  );
};

export default Disparities;
