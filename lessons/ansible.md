---
path: "/ansible-as-a-workstation"
title: "Ansible as a Workstation"
order: "10A"
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

## Ansible as your workstation
My configuration can be found here:
[ThePrimeagen's Ansible](https://github.com/ThePrimeagen/ansible)
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

### Docker Ubuntu
For testing purposes I use docker to ensure that when I get a clean system I
have all my installs properly setup

```
FROM ubuntu:focal
ARG TAGS
WORKDIR /usr/local/bin
ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y software-properties-common && apt-add-repository -y ppa:ansible/ansible && apt update && apt install -y curl git ansible build-essential
CMD ["sh", "-c", "ansible-playbook $TAGS local.yml"]
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

### The Hello, World of Ansible

If you want to work along you have to install ansible

#### Windows WLS2 / Ubuntu / Deb

```
apt-add-repository -y ppa:ansible/ansible
sudo apt update
sudo apt install -y software-properties-common curl git ansible build-essential
```

#### OSX
[OSX Guide](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-macos)
* use `pip`

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

#### The Ansible Outline
```
- hosts: localhost
  become: true
  pre_tasks:
    - name: update repositories
      apt: update_cache=yes
      changed_when: False
  tasks:
    - ...
```

To run ansible you simply do:
```
ansible-playbook local.yml --ask-become-pass
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

#### Tasks

```
- hosts: localhost
  become: true
  pre_tasks:
    - name: update repositories
      apt: update_cache=yes
      changed_when: False
  tasks:
    - name: Install Node
      apt: name=nodejs
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

#### That would become cumbersome quickly!
That would be terrible right?

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


#### ansible-repository/local.yml
```
- hosts: localhost
  become: true
  pre_tasks:
    - name: update repositories
      apt: update_cache=yes
      changed_when: False
  tasks:
    - include: tasks/node-setup.yml
```
#### ansible-repository/tasks/node-setup.yml
```
- name: Install node & npm
  apt: name={{item}}
  with_items:
    - nodejs
    - npm
- name: Install N
  npm:
    name: n
    global: yes
- name: Install correct version of Node
  shell: n 14
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

### Tags
This makes testing easy and setup easy

#### ansible-repository/tasks/node-setup.yml
```
- name: Install node & npm
  apt: name={{item}}
  with_items:
    - nodejs
    - npm
  tags:
    - node
- name: Install N
  npm:
    name: n
    global: yes
  tags:
    - node
- name: Install correct version of Node
  shell: n 14
  tags:
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

### Now this is awesome... but SSH?

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

### ansible vault
will encrypt / decrypt any regular file.

```
cp ~/.ssh/id_rsa ~/ansible/.ssh
ansible-vault encrypt .ssh/id_rsa
```

Now I can commit this to a public repo.

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

```yml
- name: Install a private SSH key
  vars:
    source_key: "{{ lookup('env', 'HOME') }}/ansible/.ssh/id_rsa"
    dest_key: "{{ lookup('env', 'HOME') }}/.ssh/id_rsa"
  tasks:
  - name: Ensure .ssh directory exists.
    file:
      dest: "{{ dest_key | dirname }}"
      mode: 0700
      owner: user
      state: directory
  - name: Install ssh key
    copy:
      src: "{{ source_key }}"
      dest: "{{ dest_key }}"
      mode: 0600
      owner: user
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

### My setup
[https://github.com/ThePrimeagen/ansible](https://github.com/ThePrimeagen/ansible)

### The install script
[My Install Script](https://raw.githubusercontent.com/ThePrimeagen/ansible/master/ansible-run)

```
curl https://raw.githubusercontent.com/ThePrimeagen/ansible/master/ansible-run | bash
```
