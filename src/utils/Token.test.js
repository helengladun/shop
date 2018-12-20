const MyMethods = require('./Token');

describe('localStorage', () => {
  beforeEach(() => localStorage.clear());

  it("returns null if token doesn't exist", () => {
    const token = localStorage.getItem('token');
    expect(token).toBeNull();
  });

  it('sets the token', () => {
    const token = 'jfsjsdjkfjsjsd';
    MyMethods.setToken(token);
    expect(MyMethods.getToken()).toEqual(token);
  });

  it('remove the token', () => {
    const token = 'jfsjsdjkfjsjsd';
    MyMethods.setToken(token);
    MyMethods.removeToken('token');
    expect(MyMethods.getToken()).toBeNull();
  });

  it('cleared storage', () => {
    expect(MyMethods.getToken()).toBeNull();
  });
});