import { useCallback, useMemo } from "react";

export function useAuth() {
	const fetchAccessToken = useCallback(async () => {
		return null;
	}, []);

	return useMemo(
		() => ({
			isLoading: false,
			isAuthenticated: false,
			fetchAccessToken,
		}),
		[fetchAccessToken],
	);
}

export async function signOut() {
	return;
}
