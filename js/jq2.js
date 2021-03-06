jQuery("#list4").jqGrid({
	datatype: "local",
   	colNames:['Inv No','Client', 'Amount','Tax','Total'],
   	colModel:[
   		{name:'id',index:'id', width:60, sorttype:"int"},
   		{name:'name',index:'name', width:100},
   		{name:'amount',index:'amount', width:80, align:"right",sorttype:"float"},
   		{name:'tax',index:'tax', width:80, align:"right",sorttype:"float"},		
   		{name:'total',index:'total', width:80,align:"right",sorttype:"float"},		
   	],
    caption:"Navigator Example",
	height:210
});
var mydata = [
		{id:"1",name:"Daniela",amount:"200.00",tax:"10.00",total:"210.00"},
		{id:"2",name:"Mara",amount:"300.00",tax:"20.00",total:"320.00"},
		{id:"3",name:"Jose",amount:"400.00",tax:"30.00",total:"430.00"},
		{id:"4",name:"Joao",amount:"200.00",tax:"10.00",total:"210.00"},
		{id:"5",name:"test2",amount:"300.00",tax:"20.00",total:"320.00"},
		{id:"6",name:"test3",amount:"400.00",tax:"30.00",total:"430.00"},
		{id:"7",name:"test",amount:"200.00",tax:"10.00",total:"210.00"},
		{id:"8",name:"test2",amount:"300.00",tax:"20.00",total:"320.00"},
		{id:"9",name:"test3",amount:"400.00",tax:"30.00",total:"430.00"}
		];

for(var i=0;i<=mydata.length;i++)
{
	jQuery("#list4").jqGrid('addRowData',i+1,mydata[i]);
}

jQuery("#list4").jqGrid('navGrid','#pager2',
{}, //options
{height:280,reloadAfterSubmit:false}, // edit options
{height:280,reloadAfterSubmit:false}, // add options
{reloadAfterSubmit:false}, // del options
{} // search options
);