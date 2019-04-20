import * as path from 'path';

export function resolve(...pathSegments: string[]): string {
    return path.resolve(__dirname, '../..', ...pathSegments);
}