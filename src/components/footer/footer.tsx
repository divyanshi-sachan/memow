// 'use client'
// import { useState } from "react";
// import React from "react";
// import { AnimatedSubscribeButton } from "../ui/animated-subscribe-button";
// import { createSubscribe } from "@/lib/actions/subscribe.action";
// import {
//   CheckIcon,
//   ChevronRightIcon,
//   Facebook,
//   Twitter,
//   Instagram,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";

// const companyInfo = [
//   {
//     icon: <MapPin className="w-4 h-4" />,
//     title: "1234 Fashion Street, Suite 567, New York, NY",
//   },
//   {
//     title: "info@fashionshop.com",
//     icon: <Mail className="w-4 h-4" />,
//   },
//   {
//     icon: <Phone className="w-4 h-4" />,
//     title: "(212)555-1234",
//   },
// ];

// const socialLinks = [
//   { icon: <Facebook className="w-5 h-5" />, title: "Facebook" },
//   { icon: <Twitter className="w-5 h-5" />, title: "Twitter" },
//   { icon: <Instagram className="w-5 h-5" />, title: "Instagram" },
// ];

// const helpInfo = {
//   title: "Help",
//   links: [
//     { title: "Privacy Policy", link: "#" },
//     { title: "Returns + Exchanges", link: "#" },
//     { title: "Shipping", link: "#" },
//     { title: "Terms & Conditions", link: "#" },
//     { title: "FAQs", link: "#" },
//     { title: "Compare", link: "#" },
//     { title: "My Wishlist", link: "#" },
//   ],
// };

// const usefulLinks = {
//   title: "Useful Links",
//   links: [
//     { title: "Our Story", link: "#" },
//     { title: "Visit Our Store", link: "#" },
//     { title: "Contact Us", link: "#" },
//     { title: "About Us", link: "#" },
//     { title: "Account", link: "#" },
//   ],
// };

// export default function Footer() {
//   const [email, setEmail] = useState<string>('');

//   async function createSubscribes(){
//     try {
//       const newSubscribe = await createSubscribe({
//         email
//       })
//       console.log("New contact created successfully:", newSubscribe);
//     } catch (error) {
//       console.log(error);
//     }
//     }

//   return (
//     <footer className="bg-black border-t">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold text-white">Mémow</h2>
//             <div className="text-sm text-gray-600 space-y-2">
//               {companyInfo.map((info, index) => (
//                 <div key={index} className="flex items-center gap-2 text-white">
//                   {info.icon}
//                   <p>{info.title}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-4">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-white transition-colors"
//                 >
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Help Info */}
//           <div>
//             <h3 className="font-semibold mb-4">{helpInfo.title}</h3>
//             <ul className="space-y-2 text-sm text-white">
//               {helpInfo.links.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.link}
//                     className="transition-colors"
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Useful Links */}
//           {/* <div>
//             <h3 className="font-semibold mb-4">{usefulLinks.title}</h3>
//             <ul className="space-y-2 text-sm text-white">
//               {usefulLinks.links.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.link}
//                     className="transition-colors"
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}

//           {/* Newsletter Signup */}
//           <div>
//             <h3 className="font-semibold mb-4">Sign Up for Email</h3>
//             <p className="text-sm text-white mb-4">
//               Sign up to get first dibs on new arrivals, sales, exclusive
//               content, events and more!
//             </p>
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter email address"
//                 className="flex-1 px-4 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                 onChange={(e) => {setEmail(e.target.value)}}
//               />
//               <AnimatedSubscribeButton
//                 buttonColor="#000000"
//                 buttonTextColor="#ffffff"
//                 subscribeStatus={false}
//                 initialText={
//                   <span className="group inline-flex items-center text-xs" onClick={createSubscribes}>
//                     Subscribe{" "}
//                     <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </span>
//                 }
//                 changeText={
//                   <span className="group inline-flex items-center text-xs">
//                     <CheckIcon className="mr-2 size-4" />
//                     Subscribed{" "}
//                   </span>
//                 }
//               />
//             </div>
//             <div className="mt-6 flex items-center gap-4">
//               <select className="text-sm border rounded-md px-2 py-1">
//                 <option value="USD">USD</option>
//                 <option value="EUR">EUR</option>
//                 <option value="GBP">GBP</option>
//               </select>
//               <select className="text-sm border rounded-md px-2 py-1">
//                 <option value="English">English</option>
//                 <option value="Spanish">Spanish</option>
//                 <option value="French">French</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client"
import { Footerdemo } from "@/components/ui/footer-section";

export default function Footer() {
  return (
    <div className="block">
      <Footerdemo />
    </div>
  );
}