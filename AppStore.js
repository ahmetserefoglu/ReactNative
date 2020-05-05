import {observable,action,computed} from 'mobx';

class AppStore{
  @observable data=[];
  @observable firstName;
  @observable lastName;

  @action addData(text){
     this.data.push(text);
  }

  @computed get fullName(){
     return this.firstName + ""+this.lastName;
  }
}