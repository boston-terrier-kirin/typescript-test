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
});
