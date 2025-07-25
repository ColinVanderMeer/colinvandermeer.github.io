---
layout: article
title: 100 Days of macOS
description: The good and bad of the switch to macOS
date: 2025-07-23
tags:
  - macOS
  - OS Rants
---

The first computer I ever used was a 2007 iMac. I used this computer almost exclusively for 11 years straight, only occasionally having an affair with a windows laptop we also had to run games on there that I couldn't on the Mac. In 2018 my family bought it's first desktop gaming computer and I said goodbye to my loyal macOS to jump headfirst into Windows 10.

After that day I didn't touch macOS for the next 6 years of my life. I had a Windows desktop, then a Chromebook, then a Windows laptop which then became a [Linux laptop](/blog/100daysOfLinux/). Though when that Linux laptop was becoming a bit of a pain to work with (see previous article) I heard that the new M4 MacBook Air was $100 USD cheaper and started at 16gb of ram I decided to fully embrace the apple ecosystem and finally go back to macOS.

## The Good
### Phenomenal Hardware and Battery Life
I'm sure by now you've heard how good everyone thinks Apple Silicon is, and it is that good. The way Apple has finely tuned every single piece of macOS to work flawlessly with the rest of it's hardware is as good as everyone says it is. I've never used a more performant laptop or a laptop with battery life this good, and the MacBook manages to do both at the same time.

### App Support
Compared to Linux, macOS has a great library of software. Most modern software is designed to run on macOS since it's the second most popular operating system in the world, and if Apple wants software on their platform they have more than enough money to throw at developers to make it happen. During the switch to Apple Silicon, Adobe released a beta version of Photoshop for Apple Silicon day and date with it's release.

### Spotlight Search / Raycast
I adore Spotlight Search. I always opened apps on Windows by pressing the Windows key and typing the app name. The problem is it would only work half the time, and the other half the time it would open Bing. On macOS this works 100% of the time because of spotlight search. I also use a replacement for the default spotlight search called Raycast which is basically spotlight search on steroids and VC funded. Raycast even states in it's manifest that it's "inspired by early command line interfaces, where you could take any action without the distractions".

One thing I didn't think I'd like in Raycast is it's heavy push of AI, but with some recent updates I've actually started appreciating it. I really like the "Quick AI" that you can access by opening Raycast, pushing tab, and typing whatever you want. It's become a really fast tool for quickly getting general information when I'm trying to code or write something. This feature became actually usable for me when they added "Bring Your Own Key" support which allows you to manually hook Raycast AI up to your own OpenAI / Anthropic / Google API key. And since Google's Gemini API allows you to get Gemini 2.5 Flash for 250 requests free, I never run into any rate limits and I don't have to pay for it.

## The Bad
### Software Updates
Coming from Arch Linux makes macOS update system feel terrible in comparison. Every time I have to wait 10 minutes for my MacBook to install it's new update I miss my package manager that was able to update my entire desktop environment in the background and hot reload it to the new version without me noticing.

### The Cmd (⌘) key
macOS takes what Windows performs perfectly fine on one key and splits it across three different keys. One of the most important ways I navigate text on Windows is by holding the Ctrl key and using the arrows to jump between words, using the shift arrows to select text words at a time, or using the backspace key to delete words at a time. macOS moves this feature to the option (alt) key but keeps all the copying and pasting on the command key. So instead of holding one key when wanting to navigate around and edit text, you have to remember to hold one key and then switch to the other when you want to copy and paste. 

This also means that all of the standard hotkeys for thing on Windows and Linux have been completely reworked to deal with this new modifier key. For instance, opening developer tools on a web browser for Windows and Linux is `Ctrl + Shift + I` whereas on macOS it's `Cmd + Option + I`. Firefox's hotkey to open pip video is `Ctrl + Shift + ]` but on macOS it's `Cmd + Option + Shift + ]` so it doesn't even get changed consistently!

### Gatekeeper
Never before have I had to fight with an operating system so much just to make it run the file I want. macOS is downright determined to prevent you from running any app that isn't properly notarized by Apple. This isn't just "Open System Settings. Click Privacy & Security, scroll down, and click the Open Anyway button." I've run into software that this won't even work on. I have to manually clear all attributes and force my own code signature on it, and if you even open the app once it'll never work even after you do all those things. A "user friendly operating system" shouldn't require users to use the terminal just to open an app.

<image width="50%" style="margin-top: -20px" src="/images/100Mac/gatekeeper.webp">

<span style="display: block; text-align: center; margin-top: -20px;">`xattr -cr <APP> && codesign --force --deep --sign - <APP>` is your friend</span>

## Closing Thoughts
macOS good <image style="height: calc(var(--font-size-base) * 2); vertical-align: middle; display: inline;" src="/images/blobhajParty.gif">