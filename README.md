
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

Ideally new release would be published automatically. However the deployment mechanism is [broken](https://github.com/travis-ci/dpl/issues/912) so we need to update symlinks by hand to make the release go live. This can be done as follows.

```
git clone git@github.com:dwst/dwst.git
git clone git@github.com:dwst/dwst.github.io.git
cd dwst
git checkout v1.2.3
gulp buildRelease
cd release
find . -type l -exec cp -R {} ../../dwst.github.io/{} \;
cd ../../dwst.github.io/
git status
# Only symlinks should be updated
git commit -a -m "Deploy 1.2.3"
git push origin master
# Check that the site got updated and still works
```
