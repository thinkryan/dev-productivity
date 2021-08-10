---
path: "/dotfile-management"
title: "Dotfile Management!"
order: "21A"
section: "Computer"
description: "Dotfiles can really suck to manage..."
icon: "dumpster-fire"
---

### What is the problem we are solving?

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

(neo)vim -> .vim/ or .vimrc or .config/nvim/\* <br />
tmux     -> .tmux-config or .config/tmux/...  <br />
...  <br />

What if you want to add more programs?  You got to the required spot and add
the config.

But what about persisting or sharing?

Need store them in git
from git -> the dotfile locations

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

### There are two solutions you should try!
* yadm
* stow

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

### YADM
* repo, in the shape of your dotfiles, and it will install them for you
![YADM HomePage](./images/yadm.png)

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

```
.config/
  nvim/
    init.vim
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

```
yadm clone git@github.com:ThePrimeagen/dotfiles
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

```
.config/
  nvim/
    plugins/
      lsp.vim
    init.vim
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

```
yadm add .config/nvim/plugins/lsp.vim
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

I have never really liked this adding.  I find it to be cumbersome because you
have to inspect the state of your repo to know what you have and have not
added.
