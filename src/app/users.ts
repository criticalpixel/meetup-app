import {Injectable} from "@angular/core";
import {FirebaseObjectObservable, AngularFire} from "angularfire2";

@Injectable()
export class UserService {
    isLoggedIn:boolean;
    users:FirebaseObjectObservable<any>;
    constructor(public af:AngularFire){
        af.auth.subscribe((auth)=>{
            if(auth){
                this.isLoggedIn=true;
            }
            else{
                this.isLoggedIn=false;
            }
        })
    }

    getUsers(){
        return this.af.database.object('/');
    }

    getUser(id){
        return this.af.database.object('/'+id);
    }

    updateUser(id, object){
        this.af.database.object('/'+id)
            .update(object)
    }


}