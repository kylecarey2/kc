---
title: 'Weighted Items'
description: 'A C++ library that allows you to create items with weight to test random algorithms.'
repo: 'https://github.com/kylecarey2/weighted-items'
tags: ['c++', 'makefile']
featured: false
date: 2025-03-17
---

# About

This project was my brain child over spring break my freshman year. I worked on this because I was slightly frustrated with how room selection happened at Ohio University (I got a bad pick time). So, I created this project to try and figure out how many cases I would have gotten that pick time if the university took things like GPA, course schedule, events, etc. into consideration when making pick times.

It just so happened that we were learning about templates in _CS 2401_. So, I took this opportunity to learn more about template classes and types in C++. This gave me a good understanding for the class. I also designed this with the fact that someone else may want to use this in mind, so I got to write some documentation for the first time with that in mind.

# Usage

A small demo of this "library" in action:

```cpp
#include "WCont.h"
#include <string>
std::srand(time(NULL));

WeightedItem<std::string> item1;
WeightedItem<double> item2(24.5, 5); // Holds 24.5 with a weight of 5
item1.set_data("Hello World"); // Data it holds is "Hello World"
item1.set_weight(25); // Has a weight of 25

WeightedItem<std::string> item3("GoodBye World", 5);
WCont<std::string> container;
container.add(item1); // Adds item1 to container
container.add(item3); // Adds item3 to container
container.remove(item1); // Removes item1 from container
```

# More Information

The code and documentation is available on [GitHub](https://github.com/kylecarey2/weighted-items) if you have a similar use case.
