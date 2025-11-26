---
title: "Architecture Simulation Framework"
summary: "Custom simulation infrastructure for evaluating computer architecture designs, enabling rapid prototyping and performance analysis of novel HPC systems."
tags: ["Python", "C++", "Simulation", "Computer Architecture", "Performance Analysis"]
featured: true
order: 90
date: "2019-Present"
---

## Overview

A comprehensive simulation framework developed for evaluating computer architecture designs at Lawrence Berkeley National Lab. This infrastructure enables researchers to rapidly prototype and analyze performance characteristics of novel HPC systems before committing to hardware implementation.

## Capabilities

- **Cycle-accurate simulation** for detailed timing analysis
- **Functional simulation** for rapid design space exploration
- **Integration with RTL** for validation against hardware implementations
- **Extensible plugin architecture** for custom components

## Use Cases

The framework has been instrumental in evaluating:

- Memory hierarchy designs for scientific workloads
- Interconnect topologies for large-scale systems
- Domain-specific accelerator architectures
- Power and performance trade-offs

## Technical Implementation

Built using a combination of Python for high-level orchestration and C++ for performance-critical simulation kernels. The modular design allows components to be easily swapped and configured for different experimental setups.
