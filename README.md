# pod-chef-front-end

Dashboard to the [Pod Chef API](https://github.com/goncalosn/pod-chef-back-end)

## .env example

```bash
REACT_APP_NODE_URI = "<api url here>"
REACT_APP_URL_PART1 = "https://"
REACT_APP_URL_PART2 = ".<domain name here>"
```

## Build production image

```bash
sudo docker build -t podchef/frontend:latest .
docker push podchef/frontend:latest
```
