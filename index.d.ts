// index.d.ts
declare module '@userflux/analytics-js' {
    export default class UserFlux {
        static initialize(apiKey: string, options: object): void;
        static identify(attributes: object): void;
        static identify(userId: string): void;
        static identify(attributes: object): void;
        static identify(userId: string, attributes: object): void;
        static track(name: string, properties: object): void;
        static reset(): void;
    }
}
