const configuredId = process.env.NEXT_PUBLIC_TALLY_FORM_ID?.trim() ?? "";

// A Tally form ID is public by design. Keep it configurable so forms can be
// replaced without changing the contact component.
export const TALLY_FORM_ID = /^[a-zA-Z0-9_-]+$/.test(configuredId) ? configuredId : "";

export const TALLY_EMBED_URL = TALLY_FORM_ID
  ? `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`
  : "";
