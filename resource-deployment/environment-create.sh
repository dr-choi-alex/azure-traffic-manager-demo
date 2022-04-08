# Create resource group
group_name="azure-traffic-manager-demo"
group_location="koreacentral"
echo "Group Name: " $group_name
echo "Group Location: " $group_location
az group create -g $group_name -l $group_location

# Create 3 virtual machines
username="adminuser"
password='SecretPassword123!@#'

vm_1_name="vm-koreacentral"
vm_1_location="koreacentral"

vm_2_name="vm-eastus"
vm_2_location="eastus"

vm_3_name="vm-northeurope"
vm_3_location="northeurope"

echo "Creating virtual machine #1:" $vm_1_name "on Location:" $vm_1_location
az vm create \
  -n $vm_1_name \
  -g $group_name \
  -l $vm_1_location \
  --image Win2019Datacenter \
  --admin-username $username \
  --admin-password $password \
  --nsg-rule rdp \
  --public-ip-sku Standard

echo "Creating virtual machine #2:" $vm_2_name "on Location:" $vm_2_location
az vm create \
  -n $vm_2_name \
  -g $group_name \
  -l $vm_2_location \
  --image Win2019Datacenter \
  --admin-username $username \
  --admin-password $password \
  --nsg-rule rdp \
  --public-ip-sku Standard

echo "Creating virtual machine #3:" $vm_3_name "on Location:" $vm_3_location
az vm create \
  -n $vm_3_name \
  -g $group_name \
  -l $vm_3_location \
  --image Win2019Datacenter \
  --admin-username $username \
  --admin-password $password \
  --nsg-rule rdp \
  --public-ip-sku Standard

# Create 1st web app
app_service_plan_1_name="web-koreacentral-plan"
app_1_location="koreacentral"
app_1_name="demo-1"

az appservice plan create \
  -n $app_service_plan_1_name \
  -g $group_name \
  -l $app_1_location \
  --sku S1

appname=demo-$app_1_name-$app_1_location-$RANDOM$RANDOM
az webapp create \
  -n $appname \
  -g $group_name \
  -p $app_service_plan_1_name

# Create 2nd web app
app_service_plan_2_name="web-eastus-plan"
app_2_location="eastus"
app_2_name="demo-2"

az appservice plan create \
  -n $app_service_plan_2_name \
  -g $group_name \
  -l $app_2_location \
  --sku S1

appname=demo-$app_2_name-$app_2_location-$RANDOM$RANDOM
az webapp create \
  -n $appname \
  -g $group_name \
  -p $app_service_plan_2_name

# Create 3rd web app
app_service_plan_3_name="web-northeurope-plan"
app_3_location="northeurope"
app_3_name="demo-3"

az appservice plan create \
  -n $app_service_plan_3_name \
  -g $group_name \
  -l $app_3_location \
  --sku S1

appname=demo-$app_3_name-$app_3_location-$RANDOM$RANDOM
az webapp create \
  -n $appname \
  -g $group_name \
  -p $app_service_plan_3_name

az webapp list -g $group --query "[].enabledHostNames" -o jsonc

az vm list \
  -g $group_name -d \
  --query "[].{name:name,ip:publicIps,user:osProfile.adminUsername,password:'$password'}" \
  -o jsonc
