'use client'

import { useState } from "react"
import { Plus, Eraser, Paintbrush, Scissors } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function ImageEditingSuite() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const ImageUploader = () => (
    <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
      {selectedImage ? (
        <Image
          src={selectedImage}
          alt="Uploaded"
          width={500} 
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="p-2 rounded-full bg-[#8B8BF7]">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-gray-500">Click here to upload image</span>
        </label>
      )}
    </div>
  )

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 space-y-6 mt-20">
      <Tabs defaultValue="restore" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="restore">Restore</TabsTrigger>
          <TabsTrigger value="generative-fill">Generative Fill</TabsTrigger>
          <TabsTrigger value="object-remove">Object Remove</TabsTrigger>
          <TabsTrigger value="object-recolor">Object Recolor</TabsTrigger>
          <TabsTrigger value="background-remove">Background Remove</TabsTrigger>
        </TabsList>
        <TabsContent value="restore">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#3B3B6D]">Restore Image</h1>
              <p className="text-gray-500">
                Refine images by removing noise and imperfections
              </p>
            </div>
            <Input
              type="text"
              placeholder="Image Title"
              className="w-full max-w-2xl border-gray-300"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Original</h2>
                <ImageUploader />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Restored</h2>
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                  <span className="text-gray-500">Restored Image</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <Button
                className="w-full bg-[#B7B7F9] hover:bg-[#A5A5F7] text-[#3B3B6D] font-semibold"
                size="lg"
              >
                Restore Image
              </Button>
              <Button
                className="w-full bg-[#6666F1] hover:bg-[#5555E0] text-white font-semibold"
                size="lg"
              >
                Save Image
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="generative-fill">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#3B3B6D]">Generative Fill</h1>
              <p className="text-gray-500">
                Fill in missing parts of an image with AI-generated content
              </p>
            </div>
            <Input
              type="text"
              placeholder="Image Title"
              className="w-full max-w-2xl border-gray-300"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Original</h2>
                <ImageUploader />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Generated</h2>
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                  <span className="text-gray-500">Generated Image</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt</Label>
                <Input
                  id="prompt"
                  placeholder="Describe what you want to generate..."
                  className="w-full border-gray-300"
                />
              </div>
              <Button
                className="w-full bg-[#B7B7F9] hover:bg-[#A5A5F7] text-[#3B3B6D] font-semibold"
                size="lg"
              >
                Generate Fill
              </Button>
              <Button
                className="w-full bg-[#6666F1] hover:bg-[#5555E0] text-white font-semibold"
                size="lg"
              >
                Save Image
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="object-remove">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#3B3B6D]">Object Remove</h1>
              <p className="text-gray-500">
                Remove unwanted objects from your images
              </p>
            </div>
            <Input
              type="text"
              placeholder="Image Title"
              className="w-full max-w-2xl border-gray-300"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Original</h2>
                <ImageUploader />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Result</h2>
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                  <span className="text-gray-500">Resulting Image</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <Button
                className="w-full bg-[#B7B7F9] hover:bg-[#A5A5F7] text-[#3B3B6D] font-semibold"
                size="lg"
              >
                <Eraser className="w-4 h-4 mr-2" />
                Remove Object
              </Button>
              <Button
                className="w-full bg-[#6666F1] hover:bg-[#5555E0] text-white font-semibold"
                size="lg"
              >
                Save Image
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="object-recolor">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#3B3B6D]">Object Recolor</h1>
              <p className="text-gray-500">
                Change the color of objects in your images
              </p>
            </div>
            <Input
              type="text"
              placeholder="Image Title"
              className="w-full max-w-2xl border-gray-300"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Original</h2>
                <ImageUploader />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Recolored</h2>
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                  <span className="text-gray-500">Recolored Image</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="space-y-2">
                <Label htmlFor="color">New Color</Label>
                <Select>
                  <SelectTrigger id="color">
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="yellow">Yellow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full bg-[#B7B7F9] hover:bg-[#A5A5F7] text-[#3B3B6D] font-semibold"
                size="lg"
              >
                <Paintbrush className="w-4 h-4 mr-2" />
                Recolor Object
              </Button>
              <Button
                className="w-full bg-[#6666F1] hover:bg-[#5555E0] text-white font-semibold"
                size="lg"
              >
                Save Image
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="background-remove">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#3B3B6D]">Background Remove</h1>
              <p className="text-gray-500">
                Remove the background from your images
              </p>
            </div>
            <Input
              type="text"
              placeholder="Image Title"
              className="w-full max-w-2xl border-gray-300"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">Original</h2>
                <ImageUploader />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#3B3B6D]">No Background</h2>
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                  <span className="text-gray-500">Image without Background</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <Button
                className="w-full bg-[#B7B7F9] hover:bg-[#A5A5F7] text-[#3B3B6D] font-semibold"
                size="lg"
              >
                <Scissors className="w-4 h-4 mr-2" />
                Remove Background
              </Button>
              <Button
                className="w-full bg-[#6666F1] hover:bg-[#5555E0] text-white font-semibold"
                size="lg"
              >
                Save Image
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

