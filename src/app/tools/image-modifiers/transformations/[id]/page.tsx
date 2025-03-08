import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import TransformedImage from "@/components/tools/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/actions/image.actions";
import { getImageSize } from "@/lib/utils";
import { DeleteConfirmation } from "@/components/tools/DeleteConfirmation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SearchParamProps } from "../../../../../../types";

const Home = async ( { params }: SearchParamProps) => {
  const param = await params
  const { userId } = await auth();
  const image = await getImageById(param.id);

  return (
    <div className="container mx-auto mt-20">
      {/* <Card> */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Image Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">
              Transformation: {image.transformationType}
            </Badge>
            {image.prompt && (
              <Badge variant="secondary">
                Prompt: {image.prompt}
              </Badge>
            )}
            {image.color && (
              <Badge variant="secondary">
                Color: {image.color}
              </Badge>
            )}
            {image.aspectRatio && (
              <Badge variant="secondary">
                Aspect Ratio: {image.aspectRatio}
              </Badge>
            )}
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Original</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  width={getImageSize(image.transformationType, image, "width")}
                  height={getImageSize(image.transformationType, image, "height")}
                  src={image.secureURL}
                  alt={image.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <TransformedImage
              image={image}
              type={image.transformationType}
              title={image.title}
              isTransforming={false}
              transformationConfig={image.config}
              hasDownload={true}
            />
          </div>

          {userId === image.author.clerkId && (
            <div className="mt-6 space-y-4">
              <Button asChild className="w-full">
                <Link href={`/tools/image-modifiers/transformations/${image._id}/update`}>
                  Update Image
                </Link>
              </Button>

              <DeleteConfirmation imageId={image._id} />
            </div>
          )}
        </CardContent>
      {/* </Card> */}
    </div>
  );
};

export default Home;

