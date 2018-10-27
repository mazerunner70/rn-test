#! /bin/bash

cd "${0%/*}" // https://stackoverflow.com/questions/6393551/what-is-the-meaning-of-0-in-a-bash-script

cd ../..

npm stop
rm db/provisioner.db
logfileName=test-$(date +%y%m%d%H%M%S).log
echo $logfileName
( npm start > integration-test/logs/$logfileName 2>&1 ) &
pattern='^Db set up' # This could change over time
tail -f integration-test/logs/$logfileName | 
while read -r line ; 
do
  echo "Processing: $line"
  if [[ $line =~ $pattern ]]; then
    echo "found"
    exit
  fi
done
echo "done"

