---
path: "/ansible-as-a-workstation"
title: "Ansible as a Workstation"
order: "20A"
section: "Computer"
description: "Downloading all that you forgot"
icon: "dumpster-fire"
---

### The Problem Statement
* New computer.  Whether from new job or personal, this is a categoric time
  suck.

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

SSH Keys?

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

For us that build our own editors, other software, etc etc.  Can you name the
toolchain?

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

Lets look to the cloud.<br />
** in steps ansible **

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

What is ansible?

Ansible is a way to create a system the way you want it.<br />
Ansible has capabilities for secure storage.<br />
Ansible isn't just for cloud configuration, it can be used for desktop setup.<br />
<br />
<br />
A more practical sense, here is an example.
```
- name: Install node & npm
  apt: name={{item}}
  with_items:
    - nodejs
    - npm
  tags:
    - all
    - node
- name: Install N
  npm:
    name: n
    global: yes
  tags:
    - all
    - node
- name: Install correct version of Node
  shell: n 14
  tags:
    - all
    - node
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

### What did you download?
One easy way is to get your history.
```bash
history 0 | grep "\(sudo apt install\)\|\(sudo apt purge\)"
```
