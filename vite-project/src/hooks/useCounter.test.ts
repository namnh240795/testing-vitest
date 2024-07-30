// write test for useCounter.ts

import { expect, it, describe } from "vitest";
import {renderHook, act} from '@testing-library/react'
import useCounter from './useCounter';


describe('should increment counter', () => {
    it('should return a default search term and original items', () => { 
        const { result } = renderHook(() => useCounter());
        const [count, setCount] = result.current;
        expect(count).toBe(0);
        act(() => {
            setCount(1);
        })
        expect(result.current[0]).toBe(1);
    });
});