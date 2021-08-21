import { useDelayedLoading } from './'
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useMyHook', () => {
  it('updates every second', () => {
    const { result } = renderHook(() => useDelayedLoading(false, 500));
    const [, setLoading] = result.current;

    expect(result.current[0]).toBe(false);

    act(() => {
      setLoading(true);
    });

    //Sould stay false
    expect(result.current[0]).toBe(false);

    // Fast-forward 600,  > 500
    act(() => {
      jest.advanceTimersByTime(600);
    });
    
    // Check loading, should now be true
    expect(result.current[0]).toBe(true);

    act(() => {
      setLoading(false);
      jest.advanceTimersByTime(1);
    });
    //Should immediatelly be false
    expect(result.current[0]).toBe(false);
  })
})
