---
path: "/git"
title: "Git - The cool parts"
order: "45A"
section: "CLI - Fun"
description: "How to use git to the max"
icon: "dumpster-fire"
---

The majority of you know about git is likely push / pull / rebase.  There is a
ton more, but today I wanted to focus on one of the most underrated git
features out there.  Git work trees

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

```
➜  refactoring.nvim git:(master) curl cht.sh/git~worktree
 tldr:git-update-index
# Pretend that a modified file is unchanged (`git status` will not show this as changed):
git update-index --skip-worktree path/to/modified_file

 tldr:git-worktree
# git worktree
# Manage multiple working trees attached to the same repository.
# More information: <https://git-scm.com/docs/git-worktree>.

# Create a new directory with the specified branch checked out into it:
git worktree add path/to/directory branch

# Create a new directory with a new branch checked out into it:
git worktree add path/to/directory -b new_branch

# List all the working directories attached to this repository:
git worktree list

# Remove a worktree (after deleting worktree directory):
git worktree prune
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
