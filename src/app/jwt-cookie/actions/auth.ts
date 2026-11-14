"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	type GenerateLoginPayloadParams,
	type VerifyLoginPayloadParams,
	createAuth,
} from "thirdweb/auth";
import { createThirdwebClient } from "thirdweb";
import { privateKeyToAccount } from "thirdweb/wallets";

function getThirdwebAuth() {
	const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY?.trim();
	const domain = process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN?.trim();

	if (!privateKey) {
		throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in project environment variables.");
	}

	if (!domain) {
		throw new Error("Missing NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN in project environment variables.");
	}

	const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID?.trim();
	const secretKey = process.env.THIRDWEB_SECRET_KEY?.trim();

	if (!clientId && !secretKey) {
		throw new Error(
			"Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID or THIRDWEB_SECRET_KEY in project environment variables.",
		);
	}

	const authClient = createThirdwebClient(
		secretKey ? { secretKey } : { clientId: clientId as string },
	);

	return createAuth({
		domain,
		adminAccount: privateKeyToAccount({ client: authClient, privateKey }),
		client: authClient,
	});
}

export async function generatePayload(payload: GenerateLoginPayloadParams) {
	return getThirdwebAuth().generatePayload(payload);
}

export async function login(payload: VerifyLoginPayloadParams) {
	const verifiedPayload = await getThirdwebAuth().verifyPayload(payload);
	if (verifiedPayload.valid) {
		const jwt = await getThirdwebAuth().generateJWT({
			payload: verifiedPayload.payload,
		});
		const c = await cookies();
		c.set("jwt", jwt);
		// redirect to the secure page
		return redirect("/jwt-cookie/secure");
	}
}

export async function authedOnly() {
	const c = await cookies();
	const jwt = c.get("jwt");
	if (!jwt?.value) {
		redirect("/jwt-cookie");
	}

	const authResult = await getThirdwebAuth().verifyJWT({ jwt: jwt.value });
	if (!authResult.valid) {
		redirect("/jwt-cookie");
	}
	return authResult.parsedJWT;
}

export async function logout() {
	const c = await cookies();
	c.delete("jwt");
}
