const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        debug: true,
        testops: {
          api: {
            token: '7c0650e16316c70cf12ecfcdf0c8d8404486863bd9ec8ca0bf5497bc95ef030b',
          },
          project: 'SOLOTODOS',
          uploadAttachments: true,
          run: {
            // id: true,
            // title: true,
            // description: true,
            complete: true,
          },
        },
      },
    ],
  ],
};

module.exports = config;
