# HITMAN™ 3 Countdown

# Install

Github Actions builds a [docker container](https://github.com/Joshua-Noakes1/HITMAN3Countdown/pkgs/container/hitman3countdown) for amd64 (General PC, Mac, Linux, etc), arm64 (M1 Mac, etc) and armv7 (Raspberry PI, SBCs, etc)

## Docker Compose (recomended)

```yml
version: "3.2"
services:
  hitman3countdown:
    image: "ghcr.io/joshua-noakes1/hitman3countdown"
    container_name: "hitman3countdown"
    restart: unless-stopped
    environment:
      TZ: "Europe/London"
      TOKEN: "<DISCORD_TOKEN>"
```

## Docker

```shell
docker run -d --name hitman3countdown --restart=unless-stopped -e TZ=Europe/London -e TOKEN=<DISCORD_TOKEN> ghcr.io/joshua-noakes1/hitman3countdown
```

## Shell (Non-Docker)

1. Clone `https://github.com/Joshua-Noakes1/HITMAN3Countdown.git`
2. Run `npm install` inside the cloned folder
3. Add your Discord bot token inside a .env file under `TOKEN=<TOKEN>`
4. Run `npm start`

# Usage

## /hitman

Running /hitman will return an embed with the amount of time left till Year 2
![https://i.imgur.com/O9zjSty.png](https://i.imgur.com/O9zjSty.png)

## Attributes

- HITMAN™ 3 Media Kit - IO Interactive ([Found Here](https://www.ioi.dk/hitman3mediakit/))
- Photo Editing - Ben Hart ([Found Here](https://github.com/sirbnjmn))
