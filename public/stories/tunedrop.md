# TuneDrop: Rapid MVP With Real-Time Feedback

![TuneDrop interface screenshot](../Assets/Projects/tunedrop.png)

This side project began as a weekend thought: "How fast can someone turn a YouTube link into a usable audio download without touching the terminal?"

## Hypothesis In One Sentence

If the conversion felt instant and transparent, creators would trust the tool enough to use it between creative sessions.

## Blueprint

1. **Core API race.** I integrated a RapidAPI endpoint and wrapped responses in a cache to dodge rate spikes.
2. **Theme memory.** Local storage remembers the user's dark/light preference, so the UI feels personal.
3. **Toast-driven UX.** Success and failure states push real-time toast alerts; users rarely wonder if something failed silently.

## Shipping Timeline

- Day 1: Skeleton React app + success path.
- Day 2: Error handling, theme persistence, and custom spinner.
- Day 3: Quick polish, deploy, and user feedback loop via simple survey link.

## What Ended Up Matter Most

- Simple URLs encourage sharing. `/tunedrop` became easy to reference in online chats.
- Analytics showed peak usage at night—so I tuned the UI for better contrast.
- Real-time toasts made debugging API hiccups almost fun.

---

_Stack:_ React • RapidAPI • react-hot-toast • Vercel

_Try it:_ `/tunedrop`
