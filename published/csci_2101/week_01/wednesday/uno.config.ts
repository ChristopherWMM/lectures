import { defineConfig } from 'unocss'
import { colors } from '@unocss/preset-mini'

export default defineConfig ({
  rules: [
    ['neversink-bowdoin-scheme', {
      '--neversink-bg-color': colors['white'],
      '--neversink-bg-code-color': colors['gray'][100],
      '--neversink-fg-code-color': colors['black'],
      '--neversink-fg-color': colors['black'],
      '--neversink-text-color': colors['black'],
      '--neversink-border-color': colors['gray'][950],
      '--neversink-highlight-color': colors['gray'][300],
      }],
      ['neversink-bowdoin-title-scheme', {
        '--neversink-bg-color': colors['black'],
        '--neversink-bg-code-color': colors['gray'][100],
        '--neversink-fg-code-color': colors['black'],
        '--neversink-fg-color': colors['black'],
        '--neversink-text-color': colors['white'],
        '--neversink-border-color': colors['gray'][950],
        '--neversink-highlight-color': colors['gray'][300],
        }]
  ],
  safelist: [
    'neversink-bowdoin-scheme', 'neversink-bowdoin-title-scheme'
  ]
})
