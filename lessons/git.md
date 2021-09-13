---
path: "/git"
title: "Git - The cool parts"
order: "50A"
section: "git - Fun"
description: "How to use git to the max"
icon: "dumpster-fire"
---

The majority of you know about git is likely push / pull / rebase.  There is a
ton more, but today I wanted to focus on one of the most underrated git
features out there.  Git work trees, some log searching techniques, and reflog.

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

### Git worktrees

So what is a work tree?

There are a lot of ways in which work trees are used, but I am going to show
you how I work with them.  Now you may want to read up on the other strategies
if this is going to be something you use.

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

First, checking out maybe a bit different than you are use to.  You are going
to use the `--bare` option when checking out.

```
git clone --bare git@github.com:ThePrimeagen/refactoring.nvim.git refactoring.nvim
```

Notice that I did name my checkout.  When using `--bare` I notice that it
always includes the `.git` in the folder name.

![Bare Repo](./images/bare-repo.png)

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

So what do we have available?

```
git worktree list
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

Lets check out the man page

```
man git-worktree
```

The first paragraph gives you the information you need to know, but a way I
streamline getting the exact commands to run is using cht.sh

```
curl cht.sh/git~worktree
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

Let's go over some use cases to showcase the differences.

* check out branch
* list branches
* edit branch
* check out another branch
* make changes
* stashing
* rebasing

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

* Pros and cons

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

### Log searching

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

### Some basic examples

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
