---
title: "Berkeley eXtensible Environment (BXE)"
summary: "An LBNL-hosted, FPGA-based computer architecture simulation environment built on FireSim and Chipyard for extensive architecture research."
tags: ["FPGA", "RISC-V", "FireSim", "Chipyard", "UPC++", "Cloud Infrastructure"]
featured: true
demo: "https://lbnlcomputerarch.github.io/bxe/"
order: 100
date: "2021–Present"
---

## Overview

The Berkeley eXtensible Environment (BXE) is an LBNL-hosted, FPGA-based computer architecture simulation environment. Built on the [FireSim](https://fires.im/) and [Chipyard](https://chipyard.readthedocs.io/) frameworks developed by UC Berkeley Architecture Research, BXE enables researchers to perform extensive architecture simulation utilizing LBNL's FPGA cluster.

## Key Contributions

- **Infrastructure Deployment**: Created and deployed the BXE infrastructure, providing a cloud-based computer architecture simulation environment
- **RISC-V Benchmarking**: Ported and analyzed program benchmarks on the RISC-V ISA using FireSim
- **UPC++ RISC-V Support**: Added support for the RISC-V ISA to UPC++, enabling parallel programming on simulated architectures

## Technology Stack

- **Chipyard**: Open-source SoC design framework for custom RISC-V processors
- **FireSim**: FPGA-accelerated cycle-exact hardware simulation
- **FireMarshal**: Custom workload generation for simulations
- **RISC-V**: Open instruction set architecture

## Funding

This research is based upon work supported by the Office of the Director of National Intelligence (ODNI), Intelligence Advanced Research Projects Activity (IARPA), through the Advanced Graphical Intelligence Logical Computing Environment (AGILE) research program, under Army Research Office (ARO) contract.

## Resources

- [BXE Documentation](https://lbnlcomputerarch.github.io/bxe/docs/)
- [FireSim Documentation](https://docs.fires.im/)
- [Chipyard Documentation](https://chipyard.readthedocs.io/)