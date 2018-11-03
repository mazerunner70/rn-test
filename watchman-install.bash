#!/bin/bash

git clone https://github.com/facebook/watchman.git
mkdir /tmp/watchman
cd /tmp/watchman
git checkout v4.9.0  # the latest stable release
./autogen.sh
./configure
make
sudo make install
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server
cd /tmp
rm -r /tmp/watchman

