
# DWST Public Web Directory

This repository contains the files of the public web directory for the hosted version of the Dark WebSocket Terminal. Below are some instructions for releasing new DWST versions. Replace 1.2.3 with the new version number.


## Creating a New DWST Version

```
git clone git@github.com:dwst/dwst.git
cd dwst
git checkout master
git tag v1.2.3
git push origin v1.2.3
```


## Publishing the Newly created DWST Version

```
git clone git@github.com:dwst/dwst.git
git clone git@github.com:dwst/dwst.github.io.git
cd dwst
git checkout v1.2.3
gulp clean
gulp
cp -R build/* ../dwst.github.io/
cd ../dwst.github.io/
git status
# Check that a new version is added and no files of an old version are being modified
# Check that all root file symlinks are updated to point to the new version
git add .
git commit -a -m "Deploy 1.2.3"
git push origin master
# Check that the site got updated and still works
```
