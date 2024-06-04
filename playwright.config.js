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
            token: 'a505a24ce9a7a81bc094febfb67954345c44edf693e7584e50a385f26eb59fe1',
          },
          project: 'SOLOTODO',
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
