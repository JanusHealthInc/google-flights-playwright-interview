# Automation Interview Project

An interview question for finding information on the Google Flights website using Playwright.

## Installation

First install dependencies with `npm` or `yarn`:

```bash
npm install
```

OR

```bash
yarn install
```

## Instructions

Create a Node.js program in Javascript/Typescript that uses the Playwright library.

Playwright Documentation: https://playwright.dev/

1. Write solution in `solution.ts`
2. Run with `yarn tbin`

## Basic Requirements

### Step 1

Go to the [Google Flights website](https://www.google.com/travel/flights) and find flights with the following details:

- Type: One way
- Number of Adults: 2
- Class: Economy
- Source Airport: Chicago O'Hare (ORD)
- Destination Airport: Los Angeles International Airport (LAX)
- Pick a date range you like, but update it from the default dates.

### Step 2

Find the flight from the search results with the lowest cost. Get the following information from the flight and write it to a .csv file:

- Price
- Airline
- Time (As it appears on the page is fine)
- Flight Duration

If you can't or don't have time to write it to a file, at least prep the data in a format that could be written to a file.

### Extra Credit:

How would you change things if you wanted to find the three lowest-cost flights?

How might you test this automation for other search details - Talk through this only?
