---
layout: article
title: 100 Days of Linux
description: My experience daily driving EndeavourOS
date: 2025-07-22
tags:
  - Linux
  - OS Rants
---

During my first year of High School I was gifted a Surface Laptop Go to help with my schoolwork. It was a pretty decent laptop with <span title="The cooling on this laptop was atrocious. It was constantly full fan and thermal throttling if you tried to do anything. And the battery life barely lasted a day" style="text-decoration: underline; text-decoration-style: dashed; cursor: help;" >some flaws</span> but for that time in my life it was perfect. Unfortunately 3 years later it had slowed down to a crawl, it's initial startup would take upwards of two minutes and general navigation was becoming tedious.

This is when I had the idea to install Linux to breath some new life into this aging laptop. I had some general experience with Linux before, running Debian 10 through Crostini on ChromeOS to run a few select Linux apps (mostly games) and using Linux in a server setting to power the leaderboard for <a href="/projects/#FeedBluebell">Feed Bluebell</a>, but I'd never "daily driven" Linux as my main OS.

![A screenshot of the Crostini terminal on ChromeOS](/images/100Linux/Crostini.png)
<span class="image-caption">Crostini terminal on ChromeOS</span>

I chose EndeavourOS + KDE Plasma as my Distro of choice since it's basically Arch Linux with a graphical installer and sets up a few extra sane default configurations. I chose an Arch base because of its rolling release model seeming nice after dealing with outdated dependency hell on ChromeOS's outdated Debian and the AUR sounding like a good package distribution model.

I installed EndeavourOS on December 6th 2024 and daily drove that same install for 124 days to April 8th 2025 when I bought a M4 Macbook Air switched over to MacOS. In this blog post I'll talk about the good and the bad with my experience switching from Windows to daily driving Linux.

## The Good
### Pacman / AUR
One of my favourite parts of Linux is it's package management philosophy. Having a centralized repository for 90% of the software for your system just makes sense and is way better than the searching for exe files on random websites for Windows. And since you have all of your software downloaded and tracked from one place you can update your entire system just by running `pacman -Syu` (or `yay` as I did) and everything just updates and live reloads in the background. It's just such an elegant solution that all operating systems should strive for.

![A screenshot of Pacman showing all the packages it's updating](/images/100Linux/ILuvPacman.png)
<span class="image-caption">Upgrade your entire system, in the background, while you work, and it'll only take up an extra 3mb of disk space. Thanks Pacman &lt;3</span>

### Performance
One of the main reasons I finally switched to Linux was to solve some of the terrible performance issues my laptop had on Windows, and I feel confident in saying those were mostly resolved. Overall the system performed much better with the lighter operating system on it, with a specific standout being the boot time which went from >2min to around 15 seconds. A few things did take a performance hit (notably Intel QSV hardware video decoding only worked with Chromium under X11?) But overall performance was much improved by the Linux switch.
### Morals
Linux is Free Open Source Software built by people to serve people, not to serve shareholders. In a world where every software update only seems to make every program worse in order to extract more money from you, it's nice to run an operating system completely removed from that system. Knowing my system was my system designed by people with my best interests at heart <!-- Other than Jia Tan obviously --> is just a nice to have feeling you can't get anywhere else </br>
<span class="small-text"> Well you can get the exact negative of that feeling when trying to save your documents from the all consuming wrath of OneDrive when setting up Windows </span>

## The Bad
### Battery Life
After installing Linux my battery life went from "*Might last the whole day if you're lucky*" to "*This will die in the middle of the day 100% of the time*". This was annoying, but wasn't really a deal breaker because I had already become accustom to charging my laptop halfway through the day.
### Touchpad
This was one of three huge unsolvable issues that tainted my Linux experience the whole time I was using it. The touchpad just felt bad to use, and the especially big problem was the scrolling. First, the scrolling was way too fast, no matter what setting I set it to in setting. Second, and the main problem, on every other touchpad device if you scroll down with speed and release the scroll will keep traveling with inertia, and if you tap it will stop. Try this on any Windows Laptop, MacBook, iPhone, or Android device you have and it'll do this same thing. Not Linux. For some reason Linux doesn't stop the inertia scroll if you put your fingers back on the touchpad. This made navigating any website a pain.
### The 400mhz curse
For some unknown reason if I booted my computer from shutdown when it had less than 10% battery the CPU would be locked to running between 400-700mhz until I rebooted the computer when it was >10% battery. For context this chip has a base clock of 1Ghz and a boost clock of 3.6Ghz, and when running not in this locked mode it would average jumping between 1.5-2.5Ghz. This meant if the computer ever died (which it did often) it would become completely unbearable to use until I waited ~5 minutes for it to charge above 10% battery.
### WiFi Issues
After 3 months into daily driving Linux a weird issue started happening. Randomly about once a day for 5 minutes the WiFi on my laptop would just stop working, it didn't disconnect or show any signs on why it would stop working, it just did. This was unacceptable for the laptop that I was doing all my school work on and was the main thing that pushed me into upgrading to a new MacBook.

## Closing Thoughts
Overall I really enjoyed my time using Linux and while I've upgraded to running MacOS, there are still many things I miss from running linux. I still keep that Linux laptop around too, it's useful whenever I need to read a USB drive or connect to a printer (Linux is *really* good at reading USB drives and connecting to printers)