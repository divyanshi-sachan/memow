"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { transformationTypes } from "@/constants";
import { IImage } from "@/lib/database/models/image.model";
import { formUrlQuery } from "@/lib/utils";

import { Button } from "../ui/button";
import { Search } from "./search";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CollectionProps {
  hasSearch?: boolean;
  images: IImage[];
  totalPages?: number;
  page: number;
}

export const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
}: CollectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Edits</h2>
        {hasSearch && <Search />}
      </div>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {images.map((image) => (
            //@ts-ignore
            <ImageCard key={image._id} image={image} />
          ))}
        </div>
      ) : (
        <Card className="h-60 flex items-center justify-center">
          <p className="text-xl font-semibold text-gray-500">Empty List</p>
        </Card>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent className="flex w-full justify-between">
            <Button
              variant="outline"
              size="icon"
              disabled={Number(page) <= 1}
              onClick={() => onPageChange("prev")}
            >
              <PaginationPrevious className="h-4 w-4" />
            </Button>

            <p className="text-sm font-medium">
              Page {page} of {totalPages}
            </p>

            <Button
              variant="outline"
              size="icon"
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className="h-4 w-4" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

interface ImageCardProps {
  image: IImage;
}

const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <Card className="overflow-hidden">
      <Link href={`/tools/image-modifiers/transformations/${image._id}`}>
        <CardContent className="p-0">
          <CldImage
            src={image.publicId}
            alt={image.title}
            width={image.width}
            height={image.height}
            {...image.config}
            loading="lazy"
            className="h-52 w-full object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          />
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center">
          <p className="font-semibold text-lg line-clamp-1 text-gray-900">
            {image.title}
          </p>
          <Image
            src={`/assets/icons/${
              transformationTypes[
                image.transformationType as keyof typeof transformationTypes
              ].icon
            }`}
            alt={image.title}
            width={24}
            height={24}
          />
        </CardFooter>
      </Link>
    </Card>
  );
};

