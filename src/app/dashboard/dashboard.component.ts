import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Policy } from '../policy';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies=new Array<Policy>();
  selectedPolicy:Policy =new Policy;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readPolicies().subscribe((policies: Policy[])=>{
       this.policies = policies;
       console.log(this.policies);
      })
  }

      createOrUpdatePolicy(form:Policy){
        if(this.selectedPolicy && this.selectedPolicy.id!=undefined){
          form.id = this.selectedPolicy.id;
          var objfinal =  new  FormData();
          objfinal.set("id",String(form.id));
          objfinal.set("number",String(form.number));
          objfinal.set("amount",String(form.amount));
          this.apiService.updatePolicy(objfinal).subscribe((policy: any)=>{
            alert(policy)
          console.log("Policy updated" , policy);
          });
        }
        else{
          
          console.log(form);
          var objfinal =  new  FormData();
          objfinal.set("number",String(form.number));
          objfinal.set("amount",String(form.amount));
          this.apiService.createPolicy(objfinal).subscribe((policy:any)=>{
            this.policies.push(policy)
          });
        }
    
      }

      selectPolicy(policy: Policy){
        this.selectedPolicy = policy;
      }
      
       deletePolicy(id:any,i:number){
       this.apiService.deletePolicy(id).subscribe((an)=>{
        this.policies.splice(i,1);
        console.log(an);
       });
      }
      
    

}

