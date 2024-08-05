/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /*protocol:'https' --> There is no need to specify the protocol (http or https) when using the domains array.
    Next.js will handle both protocols for the specified domains.*/
    domains: ["localhost","bhartee.ai"],
// Only localhost and bhartee.ai is allowed for image optimization
//we dont need any remote hosts for images yet, so no need to add any remote hostnames for image optimization like sanity as we are not using it.
  },
};

module.exports = nextConfig;
