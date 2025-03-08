import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import TransformationForm from "@/components/tools/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { getImageById } from "@/lib/actions/image.actions";
import { SearchParamProps } from "../../../../../../../types";
import { TransformationTypeKey } from "../../../../../../../types";

const Page = async ( params : SearchParamProps) => {
  const { userId } = await auth();
  const resolvedParams = await params.params; // Resolve the Promise
  const { id, type } = resolvedParams;

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImageById(id);

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>

      <section className="mt-14">
        <TransformationForm
          action="Update"
          userId={user._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export default Page;