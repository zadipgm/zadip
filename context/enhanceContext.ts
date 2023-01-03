
import { NextPageContext } from "next";
export interface NextPageContextEnhanced extends NextPageContext {
  
    accessToken?: string;
    lang: "ar" | "en" | string;
    lang2: string;
    langFromUrl: "ar" | "en" | null;
    cookies: object;
  
    
  }