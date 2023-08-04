const PROXY_GEOIP = 'Proxy-GeoIP';

if (PROXY_GEOIP in req.headers) {
  if (options.geoipRule.type === 'whitelist') {
    if (options.geoipRule.codes.includes(req.headers[PROXY_GEOIP])) {
      if (options.advancedClientChallenging.enabled && options.geoipRule.action === 'pass') {
        isBotAuthorized = true;
      }

      if (!options.advancedClientChallenging.enabled && options.geoipRule.action === 'check') {
        return await sendInitialAutomated(initialOpts);
      }

      if (!options.recaptcha.enabled && options.geoipRule.action === 'recaptcha') {
        return await sendCaptcha(initialOpts);
      }
    } else {
      if (!options.advancedClientChallenging.enabled && options.geoipRule.otherwise === 'check') {
        return await sendInitialAutomated(initialOpts);
      }

      if (!options.recaptcha.enabled && options.geoipRule.otherwise === 'recaptcha') {
        return await sendCaptcha(initialOpts);
      }

      if (options.geoipRule.otherwise === 'block') {
        return res.status(403).end();
      }
    }
  } else {
    if (options.geoipRule.codes.includes(req.headers[PROXY_GEOIP])) {
      if (options.geoipRule.action === 'block') {
        return res.status(403).end();
      }

      if (!options.advancedClientChallenging.enabled && options.geoipRule.action === 'check') {
        return await sendInitialAutomated(initialOpts);
      }

      if (!options.recaptcha.enabled && options.geoipRule.action === 'recaptcha') {
        return await sendCaptcha(initialOpts);
      }
    } else {
      if (options.advancedClientChallenging.enabled && options.geoipRule.otherwise === 'pass') {
        isBotAuthorized = true;
      }

      if (!options.advancedClientChallenging.enabled && options.geoipRule.otherwise === 'check') {
        return await sendInitialAutomated(initialOpts);
      }

      if (!options.recaptcha.enabled && options.geoipRule.otherwise === 'recaptcha') {
        return await sendCaptcha(initialOpts);
      }
    }
  }
}
