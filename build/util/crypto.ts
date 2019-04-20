import * as crypto from 'crypto';

const md5Hash = crypto.createHash('md5');

export function md5(str: string): string {
    md5Hash.update(str);
    return md5Hash.digest('hex');
}