// #page1swipe���E���獶�փX���C�v�������̓���iswipeleft��page2view�̊֐����Ăяo���j
 $('#page1').live('pagecreate',function(){
  console.log("aa");
  $('#page1swipe').live('swipeleft',page2view);
 });
 
// #page2swipe��������E�փX���C�v�������̓���iswiperight��page1view_back�̊֐����Ăяo���j
// #page2swipe���E���獶�փX���C�v�������̓���iswipeleft��page3view�̊֐����Ăяo���j
 $('#page2').live('pagecreate',function(){
 $('#page2swipe').live('swiperight',page1view_back);
 $('#page2swipe').live('swipeleft',page3view);
 });
 
// #page3swipe��������E�փX���C�v�������̓���iswiperight��page2view_back�̊֐����Ăяo���j
 $('#page3').live('pagecreate',function(){
 $('#page3swipe').live('swiperight',page2view_back);
 });
 
 
 // #page1�֖߂�i { reverse: true } �Ńy�[�W�ړ��̃A�j���[�V�������t�Đ��j
 function page1view_back(){
 $.mobile.changePage('#page1', { reverse: true } ,'slide',false,true);
 }
 
// #page2�֐i��
 function page2view(){
 $.mobile.changePage('#page2','slide',true,true);
 }
 
// #page2�֖߂�i { reverse: true } �Ńy�[�W�ړ��̃A�j���[�V�������t�Đ��j
 function page2view_back(){
 $.mobile.changePage('#page2', { reverse: true } ,'slide',true,true);
 }
 
// #page3�֐i��
 function page3view(){
 $.mobile.changePage('#page3','slide',true,true);
 }

