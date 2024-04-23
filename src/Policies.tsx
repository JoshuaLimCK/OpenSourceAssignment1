import { GridView } from "@/components/grid-view";
import { VerticalDisplay } from "@/components/vertical-display";
import { CardWrapper } from "@/components/card-wrapper";
import acaPic from "@/assets/aca.webp";
import mediPic from "@/assets/medicare-mediaid.png";
import insuracePic from "@/assets/insurance.jpeg";
import reimbursePic from "@/assets/reimburse.png";
import policiesPic from "@/assets/policy.svg";
import { Header } from "@/components/header";

const aca: string = `The ACA, also known as Obamacare, expanded healthcare coverage to millions of Americans through provisions such as insurance marketplaces, subsidies for low-income individuals, and Medicaid expansion. This increased access to healthcare for many previously uninsured individuals.`;

const medi: string = `These government-run insurance programs provide coverage to millions of low-income and elderly individuals, increasing their access to healthcare services.`;

const insurance: string = `Some government policies require individuals to have health insurance coverage, such as the individual mandate in the ACA. This helps ensure that more people have access to healthcare services when needed.`;

const reimburse: string = `Government programs like Medicare and Medicaid set reimbursement rates for healthcare providers, which can impact their willingness to accept patients with this type of insurance. Lower reimbursement rates can limit access to care for patients with government-sponsored insurance.`;

const policies: string = `Government policies around telehealth services can impact access to care, particularly in rural or underserved areas where access to healthcare providers may be limited. By expanding telehealth services, the government can improve access to care for these populations.
`;

const Policies = () => {
  return (
    <>
      <Header title="Policies" />
      <GridView>
        <CardWrapper link="https://www.irs.gov/affordable-care-act">
          <VerticalDisplay
            title="Affordable Care Act (ACA)"
            content={aca}
            image={acaPic}
          />
        </CardWrapper>
        <CardWrapper link="https://www.hhs.gov/answers/medicare-and-medicaid/index.html">
          <VerticalDisplay
            title="Medicare and Medicaid"
            content={medi}
            image={mediPic}
          />
        </CardWrapper>
        <CardWrapper link="https://www.verywellhealth.com/mandated-health-insurance-benefits-1738931">
          <VerticalDisplay
            title="Health insurance mandates"
            content={insurance}
            image={insuracePic}
          />
        </CardWrapper>
        <CardWrapper link="https://www.definitivehc.com/resources/glossary/healthcare-reimbursement">
          <VerticalDisplay
            title="Provider reimbursement rates"
            content={reimburse}
            image={reimbursePic}
          />
        </CardWrapper>
        <CardWrapper link="https://telehealth.hhs.gov/providers/telehealth-policy">
          {" "}
          <VerticalDisplay
            title="Telehealth policies"
            content={policies}
            image={policiesPic}
          />
        </CardWrapper>
      </GridView>
    </>
  );
};

export default Policies;
