# Achernar
FFXIV HTML Damage parse Overlay

## support overlays
OverlayPlugin by ngld
- require `fake websocket` feature

Actwebsocket overlay

Dalamud Plugin (browserhost by ackwell)
- needed actwebsocket ws server (overlayplugin or actwebsocket)

# Installation
Step 1. Add new overlay (Browserhost or OverlayPlugin - Custom)

Step 2. Edit URL to `https://mogsfriend.github.io/Achernar/?HOST_PORT=%your_setting_host_port%`
> replace `%your_setting_host_port%` to your websocket setting host and port (it default 127.0.0.1:10501)

> #### Horizon view 
> add query string `view` and set value to `horizon`<br>
> ex) …/?`view=horizon`&HOST_PORT=127.0.0.1:10501
> #### FFLogs style view
> add query string `view` and set value to `fflogs`<br>
> ex) …/?`view=fflogs`&HOST_PORT=127.0.0.1:10501
> #### Hiding player name
> add query string `name` and set value to `hide`<br>
> ex) …/?view=horizon&`name=hide`&HOST_PORT=127.0.0.1:10501

Step 3. Reload overlay
