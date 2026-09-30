---
title: "Can You Charge a LiFePO4 Battery Below Freezing?"
description: "Why most lithium power stations won't charge below 0°C, what happens if they do, and five practical ways to keep charging through a Canadian winter."
template: guide
publishDate: 2026-09-29
faqs:
  - q: "What happens if you charge LiFePO4 below 0°C?"
    a: "Charging a frozen lithium battery can cause lithium plating: metallic lithium builds up on the anode instead of being absorbed into it. That permanently reduces capacity and, in severe cases, can create internal short circuits. That's why most battery management systems block charging in the cold."
  - q: "Can a LiFePO4 battery be used (discharged) below freezing?"
    a: "Generally yes, within the manufacturer's rated range — often down to around −10°C to −20°C depending on the product. You'll get less usable energy while it's cold. Check the specific model's operating temperature before relying on it."
  - q: "Do self-heating lithium batteries work?"
    a: "Some batteries include a built-in heater that warms the cells before allowing a charge, drawing a little energy from the charger to do it. They're a practical fix for cabins and vehicles that stay cold. Check the spec sheet for a 'self-heating' or 'low-temperature charging' feature."
  - q: "Is it dangerous to store a power station in the cold?"
    a: "Storage in the cold is usually fine within the manufacturer's storage range, which is often wider than the operating range. Store it partially charged, and let it warm to room temperature before charging it."
sources:
  - title: "Jackery Explorer 1000 v2 — official specifications, including charging temperature range"
    url: "https://ca.jackery.com/products/jackery-explorer-1000-v2-portable-power-station"
todo:
  - "Add 1–2 authoritative sources on lithium plating (e.g. a battery maker's technical note or a university/national lab explainer)."
---

**Short answer: usually not.** Most LiFePO4 (lithium iron phosphate) batteries — the kind inside most modern power stations — shouldn't be charged below 0°C (32°F). Many power stations enforce this automatically and simply refuse to charge when they're cold. Using them in the cold is a different story, and that's where people get confused.

## Charging vs. using: two different limits

A lithium battery has two temperature ranges that matter:

1. **Discharge (operating) range** — how cold it can be while powering your devices. This often extends well below freezing.
2. **Charge range** — how cold it can be while being refilled. This almost always stops at or near 0°C.

For example, Jackery publishes an operating range down to −10°C for the Explorer 1000 v2, but a charging range that starts at 0°C. That gap is typical, and it's the detail that ruins winter plans: a power station can happily run your lights in a cold cabin all evening, then refuse to recharge from your solar panels the next morning.

## Why cold charging is a problem

Charging pushes lithium ions into the battery's anode. When the cells are cold, that process slows down, and ions can pile up on the anode's surface as metallic lithium instead of slotting in. This is called **lithium plating**. It permanently steals capacity, and in bad cases the plated lithium can grow into structures that damage the cell from the inside.

Using the battery in the cold doesn't cause plating. It just reduces how much energy you can get out until the battery warms up again.

## Five ways to keep charging through winter

1. **Charge indoors.** The simplest fix for home backup. Keep the unit in the heated part of the house and it never hits its charging limit.
2. **Warm it before charging.** Bring a cold unit inside and give it a few hours to reach room temperature. Don't use a heat gun or put it near a heater.
3. **Insulate it.** In a cabin, tent or vehicle, an insulated box or cooler slows heat loss. The battery generates a little warmth while in use. Keep ventilation clear while it's running.
4. **Choose a self-heating battery.** Some batteries include built-in heaters that warm the cells before accepting a charge. These are the most practical option for cabins and vehicles that stay cold for days.
5. **Charge in the warmest part of the day.** For solar setups, midday is both the sunniest and warmest time, which helps on marginal days.

## How to check a specific model

Look for "charging temperature" in the product's spec sheet or user manual — product pages often leave it out, but manuals usually include it. We track this for popular models in our [cold-weather spec database](/tools/cold-weather-power-station-specs/). If a manufacturer won't publish it, assume the charging limit is 0°C and plan accordingly.

To see how cold affects runtime, try the [winter runtime calculator](/tools/winter-runtime-calculator/).
