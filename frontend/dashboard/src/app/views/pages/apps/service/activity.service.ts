import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpClientModule,} from "@angular/common/http";
import { environment } from '../../../../../environments/environment';
//import * as CryptoJS from "crypto-js";
import{Observable}from 'rxjs';
const Weatherurl="https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=";
const base_url = environment.baseUrl + "forwarding_report_controller/";

import { catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  
  baseurl=environment.baseUrl + "forwarding_report_controller/";
  base_url_frwd = environment.baseUrl + "angular_forwarding_controller/";
  baseurl_act=environment.baseUrl + "frt_activity_controller/";
 // baseurl = environment.baseUrl + "forwarding_report_controller/";
  url!: string;
  localstorage_item = JSON.parse(localStorage.getItem("ffsession")!);
  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"content-Type": "application/x-www-form-urlencoded; charset=UTF-8", }),};
  tokenFromUI: string = "FREIGHT@shipsoft";
  encryptUsingAES256(request: string) {
    let _key = this.tokenFromUI;//CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let _iv = this.tokenFromUI;//CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    let encrypted = "";
    /*let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(request), _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.ECB
    });*/
    return encrypted.toString();
  }
  // request_sent_with_token(obj) {
  //   obj.wms_new_token = localStorage.getItem("wms_new_token");
  //   return this.http.post<any>(
  //     this.baseurl + "mainapp",
  //     this.encryptUsingAES256(JSON.stringify(obj)), {
  //     headers: new HttpHeaders({
  //       "content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       "Authorization": `Bearer ${localStorage.getItem("wms_new_token")}`,
  //     }),
  //   }
  //   );
  // }

  request_sent(obj: any) {
		return this.http.post<any>(
			base_url+ "lclexportapp",
			this.encryptUsingAES256(JSON.stringify(obj)),
			this.httpOptions
		);
  }
  
  get_elog(elog_rid: any, tablename: any, page_type: any) {

    var obj: any = {}
    obj.elog_rid = elog_rid;
    obj.tablename = tablename;
    obj.page_type = page_type;
    obj.method_name = "get_elog";
    obj.session = JSON.parse(localStorage.getItem("ffsession")!);
    return this.request_sent(obj);

  }

  get_changelog(changelog_rid: any, tablename: any, page_type: any) {
    var obj: any = {}
    obj.changelog_rid = changelog_rid;
    obj.tablename = tablename;
    obj.page_type = page_type;
    obj.method_name = "get_changelog";
    obj.session = JSON.parse(localStorage.getItem("ffsession")!);
    return this.request_sent(obj);
  }

  
	get_Mastersetup_list(tempuserdata: { session: any; }): Observable<any> {
		tempuserdata.session=JSON.parse(localStorage.getItem('ffsession')!);
		return this.http.post<any>(this.baseurl+'get_Mastersetup_list',tempuserdata,{
		  headers:new HttpHeaders({
		  'content-Type':'application/x-www-form-urlencoded; charset=UTF-8' 
		  })
		})
			
	}
  // get_masterSetup_data(id){ 
  //   return this.http.post<any>(this.baseurl+'get_masterSetup_data/'+id,this.localstorage_item,this.httpOptions);
  // }
  // get_assignjob_data(id){ 
  //   return this.http.post<any>(this.baseurl+'get_assignjob_data/'+id,this.localstorage_item,this.httpOptions);
  // }
  // get_update_data(id){ 
  //   return this.http.post<any>(this.baseurl+'get_update_data/'+id,this.localstorage_item,this.httpOptions);
  // }
  // add_master(dentry){
  //   dentry.session = this.localstorage_item;
  //   return this.http.post<any>(this.baseurl+'add_master',dentry,this.httpOptions);
  // }
  // add_assignjob(dentry,rid,job_id,job_type,data){
  //   var obj: any = {}
  //   obj.dentry = dentry;
  //   obj.rid=rid;
  //   obj.job_id=job_id;
  //   obj.job_type=job_type;
  //   obj.data=data;
  //   // obj.consol_rid=AVT_JMST_RID;
  //   // obj.shipment_rid=AVT_JSHP_RID;
  //   // obj.jmst_rid=jmst_rid;
  //   // obj.jshp_rid=jshp_rid;
  //   obj.method_name = "add_assignjob"
  //   obj.session = JSON.parse(localStorage.getItem("ffsession"));
  //   console.log(obj);
  //   return this.request_sent(obj);
  // }
  // activity_update(dentry,rid,updated_value,SNO){
  //   var obj: any = {}
  //   obj.dentry = dentry;
  //   obj.rid=rid;
  //   obj.updated_value = updated_value;
  //   obj.SNO=SNO;

  //   obj.method_name = "activity_update"
  //   obj.session = JSON.parse(localStorage.getItem("ffsession"));
  //   console.log(obj);
  //   return this.request_sent(obj);
  // }
  // avt_master_list(searchtype,search_value,session)
  // {   
  //   let obj: any = {};
  //   obj.searchtype = searchtype;
  //   obj.search_value = search_value;
  //   obj.session = session;
  //   obj.method_name = "avt_master_list"
  //  console.log(obj);
  //  return this.request_sent(obj);
  // }
  // avt_update(searchtype,search_value,from_date,to_date,session)
  // {   
  //   let obj: any = {};
  //   obj.searchtype = searchtype;
  //   obj.search_value = search_value;
  //   obj.from_date=from_date;
  //   obj.to_date=to_date;
  //   obj.session = session;
  //   obj.method_name = "avt_update"
  //  console.log(obj);
  //  return this.request_sent(obj);
  // }
  
  // get_common_view(sql){
  //   let obj: any = {};
	//   obj.query = sql;
  //   console.log(obj);
  //   return this.http.post<any>(
  //     this.baseurl + "get_common_view",
  //     obj,
  //     this.httpOptions
  //   );
  // }
  // report_name_list(localSession){
	// 	let obj: any = {};
	// 	obj.session = localSession;
	// 	obj.method_name = "report_name_access"
	// 	return this.request_sent(obj);
	// }

