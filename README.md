
# DWST Public Web Directory

This repository contains the files of the public web directory for the hosted version of the Dark WebSocket Terminal. Below are some instructions for releasing new DWST versions. We use *O.L.D* to indicate the old version number and *N.E.W* to indicate the new version number.


## Creating a New DWST Version

```
git clone git@github.com:dwst/dwst.git
cd dwst
git checkout master
git checkout -b version_N_E_W
# replace O.L.D with N.E.W in dwst/scripts/model/config.js
# Do some manual testing to make sure most things are working in the new release
git commit -a -m "increase version number to N.E.W"
# Make a pull request and get it merged
```


## Publishing the Newly created DWST Version

```
git clone git@github.com:dwst/dwst.git
git clone git@github.com:dwst/dwst.github.io.git
cd dwst
git checkout master
gulp clean
gulp
cp -R build/* ../dwst.github.io/
cd ../dwst.github.io/
git status
# Check that a new version is added and no files of an old version are being modified
# Check that all root file symlinks are updated to point to the new version
git add .
git commit -a -m "Deploy N.E.W"
git push origin master
# Check that the site got updated and still works
```
