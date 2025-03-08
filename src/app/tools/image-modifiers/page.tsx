import FeatureSection from "@/components/tools/banner";
import { getUserImages, getAllImages } from "@/lib/actions/image.actions"
import { getUserById } from "@/lib/actions/user.actions";
import { Collection } from "@/components/tools/Collection";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SearchParamProps } from "../../../../types";

const Home = async ( { params, searchParams } : SearchParamProps) => {
  const searchParam = await searchParams
    
  const page = Number(searchParam?.page) || 1;

  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  const searchQuery = (searchParam?.query as string) || '';

  const images = await getUserImages({ page, userId: user._id });  
  // console.log(images);
    return (
      <div className="my-28">
      {/* <div className="pt-24"> */}
        <FeatureSection/>
      {/* </div> */}
        <section className="sm:mt-12 ml-4 md:ml-20 mr-4 md:mr-20">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
      </div>
    );
  }

  export default Home;