//maha 
  update_to_activity_screen(upd_array: string | any[],sql: any): Observable<any> {
   
    let obj: any = {};
    obj.upd_array = upd_array;
    obj.sql = sql;
    obj.session = JSON.parse(localStorage.getItem("ffsession")!);
    obj.method_name = "upd_array";
    if (upd_array.length>0) {
            
            return this.http.post<any>(
              this.base_url_frwd + "update_activity_arr",
            JSON.stringify(obj), this.httpOptions
            
            ).pipe(
              map(data => {
                if (data.status != "OK") {
                
                  return data;
                } else {
                  return data;
                }
              }));
    } else {
      return of(true);
    }
  }



  //sushmitha
  request_sent_with_token(obj: { wms_new_token: string | null; }) {
    obj.wms_new_token = localStorage.getItem("wms_new_token");
    return this.http.post<any>(
      this.baseurl_act + "mainapp",
      this.encryptUsingAES256(JSON.stringify(obj)), {
      headers: new HttpHeaders({
        "content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Authorization": `Bearer ${localStorage.getItem("wms_new_token")}`,
      }),
    }
    );
  }
  //master_setup_list
  avt_master_list(searchtype: any,search_value: any,session: any)
  {   
    return this.http.post<any>(this.baseurl_act+'avt_master_list',{searchtype,search_value,session},this.httpOptions);
     
  }
  //master_setup_entry
  get_masterSetup_data(id: string){ 
    return this.http.post<any>(this.baseurl_act+'get_masterSetup_data/'+id,this.localstorage_item,this.httpOptions);
  }
  add_master(dentry: { session: any; }){
    dentry.session = this.localstorage_item;
    return this.http.post<any>(this.baseurl_act+'add_master',dentry,this.httpOptions);
  }

  //assign job
  get_common_view(sql: any){
    let obj: any = {};
	  obj.query = sql;
    console.log(obj);
    return this.http.post<any>(
      this.baseurl_act + "get_common_view",
      obj,
      this.httpOptions
    );
  }
  add_assignjob(dentry: any,rid: any,job_id: any,job_type: any,data: any){
   var session=this.localstorage_item;
    return this.http.post<any>(this.baseurl_act+'add_assignjob',{dentry,rid,job_id,job_type,data,session},this.httpOptions);

  }
  //activity update
  avt_update(searchtype: any,search_value: any,from_date: any,to_date: any,session: any)
  {   
    return this.http.post<any>(this.baseurl_act+'avt_update',{searchtype,search_value,from_date,to_date,session},this.httpOptions);

  }
  activity_update(dentry: any,rid: any,updated_value: any,SNO: any){
    var session=this.localstorage_item;
    return this.http.post<any>(this.baseurl_act+'activity_update',{dentry,rid,updated_value,SNO,session},this.httpOptions);

  }
/**************************operation-dashboard*****************************/
draft(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "draft"
  return this.http.post<any>(this.baseurl_act+'draft',{from_date,to_date,obj},this.httpOptions);
}
get_draft_count_data(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "get_draft_count_data"
  return this.http.post<any>(this.baseurl_act+'get_draft_count_data',{from_date,to_date,obj},this.httpOptions);
}
SOB(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "SOB"
  return this.http.post<any>(this.baseurl_act+'SOB',{from_date,to_date,obj},this.httpOptions);
}
cargo(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "cargo"
  return this.http.post<any>(this.baseurl_act+'cargo',{from_date,to_date,obj},this.httpOptions);
}
BL(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "BL"
  return this.http.post<any>(this.baseurl_act+'BL',{from_date,to_date,obj},this.httpOptions);
}
invoice(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "invoice"
  return this.http.post<any>(this.baseurl_act+'invoice',{from_date,to_date,obj},this.httpOptions);
}
sale(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "sale"
  return this.http.post<any>(this.baseurl_act+'sale',{from_date,to_date,obj},this.httpOptions);
}
draft1(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "draft1"
  return this.http.post<any>(this.baseurl_act+'draft1',{from_date,to_date,obj},this.httpOptions);
}
SOB1(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "SOB1"
  return this.http.post<any>(this.baseurl_act+'SOB1',{from_date,to_date,obj},this.httpOptions);
}
cargo1(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "cargo1"
  return this.http.post<any>(this.baseurl_act+'cargo1',{from_date,to_date,obj},this.httpOptions);
}
BL1(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "BL1"
  return this.http.post<any>(this.baseurl_act+'BL1',{from_date,to_date,obj},this.httpOptions);
}
invoice1(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "invoice1"
  return this.http.post<any>(this.baseurl_act+'invoice1',{from_date,to_date,obj},this.httpOptions);
}
sale1(from_date: any,to_date: any){
  // //console.log(obj);
  let obj: any = {};
  obj.session = this.localstorage_item;
  console.log(obj);
  obj.method_name = "sale1"
  return this.http.post<any>(this.baseurl_act+'sale1',{from_date,to_date,obj},this.httpOptions);
}
}
