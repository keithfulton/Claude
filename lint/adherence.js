// Design-system adherence checks for consuming code, run by oxlint as a JS plugin.
// The selectors come from the Claude Design export (project/_adherence.oxlintrc.json),
// which expressed them as ESLint `no-restricted-syntax` entries that oxlint does not support natively.
import { readFileSync } from 'node:fs';

const entries = JSON.parse(readFileSync(new URL('./adherence-rules.json', import.meta.url), 'utf8'));

export default {
  meta: { name: 'adherence' },
  rules: {
    'restricted-syntax': {
      meta: { type: 'suggestion', docs: { description: 'Use Cohere design-system tokens, fonts and declared component props.' } },
      create(context) {
        const visitors = {};
        for (const { selector, message } of entries) {
          visitors[selector] = (node) => context.report({ node, message });
        }
        return visitors;
      },
    },
  },
};
