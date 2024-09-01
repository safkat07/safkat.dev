
import FirstPartOfHomePage from "@/components/HomePage/FirstPartOfHomePage";
import SecondPartOfHomePage from "@/components/HomePage/SecondPartOfHomePage";
import ThirdPartOfHomePage from "@/components/HomePage/ThirdPartOfHomePage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";




export default function Home() {
  return (
      <MaxWidthWrapper className="my-28 space-y-5">
          <FirstPartOfHomePage/>
          <SecondPartOfHomePage/>
          <ThirdPartOfHomePage/>    
      </MaxWidthWrapper>
  );
}
