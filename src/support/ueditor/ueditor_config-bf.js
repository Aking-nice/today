! function() {

    function e(e, i) {
        return a(e || self.document.URL || self.location.href, i || t())
    }

    function t() {
        var e = document.getElementsByTagName("script");
        return e[e.length - 1].src
    }

    function a(e, t) {
        var a = t;
        return /^(\/|\\\\)/.test(t) ? a = /^.+?\w(\/|\\\\)/.exec(e)[0] + t.replace(/^(\/|\\\\)/, "") : /^[a-z]+:/i.test(t) || (e = e.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, ""), a = e + "" + t), i(a)
    }

    function i(e) {
        var t = /^[a-z]+:\/\//.exec(e)[0],
            a = null,
            i = [];
        for (e = e.replace(t, "").split("?")[0].split("#")[0], e = e.replace(/\\/g, "/").split(/\//), e[e.length - 1] = ""; e.length;) ".." === (a = e.shift()) ? i.pop() : "." !== a && i.push(a);
        return t + i.join("/")
    }
    var l = "//s2.pstatp.com/pgc/v2/resource/pgc_web/static/ueditor/iframe.64a6fd7.css", // 引入iframe中应用的样式
        o = window.UEDITOR_HOME_URL || e();
    window.UEDITOR_CONFIG = {
        serverUrl: URL + "php/controller.php",
        iframeUrlMap: { //dialog内容的路径 ～会被替换成URL，该属性一旦打开，将覆盖所有的dialog的默认路径
        	anchor: "~/dialogs/anchor/anchor.html",//锚点
         	insertimage: "~/dialogs/image/image.html?ver=20150807",//多图上传
         	link: "~/dialogs/link/link.html",//超链接
         	spechars: "~/dialogs/spechars/spechars.html",//特殊字符
         	searchreplace: "~/dialogs/searchreplace/searchreplace.html",//查询替换
         	map: "~/dialogs/map/map.html",//Google地图
         	gmap: "~/dialogs/gmap/gmap.html",//Google地图
         	insertvideo: "~/dialogs/video/video.html",//视频
         	help: "~/dialogs/help/help.html",//帮助
         	preview: "~/dialogs/preview/preview.html",//预览
         	emotion: "~/dialogs/emotion/emotion.html",//表情
         	wordimage: "~/dialogs/wordimage/wordimage.html",//图片转存
         	attachment: "~/dialogs/attachment/attachment.html",//附件
         	insertframe: "~/dialogs/insertframe/insertframe.html",//插入Iframe
         	edittip: "~/dialogs/table/edittip.html",//编辑提示
         	edittable: "~/dialogs/table/edittable.html",//表格属性
         	edittd: "~/dialogs/table/edittd.html",//单元格属性
         	webapp: "~/dialogs/webapp/webapp.html",//百度应用
         	snapscreen: "~/dialogs/snapscreen/snapscreen.html",//截图
         	scrawl: "~/dialogs/scrawl/scrawl.html",//涂鸦
         	music: "~/dialogs/music/music.html",
         	template: "~/dialogs/template/template.html",//模板
         	background: "~/dialogs/background/background.html",//背景
         	charts: "~/dialogs/charts/charts.html",// 图表
         	commodity: "~/dialogs/commodity/commodity.html",
         	ic: "~/dialogs/ic/ic.html",
         	temai: "~/dialogs/temai/index.html",
         	game: "~/dialogs/game/index.html",
         	"doc-import": "~/dialogs/doc-import/doc-import.html"
	    },
        UEDITOR_HOME_URL: o,
        imageUrl: "/tools/upload_picture/?type=ueditor&pgc_watermark=1",
        imagePath: "",
        imageFieldName: "upfile",
        maxImageSideLength: 5e5,
        imageActionName: "uploadimage",
        imageAllowFiles: [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
        imageUrlPrefix: "p1.pstatp.com",
        imageMaxSize: 6072e3,
        imageInsertAlign: "",
        imageCompressEnable: !1,
        catchRemoteImageEnable: !0,
        catcherUrl: "/tools/catch_picture/",
        catcherPath: "",
        // staticFilePath: "http://s2.pstatp.com/ueditor/",
        separater: "|",
        catcherLocalDomain: ["127.0.0.1", "localhost", "pstatp.com"],
        catcherActionName: "catchimage",
        catcherFieldName: "upfile",
        catcherUrlPrefix: "",
        catcherMaxSize: 3072e3,
        catcherAllowFiles: [".png", ".jpg", ".jpeg", ".gif", ".bmp"],
        documentAllowFiles: [".doc", ".docx", ".pdf", ".txt"],
        toolbars: [
            [
            	"bold", //加粗
                'italic', //斜体
                "blockquote", //引用
                "insertunorderedlist", //无序列表
                "insertorderedlist", //有序列表
                'horizontal', //分隔线
                "|",
                'link', //超链接
                'unlink', //取消链接
                "removeformat", //清除格式
                'undo', //撤销
                'redo', //重做
                "insertimage" //多图上传
            ]
        ],
        labelMap: { //[默认：从lang包的labelMap项获取]参数格式是键值对，键名对应toolbar参数的项：{"bold": "加粗"} ]，当鼠标放在工具栏上时显示的tooltip提示，留空支持自动多语言配置，否则以配置值为准
        			insertimage: "插入图片",
        		},
        theme: "default",
        themePath: o + "themes/",
        iframeCssUrl: l,//给编辑器内部引入一个css文件
        initialFrameHeight: 600,//初始化编辑器高度，默认320
        enableAutoSave: !1,//启用自动保存
        saveInterval: 500,//自动保存间隔时间，单位ms
        imagePopup: !1,//图片操作的浮层开关，默认打开
        imageScaleEnabled: !1,//启用图片拉伸缩放
        pasteplain: !0, //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
        //纯文本粘贴模式下的过滤规则
        filterTxtRules: function() {
            function e(e) { e.tagName = "p", e.attrs = {}, e.setStyle() }

            function t(e) {
                e.attrs = {}, e.traversal(function(t) {
                    if ("element" === t.type && "img" !== t.tagName) e.removeChild(t, !0);
                    else if ("img" === t.tagName) {
                        var a = t.getAttr("src"); - 1 !== a.indexOf("xmtbang.com") && (a = decodeURIComponent(a.replace(/^http:\/\/(.*)\/\?url=/, "")), t.setAttr("src", a))
                    }
                })
            }
            return {
                "-": "script style object iframe embed input select",
                p: function(e) {
                    var t = window.UEDITOR_CONFIG.imgCaptionClass,
                        a = {},
                        i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                    i.test(e.attrs["class"]) && (a["class"] = t), e.attrs = a
                },
                div: { $: {} },
                img: { $: { src: 1, id: 1 } },
                strong: t,
                ul: { $: {} },
                ol: { $: {} },
                li: { p: 0, $: {} },
                table: { $: {} },
                thead: { $: {} },
                tbody: { $: {} },
                th: { $: {} },
                tr: { $: {} },
                td: { $: {} },
                blockquote: { $: {} },
                code: { $: {} },
                h1: { span: 0, $: {} },
                hr: { $: {} },
                caption: e,
                h2: e,
                h3: e,
                h4: e,
                h5: e,
                h6: e,
                pre: { $: { lang: 1 } }
            }
        }(),
        insertorderedlist :{
            'num': '1,2,3...'
        },
        insertunorderedlist :{
            'disc': ''
        },
        elementPathEnabled: !1,
        wordCount: !1, //是否开启字数统计
        autoHeightEnabled: !1, //是否自动长高，默认true
        autotypeset: //自动排版参数
        {
            mergeEmptyline: !0,//合并空行
            removeClass: !1,//去掉冗余的class
            removeEmptyline: !0,//去掉空行
            pasteFilter: !0,//根据规则过滤粘贴进来的内容
            clearFontSize: !0,//去掉所有的内嵌字号，使用编辑器默认的字号
            clearFontFamily: !0,//去掉所有的内嵌字体，使用编辑器默认的字体
            leftTrim: !0
        },
        sourceEditor: "textarea",
        imgCaptionClass: "pgc-img-caption" // 插入图片 图片标题的class
    }, window.UE = { getUEBasePath: e }



}();
