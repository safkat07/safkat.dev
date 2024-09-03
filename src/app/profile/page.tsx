import ViewProfilePage from "@/components/InnerPages/ViewProfilePage"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import BottomCards from "@/components/Reuseable/BottomCards"

const Profile = () => {
    return (
        <MaxWidthWrapper className="mt-7 space-y-5">
             <ViewProfilePage/>
             <BottomCards/>
       </MaxWidthWrapper>
    )
}

export default Profile
