# <span style="color:magenta">Kubernetes/minikube/AWS/EKS/ cheat sheet (macos)

- [x] Prerequisites. Python 2.7 has to be installed on machine.
      Check the python installation

  `python --version`

- [x] install kubectl

  `brew install kubectl`

- [x] install awscli

  `brew install awscli`

- [x] install eks

  `brew tap weaveworks/tap`

  `brew install weaveworks/tap/eksctl`

  `eksctl version`

- [x] install aws-iam-authenticator

  `brew install aws-iam-authenticator`

  `aws-iam-authenticator help`

- [ ] create an aws IAM user

- [ ] see IAM permissions/roles of the newly created user

- [ ] give the user the proper policies to perform operations on amazon ec2

- [x] <span style='color:lightgreen'>create an aws cluster

```bash
    eksctl create cluster \
    --name dev \
    --version 1.14 \
    --nodegroup-name standard-workers \
    --node-type t2.micro \
    --nodes 3 \
    --nodes-min 1 \
    --nodes-max 3 \
    --node-ami auto
```

- [x] <span style='color:lightgreen'>delete the cluster

  `eksctl delete cluster --name=dev`

- [ ] config kubectl to use the aws
      After the successful cluster creation the kubectl gets configured for the aws.
      Check the `/Users/antonelpazargic/.kube/config`
      Check this with the command:

  `kubectl get nodes`
  `kubectl get svc`

- [ ] develop an application in docker container

- [ ] publish the container image to docker registry

- [ ] create the kubectl deployment yaml and service yaml

- [ ] deploy the application containers to aws cluster

- [ ] test the application

- [ ] create a free domain

- [ ] point the free domain to aws public IPs

- [ ] create an upload a key/certificate

## <span style="color:magenta">**Further reading**

