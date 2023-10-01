import { useDelayedLoading } from "./";
import { act, renderHook } from "@testing-library/react-hooks";

jest.useFakeTimers();

describe("useDelayedLoading", () => {
	test("Should have initial value of false, and after timeout change to true", () => {
		const { result } = renderHook(() => {
			const [loading, setLoading] = useDelayedLoading(false, 500);
			console.log("RenderHook loading", loading);
			return { loading, setLoading };
		});

		expect(result.current.loading).toBe(false);

		act(() => {
			result.current.setLoading(true);
		});

		expect(result.current.loading).toBe(false);

		act(() => {
			// Fast-forward 600,  > 500
			jest.advanceTimersByTime(600);
		});

		// Check loading, should now be true
		expect(result.current.loading).toBe(true);

		act(() => {
			result.current.setLoading(false);
			jest.advanceTimersByTime(1);
		});

		//Should immediatelly be false
		expect(result.current.loading).toBe(false);
	});
});
