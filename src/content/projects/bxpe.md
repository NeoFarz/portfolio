---
title: "Berkeley eXtensible Processing Engine (BXPE)"
summary: "An FPGA-based edge network processing pipeline for real-time scientific data processing at 100GbE link rates, developed in collaboration with ESnet."
tags: ["FPGA", "100GbE", "Edge Computing", "Real-time Processing", "Co-design", "ESnet"]
featured: true
order: 95
date: "2020–2022"
---

## Overview

The Berkeley eXtensible Processing Engine (BXPE) is an FPGA-based edge network processing pipeline designed for real-time data processing using hardware/software co-design principles. Developed in collaboration with ESnet at Lawrence Berkeley National Lab, BXPE enables scientific instruments to process data at 100 Gigabit Ethernet link rates.

## Key Features

- **100GbE Processing**: Ingest and process data from scientific instruments at full 100 Gigabit Ethernet line rate
- **Co-design Approach**: Hardware/software co-design for optimal performance and flexibility
- **DSP Integration**: Leverages FPGA DSP engines for compute-intensive operations
- **Real-time Analysis**: Enables on-the-fly data reduction and analysis at the network edge

## Applications

### National Center for Electron Microscopy (NCEM)
- Implemented Center-of-Mass computation using FPGA DSP engines
- Real-time processing of electron microscopy data streams

### Advanced Light Source (ALS)
- Implemented Convolution computation for beamline data
- High-throughput image processing at detector speeds

## Collaboration

BXPE was developed in collaboration with ESnet (Energy Sciences Network), working directly with scientists at NCEM and ALS to address their real-time data processing needs.

## Impact

BXPE demonstrates the potential of FPGA-based edge computing for scientific applications, enabling new experimental capabilities that require immediate data feedback and reduction at unprecedented data rates.
