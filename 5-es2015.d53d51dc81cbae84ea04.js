(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{B3sx:function(n,e,t){"use strict";t.r(e),e.default="data: any = {\n  product: 'NGX JSON Table',\n  version: 1.0,\n  releaseDate: '2014-06-25T00:00:00.000Z',\n  demo: true,\n  person: {\n    id: 12345,\n    name: 'John Doe',\n    phones: {\n      home: '800-123-4567',\n      mobile: '877-123-1234'\n    },\n    email: ['jd@example.com', 'jd@example.org'],\n    dateOfBirth: '1980-01-02T00:00:00.000Z',\n    registered: true,\n    emergencyContacts: [\n      {\n        name: 'Jane Doe',\n        phone: '888-555-1212',\n        relationship: 'spouse'\n      },\n      {\n        name: 'Justin Doe',\n        phone: '877-123-1212',\n        relationship: 'parent'\n      }\n    ]\n  }\n};\n"},CHVS:function(n,e,t){"use strict";t.r(e),e.default="// ...\n\n@Component({\n  template: `\n    <ngx-json-table></ngx-json-table>\n  `\n})\n// ...\n"},PeCp:function(n,e,t){"use strict";t.r(e),e.default="import { NgxJsonTableModule } from 'ngx-json-table';\n"},YhRS:function(n,e,t){"use strict";t.r(e),e.default="// ...\n\n@NgModule({\n  imports: [\n    // ...\n    \n    NgxJsonTableModule,\n    \n    // ...\n  ],\n  declarations: [ ... ]\n})\n// ...\n"},j1Yg:function(n,e,t){"use strict";t.r(e),e.default='// ...\n\n@Component({\n  template: `\n    <ngx-json-table [data]="data"></ngx-json-table>\n  `\n})\n// ...\n'},"m+vt":function(n,e,t){"use strict";t.r(e),t.d(e,"DemoModule",(function(){return u}));var a=t("2kYt"),o=t("sEIs"),i=t("PCNd"),s=t("EM62"),c=t("aZ8m"),r=t("FT7q"),l=t("UjQs"),b=t("ObOt");const p=function(){return["/documentation"]},d=[{path:"",component:(()=>{class n{constructor(){this.snippets={install:t("vxW1").default,require:t("PeCp").default,directive:t("YhRS").default,template:t("CHVS").default,data:t("B3sx").default,dataTemplate:t("j1Yg").default,basicFull:t("x09U").default}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Db({type:n,selectors:[["demo"]],decls:97,vars:11,consts:[["tagline","Quick Start & Demo"],[1,"main-content"],["id","getting-started","href","#getting-started","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","installation","href","#installation","aria-hidden","true",1,"anchor"],["highlight","",1,"bash"],["id","examples","href","#examples","aria-hidden","true",1,"anchor"],["id","minimal-setup","href","#minimal-setup","aria-hidden","true",1,"anchor"],["highlight","",1,"typescript"],[3,"routerLink"],[1,"with-source"],["href","https://github.com/bacali95/ngx-json-table/blob/master/projects/demo/src/app/pages/shared/components/basic-example/basic-example-data.component.ts","target","_blank",1,"source"]],template:function(n,e){1&n&&(s.Kb(0,"header-component",0),s.Ob(1,"section",1),s.Ob(2,"h2"),s.Ob(3,"a",2),s.Kb(4,"span",3),s.Nb(),s.nc(5,"Getting Started"),s.Nb(),s.Ob(6,"p"),s.nc(7," Hello and Welcome! "),s.Nb(),s.Ob(8,"h3"),s.Ob(9,"a",4),s.Kb(10,"span",3),s.Nb(),s.nc(11,"Installation"),s.Nb(),s.Ob(12,"p"),s.nc(13," The library is available as npm package, so all you need to do is to run the following command: "),s.Nb(),s.Ob(14,"pre"),s.nc(15,"    "),s.Ob(16,"code",5),s.nc(17),s.Nb(),s.nc(18,"\n  "),s.Nb(),s.Ob(19,"p"),s.nc(20,"This command will create a record in your `package.json` file and install the package into the npm modules folder."),s.Nb(),s.Ob(21,"h2"),s.Ob(22,"a",6),s.Kb(23,"span",3),s.Nb(),s.nc(24,"Examples"),s.Nb(),s.Ob(25,"h3"),s.Ob(26,"a",7),s.Kb(27,"span",3),s.Nb(),s.nc(28,"Minimal Setup Example"),s.Nb(),s.Ob(29,"p"),s.nc(30," First thing you need to do is to import the ngx-json-table directives into your component. "),s.Nb(),s.Ob(31,"pre"),s.nc(32,"    "),s.Ob(33,"code",8),s.nc(34),s.Nb(),s.nc(35,"\n  "),s.Nb(),s.Ob(36,"p"),s.nc(37," Then register it by adding to the list of directives of your module: "),s.Nb(),s.Ob(38,"pre"),s.nc(39,"    "),s.Ob(40,"code",8),s.nc(41),s.Nb(),s.nc(42,"\n  "),s.Nb(),s.Ob(43,"p"),s.nc(44," Now, we need to configure the table and add it into the template. There is "),s.Ob(45,"strong"),s.nc(46,"no required"),s.Nb(),s.nc(47," setting for the component to start working ("),s.Ob(48,"a",9),s.nc(49,"Settings documentation"),s.Nb(),s.nc(50,"): So let's put the ngx-json-table component inside of the template: "),s.Nb(),s.Ob(51,"pre"),s.nc(52,"    "),s.Ob(53,"code",8),s.nc(54),s.Nb(),s.nc(55,"\n  "),s.Nb(),s.Ob(56,"p"),s.nc(57," At this step you will have a minimally configured table which should look something like this: "),s.Nb(),s.Ob(58,"div"),s.Kb(59,"basic-example"),s.Nb(),s.Kb(60,"p"),s.Ob(61,"p"),s.nc(62," By making the table editable, all functions are available, so you already able to add/edit/delete rows or sort the table, etc. "),s.Nb(),s.Ob(63,"p"),s.nc(64," But it feels like something is missing... Right, there is no data in the table by default. To add some, let's create any valid JSON object. "),s.Nb(),s.Ob(65,"pre"),s.nc(66,"    "),s.Ob(67,"code",8),s.nc(68),s.Nb(),s.nc(69,"\n  "),s.Nb(),s.Ob(70,"p"),s.nc(71,"And pass the data to the table:"),s.Nb(),s.Ob(72,"pre"),s.nc(73,"    "),s.Ob(74,"code",8),s.nc(75),s.Nb(),s.nc(76,"\n  "),s.Nb(),s.Ob(77,"p"),s.nc(78,"Now you have some data in the table:"),s.Nb(),s.Ob(79,"div"),s.Kb(80,"basic-example-data"),s.Nb(),s.Kb(81,"p"),s.Ob(82,"p"),s.nc(83," That's it for a minimal setup, our final component should look like this, pretty simple, huh? "),s.Nb(),s.Ob(84,"pre",10),s.nc(85,"    "),s.Ob(86,"a",11),s.nc(87,"Demo Source"),s.Nb(),s.nc(88,"\n    "),s.Ob(89,"code",8),s.nc(90),s.Nb(),s.nc(91,"\n  "),s.Nb(),s.Ob(92,"p"),s.nc(93,"Full component documentation you can find "),s.Ob(94,"a",9),s.nc(95,"here"),s.Nb(),s.nc(96,"."),s.Nb(),s.Nb()),2&n&&(s.zb(17),s.oc(e.snippets.install),s.zb(17),s.oc(e.snippets.require),s.zb(7),s.oc(e.snippets.directive),s.zb(7),s.bc("routerLink",s.cc(9,p)),s.zb(6),s.oc(e.snippets.template),s.zb(14),s.oc(e.snippets.data),s.zb(7),s.oc(e.snippets.dataTemplate),s.zb(15),s.oc(e.snippets.basicFull),s.zb(4),s.bc("routerLink",s.cc(10,p)))},directives:[c.a,r.a,o.b,l.a,b.a],encapsulation:2}),n})()}];let u=(()=>{class n{}return n.\u0275mod=s.Hb({type:n}),n.\u0275inj=s.Gb({factory:function(e){return new(e||n)},imports:[[a.c,o.c.forChild(d),i.a]]}),n})()},vxW1:function(n,e,t){"use strict";t.r(e),e.default="npm install --save ngx-json-table\n"},x09U:function(n,e,t){"use strict";t.r(e),e.default="import { Component } from '@angular/core';\nimport { Settings } from 'ngx-json-table';\n\n@Component({\n  selector: 'basic-example-data',\n  template: `\n    <ngx-json-table [settings]=\"settings\" [data]=\"data\"></ngx-json-table>\n  `,\n})\nexport class BasicExampleDataComponent {\n\n  settings: Settings = {\n    expandAll: true\n  };\n\n  data: any = {\n    product: 'NGX JSON Table',\n    version: 1.0,\n    releaseDate: '2014-06-25T00:00:00.000Z',\n    demo: true,\n    person: {\n      id: 12345,\n      name: 'John Doe',\n      phones: {\n        home: '800-123-4567',\n        mobile: '877-123-1234'\n      },\n      email: ['jd@example.com', 'jd@example.org'],\n      dateOfBirth: '1980-01-02T00:00:00.000Z',\n      registered: true,\n      emergencyContacts: [\n        {\n          name: 'Jane Doe',\n          phone: '888-555-1212',\n          relationship: 'spouse'\n        },\n        {\n          name: 'Justin Doe',\n          phone: '877-123-1212',\n          relationship: 'parent'\n        }\n      ]\n    }\n  };\n}\n"}}]);