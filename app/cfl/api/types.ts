import type { UseQueryOptions as BaseUseQueryOptions } from "@tanstack/react-query";

export type UseQueryOptions = Omit<BaseUseQueryOptions, "queryKey" | "queryFn">;
