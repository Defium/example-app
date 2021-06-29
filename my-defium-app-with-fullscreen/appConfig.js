const mainApp = {
  name: 'MyDefiumApp',
  iconPath: 'static/icons/app-my-defium-iconsvg',
  trayApp: false,
  routes: [],
  meta: {
    author: 'Im The author',
    version: 'v0.0.1',
    support: {
      info: 'To get support please reach out to us on discord',
      link: 'discordlink',
    },
    about: {
      short: 'My app is so awsome!',
      long: 'An app that makes everything you do awsome! '
        + 'It also gives you a glance at whats new in Defium OS.',
    },
    images: ['dash1.png', 'dash2.png'],
    donation: {
      address: 'ARuPqPwh9THTRVjngnJruM39XZdMnZCz21',
      addressChain: 'NEO',
      acceptedTokens: ['nNEO', 'NEO', 'FLM', 'GAS', 'cGAS', 'SWTH', 'fUSDT'],
    },
  },
};

export default mainApp;
