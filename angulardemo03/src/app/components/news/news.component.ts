import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  @ViewChild('footer')  footer:any;


  constructor() { } 

  ngOnInit() {


  }

  getChildMsg(){


    //获取footer子组件的数据

    alert(this.footer.msg);

  }


  getChildRun(){

    this.footer.run();
  }

  run(e){


    console.log(e);   //子组件给父组件广播的数据

    
    alert('我是父组件的run方法');
  }

}