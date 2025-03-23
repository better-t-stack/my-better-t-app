import AuthForms from "@/components/auth-forms";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AuthForms />;
}
