function _classCallCheck(b,n){if(!(b instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CfhG:function(b,n,t){"use strict";t.r(n),t.d(n,"DocumentationModule",(function(){return d}));var e,c,a=t("2kYt"),s=t("sEIs"),i=t("PCNd"),O=t("EM62"),o=t("aZ8m"),N=[{path:"",component:(e=function b(){_classCallCheck(this,b),this.exampleIconInnerText="<i>innerText</i>",this.exampleIconClass='<i class="class"></i>',this.exampleIconColor='<i style="color: #1e6bb8"></i>',this.exampleIconHtml='<i class="custom-html" style="color: #55a532">customInnerText</i>'},e.\u0275fac=function(b){return new(b||e)},e.\u0275cmp=O.Db({type:e,selectors:[["demo"]],decls:331,vars:4,consts:[["tagline","Documentation"],[1,"main-content"],["id","documentation","href","#documentation","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","inputs","href","#configuration","aria-hidden","true",1,"anchor"],[1,"highlight"],["id","configuration","href","#configuration","aria-hidden","true",1,"anchor"],[1,"nested-obj"],["id","events","href","#events","aria-hidden","true",1,"anchor"]],template:function(b,n){1&b&&(O.Kb(0,"header-component",0),O.Ob(1,"section",1),O.Ob(2,"h2"),O.Ob(3,"a",2),O.Kb(4,"span",3),O.Nb(),O.nc(5,"Documentation "),O.Nb(),O.Ob(6,"h3"),O.Ob(7,"a",4),O.Kb(8,"span",3),O.Nb(),O.nc(9,"Component Inputs"),O.Nb(),O.Ob(10,"table"),O.Ob(11,"tr"),O.Ob(12,"th"),O.nc(13,"Input"),O.Nb(),O.Ob(14,"th"),O.nc(15,"Type"),O.Nb(),O.Ob(16,"th"),O.nc(17,"Description"),O.Nb(),O.Nb(),O.Ob(18,"tr"),O.Ob(19,"td"),O.nc(20,"[settings]"),O.Nb(),O.Ob(21,"td"),O.Ob(22,"span",5),O.nc(23,"Object"),O.Nb(),O.Nb(),O.Ob(24,"td"),O.nc(25,"Table component configuration object, properties described below"),O.Nb(),O.Nb(),O.Ob(26,"tr"),O.Ob(27,"td"),O.nc(28,"[data]"),O.Nb(),O.Ob(29,"td"),O.Ob(30,"span",5),O.nc(31,"Object"),O.Nb(),O.nc(32,"|"),O.Ob(33,"span",5),O.nc(34,"DataSource"),O.Nb(),O.Nb(),O.Ob(35,"td"),O.nc(36,"Table data, any valid JSON object."),O.Nb(),O.Nb(),O.Nb(),O.Ob(37,"h3"),O.Ob(38,"a",6),O.Kb(39,"span",3),O.Nb(),O.nc(40,"Table Configuration"),O.Nb(),O.Ob(41,"table"),O.Ob(42,"tr"),O.Ob(43,"th"),O.nc(44,"Property"),O.Nb(),O.Ob(45,"th"),O.nc(46,"Type"),O.Nb(),O.Ob(47,"th"),O.nc(48,"Default"),O.Nb(),O.Ob(49,"th"),O.nc(50,"Description"),O.Nb(),O.Nb(),O.Ob(51,"tr"),O.Ob(52,"td"),O.nc(53,"key"),O.Nb(),O.Ob(54,"td"),O.Ob(55,"span",5),O.nc(56,"Object"),O.Nb(),O.Nb(),O.Ob(57,"td"),O.nc(58,"n/a"),O.Nb(),O.Ob(59,"td"),O.nc(60," Object keys Column settings "),O.Nb(),O.Nb(),O.Ob(61,"tr"),O.Ob(62,"td"),O.Ob(63,"span",7),O.nc(64,"key"),O.Nb(),O.nc(65,".headerText"),O.Nb(),O.Ob(66,"td"),O.Ob(67,"span",5),O.nc(68,"string"),O.Nb(),O.Nb(),O.Ob(69,"td"),O.nc(70,"'Key'"),O.Nb(),O.Ob(71,"td"),O.nc(72," Object keys column header text. "),O.Nb(),O.Nb(),O.Ob(73,"tr"),O.Ob(74,"td"),O.Ob(75,"span",7),O.nc(76,"key"),O.Nb(),O.nc(77,".width"),O.Nb(),O.Ob(78,"td"),O.Ob(79,"span",5),O.nc(80,"string"),O.Nb(),O.Nb(),O.Ob(81,"td"),O.nc(82,"'40%'"),O.Nb(),O.Ob(83,"td"),O.nc(84," Object keys column width, example: "),O.Ob(85,"span",5),O.nc(86,"'40%'"),O.Nb(),O.nc(87,", "),O.Ob(88,"span",5),O.nc(89,"'150px'"),O.Nb(),O.Nb(),O.Nb(),O.Ob(90,"tr"),O.Ob(91,"td"),O.nc(92,"value"),O.Nb(),O.Ob(93,"td"),O.Ob(94,"span",5),O.nc(95,"Object"),O.Nb(),O.Nb(),O.Ob(96,"td"),O.nc(97,"n/a"),O.Nb(),O.Ob(98,"td"),O.nc(99," Object values Column settings "),O.Nb(),O.Nb(),O.Ob(100,"tr"),O.Ob(101,"td"),O.Ob(102,"span",7),O.nc(103,"value"),O.Nb(),O.nc(104,".headerText"),O.Nb(),O.Ob(105,"td"),O.Ob(106,"span",5),O.nc(107,"string"),O.Nb(),O.Nb(),O.Ob(108,"td"),O.nc(109,"'Value'"),O.Nb(),O.Ob(110,"td"),O.nc(111," Object values column header text. "),O.Nb(),O.Nb(),O.Ob(112,"tr"),O.Ob(113,"td"),O.Ob(114,"span",7),O.nc(115,"value"),O.Nb(),O.nc(116,".width"),O.Nb(),O.Ob(117,"td"),O.Ob(118,"span",5),O.nc(119,"string"),O.Nb(),O.Nb(),O.Ob(120,"td"),O.nc(121,"'60%'"),O.Nb(),O.Ob(122,"td"),O.nc(123," Object values column width, example: "),O.Ob(124,"span",5),O.nc(125,"'60%'"),O.Nb(),O.nc(126,", "),O.Ob(127,"span",5),O.nc(128,"'200px'"),O.Nb(),O.Nb(),O.Nb(),O.Ob(129,"tr"),O.Ob(130,"td"),O.nc(131,"editable"),O.Nb(),O.Ob(132,"td"),O.Ob(133,"span",5),O.nc(134,"boolean"),O.Nb(),O.Nb(),O.Ob(135,"td"),O.nc(136,"true"),O.Nb(),O.Ob(137,"td"),O.nc(138," Whether the table is editable or not. "),O.Nb(),O.Nb(),O.Ob(139,"tr"),O.Ob(140,"td"),O.nc(141,"sortable"),O.Nb(),O.Ob(142,"td"),O.Ob(143,"span",5),O.nc(144,"boolean"),O.Nb(),O.Nb(),O.Ob(145,"td"),O.nc(146,"false"),O.Nb(),O.Ob(147,"td"),O.nc(148," Whether the table is sortable or not. "),O.Nb(),O.Nb(),O.Ob(149,"tr"),O.Ob(150,"td"),O.nc(151,"sortDirection"),O.Nb(),O.Ob(152,"td"),O.Ob(153,"span",5),O.nc(154,"'asc'"),O.Nb(),O.nc(155," | "),O.Ob(156,"span",5),O.nc(157,"'desc'"),O.Nb(),O.Nb(),O.Ob(158,"td"),O.nc(159,"n/a"),O.Nb(),O.Ob(160,"td"),O.nc(161," Sort table by the object keys column with this direction by default."),O.Kb(162,"br"),O.nc(163," Applied only when "),O.Ob(164,"span",5),O.nc(165,"sortable"),O.Nb(),O.nc(166," = true. "),O.Nb(),O.Nb(),O.Ob(167,"tr"),O.Ob(168,"td"),O.nc(169,"expandAll"),O.Nb(),O.Ob(170,"td"),O.Ob(171,"span",5),O.nc(172,"boolean"),O.Nb(),O.Nb(),O.Ob(173,"td"),O.nc(174,"false"),O.Nb(),O.Ob(175,"td"),O.nc(176," Expand all the objects/arrays children when loading the data the first time. "),O.Nb(),O.Nb(),O.Ob(177,"tr"),O.Ob(178,"td"),O.nc(179,"iconPackage"),O.Nb(),O.Ob(180,"td"),O.Ob(181,"span",5),O.nc(182,"'basic'"),O.Nb(),O.nc(183," | "),O.Ob(184,"span",5),O.nc(185,"'font-awesome'"),O.Nb(),O.Kb(186,"br"),O.nc(187," | "),O.Ob(188,"span",5),O.nc(189,"'material-design'"),O.Nb(),O.Nb(),O.Ob(190,"td"),O.nc(191,"'basic'"),O.Nb(),O.Ob(192,"td"),O.nc(193," Name of the icon package used for the styling of the table icons. "),O.Nb(),O.Nb(),O.Ob(194,"tr"),O.Ob(195,"td"),O.nc(196,"icons"),O.Nb(),O.Ob(197,"td"),O.Ob(198,"span",5),O.nc(199,"'Icons'"),O.Nb(),O.Nb(),O.Ob(200,"td"),O.nc(201,"n/a"),O.Nb(),O.Ob(202,"td"),O.nc(203," The icons metadata used for the styling of the table icons."),O.Kb(204,"br"),O.nc(205," The icons names are: "),O.Ob(206,"ul"),O.Ob(207,"li"),O.Ob(208,"span",5),O.nc(209,"notSorted"),O.Nb(),O.nc(210,": when the table is not sorted yet."),O.Nb(),O.Ob(211,"li"),O.Ob(212,"span",5),O.nc(213,"sortedAsc"),O.Nb(),O.nc(214,": when the table is sorted in ascending order."),O.Nb(),O.Ob(215,"li"),O.Ob(216,"span",5),O.nc(217,"sortedDesc"),O.Nb(),O.nc(218,": when the table is sorted in descending order."),O.Nb(),O.Ob(219,"li"),O.Ob(220,"span",5),O.nc(221,"expand"),O.Nb(),O.nc(222,": when the object/array child is expanded."),O.Nb(),O.Ob(223,"li"),O.Ob(224,"span",5),O.nc(225,"collapse"),O.Nb(),O.nc(226,": when the object/array child is collapsed."),O.Nb(),O.Ob(227,"li"),O.Ob(228,"span",5),O.nc(229,"simpleChild"),O.Nb(),O.nc(230,": when the child is simple(key: value)."),O.Nb(),O.Ob(231,"li"),O.Ob(232,"span",5),O.nc(233,"addChild"),O.Nb(),O.nc(234,": to add a child."),O.Nb(),O.Ob(235,"li"),O.Ob(236,"span",5),O.nc(237,"editChild"),O.Nb(),O.nc(238,": to edit a child."),O.Nb(),O.Ob(239,"li"),O.Ob(240,"span",5),O.nc(241,"confirmEditChild"),O.Nb(),O.nc(242,": to confirm editing a child."),O.Nb(),O.Ob(243,"li"),O.Ob(244,"span",5),O.nc(245,"cancelEditChild"),O.Nb(),O.nc(246,": to cancel editing a child."),O.Nb(),O.Ob(247,"li"),O.Ob(248,"span",5),O.nc(249,"deleteChild"),O.Nb(),O.nc(250,": to delete a child."),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Ob(251,"tr"),O.Ob(252,"td"),O.Ob(253,"span",7),O.nc(254,"icons.[iconName]"),O.Nb(),O.nc(255,".innerText"),O.Nb(),O.Ob(256,"td"),O.Ob(257,"span",5),O.nc(258,"string"),O.Nb(),O.Nb(),O.Ob(259,"td"),O.nc(260,"n/a"),O.Nb(),O.Ob(261,"td"),O.nc(262," The icon inner text, example: "),O.Ob(263,"span",5),O.nc(264),O.Nb(),O.Nb(),O.Nb(),O.Ob(265,"tr"),O.Ob(266,"td"),O.Ob(267,"span",7),O.nc(268,"icons.[iconName]"),O.Nb(),O.nc(269,".class"),O.Nb(),O.Ob(270,"td"),O.Ob(271,"span",5),O.nc(272,"string"),O.Nb(),O.Nb(),O.Ob(273,"td"),O.nc(274,"n/a"),O.Nb(),O.Ob(275,"td"),O.nc(276," The icon class, example: "),O.Ob(277,"span",5),O.nc(278),O.Nb(),O.Nb(),O.Nb(),O.Ob(279,"tr"),O.Ob(280,"td"),O.Ob(281,"span",7),O.nc(282,"icons.[iconName]"),O.Nb(),O.nc(283,".color"),O.Nb(),O.Ob(284,"td"),O.Ob(285,"span",5),O.nc(286,"string"),O.Nb(),O.Nb(),O.Ob(287,"td"),O.nc(288,"n/a"),O.Nb(),O.Ob(289,"td"),O.nc(290," The icon color, example: "),O.Ob(291,"span",5),O.nc(292),O.Nb(),O.Nb(),O.Nb(),O.Ob(293,"tr"),O.Ob(294,"td"),O.Ob(295,"span",7),O.nc(296,"icons.[iconName]"),O.Nb(),O.nc(297,".html"),O.Nb(),O.Ob(298,"td"),O.Ob(299,"span",5),O.nc(300,"string"),O.Nb(),O.Nb(),O.Ob(301,"td"),O.nc(302,"n/a"),O.Nb(),O.Ob(303,"td"),O.nc(304," The icon html and this propriety will override all other icon proprieties,"),O.Kb(305,"br"),O.nc(306," example:"),O.Ob(307,"span",5),O.nc(308),O.Nb(),O.Nb(),O.Nb(),O.Nb(),O.Ob(309,"h3"),O.Ob(310,"a",8),O.Kb(311,"span",3),O.Nb(),O.nc(312,"Component Outputs/Events"),O.Nb(),O.Ob(313,"table"),O.Ob(314,"tr"),O.Ob(315,"th"),O.nc(316,"Event"),O.Nb(),O.Ob(317,"th"),O.nc(318,"Arguments"),O.Nb(),O.Ob(319,"th"),O.nc(320,"Description"),O.Nb(),O.Nb(),O.Ob(321,"tr"),O.Ob(322,"td"),O.nc(323,"(dataChange)"),O.Nb(),O.Ob(324,"td"),O.nc(325," event: "),O.Ob(326,"span",5),O.nc(327,"Object"),O.Nb(),O.nc(328,". "),O.Nb(),O.Ob(329,"td"),O.nc(330," Triggered once a the data is modified. "),O.Nb(),O.Nb(),O.Nb(),O.Nb()),2&b&&(O.zb(264),O.oc(n.exampleIconInnerText),O.zb(14),O.oc(n.exampleIconClass),O.zb(14),O.oc(n.exampleIconColor),O.zb(16),O.oc(n.exampleIconHtml))},directives:[o.a],styles:[".nested-obj[_ngcontent-%COMP%]{color:#bdbdbd}"]}),e)}],d=((c=function b(){_classCallCheck(this,b)}).\u0275mod=O.Hb({type:c}),c.\u0275inj=O.Gb({factory:function(b){return new(b||c)},imports:[[a.c,s.c.forChild(N),i.a]]}),c)}}]);