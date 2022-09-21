export const serverTypes = [
  {
    type: "Paper",
    api: {
      versions: "https://api.papermc.io/v2/projects/paper/versions/VERSION",
      download:
        "https://api.papermc.io/v2/projects/paper/versions/VERSION/builds/BUILD/downloads/paper-VERSION-BUILD.jar",
    },
    versions: [
      "1.19.2",
      "1.18.2",
      "1.17.1",
      "1.16.5",
      "1.15.2",
      "1.14.4",
      "1.13.2",
      "1.12.2",
      "1.11.2",
      "1.10.2",
      "1.9.4",
      "1.8.8",
    ],
  },
  {
    type: "Spigot",
    downloads: [
      "https://download.getbukkit.org/spigot/spigot-1.19.2.jar" /* 1.19.2 */,
      "https://download.getbukkit.org/spigot/spigot-1.18.2.jar" /* 1.18.2 */,
      "https://download.getbukkit.org/spigot/spigot-1.17.1.jar" /* 1.17.1 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.16.5.jar" /* 1.16.5 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.15.2.jar" /* 1.15.2 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.14.4.jar" /* 1.14.4 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.13.2.jar" /* 1.13.2 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.12.2.jar" /* 1.12.2 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.11.2.jar" /* 1.11.2 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.10.2-R0.1-SNAPSHOT-latest.jar" /* 1.10.2 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.9.4-R0.1-SNAPSHOT-latest.jar" /* 1.9.4 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.8.8-R0.1-SNAPSHOT-latest.jar" /* 1.8.8 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.7.10-SNAPSHOT-b1657.jar" /* 1.7.10 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.6.4-R2.1-SNAPSHOT.jar" /* 1.6.4 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.5.2-R1.1-SNAPSHOT.jar" /* 1.5.2 */,
      "https://cdn.getbukkit.org/spigot/spigot-1.4.7-R1.1-SNAPSHOT.jar" /* 1.4.7 */,
    ],
    versions: [
      "1.19.2",
      "1.18.2",
      "1.17.1",
      "1.16.5",
      "1.15.2",
      "1.14.4",
      "1.13.2",
      "1.12.2",
      "1.11.2",
      "1.10.2",
      "1.9.4",
      "1.8.8",
      "1.7.10",
      "1.6.4",
      "1.5.2",
      "1.4.7",
    ],
  },
  {
    type: "Vanilla",
    downloads: [
      "https://piston-data.mojang.com/v1/objects/f69c284232d7c7580bd89a5a4931c3581eae1378/server.jar" /* 1.19.2 */,
      "https://piston-data.mojang.com/v1/objects/8399e1211e95faa421c1507b322dbeae86d604df/server.jar" /* 1.18.2 */,
      "https://launcher.mojang.com/v1/objects/a16d67e5807f57fc4e550299cf20226194497dc2/server.jar" /* 1.17.1 */,
      "https://launcher.mojang.com/v1/objects/35139deedbd5182953cf1caa23835da59ca3d7cd/server.jar" /* 1.16.5 */,
      "https://launcher.mojang.com/v1/objects/4d1826eebac84847c71a77f9349cc22afd0cf0a1/server.jar" /* 1.15.2 */,
      "https://launcher.mojang.com/v1/objects/d0d0fe2b1dc6ab4c65554cb734270872b72dadd6/server.jar" /* 1.14.4 */,
      "https://launcher.mojang.com/v1/objects/3737db93722a9e39eeada7c27e7aca28b144ffa7/server.jar" /* 1.13.2 */,
      "https://launcher.mojang.com/mc/game/1.12.2/server/886945bfb2b978778c3a0288fd7fab09d315b25f/server.jar" /* 1.12.2 */,
      "https://launcher.mojang.com/mc/game/1.11.2/server/f00c294a1576e03fddcac777c3cf4c7d404c4ba4/server.jar" /* 1.11.2 */,
      "https://launcher.mojang.com/mc/game/1.10.2/server/3d501b23df53c548254f5e3f66492d178a48db63/server.jar" /* 1.10.2 */,
      "https://launcher.mojang.com/mc/game/1.9.4/server/edbb7b1758af33d365bf835eb9d13de005b1e274/server.jar" /* 1.9.4 */,
      "https://launcher.mojang.com/mc/game/1.8.9/server/b58b2ceb36e01bcd8dbf49c8fb66c55a9f0676cd/server.jar" /* 1.8.9 */,
      "https://launcher.mojang.com/mc/game/1.7.10/server/952438ac4e01b4d115c5fc38f891710c4941df29/server.jar" /* 1.7.10 */,
      "https://launcher.mojang.com/mc/game/1.6.4/server/050f93c1f3fe9e2052398f7bd6aca10c63d64a87/server.jar" /* 1.6.4 */,
      "https://launcher.mojang.com/mc/game/1.5.2/server/f9ae3f651319151ce99a0bfad6b34fa16eb6775f/server.jar" /* 1.5.2 */,
      "https://launcher.mojang.com/mc/game/1.4.7/server/2f0ec8efddd2f2c674c77be9ddb370b727dec676/server.jar" /* 1.4.7 */,
      "https://launcher.mojang.com/mc/game/1.3.2/server/3de2ae6c488135596e073a9589842800c9f53bfe/server.jar" /* 1.3.2 */,
      "https://launcher.mojang.com/mc/game/1.2.5/server/d8321edc9470e56b8ad5c67bbd16beba25843336/server.jar" /* 1.2.5 */,
    ],
    versions: [
      "1.19.2",
      "1.18.2",
      "1.17.1",
      "1.16.5",
      "1.15.2",
      "1.14.4",
      "1.13.2",
      "1.12.2",
      "1.11.2",
      "1.10.2",
      "1.9.4",
      "1.8.9",
      "1.7.10",
      "1.6.4",
      "1.5.2",
      "1.4.7",
      "1.3.2",
      "1.2.5",
    ],
  },
  {
    /* soon */
    type: "Proxy",
    types: [
      {
        name: "BungeeCord",
        downloads: [
          "https://ci.md-5.net/job/BungeeCord/lastSuccessfulBuild/artifact/bootstrap/target/BungeeCord.jar",
        ],
        versions: ["Latest"],
      },
    ],
  },
];

export const eula = `# By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).
# Created using mcsc
eula=true`;

export const serverProperties = `# Minecraft server properties
# Created using mcsc
allow-flight=false
difficulty=easy
enable-command-block=false
force-gamemode=false
gamemode=survival
hardcore=false
player-idle-timeout=0
pvp=true
view-distance=10
allow-nether=true
simulation-distance=10
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=16
generate-structures=true
generator-settings={}
level-name=world
level-seed=
level-type=minecraft\:normal
enforce-whitelist=false
white-list=false
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
function-permission-level=2
op-permission-level=4
enable-status=true
enforce-secure-profile=false
hide-online-players=false
max-players=20
motd=A Minecraft Server
online-mode=true
prevent-proxy-connections=false
server-ip=
server-port=25565
enable-query=false
query.port=25565
enable-rcon=false
rcon.password=
rcon.port=25575
require-resource-pack=false
resource-pack=
resource-pack-prompt=
resource-pack-sha1=
debug=true
enable-jmx-monitoring=false
entity-broadcast-range-percentage=100
max-chained-neighbor-updates=1000000
max-tick-time=60000
max-world-size=29999984
network-compression-threshold=256
previews-chat=false
rate-limit=0
sync-chunk-writes=true
text-filtering-config=
use-native-transport=true
`;

export const starter = `@echo off
java -Xmx%MAX%M -Xms%MIN%M -jar %VERSION%.jar nogui`;
