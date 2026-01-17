import localFont from "next/font/local";

export const grotesk = localFont({
  src: "./SchibstedGrotesk-VariableFont_wght.ttf",
  variable: "--font-grotesk",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const notoArabic = localFont({
  src: "./NotoSansArabic-VariableFont_wdth,wght.ttf",
  variable: "--font-ar",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
