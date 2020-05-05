import { toJS, observable, action, computed } from 'mobx'

class TodoStore {
     @observable todos = null;

     @action async addTodo(title) {
          //this.todos.push({title,check:false});
          try {
               let response = await fetch('http://10.0.2.2:3000/add', {
                    method: 'POST',
                    headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title: title, }),
               });

               let responseJson = await response.json();
               this.todos.push({ responseJson });
          } catch (error) {
               console.error(error);
          }
     }

     @computed get allTodos() {
          return toJS(this.todos);

          //return this.todos.slice(0);
     }

     @action async updateCheck(index, check) {
          try {
               let response = await fetch(`http://10.0.2.2:3000/updateCheck/${index}`, {
                    method: 'POST',
                    headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ check: check, }),
               });

               let responseJson = await response.json();
               this.todos[index] = responseJson;
          } catch (error) {
               console.error(error);
          }
     }

     @action async removeData(index) {
          try {
               let response = await fetch(`http://10.0.2.2:3000/remove`, {
                    method: 'POST',
                    headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: index}),
               });

               //let responseJson = await response.json();
               this.todos = this.todos.filter((v, i) => i !== index);
          } catch (error) {
               console.error(error);
          }
     }

     @action async fetchAll() {
          try {
               let response = await fetch('http://10.0.2.2:3000/list');
               let responseJson = await response.json();
               this.todos = responseJson;
          } catch (error) {
               console.log(error);
          }
     }
}


export default new TodoStore();