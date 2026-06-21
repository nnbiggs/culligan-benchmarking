import data from "./capabilityDescriptions.json";

const { byDomainRegion, default: defaults, aliases } = data;

function resolveKey(name, bucket) {
  if (!bucket) return undefined;
  if (bucket[name]) return bucket[name];
  if (!aliases) return undefined;
  const alias = aliases[name];
  if (alias && bucket[alias]) return bucket[alias];
  for (const [from, to] of Object.entries(aliases)) {
    if (to === name && bucket[from]) return bucket[from];
  }
  return undefined;
}

/**
 * @param {string} capabilityName
 * @param {string} [domainName]
 * @param {string} [regionName] — Americas | EMEA | APAC | corporate
 */
export function getCapabilityDescription(capabilityName, domainName, regionName) {
  if (domainName && byDomainRegion[domainName]) {
    const domain = byDomainRegion[domainName];
    if (regionName) {
      const regional = resolveKey(capabilityName, domain[regionName]);
      if (regional) return regional;
    }
    const corporate = resolveKey(capabilityName, domain.corporate);
    if (corporate) return corporate;
  }

  return resolveKey(capabilityName, defaults) ?? null;
}

export function hasCapabilityDescription(capabilityName, domainName, regionName) {
  return Boolean(getCapabilityDescription(capabilityName, domainName, regionName));
}
