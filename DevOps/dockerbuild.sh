#!/bin/bash
TIMESTAMP=`TZ=IST-5:30 date +%F-%H%M`
GITHUB_LINK="https://My-Token-For-Cloning:Ni_gyxWTFHEXPSRhWqNb@gitlab.com/itcellqci/qcicollect.git"
DOCKERNAME="Collect-Assesor-Frontend"
IMAGENAME="qci-collect-assesor-front"
REPONAME="qcicollect"

# git clone $GITHUB_LINK
chgrp -R docker /var/lib/jenkins/workspace/collect-assesor-frontend-pipeline/dist
mv /var/lib/jenkins/workspace/collect-assesor-frontend/dist/ /home/ubuntu/dist_backups/collect/dist_$TIMESTAMP
mv /var/lib/jenkins/workspace/collect-assesor-frontend-pipeline/dist /var/lib/jenkins/workspace/collect-assesor-frontend/
#rm -rf $REPONAME
docker stop $DOCKERNAME
docker rm $DOCKERNAME
docker rmi $IMAGENAME
docker build -t $IMAGENAME /var/lib/jenkins/workspace/collect-assesor-frontend/.
docker run -dt --name $DOCKERNAME $IMAGENAME