- [AWS cheat sheet](https://tutorialsdojo.com/aws-cheat-sheets/)
- [Amazon Elastic Block Store](https://docs.aws.amazon.com/en_pv/AWSEC2/latest/UserGuide/EBSVolumes.html)
- [Amazon web hosting](https://aws.amazon.com/websites/)
- [Amazon EC2 free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=tier%2312monthsfree)
- [Amazon regions](https://docs.aws.amazon.com/general/latest/gr/rande.html)
- [AWS configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [Getting started with Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)
- [Amazon cli](https://aws.amazon.com/cli/)
- [AWS Identity and Access Management - IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)
- [Create a EKS cluster using conf file](https://eksctl.io/usage/creating-and-managing-clusters/)
- [Further create cluster examples](https://github.com/weaveworks/eksctl/tree/master/examples)
- [Kubernetes workshop](https://eksworkshop.com/introduction/)
- [Create a new user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_cliwpsapi)
- [Create an access key secret and access key id for root user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user_manage_add-key)
- [aws iam commands](https://docs.aws.amazon.com/cli/latest/reference/iam/index.html#cli-aws-iam)
- [Free training with AWS](https://tinyurl.com/yxm7qbt6)

## Useful tools for working with aws, kubectl, eksctl cli

- install jq (Lightweight and flexible command-line JSON processor)

  `brew install jq`

- install envsubst (substitutes environment variables in shell format strings)

  `brew install gettext`

## Install kubernetes dashboard into the AWS EKS (C2)

See [here how](https://docs.aws.amazon.com/en_pv/eks/latest/userguide/dashboard-tutorial.html)

## <span style="color:magenta">**Popular aws/kubetcl commands**

- Get aws caller identity

  `aws sts get-caller-identity`

- Get kubernetes nodes

  `kubectl get nodes`

- Get services

  `kubectl get svc`

- Get all objects

  `kubectl get all`

- List clusters

  `aws eks list-clusters`

- <span style='color:cyan'>**Kubernetes configuration**

  - configuration is stored in `~/.kube/config`
  - get configuration info

    - get clusters

    `kubectl config get-clusters`

    - get contexts

      `kubectl config get-contexts`

  - <span style='color:cyan'>**switching contexts**

    `kubectl config use-context my-other-context`

  - <span style='color:cyan'>**get current context**

    `kubectl config current-context`

  - changing an existing context

    `kubectl config set-context minikube --namespace=another-namespace`

  - [Create a kubeconfig for Amazon EKS](https://docs.aws.amazon.com/en_pv/eks/latest/userguide/create-kubeconfig.html)

* More info about the aws eks command

  `aws eks help`

* describe the Elastic IP addresses

  `aws ec2 describe-addresses`

* find out the Elastic Public IP

  `aws ec2 describe-addresses | jq -r '.Addresses[].PublicIp'`

* Describe EKS cluster

  `aws eks describe-cluster --name=dev`

* <span style='color:cyan'> **How to get the public domain name?**

  - Get the EKS cluster details with `aws eks describe-cluster --name=dev | jq -r '.cluster.endpoint'`

* <span style='color:cyan'> **How to get access token for eks cluster?**

  `aws eks get-token --cluster-name dev | jq -r '.status.token'`

## <span style="color:magenta">**Acronyms**

| Acronym | Description                     | Reference                              |
| ------- | ------------------------------- | -------------------------------------- |
| RBAC    | Role Based Access Control       |                                        |
| IAM     | Identity and Access Management  |                                        |
| VPC     | Virtual Private Cloud           |                                        |
| EBS     | (Amazon) Elastic Block Store    | https://aws.amazon.com/ebs/            |
| NAT     | Network Address Translation     | https://tinyurl.com/y2ulutky           |
| ELB     | Elastic Load Balancer           |                                        |
| S3      | (Amazon) Simple Storage Service | https://aws.amazon.com/s3/             |
| CF      | (Amazon) CloudFormation         | https://aws.amazon.com/cloudformation/ |
| AMI     | Amazon Machine Images           | https://tinyurl.com/y3y4w7mw           |
|         |                                 |                                        |
| CDN     | Content Delivery Network        |                                        |
| STS     | (Amazon) Security Token Service |                                        |
| EC2     | (Amazon) Elastic Compute Cloud  |                                        |
|         |                                 |                                        |

## <span style="color:magenta">**Kubernetes (cloud) objects**

- Ingress
- Terraform

## <span style="color:magenta">**Certifications for cloud (AWS)**

- [Here](https://gist.github.com/leonardofed/bbf6459ad154ad5215d354f3825435dc#passing-the-aws-solutions-architect---associate-exam--prerequisites--requirements)
- [Here](https://cloudacademy.com)
- [Amazon certification page](https://www.aws.training/Certification)
- [Certmetrics](https://www.certmetrics.com/amazon/)
- [Here on quora](https://tinyurl.com/y44wt36n)

## <span style="color:magenta"> User/role/group/policies management with aws iam

- Get user policies

  `aws iam list-user-policies --user-name=jtonic`

- See user's groups

  `aws iam list-groups-for-user --user=jtonic`

- Get group information (we use the --profile=root to have permissions)

  `aws iam get-group --group-name=JtonicGroup --profile=root`

- Get attached group policies (we use the --profile=root to have permissions)

  `aws iam list-attached-group-policies --group-name=JtonicGroup --profile=root`

- Get inline user policies (we use the --profile=root to have permissions)

  `aws iam list-user-policies --user=jtonic --profile=root`

- Get user's policy (we use the --profile=root to have permissions)

  `aws iam get-user-policy --user-name=jtonic --policy-name=ToDeleteCluster1`

- List group's policies (we use the --profile=root to have permissions)

  `aws iam list-group-policies --group-name=EC2Describe`

- Get group's policy (we use the --profile=root to have permissions)

  `aws iam get-group-policy --group-name=EC2Describe --policy-name=Ec2Describe`

- Get current access/session token info

  `aws sts get-caller-identity`

- Get access/session token

  `aws sts get-session-token`

## <span style="color:magenta"> **Steps**

This might appear in an existing session

- create a root user in [AWS Management Console](https://console.aws.amazon.com/)

- <span style="color:red">DON'T USE root for EC2 operations
- Setup the aws cli profiles (output format, region, and access key id/secret).

  For root user it is advised to use a proper profile, say `--profile=root`, and use it only in case when a proper admin permission is required

## <span style="color:magenta"> **The way of working with IAM**

- create a user - [info](https://tinyurl.com/y3g33qyh)
- create custom attachable policies - [info](https://tinyurl.com/y3gjxwt2)
- [Optional] Create policy version - [info](https://tinyurl.com/y52b97fk)
- create custom group - [info](https://tinyurl.com/y5xw64k2)
- attach policies to group - [info](https://tinyurl.com/y6xxm7oa)
- attach user to group - [info](https://tinyurl.com/y36jx8yx)

## <span style="color:magenta"> **EKS commands manage EC2 cluster**

### **Create cluster for free tire**

```bash
    eksctl create cluster \
    --name dev \
    --version 1.14 \
    --nodegroup-name standard-workers \
    --node-type t2.micro \
    --nodes 3 \
    --nodes-min 1 \
    --nodes-max 3 \
    --node-ami auto
```

## **Delete a cluster**

```bash
    eksctl delete cluster --name=dev
```
