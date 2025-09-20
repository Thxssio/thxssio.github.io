# TauraBOTS: Shipping ML From Lab to Live

![Team retro board covered in sticky notes](../Assets/Projects/taurabots.PNG)

> "Research velocity means nothing if delivery is stalled."

## Why This Story Exists

The TauraBOTS collective had a backlog of reinforcement learning agents and zero consistency in how we shipped results. Our mandate: preserve research freedom while guaranteeing production predictability.

## The Operating System We Crafted

- **Paved Pipelines.** Every experiment kicks off from a cookie cutter repo with linting, CI, and dataset versioning baked in.
- **Async Rituals.** Weekly "state of the agent" memos distilled metrics, blockers, and risk notes. Meetings became optional.
- **Two-Speed Branching.** Long-living `research/*` streams push into hardened `ops/*` branches once the metrics and infra checks turn green.

## Lessons Learned

1. **Context is a deliverable.** A model isn't complete until we can re-run the training and explain the control surface succinctly.
2. **Old hardware matters.** Reserving a lower-tier GPU rig exposed bugs that only appear when CUDA throttles.
3. **Ops should be boring.** Automation removed 70% of deployment toil and bought us room to explore more ambitious policies.

---

_Toolbelt:_ Python • PyTorch • Airflow • MLflow • GitHub Actions

_Backstage tour:_ https://www.linkedin.com/pulse/taurabots-ml-production-thxssio-silva/
