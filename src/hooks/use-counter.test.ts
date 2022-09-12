import { act, renderHook } from "@testing-library/react";

import { useCounter } from "./use-counter";

describe("use-counter", () => {
  it("should have a default value of zero", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should accept a custom default value", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it("should increment the count by 1", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it("should increment the count by the specified amount", () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increment(5));
    expect(result.current.count).toBe(5);
  });

  it("should decrement the count by 1", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(9);
  });

  it("should decrement the count by the specified amount", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.decrement(5));
    expect(result.current.count).toBe(5);
  });

  it("should reset the count to the default value", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.increment(5));
    expect(result.current.count).toBe(15);
    act(() => result.current.reset());
    expect(result.current.count).toBe(10);
  });

  it("should reset the count to the specified value", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.reset(5));
    expect(result.current.count).toBe(5);
  });
});
