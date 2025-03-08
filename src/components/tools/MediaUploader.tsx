"use client";

import { useToast } from "@/hooks/use-toast"
import { dataUrl, getImageSize } from "@/lib/utils";
import { CldImage, CldUploadWidget } from "next-cloudinary"
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MediaUploaderProps {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<React.SetStateAction<{
    publicId: string;
    width?: number;
    height?: number;
    secureURL?: string;
  }>>;
  publicId: string;
  image: {
    width?: number;
    height?: number;
  };
  type: string;
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type
}: MediaUploaderProps) => {
  const { toast } = useToast()

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url
    }))

    onValueChange(result?.info?.public_id)
    
    toast({
      title: 'Image uploaded successfully',
      description: '1 credit was deducted from your account',
      duration: 5000,
      className: 'success-toast' 
    })
  }

  const onUploadErrorHandler = () => {
    toast({
      title: 'Something went wrong while uploading',
      description: 'Please try again',
      duration: 5000,
      variant: 'destructive'
    })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Original Image</CardTitle>
      </CardHeader>
      <CardContent>
        <CldUploadWidget
          uploadPreset="memowries"
          options={{
            multiple: false,
            resourceType: "image",
          }}
          onSuccess={onUploadSuccessHandler}
          onError={onUploadErrorHandler}
        >
          {({ open }) => (
            <div className="space-y-4">
              {publicId ? (
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <CldImage 
                    width={getImageSize(type, image, "width")}
                    height={getImageSize(type, image, "height")}
                    src={publicId}
                    alt="Uploaded image"
                    sizes={"(max-width: 767px) 100vw, 50vw"}
                    placeholder={dataUrl as PlaceholderValue}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ) : (
                <Button
                  onClick={() => open()}
                  variant="outline"
                  className="w-full h-72 flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed"
                >
                  <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium">Click to upload an image</p>
                  <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </Button>
              )}
            </div>
          )}
        </CldUploadWidget>
      </CardContent>
    </Card>
  )
}

export default MediaUploader

