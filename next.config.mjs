import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    loader: "imgix",
    path: "",
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },

});
export default withMDX(nextConfig);
