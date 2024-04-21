import { Header } from "@/components/header";
import HealthcareLogo from "@/assets/healthcare-logo.jpeg";
const About = () => {
  return (
    <>
      <section className="flex flex-col ">
        <Header title="About Us" />
        <div className="flex items-center justify-start p-4">
          <img
            src={HealthcareLogo}
            alt="healthcare logo"
            className="max-h-96 max-w-96 object-cover mx-8"
          />
          <div>
            <h3 className="font-bold text-3xl mb-4">Healthcare Warriors</h3>
            <h5 className="font-bold my-4">Mission</h5>
            <p>
              Our mission is to provide accessible and quality healthcare
              services to all individuals, regardless of their socio-economic
              status or geographical location. We strive to improve healthcare
              outcomes and promote overall well-being for our community.
            </p>
            <h5 className="font-bold my-4">Vision</h5>
            <p>
              Our vision is a world where every individual has equal access to
              healthcare resources and services. We envision a society where
              healthcare is a basic human right and is accessible to everyone,
              leading to healthier and happier lives for all.
            </p>
            <h5 className="font-bold my-4">Contact</h5>
            <p>For more information or inquiries, please contact us at </p>
            <p>Tel: 04-7381965</p>
            <p>Email: jlck1@outlook.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
