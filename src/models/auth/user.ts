class Permission{
  codename: string;
  name: string;

  constructor(name:string, codename:string){
    this.name = name;
    this.codename = codename;
  }
}

class Group {
  name: string;
  permissions: Permission[];
  permissions_list: string[];

  constructor(name:string, permissions:any, permissions_list:string[]){
    this.name = name;
    this.permissions_list = permissions_list;
    this.permissions = [];
    for(let perm of permissions){
      this.permissions.push(
        new Permission(perm.name, perm.codename)
      )
    }
  }
}

export class User {
  public username: string;
  public full_name: string;
  public email: string;
  public groups: Group[];
  public groups_list: string[];

  constructor(username:string, full_name:string, email:string, groups:any, groups_list:string[]) {
    this.username = username;
    this.full_name = full_name;
    this.email = email;
    this.groups_list = groups_list;
    this.groups = []
    for(let group of groups){
      this.groups.push(
        new Group(group.name, group.permissions, group.permissions_list)
      )
    }
  }
}
