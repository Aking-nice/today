//锁定页面滚动条
function scroll() {
    var body = top.$('body');
    return function(lock) {
        if (lock) {
            body.addClass("modal-open");
        } else {
            body.removeClass("modal-open");
        }
    };
}
var lock = scroll();
lock(true);

function log(actionType) {
    ga('send', 'event', 'click', actionType);
    setTimeout(function() {
        dialog.close();
    }, 200)
}

var $currentPage = $('#current-page');
var $prePage = $('.temai-page-pre');
var $nextPage = $('.temai-page-next');
var $jumpPage = $('[name="jump-page"]');
var $totalPage = $('#total-page');
var is_collect = 0;
var $resource_pager = $('#resource_pager');

// 获取资源管理器图片
function fetchMyImage(is_saved, page_index, callback) {
    callback = callback || function() {}
    var page_size = 12,
        page_num = 0,
        current_page = page_index || 1;
    is_collect = is_saved;
    $.ajax({
        url: '/article/get_storage_resource/',
        method: 'get',
        data: {
            resource_type: 3,
            is_saved: is_saved,
            page_size: page_size,
            page_index: current_page
        },
        success: function(data) {
            if (data.message === 'success') {
                if (data.data.total_count == 0) {
                    $('.resource-grid').hide();
                    $('.no-data').show();
                    return;
                }
                $jumpPage.val(current_page);
                page_num = Math.ceil(data.data.total_count / page_size);
                $totalPage.text(page_num);
                $currentPage.text(current_page);
                $resource_pager.show();
                var temps = [],
                    temp;
                var resourceList = data.data.resource_list;
                for (var i = 0; i < resourceList.length; i++) {
                    temp = '<div class="resource-item"><img data-alt="' + resourceList[i].resource_id + '" src="https://p1.pstatp.com/large/' + resourceList[i].resource_id + '"/></div>';
                    temps.push(temp);
                }
                $('.resource-grid').html(temps.join('')).show();
                $('.no-data').hide();
            } else {
                $('.resource-grid').hide();
                $('.no-data').show();
                $resource_pager.hide();
            }
            callback(data);
        },
        error: function(data) {
            $resource_pager.hide();
            callback(data);
        }
    });
}

// 同步图片到资源管理器
function addResource(resource_id, callback) {
    $.ajax({
        url: '/article/change_media_resource_ref/',
        method: 'post',
        data: {
            resource_id: resource_id,
            resource_type: 3,
            operation: 'add'
        },
        success: function(data) {
            if (data.message === 'success') {
                console.log('图片同步成功');
            } else {
                console.log('图片同步失败');
            }
        },
        error: function(data) {
            console.log('接口请求异常');
        }
    });
}

// 图片选择器
function imagePick($image, containerSelector) {
    var $images = [];

}


(function() {
    var tab = document.querySelector('.tui-tabs'),
        tablist = tab.querySelector('.tui-tab-list'),
        tabPanel = tab.querySelectorAll('.tui-tab-panel');
    closeBtn = document.querySelector('.tui-dialog-close-x');

    var $tabItem = $('.tui-tab');
    var $tabPanel = $('.tui-tab-panel');

    function togglePannel(index) {
        $tabItem.eq(index).addClass('tui-tab-selected');
        $tabItem.eq(index).siblings().removeClass('tui-tab-selected')
        $tabPanel.eq(index).show();
        $tabPanel.eq(index).siblings().removeClass('tui-tab-selected').hide();
    }
    $tabItem.click(function(event) {
        var index = $(this).index();
        togglePannel(index);
        if (index == 0) {
            ga('send', 'event', 'click', '插入图片_上传图片');
        } else if (index == 1) {
            ga('send', 'event', 'click', '插入图片_免费正版图片');
        } else if (index == 2) {
            ga('send', 'event', 'click', '插入图片_素材库');
        }
    });
    if (dialog.tab === 1) {
        togglePannel(1);
    }
    // 取消关闭窗口的事件
    closeBtn.addEventListener('click', function(event) {
        dialog.close();
    //     log('插入图片_关闭窗口');
    });
})();

/**
 * User: Jinqn
 * Date: 14-04-08
 * Time: 下午16:34
 * 上传图片对话框逻辑代码,包括tab: 远程图片/上传图片/在线图片/搜索图片
 */

