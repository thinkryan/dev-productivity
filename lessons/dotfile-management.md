---
path: "/dotfile-management"
title: "Dotfile Management!"
order: "11A"
section: "Computer"
description: "Dotfiles can really suck to manage..."
icon: "dumpster-fire"
---

### What is the problem we are solving?
ask this everytime.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

1.  We want to configure the programs we love with our personal touch.
2.  We want to be able to keep track and commit our changes over time.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

#### Who here knows anything about dotfiles?

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Example of dotfiles
lets do a little example

```
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### We want something that can store and make available our dotfiles

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### There are three solutions that seem to popular
* yadm
* GNU/stow
* dotbot

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### So lets talk about stow
So I think stow is amazing.
* Its very simple
* It only manages symlinks
* Which allows it to be OS and version-able

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### To install and follow along
```
sudo apt install stow
```

```
brew install stow
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### lets do some very basic examples

* Stow'ing.  Some terminology
* Stow'ing our first file.
* Stow'ing our first directory.
* Stow'ing our two directories with similar paths
* UN-Stow'ing
* Stow'ing issues

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### So now that you know.
I just have to know.  How many tingles are you feeling?  I am feeling all of
them.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Lets do a little thought exercise
So lets create our neovim confg

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Lets think about ansible
Lets take a look at my stow configuration

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### I bet you want to talk about vim
I can tell.  You are eager.

![I am a scientist](./images/i-am-science.png)

[Vim Fundamentals](https://frontendmasters.com/courses/vim-fundamentals/)
