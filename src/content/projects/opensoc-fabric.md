---
title: "OpenSoC Fabric"
summary: "A parameterizable network-on-chip generator for high-performance computing systems, enabling flexible interconnect design for domain-specific accelerators."
tags: ["Chisel", "Scala", "Network-on-Chip", "HPC", "FPGA"]
featured: true
order: 100
github: "https://github.com/LBL-CoDEx/OpenSoCFabric"
date: "2020-Present"
---

## Overview

OpenSoC Fabric is a parameterizable network-on-chip (NoC) generator designed for high-performance computing applications. As part of the CoDeX project at Lawrence Berkeley National Lab, this project enables researchers to rapidly prototype and evaluate different interconnect architectures.

## Key Features

- **Parameterizable Design**: Easily configure topology, routing algorithms, and flow control mechanisms
- **Written in Chisel**: Leverages the power of Scala for hardware generation
- **Synthesizable to FPGA**: Deploy on various FPGA platforms for real-world testing
- **Performance Modeling**: Integrated tools for analyzing throughput and latency characteristics

## Technical Details

The NoC generator supports various topologies including mesh, torus, and custom configurations. The modular design allows researchers to swap out individual components such as routers, arbiters, and virtual channel controllers.

### Routing Algorithms
- Dimension-ordered routing (XY, YX)
- Adaptive routing with congestion awareness
- Custom routing table support

### Flow Control
- Credit-based flow control
- Virtual channels for deadlock avoidance
- Priority-based arbitration

## Impact

OpenSoC Fabric has been used in multiple research projects exploring novel interconnect designs for domain-specific accelerators and next-generation HPC systems.
