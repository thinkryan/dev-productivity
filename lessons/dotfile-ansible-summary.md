---
path: "/dotfile-system-setup-summary"
title: "Dotfile and System Setup Summary"
order: "22A"
section: "Computer"
description: "What did we learn from all this"
icon: "dumpster-fire"
---

### So what should I do?

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

### YADM + Ansible
There is a setup which you could use both ansible and yadm.  Ansible purely for
installation of workstations and getting up and running then yadm for the
secure key storing + dotfiles.

### Stow + Ansible
Feels a bit more unix philosophy to me.  Ansible for workstation setup, stow
for configuration.  Feels like a nice combo.

### YADM + Install script
This is a viable track to take.  You don't even need to use ansible really if
you just have an install script that works

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

### My summary

As far as I can see YADM doesn't have a spot for me.  Its simplier than
ansible, but it doesn't provide the installation.  Its more complex than stow,
but it doesn't provide simplicity and the separation of concerns.


