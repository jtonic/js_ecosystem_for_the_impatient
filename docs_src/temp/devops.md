# SecDevOps

## <span style="color:magenta">Learning kubernetes with minikube

- install kubernetes client tool

```sh
    brew install kubectl
```

- install minikube (on macos)

```sh
    brew cask install minikube
```
> **Note:** The version v1.4.0 is used in all examples

- run minikube

```sh
    minikube start
```
> **Note:**: When the minikube is install a virtual machine is started and the current context of kubectl is minikube.
> The current can be checked by checking `current-context` in `~/.kube/config`,
> or by running `kubectl config get-contexts`


- getting the info about the minikube cluster

`kubectl cluster-info`

- show minikube dashboard

```sh
    minikube dashboard
```

- ssh-in minikube

```sh
    minikube ssh
    docker images
```

- use minikube's docker on host

```sh
    eval $(minikube docker-env)
```

- unset the minikube's docker (use docker installed on host)

```sh
    eval $(minikube docker-env -u)
```

- stop minikube vm

```sh
    minikube stop
```

- delete minikube vm

```sh
    minikube delete
```

- getting the status of the minikube cluster

```sh
    minikube status
```

- install a web application to minikube

  - we have the following yaml file `frontend.yaml`:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
    name: frontend
    spec:
    selector:
        matchLabels:
        app: frontend
    replicas: 1
    revisionHistoryLimit: 5
    template:
        metadata:
        labels:
            app: frontend
        spec:
        containers:
            - name: frontend
            image: jtonic/my-vuejs-app:v1
            resources:
                requests:
                cpu: 100m
                memory: 300Mi
                limits:
                cpu: 2
                memory: 500Mi
            imagePullPolicy: Never
    ---
    apiVersion: v1
    kind: Service
    metadata:
    name: frontend
    spec:
    type: LoadBalancer
    ports:
        - port: 80
        targetPort: 80
    selector:
        app: frontend
  ```

  - and deploy web application `jtonic/my-vuejs-app:v1` into the cloud (AWS EC2) using the following command

  ```bash
    kubectl apply -f ./frontend.yaml
  ```

- get the status of the pod to see if all went right

```bash
    kubectl get deployment
    kubectl get pods # and look for the STATUS
    kubectl describe pods helloworld-deployment-6697bbc5ff-cst6x # get further information about a specific pod
    kubectl get pod helloworld-deployment-6697bbc5ff-cst6x -o yaml
```

- if something went wrong you could force replace the service/deployment (downtime)

```bash
    kubectl replace --force -f helloworld_deployment.yaml
    kubectl replace --force -f helloworld_service.yaml
```

- getting the url of the deployed application

```sh
    minikube service frontend --url
    // example output: http://192.168.99.100:30608
```

**Note**
The VM IP and external port can be viewed using.
See the NodePort and the IP from the Endpoints in the outcome of the following command.

```sh
    kubectl describe svc
```

- getting the description of the pods

```sh
    kubectl describe pods
```

- getting the description of the deployments (we can see the limits)

```sh
    kubectl describe deployments
```

- getting the IP of the minikube VM

```sh
    minikube ip
```

- cleaning up the application

```bash
    kubectl delete -f helloworld_service.yaml
    kubectl delete -f helloworld_deployment.yaml
```

### Further readings

- [minikube tutorials](https://kubernetes.io/docs/tutorials/hello-minikube/)
- [Getting started with kubernetes/docker/minikube](https://medium.com/@yzhong.cs/getting-started-with-kubernetes-and-docker-with-minikube-b413d4deeb92)
- [Using local docker image for kubernetes minikube](https://dzone.com/articles/running-local-docker-images-in-kubernetes-1)

## <span style="color:magenta"> Kubernates client tool commands

- get pods

```sh
kubectl get pods
```

- get services

```sh
kubectl get services
## or
kubectl get svc
```

### <span style="color:lightgreen">Terminology

- a `kubernetes node` is a working machine (wich for the minikube is the VM)
-
