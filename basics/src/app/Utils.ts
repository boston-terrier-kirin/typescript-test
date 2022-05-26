import { UrlWithParsedQuery, parse } from 'url';

export class Utils {
  static parseUrl(url: string): UrlWithParsedQuery {
    if (!url) {
      throw new Error('Please specify url.');
    }
    return parse(url, true);
  }

  static toUppercase(arg: string) {
    return arg.toUpperCase();
  }

  static getUsers() {
    return ['user1', 'user2', 'user3'];
  }
}
