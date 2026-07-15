/** Current engagement month/year — updates automatically for site chrome and cover lines. */
export const engagementMonthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
}).format(new Date());

/** Replace `{monthYear}` tokens (and legacy June 2026 strings) in copy. */
export function withEngagementDate(text) {
  if (!text || typeof text !== "string") return text;
  return text.replace(/\{monthYear\}/g, engagementMonthYear).replace(/June 2026/g, engagementMonthYear);
}

export function datedCover(cover) {
  if (!cover) return cover;
  return {
    ...cover,
    meta: withEngagementDate(cover.meta),
    source: withEngagementDate(cover.source),
  };
}
