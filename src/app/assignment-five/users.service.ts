export class UsersService{
    users = [
        {name:'Vikas',status:'Active'},
        {name:'Vicky',status:'Active'},
        {name:'Nooth',status:'Active'},
        {name:'Abc',status:'Inactive'},
        {name:'Xyz',status:'Inactive'}
    ];

    changeStatus(id:number){
        this.users[id].status = this.users[id].status === 'Inactive' ? 'Active' : 'Inactive';
    }
}