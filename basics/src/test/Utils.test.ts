import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
  beforeAll(() => {
    // 1回だけ
    console.log('beforeAll');
  });

  beforeEach(() => {
    // 毎回
    console.log('beforeEach');
  });

  test('first test', () => {
    const result = Utils.toUppercase('abc');
    expect(result).toBe('ABC');
  });

  test('parse simple URL', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:8080/login');

    expect(parsedUrl.href).toBe('http://localhost:8080/login');
    expect(parsedUrl.port).toBe('8080');
    expect(parsedUrl.protocol).toBe('http:');
  });

  test('parse URL with query', () => {
    const parsedUrl = Utils.parseUrl(
      'http://localhost:8080/login?user=test&password=test123!'
    );

    const expected = {
      user: 'test',
      password: 'test123!',
    };

    // オブジェクトの比較は、toEqual
    expect(parsedUrl.query).toEqual(expected);
  });

  // このテストだけ実行
  //test.only('array', () => {
  test('array', () => {
    const users = Utils.getUsers();

    expect(users).toEqual(['user1', 'user2', 'user3']);
  });

  test('test invalid URL', () => {
    // throwをテストする場合はこうする。
    const expected = () => {
      Utils.parseUrl('');
    };

    // メッセージはチェックされていない。
    expect(expected).toThrowError('Please specify url.');
  });

  test('test invalid URL with arrow function', () => {
    expect(() => {
      Utils.parseUrl('');
    }).toThrowError('Please specify url');
    // こっちだと、'Please specify url.' と 'Please specify url' の違いを検知してくれない。
  });

  test('test invalid URL with try catch', () => {
    try {
      Utils.parseUrl('');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).toHaveProperty('message', 'Please specify url.');
    }
  });
});

/**
 * launch.jsonの設定方法
 * https://github.com/microsoft/vscode-recipes/tree/main/debugging-jest-tests
 */

// jest.config.js のカバレージ設定方法
// collectCoverage: true,
// collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
