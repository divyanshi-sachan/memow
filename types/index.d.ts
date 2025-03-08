/* eslint-disable no-unused-vars */

import { promises } from "dns";

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

// ====== CONSTANTUS PARAMS
declare type CreateContactParams = {
  date: Date | undefined;
  email: String;
  firstName: String;
  lastName: String;
  message: String;
};

// ====== SUBSCRIBE PARAMS
declare type SubscribeParams = {
  email: string;
};

// ====== PAYMENTS PARAMS
declare type PaymentParams = {
  amount: number | String;
  orderCreationId: String;
  razorpayPaymentId: String;
  razorpayOrderId: String;
  razorpaySignature: String;
  userId: string;
};

// ====== ORDER PARAMS
declare type CreateBooking = {
  author: any;
  bookingDate: Date | undefined;
  firstName: String;
  lastName: String;
  MobileNo: String | Number;
  Email: String;
  originalPrice: String | Number;
  offeredPrice: String | Number;
  country: String;
  location: {
    type: string;
    coordinates: [number, number];
  };
  landmark: String;
  zipcode: String;
  bookingType: String;
  bookingSubType: String;
  paymentDetails: String;
  bookingStatus: String;
  paymentStatus: String;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== IMAGE PARAMS
declare type AddImageParams = {
  image: {
    title: string;
    publicId: string;
    transformationType: string;
    width: number;
    height: number;
    config: any;
    secureURL: string;
    transformationURL: string;
    aspectRatio: string | undefined;
    prompt: string | undefined;
    color: string | undefined;
  };
  userId: string;
  path: string;
};

declare type UpdateImageParams = {
  image: {
    _id: string;
    title: string;
    publicId: string;
    transformationType: string;
    width: number;
    height: number;
    config: any;
    secureURL: string;
    transformationURL: string;
    aspectRatio: string | undefined;
    prompt: string | undefined;
    color: string | undefined;
  };
  userId: string;
  path: string;
};

declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

// ====== TRANSACTION PARAMS
declare type CheckoutTransactionParams = {
  plan: string;
  credits: number;
  amount: number;
  buyerId: string;
};

declare type CreateTransactionParams = {
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

declare type TransformationTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: Promise<{ id: string; type: TransformationTypeKey;}>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

declare type TransformationFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};

declare type TransformedImageProps = {
  image: any;
  type: string;
  title: string;
  transformationConfig: Transformations | null;
  isTransforming: boolean;
  hasDownload?: boolean;
  setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};

declare type CheckoutProps = {
  user: any;
};
