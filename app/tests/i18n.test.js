import i18n from '../i18n';

jest.mock('../translations/en.json', () => ({
  message1: 'default message',
  message2: 'default message 2',
}));

const esTranslationMessages = {
  message1: 'mensaje predeterminado',
  message2: '',
};

describe('i18n', () => {
  it('should build only defaults when DEFAULT_LOCALE', () => {
    const result = i18n('en', { a: 'a' });

    expect(result).toEqual({ a: 'a' });
  });

  it('should combine default locale and current locale when not DEFAULT_LOCALE', () => {
    const result = i18n('', esTranslationMessages);

    expect(result).toEqual({
      message1: 'mensaje predeterminado',
      message2: 'default message 2',
    });
  });
});
