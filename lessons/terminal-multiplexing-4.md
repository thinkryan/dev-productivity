---
path: "/tmux-4"
title: "Tmux - Going Full Amazing"
order: "34A"
section: "CLI - Beginning"
description: "More manageable terminals"
icon: "dumpster-fire"
---

### Awesome plugins
[Tmuxinator](https://github.com/tmuxinator/tmuxinator)<br/>
Tmux sessionizer!
<br />
<br />
[TmuxP](https://github.com/tmux-python/tmuxp)<br/>
Tmux sessionizer!
<br />
<br />
[Tmux Resurrect](https://github.com/tmux-plugins/tmux-resurrect)<br/>
Persist Tmux sessions!

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

### TmuxRC
Location will be `$HOME/.tmux.conf`


```
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix

bind r source-file ~/.tmux.conf

set -g base-index 1

bind -r D neww -c "#{pane_current_path}" "[[ -e TODO.md ]] && nvim TODO.md || nvim ~/dotfiles/todo.md"
```

I had to look this up.  I had to look up most things.

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

### Lets move on and write a tmux script

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

### But, there are some pre-reqs

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
