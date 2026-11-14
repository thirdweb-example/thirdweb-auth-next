import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID?.trim();
const secretKey = process.env.THIRDWEB_SECRET_KEY?.trim();

// Keep static generation from evaluating an empty thirdweb configuration.
// The configured project credentials are used automatically in the browser and deployment.
export const client = createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId: clientId || "build-placeholder",
      },
);
