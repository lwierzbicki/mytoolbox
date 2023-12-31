#!/usr/bin/python
import requests, json, sys

### extract results from crt.sh

# get domain and assign to target
target = sys.argv[1].rstrip()

# send request and get json output
req = requests.get("https://crt.sh/?q=%.{d}&output=json".format(d=target))

# parse json and print values
json_data = json.loads(req.text)
for (key,value) in enumerate(json_data):
    print(value['name_value'])
