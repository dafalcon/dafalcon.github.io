# 3D Printing Notes

## AMS 2 Pro Troubleshooting

We sometimes get weird behavior from the AMS 2 Pro:
- It holds a filament spool in reverse for several minutes, then errors
- It "revs" a spool repeatedly with no progress
- Other errors

Every time it has been caused by a piece of broken filament stuck somewhere in the system.  

Here are some troubleshooting steps:
- If the filament won't load at all, there's probably a piece of filament stuck somewhere in the AMS:
  - Take all the filament out of the AMS and disconnect it from the printer
  - The PFE tubes inside the AMS can be disconnected from the back by depressing the black piece of plasting and pulling the tube
  - Disconnect all 4 tubes
  - Push a piece of filament into each load point until it comes out the back where you disconnected it.  Remove any broken pieces of filament.
  - With all for PFE tubes out of the way, tilt the AMS onto its front face and gently shake it.  You may be able to get broken filament out from where the tubes were connected this way.  Inspect each opening for filament and remove it.
- Once the filament loads, it might still push a piece of broken filament out the back of the AMS.
  Disconnect the AMS's PFE tube from the back of the printer itself and wait for it to push the filament through.  Remove any broken pieces.

If it still doesn't work there are additional steps at [bambu labs](https://wiki.bambulab.com/en/ams-2-pro/remove-broken-stuck-material)
