---
title: "What Size Power Station Do I Need for a Winter Outage?"
seoTitle: "What Size Power Station Do I Need? (Winter Outage Guide)"
description: "Watts vs watt-hours explained, plus three worked examples — essentials only, add the fridge, add the furnace fan — to size a power station for a Canadian winter outage."
template: guide
publishDate: 2026-09-30
faqs:
  - q: "What's the difference between watts and watt-hours?"
    a: "Watts (W) are how much power something draws at one moment — it decides whether a power station can run it at all. Watt-hours (Wh) are how much energy is stored — it decides how long it can run. You need enough of both."
  - q: "Is a 1,000 Wh power station enough for a power outage?"
    a: "For essentials plus a fridge, roughly yes — about half a day with a typical fridge, longer if you cycle the fridge on and off. For a furnace blower on top of that, it will usually last only a few hours unless your blower is an efficient ECM motor."
  - q: "How big a power station do I need to run a furnace overnight?"
    a: "With a blower averaging around 225 W (a 450 W motor running half the time), plus a fridge and a few essentials, 8 hours needs roughly 3,400 Wh of rated capacity. That's why expandable power stations and generator combinations are popular for furnace backup."
  - q: "Why is usable capacity less than the rated capacity?"
    a: "Power stations keep a reserve to protect the battery, and converting stored DC power to household AC wastes some energy. Our estimates assume about 76% of rated capacity reaches your appliances indoors — and less when the battery is cold."
sources:
  - title: "Natural Resources Canada — EnerGuide for appliances"
    url: "https://natural-resources.canada.ca/energy-efficiency/product-energy-ratings/energuide/appliances-energuide"
  - title: "EcoFlow DELTA 3 Plus — official specifications"
    url: "https://ca.ecoflow.com/products/delta-3-plus-portable-power-station"
  - title: "Jackery Explorer 1000 v2 — official specifications"
    url: "https://ca.jackery.com/products/jackery-explorer-1000-v2-portable-power-station"
---

Sizing a power station comes down to two numbers, and most people only look at one. Get both right and you'll know exactly what you're buying before the power goes out.

## Watts vs watt-hours: the two numbers that matter

- **Output, in watts (W)** — the most power the unit can deliver at once. If your devices draw more than this together, the power station shuts off. Motors like furnace blowers and fridge compressors also need a brief **surge** when they start.
- **Capacity, in watt-hours (Wh)** — how much energy is stored. This decides **how long** things run.

A useful rule: **output decides *what* you can run; capacity decides *for how long*.**

## The formula

> **Capacity needed (Wh) = average draw (W) × hours ÷ 0.765**

That 0.765 accounts for the reserve the battery keeps (we assume 90% is usable) and inverter losses when converting to household power (we assume 85% efficiency). It's the same assumption our [winter runtime calculator](/tools/winter-runtime-calculator/) uses.

"Average draw" matters because many appliances cycle on and off. A fridge's compressor might draw 150 W when running but average under 50 W across a day. Your fridge's **EnerGuide label** gives you the annual kWh — divide by 8,760 to get its average watts.

## Three worked examples

These use typical numbers. Swap in your own from nameplates and EnerGuide labels.

### 1. Essentials only — lights, internet, phones

| Load | Average draw |
|---|---|
| Wi-Fi router + phone charging | 25 W |
| A few LED lights | 30 W |
| **Total** | **55 W** |

**For 12 hours:** 55 W × 12 ÷ 0.765 ≈ **860 Wh**. A unit around 1,000 Wh covers a night comfortably. Output needs are tiny — almost any power station works.

### 2. Essentials + the fridge

Add a fridge rated 400 kWh/year on its EnerGuide label (about **46 W** on average): total ≈ **101 W**.

**For 12 hours:** 101 W × 12 ÷ 0.765 ≈ **1,580 Wh**. You also need at least 1,000 W of output to handle the compressor starting. A ~1,000 Wh unit gets you partway there — or all the way if you cycle the fridge rather than running it nonstop. [Here's how](/home-backup/how-long-will-a-power-station-run-a-fridge/).

### 3. Essentials + fridge + furnace blower

Add a furnace blower drawing 450 W that runs about half the time on a cold night (**225 W** average): total ≈ **326 W**.

**For 8 hours overnight:** 326 W × 8 ÷ 0.765 ≈ **3,400 Wh**. Output should be 1,500 W or more to cover startup surges.

That's more than any single ~1,000 Wh unit holds, which is why people who want furnace backup usually go one of three ways:

1. **An expandable power station** with add-on batteries.
2. **Run the furnace in shifts**, letting the house cool a little between runs.
3. **Pair a power station with a generator** run safely outdoors in daylight — see [power station vs generator](/home-backup/power-station-vs-generator-winter-outage/).

Also check whether your furnace has an **ECM (variable-speed) blower** — they often draw far less than older motors, which can cut the capacity you need dramatically. Our [furnace guide](/home-backup/power-station-furnace-power-outage/) shows how to read the nameplate.

## Don't forget the cold

Every number above assumes the power station sits in a **heated room**. A cold battery delivers noticeably less energy, and most lithium units won't recharge below 0°C. Some stop working entirely around −10°C. Check the limits for each model in our [cold-weather spec database](/tools/cold-weather-power-station-specs/).

## Quick sizing cheat sheet

| What you want to run | Output (W) | Capacity (Wh) |
|---|---|---|
| Phones, lights, router overnight | 300+ | 500–1,000 |
| Add a CPAP overnight | 300+ | 500–1,000 |
| Add a fridge for ~12 hours | 1,000+ | 1,000–1,600 |
| Add a furnace blower overnight | 1,500+ | 3,000+ or expandable |

Ready to compare models? Plug your own devices into the [winter runtime calculator](/tools/winter-runtime-calculator/), or see our picks for the [best power stations for a winter outage](/home-backup/best-power-station-winter-power-outage/).
