Vagrant.configure("2") do |config|
  # Box name to use
  config.vm.box = "ubuntu/xenial64" # current (2017-12-31) bug - ref: https://askubuntu.com/questions/832137/ubuntu-xenial64-box-password
  config.ssh.insert_key = true
  config.ssh.forward_agent = true
  config.ssh.username = "ubuntu"
  config.ssh.password = "379a8188cba8c5e64b9a429f"

  # Bento does not work because of a VirtualBox mismatch, new version soon to appear
  # config.vm.box = "bento/ubuntu-16.04"

  # Bring up a separate window for the gui
  config.vm.provider "virtualbox" do |v|
    v.gui = true
  end

  # Identify the VM in virtualbox
  config.vm.provider "virtualbox" do |v|
    v.name = "nginx-test"
  end
  
  # Activates Ansible to begin provisioning
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "playbook.yml"
  end
end
