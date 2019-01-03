import storageMethods from './token';

describe('localStorage', () => {
  beforeEach(() => localStorage.clear());

  it("returns null if token doesn't exist", () => {
    const token = localStorage.getItem('token');
    expect(token).toBeNull();
  });

  it('sets the token', () => {
    const token = 'jfsjsdjkfjsjsd';
    storageMethods.setToken(token);
    expect(storageMethods.getToken()).toEqual(token);
  });

  it('remove the token', () => {
    const token = 'jfsjsdjkfjsjsd';
    storageMethods.setToken(token);
    storageMethods.removeToken('token');
    expect(storageMethods.getToken()).toBeNull();
  });

  it('cleared storage', () => {
    storageMethods.clearStorage();
    expect(storageMethods.getToken()).toBeNull();
  });
});