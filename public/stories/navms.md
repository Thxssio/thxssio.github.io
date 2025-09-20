# NAVMS: Autonomous Flight Beyond GNSS

![NAVMS drone navigating a dense environment](../Assets/Projects/navms.PNG)

_A conduit log from a robotics engineer curious about how far an unmanned system can go without GPS._

## Mission Trigger

When we started NAVMS, we knew GPS degradation would eventually turn into a safety risk for long endurance drones. Oil & gas inspections, security patrols, and emergency response all cross through areas where satellites drop out. Our goal was simple: keep navigation airtight even when GNSS falters.

## Building The Sensing Stack

1. **Stereo Vision First.** We built dense disparity maps with synchronized cameras and OpenCV to maintain spatial awareness regardless of RF noise.
2. **Sensor Fusion Everywhere.** IMU, magnetometer, and barometer stacked inside a ROS2 fusion pipeline gave us state estimates stable enough to trust.
3. **Neural Matching.** We trained a light CNN to align current frames with stored landmarks. That made re-localization resilient even under motion blur.

```python
# pseudo-code for the aligner block
def align_frame(current, memory):
    descriptor = cnn_encoder(current)
    candidates = memory.lookup(descriptor)
    return weighted_pose_estimate(candidates)
```

## Simulation Then Field

- **Gazebo** helped us iterate quickly on edge cases (fog, partial occlusion, heavy drift).
- **Hardware-in-the-loop** validated timings across every sensor.
- **Flight tests** captured the final gaps. We reduced yaw drift by 38% after tuning Kalman gains with real-world turbulence data.

## Takeaways

- Invest early in deterministic logging—debugging multi-sensor fusion without it is almost impossible.
- A tiny CNN beats hand-crafted features once lighting starts shifting hourly.
- The nav stack is now modular enough to plug in underwater thrusters. That extension is next on our list.

---

_Stack:_ ROS2 • Python • C++ • OpenCV • MATLAB/Simulink

_Learn more:_ https://www.linkedin.com/pulse/navms-autonomous-navigation-thxssio-silva/
