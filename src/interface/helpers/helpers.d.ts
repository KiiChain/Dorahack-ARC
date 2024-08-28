declare type ICallback<T = unknown, E = Error | null> = (error?: E, data?: T) => void

declare type IIterable<T = unknown> = Array<T>
