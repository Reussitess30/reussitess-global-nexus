// components/botStringsInjector.js
// Injection sûre côté client : importe dynamiquement data/botStrings et merge dans globalThis.

if (typeof window !== 'undefined') {
  import('../data/botStrings')
    .then(mod => {
      const botStrings = (mod && mod.default) ? mod.default : mod;
      try {
        if (typeof globalThis.knowledgeBase !== 'object' || globalThis.knowledgeBase === null) {
          globalThis.knowledgeBase = {};
        }
        Object.assign(globalThis.knowledgeBase, botStrings);
        globalThis.botStrings = Object.assign({}, globalThis.botStrings || {}, botStrings);
      } catch (e) {
        console.warn('Injection botStrings failed', e);
      }
    })
    .catch(() => {
      // silent fail - no-op if file missing
    });
}
