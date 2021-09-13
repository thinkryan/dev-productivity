---
path: "/shell"
title: "Your shell"
order: "30A"
section: "CLI - Beginning"
description: "The shell.  The entrypoint."
icon: "dumpster-fire"
---

### A nice terminal experience starts with the shell
We don't need to spend a lot of time here.  There are a ton of options, again,
but this time I will make a strong suggestion.

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

### Strongly suggest zsh
* its default on mac, something at least they have done right
* its easy to install on ubuntu

```
sudo apt install zsh
chsh -s $(which zsh)
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

### But what is a shell?
The [Wizard](https://www.youtube.com/user/lastmiles) talk for a bit.  He gets
banned from twitch regularly, so..... that link is to his youtube.
[SomeCodingGuy](https://twitch.tv/SomeCodingGuy) Just knows things.

```
# you meant ls -la
ls -;a
```

* Don't forget to draw :)
* Do the `ps -o pid,ppid= -C zsh` example

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

### Shell can be great
A lot of point counter point talk on the internet for bash vs zsh vs tsh vs bsh
vs fish

* I am just going to give you what I like

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

### OhMyZsh
YES I ADMIT IT.

* How to install
```
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
```

So what do I get out of oh-my-zsh?
* Open up .zshrc and go to lines plugins

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

### Personal Opinion
* Choose something
* Learn about it to some small amount
* Get good at core utils

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

### Apply what you have learned
Lets say you decide, yes I want zsh and oh my zsh.  What should you do?

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

PUT IT IN YOUR ANSIBLE

#### Fun side note
I actually forgot to do it for myself and so when I originally executed this I
didn't have zsh-autosuggestions installed.  Took a moment to figure it out.

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
