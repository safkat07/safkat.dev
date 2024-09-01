import FirstPartOfHomePage from "@/components/FirstPartOfHomePage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SecondPartOfHomePage from "@/components/SecondPartOfHomePage";



export default function Home() {
  return (
      <MaxWidthWrapper className="mt-28 space-y-5">
          <FirstPartOfHomePage />
          <SecondPartOfHomePage/>
      </MaxWidthWrapper>
  );
}
