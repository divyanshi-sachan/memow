// import { motion } from 'framer-motion'
// import { Expand } from 'lucide-react'

// export function IdeasSection({ categoryTitle }: { categoryTitle: string }) {
//     const placeholderImages = [
//       "/placeholder.svg?height=300&width=300&text=Photo 1",
//       "/placeholder.svg?height=300&width=300&text=Photo 2",
//       // Add more placeholder image URLs
//     ]

//     return (
//       <section id="ideas" className="space-y-8">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4 
//           bg-black
//             text-transparent bg-clip-text">
//             Ideas For {categoryTitle}
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Inspiring moments captured with creativity and passion. Explore our curated collection.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {placeholderImages.map((img, index) => (
//             <motion.div 
//               key={index}
//               className="relative group overflow-hidden rounded-xl shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img
//                 src={img}
//                 alt={`Photoshoot inspiration ${index + 1}`}
//                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
//                 flex items-center justify-center transition-all duration-300">
//                 <Expand 
//                   className="text-white opacity-0 group-hover:opacity-100 
//                   transition-opacity duration-300 w-12 h-12"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     )
//   }
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

interface IdeasSectionProps {
  categoryTitle: string;
  images: string[]; // Accept dynamic images
}

export function IdeasSection({ categoryTitle, images }: IdeasSectionProps) {
  return (
    <section id="ideas" className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 bg-black text-transparent bg-clip-text">
          Ideas For {categoryTitle}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Inspiring moments captured with creativity and passion. Explore our curated collection.
        </p>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.length > 0 ? (
          images.map((img, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt={`Photoshoot inspiration ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
                flex items-center justify-center transition-all duration-300"
              >
                <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12" />
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No images available.</p>
        )}
      </div>
    </section>
  );
}
