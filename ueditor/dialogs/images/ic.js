var hoverImage, scrolling, scrollTimmer;

function loadImage(event) {
    var obj = event.target;
    if (obj.width) {
        var rect = hoverImage.getBoundingClientRect();
        if (rect.right <= 328) {
            $('#preview').removeClass('arrow-left').addClass('arrow-right').css({
                top: rect.top,
                left: rect.right - 12
            });
        } else {
            $('#preview').removeClass('arrow-right').addClass('arrow-left').css({
                top: rect.top,
                left: rect.left - 26
            });
        }
        // 设置预览区域纵向边界
        var boundRect = {
            top: 72,
            bottom: 435
        };
        var previewBottom = rect.top + $('#preview').height();
        // 计算预览框的纵向坐标范围
        var previewRect = {
            top: rect.top,
            bottom: previewBottom
        };
        var previewTop = rect.top - (previewRect.bottom - boundRect.bottom);
        if (previewRect.bottom > boundRect.bottom) {
            $('#preview').css({
                top: previewTop
            });
        }
        // 设置标识箭头的相对位置
        var caretTop = rect.top - previewTop;
        caretTop = caretTop <= 10 ? 20 : caretTop + 20;
        $('#preview').find('.caret').css('top', caretTop);
        $('#preview').show();
    }
}

function PictureLoader(data) {
    var key = '',
        $container, page = 1,
        page_size = 32,
        pageTotal = 0,
        loading,
        loadDone,
        loadTimer,
        fuzzy_search = 0,
        position = 'articlestock',
        search_from = '';

    function init() {
        if (!data) {
            return;
        }
        key = data.key || '';
        loading = false;
        loadDone = false;
        $container = $(data.container);
        addListener();
    }

    // 注册事件
    function addListener() {
        $('.flex-images').on('scroll', function() {
            scrolling = true;
            if (loadDone) {
                return;
            }
            if (scrolling) {
                scrollTimmer = setTimeout(function() {
                    scrolling = false;
                    clearTimeout(scrollTimmer);
                }, 1000);
            }
            var h = $(this)[0].scrollHeight;
            var top = $(this).scrollTop();
            if (top >= h - 360) {
                $('.grids').addClass('loading');
                loadMore();
            }
        });
    }

    function scaleImage(width, height, isHeight) {
        if (isHeight) {
            return {
                height: 120,
                width: Math.floor(width * 120 / height)
            }
        }
        var maxWidth = width > height ? 1 : 0,
            maxValue = Math.max(width, height),
            v = maxValue / 200;
        return {
            width: maxWidth ? 200 : Math.floor(width / v),
            height: maxWidth ? Math.floor(height / v) : 200
        };
    }
    var initFlex = false;


    function truncate(st, length) {
        if (st.length > length) {
            return st.substring(0, length) + '...'
        }
        return st;
    }
    // 获取数据
    function getImage(load, callback) {
        // var key = $('[name=ic]').val();
        var ic_tip = '没有找到关于「' + truncate(key, 10) + '」的图片，为你找到了一些相关的';
        if (!load) {
            $('.use-manual').hide();
            $('.loading-holder').show();
            $('.wrapper-picture').hide();
        }
        if (key.trim() === '') {
            $('[name=ic]').focus();
        } else {
            /**
             * 添加根据search判断position
             */
            var search = top.location.search;
            if(search.indexOf('article_type=3')>-1){//发表图集
                position = 'albumstock'
            }
            $.get('/article/get_ic_picture_list/', {
                term: key,
                pagenum: page,
                page_size: page_size,
                fuzzy_search: fuzzy_search,
                position: position,
                search_from: search_from
            }, function(data) {
                loading = false;
                if (data.message !== 'success') {
                    $('.tips').html(data.reason).show();
                    $('.wrapper-picture').hide();
                    initHeight(false);
                } else if (data.data.list && data.data.list.length === 0) {
                    if (fuzzy_search == 1) {
                        $('.tips').html('<span>没有该类型的图片资源</span></div>').show();
                    }
                    if (fuzzy_search == 0) {
                        fuzzy_search = 1;
                        getImage();
                    }
                    $('.wrapper-picture').hide();
                    initHeight(false);
                } else {
                    var temp = [];
                    var len = data.data.list.length;
                    data.data.list.map(function(item, i) {
                        var wh = scaleImage(item.width, item.height);
                        temp.push('<div class="item" data-h="' + wh.height + '" data-w="' + wh.width + '"  data-id="' + item.id + '"><img data-id="' + item.id + '" data-source="' + item.img + '" alt="' + item.id + '" src="' + item.small_img + '"/></div>');
                    });
                    if (fuzzy_search == 1) {
                        $('.ic-tip').text(ic_tip);
                    } else {
                        $('.ic-tip').text('部分图片不符合今日头条内容规范，请在遵守内容规范的前提下使用图片');
                    }
                    pageTotal = data.data.page_info.total_page;
                    $('.wrapper-picture').show();
                    if (load) {
                        $('.grids').append(temp.join(''));
                    } else {
                        $('.grids').html('').append(temp.join(''));
                    }
                    //if (!initFlex) {
                    $('.grids').css({
                        marginRight: "0"
                    });
                    $('.grids').flexImages({
                        rowHeight: 120,
                        truncate: 1,
                        maxRows: 300
                    });
                    $('.grids').css({
                        marginRight: "-20px"
                    });
                    // initFlex = true;
                    // }
                    initHeight(true);
                    $('#manual').hide();
                    $('.tips').hide();
                    $('.seprate').hide();
                    $('#btns').show();
                    $('#footer').show();
                }
                callback && callback.call(null, data);
                $('.loading-holder').hide();
            }).error(function(data) {
                $('.tips').html('<span>网络请求错误</span>');
                $('.loading-holder').hide();
            });
        }
    }

    function loadMore() {
        if (loading) {
            return;
        }
        loading = true;
        if (page >= pageTotal) {
            $('.grids').removeClass('loading');
            loadDone = true;
            return false;
        } else {
            page++;
            setTimeout(function() {
                getImage(true, function() {
                    $('.grids').removeClass('loading');
                });
            }, 1000);
            return true;
        }
    }

    function reset() {
        page = 1;
        pageTotal = 0;
        key = '';
        fuzzy_search = 0;
        loadDone = false;
        loading = false;
    }

    function reloadByKey(keyval,searchFrom) {
        if (!keyval) {
            return;
        }
        reset();
        key = keyval;
        search_from = searchFrom;
        getImage();
    }

    init();

    return {
        reloadByKey: reloadByKey
    };
}

