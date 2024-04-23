import { CardWrapper } from "@/components/card-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Header } from "@/components/header";

import pic1 from "@/assets/community-centre-1.jpeg";
import pic2 from "@/assets/community-centre-2.jpeg";
import pic3 from "@/assets/community-centre-3.jpeg";
import pic4 from "@/assets/community-centre-4.jpeg";
import pic5 from "@/assets/community-centre-5.jpeg";
import pic6 from "@/assets/community-centre-6.jpeg";

const picArr: string[] = [pic1, pic2, pic3, pic4, pic5, pic6];

const CommunityCentres = () => {
  return (
    <>
      <Header title="Community Health Centres" />
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {picArr.map((pic, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="my-auto">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={pic}
                      alt="Community Centre"
                      className="max-w-[300px] pb-4 rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <section className="lg:grid grid-cols-3">
        <CardWrapper title="Primary Care Services">
          <div>
            <p>- Preventive care</p>
            <p>- Chronic disease management</p>
            <p>- Vaccinations</p>
            <p>- Behavioral health services</p>
          </div>
        </CardWrapper>
        <CardWrapper title="Promoting Health Education">
          <div>
            <p>- Outreach programs</p>
            <p>- Health screenings</p>
            <p>
              - Education on topics such as nutrition, exercise, and chronic
              disease management
            </p>
          </div>
        </CardWrapper>
        <CardWrapper title="Financial Accesibility">
          <div>
            <p>- Provide care regardless of a patient's ability to pay</p>
            <p>- Sliding fee scales based on income</p>
            <p>- Cccept Medicaid and Medicare</p>
            <p>- Assistance with enrolling in health insurance programs</p>
          </div>
        </CardWrapper>
      </section>
    </>
  );
};

export default CommunityCentres;
