$(function(){
//add_new_paper.hmtl
    //li关闭 A_N_P_li
    var anp_li_clos = $('.A_N_P_li ul li');
    anp_li_clos.on('click','em',function(){
        $(this).parent().remove();
    });
    //内容切换 A_N_P_Tk
    var anp_tk_input1 = $('.A_N_P_Tkone'),
        anp_tk_input2 = $('.A_N_P_Tktwo'),
        anp_tk_sibi1 = $('.sibe_A'),
        anp_tk_sibi2 = $('.sibe_B');
    anp_tk_input1.on('click',function(){
        anp_tk_sibi1.css('display','block');
        anp_tk_sibi2.css('display','none');
    });
    anp_tk_input2.on('click',function(){
        anp_tk_sibi2.css('display','block');
        anp_tk_sibi1.css('display','none');
    });
    //点击更换框 A_N_P_Sul 
    var anp_ul_li = $('.A_N_P_Sul ul');
    anp_ul_li.on('click','li',function(){
        if(!$(this).hasClass('A_N_P_Sli')){
            $(this).siblings().removeClass('A_N_P_Sli');
            $(this).addClass('A_N_P_Sli');
        }
    });
    var anp_t_a = $('.Add_New_Paper_Tone-a ul');
    anp_t_a.on('click','li',function(){
        if(!$(this).hasClass('A_N_P_Sli')){
            $(this).siblings().removeClass('A_N_P_Sli');
            $(this).addClass('A_N_P_Sli');
        }
    });
//add_paper.html
    //弹窗 选择我以往添加过的小卷
    var addpap_t9 = $('.addpap_t9 ul');
    addpap_t9.on('click','li',function(){
        if(!$(this).hasClass('A_N_P_Ali')){
            $(this).siblings().removeClass('A_N_P_Ali');
            $(this).addClass('A_N_P_Ali');
        }
    });
    //弹窗 T6 bt切换
    var addpap_t6 = $('.addpap_t6 ul');
    addpap_t6.on('click','li',function(){
        if(!$(this).hasClass('Add_Paper_T629')){
            $(this).siblings().removeClass('Add_Paper_T629');
            $(this).addClass('Add_Paper_T629');
        }
    });


});