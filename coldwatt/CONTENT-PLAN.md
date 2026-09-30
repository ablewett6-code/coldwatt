# Content plan — next 20 articles

Priorities: pages people search right before buying (roundups, comparisons, "can X run Y"), and tools/data that attract links. Publish 2–3 a week through October and November — winter outage searches peak from late fall through February.

Each line: **template** · target search · notes.

## Wave 1 — before the first cold snap (Oct)

1. **guide** · "how long will a power station run a fridge" · Embed the calculator. Simple, high-intent.
2. **guide** · "power station vs generator for power outage" · Big search. Honest pros/cons; stress CO safety of fuel generators.
3. **roundup** · "best power station for CPAP" · Clear use case, strong buyer intent.
4. **guide** · "transfer switch for portable power station furnace" · Explain options; always "hire a licensed electrician."
5. **roundup** · "best large power station for home backup" (2,000 Wh+) · Needs 4–5 larger models added to products.json first.
6. **vs** · "EcoFlow vs BLUETTI" · Only once you have comparable-size models from each.

## Wave 2 — peak season (Nov–Dec)

7. **guide** · "how to keep a power station warm in winter camping" · Insulation, tent placement, ventilation.
8. **tool** · "power station size calculator" · Reverse of the runtime calculator: enter loads + hours → required Wh. Reuse the calculator code.
9. **roundup** · "best solar generator for cabin" · Needs solar panels added to products.json.
10. **guide** · "what size solar panel to charge a power station in winter" · Use PVWatts figures, show your working.
11. **guide** · "can you leave a power station in a cold car / truck" · Easy win once the spec database has 15+ models.
12. **vs** · "Jackery vs Anker SOLIX"
13. **guide** · "winter power outage checklist Canada" · Link-worthy; covers power, heat, water pipes, food. Link out to government preparedness resources.

## Wave 3 — expand (Jan+)

Turn on the next topic phase by setting `ACTIVE_PHASE = 2` in `src/site.config.ts` (adds **Vehicle Power**).

14. **guide** · "truck camper power setup for winter"
15. **roundup** · "best power station for van life in winter"
16. **guide** · "can a power station run a diesel heater" (tiny draw — good news article)
17. **guide** · "LiFePO4 vs lithium-ion (NMC) for cold weather"
18. **roundup** · "best self-heating lithium battery" · Only if you find 3+ with sourced specs.

Then `ACTIVE_PHASE = 3` (adds **Cold-Weather Gear** — heated apparel pays ~10%):

19. **roundup** · "best heated jacket for Canadian winter" (research-based)
20. **guide** · "how long do heated jacket batteries last in the cold"

## Writing rules (keep the site trustworthy)

- Never say or imply "we tested" unless you did. Use "according to [brand]'s spec sheet," "owners report," "on paper."
- Every spec links to its official source.
- Paraphrase owner reviews in your own words; don't copy them.
- One clear recommendation per use case, and say who should *not* buy something.
- Update `updatedDate` whenever you meaningfully revise a page.
