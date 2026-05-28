# Set up registry running in Docker Compose

Example configuration: store in file `docker-compose.yaml`

```yaml
services:
  registry:
    image: registry:2
    restart: always
    user: "1000:1000"
    ports:
      - "5000:5000"
    volumes:
      - registry_data:/var/lib/registry

volumes:
  registry_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /home/orangepi/App/docker-registry/data```
```

Call HTTP GET `/v2` to see if it is working. The response will be `{}`

# Allow registry access with plain HTTP

```JSON
{"insecure-registries":["192.168.0.23:30001"]}
```

# Log in to registry

	docker login 192.168.0.23:30001

Input username and password

# Add registry to k3s

Edit file: `/etc/rancher/k3s/registries.yaml`

Example configuration:

```YAML
mirrors:
"192.168.0.23:30001":
  endpoint:
    - "http://192.168.0.23:30001"

configs:
"192.168.0.23:30001":
  auth:
  username: "docker-registry"
  password: "my-password"
```