---
title: "Running a Furnace on a Power Station During a Winter Outage"
seoTitle: "Can a Power Station Run a Furnace? Winter Outage Guide"
description: "How to keep your furnace running with a portable power station when the power goes out in winter — sizing, safe connections and what to avoid."
template: guide
publishDate: 2026-09-29
faqs:
  - q: "Can a portable power station run a gas furnace?"
    a: "Yes, in many cases. A gas furnace burns gas for heat but needs electricity for the blower fan, igniter and controls. A power station with enough output to handle the blower's startup surge can run it for a number of hours depending on capacity."
  - q: "How do I connect a furnace to a power station?"
    a: "If your furnace plugs into a regular outlet, you may be able to plug it into the power station directly. Most furnaces are hard-wired, which means you need a transfer switch or a dedicated inlet installed by a licensed electrician. Never backfeed power into your home through a wall outlet."
  - q: "Is it safe to run a power station indoors?"
    a: "Battery power stations produce no exhaust, so they're far safer indoors than fuel generators — which must never be run inside, in a garage, or near windows because of carbon monoxide. Keep vents clear and follow the manufacturer's instructions."
  - q: "How long will a power station run my furnace?"
    a: "It depends on your blower's wattage, how often the furnace cycles, and the power station's capacity. Our winter runtime calculator estimates it using your numbers."
sources:
  - title: "Jackery Explorer 1000 v2 — official specifications (operating and charging temperatures)"
    url: "https://ca.jackery.com/products/jackery-explorer-1000-v2-portable-power-station"
todo:
  - "Add a Canadian electrical safety source (e.g. your provincial electrical safety authority's guidance on generators and transfer switches) and a CO safety source (e.g. Health Canada)."
  - "A photo of a furnace nameplate (your own furnace is fine) would help readers find their blower amps."
---

When the power goes out in January, the furnace stops — not because it's out of gas, but because the blower fan, igniter and control board all need electricity. A portable power station can keep them running, and it doesn't create the carbon monoxide risk of a fuel generator. Here's how to do it properly.

## Step 1: Find out what your furnace draws

Open the furnace's front panel and look for the nameplate sticker. You're looking for the blower motor's rating, usually in amps (A) or full-load amps (FLA). Multiply amps by 120 to estimate watts. A blower rated at 4 A draws roughly 480 W while it's running.

Two things change the picture:

- **Motor type.** Older furnaces often have PSC motors that draw several hundred watts. Newer high-efficiency furnaces often have ECM (variable-speed) motors that draw much less, especially at low speed.
- **Cycling.** Your furnace doesn't run the blower nonstop. On a very cold night it might run half the time or more; on a milder night, much less.

## Step 2: Size the power station

You need two things:

1. **Enough output (watts)** to handle the blower's startup surge plus anything else running at the same time. For most furnaces, 1,500 W or more gives comfortable headroom.
2. **Enough capacity (watt-hours)** to last as long as you need. A blower averaging 225 W over its on-off cycle uses about 225 Wh per hour — plus inverter losses.

Plug your numbers into the [winter runtime calculator](/tools/winter-runtime-calculator/). It shows how long each model would last with your loads.

## Step 3: Connect it safely

This is the part not to improvise.

- **Plug-in furnaces:** some furnaces connect with a regular plug. If yours does, you can plug it into the power station.
- **Hard-wired furnaces (most of them):** you need a **transfer switch** or a **dedicated inlet** installed by a licensed electrician. This lets you disconnect the furnace from the grid and power it safely from the power station.
- **Never backfeed.** Plugging a power station into a wall outlet with a "suicide cord" to power house circuits is illegal in many places, can damage equipment, and can electrocute utility workers repairing the lines.

## Step 4: Keep the power station warm

Put the power station inside the heated part of the house, not in the garage. Most lithium power stations won't charge below 0°C, and some stop working at around −10°C. See the limits for each model in our [cold-weather spec database](/tools/cold-weather-power-station-specs/).

## Stretching your runtime

- Lower the thermostat a few degrees — the blower cycles less.
- Close off rooms you don't need to heat.
- Run the fridge on the same power station only if you have capacity to spare; a well-sealed fridge stays cold for hours unplugged.
- If power returns briefly, recharge immediately.

## Which power station?

Our pick for furnace backup is the [EcoFlow DELTA 3 Plus](/power-stations/ecoflow-delta-3-plus/) for its output and expandable capacity. See all our options in [best power stations for a winter power outage](/home-backup/best-power-station-winter-power-outage/).
