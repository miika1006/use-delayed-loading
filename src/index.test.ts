import { useDelayedLoading } from './'
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useDelayedLoading', () => {
 // it('should set loading true after delay', () => {

    const { result } = renderHook(() => {
      const [loading, setLoading] = useDelayedLoading(false, 500);
      console.log("RenderHook loading",loading);
      return { loading, setLoading };
    });

    test('Should have initial value of false', () => {
      expect(result.current.loading).toBe(false);
      act(() => {
        result.current.setLoading(true);
      });
    });

    test('Should still be false after no delay', () => {
      expect(result.current.loading).toBe(false);
      // Fast-forward 600,  > 500
      act(() => {
        jest.advanceTimersByTime(600);
      });
    });

    test('Should now be true after delay', () => {

      // Check loading, should now be true
      expect(result.current.loading).toBe(true);
      
      act(() => {
        result.current.setLoading(false);
        jest.advanceTimersByTime(1);
      });
    });

    
    test('Should immediatelly be false after no delay', () => {
      //Should immediatelly be false
      expect(result.current.loading).toBe(false);
    });
  //})
})
