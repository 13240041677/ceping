var tool = {
    close: function () {//寮圭獥鍏抽棴
        $('.poup .popclose')
            .click(function() {

                $(this).closest('.poup').hide();
                $('.pop-mask').hide();

                if ($(this).attr("data-id") == "1") {
                    window.location.reload();
                }


            });
    },
    tabchange: function () {//琛ㄥ垏鎹�
        $('.tab-change')
            .click(function() {
                $(this).addClass('active').siblings().removeClass('active');
                var height = 0;
                $('.innerpos').each(function () {
                    height += $(this).height();
                });
                $('.choose-type').height(height);

                $('.tab-title .tab-change').each(function(index) {
                    if ($(this).hasClass('active')) {
                        if (index == 0) {
                            $('.paper-part').hide();
                            $('.single').show();
                        } else {
                            $('.paper-part').show();
                            $('.single').hide();
                        }
                    }
                });
            });
    },
    selects: function () {//涓嬫媺
        $('body').click(function (event) {
            var target = event.target;
            if (!$(target).closest('.selects').length) {
                $('.selects>ul').hide();
            } else {
                var clickother = $(target).closest('.selects').length && ($(target).is('li') || $(target).is('img') || $(target).is('input'));
                if (clickother) {
                    $('.selects').children('ul').not($(target).closest('.selects').children('ul')).hide();
                    $(target).closest('.selects').children('ul').toggle();
                    if ($(target).is('li')) {
                        $(target).closest('.selects').children('.select-input').val($(target).text())
                    }
                }
            }
        });
    },
    starts: function (index) {//浜旀槦
        $('.diffcult-start li').removeClass('default')
        $('.diffcult-start li').eq(index).prevAll().andSelf().css('background', 'url(../../../bundle/img/strat-five.png) no-repeat').end().end().nextAll().css('background', 'url(../../../bundle/img/default-start.png) no-repeat');
    },
    tishi: function () {//鎻愮ず
        $('.propt').hover(function () {
            $(this).next().show();
        }, function () {
            $(this).next().hide();
        });
    },
    moredown: function (This, node) {//鏇村
        var str = This.children('img').attr('src').indexOf('more-down.png');
        $(node).toggle();
        if (str > 0) {
            This.children('img').attr('src', '../../../bundle/img/p-more.png');
        } else {
            This.children('img').attr('src', '../../bundle/img/more-down.png')
        }

    },
    morechoose: function () {//宸查€夋嫨
        $('.kind-test .definned')
            .click(function() {
                if ($(this).children('input').prop('checked')) {
                    $(this).children('.kuang').css('background', 'url(../../../bundle/img/gougou.png) no-repeat');
                } else {
                    $(this).children('.kuang').css('background', '#fff');
                }
            });
    },
    preseepaper: function () {//棰勮
        $('.presee-paper')
            .click(function() {
                //$('#papersee').show();
                $('.pop-mask').show();
                //$('.labels').html($('.kind-test').html());
                //$('.pre-content').html($('.edit-content').text());
                //$('.dif-show').html($('.diffcult-start').html())
            });
    },
    treeselect: function () {
        $(".drop_op").unbind("click");
        $(".drop_op").click(function (event) {
            $(this).siblings(".droplist").toggle();
            event.stopPropagation();
            //return false;
        });
        $('body').click(function (event) {
            if ($(event.target).closest(".tree_selects").length == 0) {
                $(".droplist").hide();
            }
        });
    },
    treeselects: function () {//鐭ヨ瘑鐐规爲鐨勫睍绀�
        $('.drop_op').click(function () {
            console.log($('.drop_op').not($(this)))
            $('.drop_op').not($(this)).each(function () {
                $(this).next().hide();
            })
        })
    }

}