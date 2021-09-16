---
path: "/ansible-as-a-workstation"
title: "Ansible"
order: "8A"
section: "Jump Start"
description: "Downloading all that you forgot"
icon: "dumpster-fire"
---

### When I started this talk I thought this was the worst part
THE MOST BORING

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

### The Problem Statement
* I have new computer (not a problem) and I want zsh installed (the problem)

```
sudo apt install zsh
```

```
# the thing we forget to do
chsh -s `which zsh` # when typing this I did chsh zsh
```

Please don't make fun of me.  oh-my-zsh does give you a -1 BTW

```
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
```

Add autosuggest to the plugins

```
plugins=(git zsh-autosuggestions)
```

```
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions
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

### The Problem Statement
I have a new computer (it is the problem)

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

Installing the things I need

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

SSH Keys???

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

### So if only there was a solution to all of these problems.

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

### ANSIBLE!!
Isn't that a cloud configuration thing??  Something like Koobernetes?

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

### So lets talk about the anatomy of ansible
Top Level
```
- hosts: localhost
  become: true
  pre_tasks: ...
  vars: ...
  tasks: ...
```

Task
```
- name: string
  _SOME_ACTION_
  tags:
    - list
    - of
    - tags
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

### Lets create the zsh install but with ansible

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

* Install nodejs and npm
* Install n node manager

#### NOTE!!
```
  ...
  - name: Update cache
    apt:
      update_cache: true
  ...
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

### BUT I HAVE SO MANY TASKS!!!

You can reduce the main file by having task files! Lets do that plus add some
more programs.

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

### Ohh wait

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

### You can see where this is going.
Every time you do some installation of a new item, put it in ansible.  Install
it through ansible, add tags, etc etc.

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

### But Prime you told me this was exciting.

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

### SSH?

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

### Lets change gears a bit!
SSH Keys.  The worst thing ever.  The best thing ever.<br/>

Ansible comes with something called `ansible-vault`.  My guess is that this
will be the greatest thing you take away from today. <br />

Lets learn by example!  Lets encrypt and decrypt shortly.

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

### Decrypting... is always manual?
no.

Here is the _exact_ (well sort of) code that I use to work with vault'd items.

```
# local.yml
  ...
  vars:
    source_key: "./.ssh/id_rsa"
    dest_key: "{{ lookup('env', 'HOME') }}/.ssh/id_rsa"
  ...
```

```
# ssh file
- name: Ensure .ssh directory exists.
  become_user: root
  file:
    dest: "{{ dest_key | dirname }}"
    mode: 0700
    state: directory
  tags:
    - dotfiles
    - ssh
- name: Install ssh key
  become_user: root
  copy:
    src: "{{ source_key }}"
    dest: "{{ dest_key }}"
    mode: 0600
  tags:
    - dotfiles
    - ssh
- name: Set authorized key took from file
  authorized_key:
    user: "{{ lookup('env', 'USER') }}"
    state: present
    key: "{{ lookup('env', 'HOME') }}/.ssh/id_rsa.pub"
  tags:
    - dotfiles
    - ssh
```

```
# clone down the dotfiles and recurse the submodules (which are private)
- name: Cloning .dotfiles
  ansible.builtin.git:
    repo: 'git@github.com:ThePrimeagen/.dotfiles.git'
    dest: "{{ lookup('env', 'HOME') }}/.dotfiles"
    recursive: yes
    update: yes
    accept_hostkey: yes
    version: master
  tags:
    - dotfiles
```

```
ansible-playbook -t dotfiles local.yml --ask-become-pass --ask-vault-pass
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

### Bonus Content

So we talked about the vault.  What else could we vault other than ssh keys?

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

![Authenticator](./images/authenticator.png)

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

### How did you just dotfile that easy?

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
