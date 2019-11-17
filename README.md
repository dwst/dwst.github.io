
# DWST Public Web Directory

This repository contains the files of the public web directory for the hosted version of the Dark WebSocket Terminal.


## Publishing a New DWST Version

Dwst releases are published automatically based on version tags. You can tag the current master as follows. Replace 1.2.3 with the new version number.

```
git clone git@github.com:dwst/dwst.git
cd dwst
git checkout master
git tag v1.2.3
git push origin v1.2.3
```
