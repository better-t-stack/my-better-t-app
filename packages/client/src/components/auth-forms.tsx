import { useState } from "react";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

export default function AuthForms() {
	const [showSignIn, setShowSignIn] = useState(false);

	return showSignIn ? (
		<SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
	) : (
		<SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
	);
}
