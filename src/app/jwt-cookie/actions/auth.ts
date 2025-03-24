"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	type GenerateLoginPayloadParams,
	type VerifyLoginPayloadParams,
	createAuth,
} from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "../../../lib/client";

const privateKey = process.env.THIRDWEB_ADMIN_PRIVATE_KEY || "";

if (!privateKey) {
	throw new Error("Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.");
}

const thirdwebAuth = createAuth({
	domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
	adminAccount: privateKeyToAccount({ client, privateKey }),
	client,
});

export async function generatePayload(payload: GenerateLoginPayloadParams) {
	return thirdwebAuth.generatePayload(payload);
}

export async function login(payload: VerifyLoginPayloadParams) {
	const verifiedPayload = await thirdwebAuth.verifyPayload(payload);
	if (verifiedPayload.valid) {
		const jwt = await thirdwebAuth.generateJWT({
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

	const authResult = await thirdwebAuth.verifyJWT({ jwt: jwt.value });
	if (!authResult.valid) {
		redirect("/jwt-cookie");
	}
	return authResult.parsedJWT;
}

export async function logout() {
	const c = await cookies();
	c.delete("jwt");
}
