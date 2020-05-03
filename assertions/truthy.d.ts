/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is truthy.
     * @param value The value to check truthiness for.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L144)
     */
    export function truthy(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is falsy.
     * @param value The value to check truthiness for.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L144)
     */
    export function not_truthy(value: any, failureDescription?: string): boolean;

    export const is_truthy: typeof truthy;
    export const is_not_truthy: typeof not_truthy;
    export const are_truthy: typeof truthy;
    export const are_not_truthy: typeof not_truthy;
    export const was_truthy: typeof truthy;
    export const was_not_truthy: typeof not_truthy;

}
