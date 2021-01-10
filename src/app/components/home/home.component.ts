import { Component, OnInit } from '@angular/core';
import { Info } from '../../../environments/info'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { QuestionnaireService } from '../../services/questionnaire.service';

import { Observable } from 'rxjs';



// import {} from '../../form.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isSubmit: boolean = false;

  isCurrent: boolean;
  isNotCurrent: boolean;
  isFuture: boolean;

  ocOtherShow: boolean = false;
  supportOtherShow: boolean = false;
  reasonOtherShow: boolean = false;

  info = Info;
  myForm: FormGroup;

  quest: Questionnaire;

  loading = false;

  // dataSource = [
  //   { position: "10.1 ท่านเห็นว่า e-Tax Invoice & e-Receipt มีประโยชน์ต่อบริษัท", name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: "10.2 ท่านเห็นว่า e-Tax Invoice & e-Receipt ลดขั้นตอนกระบวนงาน ลดต้นทุนค่าใช้จ่าย", name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: "10.3 ท่านมีความยินดีที่จะแนะนำ e-Tax Invoice & e-Receipt ให้บริษัทในเครือหรือคู่ค้าใช้บริการ", name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: "10.4 ท่านคิดว่าการใช้ใบกำกับภาษีอิเล็กทรอนิกส์มีความน่าเชื่อถือ", name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: "10.5 ท่านมีความมั่นใจที่จะรับใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์", name: 'Boron', weight: 10.811, symbol: 'B' }
  // ];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['position', 'name'];

  constructor(private fb: FormBuilder, private router: Router, private thislo: Location, private questSP: QuestionnaireService) { }

  ngOnInit(): void {
    this.quest = new Questionnaire();
    this.myForm = this.fb.group({
      gender: ['', Validators.required],
      age: ['', Validators.required],
      education: ['', Validators.required],
      occupation: ['', Validators.required],
      occupationOther: [''],
      currentuser: ['', Validators.required],
      futureinteresting: ['', Validators.required],
      policyterms: ['', Validators.required],
      reasonavailability: ['', Validators.required],
      reasonavailabilityOther: [''],
      supportrequest: ['', Validators.required],
      supportrequestOther: [''],
      satis_BENEFITS: ['', Validators.required],
      satis_PERFORMANCES: ['', Validators.required],
      satis_COMPANIES: ['', Validators.required],
      satis_RELIABLE: ['', Validators.required],
      satis_CONFIDENCES: ['', Validators.required],
      satisfactionoverall: ['', Validators.required],
      suggestion: ['']
    });
  }

  ocOther(event: any) {
    if (event.value == 'OTHER') {
      this.ocOtherShow = true;
      this.myForm.get('occupationOther').setValidators([Validators.required]);
      this.myForm.get('occupationOther').updateValueAndValidity();
    } else {
      this.ocOtherShow = false;
      this.myForm.get('occupationOther').clearValidators();
      this.myForm.get('occupationOther').updateValueAndValidity();
      this.myForm.get('occupationOther').reset('');
    }
  }

  reasonOther(event: any) {
    if (event.value == 'OTHER') {
      this.reasonOtherShow = true;
      this.myForm.get('reasonavailabilityOther').setValidators([Validators.required]);
      this.myForm.get('reasonavailabilityOther').updateValueAndValidity();
    } else {
      this.reasonOtherShow = false;
      this.myForm.get('reasonavailabilityOther').clearValidators();
      this.myForm.get('reasonavailabilityOther').updateValueAndValidity();
      this.myForm.get('reasonavailabilityOther').reset('');
    }
  }

  supportOther(event: any) {
    if (event.value == 'OTHER') {
      this.supportOtherShow = true;
      this.myForm.get('supportrequestOther').setValidators([Validators.required]);
      this.myForm.get('supportrequestOther').updateValueAndValidity();
    } else {
      this.supportOtherShow = false;
      this.myForm.get('supportrequestOther').clearValidators();
      this.myForm.get('supportrequestOther').updateValueAndValidity();
      this.myForm.get('supportrequestOther').reset('');
    }
  }

  currentUsercheck(event: any) {
    if (event.value == 'YES') {
      this.isCurrent = true;
      this.isNotCurrent = false;
      this.supportOtherShow = false;
      this.myForm.get('futureinteresting').clearValidators();
      this.myForm.get('futureinteresting').updateValueAndValidity();
      this.myForm.get('futureinteresting').reset('');
      this.myForm.get('policyterms').clearValidators();
      this.myForm.get('policyterms').updateValueAndValidity();
      this.myForm.get('policyterms').reset('');
      this.myForm.get('reasonavailability').clearValidators();
      this.myForm.get('reasonavailability').updateValueAndValidity();
      this.myForm.get('reasonavailability').reset('');
      this.myForm.get('reasonavailabilityOther').clearValidators();
      this.myForm.get('reasonavailabilityOther').updateValueAndValidity();
      this.myForm.get('reasonavailabilityOther').reset('');
      //
      this.myForm.get('supportrequest').setValidators([Validators.required]);
      this.myForm.get('supportrequest').updateValueAndValidity();
      this.myForm.get('satisfactionoverall').setValidators([Validators.required]);
      this.myForm.get('satisfactionoverall').updateValueAndValidity();
      this.myForm.get('satis_BENEFITS').setValidators([Validators.required]);
      this.myForm.get('satis_BENEFITS').updateValueAndValidity();
      this.myForm.get('satis_PERFORMANCES').setValidators([Validators.required]);
      this.myForm.get('satis_PERFORMANCES').updateValueAndValidity();
      this.myForm.get('satis_COMPANIES').setValidators([Validators.required]);
      this.myForm.get('satis_COMPANIES').updateValueAndValidity();
      this.myForm.get('satis_RELIABLE').setValidators([Validators.required]);
      this.myForm.get('satis_RELIABLE').updateValueAndValidity();
      this.myForm.get('satis_CONFIDENCES').setValidators([Validators.required]);
      this.myForm.get('satis_CONFIDENCES').updateValueAndValidity();

    } else {
      this.isCurrent = false;
      this.isNotCurrent = true;
      this.supportOtherShow = true;
      this.myForm.get('futureinteresting').setValidators([Validators.required]);
      this.myForm.get('futureinteresting').updateValueAndValidity();
      this.myForm.get('policyterms').setValidators([Validators.required]);
      this.myForm.get('policyterms').updateValueAndValidity();
      this.myForm.get('reasonavailability').setValidators([Validators.required]);
      this.myForm.get('reasonavailability').updateValueAndValidity();
      // 
      this.myForm.get('supportrequest').clearValidators();
      this.myForm.get('supportrequest').updateValueAndValidity();
      this.myForm.get('supportrequest').reset('');
      this.myForm.get('satisfactionoverall').clearValidators();
      this.myForm.get('satisfactionoverall').updateValueAndValidity();
      this.myForm.get('satisfactionoverall').reset('');
      this.myForm.get('satis_BENEFITS').clearValidators();
      this.myForm.get('satis_BENEFITS').updateValueAndValidity();
      this.myForm.get('satis_BENEFITS').reset('');
      this.myForm.get('satis_PERFORMANCES').clearValidators();
      this.myForm.get('satis_PERFORMANCES').updateValueAndValidity();
      this.myForm.get('satis_PERFORMANCES').reset('');
      this.myForm.get('satis_COMPANIES').clearValidators();
      this.myForm.get('satis_COMPANIES').updateValueAndValidity();
      this.myForm.get('satis_COMPANIES').reset('');
      this.myForm.get('satis_RELIABLE').clearValidators();
      this.myForm.get('satis_RELIABLE').updateValueAndValidity();
      this.myForm.get('satis_RELIABLE').reset('');
      this.myForm.get('satis_CONFIDENCES').clearValidators();
      this.myForm.get('satis_CONFIDENCES').updateValueAndValidity();
      this.myForm.get('satis_CONFIDENCES').reset('');
    }
  }

  futureCheck(event: any) {
    if (event.value == 'NO') {
      this.isFuture = true;
      this.myForm.get('policyterms').clearValidators();
      this.myForm.get('policyterms').updateValueAndValidity();
      this.myForm.get('policyterms').reset('');
    } else {
      this.isFuture = false;
      this.myForm.get('policyterms').setValidators([Validators.required]);
      this.myForm.get('policyterms').updateValueAndValidity();
    }
  }



  public hasError = (controlName: string, errorName: string) => {
    return this.myForm.controls[controlName].hasError(errorName);
  }

  submitForm(data) {

    // let curr_url = this.thislo.path();
    // let hostname = location.hostname;
    let d = location.origin;
    // console.log(hostname);

    // console.log(curr_url);
    // console.log(d);

    // let postUrl = "http://192.168.55.18:8080/questionnaire/api/questionnaire";

    // console.log(d);
    // console.log(curr_url);
    // console.log(hostname);
    let payload = this.myForm.value
    if (payload.occupationOther == '') {
      delete payload.occupationOther;
    } else {
      payload.occupation = payload.occupation + ':' + payload.occupationOther;
      delete payload.occupationOther;
    }
    if (payload.reasonavailabilityOther == '') {
      delete payload.reasonavailabilityOther;
    } else {
      payload.reasonavailability = payload.reasonavailability + ':' + payload.reasonavailabilityOther;
      delete payload.reasonavailabilityOther;
    }
    if (payload.supportrequestOther == '') {
      delete payload.supportrequestOther;
    } else {
      payload.supportrequest = payload.supportrequest + ':' + payload.supportrequestOther;
      delete payload.supportrequestOther;
    }

    this.isSubmit = true;
    // console.log(!this.myForm.invalid);

    // console.log(payload);


    if (this.myForm.invalid) {
      return
    }
    // console.log(data);
    // this.router.navigateByUrl('thank');


    // console.log(d + "/api/questionnaire");
    // console.log(curr_url);
    // this.questSP.createOne(data, "http://localhost:9080/adhoc/questionnaire/api/questionnaire").subscribe(data => {
    this.loading = true;
    this.questSP.createOne(data, d + "/adhoc/questionnaire/api/questionnaire").subscribe(data => {
    // this.questSP.createOne(data, "http://localhost:8080/api/questionnaire").subscribe(data => {
      this.router.navigateByUrl('thank');
    }, err => {
      this.router.navigateByUrl('errorpage');
      // this.router.navigateByUrl('thank');
    });

    // console.log(JSON.stringify(result));    
    // this.pollS.createPoll(this.poll).subscribe(data => {
    //   console.log(data);
    //   this.router.navigateByUrl('thank');
    // },
    //   err => {
    //     console.log(err);
    //     this.router.navigateByUrl('error');
    //   }
    // );


  }

}

export class Questionnaire {
  gender: string;
}