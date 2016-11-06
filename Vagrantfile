# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  
  config.vm.provider "virtualbox" do |vb|
     vb.memory = 1024
  end

  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = true
  config.vm.network "forwarded_port", guest: 8080, host: 9080

  # config.vm.network "private_network", ip: "10.0.0.50"
  # config.vm.network "public_network"
  config.vm.synced_folder "C:\\SDE\\projects\\sts\\markash.github.io", "/markash.github.io"
end
