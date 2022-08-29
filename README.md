## Getting Started


This example demonstrates how to use thirdweb Auth with NextJS.

To run the project, first clone this repository, and then run one of the following commands to install the dependencies:

```bash
npm install
# or
yarn install
```

Next, you need to create a `.env.local` file and add the `ADMIN_PRIVATE_KEY` variable to it with the private key of the wallet you want to use as the admin wallet to generate and verify payloads. Your file should use something like the following:

```.env
ADMIN_PRIVATE_KEY=...
```

Finally, you can run the project with one of the following commands:

```bash
npm run dev
# or
yarn dev
```

Now, you can navigate to [http://localhost:3000](http://localhost:3000) to visit the client side page where you can connect a wallet, sign-in with ethereum and view the payload, and use the payload to authenticate with the backend.
## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb Auth Documentation](https://docs.thirdweb.com/auth) - learn about thirdweb Auth.
- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
