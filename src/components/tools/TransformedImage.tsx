"use client"

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import { Download, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TransformedImageProps {
  image: {
    publicId: string;
    width: number;
    height: number;
    title: string;
  };
  type: string;
  title: string;
  transformationConfig: Record<string, any>;
  isTransforming: boolean;
  setIsTransforming?: (value: boolean) => void; // Optional now
  hasDownload?: boolean;
}

const TransformedImage = ({ 
  image, 
  type, 
  title, 
  transformationConfig, 
  isTransforming, 
  setIsTransforming, 
  hasDownload = false 
}: TransformedImageProps) => {
  const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    download(getCldImageUrl({
      width: image?.width,
      height: image?.height,
      src: image?.publicId,
      ...transformationConfig
    }), title)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <CardTitle className="text-2xl font-bold">Transformed</CardTitle>
        {hasDownload && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="font-medium"
            onClick={downloadHandler}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {image?.publicId && transformationConfig ? (
          <div className="relative overflow-hidden rounded-lg">
            <CldImage 
              width={getImageSize(type, image, "width")}
              height={getImageSize(type, image, "height")}
              src={image?.publicId}
              alt={image.title}
              sizes={"(max-width: 767px) 100vw, 50vw"}
              placeholder={dataUrl as PlaceholderValue}
              className="w-full h-auto object-cover transition-opacity duration-300"
              //@ts-ignore
              onLoad={() => setIsTransforming(false)}
              onError={() => {
                //@ts-ignore
                debounce(() => setIsTransforming(false), 8000)()
              }}
              {...transformationConfig}
            />
            {isTransforming && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center">
                  <Loader2 className="w-10 h-10 animate-spin text-white mb-2" />
                  <p className="text-white text-sm">Transforming...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-72 flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed">
            Transformed Image will appear here
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default TransformedImage

