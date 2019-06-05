module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          reduceIdents: false,
          mergeIdents: false,
          autoprefixer: false,
          'postcss-zindex': false,
          zindex: false,
        },
      ],
      discardComments: {
        removeAll: true,
      },
      reduceIdents: false,
      mergeIdents: false,
      autoprefixer: false,
      'postcss-zindex': false,
      zindex: false,
    },
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false,
    },
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
};