(function() {

    var remoteImage,
        uploadImage,
        onlineImage,
        searchImage;
    var uploader;
    var hasUploaded = false;
    // 初始化文件是否支持多选
    var multiple = typeof dialog.multiple !== 'undefined' ? dialog.multiple : true;
    // window.onload = function() {
    //     initTabs();
    //     initButtons();
    // };
    $(function() {
        initTabs();
        initButtons();
    });

    /* 初始化tab标签 */
    function initTabs() {
        var img = editor.selection.getRange().getClosedNode();
        setTabFocus('upload');
        if (hasUploaded) {
            $('.image-footer').show();
        } else {
            $('.image-footer').hide();
        }
    }

    /* 初始化tabbody */
    function setTabFocus(id) {
        if (!id) return;
        switch (id) {
            case 'upload':
                uploadImage = uploadImage || new UploadImage('queueList');
                break;
        }
    }

    /* 初始化onok事件 */
    function initButtons() {
        $('#local-ok').click(function() {
            var remote = false,
                list = [],
                id = "upload";
            switch (id) {
                case 'upload':
                    list = uploadImage.getInsertList();
                    var count = uploadImage.getQueueCount();
                    if (count) {
                        $('.info', '#queueList').html('<span style="color:red;">' + '还有2个未上传文件'.replace(/[\d]/, count) + '</span>');
                        return false;
                    }
                    break;
            }

            if (list) {
                if ($('#add_resource').prop('checked')) {
                    // 同步到资源管理器
                    if (list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            addResource(list[i].alt);
                        }
                    }
                }
                if (uploadImage.sortable.option('dragflag')) {
                    log('拖拽调整图片顺序');
                }
                editor.execCommand('insertimage', list);
                remote && editor.fireEvent("catchRemoteImage");
                log('确认插入上传图片');
                editor.fireEvent('log', {type: 'insertimage',arguments:[1,list.length]});
            }
        });
        // 删除关闭窗口事件
        $('#local-cancel').click(function() {
            dialog.close();
        //     log('插入图片_关闭窗口');
        });
        
    }

    /* 设置对齐方式 */
    function setAlign(align) {
        align = align || 'none';
        var aligns = $G("alignIcon").children;
        for (i = 0; i < aligns.length; i++) {
            if (aligns[i].getAttribute('data-align') == align) {
                domUtils.addClass(aligns[i], 'focus');
                $G("align").value = aligns[i].getAttribute('data-align');
            } else {
                domUtils.removeClasses(aligns[i], 'focus');
            }
        }
    }

    /* 获取对齐方式 */
    function getAlign() {
        var align = 'none';
        return align == 'none' ? '' : align;
    }

    /* 上传图片 */
    function UploadImage(target) {
        this.$wrap = target.constructor == String ? $('#' + target) : $(target);
        this.init();
    }

    /* 图片点击排序 */
    function clickSort() {
        var sort = [],
            index;

        var reset = function() {
            sort = [];
        };

        var resort = function(target, action) {
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
    }

    var mysort = clickSort();

    $('.subtab').delegate('li', 'click', function(event) {
        $(this).addClass('actived').siblings().removeClass('actived');
        var type = $(this).data('type');
        mysort.reset();
        fetchMyImage(type, 1);
    });

    $('.resource-grid').delegate('.resource-item', 'click', function(event) {
        $(this).toggleClass('checked');
        var action = $(this).hasClass('checked') ? 'add' : 'remove';
        mysort.sort($(this), action);
    });

    $('#resource-ok').click(function() {
        var selected = $('.resource-grid').find('.checked');
        var sorted = selected.sort(function(prev, next) {
            return prev.getAttribute('data-sort') - next.getAttribute('data-sort');
        });

        var images = [],
            i;

        for( i = 0; i < sorted.length; i ++) {
            images.push(sorted[i].children[0]);
        }

        if (images.length == 0) {
            return;
        }

        $(this).attr('disabled', true);
        var imageData = [],
            alt;

        for (var i = 0; i < images.length; i++) {
            alt = images[i].getAttribute('data-alt');
            imageData.push({
                alt: alt,
                floatStyle: "",
                src: "https://p1.pstatp.com/large/" + alt,
                title: "",
                _src: "https://p1.pstatp.com/large/" + alt
            });
        }
        editor.execCommand('insertimage', imageData);
        log('确认插入素材库图片');
    });

    fetchMyImage(0, 1, function(data) {});

    UploadImage.prototype = {
        init: function() {
            this.imageList = [];
            this.initContainer();
            this.initUploader();
            hasUploaded = false;
            this.sortable = null;
        },
        initContainer: function() {
            this.$queue = this.$wrap.find('.filelist');
        },
        /* 初始化容器 */
        initUploader: function() {
            var _this = this,
                $ = jQuery, // just in case. Make sure it's not an other libaray.
                $wrap = _this.$wrap,
                // 图片容器
                $queue = $wrap.find('.filelist'),
                // 状态栏，包括进度和控制按钮
                $statusBar = $wrap.find('.statusBar'),
                // 文件总体选择信息。
                $info = $statusBar.find('.info'),
                // 上传按钮
                $upload = $wrap.find('.uploadBtn'),
                // 上传按钮
                $filePickerBtn = $wrap.find('.filePickerBtn'),
                // 上传按钮
                $filePickerBlock = $wrap.find('.filePickerBlock'),
                // 没选择文件之前的内容。
                $placeHolder = $wrap.find('.placeholder'),
                // 总体进度条
                $progress = $statusBar.find('.progress').hide(),
                // 添加的文件数量
                fileCount = 0,
                // 添加的文件总大小
                fileSize = 0,
                // 优化retina, 在retina下这个值是2
                ratio = window.devicePixelRatio || 1,
                // 缩略图大小
                thumbnailWidth = 113 * ratio,
                thumbnailHeight = 113 * ratio,
                // 可能有pedding, ready, uploading, confirm, done.
                state = '',
                // 所有文件的进度信息，key为file id
                percentages = {},
                supportTransition = (function() {
                    var s = document.createElement('p').style,
                        r = 'transition' in s ||
                        'WebkitTransition' in s ||
                        'MozTransition' in s ||
                        'msTransition' in s ||
                        'OTransition' in s;
                    s = null;
                    return r;
                })(),
                // WebUploader实例
                uploader,
                actionUrl = editor.getActionUrl(editor.getOpt('imageActionName')),
                acceptExtensions = (editor.getOpt('imageAllowFiles') || []).join('').replace(/\./g, ',').replace(/^[,]/, ''),
                imageMaxSize = editor.getOpt('imageMaxSize'),
                imageCompressBorder = editor.getOpt('imageCompressBorder');

            if (!WebUploader.Uploader.support()) {
                $('#filePickerReady').after($('<div>').html(lang.errorNotSupport)).hide();
                return;
            } else if (!editor.getOpt('imageActionName')) {
                $('#filePickerReady').after($('<div>').html(lang.errorLoadConfig)).hide();
                return;
            }
            uploader = _this.uploader = WebUploader.create({
                pick: {
                    id: '#filePickerReady',
                    label: lang.uploadSelectFile,
                    multiple: multiple
                },
                accept: {
                    title: 'Images',
                    extensions: acceptExtensions,
                    mimeTypes: 'image/jpeg,image/jpg,image/png,image/x-png,image/gif'
                },
                swf: '../../third-party/webuploader/Uploader.swf',
                server: actionUrl,
                fileVal: editor.getOpt('imageFieldName'),
                duplicate: true,
                fileSingleSizeLimit: imageMaxSize, // 默认 2 M
                compress: editor.getOpt('imageCompressEnable') ? {
                    width: imageCompressBorder,
                    height: imageCompressBorder,
                    // 图片质量，只有type为`image/jpeg`的时候才有效。
                    quality: 90,
                    // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
                    allowMagnify: false,
                    // 是否允许裁剪。
                    crop: false,
                    // 是否保留头部meta信息。
                    preserveHeaders: true
                } : false
            });
            uploader.addButton({
                id: '#filePickerBlock'
            });
            uploader.addButton({
                id: '#filePickerBtn',
                label: lang.uploadAddFile
            });

            setState('pedding');

            // 当有文件添加进来时执行，负责view的创建
            function addFile(file, fileCount) {
                var $li = $('<li id="' + file.id + '">' +
                        '<p class="title">' + file.name + '</p>' +
                        '<p class="imgWrap"></p>' +
                        '<p class="progress"><span></span></p>' +
                        '</li>'),

                    $btns = $('<div class="file-panel">' +
                        '<span class="cancel">' + lang.uploadDelete + '</span>' +
                        '<span class="rotateRight">' + lang.uploadTurnRight + '</span>' +
                        '<span class="rotateLeft">' + lang.uploadTurnLeft + '</span></div>').appendTo($li),
                    $prgress = $li.find('p.progress span'),
                    $wrap = $li.find('p.imgWrap'),
                    $info = $('<p class="error"></p>').hide().appendTo($li),

                    showError = function(code) {
                        switch (code) {
                            case 'exceed_size':
                                text = lang.errorExceedSize;
                                break;
                            case 'interrupt':
                                text = lang.errorInterrupt;
                                break;
                            case 'http':
                                text = lang.errorHttp;
                                break;
                            case 'not_allow_type':
                                text = lang.errorFileType;
                                break;
                            default:
                                text = lang.errorUploadRetry;
                                break;
                        }
                        $info.text(text).show();
                    };

                if (file.getStatus() === 'invalid') {
                    showError(file.statusText);
                } else {
                    $wrap.text(lang.uploadPreview);
                    if (browser.ie && browser.version <= 7) {
                        $wrap.text(lang.uploadNoPreview);
                    } else {
                        uploader.makeThumb(file, function(error, src) {
                            if (error || !src) {
                                $wrap.text(lang.uploadNoPreview);
                            } else {
                                var $img = $('<img src="' + src + '">');
                                $wrap.empty().append($img);
                                $img.on('error', function() {
                                    $wrap.text(lang.uploadNoPreview);
                                });
                            }
                        }, thumbnailWidth, thumbnailHeight);
                    }
                    percentages[file.id] = [file.size, 0];
                    file.rotation = 0;

                    /* 检查文件格式 */
                    if (!file.ext || acceptExtensions.indexOf(file.ext.toLowerCase()) == -1) {
                        showError('not_allow_type');
                        uploader.removeFile(file);
                    }
                }

                file.on('statuschange', function(cur, prev) {
                    if (prev === 'progress') {
                        $prgress.hide().width(0);
                    } else if (prev === 'queued') {
                        $li.off('mouseenter mouseleave');
                        $btns.remove();
                    }
                    // 成功
                    if (cur === 'error' || cur === 'invalid') {
                        showError(file.statusText);
                        percentages[file.id][1] = 1;
                    } else if (cur === 'interrupt') {
                        showError('interrupt');
                    } else if (cur === 'queued') {
                        percentages[file.id][1] = 0;
                    } else if (cur === 'progress') {
                        $info.hide();
                        $prgress.css('display', 'block');
                    } else if (cur === 'complete') {}

                    $li.removeClass('state-' + prev).addClass('state-' + cur);
                });

                $li.on('mouseenter', function() {
                    $btns.stop().animate({
                        height: 30
                    });
                });
                $li.on('mouseleave', function() {
                    $btns.stop().animate({
                        height: 0
                    });
                });

                $btns.on('click', 'span', function() {
                    var index = $(this).index(),
                        deg;

                    switch (index) {
                        case 0:
                            uploader.removeFile(file);
                            return;
                        case 1:
                            file.rotation += 90;
                            break;
                        case 2:
                            file.rotation -= 90;
                            break;
                    }

                    if (supportTransition) {
                        deg = 'rotate(' + file.rotation + 'deg)';
                        $wrap.css({
                            '-webkit-transform': deg,
                            '-mos-transform': deg,
                            '-o-transform': deg,
                            'transform': deg
                        });
                    } else {
                        $wrap.css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + (~~((file.rotation / 90) % 4 + 4) % 4) + ')');
                    }

                });

                $li.insertBefore($filePickerBlock);
            }

            // 负责view的销毁
            function removeFile(file) {
                var $li = $('#' + file.id);
                delete percentages[file.id];
                updateTotalProgress();
                $li.off().find('.file-panel').off().end().remove();
            }

            function updateTotalProgress() {
                var loaded = 0,
                    total = 0,
                    spans = $progress.children(),
                    percent;

                $.each(percentages, function(k, v) {
                    total += v[0];
                    loaded += v[0] * v[1];
                });

                percent = total ? loaded / total : 0;

                spans.eq(0).text(Math.round(percent * 100) + '%');
                spans.eq(1).css('width', Math.round(percent * 100) + '%');
                updateStatus();
            }

            function setState(val, files) {

                if (val != state) {

                    var stats = uploader.getStats();

                    $upload.removeClass('state-' + state);
                    $upload.addClass('state-' + val);
                    switch (val) {

                        /* 未选择文件 */
                        case 'pedding':
                            $queue.addClass('element-invisible');
                            $statusBar.addClass('element-invisible');
                            $placeHolder.removeClass('element-invisible');
                            $progress.hide();
                            $info.hide();
                            uploader.refresh();
                            break;

                            /* 可以开始上传 */
                        case 'ready':
                            $placeHolder.addClass('element-invisible');
                            $queue.removeClass('element-invisible');
                            $statusBar.removeClass('element-invisible');
                            $progress.hide();
                            $info.show();
                            $upload.text(lang.uploadStart);
                            uploader.refresh();
                            uploader.upload();
                            break;

                            /* 上传中 */
                        case 'uploading':
                            $progress.show();
                            $info.hide();
                            $upload.text(lang.uploadPause);
                            break;

                            /* 暂停上传 */
                        case 'paused':
                            $progress.show();
                            $info.hide();
                            $upload.text(lang.uploadContinue);
                            break;

                        case 'confirm':
                            $progress.show();
                            $info.hide();
                            $upload.text(lang.uploadStart);

                            stats = uploader.getStats();
                            if (stats.successNum && !stats.uploadFailNum) {
                                setState('finish');
                                return;
                            }
                            break;

                        case 'finish':
                            $progress.hide();
                            $info.show();
                            if (stats.uploadFailNum) {
                                $upload.text(lang.uploadRetry);
                            } else {
                                $upload.text(lang.uploadStart);
                            }
                            hasUploaded = true;
                            $('.image-footer').show();
                            $('.recommend').hide();
                            break;
                    }

                    state = val;
                    updateStatus();

                }

                if (!_this.getQueueCount()) {
                    $upload.addClass('disabled')
                } else {
                    $upload.removeClass('disabled')
                }

            }

            function updateStatus() {
                var text = '',
                    stats;

                if (state === 'ready') {
                    text = lang.updateStatusReady.replace('_', fileCount).replace('_KB', WebUploader.formatSize(fileSize));
                } else if (state === 'confirm') {
                    stats = uploader.getStats();
                    if (stats.uploadFailNum) {
                        text = lang.updateStatusConfirm.replace('_', stats.successNum).replace('_', stats.successNum);
                    }
                } else {
                    stats = uploader.getStats();
                    text = lang.updateStatusFinish.replace('_', fileCount).
                    replace('_KB', WebUploader.formatSize(fileSize)).
                    replace('_', stats.successNum);

                    if (stats.uploadFailNum) {
                        text += lang.updateStatusError.replace('_', stats.uploadFailNum);
                    }
                }

                $info.html(text);
            }

            uploader.on('fileQueued', function(file) {
                fileCount++;
                fileSize += file.size;

                if (fileCount === 1) {
                    $placeHolder.addClass('element-invisible');
                    $statusBar.show();
                }
                addFile(file, fileCount);
            });

            uploader.on('fileDequeued', function(file) {
                fileCount--;
                fileSize -= file.size;

                removeFile(file);
                updateTotalProgress();
            });

            uploader.on('filesQueued', function(file) {
                if (!uploader.isInProgress() && (state == 'pedding' || state == 'finish' || state == 'confirm' || state == 'ready')) {
                    setState('ready');
                }
                $(".drag-tip").addClass("hidden");
                $(".state-complete").removeClass('dragable');
                updateTotalProgress();
            });
            uploader.on('all', function(type, files) {
                switch (type) {
                    case 'uploadFinished':
                        $(".drag-tip").removeClass("hidden");
                        $(".state-complete").addClass('dragable');
                        /* 添加拖拽排序 */
                        var me = this;
                        _this.sortable = Sortable.create($('.filelist')[0], {
                            animation: 150,
                            filter: '.filePickerBlock',
                            preventOnFilter: true,
                            draggable: 'li',
                            dataIdAttr: 'data-sort',
                            onMove: function(evt) {
                                // 最后的上传文件元素不能被拖拽且始终保持在最后的位置
                                var newIndex = Sortable.utils.index(evt.related, 'li');
                                if (newIndex == me.getFiles().length + 1)
                                    return false;
                            },
                            onEnd: function(evt) {
                                if (evt.oldIndex != evt.newIndex)
                                    _this.sortable.option('dragflag', true);
                            }
                        });

                        setState('confirm', files);
                        break;
                    case 'startUpload':
                        /* 添加额外的GET参数 */
                        var params = utils.serializeParam(editor.queryCommandValue('serverparam')) || '',
                            url = utils.formatUrl(actionUrl + (actionUrl.indexOf('?') == -1 ? '?' : '&') + 'encode=utf-8&' + params);
                        uploader.option('server', url);
                        setState('uploading', files);
                        break;
                    case 'stopUpload':
                        setState('paused', files);
                        break;
                }
            });

            uploader.on('uploadBeforeSend', function(file, data, header) {
                //这里可以通过data对象添加POST参数
                header['X_Requested_With'] = 'XMLHttpRequest';
            });

            uploader.on('uploadProgress', function(file, percentage) {
                var $li = $('#' + file.id),
                    $percent = $li.find('.progress span');

                $percent.css('width', percentage * 100 + '%');
                percentages[file.id][1] = percentage;
                updateTotalProgress();
            });

            uploader.on('uploadSuccess', function(file, ret) {
                var $file = $('#' + file.id);
                try {
                    var responseText = (ret._raw || ret),
                        json = utils.str2json(responseText);
                    if (json.state == 'SUCCESS') {
                        _this.imageList.push(json);
                        $file.append('<span class="success"></span>');
                        $file.attr('data-sort', _this.imageList.length - 1);
                    } else {
                        $file.find('.error').text(json.state).show();
                    }
                } catch (e) {
                    $file.find('.error').text(lang.errorServerUpload).show();
                }
            });

            uploader.on('uploadError', function(file, code) {});
            uploader.on('error', function(code, file) {
                if (code == 'Q_TYPE_DENIED' || code == 'F_EXCEED_SIZE') {
                    addFile(file);
                }
            });
            uploader.on('uploadComplete', function(file, ret) {
            });

            $upload.on('click', function() {
                if ($(this).hasClass('disabled')) {
                    return false;
                }

                if (state === 'ready') {
                    uploader.upload();
                } else if (state === 'paused') {
                    uploader.upload();
                } else if (state === 'uploading') {
                    uploader.stop();
                }
            });

            $upload.addClass('state-' + state);
            updateTotalProgress();
        },
        getQueueCount: function() {
            var file, i, status, readyFile = 0,
                files = this.uploader.getFiles();
            for (i = 0; file = files[i++];) {
                status = file.getStatus();
                if (status == 'queued' || status == 'uploading' || status == 'progress') readyFile++;
            }
            return readyFile;
        },
        destroy: function() {
            this.$wrap.remove();
        },
        getInsertList: function() {
            var sortedOrder = this.sortable.toArray();
            sortedOrder.pop();
            var i, data, list = [],
                align = getAlign(),
                prefix = editor.getOpt('imageUrlPrefix');

            for (i = 0; i < sortedOrder.length; i++) {
                var cur = Number(sortedOrder[i]);
                data = this.imageList[cur];
                var urlReg = new RegExp(/^(https?:)?(\/\/)?((([a-zA-Z0-9_-])+(\.)?)*(:\d+)?)(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*/i);
                var res = urlReg.exec(prefix),
                    res1 = urlReg.exec(data.url);
                // prefix存在
                if(res[3]){
                    if(res1[3]){
                        data.url = data.url.replace(res1[3],res[3]);
                    }else{
                        data.url = '//'+res[3] + data.url
                    }
                }
                list.push({
                    src: data.url,
                    _src: data.url,
                    title: data.title,
                    alt: data.original,
                    floatStyle: align
                });
            }

            this.sortable.destroy();
            return list;
        }
    };

    $jumpPage.on('keydown', function(event) {
        if (event.keyCode === 13) {
            var page = parseInt($jumpPage.val());
            fetchMyImage(is_collect, page);
        }
    });
    $prePage.click(function() {
        var prePage = parseInt($jumpPage.val());
        prePage = prePage > 1 ? prePage - 1 : 1;
        fetchMyImage(is_collect, prePage);
        mysort.reset();
    });
    $nextPage.click(function() {
        var nextPage = parseInt($jumpPage.val());
        nextPage = nextPage < parseInt($totalPage.text()) ? nextPage + 1 : parseInt($totalPage.text());
        fetchMyImage(is_collect, nextPage);
        mysort.reset();
    });

    $('body').delegate('#filePickerBlock', 'mousedown', function() {
         ga('send', 'event', 'click', '插入图片_上传图片_新增图片');
    });
    $('body').delegate('[ga]', 'click', function() {
          var actionType = $(this).attr('ga');
         ga('send', 'event', 'click', actionType);
    });
})();
