---
title: "OpenSoC Fabric"
summary: "A parameterizable and powerful on-chip network generator for evaluating future high performance computing architectures based on SoC technology."
tags: ["Chisel", "Scala", "Network-on-Chip", "HPC", "FPGA"]
featured: true
github: "https://github.com/LBL-CoDEx/OpenSoCFabric"
paper: "https://doi.org/10.1109/ISPASS.2016.7482094"
order: 90
date: "2014–2018"
---

## Overview

OpenSoC Fabric is a parameterizable network-on-chip (NoC) generator designed for high-performance computing applications. As part of the CoDeX project at Lawrence Berkeley National Lab, this project enables researchers to rapidly prototype and evaluate different interconnect architectures. Written in Chisel and modeled after existing state-of-the-art simulators.

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

## Publications

- F. Fatollahi-Fard, D. Donofrio, G. Michelogiannakis and J. Shalf, "OpenSoC Fabric: On-chip network generator," 2016 IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS), Uppsala, 2016, pp. 194-203. doi: <a href="https://doi.org/10.1109/ISPASS.2016.7482094" target="_blank">10.1109/ISPASS.2016.7482094</a>

## Impact

OpenSoC Fabric has been used in multiple research projects exploring novel interconnect designs for domain-specific accelerators and next-generation HPC systems. A tutorial on OpenSoC was presented at the 8th International Symposium on Networks-on-Chip (NOCS2014).
