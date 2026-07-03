# Reinstall Traefik

	sudo rm /var/lib/rancher/k3s/server/manifests/traefik-config.yaml
	sudo kubectl delete helmcharts.helm.cattle.io -n kube-system traefik
	sudo kubectl patch helmcharts.helm.cattle.io -n kube-system traefik -p '{"metadata":{"finalizers":[]}}' --type=merge
	sudo systemctl restart k3s