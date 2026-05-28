# Enable registry with plain HTTP

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