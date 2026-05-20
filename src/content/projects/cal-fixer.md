---
title: 'Calendar Fixer'
description: 'A program to fix the wrongly generated schedule calendars from the GO OHIO app.'
repo: 'https://github.com/kylecarey2/daylight-savings-cal-fixer'
tags: ['c++', 'makefile']
featured: false
date: 2024-11-00
---

# About

The [Go Ohio app](https://go.ohio.edu) (a university class scheduling application) generates iCal files for class schedules that do not correctly account for daylight saving time. This program fixes the issue by adding the proper timezone information (TZID:America/New_York) and adjusting the class time information from UTC to Eastern Time (EST/EDT).

One morning, I was late to class because I thought that I had another hour until class started (according to my calendar). I found out that the iCal file that was generated for me did not accurately account for the daylight change. So, I went ahead and researched iCal file formats, wrote a short little program to fix it, and have been using it ever since to fix my, and others, generated schedules at the beginning of each semester. I had a problem and so I decided to go fix that problem.

# More Information

If you have this problem too, instructions are on the [GitHub](https://github.com/kylecarey2/daylight-savings-cal-fixer) for how to use it.

> Note: You must have a Unix based operating system and a C++ compiler to compile this