function initHeight(show) {
    if (!show) {
        top.$('.edui-for-icDialog').find('.edui-dialog-body').css('height', 210);
        top.$('.edui-for-icDialog').find('.edui-dialog-content').css('height', 146);
    } else {
        top.$('.edui-for-icDialog').find('.edui-dialog-body').css('height', 590);
        top.$('.edui-for-icDialog').find('.edui-dialog-content').css('height', 540);
        var topOffset = (top.innerHeight - 590) / 2;
        top.$('.edui-for-icDialog[id]').css('top', topOffset);
    }
    $('.manual').hide();
    $('.use-manual').hide();
}

$(function() {
    var pictureLoader,
        key,
        multiple = typeof dialog.multiple !== 'undefined'? dialog.multiple : true;

    var getPictureLoader = function() {
        if (!pictureLoader) {
            pictureLoader = new PictureLoader({
                container: '.grids'
            });
        }
        return pictureLoader;
    };

    var mysort = (function() {
        var sort = [],
            index;

        var reset = function() {
            sort = [];
            index = null;
        }

        var resort = function(target, action) {
            // debugger
            if (action == 'add') {
                sort.push(target[0]);
            }
            if (action == 'remove') {
                index = sort.indexOf(target[0]);
                sort.splice(index, 1);
            }
            for (var i = 0; i < sort.length; i++) {
                sort[i].setAttribute('data-sort', i + 1);
            }
        };
        return {
            reset: reset,
            sort: resort
        }
    })();

    function preview(src, obj) {
        $('#preview').html('</div><img onload="loadImage(event)" src="' + src + '"/><div class="caret"></div>');
    }

    $('#searchBtn').click(function() {
        var key = $('[name=ic]').val();
        getPictureLoader().reloadByKey(key);
        mysort.reset();
    });

    $('[name=ic]').keyup(function(event) {
        if (event.keyCode === 13) {
            key = $(this).val();
            getPictureLoader().reloadByKey(key);
            mysort.reset();
        }
    });

    if (dialog.tab == 1 && dialog.searchKey) {
        $('[name=ic]').val(dialog.searchKey);
        getPictureLoader().reloadByKey(dialog.searchKey);
    }

    var node, show = false,
        timer1,
        timer2;

    $('.wrapper-picture').delegate('.item', 'mouseover', function() {
        if (scrolling) {
            return;
        }
        var that = this;
        var offset = $(that).offset();
        hoverImage = that;
        if (!show) {
            timer1 = setTimeout(function() {
                var src = $(that).find('img').attr('data-source');
                preview(src, that);
            }, 1000);
            show = true;
        }
    }).delegate('.item', 'mouseout', function() {
        clearTimeout(timer1);
        timer2 = setTimeout(function() {
            $('#preview').hide();
        }, 500);
        show = false;
    }).delegate('.item', 'click', function() {
        if (multiple) {
            var action = "";
            if ($('.wrapper-picture').find('.checked').find('img').length >= 5) {
              if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
                $('#ic-message-error').hide();
                action = 'remove';
                mysort.sort($(this), action);
              }
              else {
                $('#ic-message-error').show();
              }
              return ;
            }
            $('#ic-message-error').hide();
            $(this).toggleClass('checked');
            action = $(this).hasClass('checked') ? 'add' : 'remove';
            mysort.sort($(this), action);
        } else {
            $(this).addClass('checked');
            var that = $(this);
            $('.wrapper-picture').find('.item').each(function() {
                if (!$(this).is(that)) {
                    $(this).removeClass('checked');
                }
            });
        }
    });
    $('#pager').delegate('[data-page]', 'click', function() {
        var page = parseInt($(this).data('page'));
        $('.tui-pagination-jump-number').val(page);
        fetchList(page);
    });
    $('#pager').delegate('.tui-pagination-jump-btn', 'click', function() {
        var page = parseInt($('.tui-pagination-jump-number').val());
        fetchList(page);
    });
    // 删除关闭窗口事件
    $('#dialog-cancel, #resource-cancel').click(function() {
        dialog.close();
        //log('插入图片_关闭窗口')
    });

    dialog.addListener('close', function(event) {
        lock(false);
        dialog.tab = 0;
        dialog.searchKey = '';
    });

    $('#dialog-ok').click(function() {
        var selected = $('.wrapper-picture').find('.checked');
        var sorted = selected.sort(function(prev, next) {
            return prev.getAttribute('data-sort') - next.getAttribute('data-sort');
        });

        var ic = [],
            i;

        for( i = 0; i < sorted.length; i ++) {
            ic.push(sorted[i].children[0]);
        }

        if (ic.length == 0) {
            return;
        }
        /**
         * 添加根据search判断position
         */
        var position = 'articlestock';
        var search = top.location.search;
        if(search.indexOf('article_type=3')>-1){//发表图集
            position = 'albumstock'
        }
        $(this).attr('disabled', true);
        var icData = [];
        for (var i = 0; i < ic.length; i++) {
            icData.push({
                id: ic[i].getAttribute('data-id'),
                term: $('[name=ic]').val(),
                position: position,
                source: ic[i].getAttribute('source')
            });
        }
        icData = multiple ? icData : icData[0];
        editor.fireEvent('log', { type:'insertimage',  arguments: [3,multiple? icData.length:1]});
        editor.fireEvent('log', { type: 'ga',  arguments:['send','event','click','确认插入免费正版图片']});
        editor.execCommand('inserticnew', icData);
    });

    /**
     * User: zhushihao
     * Date: 17-05-04
     * 添加相关正版图片推荐模块
     */
    // 发表图集时不做推荐
    (function () {
        var search = top.location.search;
        if(search.indexOf('article_type=3')>-1) {
            return;
        }
        var key = $.trim(top.document.getElementById('title').value),
            recommendBlock = document.querySelector('.recommend'),
            recommendList = document.createElement('ul'),
            more = document.querySelector('.recommend .more');
        function getRecommendPictures(fuzzy_search){
            var selectionText = '';
            if (editor.selection.getRange().startContainer.nodeType == 3) {
                selectionText = editor.selection.getRange().startContainer.textContent;
                selectionText = encodeURI(selectionText)==='%E2%80%8B'?'':selectionText
            }
            $.get('/article/get_recommend_ic_picture_list/', {
                title: selectionText || key,
                fuzzy_search: fuzzy_search,
                position: 'articleup_rec',
                search_from: key?'title':'user_cat'
            }, function(data) {
                if (data.message === 'success' && data.data.list && data.data.list.length >= 10) {
                    var list = data.data.list,
                        term = data.data.term,
                        widthSum=0,
                        adjustHeight;
                    recommendList.className = "recommend-list";
                    for(var i=0;i<list.length;i++){
                        recommendList.appendChild(createLi(list[i],i));
                        widthSum += (scaleImage(list[i]).width+10);
                        maxWidth = 620;
                        if(widthSum-10>=maxWidth){
                            adjustHeight = 120*maxWidth/widthSum;
                            break;
                        }
                    }
                    recommendBlock.appendChild(recommendList);
                    recommendList.style.height = adjustHeight+"px";
                    recommendBlock.style.display = '';
                    bindImageClick(term);
                    bindMoreClick(term);
                }else if(fuzzy_search === 0 && key){
                    getRecommendPictures(1);
                }
            });
        }
        function bindImageClick(term){
            recommendList.addEventListener('click',function(e){
                var multiple = typeof dialog.multiple !== 'undefined'? dialog.multiple : true,
                    img = e.target,
                    icData = [{
                        id: img['data-id'],
                        source: img['data-source'],
                        term: term,
                        position: 'articleup_rec'
                    }];
                icData = multiple ? icData : icData[0];
                editor.execCommand('inserticnew', icData);
                // ga 统计
                editor.fireEvent('log', {type: 'ga',arguments:['send', 'event', 'click', '点击推荐的正版图片']});
                // 插入图片统计
                editor.fireEvent('log', {type: 'insertimage',arguments:[3,1]});
            })
        }
        function createLi(item,index){
            var li = document.createElement('li');
            var image = document.createElement('img');
            image.src = item.small_img;
            image['data-source'] = item.img
            image['data-id'] = item.id
            image.alt = '推荐图片';
            li.appendChild(image);
            return li;
        }
        function scaleImage(item){
            return{
                height: item.height,
                width: 120*item.width/item.height
            }
        }
        function bindMoreClick(term){
            more.addEventListener('click',function(){
                //切换panel
                togglePannel(1);
                //设置搜索值和搜索结果
                var input = document.querySelector('[name=ic]');
                input.value = term;
                getPictureLoader().reloadByKey(term,'rec');
                // ga 统计
                ga('send', 'event', 'click', '查看更多正版图片');
            })
        }
        function togglePannel(index) {
            var $tabItem = $('.tui-tab'),
                $tabPanel = $('.tui-tab-panel');
            $tabItem.eq(index).addClass('tui-tab-selected');
            $tabItem.eq(index).siblings().removeClass('tui-tab-selected')
            $tabPanel.eq(index).show();
            $tabPanel.eq(index).siblings().removeClass('tui-tab-selected').hide();
        }
        getRecommendPictures(0);
    })()

});
