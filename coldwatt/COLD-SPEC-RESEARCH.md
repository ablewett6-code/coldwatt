# Growing the cold-weather spec database

The spec database (`/tools/cold-weather-power-station-specs/`) is the page most likely to earn links from forums, Reddit and other sites — nobody else collects this data in one place. Growing it is the highest-value, lowest-cost thing you can do. No purchases needed.

## Goal

15–25 power stations, each with a sourced **minimum charging temperature** and **minimum operating temperature**.

## Where to find the numbers

1. **The official product page** — look for a "Specs" or "Tech specs" tab. Search the page (Ctrl+F) for "temperature" or "°C".
2. **The user manual PDF** — usually linked from the product page or the brand's support/download centre. Manuals list temperatures far more often than product pages do.
3. **Brand support** — if neither lists it, email support and ask: "What are the charging and discharging temperature ranges for [model]?" Save the reply. A published answer from support is a legitimate source; note it in the article's sources.

Never use a number from a review site, Amazon listing or forum post. If you can't find an official figure, leave it `null` — the site will show "Not published."

## Adding a product

Copy an existing entry in `src/data/products.json` and fill it in:

```json
{
  "id": "brand-model-name",
  "brand": "Brand",
  "name": "Brand Model Name",
  "category": "power-station",
  "bestFor": "One line: who should buy it",
  "shortVerdict": "One or two sentences, based only on specs and sourced facts",
  "specs": {
    "capacityWh": 1000,
    "outputW": 1500,
    "surgeW": null,
    "solarInputW": null,
    "chemistry": "LiFePO4",
    "weightLb": 25,
    "acOutlets": 4,
    "upsMs": null,
    "chargeTempMinC": 0,
    "dischargeTempMinC": -20,
    "expandable": false
  },
  "specsVerified": true,
  "specsSource": "https://link-to-the-official-spec-page-or-manual",
  "links": {
    "us": { "url": "https://brand.com/", "merchant": "Brand", "network": "TBD", "affiliate": false },
    "ca": { "url": "https://brand.ca/", "merchant": "Brand Canada", "network": "TBD", "affiliate": false }
  }
}
```

It appears in the spec database, the runtime calculator and the `/go/` redirects automatically.

## Suggested models to research next

Larger home-backup units (these sell best in winter):
- EcoFlow DELTA Pro 3 · EcoFlow DELTA 3 Max
- BLUETTI AC180 · BLUETTI AC200L · BLUETTI Apex 300
- Anker SOLIX F2000 · Anker SOLIX F3800 Plus · Anker SOLIX C2000 Gen 2
- Jackery Explorer 2000 v2 · Jackery Explorer 3000 v2
- Goal Zero Yeti 1500X

Mid-size / camping:
- EcoFlow RIVER 3 · Jackery Explorer 300 · Anker SOLIX C300

Check that each is still sold in both Canada and the US before adding it. Look especially for any model that advertises a **self-heating battery** or **low-temperature charging** — that's a potential "best for extreme cold" pick.

## Promoting it

Once it has 15+ models:
- Answer winter-power questions on r/PrepperIntel, r/Alberta, r/vandwellers, r/OffGrid and cabin forums, linking to the table **only when it directly answers the question**. Read each community's self-promotion rules first.
- Update the "last updated" date whenever you add models, and mention new additions in the page intro.
