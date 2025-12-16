import NextHead from "next/head";
import fonts from "../fonts.json";

export const Head = () => {
  return (
    <NextHead>
      {fonts.map((font) => (
        <link key={font} href={font} rel="stylesheet" />
      ))}
    </NextHead>
  );
};
