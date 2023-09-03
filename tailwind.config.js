module.exports = {
  purge: ['src/**/*.js', './**/*.html'],
  important: true,
  theme: {
    gap: {
      // defaults to theme => theme('spacing') as per Tailwind 1.2
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem'
    },
    backgroundColor: {
      stanford: '#450a0a'
    },
    pseudo: {
      before: 'before',
      after: 'after',
      'not-first': 'not(:first-child)'
    },
    extend: {
      colors: {
        brand: '#450a0a',
        stanford: {
          50: '#f9f3f3',
          100: '#f4e8e8',
          200: '#e2c5c5',
          300: '#d1a1a1',
          400: '#af5b5b',
          500: '#8c1515',
          600: '#7e1313',
          700: '#691010',
          800: '#540d0d',
          900: '#450a0a'
        },
        cooper: {
          50: '#fbfbf9',
          100: '#faf7f2',
          200: '#f3e9dc',
          300: '#ecd2bc',
          400: '#e0a884',
          500: '#d07d50',
          600: '#aa5731',
          700: '#7a422b',
          800: '#553227',
          900: '#3f2822'
        },
        sepia: {
          50: '#fbfbfa',
          100: '#f8f7f3',
          200: '#f0eae1',
          300: '#e6d3c7',
          400: '#d5aa97',
          500: '#bd8164',
          600: '#945a41',
          700: '#694536',
          800: '#4a342e',
          900: '#372926'
        },
        manatee: {
          50: '#f9fafb',
          100: '#f5f7f7',
          200: '#e9e9eb',
          300: '#d9d2dd',
          400: '#beaac3',
          500: '#9a80a1',
          600: '#715a79',
          700: '#52455d',
          800: '#3b3546',
          900: '#2d2a37'
        },
        wisteria: {
          50: '#f9fafb',
          100: '#f5f6f8',
          200: '#e8e7ee',
          300: '#d8d0e3',
          400: '#bea6d0',
          500: '#9b7bb5',
          600: '#725690',
          700: '#53426e',
          800: '#3c3350',
          900: '#2e293e'
        },
        royalblue: {
          50: '#f8fafb',
          100: '#f2f5f9',
          200: '#e1e5f4',
          300: '#cccdee',
          400: '#aca2e6',
          500: '#8476da',
          600: '#6052c1',
          700: '#47409a',
          800: '#35316e',
          900: '#292854'
        },
        orchid: {
          50: '#f9fafb',
          100: '#f5f5f9',
          200: '#e8e2f2',
          300: '#dac8ec',
          400: '#c69be0',
          500: '#ac6ed1',
          600: '#844ab5',
          700: '#5e398e',
          800: '#432d65',
          900: '#33254d'
        },
        violet: {
          50: '#fafafb',
          100: '#f7f5f8',
          200: '#eee2f0',
          300: '#e4c7e6',
          400: '#d798d4',
          500: '#c56bbd',
          600: '#9f4799',
          700: '#713776',
          800: '#4f2b55',
          900: '#3b2341'
        },
        blush: {
          50: '#fbfafa',
          100: '#faf5f5',
          200: '#f4e2e8',
          300: '#efc5d6',
          400: '#e994b4',
          500: '#e2678b',
          600: '#c54362',
          700: '#92334d',
          800: '#65283b',
          900: '#4b2030'
        },
        chestnut: {
          50: '#fbfafa',
          100: '#faf5f4',
          200: '#f4e4e4',
          300: '#efc9cd',
          400: '#e899a3',
          500: '#e06d73',
          600: '#c2484d',
          700: '#8e373e',
          800: '#632a32',
          900: '#49222a'
        }
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    textIndent: {
      // defaults to {}
      1: '0.25rem',
      2: '0.5rem'
    },
    textShadow: {
      // defaults to {}
      default: '0 2px 5px rgba(0, 0, 0, 0.5)',
      lg: '0 2px 10px rgba(0, 0, 0, 0.5)'
    },
    textDecorationStyle: {
      // defaults to these values
      solid: 'solid',
      double: 'double',
      dotted: 'dotted',
      dashed: 'dashed',
      wavy: 'wavy'
    },
    textDecorationColor: {
      // defaults to theme => theme('colors')
      red: '#f00',
      green: '#0f0',
      blue: '#00f'
    },
    fontVariantCaps: {
      // defaults to these values
      normal: 'normal',
      small: 'small-caps',
      'all-small': 'all-small-caps',
      petite: 'petite-caps',
      unicase: 'unicase',
      titling: 'titling-caps'
    },
    fontVariantNumeric: {
      // defaults to these values
      normal: 'normal',
      ordinal: 'ordinal',
      'slashed-zero': 'slashed-zero',
      lining: 'lining-nums',
      oldstyle: 'oldstyle-nums',
      proportional: 'proportional-nums',
      tabular: 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions'
    },
    fontVariantLigatures: {
      // defaults to these values
      normal: 'normal',
      none: 'none',
      common: 'common-ligatures',
      'no-common': 'no-common-ligatures',
      discretionary: 'discretionary-ligatures',
      'no-discretionary': 'no-discretionary-ligatures',
      historical: 'historical-ligatures',
      'no-historical': 'no-historical-ligatures',
      contextual: 'contextual',
      'no-contextual': 'no-contextual'
    },
    textRendering: {
      // defaults to these values
      'rendering-auto': 'auto',
      'optimize-legibility': 'optimizeLegibility',
      'optimize-speed': 'optimizeSpeed',
      'geometric-precision': 'geometricPrecision'
    },
    textStyles: (theme) => ({
      // defaults to {}
      heading: {
        output: false, // this means there won't be a 'heading' component in the CSS, but it can be extended
        fontWeight: theme('fontWeight.bold'),
        lineHeight: theme('lineHeight.tight')
      },
      h1: {
        extends: 'heading', // this means all the styles in 'heading' will be copied here; 'extends' can also be an array to extend multiple text styles
        fontSize: theme('fontSize.5xl'),
        '@screen sm': {
          fontSize: theme('fontSize.6xl')
        }
      },
      h2: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl'),
        '@screen sm': {
          fontSize: theme('fontSize.5xl')
        }
      },
      h3: {
        extends: 'heading',
        fontSize: theme('fontSize.4xl')
      },
      h4: {
        extends: 'heading',
        fontSize: theme('fontSize.3xl')
      },
      h5: {
        extends: 'heading',
        fontSize: theme('fontSize.2xl')
      },
      h6: {
        extends: 'heading',
        fontSize: theme('fontSize.xl')
      },
      link: {
        fontWeight: theme('fontWeight.bold'),
        color: theme('colors.stanford.50'),
        '&:hover': {
          color: theme('colors.blue.600'),
          textDecoration: 'underline'
        }
      },
      richText: {
        fontWeight: theme('fontWeight.normal'),
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.relaxed'),
        '> * + *': {
          marginTop: '1em'
        },
        h1: {
          extends: 'h1'
        },
        h2: {
          extends: 'h2'
        },
        h3: {
          extends: 'h3'
        },
        h4: {
          extends: 'h4'
        },
        h5: {
          extends: 'h5'
        },
        h6: {
          extends: 'h6'
        },
        ul: {
          listStyleType: 'disc'
        },
        ol: {
          listStyleType: 'decimal'
        },
        a: {
          extends: 'link'
        },
        'b, strong': {
          fontWeight: theme('fontWeight.bold')
        },
        'i, em': {
          fontStyle: 'italic'
        }
      }
    }),
    spinner: (theme) => ({
      default: {
        color: '#dae1e7', // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms' // the speed at which the spinner should rotate
      }
    }),
    container: {
      center: true,
      padding: '1.5rem'
    },
    colors: {
      black: '#151719',
      white: '#eceded',

      gray: {
        500: '#9ca9b3',
        600: '#2a2d32',
        700: '#33363a',
        800: '#25282c'
      },

      green: {
        300: '#73efcc',
        400: '#1cb68b'
      },

      indigo: {
        400: '#acadff',
        500: '#6b6dff',
        600: '#6163ff',
        700: '#5658dd'
      }
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif']
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    backgroundColor: ['not-first'],
    ellipsis: ['responsive'],
    empty: ['before', 'after'],
    fontVariantCaps: ['responsive'],
    fontVariantLigatures: ['responsive'],
    fontVariantNumeric: ['responsive'],
    gap: ['responsive'], // defaults to ['responsive'] as per Tailwind 1.2
    hyphens: ['responsive'],
    kerning: ['responsive'],
    scrollSnapType: ['responsive'],
    spinner: ['responsive'],
    textDecorationColor: ['responsive'],
    textDecorationStyle: ['responsive'],
    textIndent: ['responsive'],
    textRendering: ['responsive'],
    textShadow: ['responsive'],
    textUnset: ['responsive']
  },
  plugins: [
    require('tailwindcss-elevation')(['responsive']),
    require('tailwindcss-typography')({
      ellipsis: true,
      hyphens: true,
      kerning: true,
      textUnset: true,
      componentPrefix: 'c-'
    }),
    require('tailwindcss-debug-screens'),
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px'
      }
    }),
    require('tailwindcss-brand-colors'),
    require('tailwindcss-accessibility'),
    require('tailwindcss-visuallyhidden')(),
    require('tailwind-css-variables'),
    require('tailwindcss-touch')(),
    require('tailwindcss-pseudo')(),
    require('tailwind-text-decoration-color'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-underline-utils'),
    require('tailwindcss-spinner')({
      className: 'spinner',
      themeKey: 'spinner'
    }),
    require('tailwindcss-font-sizes')({
      total: 10,
      format: 'em'
    })
  ]
}
