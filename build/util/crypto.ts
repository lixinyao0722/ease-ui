import * as crypto from 'crypto';

export function md5(str: string): string {
  const md5Hash = crypto.createHash('md5');
  md5Hash.update(str);
  return md5Hash.digest('hex');
}