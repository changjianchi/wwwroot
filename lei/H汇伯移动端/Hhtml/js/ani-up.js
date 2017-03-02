

    var animateA = $('.ani-up');
    var A_window = $('.scroller');
    var winHeight = $(window).height();
    var aniC = 0;

    A_window.on('click touchmove',function(){
        AnimateA();
    });
    A_window.trigger('click');
    A_window.on('touchend',function(){
        clearTimeout(setend);
        var setend = setTimeout(function(){
            AnimateA();
            setend = setTimeout(function(){
                AnimateA();
            }, 500);
        }, 500);
    });

    function AnimateA(){

        var winTop = 0;

        $('.ani-up').each(function(){

            var thTop = $(this).offset().top;
            var This = $(this);

            if(winTop > thTop - winHeight - 10){ 

                setTimeout(function(){
                    Animate(This);
                },aniC*500);

                if(This.hasClass('shuzi-deijia')){

                    var ThisMr = This.find('b').html();
                    setTimeout(function(){
                        shuzidiejia(This,ThisMr,58);
                    },(aniC+2)*400);
                    This.find('b').html(0);

                }

                aniC++;
                $(this).hasClass('ani-last')?aniC = 0:aniC;
                $(this).hasClass('ani-x')?setTimeout(function(){Animate($('.ani-up').eq(0))},aniC*500):false;
                $(this).removeClass('ani-up');
                
            }
            
        });
    }

    function Animate(Name){ //淡入淡出
        Name.addClass('active');
    }


    function shuzidiejia(a,s,b){ //数字叠加
        var a = a;
        var aHtml = Number(s);
        a.find('b').html(0);
        var b = parseInt(aHtml/b);
        b<=0?b=1:b;
        var rHtml = 0;
        var aHtmlTime = setInterval(function(){
            if(rHtml < aHtml){
                a.find('b').html(rHtml);
                rHtml = rHtml + b;
            }else{
                aHtml = format_number(aHtml);
                a.find('b').html(aHtml);
                clearInterval(aHtmlTime);
            }
        }, 8);
    }

    function format_number(n){  
        var b=parseInt(n).toString();  
        var len=b.length;  
        if(len<=3){return b;}  
        var r=len%3;  
        return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");  
    } 


    
