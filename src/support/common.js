define("common/pager/pager.whe", function() {
    return function() {
        {
            var a = "";
            wheei.safeParse, wheei.safeEncode
        }
        return a += '<div class="pager1"><a href="" class="pager1-prev disabled">上一页</a><span class="pager1-state">第<input type="text" class="pager1-num"/>/<span class="pager1-total"></span></span><a href="" class="pager1-jump">跳转</a><a href="" class="pager1-next">下一页</a></div>'
    }
});;
define("common/popup/input.whe", function() {
    return function(i) {
        var e = "",
            n = (wheei.safeParse, wheei.safeEncode);
        return e += '<div class="dialog_input"><div class="dialog_input_title">', e += n(i.label), e += '</div><input type="text" name="', e += n(i.name), e += '" class="form1_input dialog_input_input" placeholder="', e += n(i.hint), e += '"><div class="sred dialog_input_msg jmsg"></div></div>'
    }
});;
define("common/sstep/sstep.whe", function() {
    return function(e) {
        var s = "",
            t = (wheei.safeParse, wheei.safeEncode),
            i = 100 / (e.arr.length - 1);
        s += '<div class="sstep"><div class="sstep_bg"><div class="sstep_bgc" style="width:', s += t(100 * e.step / (e.arr.length - 1)), s += '%;"></div></div><div class="sstep_wrap">';
        var r = e.arr;
        if (r)
            for (var a = 0, n = r.length; n > a; a++) {
                var d = r[a],
                    v = a;
                s += '<div class="sstep_item ', v < e.step ? s += " done " : v == e.step && (s += " current "), s += ' " ', v === e.arr.length - 1 ? s += ' style="float:right;margin-left:-50px;" ' : (s += ' style="margin-right: ', s += t(i), s += '%" '), s += ' ><div class="sstep_item_text">', s += t(d), s += "</div></div>"
            }
        return s += "</div></div>"
    }
});;
define("common/ui/modal.whe", function() {
    return function(e) {
        var a = "",
            i = wheei.safeParse,
            d = wheei.safeEncode;
        return a += '<div class="modal fade ', a += d(this.className), a += "\"><div class='modal-dialog'><div class='modal-content'>", a += i(this.contentTpl(e)), a += "</div></div></div>"
    }
});;
define("pagelet/signform/spec/images.whe", function() {
    return function(s) {
        var e = "",
            i = (wheei.safeParse, wheei.safeEncode);
        return e += '<div class="signform_images"><div class="signform_images_label">', e += i(s.label), e += '</div><div class="signform_hint">', e += i(s.hint), e += '</div><div class="signform_images_box" data-node="box"></div><label class="widget_btn_cancel snoshadow signform_images_btn" data-node="btn"></label><div class="signform_msg" data-node="msg"></div></div>'
    }
});;
define("pagelet/signform/spec/checkbox.whe", function() {
    return function(e) {
        var c = "",
            n = (wheei.safeParse, wheei.safeEncode);
        return c += '<div class="form1_checkbox">', c += n(e.label), c += "</div>"
    }
});;
define("pagelet/signform/spec/row.whe", function() {
    return function(e) {
        var r = "",
            t = (wheei.safeParse, wheei.safeEncode);
        return r += '<tr class="signform_item ', e.vali_require && (r += " require "), r += '"><td class="signform_dt">', r += t(e.label), r += '</td><td data-node="dd"></td></tr>'
    }
});;
define("pagelet/signform/tag/tag.whe", function() {
    return function(n) {
        var e = "",
            a = (wheei.safeParse, wheei.safeEncode);
        return e += '<tr class="signform_item"><td class="signform_dt">', e += a(n.label), e += '</td><td><span data-node="con"></span><span class="signform_inlinemsg" data-node="msg"></span></td></tr>'
    }
});;
define("pagelet/signform/vposter/vposter.whe", function() {
    return function(s) {
        var e = "",
            t = (wheei.safeParse, wheei.safeEncode);
        return e += '<tr class="signform_item"><td class="signform_dt">', e += t(s.label), e += '</td><td><div class="vposter_con" data-node="btn"><img class="vposter_img" data-node="img"><div class="vposter_tip">设置视频封面</div></div><span class="signform_inlinemsg" data-node="msg"></span></td></tr>'
    }
});;
define("pagelet/signform/weixin/tpl.whe", function() {
    return function(t) {
        var e = "",
            i = (wheei.safeParse, wheei.safeEncode);
        return e += '<tr class="signform_item"><td class="signform_dt">', e += i(t.label), e += '</td><td><div><div class="form1_checkbox signform_weixin_checkbox">同意接入微信内容源（将公众号群发后的文章，自动同步至头条号）</div></div><textarea class="form1_text"></textarea></td></tr><tr class="signform_sub"><td></td><td><div class="form1_msg jmsg"></div><div class="signform_hint">', e += i(t.hint), e += "</div></td></tr>"
    }
});;
define("pagelet/signform/simple/input2.whe", function() {
    return function(e) {
        var i = "",
            n = (wheei.safeParse, wheei.safeEncode);
        return i += '<div class="form2_item ', e.require && (i += " require "), i += '"><div class="form2_dt">', i += n(e.label), i += '</div><div class="form2_dd"><input type="', i += n(e.type || "text"), i += '" class="form1_input" ', e.name && (i += ' name="', i += n(e.name), i += '" id="', i += n(e.name), i += '" '), i += " ", e.hint && (i += ' placeholder="', i += n(e.hint), i += '" '), i += " >", e.hint && (i += " <label>", i += n(e.hint), i += "</label> "), i += '<div class="form1_msg jmsg"></div></div></div>'
    }
});;
define("pagelet/signform/simple/text2.whe", function() {
    return function(e) {
        var i = "",
            a = (wheei.safeParse, wheei.safeEncode);
        return i += '<div class="form2_item ', e.require && (i += " require "), i += '"><div class="form2_dt">', i += a(e.label), i += '</div><div class="form2_dd"><textarea ', e.name && (i += ' name="', i += a(e.name), i += '" id="', i += a(e.name), i += '" '), i += ' class="form1_text" ', e.hint && (i += ' placeholder="', i += a(e.hint), i += '" '), i += " ", e.limit && e.limit[1] && (i += ' maxlength="', i += a(e.limit[1]), i += '" '), i += "></textarea>", e.limit && (i += "<label>", i += a(e.limit[0]), i += "-", i += a(e.limit[1]), i += '个字符以内<br/><span class="spec">剩余可输入<span class="length_count">', i += a(e.limit[1]), i += "</span>个字符</span></label>"), i += '<div class="form1_msg jmsg"></div></div></div>'
    }
});;
define("pagelet/signform/simple/select2.whe", function() {
    return function(e) {
        var a = "",
            s = (wheei.safeParse, wheei.safeEncode);
        a += '<div class="form2_item ', e.require && (a += " require "), a += '"><div class="form2_dt">', a += s(e.label), a += '</div><div class="form2_dd select_contain"><input class="form1_input select" ', e.name && (a += ' name="', a += s(e.name), a += '" id="', a += s(e.name), a += '" '), a += " ", e.hint && (a += ' placeholder="', a += s(e.hint), a += '" '), a += ' readonly ><label class="form1_select_label" ', e.name && (a += ' for="', a += s(e.name), a += '" '), a += " >";
        for (var l in e.items) {
            var r = e.items[l];
            a += '<span class="option_span" data-val="', a += s(r.value), a += '">', a += s(r.text), a += "</span>"
        }
        return a += '</label><div class="form1_msg jmsg"></div></div></div>', $(function() {
            $("body").click(function(e) {
                var a = $(e.target);
                if (a.hasClass("option_span")) {
                    var s = a.parent().parent().find(".form1_input.select");
                    s.val(a.attr("data-val")), a.parent().parent().find(".jmsg").html("")
                } else if (a.hasClass("form1_input select")) {
                    a.addClass("active");
                    var l = a.parent().find(".form1_select_label");
                    l.hasClass("show") ? l.removeClass("show") : l.addClass("show")
                } else {
                    var r = $(".form1_input.select"),
                        l = r.parent().find(".form1_select_label");
                    r.hasClass("active") && (r.val() ? (r.removeClass("error"), r.parent().find(".jmsg").html("")) : (r.addClass("error"), r.parent().find(".jmsg").html("必填项"))), l.hasClass("show") && l.removeClass("show")
                }
            })
        }), a
    }
});;
define("pagelet/infringement_history/detail.whe", function() {
    return function(d) {
        var i = "",
            s = (wheei.safeParse, wheei.safeEncode);
        if (i += '<div class="page_tabs sclearfix"><div class="page_tab active">权利人</div></div><div class="dl1_box"><div class="dl1"><div class="dl1_dt">姓名/名称</div><div class="dl1_dd">', i += s(d.company_name), i += '</div></div><div class="dl1"><div class="dl1_dt">有效证件号</div><div class="dl1_dd">', i += s(d.identity_number), i += '</div></div><div class="dl1"><div class="dl1_dt">有效证件扫描件</div><div class="dl1_dd"><img src="https://p1.pstatp.com/origin/', i += s(d.identity_uri), i += '" /></div></div><div class="dl1"><div class="dl1_dt">通信地址</div><div class="dl1_dd">', i += s(d.address), i += "</div></div>", d.real_name && (i += '<div class="dl1"><div class="dl1_dt">联系人</div><div class="dl1_dd">', i += s(d.real_name), i += "</div></div>"), i += '<div class="dl1"><div class="dl1_dt">电话</div><div class="dl1_dd">', i += s(d.mobile), i += '</div></div><div class="dl1"><div class="dl1_dt">E-mail</div><div class="dl1_dd">', i += s(d.email), i += "</div></div></div>", 1 == d.agent && (i += '<div class="page_tabs sclearfix"><div class="page_tab active">代理人</div></div><div class="dl1_box"><div class="dl1"><div class="dl1_dt">姓名/名称</div><div class="dl1_dd">', i += s(d.agent_company_name), i += '</div></div><div class="dl1"><div class="dl1_dt">有效证件号</div><div class="dl1_dd">', i += s(d.agent_identity_number), i += '</div></div><div class="dl1"><div class="dl1_dt">有效证件扫描件</div><div class="dl1_dd"><img src="https://p1.pstatp.com/origin/', i += s(d.agent_identity_uri), i += '" /></div></div><div class="dl1"><div class="dl1_dt">通信地址</div><div class="dl1_dd">', i += s(d.agent_address), i += "</div></div>", d.agent_real_name && (i += '<div class="dl1"><div class="dl1_dt">联系人</div><div class="dl1_dd">', i += s(d.agent_real_name), i += "</div></div>"), i += '<div class="dl1"><div class="dl1_dt">电话</div><div class="dl1_dd">', i += s(d.agent_mobile), i += '</div></div><div class="dl1"><div class="dl1_dt">E-mail</div><div class="dl1_dd">', i += s(d.agent_email), i += "</div></div>", d.agent_book_uri && (i += '<div class="dl1"><div class="dl1_dt">代理委托书</div><div class="dl1_dd"><img src="https://p1.pstatp.com/origin/', i += s(d.agent_book_uri), i += '" /></div></div>'), i += "</div>"), i += '<div class="page_tabs sclearfix"><div class="page_tab active">内容</div></div><div class="dl1_box"><div class="dl1"><div class="dl1_dt">投诉分类</div><div class="dl1_dd">', i += s(["", "冒充他人", "文章抄袭", "文章造谣诽谤", "其他"][d.infringement_type]), i += '</div></div><div class="dl1"><div class="dl1_dt">投诉描述</div><div class="dl1_dd">', i += s(d.infringement_desc), i += "</div></div>", d.infringement_media_name && d.infringement_media_name.length > 0) {
            i += '<div class="dl1"><div class="dl1_dt">投诉公众帐号</div><div class="dl1_dd">';
            var l = d.infringement_media_name;
            if (l)
                for (var a = 0, v = l.length; v > a; a++) {
                    var e = l[a];
                    i += "<p>", i += s(e), i += "</p>"
                }
            i += "</div></div>"
        }
        var c = d.infringement_article_uri;
        if (c && c.length > 0) {
            i += '<div class="dl1"><div class="dl1_dt">投诉文章链接</div><div class="dl1_dd">';
            var _ = c;
            if (_)
                for (var t = 0, r = _.length; r > t; t++) {
                    var n = _[t];
                    n = d.formatUrl(n), i += '<p><a target="_blank" href="', i += s(n), i += '" class="slink">', i += s(n), i += "</a></p>"
                }
            i += "</div></div>"
        }
        i += '</div><div class="page_tabs sclearfix"><div class="page_tab active">证明材料</div></div><div class="dl1_box">';
        var g = [
                ["evidence_trademark_regis_uri", "商标注册书"],
                ["evidence_business_license_uri", "营业执照"],
                ["evidence_identity_uri", "身份证"],
                ["pub_evidence_uri", "出版证明材料"],
                ["regal_pub_pic_uri", "合法出版物照片"],
                ["original_article_pic_uri", "原创文章截图"],
                ["evidence_other_uri", "其他"]
            ],
            m = g;
        if (m)
            for (var p = 0, o = m.length; o > p; p++) {
                var f = m[p],
                    u = d[f[0]];
                if (u) {
                    i += '<div class="dl1"><div class="dl1_dt">', i += s(f[1]), i += '</div><div class="dl1_dd">';
                    var b = u;
                    if (b)
                        for (var h = 0, y = b.length; y > h; h++) {
                            var x = b[h];
                            i += '<img src="https://p1.pstatp.com/origin/', i += s(x), i += '" />'
                        }
                    i += "</div></div>"
                }
            }
        if (d.original_article_uri) {
            i += '<div class="dl1"><div class="dl1_dt">原创首发链接</div><div class="dl1_dd">';
            var n = d.formatUrl(d.original_article_uri);
            i += '<a class="slink" href="', i += s(n), i += '">', i += s(n), i += "</a></div></div>"
        }
        return i += "</div>"
    }
});;
define("pagelet/videobatch/videobatch_tpl.whe", function() {
    return function() {
        {
            var d = "";
            wheei.safeParse, wheei.safeEncode
        }
        return d += '<div class="videobatch_card"><div data-node="sc"><div data-node="file"><div class="videobatch_uploader_init" data-tab="init"><div class="videobatch_uploader_init_btn widget_btn" data-node="uploadbtn">上传视频</div><div class="videobatch_uploader_init_text">为了获得更高的推荐量和点击量，建议上传720p（1280x720）或更高分辨率的视频，大小不超过2G</div></div><div class="videobatch_uploader_stat"><div class="videobatch_uploader_stat_icon"></div><div class="videobatch_uploader_stat_tip" data-node="tip"></div><div class="videobatch_uploader_stat_title_box"><div class="videobatch_uploader_stat_title sddd" data-node="name"></div><span class="videobatch_uploader_stat_resubmit slink" data-node="uploadbtn">重新上传</span></div></div><div class="videobatch_uploader_doing" data-tab="doing"><div class="videobatch_uploader_doing_title" data-node="name"></div><div class="videobatch_uploader_doing_progress sclearfix"><div class="videobatch_uploader_doing_cancel" data-node="cancel"></div><div class="videobatch_uploader_doing_progress_clear"><div class="progress1"><div class="progress1_progress" data-node="progress"></div></div></div></div><div class="videobatch_uploader_doing_count" data-node="count"></div></div></div>', d += '<div class="videobatch_form" data-node="form"><table class="videobatch_form_table" data-node="table"></table></div></div></div>'
    }
});;
define("pagelet/write/audio/audio.whe", function() {
    return function() {
        {
            var a = "";
            wheei.safeParse, wheei.safeEncode
        }
        return a += '<div class="audioupload" data-node="root"><div class="audioupload_uploading"><div class="audioupload_title"><span class="_title" data-node="name"></span><span class="_time" data-node="conunt"></span><span class="_icon"></span></div><div class="audioupload_uploading_count" data-node="count"></div><div class="audioupload_progress_box sclearfix"><div class="audioupload_abort" data-node="abort"></div><div class="audioupload_progress"><div class="progress1"><div class="progress1_progress" data-node="progress"></div></div></div></div></div><div class="audioupload_done"><div class="audioupload_disk"><div class="audioupload_play"></div><span class="audioupload_done_status" data-node="status"></span></div><div class="audioupload_title"><span class="_title" data-node="name"></span><span class="_time" data-node="time"></span><span class="_icon"></span></div><div class="audioupload_done_btns"><span class="audioupload_remove slink" data-node="remove">删除</span></div><span class="audioupload_insert widget_btn_cancel" data-node="insert">添加到正文</span></div><div class="audioupload_error"><div class="audioupload_error_icon"></div><div class="audioupload_error_status" data-node="status"></div><div class="audioupload_error_btns"><div class="audioupload_error_title" data-node="name"></div><span class="audioupload_remove slink" data-node="remove">删除</span></div></div></div>'
    }
});;
define("pagelet/write/audio/audio_modal.whe", function() {
    return function() {
        {
            var d = "";
            wheei.safeParse, wheei.safeEncode
        }
        return d += '<div class="modal fade audio_modal"><div class="modal-dialog-wrapper"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="_close" data-node="close"></div><div class="_header">添加音频</div><div class="_content"><div class="fileupload_btn widget_btn _btn" data-node="submit">选择音频</div><div class="_tip">格式支持MP3、AMR、WMA、WAV、AIFF、OGG、AAC、APE等常见音频格式，文件大小不超过30M</div></div></div></div></div></div></div>'
    }
});;
define("common/daterange/daterange.js", function() {
    return function(e) {
        function t(t) { e.onchange(t), e.start_date = t.start_date, e.end_date = t.end_date, a(t) }

        function a() {
            if (e.end_date === d.format("date"))
                for (var t = 0; t < i.length; t++) {
                    var a = i[t];
                    e.start_date === d.clone().d(0 - a + 1).format("date") ? l.eq(t).addClass("selected") : l.eq(t).removeClass("selected")
                }
            c.val(e.start_date), s.val(e.end_date)
        }
        var d = new Date,
            n = -180;
        e.days && (n = e.days), e.relative && d.d(e.relative);
        var r = d.clone().format("date"),
            o = d.clone().d(n).format("date"),
            c = $(".daterange_start_date"),
            s = $(".daterange_end_date");
        c.datetimepicker({ format: "yyyy-mm-dd", weekstart: 1, minView: 2, autoclose: !0, startDate: o, endDate: r }), s.datetimepicker({ format: "yyyy-mm-dd", weekstart: 1, minView: 2, autoclose: !0, startDate: o, endDate: r }), $(".daterange_search").click(function(e) { e.preventDefault(), t({ start_date: c.val(), end_date: s.val() }) });
        var i = [7, 14, 30],
            l = $(".daterange_stoggle span").each(function(e) {
                var a = $(this);
                a.click(function() { t({ start_date: d.clone().d(0 - i[e] + 1).format("date"), end_date: d.clone().format("date") }) })
            });
        a(e)
    }
});;
define("common/util/util.js", function(u, F) {
    function a(u) {
        for (var F = u.replace(/\+/g, " ").split("&"), a = {}, n = 0; n < F.length; ++n) {
            var t = F[n].split("=");
            2 == t.length && (a[decodeURIComponent(t[0])] = decodeURIComponent(t[1]))
        }
        return a
    }
    F.GET = a(window.location.search.slice(1)), F.e = function(u) {
            if (null == u) return "";
            u += "";
            for (var F = "", a = 0; a < u.length; a++) {
                var n = u[a];
                switch (n) {
                    case "'":
                        F += "&#39;";
                        break;
                    case '"':
                        F += "&#34;";
                        break;
                    case "<":
                        F += "&lt;";
                        break;
                    case ">":
                        F += "&gt;";
                        break;
                    case "&":
                        F += "&amp;";
                        break;
                    default:
                        F += n
                }
            }
            return F
        },
        function() {
            var u = '<div class="bodymask_loading"><div class="bodymask_loading_bg"></div><div class="bodymask_loading_img"></div></div>',
                a = $(u).appendTo("body");
            F.loadingShow = function() { a.show() }, F.loadingHide = function() { a.hide() }
        }(),
        function() {
            var u = '<div class="bodymask"></div>',
                a = $(u).appendTo("body");
            F.maskShow = function(u) { u = u || {}, a.show(), a.unbind("click"), u.click && a.bind("click", u.click) }, F.maskHide = function() { a.hide() }
        }(), F.snsLogin = function(u) { window.location = "http://web.toutiao.com/auth/connect/?" + $.param({ platform: u, type: "toutiao", next: location.protocol + "//" + window.location.host }) }, F.imgSize = function() {
            var u = {},
                F = 0;
            return function(a, n) {
                var t = F++,
                    o = u[F] = new Image;
                o.onload = function() { n(null, { width: o.width, height: o.height }), delete u[t] }, o.onabort = o.onerror = function() { delete u[t], n(new Error) }, o.src = a
            }
        }(), F.squareimg = function(u, a, n, t) {
            var o, e;
            3 === arguments.length ? isNaN(n) ? e = n : o = n : (o = n, e = t), e = e || function() {}, F.imgSize(a, function(F, n) {
                if (!F) {
                    var t = 1;
                    o = o || u.clientWidth;
                    var d, i, c = n.width,
                        r = n.height,
                        l = o,
                        s = c / r;
                    s > t ? (d = o, i = o / s) : (i = l, d = l * s);
                    var f = u.style;
                    f.width = Math.floor(d) + "px", f.height = Math.floor(i) + "px", f.padding = Math.floor((l - i) / 2) + "px " + Math.floor((o - d) / 2) + "px", u.src = a, e({ width: d, height: i })
                }
            })
        }, F.mapParam = function(u) {
            for (var F = {}, a = 0; a < u.length; a++) {
                var n = u[a];
                F[n.name] = n.value
            }
            return F
        }, F.ajax = function(u, F, a) {
            function n(u) {
                return u.description || u.desc || u.reason || u.message || u.msg
            }
            var t = { method: "POST", dataType: "json", timeout: 3e4 };
            return "object" == typeof u ? (t = $.extend(t, u), a = t.callback || $.noop, delete t.callback) : (t.url = u, $.isFunction(F) ? a = F : (t.data = F, a = a || $.noop)), $.ajax(t).always(function(u, F) {
                if ("success" === F) {
                    var t = u,
                        o = t.data || {},
                        e = n(o) || n(t),
                        d = t.code;
                    null == d && (d = o.error_code), null == d && (d = "success" === t.message || "success" === t.msg ? 0 : 1), a(Number(d), e, o, t)
                } else {
                    var i = u;
                    a(0 - Number(i.status || 100), "网络错误", {}, { data: {} })
                }
            })
        }, F.URL_REGEXP = /^((https|http):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, F.formatUrl = function(u) {
            var a = F.URL_REGEXP.exec(u);
            return a ? (a[1] || (u = "http://" + u), u) : null
        }, window.Util = F
});;
define("common/stip/stip.js", function(require, exports, module) {
    $.fn.hoverTip = function() {
        return this.each(function() {
            var t = $(this),
                o = $('<div class="stip"></div>').appendTo("body");
            t.hover(function() {
                var t = $(this),
                    i = t.offset();
                i.left += t.width() / 2, i.top += t.height();
                var p;
                (p = t.attr("title")) ? t.attr("title", ""): p = t.data("title"), o.html(p), o.stop(!0).css($.extend(i, { display: "block" })).animate({ opacity: .9 }, 100)
            }, function() { o.is(":hidden") || o.fadeOut(200) })
        })
    }, exports.slideTip = function(t) {
        var o = $('<div class="stip_small"></div>').appendTo("body");
        return t.hover(function() {
            var t = $(this),
                i = t.offset();
            i.left += t.width() / 2, o.html(t.data("title")), o.is(":hidden") ? o.css($.extend(i, { display: "block" })).animate({ opacity: .63 }, 100) : o.stop(!0).animate($.extend(i, { opacity: .63 }), 100)
        }, function() { o.is(":hidden") || o.fadeOut(200) }), o
    }, exports.popupTip = function(opt) {
        var defaultDuration = 3e3;
        opt.callback = opt.callback || $.noop, null == opt.duration && (opt.duration = defaultDuration);
        var jEle = $(function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="spopup_fixed" tabindex="-1">\n	<div class="spopup_fixed_bg"></div>\n    <div class="spopup stip_popup ', __p += obj.status ? "sc-success" : "sc-error", __p += '">\n        <div class="stip_popup_icon"></div>\n        <div class="stip_popup_text">' + (null == (__t = obj.msg) ? "" : __t) + "</div>\n    </div>\n</div>";
            return __p
        }(opt)).appendTo("body").show().focus();
        setTimeout(function() { jEle.addClass("show") }, 1), opt.duration <= 0 ? setTimeout(opt.callback, defaultDuration) : (setTimeout(function() { jEle.removeClass("show") }, opt.duration - 200), setTimeout(function() { opt.callback(), jEle.remove() }, opt.duration))
    }, exports.alert = function(t, o, i) { exports.popupTip({ msg: t, status: o, duration: i }) }
});;
define("common/facecrop/facecrop.js", function(require, exports, module) {
    function popup(url, conf) {
        function updatePreview(i) {
            if (parseInt(i.w, 10) > 0) {
                var e = viewW / i.w,
                    o = viewH / i.h,
                    n = { width: Math.round(e * width), height: Math.round(o * height), top: 0 - Math.round(o * i.y), left: 0 - Math.round(e * i.x) };
                res = { x: Math.round(i.x), y: Math.round(i.y), w: Math.round(i.w), h: Math.round(i.h) }, jviewImg.css(n)
            }
        }
        var w_h = conf.width / conf.height;
        jpop && jpop.remove();
        var html = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="facecrop popup">\n    <div class="popup_head">\n        <div class="popup_close"></div>\n        <div class="popup_title">上传图片</div>\n    </div>\n    <div class="facecrop_content sclearfix">\n        <img src="" class="facecrop_img">\n        <div class="facecrop_view">\n            <img src="" class="facecrop_view_img">\n        </div>\n    </div>\n    <div class="popup_foot sclearfix">\n        <div class="popup_btn popup_btn_cancel jcancel">取消</div>\n        <div class="popup_btn popup_btn_ok jok">确定</div>\n    </div>\n</div>';
            return __p
        }();
        jpop = $(html).appendTo("body"), jpop.find(".jok").click($.loadWrap(function() {
            return res.image_url = url, res.scale_w = conf.width, res.scale_h = conf.height, $.get("/crop_photo/", res).done(function(i) { i.new_url ? (util.maskHide(), jpop.remove(), _callback(null, { web_url: i.new_url, web_uri: i.new_uri })) : Stip.popupTip({ msg: "上传失败", status: !1 }) })
        })), jpop.find(".jcancel,.popup_close").click(function() { util.maskHide(), jpop.remove() });
        var width, height, jimg = jpop.find(".facecrop_img"),
            jview = jpop.find(".facecrop_view"),
            jviewImg = jpop.find(".facecrop_view_img"),
            viewW = 150,
            viewH = Math.round(viewW / w_h);
        jview.css({ width: viewW, height: viewH }), jviewImg.prop("src", url);
        var api;
        jimg.prop("src", url).Jcrop({ bgColor: "#fff", onChange: updatePreview, onSelect: updatePreview, aspectRatio: w_h, boxWidth: 460, boxHeight: $(window).height() - 200 }, function() {
            api = this;
            var i = this.getBounds();
            width = Math.round(i[0]), height = Math.round(i[1]);
            var e = Math.min(width, Math.round(height * w_h)),
                o = Math.round(e / w_h);
            api.setSelect([0, 0, e, o]), res = { x: 0, y: 0, w: e, h: o }
        })
    }
    var _callback, res, jpop, util = require("common/util/util.js"),
        Stip = require("common/stip/stip.js"),
        imgSize = function() {
            var i;
            return function(e, o) { i = new Image, i.onload = function() { o(null, { width: i.width, height: i.height }) }, i.onerror = function() { o(new Error) }, i.src = e }
        }();
    return function(i, e, o) {
        2 === arguments.length && (o = e, e = {}), e = $.extend({ width: 200, height: 200 }, e), _callback = o, util.loadingShow(), imgSize(i, function(o) {
            return util.loadingHide(), o ? void _callback(o) : (util.maskShow(), void popup(i, e))
        })
    }
});;
define("common/pager/pager.js", function(e) {
    {
        var n = e("common/stip/stip.js"),
            i = e("common/pager/pager.whe");
        e("common/util/util.js")
    }
    return function(e) {
        function t() {
            e.cb(p + 1, function(e) {
                if (null != e.length && (d = e.length), 2 > d) return void r.hide();
                r.show(), s.text(d);
                var n = !1,
                    i = !1;
                0 === p && (n = !0), p === d - 1 && (i = !0), l[n ? "addClass" : "removeClass"]("disabled"), o[i ? "addClass" : "removeClass"]("disabled"), u.val(p + 1)
            })
        }

        function a() {
            function e() {
                var e = Number($.trim(u.val())) - 1;
                e >= 0 && d > e ? (p = e, t()) : (u.val(p + 1), n.popupTip({ msg: "请输入正确的页码", status: !1 }))
            }
            o.click(function(e) { e.preventDefault(), o.is(".disabled") || (p++, t()) }), l.click(function(e) { e.preventDefault(), l.is(".disabled") || (p--, t()) }), c.click(function(n) { n.preventDefault(), e() }), u.keypress(function(n) { 13 === n.keyCode && e() })
        }
        var r = $(i());
        e.jele.html(r);
        var l = r.find(".pager1-prev"),
            o = r.find(".pager1-next"),
            u = r.find(".pager1-num"),
            s = r.find(".pager1-total"),
            c = r.find(".pager1-jump");
        a();
        var p = 0,
            d = 0;
        return t(), { jump: function(e) { p = e - 1, t() } }
    }
});;
define("common/popup/dialog.js", function(require, exports, module) {
    var tmpl = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="modal fade" data-backdrop="static" tabindex="-1">\n    <div class="modal-dialog spopup_dialog spopup_dialog_' + (null == (__t = obj.type) ? "" : _.escape(__t)) + '">\n        <div class="modal-content">\n            <div class="spopup_dialog_body">\n                ', (obj.title || obj.content) && (__p += '\n                    <div class="spopup_dialog_tip">\n                        ', obj.title && (__p += '\n                        <div class="spopup_dialog_title">' + (null == (__t = $.safeGet(obj.title)) ? "" : __t) + "</div>\n                        "), obj.content && (__p += '\n                        <div class="spopup_dialog_content">' + (null == (__t = "string" == typeof obj.content ? obj.content : $.safeGet(obj.content)) ? "" : __t) + "</div>\n                        "), __p += "\n                    </div>\n                "), __p += '\n            </div>\n            <div class="spopup_dialog_btns">\n            </div>\n        </div>\n    </div>\n</div>\n';
        return __p
    };
    return function(t) {
        t = $.extend({ type: "info" }, t);
        for (var n = t.okExecute, o = t.cancelExecute, e = t.cancelTxt ? t.cancelTxt : "取消", i = t.okTxt ? t.okTxt : "确定", d = { ok: { text: i, html: '<div class="spopup_dialog_btn widget_btn_ok snoshadow"></div>', click: function() { u.remove(), n && "function" == typeof n && n() } }, cancel: { text: e, html: '<div class="spopup_dialog_btn widget_btn_cancel snoshadow"></div>', click: function() { u.remove(), o && "function" == typeof o && o() } } }, p = $(tmpl(t)).hide().appendTo("body"), l = p.find(".spopup_dialog_btns"), a = t.btns || [], c = 0; c < a.length; c++) {
            var _ = a[c];
            "string" == typeof _ && (_ = { type: _ }), _ = $.extend({}, d[_.type], _);
            var s = $(_.html).text(_.text);
            s.click(_.click), l.append(s)
        }
        var u = {
            show: function() {
                p.modal("show");
                var t = p.find(":input");
                return t.length ? t.focus() : p.focus(), this
            },
            hide: function() {
                return p.modal("hide"), p
            },
            remove: function() {
                return p.on("hidden.bs.modal", function() { p.remove() }), p.modal("hide"), p
            },
            jele: p
        };
        return u
    }
});;
define("common/popup/popup.js", function(o) {
    function n(o, n) {
        var t = p({ title: o, btns: [{ type: "ok", click: function() { n && n(), t.remove() } }] });
        t.show()
    }
    var p = o("common/popup/dialog.js");
    return { alert: n }
});;
define("common/popup/tui-dialog.js", function(require, exports, module) {
    var TMPL = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div id="', __p += dialogId ? "" + (null == (__t = dialogId) ? "" : _.escape(__t)) : " weitoutiao-share-dialog ", __p += '" class="modal fade" data-backdrop="', __p += dialogId ? "static" : "true", __p += '">\n    <div class="modal-dialog tui-dialog">\n        <div class="modal-content">\n            <div class="tui-dialog-header">\n                <div class="tui-dialog-title">\n                    ' + (null == (__t = title) ? "" : _.escape(__t)) + '\n                </div>\n                <div class="tui-dialog-close" data-dialog-close><span class="tui-dialog-close-x"></span></div>\n            </div>\n            <div class="modal-body tui-dialog-body ' + (null == (__t = bodyCls) ? "" : __t) + '">\n                ' + (null == (__t = body) ? "" : __t) + '\n            </div>\n            <div class="tui-dialog-footer">\n                <div class="spopup_dialog_btns">\n                    ', hasCancelBtn && (__p += '\n                        <div class="spopup_dialog_btn widget_btn_cancel snoshadow" data-dialog-close>' + (null == (__t = cancelLabel) ? "" : _.escape(__t)) + "</div>\n                    "), __p += "\n                    ", hasSubmitBtn && (__p += '\n                        <div class="spopup_dialog_btn widget_btn_ok snoshadow" data-dialog-submit>' + (null == (__t = submitLabel) ? "" : _.escape(__t)) + "</div>\n                    "), __p += "\n                </div>\n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n";
        return __p
    };
    module.exports = function(a) {
        a = $.extend({}, { hasCancelBtn: !0, hasSubmitBtn: !0, cancelLabel: "我先看看", submitLabel: "确认", dialogId: "" }, a);
        var d = $(TMPL(a)).appendTo("body");
        return d.find("[data-dialog-close]").click(function(i) {
            var n = !0;
            a.onCancel && (n = a.onCancel(i) === !1 ? !1 : !0), n && d.modal("hide")
        }), d.find("[data-dialog-submit]").click(function(i) {
            var n = !0;
            a.onSubmit && (n = a.onSubmit(i) === !1 ? !1 : !0), n && d.modal("hide")
        }), d
    }
});;
define("common/select/select.js", function(require, exports, module) {
    var selectTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<select placeholder="请选择" class="form-control channel-select j_channel_dom" name="tag" index="' + (null == (__t = index) ? "" : __t) + '">\n	', 1 == index && (__p += "\n	<option value=''>请选择</option>\n	"), __p += "\n	";
                for (var key in collection) __p += "\n	<option value='" + (null == (__t = key) ? "" : __t) + "' ", tag_name && tag_name == key && (__p += " selected "), __p += " > " + (null == (__t = collection[key].value) ? "" : __t) + "</option>\n	";
                __p += "\n</select>"
            }
            return __p
        },
        SelectClass = function(e, t, n) { this.menu = e, this.$el = n, this.initial = t ? t : [], this.selectList = this.initial, e && n && this.init() };
    return SelectClass.getInstance = function(e) {
        var t = e.attr("instanceId");
        return SelectClass.instance[t]
    }, SelectClass.prototype = {
        init: function() { this._clearSelect(), this._menuInit(this.menu, this.initial, 0), this._eventInit() },
        instanceStore: function(e) {
            var t = 0;
            if (SelectClass.instance) {
                for (var n in SelectClass.instance) t < parseInt(n) && (t = parseInt(n));
                t += 1, SelectClass.instance[t.toString()] = this, e.attr("instanceId", t)
            } else SelectClass.instance = {}, SelectClass.instance[0] = this, e.attr("instanceId", "0")
        },
        get: function() {
            for (var e, t = this.$el, n = t.find("select"), i = [], l = 0; l < n.length; l++) e = n.eq(l), i.push(e.val());
            return i
        },
        _eventInit: function() {
            {
                var e, t, n = this.$el,
                    i = this,
                    l = this.menu;
                this.initial
            }
            n.on("change", "select", function() { t = $(this).attr("index"), t = parseInt(t), e = $(this).val(), i.selectList.length > t - 1 && (i.selectList.length = t - 1), i.selectList.push(e), i._deleteIndexSelect(t + 1), i._loadChildMenu(l, e) })
        },
        _buildHtml: function(e, t, n) {
            var i = selectTemplate({ collection: e, tag_name: t, index: n });
            this.$el.append(i)
        },
        _deleteIndexSelect: function(e) {
            for (var t, n = this.$el, i = n.find("select"), l = 0; l < i.length; l++) t = i.eq(l), parseInt(t.attr("index")) >= e && t.remove()
        },
        _loadChildMenu: function(e, t) {
            for (var n = this.selectList, i = n.indexOf(t), l = e, s = 0; s < n.length && (l = l[n[s]].child, n[s] != t); s++);
            l && this._buildHtml(l, t, i + 2)
        },
        _menuInit: function(e, t, n) {
            var i = t[n],
                n = n ? n : 0;
            this._buildHtml(e, i, n + 1), i || 0 != t.length || this.$el.find("select").val(""), e[i] && e[i].child && n < t.length - 1 && this._menuInit(e[i].child, t, n + 1)
        },
        _clearSelect: function() {
            var e = this.$el;
            e.html("")
        }
    }, SelectClass
});;
define("common/signtip/signtip.js", function(require, exports, module) {
    var Util = require("common/util/util.js");
    $(function() {
        var m = $.cookie("__m_");
        if (!m) {
            var jpop = $(function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="popup signtip">\n    <div class="signtip_title">温馨提示</div>\n    <div class="signtip_prev">\n        今日头条•媒体平台基于特殊的个性化推荐机制，我们在处理帐号申请时会按照如下标准进行审核：\n    </div>\n    <div class="signtip_content">\n        1、谢绝泛时政类内容及社会新闻类内容的帐号申请；<br/>\n        2、谢绝低质、低俗、营销内容的帐号申请；<br/>\n        3、目前仅支持中国内地年满18周岁的人士凭身份证进行登记申请，且<b class="sn">一个身份证号仅支持一个帐号申请。</b><br/>\n    </div>\n    <div class="signtip_btns">\n        <a href="" class="signform_btn jbtn">我知道了</a>\n    </div>\n</div>';
                return __p
            }()).appendTo("body");
            jpop.show(), Util.maskShow(), jpop.find(".jbtn").click(function(i) { i.preventDefault(), Util.maskHide(), jpop.hide(), $.cookie("__m_", 1, { expires: 30, path: "/" }) })
        }
    })
});;
define("common/tuipager/tuipager.js", function(require, exports, module) {
    var Stip = require("common/stip/stip.js"),
        tpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                if (__p += '<div class="tuipager-container tuipager-container-center ' + (null == (__t = obj.className) ? "" : _.escape(__t)) + '">\n    <div class="tuipager-numbers">\n        ', obj.length < 3) {
                    __p += "\n            ";
                    for (var i = 1; i <= obj.length; i++) __p += '\n                <span class="tuipager-item j_tuipager_item ', i === obj.index && (__p += "selected"), __p += '">' + (null == (__t = i) ? "" : _.escape(__t)) + "</span>\n            ";
                    __p += "\n        "
                } else if (obj.length > 2 && obj.length < 8) {
                    __p += '\n            <span class="tuipager-item tuipager-prev j_prev ', 1 === obj.index && (__p += "disabled"), __p += '">\n                <i></i>\n            </span>\n            ';
                    for (var i = 1; i <= obj.length; i++) __p += '\n                <span class="tuipager-item j_tuipager_item ', i === obj.index && (__p += "selected"), __p += '">' + (null == (__t = i) ? "" : _.escape(__t)) + "</span>\n            ";
                    __p += '\n            <span class="tuipager-item tuipager-next j_next ', (obj.index === obj.length || obj.index === obj.length - 1) && (__p += "disabled"), __p += '">\n                <i></i>\n            </span>\n        '
                } else {
                    if (__p += '\n            <span class="tuipager-item tuipager-prev j_prev ', 1 === obj.index && (__p += "disabled"), __p += '">\n                <i></i>\n            </span>\n            ', obj.index < 4) {
                        __p += "\n                ";
                        for (var i = 1; 5 >= i; i++) __p += '\n                    <span class="tuipager-item j_tuipager_item ', i === obj.index && (__p += "selected"), __p += '">' + (null == (__t = i) ? "" : _.escape(__t)) + "</span>\n                ";
                        __p += '\n                <span class="tuipager-seperator">...</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.length) ? "" : _.escape(__t)) + "</span>\n            "
                    } else obj.index > 3 && obj.index < obj.length - 3 ? __p += '\n                <span class="tuipager-item j_tuipager_item">1</span>\n                <span class="tuipager-seperator">...</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.index - 2) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.index - 1) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item selected">' + (null == (__t = obj.index) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.index + 1) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.index + 2) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-seperator">...</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.length) ? "" : _.escape(__t)) + "</span>\n            " : (__p += '\n                <span class="tuipager-item j_tuipager_item">1</span>\n                <span class="tuipager-seperator">...</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.length - 5) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item">' + (null == (__t = obj.length - 4) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item ', obj.length - 3 === obj.index && (__p += "selected"), __p += '">' + (null == (__t = obj.length - 3) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item ', obj.length - 2 === obj.index && (__p += "selected"), __p += '">' + (null == (__t = obj.length - 2) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item ', obj.length - 1 === obj.index && (__p += "selected"), __p += '">' + (null == (__t = obj.length - 1) ? "" : _.escape(__t)) + '</span>\n                <span class="tuipager-item j_tuipager_item ', obj.length === obj.index && (__p += "selected"), __p += '">' + (null == (__t = obj.length) ? "" : _.escape(__t)) + "</span>\n            ");
                    __p += '\n            <span class="tuipager-item tuipager-next j_next ', (obj.index === obj.length || obj.index === obj.length - 1) && (__p += "disabled"), __p += '">\n                <i></i>\n            </span>\n        '
                }
                __p += "\n    </div>\n    ", obj.length > 1 && obj.isJump && (__p += '\n    <div class="tuipager-jump">\n        <div>\n            <input type="text" class="tuipager-jump-number j_jump_number">\n            <span class="tuipager-jump-btn j_jump_btn">跳转</span>\n        </div>\n    </div>\n    '), __p += "\n</div>"
            }
            return __p
        },
        flag = !1;
    return function(e) {
        function n() {
            var n = parseInt(e.$ele.find(".j_jump_number").val());
            n > 0 && i >= n ? (p = n - 1, _()) : Stip.popupTip({ msg: "请输入正确的页码", status: !1, duration: 1e3 })
        }

        function _() { e.cb(p + 1, function(n) { null != n.length && (i = n.length), t = $(tpl({ index: p + 1, length: i, isJump: e.isJump || !1, className: e.className || null })), e.$ele.html(t) }) }
        var t = $(tpl({ index: 0, length: 0, isJump: e.isJump || !1, className: e.className || null }));
        e.$ele.html(t);
        var p = 0,
            i = 0;
        flag || (e.$ele.on("click", ".j_prev", function() { $(this).is(".disabled") || (p--, _()) }), e.$ele.on("click", ".j_next", function() { $(this).is(".disabled") || (p++, _()) }), e.$ele.on("click", ".j_tuipager_item", function() { p = parseInt($(this).text()) - 1, _() }), e.$ele.on("click", ".j_jump_btn", n), e.$ele.on("keydown", ".j_jump_number", function(e) { 13 === e.keyCode && n() }), flag = !0), _()
    }
});;
define("common/ui/modal.js", function(o, e, i) {
    var t = o("common/ui/modal.whe");
    i.exports = Jeact.extend({ template: t, init: function() { this.$el.modal({ backdrop: "static", keyboard: !1, show: !1 }) }, show: function() { this.$el.modal("show") }, hide: function() { this.$el.modal("hide") } })
});;
define("common/ui/tab.js", function() {
    return function(a, n, t) {
        function i(a) {
            var n = t.apply(null, arguments);
            if (n !== !1 && (o.currentValue = a, !s.is(this))) {
                var i = $(this);
                s.removeClass("active"), i.addClass("active"), r.hide(), r = c[a] || e, r.show(), s = i
            }
        }
        2 == arguments.length ? $.isFunction(n) ? (t = n, n = $()) : t = $.noop : 1 === arguments.length && (n = $(), t = $.noop);
        var e = $(),
            s = e,
            r = e,
            u = {},
            c = {};
        n.each(function() {
            var a = $(this);
            c[a.data("tab")] = a
        }), a.each(function() {
            var a = $(this),
                n = a.data("tab");
            u[n] = a, a.click(function() { i.call(this, n) })
        });
        var o = function(a) {
            var n = u[a] || e;
            i.apply(n[0], arguments)
        };
        return o.pages = c, o.tabs = u, o
    }
});;
define("common/ui/toastr.js", function() {
    function e(e, t, n) {
        return g({ type: T.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t })
    }

    function t(e, t) {
        return e || (e = m()), h = $("#" + e.containerId), h.length ? h : (t && (h = d(e)), h)
    }

    function n(e, t, n) {
        return g({ type: T.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t })
    }

    function i(e) { v = e }

    function o(e, t, n) {
        return g({ type: T.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t })
    }

    function s(e, t, n) {
        return g({ type: T.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t })
    }

    function a(e, n) {
        var i = m();
        h || t(i), l(e, i, n) || c(i)
    }

    function r(e) {
        var n = m();
        return h || t(n), e && 0 === $(":focus", e).length ? void f(e) : void(h.children().length && h.remove())
    }

    function c(e) {
        for (var t = h.children(), n = t.length - 1; n >= 0; n--) l($(t[n]), e)
    }

    function l(e, t, n) {
        var i = n && n.force ? n.force : !1;
        return e && (i || 0 === $(":focus", e).length) ? (e[t.hideMethod]({ duration: t.hideDuration, easing: t.hideEasing, complete: function() { f(e) } }), !0) : !1
    }

    function d(e) {
        return h = $("<div/>").attr("id", e.containerId).addClass(e.positionClass).attr("aria-live", "polite").attr("role", "alert"), h.appendTo($(e.target)), h
    }

    function u() {
        return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1 }
    }

    function p(e) { v && v(e) }

    function g(e) {
        function n(e) {
            return null == e && (e = ""), new String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function i() { a(), c(), l(), d(), u(), r() }

        function o() { x.hover(O, T), !D.onclick && D.tapToDismiss && x.click(v), D.closeButton && y && y.click(function(e) { e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), v(!0) }), D.onclick && x.click(function(e) { D.onclick(e), v() }) }

        function s() { x.hide(), x[D.showMethod]({ duration: D.showDuration, easing: D.showEasing, complete: D.onShown }), D.timeOut > 0 && (H = setTimeout(v, D.timeOut), k.maxHideTime = parseFloat(D.timeOut), k.hideEta = (new Date).getTime() + k.maxHideTime, D.progressBar && (k.intervalId = setInterval(b, 10))) }

        function a() { e.iconClass && x.addClass(D.toastClass).addClass(E) }

        function r() { D.newestOnTop ? h.prepend(x) : h.append(x) }

        function c() { e.title && (I.append(D.escapeHtml ? n(e.title) : e.title).addClass(D.titleClass), x.append(I)) }

        function l() { e.message && (M.append(D.escapeHtml ? n(e.message) : e.message).addClass(D.messageClass), x.append(M)) }

        function d() { D.closeButton && (y.addClass("toast-close-button").attr("role", "button"), x.prepend(y)) }

        function u() { D.progressBar && (B.addClass("toast-progress"), x.prepend(B)) }

        function g(e, t) {
            if (e.preventDuplicates) {
                if (t.message === C) return !0;
                C = t.message
            }
            return !1
        }

        function v(e) {
            var t = e && D.closeMethod !== !1 ? D.closeMethod : D.hideMethod,
                n = e && D.closeDuration !== !1 ? D.closeDuration : D.hideDuration,
                i = e && D.closeEasing !== !1 ? D.closeEasing : D.hideEasing;
            return !$(":focus", x).length || e ? (clearTimeout(k.intervalId), x[t]({ duration: n, easing: i, complete: function() { f(x), D.onHidden && "hidden" !== S.state && D.onHidden(), S.state = "hidden", S.endTime = new Date, p(S) } })) : void 0
        }

        function T() {
            (D.timeOut > 0 || D.extendedTimeOut > 0) && (H = setTimeout(v, D.extendedTimeOut), k.maxHideTime = parseFloat(D.extendedTimeOut), k.hideEta = (new Date).getTime() + k.maxHideTime)
        }

        function O() { clearTimeout(H), k.hideEta = 0, x.stop(!0, !0)[D.showMethod]({ duration: D.showDuration, easing: D.showEasing }) }

        function b() {
            var e = (k.hideEta - (new Date).getTime()) / k.maxHideTime * 100;
            B.width(e + "%")
        }
        var D = m(),
            E = e.iconClass || D.iconClass;
        if ("undefined" != typeof e.optionsOverride && (D = $.extend(D, e.optionsOverride), E = e.optionsOverride.iconClass || E), !g(D, e)) {
            w++, h = t(D, !0);
            var H = null,
                x = $("<div/>"),
                I = $("<div/>"),
                M = $("<div/>"),
                B = $("<div/>"),
                y = $(D.closeHtml),
                k = { intervalId: null, hideEta: null, maxHideTime: null },
                S = { toastId: w, state: "visible", startTime: new Date, options: D, map: e };
            return i(), s(), o(), p(S), D.debug && console && console.log(S), x
        }
    }

    function m() {
        return $.extend({}, u(), O.options)
    }

    function f(e) { h || (h = t()), e.is(":visible") || (e.remove(), e = null, 0 === h.children().length && (h.remove(), C = void 0)) }
    var h, v, C, w = 0,
        T = { error: "error", info: "info", success: "success", warning: "warning" },
        O = { clear: a, remove: r, error: e, getContainer: t, info: n, options: {}, subscribe: i, success: o, version: "2.1.2", warning: s };
    return O
});;
define("common/util/async.js", function(n, t, e) {
    ! function() {
        function n() {}

        function t(n) {
            return n
        }

        function r(n) {
            return !!n
        }

        function u(n) {
            return !n
        }

        function i(n) {
            return function() {
                if (null === n) throw new Error("Callback was already called.");
                n.apply(this, arguments), n = null
            }
        }

        function o(n) {
            return function() { null !== n && (n.apply(this, arguments), n = null) }
        }

        function c(n) {
            return U(n) || "number" == typeof n.length && n.length >= 0 && n.length % 1 === 0
        }

        function a(n, t) {
            for (var e = -1, r = n.length; ++e < r;) t(n[e], e, n)
        }

        function f(n, t) {
            for (var e = -1, r = n.length, u = Array(r); ++e < r;) u[e] = t(n[e], e, n);
            return u
        }

        function l(n) {
            return f(Array(n), function(n, t) {
                return t
            })
        }

        function s(n, t, e) {
            return a(n, function(n, r, u) { e = t(e, n, r, u) }), e
        }

        function p(n, t) { a(B(n), function(e) { t(n[e], e) }) }

        function h(n, t) {
            for (var e = 0; e < n.length; e++)
                if (n[e] === t) return e;
            return -1
        }

        function m(n) {
            var t, e, r = -1;
            return c(n) ? (t = n.length, function() {
                return r++, t > r ? r : null
            }) : (e = B(n), t = e.length, function() {
                return r++, t > r ? e[r] : null
            })
        }

        function y(n, t) {
            return t = null == t ? n.length - 1 : +t,
                function() {
                    for (var e = Math.max(arguments.length - t, 0), r = Array(e), u = 0; e > u; u++) r[u] = arguments[u + t];
                    switch (t) {
                        case 0:
                            return n.call(this, r);
                        case 1:
                            return n.call(this, arguments[0], r)
                    }
                }
        }

        function v(n) {
            return function(t, e, r) {
                return n(t, r)
            }
        }

        function d(t) {
            return function(e, r, u) {
                u = o(u || n), e = e || [];
                var c = m(e);
                if (0 >= t) return u(null);
                var a = !1,
                    f = 0,
                    l = !1;
                ! function s() {
                    if (a && 0 >= f) return u(null);
                    for (; t > f && !l;) {
                        var n = c();
                        if (null === n) return a = !0, void(0 >= f && u(null));
                        f += 1, r(e[n], n, i(function(n) { f -= 1, n ? (u(n), l = !0) : s() }))
                    }
                }()
            }
        }

        function g(n) {
            return function(t, e, r) {
                return n(P.eachOf, t, e, r)
            }
        }

        function k(n) {
            return function(t, e, r, u) {
                return n(d(e), t, r, u)
            }
        }

        function b(n) {
            return function(t, e, r) {
                return n(P.eachOfSeries, t, e, r)
            }
        }

        function w(t, e, r, u) {
            u = o(u || n), e = e || [];
            var i = c(e) ? [] : {};
            t(e, function(n, t, e) { r(n, function(n, r) { i[t] = r, e(n) }) }, function(n) { u(n, i) })
        }

        function O(n, t, e, r) {
            var u = [];
            n(t, function(n, t, r) { e(n, function(e) { e && u.push({ index: t, value: n }), r() }) }, function() {
                r(f(u.sort(function(n, t) {
                    return n.index - t.index
                }), function(n) {
                    return n.value
                }))
            })
        }

        function S(n, t, e, r) { O(n, t, function(n, t) { e(n, function(n) { t(!n) }) }, r) }

        function E(n, t, e) {
            return function(r, u, i, o) {
                function c() { o && o(e(!1, void 0)) }

                function a(n, r, u) {
                    return o ? void i(n, function(r) { o && t(r) && (o(e(!0, n)), o = i = !1), u() }) : u()
                }
                arguments.length > 3 ? n(r, u, a, c) : (o = i, i = u, n(r, a, c))
            }
        }

        function L(n, t) {
            return t
        }

        function I(t, e, r) {
            r = r || n;
            var u = c(e) ? [] : {};
            t(e, function(n, t, e) { n(y(function(n, r) { r.length <= 1 && (r = r[0]), u[t] = r, e(n) })) }, function(n) { r(n, u) })
        }

        function j(n, t, e, r) {
            var u = [];
            n(t, function(n, t, r) { e(n, function(n, t) { u = u.concat(t || []), r(n) }) }, function(n) { r(n, u) })
        }

        function x(t, e, r) {
            function u(t, e, r, u) {
                if (null != u && "function" != typeof u) throw new Error("task callback must be a function");
                return t.started = !0, U(e) || (e = [e]), 0 === e.length && t.idle() ? P.setImmediate(function() { t.drain() }) : (a(e, function(e) {
                    var i = { data: e, callback: u || n };
                    r ? t.tasks.unshift(i) : t.tasks.push(i), t.tasks.length === t.concurrency && t.saturated()
                }), void P.setImmediate(t.process))
            }

            function o(n, t) {
                return function() {
                    c -= 1;
                    var e = !1,
                        r = arguments;
                    a(t, function(n) { a(l, function(t, r) { t !== n || e || (l.splice(r, 1), e = !0) }), n.callback.apply(n, r) }), n.tasks.length + c === 0 && n.drain(), n.process()
                }
            }
            if (null == e) e = 1;
            else if (0 === e) throw new Error("Concurrency must not be zero");
            var c = 0,
                l = [],
                s = {
                    tasks: [],
                    concurrency: e,
                    payload: r,
                    saturated: n,
                    empty: n,
                    drain: n,
                    started: !1,
                    paused: !1,
                    push: function(n, t) { u(s, n, !1, t) },
                    kill: function() { s.drain = n, s.tasks = [] },
                    unshift: function(n, t) { u(s, n, !0, t) },
                    process: function() {
                        for (; !s.paused && c < s.concurrency && s.tasks.length;) {
                            var n = s.payload ? s.tasks.splice(0, s.payload) : s.tasks.splice(0, s.tasks.length),
                                e = f(n, function(n) {
                                    return n.data
                                });
                            0 === s.tasks.length && s.empty(), c += 1, l.push(n[0]);
                            var r = i(o(s, n));
                            t(e, r)
                        }
                    },
                    length: function() {
                        return s.tasks.length
                    },
                    running: function() {
                        return c
                    },
                    workersList: function() {
                        return l
                    },
                    idle: function() {
                        return s.tasks.length + c === 0
                    },
                    pause: function() { s.paused = !0 },
                    resume: function() {
                        if (s.paused !== !1) {
                            s.paused = !1;
                            for (var n = Math.min(s.concurrency, s.tasks.length), t = 1; n >= t; t++) P.setImmediate(s.process)
                        }
                    }
                };
            return s
        }

        function A(n) {
            return y(function(t, e) { t.apply(null, e.concat([y(function(t, e) { "object" == typeof console && (t ? console.error && console.error(t) : console[n] && a(e, function(t) { console[n](t) })) })])) })
        }

        function T(n) {
            return function(t, e, r) { n(l(t), e, r) }
        }

        function z(n) {
            return y(function(t, e) {
                var r = y(function(e) {
                    var r = this,
                        u = e.pop();
                    return n(t, function(n, t, u) { n.apply(r, e.concat([u])) }, u)
                });
                return e.length ? r.apply(this, e) : r
            })
        }

        function q(n) {
            return y(function(t) {
                var e = t.pop();
                t.push(function() {
                    var n = arguments;
                    r ? P.setImmediate(function() { e.apply(null, n) }) : e.apply(null, n)
                });
                var r = !0;
                n.apply(this, t), r = !1
            })
        }
        var C, P = {},
            H = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this;
        null != H && (C = H.async), P.noConflict = function() {
            return H.async = C, P
        };
        var M = Object.prototype.toString,
            U = Array.isArray || function(n) {
                return "[object Array]" === M.call(n)
            },
            W = function(n) {
                var t = typeof n;
                return "function" === t || "object" === t && !!n
            },
            B = Object.keys || function(n) {
                var t = [];
                for (var e in n) n.hasOwnProperty(e) && t.push(e);
                return t
            },
            D = "function" == typeof setImmediate && setImmediate,
            F = D ? function(n) { D(n) } : function(n) { setTimeout(n, 0) };
        P.nextTick = "object" == typeof process && "function" == typeof process.nextTick ? process.nextTick : F, P.setImmediate = D ? F : P.nextTick, P.forEach = P.each = function(n, t, e) {
            return P.eachOf(n, v(t), e)
        }, P.forEachSeries = P.eachSeries = function(n, t, e) {
            return P.eachOfSeries(n, v(t), e)
        }, P.forEachLimit = P.eachLimit = function(n, t, e, r) {
            return d(t)(n, v(e), r)
        }, P.forEachOf = P.eachOf = function(t, e, r) {
            function u(n) { f--, n ? r(n) : null === c && 0 >= f && r(null) }
            r = o(r || n), t = t || [];
            for (var c, a = m(t), f = 0; null != (c = a());) f += 1, e(t[c], c, i(u));
            0 === f && r(null)
        }, P.forEachOfSeries = P.eachOfSeries = function(t, e, r) {
            function u() {
                var n = !0;
                return null === a ? r(null) : (e(t[a], a, i(function(t) {
                    if (t) r(t);
                    else {
                        if (a = c(), null === a) return r(null);
                        n ? P.setImmediate(u) : u()
                    }
                })), void(n = !1))
            }
            r = o(r || n), t = t || [];
            var c = m(t),
                a = c();
            u()
        }, P.forEachOfLimit = P.eachOfLimit = function(n, t, e, r) { d(t)(n, e, r) }, P.map = g(w), P.mapSeries = b(w), P.mapLimit = k(w), P.inject = P.foldl = P.reduce = function(n, t, e, r) { P.eachOfSeries(n, function(n, r, u) { e(t, n, function(n, e) { t = e, u(n) }) }, function(n) { r(n, t) }) }, P.foldr = P.reduceRight = function(n, e, r, u) {
            var i = f(n, t).reverse();
            P.reduce(i, e, r, u)
        }, P.transform = function(n, t, e, r) { 3 === arguments.length && (r = e, e = t, t = U(n) ? [] : {}), P.eachOf(n, function(n, r, u) { e(t, n, r, u) }, function(n) { r(n, t) }) }, P.select = P.filter = g(O), P.selectLimit = P.filterLimit = k(O), P.selectSeries = P.filterSeries = b(O), P.reject = g(S), P.rejectLimit = k(S), P.rejectSeries = b(S), P.any = P.some = E(P.eachOf, r, t), P.someLimit = E(P.eachOfLimit, r, t), P.all = P.every = E(P.eachOf, u, u), P.everyLimit = E(P.eachOfLimit, u, u), P.detect = E(P.eachOf, t, L), P.detectSeries = E(P.eachOfSeries, t, L), P.detectLimit = E(P.eachOfLimit, t, L), P.sortBy = function(n, t, e) {
            function r(n, t) {
                var e = n.criteria,
                    r = t.criteria;
                return r > e ? -1 : e > r ? 1 : 0
            }
            P.map(n, function(n, e) { t(n, function(t, r) { t ? e(t) : e(null, { value: n, criteria: r }) }) }, function(n, t) {
                return n ? e(n) : void e(null, f(t.sort(r), function(n) {
                    return n.value
                }))
            })
        }, P.auto = function(t, e, r) {
            function u(n) { g.unshift(n) }

            function i(n) {
                var t = h(g, n);
                t >= 0 && g.splice(t, 1)
            }

            function c() { l--, a(g.slice(0), function(n) { n() }) }
            "function" == typeof arguments[1] && (r = e, e = null), r = o(r || n);
            var f = B(t),
                l = f.length;
            if (!l) return r(null);
            e || (e = l);
            var m = {},
                v = 0,
                d = !1,
                g = [];
            u(function() { l || r(null, m) }), a(f, function(n) {
                function o() {
                    return e > v && s(k, function(n, t) {
                        return n && m.hasOwnProperty(t)
                    }, !0) && !m.hasOwnProperty(n)
                }

                function a() { o() && (v++, i(a), l[l.length - 1](g, m)) }
                if (!d) {
                    for (var f, l = U(t[n]) ? t[n] : [t[n]], g = y(function(t, e) {
                            if (v--, e.length <= 1 && (e = e[0]), t) {
                                var u = {};
                                p(m, function(n, t) { u[t] = n }), u[n] = e, d = !0, r(t, u)
                            } else m[n] = e, P.setImmediate(c)
                        }), k = l.slice(0, l.length - 1), b = k.length; b--;) {
                        if (!(f = t[k[b]])) throw new Error("Has inexistant dependency");
                        if (U(f) && h(f, n) >= 0) throw new Error("Has cyclic dependencies")
                    }
                    o() ? (v++, l[l.length - 1](g, m)) : u(a)
                }
            })
        }, P.retry = function(n, t, e) {
            function r(n, t) {
                if ("number" == typeof t) n.times = parseInt(t, 10) || i;
                else {
                    if ("object" != typeof t) throw new Error("Unsupported argument type for 'times': " + typeof t);
                    n.times = parseInt(t.times, 10) || i, n.interval = parseInt(t.interval, 10) || o
                }
            }

            function u(n, t) {
                function e(n, e) {
                    return function(r) { n(function(n, t) { r(!n || e, { err: n, result: t }) }, t) }
                }

                function r(n) {
                    return function(t) { setTimeout(function() { t(null) }, n) }
                }
                for (; a.times;) {
                    var u = !(a.times -= 1);
                    c.push(e(a.task, u)), !u && a.interval > 0 && c.push(r(a.interval))
                }
                P.series(c, function(t, e) { e = e[e.length - 1], (n || a.callback)(e.err, e.result) })
            }
            var i = 5,
                o = 0,
                c = [],
                a = { times: i, interval: o },
                f = arguments.length;
            if (1 > f || f > 3) throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");
            return 2 >= f && "function" == typeof n && (e = t, t = n), "function" != typeof n && r(a, n), a.callback = e, a.task = t, a.callback ? u() : u
        }, P.waterfall = function(t, e) {
            function r(n) {
                return y(function(t, u) {
                    if (t) e.apply(null, [t].concat(u));
                    else {
                        var i = n.next();
                        u.push(i ? r(i) : e), q(n).apply(null, u)
                    }
                })
            }
            if (e = o(e || n), !U(t)) {
                var u = new Error("First argument to waterfall must be an array of functions");
                return e(u)
            }
            return t.length ? void r(P.iterator(t))() : e()
        }, P.parallel = function(n, t) { I(P.eachOf, n, t) }, P.parallelLimit = function(n, t, e) { I(d(t), n, e) }, P.series = function(n, t) { I(P.eachOfSeries, n, t) }, P.iterator = function(n) {
            function t(e) {
                function r() {
                    return n.length && n[e].apply(null, arguments), r.next()
                }
                return r.next = function() {
                    return e < n.length - 1 ? t(e + 1) : null
                }, r
            }
            return t(0)
        }, P.apply = y(function(n, t) {
            return y(function(e) {
                return n.apply(null, t.concat(e))
            })
        }), P.concat = g(j), P.concatSeries = b(j), P.whilst = function(t, e, r) {
            if (r = r || n, t()) {
                var u = y(function(n, i) { n ? r(n) : t.apply(this, i) ? e(u) : r.apply(null, [null].concat(i)) });
                e(u)
            } else r(null)
        }, P.doWhilst = function(n, t, e) {
            var r = 0;
            return P.whilst(function() {
                return ++r <= 1 || t.apply(this, arguments)
            }, n, e)
        }, P.until = function(n, t, e) {
            return P.whilst(function() {
                return !n.apply(this, arguments)
            }, t, e)
        }, P.doUntil = function(n, t, e) {
            return P.doWhilst(n, function() {
                return !t.apply(this, arguments)
            }, e)
        }, P.during = function(t, e, r) {
            r = r || n;
            var u = y(function(n, e) { n ? r(n) : (e.push(i), t.apply(this, e)) }),
                i = function(n, t) { n ? r(n) : t ? e(u) : r(null) };
            t(i)
        }, P.doDuring = function(n, t, e) {
            var r = 0;
            P.during(function(n) { r++ < 1 ? n(null, !0) : t.apply(this, arguments) }, n, e)
        }, P.queue = function(n, t) {
            var e = x(function(t, e) { n(t[0], e) }, t, 1);
            return e
        }, P.priorityQueue = function(t, e) {
            function r(n, t) {
                return n.priority - t.priority
            }

            function u(n, t, e) {
                for (var r = -1, u = n.length - 1; u > r;) {
                    var i = r + (u - r + 1 >>> 1);
                    e(t, n[i]) >= 0 ? r = i : u = i - 1
                }
                return r
            }

            function i(t, e, i, o) {
                if (null != o && "function" != typeof o) throw new Error("task callback must be a function");
                return t.started = !0, U(e) || (e = [e]), 0 === e.length ? P.setImmediate(function() { t.drain() }) : void a(e, function(e) {
                    var c = { data: e, priority: i, callback: "function" == typeof o ? o : n };
                    t.tasks.splice(u(t.tasks, c, r) + 1, 0, c), t.tasks.length === t.concurrency && t.saturated(), P.setImmediate(t.process)
                })
            }
            var o = P.queue(t, e);
            return o.push = function(n, t, e) { i(o, n, t, e) }, delete o.unshift, o
        }, P.cargo = function(n, t) {
            return x(n, 1, t)
        }, P.log = A("log"), P.dir = A("dir"), P.memoize = function(n, e) {
            var r = {},
                u = {};
            e = e || t;
            var i = y(function(t) {
                var i = t.pop(),
                    o = e.apply(null, t);
                o in r ? P.setImmediate(function() { i.apply(null, r[o]) }) : o in u ? u[o].push(i) : (u[o] = [i], n.apply(null, t.concat([y(function(n) {
                    r[o] = n;
                    var t = u[o];
                    delete u[o];
                    for (var e = 0, i = t.length; i > e; e++) t[e].apply(null, n)
                })])))
            });
            return i.memo = r, i.unmemoized = n, i
        }, P.unmemoize = function(n) {
            return function() {
                return (n.unmemoized || n).apply(null, arguments)
            }
        }, P.times = T(P.map), P.timesSeries = T(P.mapSeries), P.timesLimit = function(n, t, e, r) {
            return P.mapLimit(l(n), t, e, r)
        }, P.seq = function() {
            var t = arguments;
            return y(function(e) {
                var r = this,
                    u = e[e.length - 1];
                "function" == typeof u ? e.pop() : u = n, P.reduce(t, e, function(n, t, e) { t.apply(r, n.concat([y(function(n, t) { e(n, t) })])) }, function(n, t) { u.apply(r, [n].concat(t)) })
            })
        }, P.compose = function() {
            return P.seq.apply(null, Array.prototype.reverse.call(arguments))
        }, P.applyEach = z(P.eachOf), P.applyEachSeries = z(P.eachOfSeries), P.forever = function(t, e) {
            function r(n) {
                return n ? u(n) : void o(r)
            }
            var u = i(e || n),
                o = q(t);
            r()
        }, P.ensureAsync = q, P.constant = y(function(n) {
            var t = [null].concat(n);
            return function(n) {
                return n.apply(this, t)
            }
        }), P.wrapSync = P.asyncify = function(n) {
            return y(function(t) {
                var e, r = t.pop();
                try { e = n.apply(this, t) } catch (u) {
                    return r(u)
                }
                W(e) && "function" == typeof e.then ? e.then(function(n) { r(null, n) })["catch"](function(n) { r(n.message ? n : new Error(n)) }) : r(null, e)
            })
        }, e.exports = P
    }()
});;
define("common/util/bdshare.js", function(t, e, n) {
    var o = "6649976",
        i = "http://s.share.baidu.com/",
        a = function() {
            var t = (new Date).getTime(),
                e = (new Date).getTime() + 1e3,
                n = (new Date).getTime() + 3e3;
            return t.toString(32) + e.toString(32) + n.toString(32)
        },
        r = function(t, e) {
            for (var n = t.length, o = "", i = 1; e >= i; i++) {
                var a = Math.floor(n * Math.random());
                o += t.charAt(a)
            }
            return o
        },
        c = function() {
            var t = (new Date).toString(36),
                e = r("0123456789abcdefghijklmnopqrstuvwxyz", 3);
            return t + e
        };
    n.exports = function(t, e) {
        e = e || {};
        var n = a(),
            r = 0,
            u = "",
            l = document.title,
            s = e.wbuid || "",
            d = c(),
            m = (window.isAppPage ? "app" : "detail/list", encodeURIComponent(e.pic || "")),
            p = encodeURIComponent(e.url || ""),
            h = encodeURIComponent(e.comment || ""),
            f = encodeURIComponent(e.desc || ""),
            g = { tsina: "2504490989", tqq: "801083581", t163: "", tsohu: "" };
        "tsina" === t ? l = (e.text || l) + (e.weibotext || u) : ("tqq" === t && (e.text = e.text.replace("@今日头条", "@headlineapp")), l = e.text || l), l = encodeURIComponent(l.substring(0, 300));
        var w = "?click=1&url=" + p + "&uid=" + o + "&to=" + t + "&type=text&relateUid=" + s + "&pic=" + m + "&title=" + l + "&key=" + g[t] + "&sign=on&desc=" + f + "&comment=" + h + "&searchPic=0&l=" + n + "&linkid=" + d + "&sloc=&apiType=0&buttonType=" + r,
            b = i + w,
            v = i + "commit" + w + "&t=" + Math.random(),
            x = function() {
                var t = [];
                return function(e) {
                    var n = t.push(new Image) - 1;
                    t[n].onload = function() { t[n] = t[n].onload = null }, t[n].src = e
                }
            }();
        setTimeout(function() { x(v) }, 1500), window.open(b, "_blank", "height=500,width=700,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")
    }
});;
define("common/util/dict.js", function(t, a) { a.lasttag = "lasttag" });;
define("common/util/formcheck.js", function() {
    jQuery.fn.extend({
        form_check: function(r) {
            function t(r, t) {
                var i = $(r).attr("id");
                if (i) {
                    var l = $(r).attr("class").split(/\s+/),
                        f = parseInt($(r).attr("minlength")) || 1,
                        c = parseInt($(r).attr("maxlength")) || 0,
                        u = $.trim($(r).val()) || "",
                        d = u.length,
                        h = -1 == l.indexOf("email") ? !1 : !0,
                        p = -1 == l.indexOf("id_card") ? !1 : !0,
                        m = -1 == l.indexOf("url") ? !1 : !0,
                        v = -1 == l.indexOf("time") ? !1 : !0,
                        g = $(r).get(0).nodeName.toLowerCase(),
                        b = $(r).attr("type") || "",
                        x = !1;
                    return "select" == g ? u ? (x = !0, e(i, "valid", "", b)) : e(i, "error", s, b, !0) : "input" == g && "checkbox" == b ? r.checked ? (e(i, "valid", "", b), x = !0) : e(i, "error", s, b) : 0 == d ? e(i, "error", s, b) : f > d ? e(i, "error", "请输入长度最少是" + f + "的字符串", b) : c && d > c ? e(i, "error", "最大允许长度为" + c + "的字符串", b) : h && !o.test(u) ? e(i, "error", "请输入正确格式的电子邮件", b) : m && !url_pattern.test(u) ? e(i, "error", "请输入正确格式的链接地址", b) : p && !n(u) ? e(i, "error", "请输入合法的身份证号码", b) : v && a(u) ? e(i, "error", "请输入正确的时间格式，如2014-10-20 20:35", b) : (x = !0, e(i, "valid", "", b), m && t && u && !/^((https|http|ftp|rtsp|mms):\/\/)/.test(u) && (u = "http://" + u, $(r).val(u))), x
                }
            }

            function e(r, t, e, a, n) {
                var i = "#" + r + '+ label[for="' + r + '"][class="error"]',
                    l = $("#" + r);
                "checkbox" == a && (i = "." + r + '+ label[for="' + r + '"][class="error"]', l = $("." + r));
                var s = !!$(i).length;
                s ? "valid" == t ? $(i).remove() : $(i).html(e) : "error" == t && ($label = $("<label>"), $label.attr("for", r).addClass("error").html(e), n && $label.attr("style", "display:inline-block;margin-left:5px;"), l.after($label))
            }

            function a(r) {
                if (!r || "string" != typeof r) return !0;
                var t = !1;
                if (/(\d{4})-(\d{2})-(\d{2})(\s+)(\d{2}):(\d{2})/.test(r)) {
                    var e = r.split(/\s+/),
                        a = e[0],
                        n = e[1],
                        i = a.split("-"),
                        l = n.split(":"),
                        s = (i[0] - 0, i[1] - 1),
                        o = i[2] - 0,
                        f = l[0] - 0,
                        c = l[1] - 0;
                    (s > 11 || o > 31 || f > 23 || c > 59) && (t = !0)
                } else t = !0;
                return t
            }

            function n(r) {
                if (!r || "string" != typeof r || 18 != r.length) return !1;
                r = r.toLowerCase();
                var t = /(^\d{17}(\d|X)$)/i;
                if (!t.test(r)) return !1;
                for (var e = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], a = [1, 0, "x", 9, 8, 7, 6, 5, 4, 3, 2], n = 0, i = "", l = 0; l < r.length - 1; l++) n += parseInt(r.substr(l, 1)) * e[l];
                return i = n % 11, a[i] != r.substr(r.length - 1, 1) ? !1 : !0
            }
            if (0 != this.length) {
                var i = this.get(0),
                    l = $(i);
                if ("form" == i.nodeName.toLowerCase()) {
                    var s = "必选字段",
                        o = /^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                    l.submit(function() {
                        var e = [],
                            a = $(".required", l).filter("input,textarea,select");
                        return a.each(function(r, a) {
                            var n = t(a, !0);
                            n === !1 && e.push(a), $(a).change(function() { t(this, !1) }), $(a).keyup(function() { t(this, !1) })
                        }), e.length ? (e[0].focus(), !1) : r ? r() : !0
                    })
                }
            }
        }
    })
});;
define("common/util/labelupload.js", function() {
    ! function() {
        var t = $("<div/>").css({ position: "fixed", bottom: 5, left: 5, width: 1, height: 1, textIndent: 1, overflow: "hidden" });
        $(function() { t.appendTo("body") });
        var e = 0;
        $.fn.labelUpload = function(a) {
            e++;
            var n = this;
            a = $.extend({ contentType: "html", dataType: "text", onstart: $.noop, oncomplete: $.noop }, a);
            var o = $('<input type="file" name="' + a.name + '" id="labelupload_' + e + '" />');
            return a.accept && o.prop("accept", a.accept), o.change(function() {
                if ($(this).val()) {
                    a.onstart();
                    var t = new FormData;
                    t.append(a.name, o[0].files[0]), $.ajax({ type: "post", url: a.action, data: t, dataType: a.dataType, contentType: !1, processData: !1 }).done(function(t) { a.oncomplete.apply(n, [null, t, { fileName: o.val().replace(/^.*\\/, "") }]) }).fail(function() { a.oncomplete.apply(n, ["上传失败"]) })
                }
            }), t.append(o), this.attr("for", o.attr("id")), this
        }
    }()
});;
define("common/util/omap.js", function(t, r, e) {
    "use strict";

    function s() { this._values = {}, this._keys = {}, this._order = [], this._id = (new Date).getTime() + "$" + String(Math.random()).slice(2), this._nextId = 0 }
    var i = function(t, r, e) { t[r] = e },
        h = function(t, r) {
            for (var e = 0; e < t.length; e++)
                if (t[e] === r) return e;
            return -1
        };
    e.exports = s, s.from = function(t, r) {
        for (var e = this, s = new e, i = 0; i < t.length; i++) {
            var h = t[i],
                o = r ? "function" == typeof r ? r(h, i, t) : h[r] : i,
                n = s._hash(o);
            s._order.push(n), s._keys[n] = o, s._values[n] = h
        }
        return s
    }, s.fromTuples = function(t) {
        for (var r = this, e = new r, s = 0; s < t.length; s++) {
            var i = t[s],
                h = i[0],
                o = e._hash(h);
            e._order.push(o), e._keys[o] = i[0], e._values[o] = i[1]
        }
        return e
    }, s.prototype._hash = function(t) {
        var r = typeof t;
        if (null === t || void 0 === t || "boolean" === r || "number" === r) return "%" + t;
        if ("string" === r) return '"' + t;
        if ("object" !== r && "function" !== r) return "?" + t;
        if (t instanceof Date) return "@" + Number(t);
        if (t instanceof RegExp) return "!" + t;
        var e = "__hash$" + this._id;
        return void 0 === t[e] && (i(t, e, this._nextId), this._nextId += 1), "#" + t[e]
    }, s.prototype.count = function() {
        return this._order.length
    }, s.prototype.keyAt = function(t) {
        return 0 > t || t > this._order.length ? void 0 : this._keys[this._order[t]]
    }, s.prototype.indexOf = function(t) {
        var r = this._hash(t);
        return h(this._order, r)
    }, s.prototype.insert = function(t, r, e) {
        var s = this._hash(r),
            i = h(this._order, s); - 1 !== i && this._order.splice(i, 1), t >= this._order.length ? this._order.push(s) : 0 > t ? this._order.unshift(s) : this._order.splice(t, 0, s), this._keys[s] = r, this._values[s] = e
    }, s.prototype.set = function(t, r) {
        var e = this._hash(t),
            s = h(this._order, e); - 1 === s && this._order.push(e), this._keys[e] = t, this._values[e] = r
    }, s.prototype.get = function(t) {
        var r = this._hash(t);
        return this._values[r]
    }, s.prototype.remove = function(t) {
        var r = this._hash(t),
            e = h(this._order, r);
        return -1 === e ? !1 : (this._order.splice(e, 1), delete this._keys[r], delete this._values[r], !0)
    }, s.prototype.unshift = function(t, r) {
        var e = this._hash(t),
            s = h(this._order, e); - 1 !== s && this._order.splice(s, 1), this._order.unshift(e), this._keys[e] = t, this._values[e] = r
    }, s.prototype.shift = function() {
        if (!this._order.length) return void 0;
        var t = this._order.shift(),
            r = this._keys[t],
            e = this._values[t];
        return delete this._keys[t], delete this._values[t], [r, e]
    }, s.prototype.push = function(t, r) {
        var e = this._hash(t),
            s = h(this._order, e); - 1 !== s && this._order.splice(s, 1), this._order.push(e), this._keys[e] = t, this._values[e] = r
    }, s.prototype.pop = function() {
        if (!this._order.length) return void 0;
        var t = this._order.pop(),
            r = this._keys[t],
            e = this._values[t];
        return delete this._keys[t], delete this._values[t], [r, e]
    }, s.prototype.items = function() {
        for (var t = [], r = 0; r < this._order.length; r++) {
            var e = this._order[r];
            t.push([this._keys[e], this._values[e]])
        }
        return t
    }, s.prototype.values = function() {
        for (var t = [], r = 0; r < this._order.length; r++) {
            var e = this._order[r];
            t.push(this._values[e])
        }
        return t
    }, s.prototype.keys = function() {
        for (var t = [], r = 0; r < this._order.length; r++) {
            var e = this._order[r];
            t.push(this._keys[e])
        }
        return t
    }, s.prototype.forEach = function(t) {
        for (var r = 0; r < this._order.length; r++) {
            var e = this._order[r];
            t(this._values[e], this._keys[e], this)
        }
    }, s.prototype.map = function(t) {
        for (var r = [], e = 0; e < this._order.length; e++) {
            var s = this._order[e];
            r.push(t(this._values[s], this._keys[s], this))
        }
        return r
    }, s.prototype.filter = function(t) {
        for (var r = new s, e = 0; e < this._order.length; e++) {
            var i = this._order[e],
                h = this._keys[i],
                o = this._values[i];
            t(o, h, this) && (r._order.push(i), r._keys[i] = h, r._values[i] = o)
        }
        return r
    }, s.prototype.reduce = function(t, r) {
        var e = 0,
            s = r;
        if (void 0 === s) {
            if (!this._order.length) throw new TypeError("Must provide an initial value for empty maps");
            s = this._values[this._order[0]], e = 1
        }
        for (; e < this._order.length; e++) {
            var i = this._order[e];
            s = t(s, this._values[i], this._keys[i], this)
        }
        return s
    }, s.prototype.reduceRight = function(t, r) {
        var e = this._order.length,
            s = r;
        if (void 0 === s) {
            if (!this._order.length) throw new TypeError("Must provide an initial value for empty maps");
            s = this._values[this._order[e - 1]], e -= 1
        }
        for (var e = this._order.length; e > 0; e--) {
            var i = this._order[e - 1];
            s = t(s, this._values[i], this._keys[i], this)
        }
        return s
    }
});;
define("common/util/parser.js", function(r, f) {
    f.duration = function(r) {
        if (isNaN(r)) return "00:00";
        var n = "",
            e = r % 60;
        if (n = f.leftPad(e, 2, 0) + n, r -= e, 0 !== r) {
            r /= 60;
            var t = r % 60;
            if (n = f.leftPad(t, 2, 0) + ":" + n, r -= t, 0 !== r) {
                var i = r / 60;
                n = f.leftPad(i, 2, 0) + ":" + n
            }
        }
        return ~n.indexOf(":") || (n = "00:" + n), n
    };
    var n = ["", " ", "  ", "   ", "    ", "     ", "      ", "       ", "        ", "         "];
    f.leftPad = function(r, f, e) {
        if (r += "", f -= r.length, 0 >= f) return r;
        if (e || 0 === e || (e = " "), e += "", " " === e && 10 > f) return n[f] + r;
        for (var t = "";;) {
            if (1 & f && (t += e), f >>= 1, !f) break;
            e += e
        }
        return t + r
    }
});;
define("common/util/re.js", function() {});;
define("common/vali/core.js", function() {
    return function(t) {
        function n(t, n) {
            var a = this.data("vali_effect") || l.effect;
            if (null == t) {
                n = i(this, n);
                var r = this.data("vali_require");
                r === !0 && (r = "必填项"), r && !n && (t = r)
            }
            return a.call(this, t, n), [t, n]
        }

        function a(t) {
            var n, a = t[0];
            return "checkbox" === a.type || "radio" === a.type ? a.checked && (n = t.val() || "on") : n = t.val(), n
        }

        function i(t, n) {
            null == n && t.is(":input") && (n = a(t));
            var i = t.data("vali_name") || t.attr("name");
            return n = r(n), null == i || null == n ? null : { name: i, value: n }
        }

        function r(t) {
            if (!t) return null;
            var n = typeof t;
            return "string" === n ? t = $.trim(t) : "object" === n && ($.isArray(t) && 0 === t.length ? t = null : $.isEmptyObject(t) && (t = null)), null == t || "" === t ? null : t
        }
        var l = { valiFunc: function(t) { t() }, effect: function(t) { t ? (this.addClass("error"), this.data("vali_jmsg").html(t)) : (this.removeClass("error"), this.data("vali_jmsg").html("")) } };
        t.unbind(".vali").bind("change.vali", function(t) {
            if (t.target === this) {
                var a = $(this);
                e.call(a, $.proxy(n, a))
            }
        }).one("blur.vali", function(t) {
            if (t.target === this) {
                var n = $(this);
                n.is(":input") && !n.val() && n.trigger("change")
            }
        });
        var e = function(t) {
                var n = this.data("vali_func") || l.valiFunc,
                    i = this.data("vali_require");
                if (i === !0 && (i = "必填项"), !this.is(":input") || null == i) return n.apply(this, arguments);
                var r = a(this);
                i ? r ? n.apply(this, arguments) : t(i) : r ? n.apply(this, arguments) : t()
            },
            u = function(a) {
                function i(l) {
                    if (l >= t.length) return a(r, u, s);
                    var c = t.eq(l);
                    e.call(c, function() {
                        var t = n.apply(c, arguments),
                            a = t[0],
                            e = t[1];
                        a ? null == r && (r = a, u = c) : e && s.push(e), i(l + 1)
                    })
                }
                if ("reset" === a) return void t.each(function() {
                    var t = $(this),
                        n = t.data("vali_effect") || l.effect;
                    n.call(t)
                });
                var r, u, s = [];
                i(0)
            };
        return u
    }
});;
define("common/vali/vali.js", function(t) {
    function n(t) {
        var n = $('<a href="' + t + '" target="_blank">链接</a>'),
            e = n.get(0),
            i = document.createEvent("MouseEvents");
        i.initEvent("click", !0, !0), e.dispatchEvent(i), n.remove()
    }
    var e = t("common/util/util.js"),
        i = t("common/popup/dialog.js"),
        a = t("common/vali/core.js");
    return a._int = function(t) {
        return /^\d*$/.test(t) ? void 0 : "请输入正整数"
    }, a.simple = function(t) {
        var n = $(t.tpl(t)),
            e = n.find(":input").eq(0);
        return e.data("vali_func", t.func), e.data("vali_require", t.require), e.data("vali_name", t.name), e.data("vali_jmsg", n.find(".jmsg")), { jbox: n, name: t.name, jvali: e }
    }, a.returnWrap = function(t) {
        return function(n) {
            return n.apply(this, [].concat(t.call(this, $.trim(this.val()))))
        }
    }, a.mixin = function() {
        for (var t = $.extend.apply($, arguments), n = ["name", "effect", "func", "jmsg", "require"], e = 0; e < n.length; e++) {
            var i = n[e];
            t["vali_" + i] = t[i], delete t[i]
        }
        return t
    }, a.mobile = function(t) {
        return /^1\d{10}$/.test(t) ? void 0 : "请输入正确的手机号码"
    }, a.email = function(t) {
        return /^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(t) ? void 0 : "请输入正确的邮箱地址"
    }, a.cnid = function(t) {
        if (void 0 != window.canModifyID && 0 == window.canModifyID) return !1;
        var n = "请输入正确的身份证";
        if (!t || "string" != typeof t || 18 != t.length) return n;
        t = t.toLowerCase();
        var e = /(^\d{17}(\d|X)$)/i;
        if (!e.test(t)) return n;
        for (var i = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], a = [1, 0, "x", 9, 8, 7, 6, 5, 4, 3, 2], r = 0, u = "", o = 0; o < t.length - 1; o++) r += parseInt(t.substr(o, 1), 10) * i[o];
        return u = r % 11, a[u] != t.substr(t.length - 1, 1) ? n : void 0
    }, a.range = function(t, n, e, i) {
        var a;
        a = n && e ? "请输入" + n + "到" + e + "个字" : n ? "请最少输入" + n + "个字" : "请最多输入" + e + "个字", t = $.trim(t);
        var r;
        return r = i ? t.replace(/[^\x00-\xff]/g, "**").length / 2 : t.length, n && n > r ? a : e && r > e ? a : void 0
    }, a.emoji = function(t) {
        return null != t.match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g) ? "不可输入表情" : void 0
    }, a.url = function(t) {
        return e.formatUrl($.trim(t)) ? void 0 : "请输入正确的链接"
    }, a.ifLinkValid = function(t, n) {
        if (!e.formatUrl($.trim(t))) return "请输入正确的链接";
        var i = /^(http:\/\/|https:\/\/)/;
        i.test(t) || (t = "http://" + t);
        for (var a in n)
            if (-1 != t.indexOf(n[a])) return "您填写的链接地址不合法，请参考使用规范，填写正确的链接地址。"
    }, a.canUseMediaName = function(t) {
        var n = $.trim(this.val()),
            i = a.range(n, 2, 10, !0);
        return i ? t(i) : void e.ajax({ url: "/can_use_media_name/", method: "GET", data: { name: n }, callback: function(n, e) { 0 == n ? t() : (~e.indexOf("存在") && (e = '该名称已存在，如果您拥有该名称的合法权益，您可以<a href="/infringement/#complain" target="_blank" class="slink">点此投诉并申请取回该名称</a>'), t(e)) } })
    }, a.mediaNameId = function(t) {
        var n = $.trim(this.val()),
            i = a.range(n, 2, 10, !0);
        return i ? t(i) : void e.ajax("/infringement/get_media_id/", { name: n }, function(e, i, a) { 0 === e ? t(null, { text: n, value: a.media_id }) : t("无此头条号") })
    }, a.validBrowser = function(t, e) {
        $.ajax({ url: "/article/browser_auth/", type: "get", dataType: "json", data: { redirect_uri: t } }).done(function(t) {
            if ("success" != t.message) return void("function" == typeof e && e(!1, "网络错误，请重新提交"));
            if (t.reason.auth_status) "function" == typeof e && e(!0);
            else var a = i({ btns: [{ type: "ok", click: function() { n(t.reason.redirect_url), a.remove() }, text: "验证手机号" }, { type: "cancel", text: "暂不验证" }], title: "温馨提示", content: "<p>您近30天内未进行过手机动态验证，或更换了登录设备/浏览器/IP。</p><p>为确保您的帐号安全，请验证绑定的手机号。</p>" }).show()
        }).fail(function() { "function" == typeof e && e(!1, "网络错误，请重新提交") })
    }, a
});;
define("common/video_select/video_select.js", function(require, exports, module) {
    var videoSelecTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "<div class='video_select j_video_select'>\n    <div class='j_video_select_dom video_select_dom'>\n        <span class='j_video_select_value'>\n            " + (null == (__t = inital.value ? inital.value : "精确选择分类更有利于推荐") ? "" : __t) + "\n        </span>\n        <span class='video_select_right j_video_select_right'>\n            <a class='class_toggle class_down j_class_toggle'></a>\n        </span>\n    </div>\n    <div class='j_video_select_container video_select_container' >\n        ";
                for (var i = 0; i < menu.length; i++) __p += "\n            <span class='video_select_block j_video_select_block' value=\"" + (null == (__t = menu[i].key) ? "" : __t) + '">\n                ' + (null == (__t = menu[i].value) ? "" : __t) + "\n            </span>\n        ";
                __p += "\n    </div>\n</div>"
            }
            return __p
        },
        Video_Select = function(e, t) {
            return e instanceof Array && (this.menu = e), t && (this.inital = t), this.init(), this.getNodeInstance()
        };
    return Video_Select.prototype = {
        init: function() { this.buildDom(), this.cacheInit(), this.dataInit(), this.eventInit() },
        cacheInit: function() { this.$selectEl = this.$el.find(".j_video_select_dom"), this.$selectVal = this.$el.find(".j_video_select_value"), this.$selectContainer = this.$el.find(".j_video_select_container"), this.$selectRightEl = this.$el.find(".j_video_select_right"), this.$classToggle = this.$el.find(".j_class_toggle") },
        dataInit: function() { this.$selectContainer.val("hide") },
        buildDom: function() {
            var e = videoSelecTemplate({ inital: this.inital, menu: this.menu });
            this.$el = $(e), this.inital && this.inital.key && this.$el.find(".j_video_select_dom").val(this.inital.key)
        },
        eventInit: function() {
            var e = this;
            this.$selectEl.bind("click", function() { "hide" == e.$selectContainer.val() ? e.slideDownAction() : e.slideUpAction() }), this.$selectContainer.on("click", ".j_video_select_block", function(t) { e.selectAction(t) }), $("body").bind("click", function(t) {
                for (var i = ["j_video_select", "j_video_select_dom", "video_select_right", "class_toggle"], s = $(t.target), n = !1, l = 0; l < i.length; l++) s.hasClass(i[l]) && (n = !0);
                !n && e.slideUpAction()
            })
        },
        selectAction: function(e) {
            var t = $(e.target),
                i = t.html(),
                s = t.attr("value");
            this.slideUpAction(), this.set(i, s)
        },
        slideDownAction: function() { this.$selectContainer.val("show"), this.showSelector(), this.$selectEl.addClass("video_select_dom_no_bottom"), this.$selectRightEl.addClass("video_select_right_no_radius"), this.$classToggle.removeClass("class_down") },
        slideUpAction: function() { this.$selectContainer.val("hide"), this.hideSelector(), this.$selectEl.removeClass("video_select_dom_no_bottom"), this.$selectRightEl.removeClass("video_select_right_no_radius"), this.$classToggle.addClass("class_down") },
        clear: function() { this.set("", "") },
        showSelector: function() { this.$selectContainer.show() },
        hideSelector: function() { this.$selectContainer.hide() },
        show: function() { this.$el.show() },
        hide: function() { this.$el.hide() },
        get: function() {
            return this.$selectEl.val()
        },
        set: function(e, t) {
            var i = this.$selectEl.val();
            this.$selectEl.val(t), this.$selectVal.html(e), i !== t && this.$el.trigger("change", t, e)
        },
        getNodeInstance: function() {
            return this.$el
        },
        getInstance: function() {
            return this
        }
    }, Video_Select
});;
define("common/video_tag/video_tag.js", function(require, exports, module) {
    var template = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<div class="edit-main">\n    <label class="edit-label">视频标签</label>\n    <div class=\'edit-input tag-input-center j-tag-input-center\'>\n        ';
                for (var i = 0; i < tags.length; i++) __p += "\n            <span class='tag j-tag'> \n                <a class='tag-content j-tag-content' value='" + (null == (__t = tags[i]) ? "" : __t) + "'> " + (null == (__t = tags[i]) ? "" : __t) + " </a>\n                <a class='tag-close j-tag-close'></a>\n            </span>\n        ";
                __p += "\n        <input type='hidden' class='tag-value j-tag-value' value='" + (null == (__t = tags.join(";")) ? "" : __t) + "'/>\n    </div>\n</div>"
            }
            return __p
        },
        Video_Tag = function(t) { this.setting = {}, t ? t instanceof Array ? this.setting.inital = t : -1 != t.indexOf(";") && (this.setting.inital = t.split(";")) : this.setting.inital = [], this.init() };
    return Video_Tag.prototype = {
        init: function() { this.dataInit(), this.buildDom(), this.cacheInit(), this.eventInit() },
        dataInit: function() {},
        cacheInit: function() { this.$input = this.$el.find(".j-tag-input-center") },
        buildDom: function() {
            var t = template({ tags: this.setting.inital });
            this.$el = $(t)
        },
        eventInit: function() { this.clickTextEvent(), this.keyBoardEvent(), this.clickOtherEvent(), this.deleteTagEvent() },
        keyBoardEvent: function() {
            var t, e, n = this;
            n.$input.on("keydown", ".j-tag-content", function(a) {
                if (t = $(a.target), 13 == a.keyCode || 32 == a.keyCode || 9 == a.keyCode) {
                    if ("" == t.html()) return void t.closest(".j-tag").remove();
                    n.switchTagStatus(t.closest(".j-tag"), !1), 9 == a.keyCode && (n.checkAndDelete(), n.$input.find(".j-tag-content").length < 5 && (e = n.addTag(), n.switchTagStatus(e, !0))), a.preventDefault(), a.stopPropagation()
                }
            }), n.$input.on("paste", ".j-tag-content", function(t) {
                t.preventDefault();
                var e = null;
                if (e = window.clipboardData && clipboardData.setData ? window.clipboardData.getData("text") : (t.originalEvent || t).clipboardData.getData("text/plain") || prompt("在这里输入文本"), document.body.createTextRange) {
                    if (document.selection) textRange = document.selection.createRange();
                    else if (window.getSelection) {
                        sel = window.getSelection();
                        var n = sel.getRangeAt(0),
                            a = document.createElement("span");
                        a.innerHTML = "&#FEFF;", n.deleteContents(), n.insertNode(a), textRange = document.body.createTextRange(), textRange.moveToElementText(a), a.parentNode.removeChild(a)
                    }
                    textRange.text = e, textRange.collapse(!1), textRange.select()
                } else document.execCommand("insertText", !1, e)
            }), n.$input.on("keydown", ".j-tag-content", function(e) {
                return t = $(e.target), t.html().length > 10 && 8 != e.keyCode ? !1 : void 0
            })
        },
        clickTextEvent: function() {
            var t, e, n = this;
            n.$el.on("click", ".j-tag-input-center", function(a) { e = $(a.target), e.hasClass("j-tag-input-center") ? (n.checkAndDelete(), n.$input.find(".j-tag-content").length < 5 && (t = n.addTag(), n.switchTagStatus(t, !0))) : e.hasClass("j-tag") ? n.switchTagStatus(e, !0) : e.hasClass("j-tag-content") && (e.attr("contenteditable", "true"), e.focus()) })
        },
        clickOtherEvent: function() {
            var t = this;
            $("body").on("click", function(e) {
                for (var n = ["j-tag", "j-tag-input-center", "j-tag-close", "j-tag-content"], a = !0, i = $(e.target), o = (t.$input.find(".j-tag-content"), 0); o < n.length; o++) i.hasClass(n[o]) && (a = !1);
                a && t.checkAndDelete()
            })
        },
        deleteTagEvent: function() {
            var t, e = this;
            e.$el.on("click", ".j-tag-input-center", function(e) { t = $(e.target), t.hasClass("tag-close") && ($tag = t.closest(".j-tag"), $tag.remove()) })
        },
        getCurrentAllTags: function() {
            for (var t = this.$input.find(".j-tag-content"), e = [], n = 0; n < t.length; n++) e.push(t.eq(n).attr("value"));
            return e
        },
        computeValue: function(t) {
            for (var e = 0, n = this.$input.find(".j-tag-content"), a = 0; a < n.length; a++) t == $.trim(n.eq(a).attr("value")) && (e += 1);
            return e
        },
        switchTagStatus: function(t, e) {
            var n = t.find(".j-tag-content"),
                a = this.getCurrentAllTags(),
                i = $.trim(n.html()),
                o = this.computeValue(i);
            e ? (n.attr("contenteditable", "true"), n.focus()) : -1 == a.indexOf(i) || 2 > o ? (n.removeAttr("contenteditable"), i.length > 10 && (i = i.substr(0, 10)), n.text(i), n.attr("value", i)) : t.remove()
        },
        checkAndDelete: function() {
            for (var t, e = this.$el.find(".j-tag-content"), n = 0; n < e.length; n++) "" == e.eq(n).html() ? e.eq(n).closest(".j-tag").remove() : (e.eq(n).removeAttr("contenteditable"), t = $.trim(e.eq(n).html()), t.length > 10 && (t = t.substr(0, 10)), e.eq(n).html(t), e.eq(n).attr("value", t))
        },
        addTag: function() {
            var t, e = this.$input;
            return t = $('<span class="tag j-tag"><a class="tag-content j-tag-content"></a><a class="tag-close"></a></span>'), e.append(t), t.focus(), t
        },
        removeTag: function(t) { t.remove() },
        getNode: function() {
            return this.$el
        },
        addTagByText: function(t) {
            var e = this.addTag();
            return e.find(".j-tag-content").text(t), this.switchTagStatus(e, !1), this
        },
        removeTagByText: function(t) {
            return this.removeTag(this.$el.find('.j-tag:contains("' + t + '")')), this
        }
    }, Video_Tag
});;
define("common/videoposter/uploader.js", function(e, o, p) {
    var t = "/tools/upload_picture/?pgc_watermark=0",
        i = "upfile",
        r = { url: t, paramName: i, maxFileSize: "5MB", acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i, type: "post", error: a },
        a = function(e, o) {};
    p.exports = function(e, o) {
        var p = $.extend({}, r);
        "object" == typeof o && $.extend(p, o), e.fileupload(p)
    }
});;
define("common/videoposter/videoposter.js", function(require, exports, module) {
    var systemTemplate = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="modal videoposter-modal" data-backdrop="static">\n	<div class="modal-dialog-wrapper">\n		<div class="modal-dialog tui-dialog">\n			<div class="modal-content">\n				<div class="modal-body">\n					<div class="videoposter-header">\n						<div class="video_poster_nav j_video_poster_nav" data-index="0" ga="视频封面-上传封面点击事件">上传封面</div>\n						<div class="video_poster_nav j_video_poster_nav active" data-index="1" ga="视频封面-系统封面点击事件">系统封面</div>\n					</div>\n					<div class="videoposter-main">\n						<ul class="videoposter-items" data-node="con"></ul>\n						<ul class="videoposter-items" data-node="tip" style="display: none">\n                            <li class="videoposter-tip">\n                                <p class="tip"></p>\n                                <div class="button" ga="视频封面-无系统封面 上传图片">\n                                    立即上传封面<input type="file" accept="image/jpg,image/jpeg,image/png" class="video-upload-zone video-poster-file"/>\n                                </div>\n                                <p>上传优质的封面将获取更多的播放量</p>\n                            </li>\n                        </ul>\n					</div>\n					<div class="videoposter-footer">\n						<button class="new-btn submit" data-node="ok" ga="视频封面-系统封面点击确认按钮">确认</button>\n						<button class="new-btn cancel" data-node="cancel" ga="视频封面-系统封面点击取消按钮">取消</button>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n';
            return __p
        },
        uploaderTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<div class="modal video-uploader-modal" data-backdrop="static">\n	<div class="modal-dialog-wrapper">\n		<div class="modal-dialog tui-dialog">\n			<div class="modal-content">\n				<div class="modal-body">\n					<div class="tui-dialog-header videoposter-header">\n						<div class="tui-dialog-close" data-close><span class="tui-dialog-close-x"></span></div>\n						<div class="video_poster_nav j_video_poster_nav active" ga="视频封面-上传封面点击事件" data-index="0">上传封面</div>\n						<div class="video_poster_nav j_video_poster_nav" data-index="1" ga="视频封面-系统封面点击事件">系统封面</div>\n					</div>\n					<div class="video-uploader-main j_video_cover_main"> \n						<div class= \'video-uploder-wrap  j_video_upload\'>\n                            <div class="video-uploader-upload-background"></div>\n							<div class=\'video-uploader-upload-bottom\'>\n								<div class=\'button\'>\n									<span class=\'j_upload video-upload-zone\'>选择图片</span>\n                                    <input type="file" accept="image/jpg,image/jpeg,image/png" class="video-poster-file"/>\n								</div>\n							</div>\n							<div class=\'video-uploader-upload-note\'>\n								<span>上传图片不超过5MB</span>\n								<div>提示：为了获得更好的推荐量和点击量，请尽可能使用大尺寸图片，建议分辨率：1280×720（最小宽度为 640 像素）。请务必上传和视频内容相关、有引导价值的图片，如有作弊情况将被封号处理。</div>\n							</div>\n						</div>\n						<div class="video-error  j_video_error">\n						</div>\n						<div class="video-modify  j_video_modify">\n                            <div class="sclearfix video-modify-wrap">\n                                <div class="video-modify-buttons">\n                                    ';
                for (var item in effects) __p += '\n                                        <figure data-effect="' + (null == (__t = item) ? "" : _.escape(__t)) + '" ga="^封面 美化 ' + (null == (__t = effects[item]) ? "" : _.escape(__t)) + '"><img/><div class="iconfont hover">&#xe638;</div></figure>\n                                    ';
                __p += '\n                                </div>\n                                <div class="video-modify-cropper">\n                                    <img src="">\n                                </div>\n                                <div class="video-modify-preview">\n                                    <canvas id="video-moidfy-preview" width="200" height="112"></canvas>\n                                    <div class="reupload" ga="^封面 重新上传">重新上传<input accept="image/jpeg,image/png,image/jpg" type="file" class="video-poster-file"/></div>\n                                </div>\n                            </div>\n                            <div class="videoposter-footer video-modify-save">\n                                <button class="new-btn submit save-btn">保存</span>\n                            </div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'
            }
            return __p
        },
        videoIntance = null,
        poster_fetching = '<li class="videoposter-loading"></li>',
        list_tmpl = '<li class="videoposter-item" data-node="item" data-index="{index}"><div class="videoposter-item-wrap"><img class="videoposter-image" src="//p3.pstatp.com/large/{src}"><div class="videoposter-image-hover"></div></div>',
        URL = window.URL || window.webkitURL,
        logger = function() {
            return layoutLogger ? layoutLogger : { error: $.noop, notice: $.noop, warming: $.noop }
        },
        effects = { "": "原图", softenFace: "美肤", softEnhancement: "自然增强", strongEnhancement: "亮白增强", warmAutumn: "暖秋", lomo: "lomo", purpleStyle: "紫色", soften: "柔焦" },
        VideoPoster = function() { this._init() };
    VideoPoster.prototype = {
        _init: function() {
            var e = 0 == document.location.href.indexOf("https"),
                t = -1 != document.location.href.indexOf("/core/article/index/");
            this._hasSystemRender = !1, this._hasUploaderRender = !1, this._systemDes = null, this.$systemEl = $(systemTemplate({ isHttps: e, isListPage: t })), this.$systemTip = this.$systemEl.find('[data-node="tip"]'), this.$systemCon = this.$systemEl.find('[data-node="con"]'), this.$systemOk = this.$systemEl.find('[data-node="ok"]'), this.$systemCancel = this.$systemEl.find('[data-node="cancel"]'), this.systemCoverList = null, this._systemEventInit(), this._curTab = "system", this.$uploaderEl = $(uploaderTemplate({ effects: effects })), this.$uploaderUploadEl = this.$uploaderEl.find(".j_video_upload"), this.$uploaderLoadingEl = this.$uploaderEl.find(".j_video_loading"), this.$uploaderFailEl = this.$uploaderEl.find(".j_video_error"), this.$uploaderModifyEl = this.$uploaderEl.find(".j_video_modify"), this.$uploaderInnerProcess = this.$uploaderEl.find(".j_video_loading_inner"), this.$uploaderCancel = this.$uploaderEl.find(".j_video-cancel"), this.$uploaderNote = this.$uploaderEl.find(".j_video_loading_note"), this.$saveCropperBtn = this.$uploaderModifyEl.find(".save-btn"), this._uploaderEventInit(), this.uploderImageUrl = null, this.uploaderImageUri = null, this.uploadStatus = !0, this.coverData = null, this.hasVideoUploaded = !1, this.curEffect = !1, this.curCropperImage = null, this.scaleCanvas = document.createElement("canvas"), this.previewCanvas = document.createElement("canvas"), this.previewEl = this.$uploaderModifyEl.find("#video-moidfy-preview")[0]
        },
        show: function(e, t) {
            return this._systemDes = e, this._hasSystemRender || this._render("system"), t ? this.$uploaderEl.find(".j_video_poster_nav").eq(1).hide() : this.$uploaderEl.find(".j_video_poster_nav").eq(1).css("inline-block"), this._uploaderShow(), this
        },
        hide: function() { this._systemHide(), this._uploaderHide() },
        updateCover: function() { this.hasVideoUploaded = !0, this.coverData && this._uploaderSaveCallback(this.coverData) },
        clearData: function() { this.hasVideoUploaded = !1, delete this.coverData },
        _render: function(e, t) { "system" == e ? this._systemRender(t) : "uploader" == e && this._uploaderDialogRender(t) },
        _systemRender: function() {
            var e = "2视频封面-" + this._systemDes.source + "-确认",
                t = "2视频封面-" + this._systemDes.source + "-取消";
            this.$systemEl.appendTo("body"), this._hasSystemRender = !0, this.$systemOk.attr("ga", e), this.$systemCancel.attr("ga", t)
        },
        _systemShow: function(e) { this.$systemCon.data("processing", !1).html(poster_fetching).show(), this.$systemTip.hide(), this.$systemEl.modal(), this._getSystemVideoCoverList(e) },
        _getSystemVideoCoverList: function(e) {
            var t = "视频封面图数据获取失败",
                i = this,
                a = e.id,
                s = e.type;
            $.ajax({ type: "GET", url: "/video/video_system_thumb/", data: 1 == s ? { item_id: a } : { vid: a }, dataType: "json" }).done(function(e) {
                if ("success" == e.message) {
                    var a = "",
                        s = e.data;
                    if (0 == s.length) return void i._ajaxFeedback(t, !1);
                    i.systemCoverList = s;
                    for (var o = 0; o < s.length; o++) {
                        var d = list_tmpl.replace("{index}", o);
                        a += d.replace("{src}", s[o].uri)
                    }
                    i.$systemCon.html(a), logger().notice("系统封面上传成功"), ga("send", "event", "click", "PC " + $("body").attr("gap").replace("^", "") + " 视频封面-系统点击事件(有系统封面)")
                } else i._ajaxFeedback(t, !1), logger().error("系统封面上传失败", $.getNginxLogId(arguments))
            }).fail(function() { logger().error("系统封面上传失败，接口错误了", $.getNginxLogId(arguments)), i._ajaxFeedback(t, !1) })
        },
        _ajaxFeedback: function(e, t) {
            var i = this;
            this.$systemTip.find(".tip").text(e).show(), this.$systemTip.show(), this.$systemCon.hide(), t && i.hide(), ga("send", "event", "click", "PC " + $("body").attr("gap").replace("^", "") + " 视频封面-系统点击事件(无系统封面)")
        },
        _systemHide: function() { this.$systemEl.modal("hide") },
        _systemEventInit: function() { this.$systemEl.on("click", '[data-node="cancel"]', $.proxy(this._systemButtonCancel, this)), this.$systemEl.on("click", '[data-node="ok"]', $.proxy(this._systemButtonConfirm, this)), this.$systemEl.on("click", '[data-node="item"]', $.proxy(this._systemItemSelected, this)), this.$systemEl.on("click", ".j_video_poster_nav", $.proxy(this._swichTab, this)) },
        _systemItemSelected: function(e) {
            var t = $(e.target),
                i = t.parents("li");
            $(".videoposter-item").each(function(e, t) {
                var a = $(t);
                a.is(i) ? a.toggleClass("selected") : a.removeClass("selected")
            })
        },
        _systemButtonConfirm: function() {
            var e = this.$systemCon.find(".selected");
            if (0 != e.length) {
                var t = e.data("index"),
                    i = this.systemCoverList[t];
                if (i && !this.$systemCon.data("processing")) {
                    this.$systemCon.data("processing", !0);
                    var a = this,
                        s = a._systemDes.id,
                        o = a._systemDes.itemId,
                        d = i.uri,
                        n = a._systemDes.success,
                        r = "//p3.pstatp.com/large/" + i.uri,
                        l = { vid: a._systemDes.fromList ? "" : s, thumb_type: 1, thumb_url: d, item_id: o, src_thumb_url: i.src_uri },
                        p = "视频封面更新失败";
                    return a._systemDes.fromList ? void $.ajax({ type: "POST", url: "/video/update_video_thumb/", data: l, dataType: "json" }).done(function(e) {
                        if ("success" == e.message) {
                            var t = e.data || {},
                                o = "视频封面更新成功";
                            a._ajaxFeedback(o, !0);
                            var n = a._systemDes.success;
                            "function" == typeof n && n(s, r, d, t.item_id, i.src_uri)
                        } else logger().error("系统封面更新失败", $.getNginxLogId(arguments)), a._ajaxFeedback(p, !0), alert(e.reason || p)
                    }).fail(function() { logger().error("系统封面更新失败，接口错误", $.getNginxLogId(arguments)), a._ajaxFeedback(p, !0), alert(p) }).always(function() { a.$systemCon.data("processing", !1) }) : ("function" == typeof n && n(s, r, d, o, i.src_uri), a.hide())
                }
            }
        },
        _systemButtonCancel: function() { this._systemHide() },
        _swichTab: function(e) {
            var t = $(e.target),
                i = t.data("index");
            t.hasClass("active") || (0 == i ? (this._systemHide(), this._uploaderShow()) : (this._systemShow(this._systemDes), this._uploaderHide()))
        },
        _uploaderShow: function() { this._hasUploaderRender || this._uploaderDialogRender(), this.$uploaderEl.modal(), this._uploaderUploadShow() },
        _uploaderHide: function() { this.$uploaderEl.modal("hide"), this.uploderImageUrl && URL.revokeObjectURL(this.uploderImageUrl), this.curEffect = "", this.$uploaderModifyEl.find(".video-modify-buttons .active").removeClass("active") },
        _uploaderDialogRender: function() {
            var e = this;
            this.$uploaderEl.appendTo("body"), this._hasUploaderRender = !0, window.FormData && URL || this.$uploaderEl.find(".j_video_upload").html('<div><div class="video-uploader-upload-background"></div><div class="video-uploader-upload-note">您的浏览器版本过低 暂时不支持自定义封面</div>'), e._uploaderBindUploadEvent()
        },
        _uploaderEventInit: function() {
            var e = this;
            this.$uploaderEl.on("click", "[data-effect]", function(t) {
                var i = $(t.currentTarget);
                e.curEffect = i.data("effect"), e.$uploaderModifyEl.find(".video-modify-buttons .active").removeClass("active"), i.addClass("active"), e.previewEffect()
            }), this.$uploaderEl.on("click", ".j_video-cancel", $.proxy(this._uploaderCancelUpload, this)), this.$uploaderEl.on("click", ".j_video_poster_nav", $.proxy(this._swichTab, this)), this.$uploaderEl.on("click", "[data-close]", $.proxy(this._uploaderHide, this)), this.$saveCropperBtn.on("click", $.proxy(this.saveCropper, this))
        },
        _uploaderBindUploadEvent: function() {
            function e(e) {
                i.uploderImageUrl && URL.revokeObjectURL(i.uploderImageUrl);
                var t = $(e.target);
                i.curEffect = "", i.uploderImageUrl = URL.createObjectURL(e.target.files[0]), i._uploaderModifyShow(), t.prop("value", ""), t.replaceWith(t.clone(!0))
            }
            var t = this.$uploaderEl,
                i = this,
                a = t.find(".video-poster-file");
            a.on("change", function(t) { e(t) }), this.$systemTip.find(".video-upload-zone").on("change", function(t) { i.$uploaderEl.modal(), e(t) })
        },
        _uploaderCancelUpload: function() { this.uploadStatus = !1, this._uploaderUploadShow() },
        _uploaderUploadShow: function() { this._uploaderLoadingFormat(), this.$uploaderLoadingEl.hide(), this.$uploaderFailEl.hide(), this.$uploaderModifyEl.hide(), this.$uploaderUploadEl.removeClass("hiding_uploader") },
        _uploaderLoadingShow: function(e, t) { this.$uploaderUploadEl.addClass("hiding_uploader"), this.$uploaderLoadingEl.show(), this.$uploaderFailEl.hide(), this.$uploaderModifyEl.hide(), e || (e = "上传图片中"), void 0 == t && (t = 0), this.$uploaderNote.html(e), this.$uploaderInnerProcess.css({ width: t + "%" }) },
        _uploaderLoadingFormat: function() { this._uploaderLoadingShow() },
        _uploaderFailShow: function() { alert("图片上传失败") },
        _uploaderModifyShow: function() { this.$uploaderLoadingEl.hide(), this.$uploaderUploadEl.addClass("hiding_uploader"), this.$uploaderFailEl.hide(), this.cropper(this.uploderImageUrl), this.$uploaderModifyEl.show(), this.$uploaderInnerProcess.css({ width: "0%" }) },
        saveCropper: function() {
            var e = this.$saveCropperBtn;
            if (!e.data("saving")) {
                e.data("saveing", !0), e.text("保存中...");
                var t = this.curCropperImage,
                    i = this.previewCanvas.getContext("2d");
                this.previewCanvas.width = t.width, this.previewCanvas.height = t.height, i.drawImage(t, 0, 0);
                var a = this.curEffect;
                a && (imageData = ImageProcess.effects[a](i, 0, 0, t.width, t.height), i.putImageData(imageData, 0, 0));
                var s = this;
                this.previewCanvas.toBlob(function(t) {
                    var i = new FormData;
                    i.append("upfile", t), $.ajax({ type: "post", url: "/tools/upload_picture/?pgc_watermark=0", data: i, contentType: !1, processData: !1 }).then(function(e) { s.coverData = e, s._saveCallBackWithUpdate(e) }).always(function() { e.data("saveing", !1), e.text("保存") })
                })
            }
        },
        orientation: function(e, t, i, a) { 90 == t && (e.rotate(t / 180 * Math.PI), e.translate(0, -a)) },
        dumpEffects: function() {
            var e = this._cropper.cropper("getData");
            e.x = Math.floor(e.x), e.y = Math.floor(e.y), e.width = Math.floor(e.width), e.height = Math.floor(e.height);
            var t = this.scaleCanvas.getContext("2d"),
                i = this.previewCanvas.getContext("2d"),
                a = this.$uploaderModifyEl.find(".video-modify-cropper img")[0],
                s = this,
                o = 70,
                d = this.curCropperImage = new Image;
            this.previewCanvas.width = a.naturalWidth, this.previewCanvas.height = a.naturalHeight, this.scaleCanvas.width = this.scaleCanvas.height = o, i.save(), this.orientation(i, e.rotate, a.naturalWidth, a.naturalHeight), i.drawImage(a, 0, 0), i.restore();
            var n = i.getImageData(e.x, e.y, e.width, e.height);
            this.previewCanvas.width = e.width, this.previewCanvas.height = e.height, i.putImageData(n, 0, 0), d.src = this.previewCanvas.toDataURL(), d.onload = function() {
                t.drawImage(d, 0, 0, e.height, e.height, 0, 0, o, o), i.canvas.height = i.canvas.width = o, Object.keys(effects).forEach(function(e) {
                    var a;
                    a = e ? ImageProcess.effects[e](t, 0, 0, o, o) : t.getImageData(0, 0, o, o), i.putImageData(a, 0, 0);
                    var d = i.canvas.toDataURL();
                    s.$uploaderModifyEl.find('.video-modify-buttons [data-effect="' + e + '"] img').attr("src", d)
                }), s.previewEffect()
            }
        },
        cropper: function(e) {
            if (this._cropper) return void this._cropper.cropper("replace", e);
            var t = this;
            this._cropper = this.$uploaderModifyEl.find(".video-modify-cropper img").attr("src", e).cropper({ cropBoxResizable: !0, viewMode: 1, aspectRatio: 16 / 9, autoCropArea: 1, guides: !1, zoomable: !1, built: function() { t.dumpEffects() }, cropend: function() { t.dumpEffects() } })
        },
        previewEffect: function() {
            var e = this.previewEl.getContext("2d"),
                t = 200,
                i = 112;
            e.canvas.width = t, e.canvas.height = i, e.drawImage(this.curCropperImage, 0, 0, this.curCropperImage.naturalWidth, this.curCropperImage.naturalHeight, 0, 0, t, i), this.curEffect && e.putImageData(ImageProcess.effects[this.curEffect](e, 0, 0, t, i), 0, 0)
        },
        _getModifyType: function(e, t) {
            this._systemDes.id || t();
            var i, a = { api: "meta", ref_id: this._systemDes.id },
                s = { 30: "transcoding", 10: "done" },
                o = this;
            $.ajax({ type: "POST", url: "/video/video_api/", data: { json_data: JSON.stringify(a) }, dataType: "json" }).done(function(t) { i = JSON.parse(t.data), 0 == i.code && i.data ? (o._systemDes.video_status = s[i.data.status], e()) : e() }).fail(function() { t() })
        },
        _uploaderSaveCallback: function(e) {
            "string" == typeof e && (e = JSON.parse(e));
            var t = this;
            t._getModifyType(function() { t._saveCallBackWithUpdate(e) }, function() { t._saveCallBackWithUpdate(e) })
        },
        _saveCallBackWithUpdate: function(e) {
            var t = this,
                i = this._systemDes.id,
                a = e.original,
                s = "视频封面更新失败",
                o = this._systemDes.itemId;
            updateData = { vid: this._systemDes.fromList ? "" : i, thumb_type: 2, thumb_url: a, modify_type: o ? 2 : 1, item_id: o };
            var d = this._systemDes.success;
            return t._systemDes.fromList ? void $.ajax({ type: "POST", url: "/video/update_video_thumb/", data: updateData, dataType: "json" }).done(function(i) { "success" == i.message ? (logger().notice("视频封面更新成功"), t._uploadCallback(e)) : (logger().error("自定义封面更新失败", $.getNginxLogId(arguments)), alert(s), t._ajaxFeedback(s, !0)) }).fail(function() { alert(s), logger().error("自定义封面更新失败，接口出错", $.getNginxLogId(arguments)), t._ajaxFeedback(s, !0) }) : ("function" == typeof d && d(i, e.url, a, o), t.hide())
        },
        _uploadCallback: function(e) {
            var t = this.coverData;
            if (t) {
                "string" == typeof t && (t = JSON.parse(t));
                var i = t.url,
                    a = this._systemDes.id,
                    s = this._systemDes.success,
                    o = t.original;
                "function" == typeof s && s(a, i, o, e.item_id), this._uploaderUploadShow(), this.hide()
            }
        }
    }, module.exports = function() {
        return videoIntance || (videoIntance = new VideoPoster), videoIntance
    }
});;
define("pagelet/signform/spec/website.js", function(require, exports, module) {
    var Vali = require("common/vali/vali.js"),
        websiteTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += '">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td><input type="text" class="signform_input" name="' + (null == (__t = name) ? "" : _.escape(__t)) + '"></td>\n</tr>\n<tr class="signform_sub">\n    <td></td>\n    <td>\n        <div class="">\n            <div class="form1_checkbox">\n                同意接入该网站（域名）下全部内容\n            </div>\n        </div>\n        <div class="form1_msg jmsg"></div>\n        <div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + "</div>\n    </td>\n</tr>";
            return __p
        };
    return function(e) {
        e = $.extend({
            tpl: websiteTpl,
            label: "网站",
            name: "website",
            require: !0,
            require_check: !0,
            func: Vali.returnWrap(function(n) {
                var r = Vali.url(n);
                if (r) return r;
                var i = t.checkbox();
                return window.website_grant_auth_status = i ? 1 : 0, e.require_check && !i ? "请同意接入该网站(域名)下全部内容" : void 0
            })
        }, e);
        var n = Vali.simple(e),
            t = n.jbox.find(".form1_checkbox").change(function() { n.jvali.trigger("change") });
        return t.checkbox(), e.noconfirm && (t.checkbox(!0), t.parent().hide()), n
    }
});;
define("pagelet/signform/spec/media_name.js", function(e) {
    var a = e("common/vali/vali.js");
    return function(e) {
        return function(s) {
            var r = e.getEle("input", $.extend({ label: "头条号名称", name: "media_name", func: a.mediaNameId }, s));
            return r.jvali.data("vali_effect", function(e) {
                var a = this.data("vali_jmsg");
                e ? (this.addClass("error"), a.removeClass("sgreen").addClass("sred").text(e)) : (this.removeClass("error"), a.addClass("sgreen").removeClass("sred").text("有效的头条号"))
            }), r
        }
    }
});;
define("pagelet/signform/spec/images.js", function(require, exports, module) {
    require("common/util/labelupload.js");
    var Stip = require("common/stip/stip.js"),
        tpl = require("pagelet/signform/spec/images.whe"),
        itemTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="signform_images_item">\n    <img src="' + (null == (__t = obj) ? "" : _.escape(__t)) + '" class="signform_images_item_img">\n    <div class="signform_images_item_del" data-node="del"></div>\n</div>';
            return __p
        };
    return function(e) {
        return function(i) {
            function n(e) {
                var i = $(itemTpl(e)),
                    n = i.nodes();
                return n.del.click(function() { i.trigger("item_del") }), i
            }

            function t() { r.toggle(o.box.find(".signform_images_item").length !== i.max) }
            i = $.extend({ name: "images", max: 1 }, i);
            var a = $(tpl(i)),
                o = a.nodes(),
                r = o.btn;
            a.data({
                vali_require: i.require,
                vali_jmsg: o.msg,
                vali_name: i.name,
                vali_func: function(e) {
                    var i = o.box.find(".signform_images_item"),
                        n = $.map(i, function(e) {
                            return $(e).data("value")
                        });
                    e(null, n)
                }
            }), r.labelUpload({
                name: "photo",
                dataType: "json",
                action: "/upload_photo/?type=json",
                accept: "image/*",
                onstart: function() { r.addClass("loading") },
                oncomplete: function(e, i) {
                    return r.removeClass("loading"), e ? Stip.alert("上传失败") : (o.box.append(n(i.web_url).data("value", i)), void t())
                }
            }), r.click(function(e) {
                return r.hasClass("loading") ? void e.preventDefault() : void 0
            }), o.box.on("item_del", function(e) { $(e.target).remove(), t() });
            var l;
            return i.tr ? (row = e.getEle("row", { require: i.require, label: i.tr }), row.jbox.find("[data-node=dd]").append(a), l = { jbox: row.jbox, jvali: a }) : l = { jbox: a, jvali: a }, l
        }
    }
});;
define("pagelet/signform/spec/checkbox.js", function(e) {
    var c = e("pagelet/signform/spec/checkbox.whe"),
        n = e("common/vali/vali.js");
    return function(e) {
        e = n.mixin({
            label: "",
            name: "checkbox",
            effect: $.noop,
            require: !1,
            func: function(e) {
                var c = o.checkbox() ? 1 : null;
                e(null, c)
            }
        }, e);
        var o = $(c(e));
        return o.checkbox(), o.data(e), { jbox: o, jvali: o }
    }
});;
define("pagelet/signform/spec/row.js", function(e) {
    var n = e("pagelet/signform/spec/row.whe"),
        o = e("common/vali/vali.js");
    return function(e) {
        e = o.mixin({ effect: $.noop }, e);
        var r = $(n(e));
        r.data(e);
        var a = r.nodes();
        return { jbox: r, jvali: r, jdd: a.dd }
    }
});;
define("pagelet/signform/spec/files.js", function(require, exports, module) {
    require("common/util/labelupload.js");
    var Stip = require("common/stip/stip.js"),
        tpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="signform_files">\n    <div class="signform_files_label">' + (null == (__t = obj.label) ? "" : _.escape(__t)) + '</div>\n    <div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + '</div>\n    <div class="signform_files_box" data-node="box">\n    </div>\n    <label class="widget_btn_cancel snoshadow signform_files_btn" data-node="btn"></label>\n    <div class="signform_msg" data-node="msg"></div>\n</div>';
            return __p
        },
        itemTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="signform_files_item">\n    <span class="signform_files_item_text">' + (null == (__t = obj) ? "" : _.escape(__t)) + '</span>\n    <span class="signform_files_item_del slink" data-node="del">删除</span>\n</div>';
            return __p
        };
    return function(e) {
        function n(e) {
            var n = $(itemTpl(e)),
                i = n.nodes();
            return i.del.click(function() { n.trigger("item_del") }), n
        }

        function i() { s.toggle(t.box.find(".signform_files_item").length !== e.max) }
        e = $.extend({ name: "files", max: 1 }, e);
        var a = $(tpl(e)),
            t = a.nodes(),
            s = t.btn;
        return a.data({
            vali_name: e.name,
            vali_require: e.require,
            vali_jmsg: t.msg,
            vali_func: function(e) {
                var n = t.box.find(".signform_files_item"),
                    i = $.map(n, function(e) {
                        return $(e).data("value")
                    });
                e(null, i)
            }
        }), s.labelUpload({
            name: "file",
            dataType: "json",
            action: "/api/upload_file/",
            accept: "*",
            onstart: function() { s.addClass("loading") },
            oncomplete: function(e, a, l) {
                return s.removeClass("loading"), e ? e = "上传失败" : "success" !== a.message && (e = a.reason), e ? Stip.alert(e) : (t.box.append(n(l.fileName).data("value", a.sids[0])), void i())
            }
        }), s.click(function(e) {
            return s.hasClass("loading") ? void e.preventDefault() : void 0
        }), t.box.on("item_del", function(e) { $(e.target).remove(), i() }), { jbox: a, jvali: a }
    }
});;
define("pagelet/signform/spec/id.js", function(require, exports, module) {
    var Vali = require("common/vali/vali.js"),
        Util = require("common/util/util.js"),
        tpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += '">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td>\n        <div data-node="box">\n            \n        </div>\n    </td>\n</tr>\n<tr class="signform_sub">\n    <td></td>\n    <td>\n        <div class="widget_btn_cancel snoshadow signform_id_add" data-node="btn">' + (null == (__t = btn) ? "" : _.escape(__t)) + '</div>\n        <div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + "</div>\n    </td>\n</tr>";
            return __p
        },
        itemTpl = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="signform_id_item">\n    <span class="slink signform_id_item_del" data-node="del">删除</span>\n    <div class="form1_msg signform_id_item_msg" data-node="msg"></div>\n</div>';
            return __p
        };
    return function(t) {
        function i(t) {
            var i = $(itemTpl());
            i.prepend(t);
            var n = i.nodes();
            return t.hasClass("signform_article_url") ? (t.find(".signform_input.left").data({ vali_require: !0, vali_name: "data_left", vali_jmsg: n.msg, vali_func: t.data("vali_func") }), t.find(".signform_input.right").data({ vali_require: !1, vali_name: "data_right", vali_jmsg: n.msg, vali_func: t.data("vali_func") })) : t.data("vali_jmsg", n.msg), n.del.click(function() { i.trigger("item_del") }), { jbox: i, jvali: t }
        }
        var n = {};
        return n.author = function() {
                return t.getEle("media_name", { name: "data" }).jvali
            }, n.user = function() {
                var i = t.getEle("input", {
                    name: "data",
                    require: !0,
                    func: function(t) {
                        var i = $.trim(this.val()),
                            n = Vali.range(i, 2, 10, !0);
                        return n ? t(n) : void Util.ajax("/infringement/get_media_id/", { name: i }, function(n, e, a) { t(null, { text: i, value: 0 === n ? a.media_id : 0 }) })
                    }
                });
                return i.jvali
            }, n.text = function() {
                return t.getEle("input", { name: "data" }).jvali
            }, n.url = function() {
                return t.getEle("input", {
                    name: "data",
                    func: function(t) {
                        var i = $(this).val().trim(),
                            n = Vali.url(i);
                        n ? t(n) : t(null, { value: "0", text: i })
                    }
                }).jvali
            }, n.article2 = function() {
                return $('<input type="text" class="signform_input">').data({
                    vali_require: !0,
                    vali_name: "data",
                    vali_func: function(t) {
                        var i = $.trim(this.val());
                        return (i = i.replace(/^https?:\/\//, "")) ? Vali.url(i) ? t("请输入正确的文章链接") : void Util.ajax("/infringement/get_article_item_id/", { url: i }, function(n, e, a) { 0 == n ? t(null, { text: i, value: a.article_id }) : t(e) }) : t("请输入文章链接")
                    }
                })
            }, n.article_url = function() {
                var t = '<div class="signform_article_url"><input type="text" class="signform_input short left"><div class="signform_url_divider"></div><input type="text" class="signform_input short right" placeholder="对应的原创首发链接"></div>';
                return $(t).data({
                    vali_name: "data",
                    vali_func: function(t) {
                        var i = $.trim(this.val()).replace(/^https?:\/\//, "");
                        if ($(this).hasClass("left")) {
                            if (!i) return t("请输入文章链接");
                            if (Vali.url(i)) return t("请输入正确的文章链接");
                            Util.ajax("/infringement/get_article_item_id/", { url: i }, function(n, e, a) { 0 == n ? t(null, { text: "{left}" + i, value: a.article_id }) : t(e) })
                        } else {
                            if (Vali.url(i)) return t("请输入正确的原创链接");
                            var n = $.trim(this.parent().find(".signform_input.short.left").val());
                            if (n = n.replace(/^https?:\/\//, ""), i == n) return t("您填写的原创链接与原文章链接一致，请核查");
                            t(null, { text: "{right}" + i, value: "0" })
                        }
                    }
                })
            },
            function(t) {
                t = $.extend({ label: "侵权头条号", contentType: "author", name: "ids", require: !0 }, t);
                var e, a = $(tpl(t)),
                    r = a.nodes(),
                    l = r.btn;
                l.click(function() {
                    var e = n[t.contentType]();
                    r.box.append(i(e).jbox), u()
                });
                var u = function() {
                    var i = r.box.find(".signform_input");
                    e = Vali(i);
                    var n = t.max,
                        a = 1;
                    i.length > 0 && $(i[0]).hasClass("short") && (n = 2 * t.max, a = 2), l.toggle(i.length !== n), i.length === a && t.require && r.box.find(".signform_id_item_del").hide()
                };
                r.box.on("item_del", function(t) { $(t.target).remove(), u() });
                var _ = r.box.data({
                    vali_require: t.require,
                    vali_effect: $.noop,
                    vali_name: t.name,
                    vali_func: function(t) {
                        e(function(i, n, e) {
                            t(i, $.map(e, function(t) {
                                return t.value
                            }))
                        })
                    }
                });
                return l.click(), { jbox: a, jvali: _ }
            }
    }
});;
define("pagelet/signform/spec/password2.js", function(n) {
    var a = n("common/vali/vali.js");
    return function(n) {
        return function(e) {
            var t = n.getEle("password", $.extend({ require: "请输入密码", hint: "字母、数字或者英文符号，最短8位。必须包含数字、大小写字母" }, e, {
                    func: function(n) {
                        var a = this.val();
                        return a.length < 8 ? n("密码长度不足8位") : /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(a) ? n() : n("密码必须包含大小写字母、数字或符号")
                    }
                })),
                r = !0;
            t.jvali.change(function() { i.jvali.trigger("change") });
            var i = n.getEle("password", $.extend({}, e, {
                label: "确认密码",
                hint: "请再次输入密码",
                require: null,
                func: a.returnWrap(function(n) {
                    return r ? [null, ""] : n ? t.jvali.val() !== n ? "两次输入密码不一致" : [null, ""] : "请再次输入密码"
                })
            }));
            i.jvali.focus(function() { r = !1 });
            var l = a(t.jvali.add(i.jvali)),
                u = $("<" + t.jbox.prop("tagName").toLowerCase() + ">").hide().data("vali_name", e.name).data("vali_effect", function() {}).data("vali_func", function(n) {
                    r = !1, l(function(a, e, t) {
                        return a ? n(a) : n(null, t[0].value)
                    })
                });
            return { jbox: u.add(t.jbox).add(i.jbox), jvali: u }
        }
    }
});;
define("pagelet/signform/spec/captcha.js", function(require, exports, module) {
    var tmpl = function(obj) {
        {
            var __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div style="display:none">\n    <div class="form1_dt">验证码</div>\n    <div class="form1_dd">\n        <img class="signbasic_captcha_img" data-node="img">\n        <input maxlength="4" type="text" class="signform_input signbasic_captcha_input" data-node="input" name="captcha">\n        <div class="signform_msg" data-node="msg"></div>\n    </div>\n</div>';
        return __p
    };
    return function() {
        var n = {},
            i = $(tmpl()),
            a = i.nodes();
        return a.input.data({ vali_jmsg: a.msg }), a.img.click($.loadWrap(function() { n.onClick() })), n.jbox = i, n.jvali = a.input, n.render = function(n) { a.img._src("data:image/png;base64," + n), i.show() }, n.onClick = $.noop, n
    }
});;
define("pagelet/signform/config.js", function() {
    return { license_uri: { hint: "组织机构代码证信息清晰<br/>最大2M" }, identity_uri: { hint: '请<span class="slink" data-hovertitle-html data-hovertitle="' + Util.e('<img style="width:100%;display:block;" src="https://p1.pstatp.com/origin/6333/2829507413">') + '">参照示例</span>手持身份证件拍摄<br/>身份证上的信息需清晰可见<br/>大小不超过2M' }, avatar_uri: { hint: "要求清晰、健康、代表品牌形象<br/>请勿使用二维码，最大5M，200x200像素" }, name: { hint: "2-10个字，请勿使用含特殊符号或含有明显营销推广意图的媒体名" }, desc: { hint: "10-30个字，要求内容完整通顺，无特殊符号，请勿添加任何联系方式如微博、手机号、QQ" }, notes: { hint: "10~300个字，请提供您本人的专栏、博客或微信公众号等链接，我们会以您提供的文章做为参考依据，审核您申请的帐号。" }, company_name: { hint: "请与组织机构代码证或营业执照名称一致" }, email: {}, qq: { hint: "QQ、微信等" } }
});;
define("pagelet/signform/thumb/thumb.js", function(require, exports, module) {
    function makeUpload(e) {
        e = $.extend({ callback: function(e) { this.data("value", e), this.trigger("change") }, img: "https://p1.pstatp.com/origin/6329/4231483611" }, e);
        var i = $(thumbTpl(e)),
            a = i.find(".jvali"),
            t = i.find(".jimg");
        t._src(e.img);
        var n = i.findAndSelf(".jtrigger");
        return a.data("vali_jmsg", i.find(".jmsg")).data("vali_require", e.require).data("vali_name", e.name).data("vali_func", function(e) {
            var i = a.data("value");
            return e(null, i && i.web_uri)
        }).change(function(i) {
            if (i.target === this) {
                var n, r = a.data("value");
                n = r ? r.web_url : e.img, t._src(n)
            }
        }), n.labelUpload({ name: "photo", dataType: "json", action: "/upload_photo/?type=json", accept: "image/*", onstart: function() { a.addClass("loading"), Util.loadingShow() }, oncomplete: function(i, t) { a.removeClass("loading"), Util.loadingHide(), i || "success" !== t.message ? Stip.alert("上传失败") : e.callback.call(a, t) } }), { jbox: i, jvali: a, jimg: t }
    }
    require("common/util/labelupload.js");
    var Util = require("common/util/util.js"),
        thumbTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += '">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td>\n        <div class="signform_face sclearfix ' + (null == (__t = name) ? "" : _.escape(__t)) + ' jvali">\n            <img class="signform_face_img jimg">\n            <label class="signform_face_btn jtrigger">\n                上传\n            </label>\n            <div class="signform_face_msg jmsg"></div>\n            <div class="signform_face_text">' + (null == (__t = obj.hint) ? "" : __t) + "</div>\n        </div>\n    </td>\n</tr>";
            return __p
        },
        projectConfig = require("pagelet/signform/config.js"),
        Stip = require("common/stip/stip.js"),
        Facecrop = require("common/facecrop/facecrop.js"),
        baseConfig = { image: { name: "image", label: "图片", hint: "不超过2M" }, authorize_uri: { name: "authorize_uri", label: "确认书扫描件", url: "https://s0.pstatp.com/site/pgc/sqzh0720.doc", require: !0 }, license_uri: { name: "license_uri", require: !0, label: "组织机构代码证", hint: "组织机构代码证信息清晰<br/>最大2M" }, identity_uri: { name: "identity_uri", img: "https://p1.pstatp.com/origin/6333/2829507413", require: !0, label: "运营者身份证照片", hint: "请参照示例手持身份证件拍摄<br/>身份证上的信息需清晰可见<br/>大小不超过2M", tip: "示例：" }, identity_front_uri: { name: "identity_front_uri", hint: "身份证上的信息需清晰可见<br/>大小不超过2M", require: !0, label: "运营者身份证正面" }, identity_back_uri: { name: "identity_back_uri", hint: "身份证上的信息需清晰可见<br/>大小不超过2M", require: !0, label: "运营者身份证反面" }, avatar_uri: { name: "avatar_uri", hint: "要求清晰、健康、代表品牌形象<br/>请勿使用二维码，最大5M，200x200像素", require: !0, label: "头条号头像" } };
    for (var key in baseConfig) {
        var _config = projectConfig[key];
        _config && $.extend(baseConfig[key], _config)
    }
    exports.image = function(e) {
        return makeUpload($.extend(baseConfig.image, e))
    }, exports.authorize_uri = function(e) {
        return e = $.extend(baseConfig.authorize_uri, e), e.hint = '请<a href="' + Util.e(e.url) + '" target="_blank" class="slink">点此下载确认书模版</a>，填写后上传', makeUpload(e)
    }, exports.license_uri = function(e) {
        return makeUpload($.extend(baseConfig.license_uri, e))
    }, exports.identity_uri = function(e) {
        var i = makeUpload($.extend(baseConfig.identity_uri, e));
        return i
    }, exports.identity_front_uri = function(e) {
        return makeUpload($.extend(baseConfig.identity_front_uri, e))
    }, exports.identity_back_uri = function(e) {
        return makeUpload($.extend(baseConfig.identity_back_uri, e))
    }, exports.avatar_uri = function(e) {
        var i = makeUpload($.extend({
            callback: function(e) {
                var i = this;
                i.addClass("loading"), Facecrop(e.web_url, function(e, a) { i.removeClass("loading"), e ? Stip.popupTip({ msg: "上传失败", status: !1 }) : i.data("value", a).trigger("change") })
            }
        }, baseConfig.avatar_uri, e));
        return i
    }
});;
define("pagelet/signform/tag/tag.js", function(e) {
    var a = e("common/vali/vali.js"),
        t = e("pagelet/signform/tag/tag.whe");
    return function(e) {
        function l(e, a) {
            var t = $();
            t.push($("<option/>").text("请选择").val("")[0]);
            for (var l in e) t.push($("<option/>").text(e[l]).val(l)[0]);
            a.html(t).show().trigger("change")
        }
        e = a.mixin({
            name: "tag",
            label: "分类",
            require: "请选择分类",
            func: function(e) {
                for (var a = [], t = 0; t < n.length; t++) {
                    var l = n.eq(t);
                    if (l.is(":visible")) {
                        var r = l.val();
                        if (!r) {
                            a = [];
                            break
                        }
                        a.push(r)
                    }
                }
                e(null, a.join("/"))
            }
        }, e);
        var r = $(t(e)),
            i = r.nodes(),
            n = $('<select class="form1_select"></select><select class="form1_select"></select><select class="form1_select"></select>').hide();
        _.each(n, function(a, t) {
            var r = $(a);
            r.change(function() {
                var a = e.data["video_category_level" + (t + 2)];
                if (a) {
                    for (var r = 0; t >= r; r++) {
                        var i = n.eq(r).val();
                        if (a = a[i], !a) break
                    }
                    if (a) l(a, n.eq(t + 1));
                    else
                        for (var r = t + 1; 3 > r; r++) n.eq(r).hide()
                }
                s.change()
            })
        });
        var s = i.con;
        return l(e.data.video_category_level1, n.eq(0)), s.append(n), e.vali_jmsg = i.msg, s.data(e), { jbox: r, jvali: s, jselects: n }
    }
});;
define("pagelet/signform/vposter/vposter.js", function(a) {
    var t = a("pagelet/signform/vposter/vposter.whe"),
        e = a("common/vali/vali.js"),
        r = a("common/videoposter/videoposter.js");
    return function(a) {
        function i() {
            var a = n.data("value") || o;
            d.img.prop("src", a)
        }

        function s() { c.id = 0, c.video_status = "", n.data("value", "").change() }
        var o = "//s2.pstatp.com/pgc/v2/resource/pgc_web/static/style/image/default_vposter.18ba5ad.jpg";
        a = e.mixin({ name: "vposter", label: "视频封面", require: "请设置视频封面", func: function(a) { a(null, { url: n.data("value"), pgc_id: n.data("itemId"), thumb_url: n.data("thumbUrl"), src_thumb_uri: n.data("srcThumbUri") }) } }, a);
        var u = $(t(a)),
            d = u.nodes();
        a.vali_jmsg = d.msg;
        var n = d.btn;
        n.data(a);
        var c = { reset: s, id: 0, jbox: u, jvali: n };
        return n.click(function() {
            var t = n.data("itemId");
            r().show({ id: c.id, itemId: t, video_status: c.video_status, source: a.source, type: 2, success: function(a, t, e, r, i) { n.data("itemId", r), n.data("srcThumbUri", i), n.data("thumbUrl", e), n.data("value", t).change() } })
        }), n.change(i), i(), c
    }
});;
define("pagelet/signform/weixin/weixin.js", function(n) {
    var e = n("common/vali/vali.js"),
        i = n("pagelet/signform/weixin/tpl.whe");
    return function(n) {
        n = $.extend({
            tpl: i,
            label: "微信公众号授权",
            name: "weixin",
            hint: "请填写一篇微信文章链接",
            func: e.returnWrap(function(n) {
                if (n) {
                    var i = e.url(n);
                    if (i) return i
                }
                return t.checkbox() ? n ? [null, n] : "请填写一篇微信文章链接" : void 0
            })
        }, n);
        var r = e.simple(n),
            t = r.jbox.find(".form1_checkbox").change(function() { r.jvali.trigger("change") });
        return t.checkbox(!0), r
    }
});;
define("pagelet/signform/simple/simple.js", function(require, exports, module) {
    var Vali = require("common/vali/vali.js"),
        textTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += '">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td><textarea name="' + (null == (__t = name) ? "" : _.escape(__t)) + '" class="signform_text" placeholder="' + (null == (__t = obj.placeholder) ? "" : _.escape(__t)) + '"></textarea></td>\n</tr>\n<tr class="signform_sub">\n    <td></td>\n    <td>\n        <div class="form1_msg jmsg"></div>\n        ', obj.hint && (__p += '<div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + "</div>"), __p += "\n    </td>\n</tr>";
            return __p
        },
        inputTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item  ', obj.require && (__p += " require "), __p += ' ">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td><input type="' + (null == (__t = obj.type || "text") ? "" : _.escape(__t)) + '" class="signform_input" placeholder="' + (null == (__t = obj.placeholder || "") ? "" : _.escape(__t)) + '" ', obj.name && (__p += ' name="' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '" '), __p += ' ></td>\n</tr>\n<tr class="signform_sub">\n    <td></td>\n    <td>\n        <div class="form1_msg jmsg"></div>\n        <div class="signform_hint jhint">' + (null == (__t = obj.hint || "") ? "" : _.escape(__t)) + "</div>\n    </td>\n</tr>";
            return __p
        },
        selectTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += ' ">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td>\n        <select name="' + (null == (__t = name) ? "" : _.escape(__t)) + '" class="form1_select">\n            ';
                for (var i in items) {
                    var item = items[i];
                    __p += '\n                <option value="' + (null == (__t = item.value) ? "" : _.escape(__t)) + '">' + (null == (__t = item.text) ? "" : _.escape(__t)) + "</option>\n            "
                }
                __p += '\n        </select>\n    </td>\n</tr>\n<tr class="signform_sub">\n    <td></td>\n    <td>\n        <div class="form1_msg jmsg"></div>\n        ', obj.hint && (__p += '<div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + "</div>"), __p += "\n    </td>\n</tr>"
            }
            return __p
        },
        config = require("pagelet/signform/config.js"),
        simples = {
            input: { tpl: inputTpl, label: "名称", name: "input", require: !0 },
            _int: { tpl: inputTpl, label: "整数", name: "int", require: !0, func: Vali.returnWrap(Vali._int) },
            url: { tpl: inputTpl, label: "链接", name: "url", func: Vali.returnWrap(Vali.url), require: !0 },
            post_code: {
                tpl: inputTpl,
                label: "邮编",
                name: "post_code",
                require: !0,
                func: Vali.returnWrap(function(e) {
                    return /^\d{6}$/.test(e) ? void 0 : "请输入正确的邮政编码"
                })
            },
            text: { tpl: textTpl, label: "文本", name: "text", require: !0 },
            password: {
                tpl: inputTpl,
                label: "密码",
                type: "password",
                name: "password",
                require: !0,
                func: Vali.returnWrap(function() {
                    return this.val().length < 6 ? "密码至少6位" : void 0
                })
            },
            name: { tpl: inputTpl, label: "头条号名称", name: "name", require: !0, func: Vali.canUseMediaName },
            address: { tpl: inputTpl, label: "企业地址", name: "address", require: !0 },
            position: { tpl: inputTpl, label: "身份/岗位", name: "position", require: !0 },
            desc: {
                tpl: textTpl,
                label: "头条号介绍",
                name: "desc",
                require: !0,
                func: Vali.returnWrap(function(e) {
                    return Vali.range(e, 10, 30)
                })
            },
            notes: {
                tpl: textTpl,
                label: "辅助材料",
                name: "notes",
                require: !1,
                func: Vali.returnWrap(function(e) {
                    return Vali.range(e, 10, 300, !0)
                })
            },
            company_name: { tpl: inputTpl, label: "企业名称", name: "company_name", require: !0 },
            email: { tpl: inputTpl, label: "联系邮箱", name: "email", require: !0, func: Vali.returnWrap(Vali.email) },
            real_name: { tpl: inputTpl, label: "运营者姓名", name: "real_name", hint: "请务必与上传的身份证件姓名保持一致", require: !0 },
            identity_number: { tpl: inputTpl, label: "运营者身份证号", name: "identity_number", hint: "请务必与上传的身份证件号码保持一致", require: !0, func: Vali.returnWrap(Vali.cnid) },
            qq: { tpl: inputTpl, label: "其他联系方式(选填)", name: "qq" },
            mobile: { tpl: inputTpl, label: "运营者电话", name: "mobile", require: !0, func: Vali.returnWrap(Vali.mobile) },
            gov_type: { tpl: selectTpl, label: "机构级别", name: "gov_type", require: !0, items: [{ text: "请输入" }, { text: "国家级", value: 1 }, { text: "省部级", value: 2 }, { text: "厅局（地市）级", value: 3 }, { text: "县处级", value: 4 }, { text: "县处级以下", value: 5 }] }
        };
    for (var key in simples) {
        var _config = config[key];
        _config && $.extend(simples[key], _config)
    }
    return simples
});;
define("pagelet/signform/media/media.js", function() {
    return function(e, a, t, n) {
        function r(e, a, t) {
            e[a] = t;
            var n = e._keys;
            return n || (n = e._keys = []), n.push(a), t
        }

        function i(e, a) {
            for (var t = e, n = 0; n < a.length; n++) {
                var i = a[n],
                    l = t[i[0]];
                l || (l = r(t, i[0], { value: i[0], text: i[1], children: { _keys: [] } })), t = l.children
            }
        }
        for (var l = {}, c = 0; c < n.length; c++) {
            var d = n[c];
            i(l, d)
        }
        e.data("vali_func", function(e) {
            var a = $.map(v.find(".form1_checkbox"), function(e) {
                var a = $(e);
                return a.checkbox() ? { name: "media_level_3_tags", value: a.data("value") } : void 0
            });
            if (h.val()) {
                if (a.push({ name: "media_level_1_tags", value: h.val() }), o.is(":hidden")) return e(null, a);
                if (o.val()) return a.push({ name: "media_level_2_tags", value: o.val() }), e(null, a)
            }
            return e()
        }); {
            var h = $('<select class="form1_select"></select>').appendTo(e),
                o = $('<select class="form1_select"></select>').hide().appendTo(e),
                v = a,
                f = h[0],
                s = o[0];
            $(new Option("请选择", ""))
        }
        f.add(new Option("请选择", ""));
        for (var u = l._keys, c = 0; c < u.length; c++) {
            var g = l[u[c]],
                p = $(new Option(g.text, g.value));
            p.data("data", g), f.add(p[0])
        }
        h.change(function() {
            var e = $(this).children().filter(function() {
                    return this.selected
                }),
                a = e.data("data");
            if (a) {
                var t = a.children,
                    n = t._keys;
                if (0 === n.length) o.hide(), o.empty(), o.trigger("change");
                else if (1 === n.length) {
                    o.hide(), o.empty();
                    var r = t[n[0]],
                        e = $(new Option(r.text, r.value));
                    e.data("data", r), s.add(e[0]), o.trigger("change")
                } else {
                    o.empty(), s.add(new Option("请选择", ""));
                    for (var i = 0; i < n.length; i++) {
                        var r = t[n[i]],
                            e = $(new Option(r.text, r.value));
                        e.data("data", r), s.add(e[0])
                    }
                    o.show(), o.trigger("change")
                }
            } else o.hide(), o.empty(), o.trigger("change")
        }), o.change(function() {
            v.empty();
            var a = $(this).children().filter(function() {
                    return this.selected
                }),
                n = a.data("data");
            if (n && n.children._keys.length) {
                var r = n.children,
                    i = r._keys;
                e.data("jchecks_only") && "news_military" == $(this).prev().val() && (i = i.filter(function(e) {
                    return "weaponry" == e
                }));
                for (var l = 0; l < i.length; l++) {
                    var c = r[i[l]],
                        d = $('<div class="form1_checkbox"></div>');
                    d.text(c.text), d.data("value", c.value), d.checkbox(), v.append(d), t.show()
                }
            } else t.hide()
        }), v.on("change", ".form1_checkbox", function() {
            var e = v.find(".form1_checkbox").filter(".checked");
            e.length > 3 && ($(this).checkbox(!1), alert("最多选3个"))
        }), e.change(function(a) {
            if (e.is(a.target)) {
                var t = e.data("value");
                if (t) {
                    var n = t.split("/"),
                        r = n[0],
                        i = n[1],
                        l = n[2];
                    if (null != r && (h.val(r).trigger("change"), null != i && (o.val(i).trigger("change"), null != l))) {
                        var c = l.split("."),
                            d = v.find(".form1_checkbox");
                        d.filter(function() {
                            return ~c.indexOf($(this).data("value"))
                        }).each(function() { $(this).checkbox(!0) })
                    }
                }
            }
        })
    }
});;
define("pagelet/signform/media/media_vali.js", function(require, exports, module) {
    var mediaTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += '">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td>\n        <span class="jbox">\n            \n        </span>\n        <span class="signform_inlinemsg jmsg"></span>\n        <div class="signform_hint sred">\n            ' + (null == (__t = obj.hint) ? "" : __t) + '\n        </div>\n    </td>\n</tr>\n<tr class="signform_checktags jext" style="display:none">\n    <td></td>\n    <td>\n        <div id="media_checks_box">\n            <div class="signform_hint">\n                专业擅长：\n            </div>\n            <div class="signform_checktags_div jchecks">\n            </div>\n            <div class="signform_hint">\n                选择专业擅长的标签，推荐的更精准（最多3个）\n            </div>\n        </div>\n    </td>\n</tr>';
            return __p
        },
        Media = require("pagelet/signform/media/media.js");
    return function(n) {
        return function(i) {
            i = $.extend({ label: "领域", name: "media", require: !0 }, i);
            var e = $(mediaTpl(i)),
                a = e.find(".jbox");
            return a.data("vali_jmsg", e.find(".jmsg")), a.data("vali_require", i.require), a.data("vali_name", i.name), Media(a, e.find(".jchecks"), e.findAndSelf(".jext"), n), { jbox: e, jvali: a }
        }
    }
});;
define("pagelet/signform/qualification/qualification.js", function(a, i, n) {
    n.exports = function(a) {
        return function() {
            var i, n = !1,
                e = a.getEle("images", { max: 5, tr: !1, hint: wheei.markSafe('<span class="sred">上传资质证明可提高审核通过率，最多可上传5张照片。发布财经、健康类内容，必须提供相应资质证明，无资质的头条号会被封禁 </span><span class="icon1_info" data-hovertitle="健康领域可提供执业医师证、公共营养师/心理咨询师资格证、记者证/采编许可证、公立医院医疗机构执业许可证等；财经领域可提供证券/基金/期货/保险执业资格证、投资分析师/理财规划师资格证、记者证/采编许可证等。"></span>') }),
                o = a.getEle("input", { label: "证书编号" }),
                t = a.getEle("input", { label: "资质名称" }),
                l = a.getEle("row", { require: !1, label: "其他资质" });
            return l.jbox.find("[data-node=dd]").append(e.jbox), i = l.jbox.add(t.jbox.hide()), i = i.add(o.jbox.hide()), l.jbox.on("change", function() {
                var a = l.jbox.data("value") || {};
                a.code && o.val(a.code), a.name && t.val(a.code)
            }), l.jbox.data({
                vali_name: "qualification",
                vali_effect: function(a) {
                    return a ? (a.uri && l.jbox.find(".signform_msg").html(a.uri), a.name && t.jbox.find(".jmsg").html(a.name), void(a.code && o.jbox.find(".jmsg").html(a.code))) : void i.find(".signform_msg").html("")
                },
                vali_func: function(a) {
                    var i = t.jbox.find("input").val(),
                        l = o.jbox.find("input").val();
                    e.jbox.data("vali_func")(function(e, o) {
                        var e = !1,
                            t = {},
                            d = { uri: o.length ? o : null, name: i, code: l };
                        n ? ($.map(d, function(a, i) { a || (e = !0, t[i] = "必填项") }), e ? a(t) : a(null, d)) : a(null, { uri: o })
                    })
                }
            }), { jbox: i, jvali: l.jbox, show: function() { n || (n = !0, i.data("vali_require", !0), l.jbox.addClass("require"), o.jbox.show(), t.jbox.show()) }, hide: function() { n && (n = !1, i.data("vali_require", !1), l.jbox.removeClass("require"), o.jbox.hide(), t.jbox.hide()) } }
        }
    }
});;
define("pagelet/signform/location/location.js", function() {
    return function(e, t) {
        var n = $('<select class="form1_select"></select>').appendTo(e),
            a = $('<select class="form1_select"></select>').hide().appendTo(e),
            i = n[0],
            l = a[0];
        e.data("vali_func", function(e) {
            if (n.val()) {
                if (!a.is(":visible")) return e(null, { province_text: n.find(":selected").text(), province: n.val() });
                if (a.val()) return e(null, { province_text: n.find(":selected").text(), province: n.val(), city_text: a.find(":selected").text(), city: a.val() })
            }
            return e()
        }), i.add(new Option("请选择", ""));
        for (var r = 0; r < t.length; r++) {
            var c = t[r],
                s = c.key,
                o = c.value,
                d = new Option(s[0], s[1]);
            i.add(d), $(d).data("subs", o)
        }
        n.change(function() {
            var e = n.children().filter(function() {
                    return this.selected
                }),
                t = e.data("subs");
            if (t && t.length) {
                a.empty(), l.add(new Option("请选择", ""));
                for (var i = 0; i < t.length; i++) {
                    var r = t[i],
                        c = new Option(r[0], r[1]);
                    l.add(c)
                }
                a.show()
            } else a.hide()
        }), e.change(function(t) {
            if (e.is(t.target)) {
                var i = e.data("value");
                if (i) {
                    var l = i.split("/"),
                        r = l[0],
                        c = l[1];
                    n.val(r).trigger("change"), c && a.val(c).trigger("change")
                }
            }
        })
    }
});;
define("pagelet/signform/location/location_vali.js", function(require, exports, module) {
    var locationTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item ', obj.require && (__p += " require "), __p += '">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td>\n        <span class="jbox">\n            \n        </span>\n        <span class="signform_inlinemsg jmsg"></span>\n    </td>\n</tr>';
            return __p
        },
        Location = require("pagelet/signform/location/location.js");
    return function(n) {
        return function(a) {
            a = $.extend({ label: "所在地", name: "location", require: "请填写所在地" }, a);
            var e = $(locationTpl(a)),
                i = e.find(".jbox");
            return i.data("vali_jmsg", e.find(".jmsg")), i.data("vali_require", a.require), i.data("vali_name", a.name), Location(i, n), { jbox: e, jvali: i }
        }
    }
});;
define("pagelet/signform/spec/preset.js", function(e) {
    var r = e("common/vali/vali.js");
    return {
        apply_weixin: ["url", {
            func: r.returnWrap(function(e) {
                return r.url(e) && "请提交您微信公众号的任意一篇文章的链接例：http://mp.weixin.qq.com/s?__biz=MjM5NjcxNzUxNg==&mid=400818195&idx=1&sn=76c2243f4bfa41a17f79da3e1cbf02b2&scene=4#wechat_redirect"
            }),
            require: !1,
            name: "weixin",
            placeholder: "微信公众号的原创文章的链接",
            label: "微信公众号"
        }],
        apply_weibo: ["url", {
            func: r.returnWrap(function(e) {
                return r.url(e) && "请提交您的微博主页链接"
            }),
            require: !1,
            name: "weibo",
            placeholder: "微博主页链接",
            label: "微博"
        }],
        apply_sohu: ["url", {
            func: r.returnWrap(function(e) {
                return r.url(e) && "请提交您的搜狐自媒体主页链接"
            }),
            require: !1,
            name: "sohu",
            placeholder: "搜狐自媒体主页链接",
            label: "搜狐"
        }],
        apply_zhihu: ["url", {
            func: r.returnWrap(function(e) {
                return r.url(e) && "请提交您的知乎主页或者知乎专栏链接"
            }),
            require: !1,
            name: "zhihu",
            placeholder: "知乎主页链接或知乎专栏链接",
            label: "知乎"
        }],
        apply_other: ["input", {
            require: !1,
            name: "other",
            placeholder: "其他证明材料",
            label: "其他",
            func: r.returnWrap(function(e) {
                return [null, e.replace(/\u003b|\uff1b/g, ";")]
            })
        }],
        qualification_uri: ["images", { max: 5, name: "qualification_uri", label: "", require: !1, tr: "其他资质", hint: wheei.markSafe('<span class="sred">上传资质证明可提高审核通过率，最多可上传5张照片。发布财经、健康类内容，必须提供相应资质证明，无资质的头条号会被封禁 </span><span class="icon1_info" data-hovertitle="健康领域可提供执业医师证、公共营养师/心理咨询师资格证、记者证/采编许可证、公立医院医疗机构执业许可证等；财经领域可提供证券/基金/期货/保险执业资格证、投资分析师/理财规划师资格证、记者证/采编许可证等。"></span>') }]
    }
});;
define("pagelet/signform/field.js", function(e) {
    function i(e, a) {
        if (b[e]) {
            var s = b[e];
            return a = $.extend({}, s[1], a), i(s[0], a)
        }
        var t;
        a = $.extend({ name: e }, a);
        var r = d[e];
        return r ? t = n.simple($.extend({}, r, a)) : E[e] ? t = E[e](a) : L[e] && (t = L[e](y[e])(a)), t.name || (t.name = a.name), t
    }

    function a(e, i) { e.is(":input") ? e.val(i) : e.data("value", i), e.trigger("change") }
    var n = e("common/vali/vali.js"),
        s = e("pagelet/signform/spec/website.js"),
        t = e("pagelet/signform/spec/media_name.js"),
        r = e("pagelet/signform/spec/images.js"),
        o = e("pagelet/signform/spec/checkbox.js"),
        p = e("pagelet/signform/spec/row.js"),
        g = e("pagelet/signform/spec/files.js"),
        l = e("pagelet/signform/spec/id.js"),
        f = e("pagelet/signform/spec/password2.js"),
        m = e("pagelet/signform/spec/captcha.js"),
        c = e("pagelet/signform/thumb/thumb.js"),
        u = e("pagelet/signform/tag/tag.js"),
        v = e("pagelet/signform/vposter/vposter.js"),
        j = e("pagelet/signform/weixin/weixin.js"),
        d = e("pagelet/signform/simple/simple.js"),
        h = e("pagelet/signform/media/media_vali.js"),
        w = e("pagelet/signform/qualification/qualification.js"),
        x = e("pagelet/signform/location/location_vali.js"),
        b = e("pagelet/signform/spec/preset.js"),
        k = function(e) {
            for (var i in c)
                if (e[i]) {
                    var a = i.replace(/uri$/, "url");
                    e[a] || (e[a] = "https://p1.pstatp.com/origin/" + e[i]), e[i] = { web_url: e[a], web_uri: e[i] }, delete e[a]
                }
            return e
        },
        q = function(e, n) {
            var s = [];
            n = k(n || {});
            for (var t = 0; t < e.length; t++) {
                var r = e[t],
                    o = r[0],
                    p = $.extend({}, r[1]),
                    g = i(o, p);
                a(g.jvali, n[g.name]), s.push(g)
            }
            return s
        },
        y = q.init = {};
    q.getEle = i;
    var E = $.extend({ checkbox: o, tag: u, weixin: j, vposter: v, captcha: m, row: p, files: g, website: s }, c),
        L = { media: h, location: x };
    return E.password2 = f(q), E.id = l(q), E.media_name = t(q), E.images = r(q), E.qualification = w(q), q.parseLocation = function(e) {
        if (!e) return "";
        var i = e.split("/"),
            a = i[0],
            n = i[1],
            s = y.location,
            t = [],
            r = _.find(s, function(e) {
                return e.key[1] == a
            });
        if (r && (t.push(r.key[0]), n)) {
            var o = _.find(r.value, function(e) {
                return e[1] == n
            });
            o && t.push(o[0])
        }
        return t.join("/")
    }, q.setValue = a, q
});;
define("pagelet/add_avatar/add_avatar.js", function(a) {
    var t = a("common/vali/vali.js"),
        i = a("common/util/util.js"),
        o = a("common/stip/stip.js"),
        n = a("pagelet/signform/field.js"),
        e = $("#pagelet_add_avatar").nodes(),
        l = n.getEle("avatar_uri");
    e.start.after(l.jbox);
    var r = t(l.jvali);
    e.submit.click($.loadDone(function(a) {
        r(function(t, n, e) {
            return t ? a() : void i.ajax("/minimal_media_account_completion_post/", e, function(t, i) {
                return 0 != t ? (a(), o.alert(i)) : void(window.location = "/profile/")
            })
        })
    }))
});;
define("pagelet/popalert/popalert.js", function(e, o, t) {
    var n = $("#popalert-modal"),
        i = $("#popalert-tip"),
        c = $("#popalert-submit"),
        l = $("#popalert-cancel");
    t.exports = function(e, o, t) {
        if (o)
            if (i.text(o), "alert" == e) {
                var p = function(e) {
                    (13 == e.keyCode || 32 == e.keyCode) && n.modal("hide")
                };
                $(document).one("keyup", p), c.one("click", function() { $(document).off("keyup", p) }), l.hide(), n.modal()
            } else if ("confirm" == e) {
            if ("function" != typeof t) return;
            c.one("click", t), l.one("click", function() { c.off("click", t) }), l.show(), n.modal()
        }
    }
});;
define("pagelet/mobile_register/mobile_inherit.js", function(require, exports, module) {
    var stip = require("common/stip/stip.js"),
        unbindTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="unbind-mobile-text">\n    <p>' + (null == (__t = reason) ? "" : _.escape(__t)) + '，绑定到当前头条号需要解除原绑定，可能会造成原帐号无法登录，请谨慎决定是否解绑？</p>\n</div>\n<div class="btn-group">\n    <div class="widget_btn_cancel j-get-captcha" ga="原手机解绑">是，确认解绑</div>\n    <div class="widget_btn j-cancel-bind">否，我再想想</div>\n</div>\n<div class="unbind-mobile-warn">\n    <p>警告：</p>\n    <p>解绑后，将无法使用此手机号登录原帐号，可能永久丢失此帐号已发布的文章/问答/评论、兴趣偏好记录、收藏历史等，也无法再次登录/找回该帐号。</p>\n</div>\n';
            return __p
        },
        unbindExistPhoneNum = "";
    module.exports = {
        el: ".mobile-wrapper",
        isImgPicShow: !1,
        unbindExist: !1,
        events: { "click .j-submit-mobile": "onSubmitMobile", "click .j-get-captcha": "onGetCaptcha", "click .j-img-captcha-pic": "refreshPicCaptcha", "click .j-cancel-bind": "onUnbindCancel" },
        action: { submit: "/mobile_register_post/" },
        page: "",
        init: function(i) { i && i.page && (this.page = i.page), /msie/.test(navigator.userAgent.toLowerCase()) && $("[placeholder]").removeAttr("placeholder"), -1 != window.location.href.indexOf("ad_redirect_url=") && (this.ad_redirect_url = window.location.href.split("ad_redirect_url=")[1]) },
        showBindMobile: function() { this.$el.find(".j-setting-mobile").show(), this.$el.find(".j-setting-bind-mobile").hide() },
        hideBindMobile: function() { this.$el.find(".j-setting-mobile").hide(), this.$el.find(".j-setting-bind-mobile").show() },
        disabledMobileInput: function() { this.$el.find("input").each(function() { $(this).attr("disabled", "disabled") }) },
        enableMobileInput: function() { this.$el.find("input").each(function() { $(this).removeAttr("disabled") }) },
        onUnbindCancel: function() { this.unbindExist = !1, $(".j-unbind-mobile").modal("hide") },
        checkPhoneNum: function(i) {
            var t = this.$el.find(".j-mobile-error"),
                e = "";
            return /^1\d{10}$/.test(i) ? /^(171|170)/.test(i) && (e = "请勿绑定170、171号段的虚拟手机号") : e = "手机号码错误，请重新输入", e ? (t.text(e).show(300, "linear", function() { setTimeout(function() { t.hide(300, "linear") }, 3e3) }), !1) : !0
        },
        checkCaptcha: function(i) {
            var t = this.$el.find(".j-mobile-captcha");
            return /\d{4}/.test(i) ? !0 : (t.text("验证码错误，请重新输入").show(300, "linear", function() { setTimeout(function() { t.hide(300, "linear") }, 3e3) }), !1)
        },
        checkPassword: function(i) {
            var t = this.$el.find(".j-password-error");
            return i ? !0 : (t.text("请设置密码").show(300, "linear", function() { setTimeout(function() { t.hide(300, "linear") }, 3e3) }), !1)
        },
        checkImgPic: function() {},
        onGetCaptcha: function(i, t, e) {
            function n() { s.text("重新发送验证码").removeAttr("disabled"), o += 1 }

            function a(i) { s.text("重新发送验证码(" + i + "s)") }
            var s = $(i.target),
                c = this.$el.find(".j-mobile-num").val(),
                o = t || 1;
            if (ga("send", "event", "mobile-register-send-captcha", "clicked"), !this.checkPhoneNum(c)) return !1;
            s.attr("disabled", "disabled");
            var d = this.countDown(60, a, n);
            this.getCaptcha(c, o, function() { clearTimeout(d), n() }, e)
        },
        refreshPicCaptcha: function() {
            var i = this,
                t = "/resend_verified_picture/";
            $.ajax({ url: t, type: "GET", dataType: "json" }).done(function(t) { t && "success" == t.message || stip.popupTip({ msg: t.reason, status: !1 }), t && t.data && t.data.captcha && i.renderPicCaptcha(t.data.captcha) }).fail(function() { stip.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) })
        },
        renderPicCaptcha: function(i) {
            var t = this.$el.find(".j-setting-img-captcha"),
                e = t.find(".img-captcha-pic"),
                n = new Image;
            n.src = "data:image/gif;base64," + i, e.html(n), t.show()
        },
        showUnbindModal: function(i) {
            var t = $(".j-unbind-mobile");
            t.find(".modal-body").html(unbindTpl(i)), this.unbindExist = !0, t.modal("show")
        },
        getCaptcha: function(i, t, e, n) {
            var a = this,
                s = this.$el.find(".img-captcha").val(),
                c = "/get_activate_code/",
                o = { mobile: i, type: t, picture_code: s };
            a.unbindExist && (unbindExistPhoneNum || (unbindExistPhoneNum = i), unbindExistPhoneNum == i ? (o.unbind_exist = 1, o.type = 1) : a.unbindExist = !1, $(".j-unbind-mobile").modal("hide")), $.ajax({ url: c, type: "POST", data: o, dataType: "json" }).done(function(i) {
                if (i && 1001 == i.code) return a.showUnbindModal({ reason: i.reason }), !1;
                if (i && "success" == i.message) {
                    if (n) return !1;
                    stip.popupTip({ msg: i.reason, status: !0 })
                } else stip.popupTip({ msg: i.reason, status: !1 }), e();
                i && i.captcha ? a.renderPicCaptcha(i.captcha) : i && i.data && i.data.captcha && a.renderPicCaptcha(i.data.captcha)
            }).fail(function() { stip.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) })
        },
        countDown: function(i, t, e, n) {
            var a = this,
                s = i || 40,
                c = n || 1e3,
                o = $.isFunction(t) ? t : function() {};
            o.call(a, s);
            var d = setInterval(function() { 0 == --s ? (clearInterval(d), e.call(a)) : o.call(a, s) }, c);
            return d
        },
        onSubmitMobile: function() {
            var i = this,
                t = i.action.submit,
                e = this.$el.find(".j-mobile-num").val(),
                n = this.$el.find(".j-captcha").val(),
                a = this.$el.find(".img-captcha").val(),
                s = this.$el.find(".j-mobile-password").val();
            if (ga("send", "event", "mobile-register-submit", "clicked"), !this.checkPhoneNum(e)) return !1;
            if (!this.checkCaptcha(n)) return !1;
            if (this.$el.find(".j-mobile-password").length > 0 && !this.checkPassword(s)) return !1;
            var c = { mobile: e, activate_code: n, picture_code: a, password: s };
            i.unbindExist && (unbindExistPhoneNum == e ? c.unbind_exist = 1 : i.unbindExist = !1), this.disabledMobileInput(), $.ajax({ url: t, type: "POST", data: c, dataType: "json" }).done(function(t) { stip.popupTip(t && "success" == t.message ? { msg: t.reason, status: !0, callback: function() { "force_register" == i.page ? location.reload() : i.ad_redirect_url ? window.location.href = i.ad_redirect_url : window.location = "/" } } : { msg: t.reason, status: !1 }), t && t.captcha ? i.renderPicCaptcha(t.captcha) : t && t.data && t.data.captcha && i.renderPicCaptcha(t.data.captcha) }).fail(function() { stip.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) }).always(function() { i.enableMobileInput() })
        }
    }
});;
define("pagelet/privacy_validate/privacy.js", function(require, exports, module) {
    var mobileClass = require("pagelet/mobile_register/mobile_inherit.js"),
        template = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="modal fade privacy-operation-modal">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-body">\n                <p class="top-tip j-top-tip">\n                </p>\n                <input class="j-mobile-num" value="10000000000" type="hidden"/>\n                <div class="privacy-check">\n                    <label>短信验证码</label>\n                    <input type="text" class="j-captcha" placeholder="请输入验证码"/>\n                    <button class="j-get-captcha primary-btn">发送验证码</button>\n                    <p class="j-mobile-captcha mobile-error-tips"></p>\n                </div>\n                <div class="setting-mobile-body j-setting-img-captcha" style="display: none">\n                    <label>图片验证码</label>\n                    <input placeholder="请输入图片验证码" class="mobile-input captcha img-captcha" type="text"/>\n                    <div class="j-img-captcha-pic img-captcha-pic"></div>\n                    <p class="j-img-captcha mobile-error-tips"></p>\n                </div>\n                <div class="privacy-tips">\n                    <h4 class="privacy-tips-title">友情提示：</h4>\n                    <p>1.网络通讯异常可能造成短信丢失，请重新获取或稍后再试。</p>\n                    <p>2.请核实手机是否已欠费停机，或者屏蔽了系统短信。</p>\n                </div>\n            </div>\n            <div class="privacy-footer">\n                <button type="button" class="btn new-btn submit j-submit-mobile">提交</button>\n                &nbsp;&nbsp;&nbsp;&nbsp;\n                <button type="button" class="btn new-btn cancel" data-dismiss="modal">取消</button>\n            </div>\n        </div>\n    </div>\n</div>\n';
            return __p
        },
        stip = require("common/stip/stip.js");
    module.exports = Pagelet.extend($.extend(mobileClass, {
        el: "body",
        events: {},
        callback: $.noop,
        init: function(t) { this.$el = t.$el, this.create(), this.bindEvent() },
        create: function() { this.$el.append(template({})) },
        bindEvent: function() {
            var t = this;
            this.$privacyOperateModal = this.$el.find(".privacy-operation-modal"), this.$phoneNum = this.$el.find(".j-mobile-num"), this.$el.on("click", ".j-get-captcha", function(i, a) { a ? t.onGetCaptcha(i, 3, a.noPrompt) : t.onGetCaptcha(i, 3) }).on("click", ".j-submit-mobile", function(i) { t.onSubmitMobile(i) })
        },
        show: function(t) {
            var i = "您正在执行敏感操作，我们需要验证您的身份，我们已经给您绑定的手机号{@1}发送了验证码";
            this.$el.find(".j-get-captcha").trigger("click", { noPrompt: !0 }), t && $.isFunction(t.callback) && (this.callback = t.callback), t && t.mobile && this.$privacyOperateModal.find(".j-top-tip").text(i.replace(/{@1}/g, t.mobile)), this.$privacyOperateModal.modal()
        },
        hide: function() { this.$privacyOperateModal.modal("hide") },
        checkPrivacyCaptcha: function(t, i, a) {
            var n = this,
                e = "/validate_code_check/";
            $.ajax({ url: e, data: t, type: "POST", dataType: "json" }).done(function(t) { $.isFunction(i) && (t && "success" == t.message ? (stip.popupTip({ msg: t.reason, status: !0 }), i(t), n.hide()) : stip.popupTip({ msg: t.reason, status: !1 })) }).fail(function() { stip.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) }).always(function() { $.isFunction(a) && a() })
        },
        onSubmitMobile: function() {
            var t = this,
                i = (this.$el.find(".j-mobile-num").val(), this.$el.find(".j-captcha").val()),
                a = this.$el.find(".img-captcha").val();
            return this.checkCaptcha(i) ? void this.callback(i, a, t) : !1
        }
    }))
});;
define("pagelet/adincome/adincome.js", function(a, t, i) {
    var n = a("common/vali/vali.js"),
        e = a("pagelet/signform/field.js"),
        s = a("common/util/util.js"),
        h = a("pagelet/popalert/popalert.js"),
        c = a("pagelet/privacy_validate/privacy.js").create({ $el: $("#pagelet-adincome") });
    i.exports = Pagelet.extend({
        el: "#pagelet-adincome",
        events: { "click $withdraw": "onWithdrawClick", "click $editBankCard": "onEditBankCard", "click $cancelBankcardEdit": "onCancelBankcardEdit", "click $submitBankcardEdit": "onSubmitBankcardEdit" },
        init: function(a) {
            that = this, this.display_income = +a.display_income || 0, this.pay_name = a.pay_name, this.bank_identity_number = a.bank_identity_number, this.bank_card_no = a.bank_card_no, this.bank_name = a.bank_name, this.bn1 = a.bn1, this.bn2 = a.bn2, this.bank_branch_name = a.bank_branch_name, this.bank_status = a.bank_status, this.can_pay_apply_status = a.status, this.mobile = a.mobile, this.small_flow = a.small_flow, this.$cash_modal = $("#cash-modal"), this.$cash_modal_tip = $("#cash-modal-tip"), this.$cash_modal_submit = $("#cash-modal-submit"), this.$cash_modal_cancel = $("#cash-modal-cancel"), this.$withdraw_tip = $("#withdraw-tip"), this.$bankcard_edit_box = $("#bankcard-edit"), this.$bankcard_binded = $("#bankcard-binded"), this.$bankcard_unbinded = $("#bankcard-unbinded"), this.$bankcard_modify_btn = $("#bankcard-modify"), this.$bind_bankcard_btn = $("#bind-bankcard"), this.$bank_branch_tip = $("#bank-branch-tip"), this.$other_bankname_cell = $("#other_bankname"), this.$pay_name = $("#pay_name"), this.$bank_identity_number = $("#bank_identity_number"), this.$bank_card_no = $("#bank_card_no"), this.$bank_card_home = $("#bank_card_home"), this.$other_bank_name = $("#other_bank_name"), this.$bank_branch_name = $("#bank_branch_name"), this.$bank_card_home.change(function() {
                var a = $(this),
                    t = a.val(),
                    i = a.find("option:selected").data("tel");
                if (t) {
                    var n = "开户行查询：可拨打" + t + "服务电话" + i + "进行查询";
                    that.$bank_branch_tip.text(n).show(), that.$other_bankname_cell.addClass("hide")
                } else that.$other_bankname_cell.removeClass("hide"), that.$bank_branch_tip.hide();
                that.$other_bank_name.val(""), that.$bank_branch_name.val("")
            });
            var t = e.getEle("location");
            $("#location").append(t.jbox), t.jvali.data("value", a.bank_location || "").change(), this.locationVali = n(t.jvali)
        },
        onSubmitBankcardEdit: function() {
            var a, t = this.removeSlash($.trim(this.$pay_name.val())),
                i = this.removeSlash($.trim(this.$bank_identity_number.val())),
                n = this.removeSlash($.trim(this.$bank_card_no.val())),
                e = this.removeSlash($.trim(this.$bank_card_home.val())),
                s = this.removeSlash($.trim(this.$other_bank_name.val())),
                c = this.removeSlash($.trim(this.$bank_branch_name.val())),
                o = "";
            return t && i && n && c && (e || s) ? $.isNumeric(n) ? 18 != i.length ? o = "身份证无效" : this.locationVali(function(t, i, n) { t ? o = t : a = $.so(n).location }) : o = "银行卡号无效" : o = "银行卡信息不完整", o ? void h("alert", o) : void $.ajax({ type: "POST", url: "/bank_info/", data: $.extend({ pay_name: t, bank_identity_number: i, bank_card_no: n, bank_name: e, other_bank_name: s, bank_branch_name: c }, a), success: function(a) { "success" == a.message ? (window.scrollTo(0, 0), location.reload()) : h("alert", a.reason) }, error: function() { h("alert", "服务异常，请稍后再试") } })
        },
        removeSlash: function(a) {
            return a.replace(/\\/g, "")
        },
        onWithdrawClick: function() {
            var a = this;
            if (!(this.display_income < 100)) {
                if (1 == this.can_pay_apply_status) return void h("alert", "请完善银行卡信息");
                if (2 == this.can_pay_apply_status) return void h("alert", "请等待当前待打款手续结束");
                if (this.display_income >= 100) {
                    var t = "提现金额：<span>" + this.display_income + "</span> 元<p>" + s.e($("#cash-tip").text()) + "</p>";
                    this.popCashModal(t, $.proxy(this.whitdraw_submit, a))
                }
            }
        },
        whitdraw_submit: function(a, t) {
            var i = this;
            $.post("/api/pgc_accounting/", t || {}).done(function(a) { "success" == a.message ? (h("alert", "申请提现成功"), setTimeout(function() { location.reload() }, 1e3)) : 9999 === a.code ? c.show({ mobile: a.mobile || "", callback: function(a, t) { i.whitdraw_submit("", { activate_code: a, picture_code: t || "" }) } }) : h("alert", a.reason) }).fail(function() { h("alert", "申请提现失败") })
        },
        withdrawTips: function(a) {
            var t = this;
            t.$withdraw_tip.text(a).show(), setTimeout(function() { t.$withdraw_tip.slideUp("slow") }, 1e3)
        },
        popCashModal: function(a, t) {
            if (a && "function" == typeof t) {
                var i = this;
                this.$cash_modal_tip.html(a), this.$cash_modal_submit.one("click", t), this.$cash_modal_cancel.one("click", function() { i.$cash_modal_submit.off("click", t) }), this.$cash_modal.modal()
            }
        },
        onEditBankCard: function(a) {
            var t = this,
                i = $(a.target);
            this.isCheckBindBankStatus || 1 != this.small_flow ? (i.addClass("hide"), t.$bankcard_edit_box.removeClass("hide")) : c.show({ mobile: t.mobile || "", callback: function(a, n) { this.checkPrivacyCaptcha({ activate_code: a, picture_code: n }, function() { i.addClass("hide"), t.isCheckBindBankStatus = !0, t.$bankcard_edit_box.removeClass("hide") }) } })
        },
        onCancelBankcardEdit: function() { this.$bankcard_unbinded.length ? this.$bankcard_unbinded.is(".hide") ? this.$bankcard_modify_btn.removeClass("hide") : this.$bind_bankcard_btn.removeClass("hide") : this.$bankcard_modify_btn.removeClass("hide"), this.$bankcard_edit_box.addClass("hide"), this.$bank_branch_tip.text("").hide(), this.resetBandcardInfo() },
        resetBandcardInfo: function() { this.$pay_name.val(this.pay_name), this.$bank_identity_number.val(this.bank_identity_number), this.$bank_card_no.val(this.bank_card_no), this.$bank_branch_name.val(this.bank_branch_name), this.bn1 ? (this.$other_bankname_cell.addClass("hide"), this.$other_bank_name.val(""), this.$bank_card_home.val(this.bn1)) : (this.$bank_card_home.val(""), this.$other_bankname_cell.removeClass("hide"), this.$other_bank_name.val(this.bn2)) }
    })
});;
define("pagelet/adsettings/adsettings.js", function(t, a, e) {
    var n = t("common/ui/tab.js"),
        i = t("common/util/util.js");
    e.exports = Pagelet.extend({
        el: "#pagelet-adsettings",
        events: {},
        init: function(t) {
            t.force_use_toutiao_ad && $("#ad_tab").addClass("disabled");
            var a = n($("#ad_tab [data-tab]"), $(), function(a, e) {
                return t.force_use_toutiao_ad && 3 != a ? !1 : void(e || i.ajax("/pgc_ad_type/", { pgc_ad_type: a }, function() {}))
            });
            setTimeout(function() { a(t.ad_tab, !0) }, 10)
        }
    })
});;
define("pagelet/daterange/daterange.js", function() {
    return function(e) {
        function t(t) { e.onchange(t), e.start_date = t.start_date, e.end_date = t.end_date, a(t) }

        function a() {
            if (e.end_date === d.format("date"))
                for (var t = 0; t < i.length; t++) {
                    var a = i[t];
                    e.start_date === d.clone().d(0 - a + 1).format("date") ? s.eq(t).addClass("selected") : s.eq(t).removeClass("selected")
                }
            o.val(e.start_date), c.val(e.end_date)
        }
        var d = new Date;
        e.relative && d.d(e.relative);
        var n = d.clone().format("date"),
            r = d.clone().d(-180).format("date"),
            o = $(".daterange_start_date"),
            c = $(".daterange_end_date");
        o.datetimepicker({ format: "yyyy-mm-dd", weekstart: 1, minView: 2, autoclose: !0, startDate: r, endDate: n }), c.datetimepicker({ format: "yyyy-mm-dd", weekstart: 1, minView: 2, autoclose: !0, startDate: r, endDate: n }), $(".daterange_search").click(function(e) { e.preventDefault(), t({ start_date: o.val(), end_date: c.val() }) });
        var i = [7, 14, 30],
            s = $(".daterange_stoggle span").each(function(e) {
                var a = $(this);
                a.click(function() { t({ start_date: d.clone().d(0 - i[e] + 1).format("date"), end_date: d.clone().format("date") }) })
            });
        return a(e), { trigger: function() { t(e) } }
    }
});;
define("pagelet/adstats/adstats.js", function(t, a, e) {
    var i = /^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
        d = t("common/util/util.js"),
        n = t("pagelet/daterange/daterange.js");
    e.exports = Pagelet.extend({
        el: "#pagelet-adstats",
        events: { "click $ad_mail": "onAdMailClick", "click $ad_mail_send": "onAdMailSendClick", "keypress $ad_mail_input": "onAdMailInputKeyPress" },
        init: function(t) { this.view_type = t.view_type || "ad_stats", this.start_date = t.start_date, this.end_date = t.end_date, this.year = t.year - 0, this.month = t.month - 1, this.day = t.day - 0, this.ad_impr_count = t.ad_impr_count, this.ad_click_count = t.ad_click_count, this.$ad_trend_con = $("#ad-trend-con"), n({ start_date: t.start_date, end_date: t.end_date, relative: t.relative, onchange: function(t) { window.location = "?" + $.param($.extend({}, d.GET, t, {})) } }), this.hightchart(), "ad_stats_third_party" == this.view_type && this.third_party_ad_init() },
        hightchart: function() {
            var t = [{ key: "广告展示量", val: this.ad_impr_count }, { key: "广告点击量", val: this.ad_click_count }],
                a = [],
                e = ["#91ce00", "#458bc4", "#ff001a", "#ffad00", "#22c2af", "#ae5d9d"];
            "ad_stats" == this.view_type ? a[0] = { pointInterval: 864e5, pointStart: Date.UTC(this.year, this.month, this.day), name: t[0].key, data: t[0].val } : (a[0] = { pointInterval: 864e5, pointStart: Date.UTC(this.year, this.month, this.day), name: t[0].key, data: t[0].val }, a[1] = { pointInterval: 864e5, pointStart: Date.UTC(this.year, this.month, this.day), name: t[1].key, data: t[1].val }), this.$ad_trend_con.highcharts({ chart: { height: 350 }, title: { text: null }, xAxis: { type: "datetime", dateTimeLabelFormats: { day: "%m/%e" } }, colors: e, yAxis: { title: { text: "" }, min: 0, minTickInterval: null, plotLines: [{ value: 0, width: 1, color: "#808080" }], allowDecimals: !1, tickPixelInterval: 30, gridLineWidth: 0 }, legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 }, plotOptions: { spline: { lineWidth: 1.5, states: { hover: { lineWidth: 2 } } }, series: { marker: { radius: 3, symbol: "circle" } } }, tooltip: { xDateFormat: "%Y-%m-%d", shared: !0 }, series: a })
        },
        third_party_ad_init: function() { this.$modal = $("#ad-mail-modal"), this.$feedback = $(".ad-mail-feedback"), this.$error = $(".ad-mail-error"), this.$sendBox = $(".ad-mail-send"), this.$mail = $("#ad-mail-receiver"), $(".gg-tag").tooltip({ selector: "[data-toggle=tooltip]", container: "body" }) },
        onAdMailClick: function() {
            this.$modal.modal(), this.$feedback.hide(), this.$error.hide(), this.$sendBox.show(), this.$mail.val("");
            try { ga("send", "event", "ad-send-mail-link", "clicked") } catch (t) {}
        },
        onAdMailSendClick: function() {
            var t = this.start_date,
                a = this.end_date,
                e = $.trim(this.$mail.val()),
                d = this;
            if (!i.test(e)) return void this.$error.show().find(".ad-mail-errtxt").html("请输入正确的邮箱地址");
            $.ajax({ type: "POST", async: !0, url: "/send_ad_stats/", data: { start_date: t, end_date: a, receiver: e }, dataType: "json" }).done(function(t) { d.$sendBox.hide(), d.$feedback.show(), "success" == t.message && setTimeout(function() { d.$modal.modal("hide") }, 2e3), d.$feedback.html(t.reason) }).fail(function() { alert("抱歉，服务异常，请稍后再试") });
            try { ga("send", "event", "ad-send-mail-submit", "clicked") } catch (n) {}
        },
        onAdMailInputKeyPress: function() { this.$error.hide() }
    })
});;
define("pagelet/advertiser_hint/advertiser_hint.js", function(require, exports, module) {
    var adsTmpl = function(obj) {
        {
            var __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="modal fade advertiser-hint-dialog">\n    <div class="modal-dialog" role="dialog">\n        <div class="modal-content">\n            <div class="spopup_dialog_body">\n                <div class="spopup_dialog_tip">\n                    尊敬的企业头条号用户：\n                    <p>我们特开通“成为广告主”渠道，不仅可以保留您的原头条号一切权利，更能轻松、快捷地投放广告。通过今日头条的强大算法和智能匹配，提升您的影响力和知名度，开发潜在客户，培育忠实粉丝，精准连接今日头条几亿读者。</p>\n                    <p>期待您的加入！广告投放，从未如此简单！</p>\n                </div>\n            </div>\n            <div class="spopup_dialog_btns">\n                <div class="spopup_dialog_btn widget_btn_ok j-ads-hint-accept">成为广告主</div>\n                <div class="spopup_dialog_btn widget_btn_cancel j-ads-hint-no" data-dismiss="modal">不感兴趣</div>\n            </div>\n        </div>\n    </div>\n</div>\n';
        return __p
    };
    module.exports = Pagelet.extend({
        el: "#pagelet-advertiser-hint",
        events: {},
        init: function(d) {
            var i = this,
                n = d.mediaType; - 1 !== [1, 5, 7].indexOf(Number(n)) && $.ajax({
                type: "get",
                url: "/is_advertiser/",
                success: function(d) {
                    var a = !!(d && d.data && d.data.is_advertiser);
                    $("#menu_ad_account .menu_ad_text").html(a ? "广告主投放" : "成为广告主"), a || 5 !== Number(n) || window.localStorage && (window.localStorage.getItem("home_ads_dialog_shown") || -1 === ["/profile/", "/"].indexOf(window.location.pathname)) || (i.bindEvents(), i.$adsDialog = $(adsTmpl()).appendTo(document.body), i.$adsDialog.modal("show"))
                },
                error: function() { $("#menu_ad_account .menu_ad_text").html("成为广告主") }
            })
        },
        bindEvents: function() { $(document.body).on("click", ".j-ads-hint-accept", this.goSignupAds.bind(this)).on("click", ".j-ads-hint-no", this.hideAdsModal.bind(this)) },
        goSignupAds: function() { this.hideAdsModal(), window.open("https://ad.toutiao.com/pgc_support/agreement/") },
        hideAdsModal: function() { window.localStorage && window.localStorage.setItem("home_ads_dialog_shown", 1), this.$adsDialog.modal("hide") }
    })
});;
define("pagelet/annual_check/pop_annual/index.js", function(require, exports, module) {
    var GETQRCODEURL = "/statisitc/get_h5_qrcode/",
        stip = require("common/stip/stip.js"),
        Dialog = require("common/popup/dialog.js"),
        qrCodeTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div>\n    <p class="annual_desc">\n      辛勤耕耘了一整年，你一定收获颇丰吧！头条号团队为你总结了一份你的 2016 运营成绩单。\n      使用微信或手机浏览器扫描右方二维码，即可观看你的专属年终动画，看完别忘了分享给你的朋友们哦！<br>\n    </p>\n    <div style="float: right" class=\'center_img\'>\n        <img width="140" src=\'' + (null == (__t = h5_qrcode_url) ? "" : __t) + '\'/>\n    </div>\n    <a id=\'annual_close\'>\n        <i class="iconfont icon-errorfunction icon" type="errorfunction"></i>\n    </a>\n</div>\n';
            return __p
        };
    return {
        init: function() { this.localStorageInit(), this.judgePop() },
        localStorageInit: function() { this.localStorage = window.localStorage ? window.localStorage : { getItem: function() {}, setItem: function() {} } },
        judgePop: function() {
            var n = this;
            this.localStorage.getItem("annual_2016") || n.getQrCode(function(t) { n.pop(t) })
        },
        getQrCode: function(n) { $.ajax({ url: GETQRCODEURL, type: "GET", dataType: "json" }).done(function(t) { n && n(t) }).fail(function() { stip.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) }) },
        pop: function(n) { n.data && n.data.h5_qrcode_url && (this.localStorage.setItem("annual_2016", "1"), this.dialog = new Dialog({ type: "annual", title: "2016年终盘点", content: qrCodeTemplate(n.data) }).show(), this.eventInit()) },
        eventInit: function() {
            var n = this;
            $("#annual_close").bind("click", function() { n.dialog.hide() })
        }
    }
});;
define("pagelet/annual_check/qrcode/index.js", function(e, t, n) {
    var o = "/statisitc/get_h5_qrcode/",
        s = e("common/stip/stip.js");
    n.exports = Pagelet.extend({ el: "#annual_check_qrcode", init: function() { this.getQrCode(this.showQrCode) }, getQrCode: function(e) { $.ajax({ url: o, type: "GET", dataType: "json" }).done(function(t) { e && e(t) }).fail(function() { s.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) }) }, showQrCode: function(e) { "success" == e.message ? $("#annual_check_qrcode").append('<img src="' + e.data.h5_qrcode_url + '"/>') : s.popupTip({ msg: "二维码接口错误", status: !1 }) } })
});;
define("pagelet/articlead/articlead.js", function(require, exports, module) {
    function ArticleAd(t, e) {
        this.$el = $(t), this.options = e || {}, this.type = 0 === this.options.article_ad_type ? 2 : this.options.article_ad_type || this.options.manual_publish_ad;
        var i = this;
        this.renderType(e), this.options.article_can_change_ad ? this.$el.on("click", ".gg-item", function() {
            var t = $(this),
                e = t.find("i");
            e.hasClass("selected") || (i.$el.find(".gg-item i.selected").removeClass("selected"), e.addClass("selected"), i.onTypeClick($(this).data("type")))
        }) : i.$el.find(".gg-item i").addClass("disabled")
    }
    var T_ARTICLE_AD = function(obj) {
        {
            var __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += "", options.can_toutiao_ad_select && (__p += '\n<div class="gg-item" data-type="3">\n    <i class="gg-radio gg-show ', 3 == type && (__p += "selected"), __p += '" ga="投放头条广告"></i>投放头条广告\n</div>\n'), __p += "\n", options.can_third_ad_select && (__p += '\n<div class="gg-item" data-type="4">\n    <i class="gg-radio gg-show ', 4 == type && (__p += "selected"), __p += '" ga="投放自营广告"></i>投放自营广告\n</div>\n'), __p += '\n<div class="gg-item" data-type="2">\n    <i class="gg-radio gg-show ', 2 == type && (__p += "selected"), __p += '" ga="不投放广告"></i>不投放广告\n</div>\n';
        return __p
    };
    ArticleAd.prototype = {
        renderType: function() { this.isShowAds() ? (0 === this.type && (this.type = 2), this.$el.show().find(".j-ad-container").html(T_ARTICLE_AD({ type: this.type, options: this.options }))) : this.$el.hide() },
        isShowAds: function() {
            return this.options.can_toutiao_ad_select || this.options.can_third_ad_select
        },
        onTypeClick: function(t) { this.type != t && (this.type = t) },
        getArticleAdType: function() {
            return this.type
        }
    }, module.exports = ArticleAd
});;
define("pagelet/beautiful_voice_main/sharegroup_pc/sharegroup_pc.js", function(e, o, a) {
    a.exports = {
        init: function() {
            function e() {
                var e = location.protocol + "//service.weibo.com/share/share.php?";
                e += "url=" + encodeURIComponent(t.url), e += "&appkey=2504490989", e += "&pic=" + encodeURIComponent(t.image), e += "&title=" + encodeURIComponent(t.title), e += "&searchPic=true", window.open(e)
            }

            function o() {
                var e = location.protocol + "//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
                e += "url=" + encodeURIComponent(t.url), e += "&pics=" + encodeURIComponent(t.image), e += "&title=" + encodeURIComponent(t.title), window.open(e)
            }

            function a() { $('[data-node="share-cover-weixin"]').show() }
            var n = /NewsArticle/i.test(navigator.userAgent),
                t = { title: "成名需要多久？也许就是一首歌的时间—-中国新唱将", desc: "中国新唱将排行榜", image: location.protocol + "//p4.pstatp.com/origin/3e8000a50ab2cbfa90b", url: location.href };
            $('[data-node="share-group"]').addClass(n ? "in_app" : "not_in_app"), $('[data-node="qr"]').qrcode({ width: 100, height: 100, render: "div", text: "http://mp.toutiao.com/goodvoice/poster/" }), $('[data-node="share-btn"]').on("click", function() { $(".share-cover").show(), $('[data-node="share-group"] ').addClass("show") }), $('[data-node="close-share"]').on("click", function() { $(".share-cover").hide(), $('[data-node="share-group"] ').removeClass("show") }), $(".share-cover").on("click", function() { $(".share-cover").hide(), $('[data-node="share-group"]').removeClass("show") }), $('[data-node="share-cover-weixin"]').on("click", function() { $(this).hide() }), $('[data-node="share-group"] a').on("click", function() {
                var i = $(this).attr("data-type");
                if (n && "weibo" != i) window.ToutiaoJSBridge.call("share", { platform: i, title: t.title, desc: t.desc, image: t.image, url: t.url }, function() {});
                else switch (i) {
                    case "weibo":
                        e();
                        break;
                    case "qzone":
                        o();
                        break;
                    case "weixin":
                        a()
                }
            })
        }
    }
});;
define("pagelet/claim_origin/claim_origin.js", function(i) {
    return function(t) {
        var n, e = i("common/util/util.js"),
            c = i("common/stip/stip.js"),
            o = i("common/popup/dialog.js"),
            a = new o({
                title: "举报删除的动作无法恢复，是否删除？",
                btns: [{
                    type: "ok",
                    text: "删除",
                    click: $.loadWrap(function() {
                        return n()
                    })
                }, { type: "cancel", click: function() { a.hide() } }]
            });
        $("#claim_origin_table").on("click", '[data-node="del"]', function() {
            var i = $(this);
            a.show(), n = function() {
                var n = i.closest("tr").data("id");
                return e.ajax("/article/delete_dup_article/", { pgc_id: t.pgc_id, dup_id: n }, function(t, n) {
                    return a.hide(), 0 != t ? c.alert(n) : (i.replaceWith("已删除"), void c.alert("已删除"))
                })
            }
        })
    }
});;
define("pagelet/complain/complain.js", function(t, e, a) {
    var i = t("common/util/util.js");
    a.exports = Pagelet.extend({
        el: "#pagelet-complain",
        events: { "click $complain_submit": "onComplainSubmitClick", "click $upload": "onUploadClick", "change $upload": "onUploadChange" },
        init: function(t) {
            this.complain_id = t.id, $(".complain_files").on("click", ".file i", function() {
                var t = $(".file").length;
                $(this).parent().remove(), 1 == t && $(".complain_files").hide()
            })
        },
        onComplainSubmitClick: function() {
            var t = $("#complain_text"),
                e = $.trim(t.val()),
                a = $("#agree_this");
            return e.length < 10 ? (alert("请输入至少10个字以上的材料说明"), void t.focus()) : a[0].checked ? void this.complain_post() : (alert('请勾选 "' + $(".agree_this").text() + '"'), void a.focus())
        },
        onUploadClick: function(t) {
            var e = ($(t.target), $(".file").length),
                a = 5;
            return e == a ? (alert("您最多只能上传 " + a + " 份材料"), void t.preventDefault()) : void 0
        },
        onUploadChange: function(t) {
            var e = $(t.target),
                a = /\.(jpg|png|jpeg)$/i;
            return a.test(e.val()) ? (this.upload_file(e.attr("id")), void this.toggleStatus()) : (alert("请上传jpg、jpeg、png格式的文件"), void e.val(""))
        },
        upload_file: function(t) {
            var e = this;
            $.ajaxFileUpload({ url: "/api/storage_put/", secureuri: !1, fileElementId: t, dataType: "json", beforeSend: function() {}, complete: function() {}, success: function(t) { "success" == t.message && $(".complain_files").show().children("td:last-child").append('<div class="file"><a href="/api/storage_get/?sid=' + i.e(t.sids[0]) + '"  data-id="' + i.e(t.sids[0]) + '" target="_blank">' + i.e(t.names[0]) + '</a><i title="删除">x</i></div>'), $("#complain_upload").val(""), e.toggleStatus(!0) }, error: function() { e.toggleStatus(!0) } })
        },
        toggleStatus: function(t) { t ? ($(".upload").removeClass("uploading").children("span").text("上传文件"), $("#complain_upload").removeAttr("disabled")) : ($(".upload").addClass("uploading").children("span").text("上传中..."), $("#complain_upload").attr("disabled", "disabled")) },
        complain_post: function() {
            {
                var t = $.trim($("#complain_text").val()),
                    e = [],
                    a = [];
                t.length
            }
            $(".file").each(function() { e.push($("a", $(this)).attr("data-id")), a.push($("a", $(this)).text()) }), $.ajax({ type: "POST", async: !0, url: "/api/report_and_complain_post/?" + Date.now(), data: { json_data: JSON.stringify({ text: t, urls: e, names: a }), article_pgc_id: this.complain_id }, dataType: "json" }).done(function(t) { "success" == t.message ? (alert("提交成功"), setTimeout(function() { location.href = "/core/article/index/" }, 500)) : alert(t.reason) }).fail(function() {})
        }
    })
});;
define("pagelet/pager/pager.js", function(e) {
    function n(e) {
        function n(n) {
            e.render(f, f * a, (f + 1) * a, n);
            var i = !1,
                t = !1;
            0 === f && (i = !0), f === l - 1 && (t = !0), s[i ? "addClass" : "removeClass"]("disabled"), u[t ? "addClass" : "removeClass"]("disabled"), d.val(f + 1)
        }

        function t() {
            function e() {
                var e = Number($.trim(d.val())) - 1;
                e >= 0 && l > e ? (f = e, n()) : (d.val(f + 1), i.popupTip({ msg: "请输入正确的页码", status: !1 }))
            }
            u.click(function(e) { e.preventDefault(), u.is(".disabled") || (f++, n()) }), s.click(function(e) { e.preventDefault(), s.is(".disabled") || (f--, n()) }), o.click(function(n) { n.preventDefault(), e() }), d.keypress(function(n) { 13 === n.keyCode && e() })
        }
        var a, l, r = e.jele,
            s = r.find(".page_number-prev"),
            u = r.find(".page_number-next"),
            d = r.find(".page_number-num"),
            p = r.find(".page_number-total"),
            o = r.find(".page_number-jump"),
            f = e.index || 0;
        return null == e.length ? (a = e.size, l = Math.ceil(e.total / e.size)) : (a = 0, l = e.length), 2 > l ? void r.hide() : (p.text(l), t(), void n(!0))
    }
    var i = e("common/stip/stip.js");
    return n
});;
define("pagelet/donate_history/donate_history.js", function(e) {
    var n = e("common/util/util.js"),
        t = e("pagelet/pager/pager.js");
    return function(e) { t({ jele: $(".pager"), length: e.total_pagenum, index: e.pagenum - 1, render: function(e, t, a, o) { o || (window.location = "?" + $.param($.extend({}, n.GET, { pagenum: e + 1 }))) } }) }
});;
define("pagelet/donate_report/donate_report.js", function(t, e, a) {
    var i = t("common/util/util.js"),
        n = t("pagelet/daterange/daterange.js");
    a.exports = Pagelet.extend({
        el: "#pagelet-donate_report",
        init: function(t) { this.start_date = t.start_date, this.end_date = t.end_date, this.year = t.year - 0, this.month = t.month - 1, this.day = t.day - 0, this.income_list = t.income_list, this.$ad_trend_con = $("#ad-trend-con"), n({ start_date: t.start_date, end_date: t.end_date, relative: -1, onchange: function(t) { window.location = "?" + $.param($.extend({}, i.GET, t, {})) } }), this.hightchart() },
        hightchart: function() {
            var t = [],
                e = ["#FF6F6F", "#669CFF", "#ff001a", "#ffad00", "#22c2af", "#ae5d9d"];
            t[0] = { pointInterval: 864e5, pointStart: Date.parseCN(this.start_date).t(), name: "赞赏收入", data: this.income_list }, this.$ad_trend_con.highcharts({ chart: { height: 350 }, title: { text: null }, xAxis: { type: "datetime", dateTimeLabelFormats: { day: "%m/%e" } }, colors: e, yAxis: { title: { text: "" }, min: 0, minTickInterval: null, plotLines: [{ value: 0, width: 1, color: "#808080" }], allowDecimals: !1, tickPixelInterval: 30, gridLineWidth: 0 }, legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 }, plotOptions: { spline: { lineWidth: 1.5, states: { hover: { lineWidth: 2 } } }, series: { marker: { radius: 3, symbol: "circle" } } }, tooltip: { xDateFormat: "%Y-%m-%d", shared: !0 }, series: t })
        }
    })
});;
define("pagelet/double_title/title.js", function(e, t, i) {
    var a = e("pagelet/popalert/popalert.js"),
        s = window.listener;
    i.exports = function(e, t) {
        function i(e, t) { d.affix({ offset: { top: d.offset().top } }), e && e.length && (d.find("span").text(e).end().height(40), setTimeout(function() { d.height(0) }, t || 4e3)) }

        function l() { u.isColumn || (_.show(), s.trigger("assistant-change", "abtest-change", { abtest: !1 })) }

        function o() { _.hide(), n.checkbox(!1), n.removeClass("disabled"), u.postSlaveData = [], m = !1, s.trigger("double-title", "change", { is_doubleTitle: 0 }), c.hide(), s.trigger("assistant-change", "abtest-change", { abtest: !0 }) }

        function r(l) {
            n.checkbox(), c.show().val(m ? u.postSlaveData[0].title : ""), c.blur(function() {
                var e = c.val().trim();
                $.ajax({ type: "GET", url: "/check_title/", data: { title: e } }).done(function(e) { "success" === e.message && (1 === e.status ? i("你的内容涉嫌标题夸张，建议修改，继续发表会被限制推荐量。", 4e3) : d.height(0)) })
            }), l.claim_origin && !u.isColumn && _.show(), l.after_pass_modify ? l.claim_origin ? (n.addClass("disabled"), m ? (n.checkbox(!0), s.trigger("double-title", "change", { is_doubleTitle: 1, feed_covers: u.slaveCovers })) : (c.hide(), s.trigger("double-title", "change", { is_doubleTitle: 0 }))) : (n.addClass("disabled"), g.hide(), c.hide(), s.trigger("double-title", "change", { is_doubleTitle: 0 })) : l.back_modify ? l.has_slave_article ? (n.addClass("disabled"), c.show(), s.trigger("double-title", "change", { is_doubleTitle: 1, feed_covers: u.slaveCovers })) : (n.hide(), c.hide(), s.trigger("double-title", "change", { is_doubleTitle: 0 })) : m ? (n.checkbox(!0), u.count++, s.trigger("double-title", "change", { is_doubleTitle: 1, feed_covers: u.slaveCovers })) : (n.checkbox(!1), c.hide(), s.trigger("double-title", "change", { is_doubleTitle: 0 })), n.change(function(i, l) { l && e.value ? (m = !0, u.postSlaveData = [{ title: h, item_id: v, type: 1, source: 1 }], c.show(), 1 == u.count ? s.trigger("double-title", "change", { is_doubleTitle: 1, feed_covers: t.pgcFeedCovers.getCovers().pgc_feed_covers }) : s.trigger("double-title", "change", { is_doubleTitle: 1 })) : m ? (m = !1, u.postSlaveData = [], c.hide(), s.trigger("double-title", "change", { is_doubleTitle: 0 })) : e.value ? (m = !0, u.postSlaveData = [{ title: h, item_id: v, type: 1, source: 1 }], c.show(), 1 == u.count ? s.trigger("double-title", "change", { is_doubleTitle: 1, feed_covers: t.pgcFeedCovers.getCovers().pgc_feed_covers }) : s.trigger("double-title", "change", { is_doubleTitle: 1 })) : (m = !1, a("alert", "启用副标题必须先申请原创标签"), n.checkbox(!1)), s.trigger("assistant-change", "abtest-change", { abtest: m }), u.count++ }), s.on("assistant-change", "trigger-abtest", function() { n.trigger("change", !0), n.checkbox(!0), window.scrollTo(window.scrollX, _.offset().top) })
        }
        var n = $(".subtitle_label"),
            c = $(".j-subtitle_abtest_input"),
            g = $("#apply_create_label"),
            _ = $(".j-subtitle-row"),
            d = $(".alert"),
            u = { isChecked: !1, count: 1, slaveCovers: t.pgc_feed_covers || [] },
            v = "",
            h = "",
            m = !1,
            b = { after_pass_modify: t.after_pass_modify, claim_origin: t.claim_origin, back_modify: t.pgc_id && "0" != t.is_fail };
        if (t.slave_items && t.slave_items.length > 0 && (t.slave_items = JSON.parse(t.slave_items)), "" === t.pgc_id) u.postSlaveData = [], m = !1, v = "", h = "", b.has_slave_article = "";
        else {
            var f = !1;
            if (t.slave_items instanceof Array)
                for (var p = 0, C = t.slave_items.length; C > p; p++) 1 == t.slave_items[p].source && (b.has_slave_article = !0, u.postSlaveData = [{ title: t.slave_items[p].title, item_id: t.slave_items[p].item_id, type: 1, source: 1 }], m = !0, v = t.slave_items[p].item_id, h = t.slave_items[p].title, t.slave_items[p].covers && (u.slaveCovers = t.slave_items[p].covers || []), f = !0);
            !f && t.has_slave_article && (b.has_slave_article = t.has_slave_article, u.postSlaveData = [{ title: t.slave_title, item_id: t.slave_item_id, type: t.has_slave_article ? 1 : 0, source: 1 }], m = !0, v = t.slave_item_id, h = t.slave_title, f = !0), f || (u.postSlaveData = [], m = !1, v = t.slave_item_id, h = t.slave_title, b.has_slave_article = "")
        }
        return ue.ready(function() { s.trigger("has-assistant", "show-article-assistant", { claim_origin_permission: t.claim_origin_permission, abtest_permission: t.abtest_permission, type: 1, origin: t.claim_origin, abtest: m, timer: !t.showTimerAssistant || t.timer_status || "0" == t.timer_status, picture: ue.document.getElementsByTagName("img").length, pgc_id: t.pgc_id, is_draft: t.is_draft }) }), u.isColumn = t.column_data && t.column_data.column_chosen ? !0 : !1, r(b), s.on("has-video", "double-change", function(e, t) { n.find(".double-title").text(t ? "双标题" : "额外设置“标题+封面”的组合") }), e.value ? l() : o(), e.$el && (e.$el.on("origin-confirm", function() { l(), n.checkbox(!0), n.trigger("change", !0), s.trigger("assistant-change", "origin-change", { origin: !0 }) }), e.$el.on("origin-cancel", function() { o(), s.trigger("assistant-change", "origin-change", { origin: !1 }) })), u.column = function(e) { e ? (c.val(""), u.isColumn = !0, o()) : (u.isColumn = !1, l()) }, u.validate = function() {
            return u.postSlaveData[0].title = c.val(), $.trim(u.postSlaveData[0].title) ? !0 : (a("alert", "请填写副标题"), !1)
        }, u
    }
});;
define("pagelet/email_active_result/email_active_result.js", function(t) {
    var e = t("common/util/util.js"),
        i = t("common/stip/stip.js");
    return function(t) {
        $("#resend").click($.loadWrap(function() {
            return e.ajax(t.activate_url, {}, function(t, e) { i.alert(0 == t ? "成功发送激活邮件" : e) })
        }))
    }
});;
define("pagelet/error/error.js", function() {});;
define("pagelet/icp_verify/icp_verify.js", function(require, exports, module) {
    function MyIcpVerify() {
        var i, t, n, e = !1,
            a = {},
            o = function(i) {
                $("#icp-dialog img").unbind(), $("#icp-dialog img").attr("src", ""), $.post("/article/verify_url_by_gvn/", a).done(function(t) {
                    if ("success" === t.message) {
                        var n = t.data;
                        a.icp_session = n.icp_session, a.icp_uid = n.icp_uid, a.icp_clearance = n.icp_clearance, $("#icp-dialog img").attr("src", n.data), $("#icp-dialog img").on("click", function() { o() })
                    } else Stip.alert("获取验证码失败，请稍后再试", !1, 1500), i()
                }).fail(function() { Stip.alert("网络异常", !1, 1500), i() })
            },
            c = function(n) {
                $.post("/article/verify_post_valid_code/", a).done(function(a) {
                    if ("success" === a.message) {
                        var c = a.data;
                        2 === c.res && ($("#icp-dialog textarea").val(""), Stip.alert("验证码输入错误，请重新输入", !1, 1500), o()), 0 === c.res ? (e = !0, i(a.data)) : 1 === c.res && (t && "function" == typeof t && t(), Stip.alert("无备案信息", !1, 1500), n())
                    } else Stip.alert(a.reason, !1, 1500), n()
                }).fail(function() { Stip.alert("网络异常", !1, 1500), n() })
            };
        return {
            init: function() {},
            getDialog: function() {
                e = !1, a = {};
                var i = this;
                return this.$dialog || (this.$dialog = new TuiDialog({
                    dialogId: "icp-dialog",
                    title: "网站备案信息查询",
                    body: BODY_TMPL(),
                    bodyCls: "tui-dialog-gray-bg",
                    hasCancelBtn: !1,
                    submitLabel: "确定",
                    onSubmit: function() {
                        return a.validcode = $("#icp-dialog input").val().trim(), 0 === a.validcode.length ? Stip.alert("请输入验证码", !1, 1500) : c(i.hide.bind(i)), !1
                    },
                    onCancel: function() {
                        return n && "function" == typeof n && n(), !0
                    }
                })), this.$dialog
            },
            show: function(e, c, r, l, s) { this.getDialog().modal("show"), i = r, t = l, n = s, a.url = e, a.icp_session = c.icp_session, a.icp_clearance = c.icp_clearance, a.icp_uid = c.icp_uid, $("#icp-dialog input").val(""), $("#icp-dialog img").attr("src", c.data), $("#icp-dialog img").on("click", function() { o() }) },
            hide: function() { $("#icp-dialog img").attr("src", ""), this.$dialog.modal("hide") },
            isValid: function() {
                return e
            }
        }
    }
    var TuiDialog = require("common/popup/tui-dialog.js"),
        BODY_TMPL = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="content">\n    <img src="" alt="验证码获取中" title="点击重新获取验证码"/>\n    <div class="input-wrap">\n        <input rows="1" cols="20" maxlength="20" />\n    </div>\n    <p>扩展链接有效性，需要查询工信部网站备案信息，请输入验证码查询.</p>\n</div>';
            return __p
        },
        Stip = require("common/stip/stip.js");
    module.exports = function() {
        var i;
        return {
            getInstance: function() {
                return i || (i = new MyIcpVerify, i.constructor = null), i
            }
        }
    }()
});;
define("pagelet/extend_url/extend_url.js", function(e, t, n) {
    function i(e, t) { $.getJSON("/article/check_extern_link/", { extern_link: e }, function(e) { t(e) }) }

    function l(e, t) { $("#extend_url_tip").hide(), d.show(e, t, function() { d.hide(), r = e }, function() { $("#extend_url_tip").show() }, function() { $("#extend_url_tip").show() }) }
    var u = e("pagelet/icp_verify/icp_verify.js"),
        d = u.getInstance(),
        r = "";
    n.exports = function(e) {
        e.extern_link ? ($(".gg-extend-url").addClass("selected"), $(".extend-url").show(), $("#extend_url_input").show()) : ($(".gg-extend-url").removeClass("selected"), $(".extend-url").hide(), $("#extend_url_input").hide()), $(".gg-extend-url").on("click", function() { $(this).toggleClass("selected"), $(this).hasClass("selected") ? ($(".extend-url").show(), $("#extend_url_input").show()) : ($(".extend-url").hide(), $("#extend_url_input").hide()) }), $("#extend_url_input").on("blur", function() {
            var e = $(this).val().trim();
            0 !== e.length && e !== r && i(e, function(t) { "success" === t.message ? t.data ? l(e, t.data) : $("#extend_url_tip").hide() : "error" === t.message && $("#extend_url_tip").show() })
        }), $("#extend_url_input").val(e.extern_link)
    }
});;
define("pagelet/feedback/feedback.js", function(require, exports, module) {
    function loadFileUploadLib(t) {
        var s = "//s2.pstatp.com/pgc/v2/resource/pgc_web/static/js/lib/jquery-file-upload-pack.f566bd3.js";
        $.getScript(s, function(s, e, i) { t && t(s, e, i) })
    }

    function contentScrollToBottom(t) {
        setTimeout(function() {
            var t = $(".fb-content-body");
            t.scrollTop(t[0].scrollHeight)
        }, t || 0)
    }

    function positionFeedback(t) {
        var s = document.body.clientWidth;
        t.$el.css("right", (s - 1138) / 2 - 22 - 48)
    }
    require("common/select/select.js");
    var fbMessageTmpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "", _.each(data, function(t) {
                if (__p += "\n    ", t.create_time - t.last_create_time > 900) {
                    if (__p += '\n        <div class="fb-msg-time">\n            <div class="fb-msg-time-body">\n                ', t.create_text) __p += "\n                    " + (null == (__t = t.create_text) ? "" : __t) + "\n                ";
                    else {
                        __p += "\n                    ";
                        var s = new Date(1e3 * t.create_time);
                        __p += "\n                    " + (null == (__t = s.getMonth() + 1) ? "" : __t) + "月" + (null == (__t = s.getDate()) ? "" : __t) + "日\n                    " + (null == (__t = s.getHours()) ? "" : __t) + ":" + (null == (__t = s.getMinutes()) ? "" : __t) + "\n                "
                    }
                    __p += '\n            </div>\n            <div class="fb-msg-time-spliter"></div>\n        </div>\n    '
                }
                __p += "\n    ", 2 === t.sender ? (__p += '\n        <div id="fb-msg-' + (null == (__t = t.offset) ? "" : _.escape(__t)) + '" class="fb-msg fb-msg-service">\n            <img class="fb-msg-hdimg" src="' + (null == (__t = serviceHeadImg) ? "" : __t) + '" />\n            ', 1 === t.type ? __p += '\n                <span class="fb-msg-text">' + (null == (__t = t.content) ? "" : __t) + "</span>\n            " : 2 === t.type && (__p += '\n                <a href="' + (null == (__t = t.image_uri) ? "" : _.escape(__t)) + '" class="fb-msg-image" target="_blank">\n                    <img src="' + (null == (__t = t.image_uri) ? "" : _.escape(__t)) + '">\n                </a>\n            '), __p += "\n        </div>\n    ") : (__p += '\n        <div id="fb-msg-' + (null == (__t = t.offset) ? "" : _.escape(__t)) + '" class="fb-msg fb-msg-customer">\n            <img class="fb-msg-hdimg" src="' + (null == (__t = userHeadImg) ? "" : __t) + '" />\n            ', t.status && (__p += '\n                <span class="fb-msg-loading"></span>\n            '), __p += "\n            ", 1 === t.type ? __p += '\n                <span class="fb-msg-text">' + (null == (__t = t.content) ? "" : _.escape(__t)) + "</span>\n            " : 2 === t.type && (__p += '\n                <a href="' + (null == (__t = t.image_uri) ? "" : _.escape(__t)) + '" class="fb-msg-image" target="_blank">\n                    <img src="' + (null == (__t = t.image_uri) ? "" : _.escape(__t)) + '" />\n                </a>\n            '), __p += "\n        </div>\n    "), __p += "\n"
            }), __p += "\n";
            return __p
        },
        fbResearchTmpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div id="research' + (null == (__t = id) ? "" : __t) + '" class="fb-msg fb-msg-service">\n    <img class="fb-msg-hdimg" src="' + (null == (__t = serviceHeadImg) ? "" : __t) + '" />\n    <div class="fb-msg-text"><div>' + (null == (__t = content) ? "" : __t) + '</div><div class="fb-research-action"><a href="javascript:void(0);" class="fb-research-btn btn-blue" data-id="' + (null == (__t = id) ? "" : __t) + '" data-type="up">赞一下</a><a href="javascript:void(0);" class="fb-research-btn  btn-white" data-id="' + (null == (__t = id) ? "" : __t) + '" data-type="down">踩一下</a></div></div>\n</div>';
            return __p
        },
        assistantTmpl = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<ul class="assistant-list j_assistant_list">\n    ', !obj.claim_origin_permission || !obj.is_draft && obj.pgc_id || (__p += '\n    <li class="assistant-item assistant-origin ', obj.origin || (__p += "active"), __p += '"><!--没选择原创-->\n        <div class="text"><i class="item-icon item-origin-icon"></i>原创内容请声明原创</div>\n        <div class="action">\n            <span class="origin-disable j_origin_disable" ga="不使用声明原创-小助手">非原创</span>\n            <span class="origin-active j_origin_active" ga="使用声明原创-小助手">立即声明</span>\n        </div>\n    </li>\n    '), __p += "\n    ", obj.claim_origin_permission && obj.abtest_permission && (obj.is_draft || !obj.pgc_id) && (__p += '\n    <li class="assistant-item assistant-abtest ', obj.origin && !obj.abtest && (__p += "active"), __p += '"><!--选择了原创，没选推荐实验-->\n        <div class="text"><i class="item-icon item-abtest-icon"></i>建议使用双标题/双封面增加推荐量</div>\n        <div class="action"><span class="abtest-active j_abtest_active" ga="推荐实验-小助手">立即使用</span></div>\n    </li>\n    '), __p += "\n    ", 1 === obj.type && (__p += '\n    <li class="assistant-item assistant-error-word"><!--鼠标blur发文框&&正文中有错别字-->\n        <div class="text"><i class="item-icon item-spell-icon"></i>正文中有错别字，请检查正文红色处</div>\n        <div class="action"><span class="j_check_word" ga="错别字-小助手">纠错</span></div>\n    </li>\n    <li class="assistant-item assistant-picture ', obj.picture || (__p += "active"), __p += '"><!--鼠标blur发文框&&正文无图-->\n        <div class="text"><i class="item-icon item-picture-icon"></i>正文无图</div>\n        <div class="action" ga="正文无图-小助手"><span>建议配图</span></div>\n    </li>\n        ', (obj.is_draft || !obj.pgc_id) && (__p += '\n        <li class="assistant-item assistant-timing-publish ', obj.timer || (__p += "active"), __p += '"><!--未使用定时发文-->\n            <div class="text"><i class="item-icon item-timer-icon"></i>建议设置定时发文功能，设置最佳时段发表</div>\n            <div class="action"><span class="j_timer_active" ga="定时发文-小助手">立即使用</span></div>\n        </li>\n        '), __p += "\n    "), __p += '\n</ul>\n<div class="empty-assistant">\n    <i class="empty-icon"></i>\n    <p class="empty-text">暂无建议</p>\n</div>';
            return __p
        },
        $list = $(".fb-content-list"),
        $sendBtn = $(".fb-text-send"),
        $loadmore = $(".fb-content-loadmore"),
        $area = $(".fb-input-area"),
        $count = $(".fb-feedback-new-msg"),
        $content = $(".fb-content"),
        eventCenter = window.listener,
        GET_FB_LIST_URL = "/api/feedback/1/pgc_feedback/get_feedback_list/",
        GET_UNREAD_FB_URL = "/api/feedback/1/pgc_feedback/get_unread_feedback/",
        READ_FB_URL = "/api/feedback/1/pgc_feedback/read_feedback/",
        SUBMIT_FB_URL = "/api/feedback/1/pgc_feedback/submit_feedback/ ",
        SEARVER_HD_IMAGE = "//p1.pstatp.com/large/7b6000531c8825e9094";
    module.exports = Pagelet.extend({
        el: "#pagelet-feedback",
        init: function() {
            var t = this;
            t.investigate = {}, window.location.href.indexOf("/login/") < 0 && (t.curOffset = 0, t.limit = 20, t.toReadFeedBacks = [], $content.length > 0 && (t.initContent(), t.initTextSend(), t.getNewMsg(), loadFileUploadLib(function() { t.initImgUpload() }), t.getMsgList(function(s) {
                var e = s.feedbacks,
                    i = s.auto_reply.replace("mp.toutiao.com/selfservice/", "mp.toutiao.com/profile_introduction/selfservice"),
                    n = { content: i, offset: (new Date).valueOf(), create_time: (new Date).valueOf(), last_create_time: 0, create_text: "以上是历史消息", sender: 2, type: 1 };
                e.push(n), t.data = e
            })), t.initBack2top(), t.$assistantContent = t.$el.find(".j_assistant_content"), t.$assistantList = t.$el.find(".j_assistant_list"), t.$assistantContainer = t.$el.find(".j_assistant_container"), t.$assistantMsgNum = t.$el.find(".j_assistant_new_msg"), t.eventCenterInit(), window.location.href.indexOf("/selfservice/") > 0 && ($(".fb-feedback-text").addClass("active"), $(".fb-selfservice").hide(), t.blockHoverAction = !0), $(window).on("resize", function() { positionFeedback(t) }), positionFeedback(t), t.$el.addClass("active"))
        },
        eventCenterInit: function() {
            var t = this;
            eventCenter.on("has-assistant", "show-article-assistant", function(s, e) { t.assistantInit(e), t.assistantData = e }), eventCenter.on("assistant-change", "spell-error-change", function(s, e) { t.assistantData.spellError = e.spellError, t.$el.find(".assistant-error-word").toggleClass("active", e.spellError), t.setAssistantNum() }), eventCenter.on("assistant-change", "origin-change", function(s, e) { t.assistantData.origin = e.origin, e.origin ? t.$el.find(".assistant-origin").removeClass("active") : (t.$el.find(".assistant-origin").addClass("active"), t.$el.find(".assistant-abtest").removeClass("active")), t.setAssistantNum() }), eventCenter.on("assistant-change", "abtest-change", function(s, e) { t.assistantData.abtest = e.abtest, e.abtest ? t.$el.find(".assistant-abtest").removeClass("active") : t.assistantData.origin && !e.abtest && t.$el.find(".assistant-abtest").addClass("active"), t.setAssistantNum() }), eventCenter.on("assistant-change", "timer-change", function(s, e) { t.assistantData.timer = e.timer, t.$el.find(".assistant-timing-publish").toggleClass("active", !e.timer), t.setAssistantNum() }), eventCenter.on("assistant-change", "picture-change", function(s, e) { t.assistantData.picture = e.picture, t.$el.find(".assistant-picture").toggleClass("active", !e.picture), t.setAssistantNum() })
        },
        setAssistantNum: function() {
            var t = this.$el.find(".assistant-item.active").length;
            t ? (this.$assistantMsgNum.text(t).show(), this.$el.find(".empty-assistant").hide()) : (this.$assistantMsgNum.text("").hide(), this.$el.find(".empty-assistant").show())
        },
        assistantInit: function(t) {
            var s = this;
            s.assistantDomInit(t), s.setAssistantNum(), $(".j_article_assistant").addClass("active").on("click", function() { $content.hasClass("active") && $content.removeClass("active"), s.$assistantContainer.toggleClass("active") }).hover(function() { s.$el.find(".j_assistant_texticon").toggleClass("active"), s.$el.find(".assistant-wrap").toggleClass("disabled") }), s.$el.find(".j_assistant_close").on("click", function() { s.closeAssistant() })
        },
        assistantDomInit: function(t) {
            var s = this;
            this.$assistantContent.html(assistantTmpl(t)), s.$assistantContainer.find(".j_origin_disable").on("click", function() { s.$el.find(".assistant-origin").removeClass("active"), s.setAssistantNum(), s.closeAssistant() }), s.$assistantContainer.find(".j_origin_active").on("click", function() { eventCenter.trigger("assistant-change", "trigger-origin"), s.closeAssistant() }), s.$assistantContainer.find(".j_abtest_active").on("click", function() { s.$el.find(".assistant-abtest").removeClass("active"), eventCenter.trigger("assistant-change", "trigger-abtest"), s.closeAssistant() }), s.$assistantContainer.find(".j_timer_active").on("click", function() { s.$el.find(".assistant-timing-publish").removeClass("active"), eventCenter.trigger("assistant-change", "trigger-timer"), s.setAssistantNum(), s.closeAssistant() }), s.$assistantContainer.find(".j_check_word").on("click", function() { window.scrollTo(window.scrollX, 320), s.closeAssistant() })
        },
        closeAssistant: function() { this.$assistantContainer.hasClass("active") && this.$assistantContainer.removeClass("active") },
        initContent: function() {
            var t = this;
            $(".j-fb-feedback").on("click", function() { "" !== t.data && (t.msgAppend(t.data), t.data = ""), t.readMsg(), t.closeAssistant(), $content.toggleClass("active"), $area.trigger("focus"), contentScrollToBottom() }).hover(function() { t.blockHoverAction || ($(this).find(".fb-feedback").toggleClass("disabled"), $(this).find(".fb-feedback-texticon").toggleClass("active")) }), $(".fb-content-close").on("click", function() { $content.toggleClass("active") });
            var s = $(".fb-input-container");
            $area.on("focus", function() { s.addClass("active") }).on("blur", function() { s.removeClass("active") }), $loadmore.on("click", function() { t.getMsgList(function(s) { t.msgAppend(s.feedbacks, !0) }) }), t.$el.on("click", ".fb-research-btn", function() {
                var s = $(this).data("type"),
                    e = $(this).data("id");
                this.canPostResearch = !0, this.canPostResearch && (this.canPostResearch = !1, $.post("/api/feedback/1/pgc_feedback/investigate/", { id: e, satisfaction: "up" == s ? 1 : 0 }, function() { this.canPostResearch = !0, $(".fb-research-action").html('<span style="color:#f85959;">感谢您的评价</span>'), setTimeout(function() { t.researchRemove(e) }, 3e3) }))
            })
        },
        initTextSend: function() {
            var t = this,
                s = $(".fb-text-limit"),
                e = $(".j-text-empty"),
                i = $(".j-text-limit");
            $sendBtn.on("click", function() {
                var n = { type: 1, sender: 1, content: $area.val().trim(), offset: (new Date).valueOf(), status: 1 };
                n.content.length > 500 ? i.show() : 0 === n.content.length ? e.show() : (t.msgAppend([n]), t.postMsg(n), contentScrollToBottom(), $area.val(""), s.html("0/500"))
            }), $area.on("keydown", function(t) { 13 !== t.keyCode || t.shiftKey || (t.preventDefault(), $sendBtn.trigger("click")) }).on("keyup", function() {
                var t = $area.val().trim(),
                    n = t.length;
                s.html(n + "/500"), n > 0 && 500 >= n ? (e.hide(), i.hide()) : n > 500 && i.show()
            }), t.$el.on("click", ".fb-msg-error", function() {
                var s = $(this).data("params");
                t.postMsg(s)
            })
        },
        initBack2top: function() { $(".fb-back2top").on("click", function() { window.scrollTo(0, 0) }) },
        initImgUpload: function() {
            var t = this;
            $("#fb-img-upload").fileupload({ singleFileUploads: !1, autoUpload: !0, maxRetries: 3, retryTimeout: 500 }).bind("fileuploadadd", function() {}).bind("fileuploaddone", function(s, e) {
                var i = { type: 2, sender: 1, image_uri: JSON.parse(e.result).web_url, offset: (new Date).valueOf(), status: 1 };
                t.msgAppend([i]), t.postMsg(i), contentScrollToBottom(300)
            }).bind("fileuploadfail", function() {}), $(".fb-img").on("click", function() { $("#fb-img-upload").trigger("click") })
        },
        researchAppend: function(t) { t && t.need && (this.researchRemove(t.id), $list.append(fbResearchTmpl({ id: t.id, serviceHeadImg: SEARVER_HD_IMAGE, content: "问题解决的怎么样？请给个评价吧~" })), this.investigate = {}) },
        researchRemove: function(t) { $("#research" + t).remove() },
        getMsgHtmlData: function(t) {
            return fbMessageTmpl({ data: t.feedbacks, serviceHeadImg: SEARVER_HD_IMAGE, userHeadImg: $sendBtn.data("hdimg") })
        },
        msgAppend: function(t, s) {
            var e = this,
                i = e.getMsgHtmlData({ feedbacks: t });
            s ? $list.prepend(i) : $list.append(i)
        },
        postMsg: function(t, s) {
            var e = $("#fb-msg-" + t.offset).find(".fb-msg-loading");
            e.removeClass("fb-msg-error").attr("data-params", JSON.stringify(t)), $.extend(t, { source: 1 }), $.post(SUBMIT_FB_URL, t).done(function(t) { e.addClass("fb-msg-complete"), s && s(t) }).fail(function() { e.addClass("fb-msg-error") })
        },
        readMsg: function(t) { this.msgAppend(this.toReadFeedBacks), this.researchAppend(this.investigate), this.toReadFeedBacks = [], $.get(READ_FB_URL, function(s) { t && t(s), $count.removeClass("active") }) },
        getNewMsg: function() {
            var t = this;
            $.get(GET_UNREAD_FB_URL).done(function(s) {
                s = JSON.parse(s), s.count > 0 && (t.toReadFeedBacks = s.feedbacks, t.investigate = s.investigate, contentScrollToBottom(), $content.hasClass("active") ? t.readMsg() : $count.addClass("active").html(s.count));
                var e = s.timeout || 30;
                setTimeout(function() { t.getNewMsg() }, 1e3 * e)
            })
        },
        getMsgList: function(t) {
            var s = this;
            $.post(GET_FB_LIST_URL, { offset: s.curOffset, limit: s.limit }, function(e) { e = JSON.parse(e), s.curOffset = e.offset, 0 === s.curOffset ? $loadmore.removeClass("active") : $loadmore.addClass("active"), t && t(e) })
        }
    })
});;
define("pagelet/figure/dataParser.js", function(require, exports, module) {
    var templateEntry = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "<div class ='figure-upload-bg'>\n</div>\n<div class = 'figure-upload-button-wrap'>\n	<div id='file_upload' class='uploadify figure-upload-button j_figure_upload_button'>选择图片</div>\n</div>\n<div class = 'figure-upload-note'>\n	图集功能使用须知：<br>\n1、图集支持绝大部分图片格式，大小不超过5M, 最长边不超过10000像素；<br>\n2、<span class='figure_red'>禁止使用图集模式发表文字类、统计图类、gif图、画质粗糙的视频截图</span>，该类文章将被退回且禁止修改并占据当天1篇的发文限额，建议使用文章模式发表；<br>\n3、涉及政治敏感、黄色暴力、血腥恐怖等图集，将被删除或不予推荐展示，且占据当天1篇的发文限额；<br>\n4、鼓励作者发表优质原创图集，包括但不限于图片故事、社会见闻、旅行记录、自然风光、城市掠影、历史照片、艺术摄影等优质内容；详见<a class='figure_red' href='\nhttp://toutiao.com/i6268419583481217538/'>图集内容规范</a>\n\n</div>\n";
            return __p
        },
        tempalteFigure = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var o = 0, l = gallery_info.length; l > o; o++) __p += '\n<li id="gallery_' + (null == (__t = gallery_info[o].gallery_id) ? "" : __t) + '" class="gallery-item sclearfix">\n	<div class="gallery-sub-item gallery-no"></div>\n			<div class="gallery-sub-item gallery-img gallery-img-loading">\n				', gallery_info[o].url && (__p += "\n					<img src='" + (null == (__t = gallery_info[o].url) ? "" : __t) + "' data-uri='" + (null == (__t = gallery_info[o].uri) ? "" : __t) + "' data-width='" + (null == (__t = gallery_info[o].width) ? "" : __t) + "' data-height='" + (null == (__t = gallery_info[o].height) ? "" : __t) + "'/>\n				"), __p += '\n				<div id="gallery-modify-' + (null == (__t = gallery_info[o].gallery_id) ? "" : __t) + '"></div>\n			</div>\n			<div class="gallery-sub-item gallery-txt">\n				<textarea class="new gallery-desc" maxlength="200" placeholder=\'图片说明（不超过200个字）\'>' + (null == (__t = gallery_info[o].desc ? gallery_info[o].desc : "") ? "" : __t) + "</textarea>\n			</div>\n			<div class=\"gallery-sub-item gallery-action\">\n				<div class='gellery-button-list'>\n					<a class='modify-file' id='modify_file_" + (null == (__t = gallery_info[o].gallery_id) ? "" : __t) + '\' data-title=\'更换图片\'  title="更换图片"></a>\n					<a class="gallery-icon gallery-modify-icon" ></a>\n					<a class="gallery-icon gallery-del-icon" data-title=\'删除\' title="删除" data-instanceid="' + (null == (__t = gallery_info[o].gallery_id) ? "" : __t) + '"></a>\n					<a class="gallery-icon gallery-sort-icon" data-title=\'拖动排序\'  title="拖动排序"></a>\n				</div>\n			</div>\n            ', permission && (__p += '\n            <div class="gallery-sub-sale">\n                ', __p += gallery_info[o].product && gallery_info[o].product.product_url ? '\n                <div class="slink gallery-sale-add" data-galleryid="' + (null == (__t = gallery_info[o].gallery_id) ? "" : __t) + '">' + (null == (__t = gallery_info[o].product.title) ? "" : __t) + "</div>\n                " : '\n                <div class="slink gallery-sale-add" data-galleryid="' + (null == (__t = gallery_info[o].gallery_id) ? "" : __t) + '">插入商品</div>\n                ', __p += "\n            </div>\n            "), __p += "\n	</li>\n";
                __p += " \n"
            }
            return __p
        },
        postTemplate = { title: "", "abstract": "", content: "", authors: "", tag: "", self_appoint: 0, save: 0, pgc_id: "", video_vid: 0, video_vu: "", video_vname: "", video_vposter: "", vids_to_del: [], urgent_push: 0, subsidy: 0, pgc_feed_covers: [], article_type: 3 },
        htmlEncode = function(l) {
            return l.replace(/\>/g, "&gt;").replace(/\</g, "&lt;")
        },
        _parseGalleryId = function(l) {
            var e = l.attr("id"),
                a = e.substr(8);
            return a
        },
        parseGalleryInfo = function(l, e) {
            for (var a, t = [], r = e.find("li"), n = 0; n < r.length; n++) a = l[_parseGalleryId(r.eq(n))], a.desc = htmlEncode($.trim(r.eq(n).find(".gallery-desc").val())), a.product || (a.product = {}), t.push(a);
            return t
        },
        parseContent = function(l) {
            var e = JSON.stringify(l);
            return e = "{!-- PGC_GALLERY:" + e + " --}"
        },
        parseItem = function(l) {
            var e = tempalteFigure(l);
            return e
        },
        genrateRandomCode = function() {
            var l = parseInt((new Date).getTime() * Math.random());
            return l
        },
        galleryDataGenrate = function(l) {
            for (var e, a = 0; a < l.length; a++) e = genrateRandomCode(), l[a].gallery_id = e;
            return l
        };
    module.exports = { postTemplate: postTemplate, parseContent: parseContent, parseItem: parseItem, templateEntry: templateEntry, tempalteFigure: tempalteFigure, galleryDataGenrate: galleryDataGenrate, genrateRandomCode: genrateRandomCode, parseGalleryInfo: parseGalleryInfo }
});;
define("pagelet/figure/double_title/title.js", function(e, t, i) {
    var a = e("pagelet/popalert/popalert.js"),
        s = window.listener;
    i.exports = function(e, t) {
        function i(e, t) { h.affix({ offset: { top: h.offset().top } }), e && e.length && (h.find("span").text(e).end().height(40), setTimeout(function() { h.height(0) }, t || 4e3)) }

        function l() { d.isColumn || (g.show(), s.trigger("assistant-change", "abtest-change", { abtest: !1 })) }

        function o() { g.hide(), r.checkbox(!1), r.removeClass("disabled"), d.postSlaveData = [], v = !1, s.trigger("double-title", "change", 0), c.hide(), s.trigger("assistant-change", "abtest-change", { abtest: !0 }) }

        function n(t) {
            r.checkbox(), c.show().val(v ? d.postSlaveData[0].title : ""), c.blur(function() {
                var e = c.val().trim();
                $.ajax({ type: "GET", url: "/check_title/", data: { title: e } }).done(function(e) { "success" === e.message && (1 === e.status ? i("你的内容涉嫌标题夸张，建议修改，继续发表会被限制推荐量。", 4e3) : h.height(0)) })
            }), t.claim_origin && !d.isColumn && g.show(), t.after_pass_modify ? t.claim_origin ? (r.addClass("disabled"), v ? r.checkbox(!0) : c.hide()) : (r.addClass("disabled"), _.hide(), c.hide()) : t.back_modify ? t.has_slave_article ? (r.addClass("disabled"), c.show()) : (r.hide(), c.hide()) : v ? r.checkbox(!0) : (r.checkbox(!1), c.hide()), r.change(function(t, i) { i && e.value ? (v = !0, d.postSlaveData = [{ title: u, item_id: m, type: 1, source: 1 }], c.show(), s.trigger("double-title", "change", 1)) : v ? (v = !1, d.postSlaveData = [], c.hide(), s.trigger("double-title", "change", 0)) : e.value ? (v = !0, d.postSlaveData = [{ title: u, item_id: m, type: 1, source: 1 }], c.show(), s.trigger("double-title", "change", 1)) : (v = !1, a("alert", "启用副标题必须先申请原创标签"), r.checkbox(!1)), s.trigger("assistant-change", "abtest-change", { abtest: v }) }), s.on("assistant-change", "trigger-abtest", function() { r.trigger("change", !0), r.checkbox(!0), window.scrollTo(window.scrollX, g.offset().top) })
        }
        var r = $(".subtitle_label"),
            c = $(".j-subtitle_abtest_input"),
            _ = $("#apply_create_label"),
            g = $(".j-subtitle-row"),
            h = $(".alert"),
            d = { isChecked: !1 },
            m = "",
            u = "",
            v = !1,
            p = { after_pass_modify: t.after_pass_modify, claim_origin: t.claim_origin, back_modify: t.pgc_id && "0" != t.is_fail };
        if (t.slave_items && t.slave_items.length > 0 && (t.slave_items = JSON.parse(t.slave_items)), "" === t.pgc_id) d.postSlaveData = [], v = !1, m = "", u = "", p.has_slave_article = "";
        else {
            var f = !1;
            if (t.slave_items instanceof Array)
                for (var b = 0, w = t.slave_items.length; w > b; b++) 1 == t.slave_items[b].source && (p.has_slave_article = !0, d.postSlaveData = [{ title: t.slave_items[b].title, item_id: t.slave_items[b].item_id, type: 1, source: 1 }], v = !0, m = t.slave_items[b].item_id, u = t.slave_items[b].title, f = !0);
            !f && t.has_slave_article && (p.has_slave_article = t.has_slave_article, d.postSlaveData = [{ title: t.slave_title, item_id: t.slave_item_id, type: t.has_slave_article ? 1 : 0, source: 1 }], v = !0, m = t.slave_item_id, u = t.slave_title, f = !0), f || (d.postSlaveData = [], v = !1, m = t.slave_item_id, u = t.slave_title, p.has_slave_article = "")
        }
        return t.is_doubleTitleFigure = v, s.trigger("has-assistant", "show-article-assistant", { claim_origin_permission: t.claim_origin_permission, abtest_permission: t.abtest_permission, type: 3, origin: t.claim_origin, abtest: v, pgc_id: t.pgc_id, is_draft: t.is_draft }), d.isColumn = t.column_data && t.column_data.column_chosen ? !0 : !1, n(p), e.value ? l() : o(), e.$el && (e.$el.on("origin-confirm", function() { l(), r.checkbox(!0), r.trigger("change", !0), s.trigger("assistant-change", "origin-change", { origin: !0 }) }), e.$el.on("origin-cancel", function() { o(), s.trigger("assistant-change", "origin-change", { origin: !1 }) })), d.column = function(e) { e ? (c.val(""), d.isColumn = !0, o()) : (d.isColumn = !1, l()) }, d.validate = function() {
            return d.postSlaveData[0].title = c.val(), $.trim(d.postSlaveData[0].title) ? !0 : (a("alert", "请填写副标题"), !1)
        }, d
    }
});;
define("pagelet/figure/service.js", function(e, t, i) {
    var r = "/core/article/edit_article_post/?source=mp&type=service",
        n = e("common/popup/dialog.js");
    e("pagelet/figure/dataParser.js");
    var o = function(e, t) {
            var i = $(".j_pagelet_figure"),
                r = i.find(".alert");
            r.find("span").html(e).end().height(40).show(), setTimeout(function() { r.height(0) }, t || 4e3), r.length && r.affix({ offset: { top: r.offset().top } })
        },
        a = function(e) {
            return e.length < 5 || e.length > 50 ? (o("标题长度应该在5-50字之间"), !1) : !0
        },
        u = function(e) {
            var t = "";
            return $.readCookie && (t = $.readCookie("currentMediaId")), "" == t || e.media_id == t ? !1 : ($.readCookie && (e.media_id = $.readCookie("currentMediaId")), !0)
        },
        c = function(e, t) {
            var i = !0;
            return i = i && a(e.title), u(t) && (o("你已经切换到另一个帐号，请检查是否要在该帐号下发表"), i = !1), i && e.gallery_info.length < 3 && (o("请至少上传三张图片"), i = !1), i && e.gallery_info.length > 100 && (o("图片上限100张，请拆分图集"), i = !1), l(t.has_set_external_cover_permission) || (o("请完成封面设置"), i = !1), i
        },
        f = function(e, t) {
            var i = !0;
            return u(t) && (o("你已经切换到另一个帐号，请检查是否要在该帐号下保存草稿"), i = !1), e.gallery_info.length < 1 && (o("请至少上传一张图片我才能为您保存哦！"), i = !1), "" == e.title && (o("标题不能为空"), i = !1), l(t.has_set_external_cover_permission) || (o("请完成封面设置"), i = !1), i
        },
        l = function(e) {
            var t = $(".j_pagelet_figure"),
                i = t.find(".j_figure_cover_radio.selected").data("type"),
                r = t.find(".j_figure_cover_img img"),
                n = t.find(".j_figure_cover_img_modify"),
                o = r.length;
            if ("auto" == i) return !0;
            if (0 == o) return !1;
            s(t, r), e || d(t, r, n, o);
            var a = t.find(".j_figure_cover_img img"),
                u = t.find(".j_figure_cover_single img");
            return "single" == i && 0 == u.length ? !1 : "multi" == i && 3 != a.length ? !1 : !0
        },
        s = function(e, t, i) {
            var r = [];
            e.find(".j_figure-cover-repeat-tip").hide();
            for (var n = 0; n < t.length; n++) {
                var o = t[n].getAttribute("_origin_uri");
                if (-1 === r.indexOf(o)) r.push(o);
                else {
                    if (i) return !0;
                    $(t[n]).remove()
                }
            }
            return !1
        },
        d = function(e, t, i, r) {
            for (var n = e.find(".j_pagelet_item_list img"), o = [], a = n.length - 1; a >= 0; a--) {
                var u = n[a].src;
                if (/\/large\//.test(u)) {
                    var c = u.split("/large/");
                    o.push(c[1])
                }
            }
            for (a = 0; r > a; a++) {
                for (var f = t[a].getAttribute("_origin_uri"), l = !1, s = 0; s < o.length; s++) o[s] === f && (l = !0);
                l || ($(t[a]).remove(), $(i[a]).hide())
            }
        },
        g = function(e) {
            var t = !1;
            for (var i in e) t = t || e[i].desc;
            return t
        },
        _ = function(e) { n({ title: "未填写图片说明", content: "增加图片说明可获得更好的推荐效果和阅读体验", btns: ["ok", "cancel"], okExecute: function() { e && e() }, okTxt: "发表", cancelTxt: "返回" }).show() },
        m = function(e) { "提交成功" == e.message ? (o("提交成功"), setTimeout(function() { document.location.href = "/core/article/index/" }, 1e3)) : o(e.message) },
        h = function(e) { e.removeAttr("disabled").text("发表") },
        v = function(e) { e.removeAttr("disabled").text("存草稿") },
        p = function(e) { e.attr("disabled", "disabled").text("发布中...") },
        b = function(e) { e.attr("disabled", "disabled").text("保存中...") },
        x = function(e) { "保存成功" == e.message ? (o("保存成功"), setTimeout(function() { document.location.href = "/core/article/index/" }, 1e3)) : o(e.message) },
        j = function() { o("网络错误") },
        k = function(e, t, i, r) { t.error = j, r ? (t.success = x, t.beforeSend = b.bind(null, i), t.complete = v.bind(null, i)) : (t.success = m, t.beforeSend = p.bind(null, i), t.complete = h.bind(null, i)), t.error = j, $.ajax(e, t) };
    i.exports = { url: r, submitCheck: c, storeCheck: f, ajax: k, errorTip: o, dialog: _, checkFigureNote: g, checkRepeat: s }
});;
define("pagelet/figure/figureCover.js", function(e, i, r) {
    e("common/stip/stip.js");
    var t = e("common/util/util.js"),
        o = e("pagelet/figure/service.js");
    r.exports = Pagelet.extend({
        el: ".j_pagelet_figure",
        events: { "click .j_figure_cover_radio": "figureCoverRadioClick", "click .j_figure_cover_img": "figureCoverImgSelectClick", "click .j_figure_cover_img_modify": "figureCoverImgModify", "click .j_figure_cover_select_items": "figureCoverSelectItemsClick", "click .j_figure_cover_select_submit": "figureCoverSelectSubmit", "click .j_figure_cover_select_cancel": "figureCoverSelectCancel", "click .j_figure_cover_crop_submit": "figureCoverCropSubmit", "click .j_figure_cover_crop_cancel": "figureCoverCropCancel", "click .figure-cover-process-radio": "figureCoverCropProcess", "click #figure-cover-preview": "figureCoverPreviewClick" },
        init: function(e) { this._cacheInit(), this._dataInit(), this.hasPermission = e, window.closeFrame = this.figureCoverSelectCancel.bind(this) },
        _cacheInit: function() { this.$alert = this.$el.find(".alert"), this.$el = $(this.el), this.$figure_imgs_list = this.$el.find(".j_pagelet_item_list"), this.$figure_cover_radio = this.$el.find(".j_figure_cover_radio"), this.$figure_cover_content = this.$el.find(".j_figure_cover_main"), this.$figure_cover_multi = this.$el.find(".j_figure_cover_multi"), this.$figure_cover_cur = this.$el.find(".j_figure_cover_cur"), this.$figure_cover_type = this.$el.find(".j_figure_cover_type"), this.$figure_cover_single = this.$el.find(".j_figure_cover_single"), this.$figure_cover_upload = this.$el.find(".j_figure_cover_upload"), this.$figure_cover_select_modal = this.$el.find("#figure-cover-select-modal"), this.$figure_cover_select_items = this.$el.find(".j_figure_cover_select_items"), this.$figure_cover_img = this.$el.find(".j_figure_cover_img"), this.$figure_cover_crop_modal = this.$el.find("#figure-cover-crop-modal"), this.$figure_cover_crop_content = this.$el.find(".j_figure_cover_crop_content"), this.$figure_cover_crop_process = this.$el.find(".figure-cover-process-radio"), this.preview_canvas = this.$el.find("#figure-cover-crop-view-canvas")[0], this.$figure_cover_frame = window.frames["figure-cover-frame"], this.$repeat_tip = this.$el.find(".j_figure-cover-repeat-tip") },
        _dataInit: function() { this.crop_doing = !1, this.cur_cover_img = null, this.multi_select = !1, this.text_img_list = [], this.multi_select_list = [], this.jcrop_api = null, this.origin_url = "", this.effect_url = "", this.id = 0, jcrop_width = 172, jcrop_height = 120, jcrop_ratio = jcrop_width / jcrop_height, jcrop_args = {} },
        figureCoverRadioClick: function(e) {
            var i = $(e.target),
                r = i.data("type"),
                t = i.is(".selected"),
                c = i.is(".disabled"),
                s = { single: 0, multi: 80, auto: 0 };
            t || c || (this.$figure_cover_radio.each(function(e, r) { i.is($(r)) || $(r).removeClass("selected") }), i.addClass("selected"), "auto" !== r ? ("single" === r ? (this.$figure_cover_multi.hide(), this.$repeat_tip.hide()) : (o.checkRepeat(this.$el, this.$figure_cover_img.find("img"), !0) && this.$repeat_tip.show(), this.$figure_cover_multi.show()), this.$figure_cover_content.show(), this.$figure_cover_cur.animate({ left: s[r] || 0 }, "fast")) : this.$figure_cover_content.hide())
        },
        figureCoverImgSelectClick: function(e) {
            if (this.crop_doing) return void alert("当前封面正在处理中，请稍后");
            var i = $(e.target),
                r = this.$figure_imgs_list.find("img"),
                o = r.length;
            this.$cur_cover_img = i.closest(".j_figure_cover_img");
            for (var c = 0; o > c; c++) {
                var s = r[c].src;
                if (this.id += 1, /\/large\//.test(s)) {
                    var g = s.replace(/\/large\//, "/origin/"),
                        a = s.split("/large/"),
                        l = { url: t.e(g), uri: t.e(a[1]), id: this.id };
                    this.text_img_list.push(l)
                }
            }
            this.multi_select = !(i.parent().find("img[_origin_uri]").length || !this.$el.find(".j_figure_cover_radio[data-type=multi]").is(".selected")), this.$figure_cover_select_modal.modal(), this.$figure_cover_frame.fetchData({ list: this.text_img_list, maxNum: this.multi_select ? 3 : 1, callback: this.figureCoverSelectSubmit.bind(this), isShow: !0, hasPermission: this.hasPermission }), this.text_img_list = []
        },
        figureCoverCropProcess: function(e) {
            var i = $(e.target),
                r = i.is(".selected");
            i.is(".disabled") || (r ? ($(".figure-cover-crop-view-img").attr("src", this.origin_url), $("#figure-cover-jcrop").attr("src", this.origin_url), i.removeClass("selected")) : this.effect_url ? ($(".figure-cover-crop-view-img").attr("src", this.effect_url), $("#figure-cover-jcrop").attr("src", this.effect_url), i.addClass("selected")) : this.figureGoGenerateEffectUrl())
        },
        figureGenerateEffectUrl: function(e, i) {
            var r = this,
                t = new Image,
                o = this.preview_canvas.getContext("2d");
            t.crossOrigin = "Anonymous", t.onload = function() {
                var e = t.width,
                    c = t.height;
                r.preview_canvas.width = e, r.preview_canvas.height = c, o.drawImage(t, 0, 0);
                var s = ImageProcess.effects.softEnhancement(o, 0, 0, e, c);
                o.putImageData(s, 0, 0), r.preview_canvas.toBlob(function(e) {
                    var r = new FormData;
                    r.append("upfile", e), $.ajax({ type: "post", url: "/tools/upload_picture/?pgc_watermark=0", data: r, contentType: !1, processData: !1 }).then(function(e) { i && i(e) })
                })
            }, t.src = e
        },
        figureGoGenerateEffectUrl: function() {
            var e = this;
            this.$figure_cover_crop_process.addClass("disabled"), this.figureGenerateEffectUrl(this.origin_url, function(i) { i && i.url ? (e.effect_url = i.url.replace(/\/large\//, "/origin/"), $(".figure-cover-crop-view-img").attr("src", e.effect_url), $("#figure-cover-jcrop").attr("src", e.effect_url).attr("_process_uri", e.effect_url.split("/origin/")[1]), e.$figure_cover_crop_process.addClass("selected")) : alert("美化失败，请重试"), e.$figure_cover_crop_process.removeClass("disabled") })
        },
        figureCoverImgModify: function(e) {
            e.stopPropagation(), this.$cur_cover_img = $(e.target).parent().parent();
            var i = this.$cur_cover_img.find("img");
            i && i.length && (this.origin_url = "//p3.pstatp.com/origin/" + i[0].getAttribute("_origin_uri"), $("#figure-cover-jcrop").attr("src", this.origin_url).attr("_origin_uri", i[0].getAttribute("_origin_uri")), $(".figure-cover-crop-view-img").attr("src", this.origin_url), this.$figure_cover_crop_modal.modal(), this.figureGoGenerateEffectUrl(), $("#figure-cover-jcrop").Jcrop({ bgColor: "#000", bgOpacity: .6, aspectRatio: jcrop_ratio, minSize: [jcrop_width, jcrop_height], onChange: this.updateSelectZone, onSelect: this.updateSelectZone, boxWidth: 400, boxHeight: 380 }, function() {
                var e = this.getBounds();
                width = Math.round(e[0]), height = Math.round(e[1]), this.jcrop_api = this;
                var i = 0,
                    r = 0,
                    t = 0,
                    o = 0;
                width >= Math.floor(height * jcrop_ratio) ? (t = (width - height * jcrop_ratio) / 2, r = height, i = Math.round(r * jcrop_ratio)) : (o = (height - width / jcrop_ratio) / 2, i = width, r = Math.round(i / jcrop_ratio)), this.setSelect([t, o, i, r]);
                var c = this.tellSelect();
                jcrop_args = { x: Math.round(c.x), y: Math.round(c.y), w: Math.round(c.w), h: Math.round(c.h) }
            }))
        },
        figureCoverSelectCancel: function() { this.$figure_cover_select_modal.modal("hide"), this.multi_select_list = [], this.$figure_cover_frame.fetchData({ list: [], maxNum: 1, callback: null, isShow: !1, hasPermission: this.hasPermission }) },
        figureSetCoverImage: function(e, i) {
            var r = this;
            this.toggleCoverLoading(e, !0);
            var t = this.$cur_cover_img.find("img"),
                c = i.uri,
                s = i.url,
                g = new Image;
            g.onload = function() {
                if (t.length) t.attr("src", s).attr("_src", c).attr("_origin_uri", c);
                else {
                    var i = $("<img>");
                    i.attr("src", s).attr("_src", c).attr("_origin_uri", c), e.prepend(i)
                }
                var g = o.checkRepeat(r.$el, r.$figure_cover_img.find("img"), !0);
                g ? r.$repeat_tip.show() : r.$repeat_tip.hide(), r.toggleCoverLoading(e, !1)
            }, g.onerror = function() { r.toggleCoverLoading(e, !1) }, g.src = s, e.find(".figure-cover-img-modify").show()
        },
        figureCoverSelectSubmit: function(e, i) {
            var r = e.length;
            if ("text" !== i && $.ajax({ type: "post", url: "/article/add_pic_source_stat/", data: { pic_src: 4, pic_count: r } }), this.multi_select_list = e, this.multi_select) {
                for (var t = this.$cur_cover_img.parent().find(".j_figure_cover_img"), o = 0; o < this.multi_select_list.length; o++) this.figureSetCoverImage(t.eq(o), this.multi_select_list[o]);
                this.multi_select_list = []
            } else {
                var c = this.multi_select_list[0];
                this.figureSetCoverImage(this.$cur_cover_img, c)
            }
            this.$figure_cover_select_modal.modal("hide"), this.$figure_cover_frame.fetchData({ list: [], maxNum: 1, callback: null, isShow: !1, hasPermission: this.hasPermission })
        },
        updateSelectZone: function(e) {
            if (parseInt(e.w, 10) > 0) {
                var i = this.jcrop_api.tellSelect(),
                    r = jcrop_width / i.w,
                    t = jcrop_height / i.h,
                    o = { width: Math.round(r * width), height: Math.round(t * height), top: 0 - Math.round(t * i.y), left: 0 - Math.round(r * i.x), maxWidth: "none", maxHeight: "none", right: "auto" };
                $(".figure-cover-crop-view-img").css(o), jcrop_args = { x: Math.round(i.x), y: Math.round(i.y), w: Math.round(i.w), h: Math.round(i.h) }
            }
        },
        figureCoverCropSubmit: function() {
            var e = this;
            this.toggleCoverLoading(this.$cur_cover_img, !0);
            var i = $("#figure-cover-jcrop"),
                r = i.attr("_origin_uri"),
                t = i.attr("_process_uri");
            jcrop_args.image_url = i.attr("src");
            var o = jcrop_args.image_url.split("/origin/");
            return o[1] !== r && o[1] !== t ? void alert("图片有问题，不能用来设置封面图") : ($.ajax({ type: "GET", url: "/crop_photo/", data: jcrop_args, dataType: "json" }).done(function(i) {
                if (i.new_url) {
                    i.new_url = "http" + i.new_url.substr(5);
                    var t = e.$cur_cover_img.find("img"),
                        o = new Image;
                    o.onload = e.imgOnloadProcess(t, i, r), o.onerror = function() { e.toggleCoverLoading(e.$cur_cover_img, !1) }, o.src = i.new_url
                } else e.toggleCoverLoading(e.$cur_cover_img, !1), alert("图像裁切失败，请稍后再试")
            }).fail(function() { this.toggleCoverLoading(e.$cur_cover_img, !1), alert("服务异常，请稍后重试") }), void this.resetCoverCrop())
        },
        imgOnloadProcess: function(e, i, r) {
            if (e.length) e.attr("src", i.new_url).attr("_src", i.new_uri).attr("_origin_uri", r);
            else {
                var t = $("<img>");
                t.attr("src", i.new_url).attr("_src", i.new_uri).attr("_origin_uri", r), this.$cur_cover_img.prepend(t)
            }
            this.toggleCoverLoading(this.$cur_cover_img, !1)
        },
        toggleCoverLoading: function(e, i) {
            var r = this.$cur_cover_img.find("img");
            i ? (this.crop_doing = !0, e.addClass("figure-cover-loading"), r.length && r.css("opacity", 0)) : (this.crop_doing = !1, e.removeClass("figure-cover-loading"), r.length && r.css("opacity", 1))
        },
        figureCoverCropCancel: function() { this.resetCoverCrop() },
        resetCoverCrop: function() { this.jcrop_api && this.jcrop_api.destroy(), this.$figure_cover_crop_content.html('<div class="figure-cover-crop-box"><img id="figure-cover-jcrop"></div><div class="figure-cover-crop-view"><img src="" class="figure-cover-crop-view-img"></div>'), this.$figure_cover_crop_process.removeClass("selected"), this.$figure_cover_crop_modal.modal("hide") },
        figureCoverPreviewClick: function() {
            var e = $.trim($("#figure-title").val()),
                i = $.trim($('input[name="authors"]').val()),
                r = this.$figure_cover_radio.filter(".selected").data("type"),
                c = this.$figure_cover_upload.find("img"),
                s = this.$figure_cover_single.find("img"),
                g = c.length;
            if (0 == e.length) return void o.errorTip("请输入文章标题");
            var a = $("#figure-cover-review-tmpl").children().clone(),
                l = a.find(".figure-cover-imgs");
            if (0 == g) l.attr("style", "display:none;");
            else if ("single" === r) s.length ? (a.addClass("with-single-img"), l.html('<li class="cover-imgs-0"><img src="' + t.e(s[0].src) + '"></li>')) : l.attr("style", "display:none;");
            else if ("multi" === r) {
                if (3 > g) return void o.errorTip("请先选取3幅封面图后再预览");
                for (var n = 0; 3 > n; n++) l.append('<li class="cover-imgs-' + n + '"><img src="' + t.e(c[n].src) + '"></li>')
            }
            a.find(".figure-cover-title").text(e), a.find(".figure-cover-author").text(i), void 0 == window.frames.realview_iframe && $("body").append('<div id="realview" class="modal fade"  tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"><iframe id="realview_iframe" name="realview_iframe"  scrolling="yes" frameborder="0"></iframe></div></div></div>');
            var u = window.frames.realview_iframe;
            u.document.open(), u.document.write(a.prop("outerHTML")), $(u.document.body).prepend('<style>*{margin:0;padding:0;}ul{list-style:none;}img{border:none;vertical-align:middle;}body{padding:0 10px;font-family:"Microsoft YaHei",simsun,Arial;}.figure-cover-review{position:relative;margin-top:10px;}.figure-cover-review.with-single-img{padding-right:100px;min-height:63px}.figure-cover-title{font-size:17px;font-weight:bold;line-height:1.2em;color:#464646}.with-single-img .figure-cover-title{min-height:2.3em}.figure-cover-imgs{width:100%;overflow:hidden;margin-top:5px}.with-single-img .figure-cover-imgs{position:absolute;top:0;right:0;width:90px;height:63px;margin-top:0}.figure-cover-imgs li{float:left;width:33.33333%;text-align:center;overflow:hidden}.with-single-img .figure-cover-imgs li{float:none;width:100%;height:100%;text-align:center !important}.figure-cover-imgs li:first-child{text-align:left}.figure-cover-imgs li:last-child{text-align:right}.figure-cover-imgs li.cover-imgs-3{text-align:right}.figure-cover-imgs li img{width:94px;max-width:100%;height:66px;vertical-align:middle}.with-single-img .figure-cover-imgs li img{width:100%;height:100%}.figure-cover-info{font-size:11px;color:#999;margin-top:10px;line-height:1em}.figure-cover-info li{display:inline-block}.with-single-img .figure-cover-time{display:none}.figure-cover-author{margin-right:5px}.figure-cover-action{float:right;width:17px;height:12px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAD0SURBVHjajNIxSgNRFIXhbx5pUkiM2IQYEbKF7EL3IFpFyAa0sJDgBgzEKpsQVzB19qAY7SIYYcpoc4VhcJj83Tv3vse5590sz3PBFY7xia16fnCIN8yhhYQ7FHjAh2b6OMcUtwkX2OB+xwfgPfo3uEwYYlZpOgqrWZwzPIZeZoZhigyKSvEbZ1iG9SVOQy9TYJ1qQvzCIMZbhf1B6FW2qWS57ieayFJNoRMO+pFDP760819zwj7aFX0PTxjFKCM8h16mjW7CKyaV4iqW7y+vLcahl5ngJWGBA1yjt+Oe9HAT9xZZae3HOMG6Ye1b6MYEc/gdAOwrORz08d+/AAAAAElFTkSuQmCC);background-size:17px;cursor:pointer}.figure-cover-time{float:right;margin-right:5px}</style>'), u.document.close(), $("#realview").modal()
        }
    })
});;
define("pagelet/figure/product.js", function(require, exports, module) {
    function Product(t) {
        this.options = t, this.$el = $(PRODUCT_TMPL()), this.$el.on("click", ".product-info-fetch", this.fetchItemInfo.bind(this)), this.$el.on("click", ".direction", this.changeLabelDirection.bind(this));
        var i = this;
        this.$el.on("input", 'input[name="price"]', function() {
            var t = $(this).val();
            i.fillInfo({ price: t })
        }), this.$el.on("mousedown", ".product-image-label", this.labelDown.bind(this)), this.$el.on("click", ".submit", this.close.bind(this)), this.$el.appendTo($("body")), this._callback = null, this._labelDirection = "left"
    }
    var PRODUCT_TMPL = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="modal figure-product-modal fade" data-backdrop="static">\n    <div class="modal-dialog-wrapper">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-body">\n                    <div class="gallery-header">\n                        <h3>添加商品</h3>\n                    </div>\n                    <div class="figure-gallery-product">\n                        <div class="product-url">\n                            <input type="url" class="form-control" placeholder="输入商品链接" name="url"/>\n                            <span class="slink product-info-fetch">获取信息</span>\n                            <p class="help-text">填写商品链接，自动获取商品信息，支持京东、天猫、亚马逊、微店、有赞等商城</p>\n                        </div>\n                        <div class="product-info sclearfix">\n                             <div class="product-image">\n                                 <div class="product-center">\n                                     <div class="product-image-wrap">\n                                         <img draggable="false"/>\n                                         <div class="product-image-label">\n                                            <i class=product-label-arrow></i><i class="product-label-circle"></i><span class="product-image-price">&yen;100</span>\n                                         </div>\n                                     </div>\n                                 </div>\n                             </div>\n                             <div class="info-wrap">\n                                 <div class="product-info-item">\n                                     <input placeholder="描述" type="text" class="form-control" name="title">\n                                 </div>\n                                 <div class="product-info-item product-info-price">\n                                     <input type="text" placeholder="售价" class="form-control" name="price"><span class="slink direction">切换标签方向</span>\n                                 </div>\n                                 <div class="product-info-item product-info-reason">\n                                     <textarea  type="text" placeholder="推荐理由" class="form-control" name="recommend_reason"></textarea>\n                                 </div>\n                             </div>\n                        </div>\n                    </div>\n                    <div class="gallery-footer">\n                        <button class="new-btn submit gallery-submit">确定</button>\n                        <button class="new-btn cancel gallery-cancel" data-dismiss="modal">取消</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
            return __p
        },
        popalert = require("pagelet/popalert/popalert.js"),
        defaults = { product_url: "", price_url: "", corrdinate: "50%,50%", price: 0, title: "", recommend_reason: "" };
    $.extend(Product.prototype, {
        open: function(t, i) {
            this.$el.modal("show"), this.info = t, this.productInfo = $.extend({}, defaults), this.productInfo = this.info.product ? $.extend({}, defaults, this.info.product) : $.extend({}, defaults), this.fillInfo(this.productInfo), this._labelDirection = "-" == this.productInfo.corrdinate[0] ? "right" : "left", this.$el.find(".product-image img").attr("src", this.info.url), this._callback = i;
            var e = this;
            this.$el.one("shown.bs.modal", function() { e.pricePosChange(e.productInfo.corrdinate) }), this.resizeImg()
        },
        resizeImg: function() {
            var t = this.$el.find(".product-image-wrap"),
                i = t.find("img"),
                e = function() { i.prop("width") > i.prop("height") ? (t.css({ width: "100%", height: "auto" }), i.css({ width: "100%", height: "auto" })) : (t.css({ height: "100%", width: "auto" }), i.css({ height: "100%", width: "auto" })) };
            i.one("load", e)
        },
        close: function() {
            var t = {};
            return this.$el.find("input,textarea").serializeArray().forEach(function(i) { t[i.name] = i.value }), this.fillInfo(t), this.productInfo.product_url ? this.productInfo.title ? this.productInfo.recommend_reason ? (this.info.product = this.productInfo, this.$el.modal("hide"), this._callback && this._callback.call(this, this.productInfo), void(this.productInfo = {})) : void popalert("alert", "请输入推荐理由") : void popalert("alert", "请输入描述") : void popalert("alert", "请先获取商品信息")
        },
        labelDown: function(t) {
            var i = this,
                e = this.$el.find(".product-image-wrap"),
                o = e.offset(),
                n = this.$el.find(".product-image-label"),
                r = n.offset(),
                a = function() { e.off("mousemove"), e.off("mouseup"), e.off("mouseleave") },
                l = [t.pageX - r.left, t.pageY - r.top];
            e.on("mousemove", function(t) {
                t.preventDefault();
                var r = t.pageX - o.left - l[0],
                    s = (e.width() - (r + n.outerWidth())) / e.width() * 100,
                    c = r / e.width() * 100,
                    d = t.pageY - o.top - l[1] + 11,
                    p = d / e.height() * 100,
                    u = (d - 11) / e.height() * 100,
                    h = (d + n.outerHeight() - 11) / e.height() * 100;
                if (0 >= s || 0 >= c || h >= 100 || 0 >= u) return void a();
                var f;
                "left" == i._labelDirection ? (f = c + "%," + p + "%", i.pricePosChange(f, { right: "auto", left: c + "%", top: p + "%" })) : (f = -s + "%," + p + "%", i.pricePosChange(f, { left: c + "%", top: p + "%", right: "auto" }))
            }).on("mouseup", function() { a() })
        },
        pricePosChange: function(t, i) {
            this.productInfo.corrdinate = t;
            var e = t.split(","),
                o = this.$el.find(".product-image-label");
            if ("-" === e[0][0]) {
                if (o.addClass("right"), e[0] = e[0].slice(1), !i) {
                    { o.outerWidth(), this.$el.find(".product-image-wrap").width() }
                    i = { left: "auto", top: e[1], right: e[0] }
                }
            } else o.removeClass("right"), i || (i = { left: e[0], top: e[1], right: "auto" });
            o.css(i)
        },
        fillInfo: function(t) {
            (t.charge_url || t.price_url) && (this.productInfo.price_url = t.charge_url || t.price_url), t.commodity_id && (this.productInfo.commodity_id = t.commodity_id), t.slave_commodity_id && (this.productInfo.slave_commodity_id = t.slave_commodity_id), t.goods_json && (this.productInfo.goods_json = t.goods_json), void 0 !== t.recommend_reason && (this.productInfo.recommend_reason = t.recommend_reason, this.$el.find('textarea[name="recommend_reason"]').val(t.recommend_reason)), void 0 !== t.product_url && (this.$el.find('input[name="url"]').val(t.product_url), this.productInfo.product_url = t.product_url), void 0 !== t.title && (this.productInfo.title = t.title, this.$el.find('input[name="title"]').val(_.unescape(t.title))), void 0 !== t.price && (this.productInfo.price = t.price, this.$el.find('input[name="price"]').val(t.price), this.$el.find(".product-image-price").html("&yen;" + t.price))
        },
        fetchItemInfo: function() {
            var t = this.$el.find('input[name="url"]').val(),
                i = this;
            $.ajax({ url: "/article/get_product_info/", data: { gurl: t }, dataType: "json" }).then(function(e) { "success" === e.message ? (i.productInfo.product_url = t, i.fillInfo(e.data)) : popalert("alert", e.message) })
        },
        changeLabelDirection: function() {
            var t = this.$el.find(".product-image-wrap").width(),
                i = this.$el.find(".product-image-label").outerWidth(),
                e = this.productInfo.corrdinate.split(","),
                o = parseFloat(e[0]);
            "left" == this._labelDirection ? (this._labelDirection = "right", 100 * i > o * t ? o = 100 * i / t - 100 : o -= 100) : (this._labelDirection = "left", 100 * i > -o * t ? o = 100 - 100 * i / t : o += 100), this.pricePosChange(o + "%," + e[1])
        }
    }), module.exports = new Product
});;
define("pagelet/tabNewGuide/tabNewGuide.js", function(e, o, i) {
    var n, c, t = "tab_new_quiz",
        a = "tab_new_page",
        k = function(e, o) { this.cookieName = e, n = $(o).find(".quiz_new"), c = $(o).find(".page_new") };
    k.prototype = { newIconDisplay: function() { "1" == $.cookie(t) && n.hide(), "1" == $.cookie(a) && c.hide() }, setCookie: function() { this.cookieName == t ? ($.cookie(t, "1"), n.hide()) : this.cookieName == a && ($.cookie(a, "1"), c.hide()) }, checkCookie: function() { "1" != $.cookie(t) && n.show(), "1" != $.cookie(a) && c.show() } }, i.exports = k
});;
define("pagelet/figure/plus.js", function() {
    ! function(n) {
        n.fn.lightHover = function() {
            var i = n(this);
            return i.hover(function() { i.css({ opacity: .8 }) }, function() { i.css({ opacity: 1 }) }), i
        }
    }($)
});;
define("pagelet/original_tag/praise/praise.js", function(require, exports, module) {
    var tpl = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) {
            __p += "";
            var it = this.props;
            __p += '\n<div class="praise_editcell">\n    <div class="form1_checkbox ' + (null == (__t = it.disabled ? "disabled" : "") ? "" : _.escape(__t)) + " " + (null == (__t = it.value ? "checked" : "") ? "" : _.escape(__t)) + '" ref="check">\n        使用赞赏功能 <i class="gg-timer-tip j_timer_tip" data-title="勾选后发表的文章带有赞赏功能，在发表后无法修改"></i>\n    </div>\n</div>\n'
        }
        return __p
    };
    module.exports = Jeact.extend({
        template: tpl,
        init: function() {
            var e = this;
            this.refs.check.change(function() { e.props.setPraise(e.refs.check.checkbox() ? 1 : 0) }).checkbox()
        },
        value: function() {
            return this.refs.check.checkbox() ? 1 : 0
        }
    })
});;
define("pagelet/original_tag/subsidy/subsidy.js", function(require, exports, module) {
    var tpl = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) {
            __p += "";
            var it = this.props;
            __p += '\n<div class="subsidy_editcell">\n    <div class="form1_checkbox ' + (null == (__t = it.disabled ? "disabled" : "") ? "" : _.escape(__t)) + " " + (null == (__t = it.value ? "checked" : "") ? "" : _.escape(__t)) + '" ref="check">\n        申请号外赠款 ', 1 == it.tip && (__p += '<span data-hovertitle="已达到本月赠款上限金额">(?)</span> '), __p += "\n    </div>\n</div>\n"
        }
        return __p
    };
    module.exports = Jeact.extend({
        template: tpl,
        init: function() {
            var e = this;
            this.refs.check.change(function() { e.props.setSpreadSubsidy(e.refs.check.checkbox() ? 1 : 0) }).checkbox()
        },
        value: function() {
            return this.refs.check.checkbox() ? 1 : 0
        }
    })
});;
define("pagelet/original_tag/original_tag.js", function(require, exports, module) {
    var Tab = require("common/ui/tab.js"),
        tpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item">\n    <td class="signform_dt">原创</td>\n    <td>\n        ' + (null == (__t = this.contentTpl()) ? "" : __t) + "\n    </td>\n</tr>";
            return __p
        },
        contentTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="original_tag" ref="root">\n    <div class="origin-todo" style="display:none;" data-tab="intro" ref="div_intro">\n        <div>\n            <span class="sgray">未声明</span>\n            <span class="sgray">\n                <span>' + (null == (__t = this.props.hint) ? "" : _.escape(__t)) + '</span><i class="gg-timer-tip" data-hoverTitle="' + (null == (__t = this.props.tip) ? "" : _.escape(__t)) + '" data-hoverTitle-html ga="原创声明tips"></i>\n            </span>\n        </div>\n        <div ref="btn_apply" class="apply_create_label" ga="原创声明按钮">\n            声明原创\n        </div>\n    </div>\n    <div style="display:none;" data-tab="result" ref="div_result">\n        <span ref="btn_cancel" class="origin_ready origin_checkbox " ga="取消原创声明">已声明</span>\n        <span ref="btn_modify" class="origin-modify" ga="修改原创声明信息">修改</span>\n        <div class="origin-content">\n            <ul ref="list"></ul>\n        </div>\n        <div widget="praise"></div>\n        <div widget="spread_subsidy"></div>\n    </div>\n</div>\n';
            return __p
        },
        itemTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var i = 0, l = fields.length; l > i; i++) {
                    var item = fields[i];
                    __p += "\n    ", item.value && (__p += '\n        <li>\n            <label for="">' + (null == (__t = item.label) ? "" : _.escape(__t)) + ":</label>\n            <span>" + (null == (__t = item.value) ? "" : _.escape(__t)) + "</span>\n        </li>\n    "), __p += "\n"
                }
                __p += "\n"
            }
            return __p
        },
        Praise = require("pagelet/original_tag/praise/praise.js"),
        SpreadSubsidy = require("pagelet/original_tag/subsidy/subsidy.js"),
        eventCenter = window.listener;
    module.exports = Jeact.extend({
        template: tpl,
        contentTpl: contentTpl,
        itemTpl: itemTpl,
        events: [
            ["click", "[ref=btn_apply]", "doApply"],
            ["click", "[ref=btn_cancel]", "doCancel"],
            ["click", "[ref=btn_modify]", "doModify"]
        ],
        tag: null,
        value: null,
        initWidgets: function() {
            var i = {};
            return this.props.has_praise_permission && (i.praise = new Praise({ disabled: this.props.readonly, setPraise: $.proxy(this, "setPraise"), value: this.props.enable && this.props.has_praise_permission && "" === this.props.praise ? 1 : this.props.praise })), this.props.can_spread_subsidy && (i.spread_subsidy = new SpreadSubsidy({ disabled: 2 == this.props.can_spread_subsidy || !this.props.article_can_change_ad, tip: 2 == this.props.can_spread_subsidy, setSpreadSubsidy: $.proxy(this, "setSpreadSubsidy"), value: "" === this.props.is_spread_subsidy ? "" : this.props.is_spread_subsidy })), i
        },
        init: function() {
            var i = this;
            this.$el.toggle(!!this.props.enable), this.tab = Tab($(), this.refs.div_intro.add(this.refs.div_result));
            var s = this.props.value;
            s && (s = { claim_origin: s.claim_origin ? 1 : 0, exclusive: s.exclusive, pgc_debut: s.pgc_debut ? 1 : 0, debut_url: s.debut_url, debut_mp: "头条号" === s.debut_mp ? "" : s.debut_mp, debut_author: s.debut_author }), eventCenter.on("assistant-change", "trigger-origin", function() { i.doApply(), window.scrollTo($(i.refs.root).offset().top, $(i.refs.root).offset().left) }), this.doUpdate(s), this.props.readonly && this.refs.root.addClass("readonly")
        },
        setPraise: function(i) { this.value && (this.value.praise = i) },
        setSpreadSubsidy: function(i) { this.value && (this.value.spread_subsidy = i) },
        doApply: function() { this.props.dialog.show($.extend({}, this.value), this.doUpdate.bind(this)) },
        doModify: function() { this.props.dialog.show($.extend({ action: "edit" }, this.value), this.doUpdate.bind(this)) },
        doCancel: function() { this.refs.root.hasClass("readonly") || this.doUpdate(null) },
        doUpdate: function(i) {
            if (this.value = i, i) {
                i.praise = this.props.enable && this.props.has_praise_permission && this.widgets.praise.value(), i.spread_subsidy = this.props.enable && this.props.can_spread_subsidy && "" === this.props.spread_subsidy ? 1 : this.props.is_spread_subsidy, this.$el.trigger("origin-confirm");
                var s;
                s = i.exclusive ? { name: "is_toutiao", label: "头条号独家", value: "独家" } : { name: "is_toutiao", label: "头条号首发", value: i.pgc_debut ? "首发" : "非首发" };
                var e = [s, { name: "debut_url", label: "首发链接", value: i.debut_url }, { name: "debut_mp", label: "首发平台", value: i.debut_mp }, { name: "debut_author", label: "作者名称", value: i.debut_author }];
                this.refs.list.html(this.itemTpl({ fields: e })), this.tab("result")
            } else this.$el.trigger("origin-cancel"), this.tab("intro")
        }
    })
});;
define("pagelet/original_tag/original_tag_div.js", function(require, exports, module) {
    var rowTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="edit-cell" style="margin-top:20px;">\n    <div class="edit-label" style="line-height:normal;">原创</div>\n    <div class="edit-input">\n        ' + (null == (__t = this.contentTpl()) ? "" : __t) + "\n    </div>\n</div>";
            return __p
        },
        Tag = require("pagelet/original_tag/original_tag.js");
    module.exports = Tag.extend({ template: rowTpl })
});;
define("pagelet/original_tag/dialog.js", function(require, exports, module) {
    var Stip = require("common/stip/stip.js"),
        Vali = require("common/vali/vali.js"),
        FieldFac = require("pagelet/signform/field.js"),
        Modal = require("common/ui/modal.js"),
        Tab = require("common/ui/tab.js"),
        tpl = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="modal-body" gap="申请原创声明">\n    <div class="apply_create_body">\n        <span class="apply_create_close" ref="btn_close">&#10006;</span>\n        <div class=\'nav_arrow\'>\n            <span class="cur left">\n                原创声明须知\n            </span>\n            <span class="right">\n                原创声明信息\n            </span>\n        </div>\n        <div class="apply_create_slide">\n            <div class="apply_create_notice_content" style="display:none;" data-tab="intro" ref="step_intro">\n                <p>\n                    原创声明功能适用的内容是指作者独立完成创作的作品。\n                </p>\n                <p>\n                    头条号会对申请原创声明的文章进行审核，审核通过后的文章会被打上原创的声明。如果有作者抄袭带有原创声明的文章，头条号会为抄袭的文章带上转载的标记。\n                </p>\n                <p class="space_blank">\n                    如下情形不得为文章申请原创声明，一经发现将永久收回原创功能使用权限，造成严重负面影响的头条号可能被禁言甚至封号。\n                </p>\n                <p class="space_blank">\n                    1. 大篇幅引用他人作品或文章主要内容为他人作品、整合的内容、甚至是完全抄袭的内容；\n                </p>\n                <p>\n                    2. 文章主要篇幅为诸如“法律、法规，国家机关的决议、决定、命令和其他具有立法、行政、司法性质的文件、时事新闻、历法、通用数表、通用表格和公式”等的公共内容；\n                </p>\n                <p>\n                    3. 带有营销性质的内容；\n                </p>\n                <p>\n                    4. 非独家代理的内容；\n                </p>\n                <p>\n                    5. 色情低俗、暴力、谣言等内容；\n                </p>\n                <p>\n                    6. 违反法律法规、政策及公序良俗、社会公德的内容；\n                </p>\n                <p>\n                    7. 干扰头条号正常运营和侵犯其他作者合法权益的内容；\n                </p>\n                <p class="space_blank">\n                    头条号鼓励用户发表原创文章，尊重原创作者的权益。\n                </p>\n                <div class="edit-btns">\n                    <button type="button" class="edit-btn cancel" ref="btn_close" ga="取消">取消</button>\n                    <button type="button" class="edit-btn next" ref="btn_next" ga="下一步">下一步</button>\n                </div>\n            </div>\n            <div class="apply_create_notice_content" style="display:none;" data-tab="form" ref="step_form">\n                <ul class="apply_create_form">\n                    <li style="margin:0">\n                        <label>头条号独家</label>\n                        <div class="edit-input apply_create_first">\n                            <div data-tab="only" ref="tab_only" class="form1_checkbox" ga="是独家">独家</div>\n                        </div>\n                        <div data-tab="unonly"  ref="tab_unonly" class="form1_checkbox" ga="非独家">非独家</div>\n                    </li>\n                    <li ref="tabs_first">\n                        <label>头条号首发</label>\n                        <div class="edit-input apply_create_first">\n                            <div data-tab="mp" ref="tab_mp" class="form1_checkbox" ga="是首发">首发</div>\n                        </div>\n                        <div data-tab="third"  ref="tab_third" class="form1_checkbox" ga="非首发">非首发</div>\n                    </li>\n                </ul>\n                <ul class="apply_create_form" style="display:none;" data-tab="mp" ref="type_mp">\n                    <li class="origin_mp">\n                        <label>平台名称</label><input ref="debut_mp" name="debut_mp" type="text" disabled/>\n                    </li>\n                    <li class="origin_mp">\n                        <label>作者</label><input ref="debut_author" name="debut_author" type="text" disabled/>\n                    </li>\n                </ul>\n                <ul class="apply_create_form" style="display:none;" data-tab="third" ref="type_third"></ul>\n                <div class="edit-btns">\n                    <button type="button" class="edit-btn pre" ref="btn_prev" ga="上一步">上一步</button>\n                    <button type="button" class="edit-btn ok" ref="btn_submit" ga="确定">确定</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';
            return __p
        },
        inputTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<li className="origin_other">\n    <label>' + (null == (__t = label) ? "" : _.escape(__t)) + '</label>\n    <input type="text" placeholder="' + (null == (__t = placeholder) ? "" : _.escape(__t)) + '">\n</li>\n';
            return __p
        };
    module.exports = Modal.extend({
        contentTpl: tpl,
        className: "original_dialog",
        events: [
            ["click", "[ref=btn_close]", "hide"],
            ["click", "[ref=btn_prev]", "doPrev"],
            ["click", "[ref=btn_next]", "doNext"],
            ["click", "[ref=btn_submit]", "doSubmit"]
        ],
        stepTab: null,
        thirdFields: null,
        thirdVali: null,
        callback: $.noop,
        init: function() {
            var t = this;
            this.superProto_.init.call(this), this.stepTab = Tab($(), this.refs.step_intro.add(this.refs.step_form)), this.stepTab("intro"), this.onlyTab = Tab(this.refs.tab_only.add(this.refs.tab_unonly), function(n) { t.refs.tabs_first.toggle("only" !== n), "only" === n && t.typeTab("mp") }), this.typeTab = Tab(this.refs.tab_mp.add(this.refs.tab_third), this.refs.type_mp.add(this.refs.type_third)), this.refs.debut_mp.val("头条号"), this.refs.debut_author.val(this.props.media_name), this.thirdFormInit()
        },
        thirdFormInit: function() {
            this.fields = FieldFac([
                ["url", { tpl: inputTpl, label: "首发链接", require: "首发链接", name: "debut_url", placeholder: "文章首发平台链接" }],
                ["input", { tpl: inputTpl, label: "首发平台", require: "首发平台", name: "debut_mp", placeholder: "文章首发平台名称" }],
                ["input", { tpl: inputTpl, label: "作者名称", require: "作者名称", name: "debut_author", placeholder: "在该平台的作者名称" }]
            ]), this.refs.type_third.append(this.fields.map(function(t) {
                return t.jbox[0]
            })), this.thirdVali = Vali($(this.fields.map(function(t) {
                return t.jvali[0]
            })))
        },
        show: function(t, n) { this.callback = n || $.noop, this.stepTab("edit" === t.action ? "form" : "intro"), this.onlyTab(0 == t.exclusive ? "unonly" : "only"), this.typeTab(0 == t.pgc_debut ? "third" : "mp"), this.fields.forEach(function(n) { n.jvali.val(t[n.name] || "").trigger("change") }), this.superProto_.show.call(this) },
        doPrev: function() { this.stepTab("intro") },
        doNext: function() { this.stepTab("form") },
        doSubmit: function() {
            var t = this;
            "mp" === t.typeTab.currentValue ? (t.callback({ claim_origin: 1, pgc_debut: 1, exclusive: "only" === this.onlyTab.currentValue ? 1 : 0, debut_author: t.refs.debut_author.val() }), t.hide()) : t.thirdVali(function(n, e, a) {
                return n ? void Stip.alert(n) : (a = $.so(a), a.claim_origin = 1, a.pgc_debut = 0, a.exclusive = "only" === t.onlyTab.currentValue ? 1 : 0, t.callback(a), void t.hide())
            })
        }
    })
});;
define("pagelet/optimize_helper/optimize.js", function(e, s, d) {
    d.exports = function(e, s) {
        function d() { l.show(), t.hasClass("selected") || t.addClass("selected"), a.isSelected = !0 }

        function i() { t.hasClass("selected") && (t.removeClass("selected"), a.isSelected = !1), l.hide() }
        var l = $(".j-optimize"),
            t = $(".gg-optimize-radio"),
            a = { isSelected: !1 };
        return s.is_optimize_opened ? (e.value ? d() : i(), e.$el && (e.$el.on("origin-confirm", d), e.$el.on("origin-cancel", i))) : i(), s.pgc_id && s.add_third_title ? (t.hasClass("selected") || t.addClass("selected"), a.isSelected = !0) : s.pgc_id && !s.add_third_title && (t.hasClass("selected") && t.removeClass("selected"), a.isSelected = !1), s.pgc_id && !s.is_draft ? (t.addClass("disabled"), a) : (t.on("click", function() {
            var e = $(this);
            e.hasClass("selected") ? (e.removeClass("selected"), a.isSelected = !1) : (e.addClass("selected"), a.isSelected = !0)
        }), a)
    }
});;
define("pagelet/title_check/title_check.js", function(t, e, i) {
    var n = $.noop,
        o = 20,
        s = window.listener;
    n.prototype = {
        init: function(t) { this.maxCheck(t.el), this.resetParentPosition(t.el), this.render(t.el, t), this.eventBind(t), this.checkTitleLength(t), this.eventInit(t.el, t) },
        dataInit: function() { this.$tip = null },
        eventInit: function(t, e) {
            var i = this;
            s.on("title_check", "resetTip", function() { i.resetTip(t, e) })
        },
        checkTitleLength: function(t) {
            var e = t.el;
            this.resetTip(e, t)
        },
        eventBind: function(t) {
            var e = t.el,
                i = this,
                n = null,
                o = 0;
            e && (e.bind("blur", function() { i.checkTitleLength(t) }), e.bind("keyup", function() { clearTimeout(n), 0 == o ? n = setTimeout(function() { i.checkTitleLength(t) }, 20) : o = 0 }), e.bind("paste", function() { clearTimeout(n), o = 1, n = setTimeout(function() { i.checkTitleLength(t) }, 10) }))
        },
        maxCheck: function(t) {
            var e = t.attr("maxlength");
            e && t.removeAttr("maxlength")
        },
        render: function(t, e) {
            var i, n = t.parent();
            n.append('<span class="title_tip">0/50</span>'), i = n.find(".title_tip"), i.css(this.computePosition(t, e)), t.css({ "padding-right": "55px" })
        },
        resetParentPosition: function(t) {
            var e = t.parent(),
                i = e.css("position");
            "absolute" != i && e.css({ position: "relative" })
        },
        resetTip: function(t, e) {
            var i = t.val().length,
                n = i + "/" + e.max,
                o = t.parent(),
                s = o.find(".title_tip");
            s.html(n), i > e.max ? s.addClass("title_red") : i < e.min && 0 != i ? s.addClass("title_red") : s.removeClass("title_red")
        },
        computePosition: function(t) {
            var e = {},
                i = {},
                n = parseInt(t.css("padding-top")),
                s = parseInt(t.css("padding-bottom"));
            return e.left = t.position().left, e.top = t.position().top, i.right = 20, i.top = (t.height() + n + s) / 2 + e.top - o / 2, i
        }
    }, i.exports = n
});;
define("pagelet/figure/figure.js", function(e, i, t) {
    var a = e("pagelet/figure/figureCover.js").create(),
        l = e("pagelet/popalert/popalert.js"),
        r = e("pagelet/figure/product.js"),
        n = e("pagelet/figure/dataParser.js"),
        o = e("pagelet/figure/service.js"),
        s = e("common/util/util.js");
    e("pagelet/tabNewGuide/tabNewGuide.js"), e("pagelet/figure/plus.js");
    var d = e("common/vali/vali.js");
    e("common/stip/stip.js");
    var u = e("pagelet/original_tag/original_tag_div.js"),
        g = e("pagelet/original_tag/dialog.js"),
        c = e("pagelet/figure/double_title/title.js"),
        p = e("pagelet/optimize_helper/optimize.js"),
        h = e("pagelet/title_check/title_check.js"),
        f = e("pagelet/articlead/articlead.js");
    t.exports = Pagelet.extend({
        el: ".j_pagelet_figure",
        events: { "focus #figure-title": "onTitleFocus", "blur #figure-title": "onTitleBlur", "click .gallery-sale-add": "onSaleAdd" },
        init: function(e) {
            var i;
            this.options = e, this.figureDesc = $.extend(!0, {}, e), this.$el = $(this.el), this.$upload = this.$el.find(".j_figure_upload"), this.$itemWrap = this.$el.find(".j_pagelet_figure_image"), this.$itemList = this.$itemWrap.find(".j_pagelet_item_list"), this.$title = this.$el.find("#figure-title"), this.$cancel = this.$el.find("#cancel"), this.$submit = this.$el.find("#submit"), this.$store = this.$el.find("#store"), this.$tag = this.$el.find("#channel_tags"), this.$alert = this.$el.find(".alert"), this.$figure_cover_radio = this.$el.find(".j_figure_cover_radio"), this.$figure_cover_img = this.$el.find(".j_figure_cover_img"), this.editor = UE.getEditor("editor"), this.$autoDiagnosis = this.$el.find(".gg-auto-diagnosis-radio"), this.noop = $.noop, this.postContent = n.postTemplate, this.hasProductPermission = e.has_product_permission, i = this.postContent, i.pgc_id = e.pgc_id ? e.pgc_id : "", i.is_draft = e.is_draft, i.content = e.content ? e.content : "", i.title = e.title ? e.title : "", i.pgc_feed_covers = e.pgc_feed_covers, i.gallery_info = e.gallery_info[0] ? e.gallery_info[0].list : [], i.gallery_data = {}, this.hasShowGallery = i.gallery_info.length ? !0 : !1, this.fileNumber = 0, this.galleryAmount = 0, this.prev_title = "", this.judgeStatus() ? (this.renderGalleryTemplate(), this.renderCoverTemplate(), this.$itemWrap.slideDown()) : (this.renderEntryTemplate(), this.entryTemplateUploaderEvent()), this.dragModal(), this.cancelGallery(), this.submitGallery(), this.storeGallery(), this.addGalleryUploaderEvent(), this.bindHover(), this.$el.hoverTitle(), this.initOptimizeHelper(e), this.initDoubleTitle(e), this._autoDiagnosis(), this.articleAd = new f(this.$el.find(".j-article-ad"), e), this.checkTitle = new h, this.checkTitle.init({ min: 5, max: 50, el: this.$title }), $(".pagelet-figure-title-input .title_tip").css({ right: 12, top: 11 }), a.init(e.has_set_external_cover_permission)
        },
        dficConvertCDN: function(e, i, t) {
            $.ajax({ type: "GET", url: "/article/get_dongfangIC_uri/", data: e }).done(function(e) {
                return e ? e.message && "error" == e.message ? (o.errorTip(e.reason + "，请重试", 3e4), void t.close()) : (i(e), void t.close()) : (o.errorTip("网络错误，请重试", 3e4), void t.close())
            }).fail(function() { o.errorTip("网络错误，请重试", 3e4) })
        },
        onTitleFocus: function() { this.prev_title = this.$title.val() },
        onTitleBlur: function() {
            var e = this,
                i = this.$title.val();
            i !== this.prev_title && $.ajax({ type: "GET", url: "/check_title/", data: { title: i } }).done(function(i) { "success" === i.message && (1 === i.status ? o.errorTip("你的内容涉嫌标题夸张，建议修改，继续发表会被限制推荐量。", 3e4) : e.$alert.slideUp()) })
        },
        _autoDiagnosis: function() {
            return this.judgeStatus() && !this.postContent.is_draft ? void this.$autoDiagnosis.addClass("disabled") : (this.judgeStatus() || this.$autoDiagnosis.hasClass("selected") || this.$autoDiagnosis.addClass("selected"), void this.$autoDiagnosis.on("click", function() {
                var e = $(this);
                e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
            }))
        },
        isFromDiagnosis: function() {
            var e = window.location.href,
                i = "from_diagnosis=";
            return -1 !== e.indexOf(i) && e.split(i)[1] ? !!Number(e.split(i)[1].charAt(0)) : !1
        },
        initOptimizeHelper: function(e) {
            var i, t = new g({ media_name: e.media_name });
            e.claim_origin && (i = e);
            var a = this.originalTag = new u({ readonly: !!e.after_pass_modify, enable: e.claim_origin_permission, has_praise_permission: 0, praise: e.praise, tip: "非原创恶意声明原创，将受到平台严厉惩罚。", hint: "（独家、首发的内容将会获得更高的收益和推荐）", dialog: t, value: i });
            $("#original_tag_holder").replaceWith(a.$el), this.OptimizeHelper = p(a, e)
        },
        initDoubleTitle: function(e) { this.doubleTitle = c(this.originalTag, e) },
        bindHover: function() {
            var e = this.$el;
            e.find(".uploadify").lightHover()
        },
        judgeStatus: function() {
            var e = this.options;
            return e.type = e.pgc_id ? 1 : 0, e.type
        },
        renderEntryTemplate: function() {
            var e = n.templateEntry,
                i = e({}),
                t = this.$upload;
            this.$figure_cover_radio.filter('[data-type="auto"]').trigger("click"), t.append(i)
        },
        entryTemplateSlideUp: function() {
            var e = this.$upload;
            e.slideUp(function() { e.css({ height: "1px", opacity: "0", display: "block", "z-index": "-1", left: "-3000px", top: "-3000px", position: "absolute" }) })
        },
        entryTemplateSlideDown: function() {
            var e = this.$upload;
            e.slideDown()
        },
        entryTemplateUploaderEvent: function() {
            var e = this,
                i = this.$el,
                t = i.find("#file_upload");
            t.on("click", function() {
                var i = new UE.ui.Dialog({ iframeUrl: "/static/v2/pgc_ueditor/dialogs/images/images.html?v=1.0?" + Math.random(), className: "", editor: e.editor, title: "图片", name: "insertimage", cssRules: "width:664px;height:604px;" });
                i.multiple = !0, i.tab = 0, i.render(), i.open(), e.editor.registerCommand("insertimage", {
                    execCommand: function(t, a) {
                        for (var l = 0, r = a.length; r > l; l++) e.onAppendUploadSart(JSON.stringify({ url: a[l].src, original: a[l].alt }), "");
                        i.close()
                    }
                }), e.editor.registerCommand("inserticnew", {
                    execCommand: function(t, a) {
                        for (var l = 0, r = a.length; r > l; l++) e.dficConvertCDN({ ic_id: a[l].id, term: a[l].term, position: a[l].position }, function(i) { e.onAppendUploadSart(JSON.stringify({ url: "//p3.pstatp.com/large/" + i, original: i }), i) }, i)
                    }
                }), e.$el.find("#addButton").addClass("uploadify").css({ height: "35px", width: "100px", opacity: "1" })
            })
        },
        addGalleryUploaderEvent: function() {
            var e = this,
                i = this.$el,
                t = i.find("#addButton");
            t.on("click", function() {
                var i = new UE.ui.Dialog({ iframeUrl: "/static/v2/pgc_ueditor/dialogs/images/images.html?v=1.0?" + Math.random(), className: "", editor: e.editor, title: "图片", name: "insertimage", cssRules: "width:660px;height:600px;" });
                i.tab = 0, i.multiple = !0, i.render(), i.open(), e.editor.registerCommand("insertimage", {
                    execCommand: function(t, a) {
                        for (var l = 0, r = a.length; r > l; l++) e.onAppendUploadSart(JSON.stringify({ url: a[l].src, original: a[l].alt }), "");
                        i.close()
                    }
                }), e.editor.registerCommand("inserticnew", {
                    execCommand: function(t, a) {
                        for (var l = 0, r = a.length; r > l; l++) e.dficConvertCDN({ ic_id: a[l].id, term: a[l].term }, function(i) { e.onAppendUploadSart(JSON.stringify({ url: "//p3.pstatp.com/large/" + i, original: i }), i) }, i)
                    }
                })
            })
        },
        renderGalleryTemplate: function() {
            var e = this.postContent.gallery_info;
            e = n.galleryDataGenrate(e), this.appendGalleryView(e), this.appendGalleryModel(e), this.batchBindItemEvent(e)
        },
        renderCoverCheckedOption: function() {
            var e = this.postContent.pgc_feed_covers.length,
                i = this.$figure_cover_radio.filter('[data-type="single"]'),
                t = this.$figure_cover_radio.filter('[data-type="multi"]'),
                a = this.$figure_cover_radio.filter('[data-type="auto"]');
            return e ? void(1 === e ? i.trigger("click") : t.trigger("click")) : void(this.galleryAmount ? this.galleryAmount >= 1 && this.galleryAmount < 3 ? i.trigger("click") : t.trigger("click") : a.trigger("click"))
        },
        renderCoverTemplate: function() {
            var e = this,
                i = e.postContent.pgc_feed_covers,
                t = i.length;
            this.renderCoverCheckedOption(), t > 0 && e.$figure_cover_img.each(function(e, a) {
                var l = "",
                    r = i[e],
                    n = "//p3.pstatp.com/" + (r.uri === r.origin_uri ? "list" : "large") + "/" + r.uri;
                return r && (l = '<img src="' + s.e(n) + '" _src="' + s.e(r.uri) + '" _origin_uri="' + s.e(r.origin_uri) + '">'), $(a).prepend(l), $(a).find(".figure-cover-img-modify").show(), 1 === t ? !1 : void 0
            })
        },
        appendGalleryModel: function(e) {
            for (var i = this.postContent.gallery_data, t = 0; t < e.length; t++) i[e[t].gallery_id] = e[t], this.options.ic_uri_list && -1 != this.options.ic_uri_list.indexOf(e[t].uri) && (i[e[t].gallery_id].ic_uri = e[t].uri)
        },
        galleryTemplateSlideDown: function() {
            var e = this.$itemWrap;
            e.slideDown()
        },
        galleryTemplateSlideUp: function() {
            var e = this.$itemWrap;
            e.slideUp()
        },
        switchToGallery: function() {
            var e = this.$itemWrap;
            this.hasShowGallery = !0, this.entryTemplateSlideUp(), e.slideDown()
        },
        appendGalleryView: function(e) {
            var i = this.$itemList;
            i.append(n.parseItem({ gallery_info: e, permission: this.hasProductPermission })), this.galleryAmount = this.galleryAmount + e.length, this.updateGalleryAmount(), this.renderCoverCheckedOption()
        },
        updateGalleryView: function(e, i) {
            var t, a, l = '<img src="' + s.e(e.url) + '" data-uri="' + s.e(e.uri) + '" >',
                r = this.$itemList;
            t = r.find("#gallery_" + i), a = t.find(".gallery-img"), a.prepend(l), t.find(".gallery-sale-add").html("插入商品"), a.find("img")[0].onload = function() { a.removeClass("gallery-img-loading") }, a.find("img")[0].onerror = function() { a.removeClass("gallery-img-loading") }
        },
        deleteGalleryView: function(e) {
            var i, t = this.$itemList;
            i = t.find("#gallery_" + e), i.remove()
        },
        updateGalleryModel: function(e, i, t) {
            var a = this.postContent.gallery_data;
            a[i] = { url: e.url, ic_uri: t, uri: e.original, web_uri: e.original, url_pattern: "{{image_domain}}", gallery_id: i }
        },
        onAppendUploadSart: function(e, i) {
            var t = this.hasShowGallery,
                a = n.genrateRandomCode(),
                l = [];
            !t && this.switchToGallery(), l.push({ gallery_id: a }), this.appendGalleryView(l), this.bindItemEvent(a);
            var r = a,
                o = JSON.parse(e);
            this.fileNumber == this.galleryAmount && delete this.fileNumber, this.updateGalleryView(o, r), this.updateGalleryModel(o, r, i)
        },
        onUploadSuccess: function(e, i, t, a) {
            var l = JSON.parse(e);
            this.fileNumber == this.galleryAmount && delete this.fileNumber, this.updateGalleryView(l, t), this.updateGalleryModel(l, t, a)
        },
        updateGalleryAmount: function() {
            var e = this.$el,
                i = e.find("#addAmount"),
                t = "已经添加" + this.galleryAmount + "张图片";
            i.html(t)
        },
        batchBindItemEvent: function(e) {
            for (var i = 0; i < e.length; i++) this.bindItemEvent(e[i].gallery_id), this.bindImageLoadEvent(e[i].gallery_id)
        },
        bindImageLoadEvent: function(e) {
            var i = this.$itemList,
                t = i.find("#gallery_" + e),
                a = t.find(".gallery-img"),
                l = a.find("img")[0];
            l && (l.onload = function() { a.removeClass("gallery-img-loading") }, l.onerror = function() { a.removeClass("gallery-img-loading") })
        },
        bindItemEvent: function(e) {
            var i = this.$itemList,
                t = i.find("#gallery_" + e),
                a = i.find("#modify_file_" + e),
                l = 1 == t.attr("event") ? !0 : !1,
                r = this,
                n = function(e, i, a, l) { t.attr("event", "1"), r.onUploadSuccess(e, i, a, l) };
            l || (a.addClass("uploadify").css({ height: "30px", width: "22px", "z-index": "10" }).attr("data-title", "更换图片").on("click", function() {
                var i = new UE.ui.Dialog({ iframeUrl: "/static/v2/pgc_ueditor/dialogs/images/images.html?v=1.0?" + Math.random(), className: "", editor: r.editor, title: "图片", name: "insertimage", cssRules: "width:660px;height:600px;" });
                i.tab = 0, i.multiple = !1, i.render(), i.open(), r.editor.registerCommand("insertimage", { execCommand: function(t, a) { n(JSON.stringify({ url: a[0].src, original: a[0].alt }), !0, e, ""), i.close() } }), r.editor.registerCommand("inserticnew", { execCommand: function(t, a) { r.dficConvertCDN({ ic_id: a.id, term: a.term }, function(i) { n(JSON.stringify({ url: "//p3.pstatp.com/large/" + i, original: i }), !0, e, i) }, i) } })
            }), r.bindItemDelEvent(t, e))
        },
        bindItemDelEvent: function(e, i) {
            var t = this.postContent.gallery_data,
                a = this;
            e.find(".gallery-del-icon").bind("click", function() { e.slideUp(), a.galleryAmount--, a.updateGalleryAmount(), a.renderCoverCheckedOption(), setTimeout(function() { a.deleteGalleryView(i), delete t[i] }, 2e3) })
        },
        dragModal: function() {
            var e = this.$itemList;
            e.sortable({ placeholder: "ui-state-highlight", disabled: !1, handle: ".gallery-sort-icon" })
        },
        cancelGallery: function() {
            var e = this.$cancel;
            e.bind("click", function() { document.location.href = "/" })
        },
        figureCoverInfo: function() {
            var e = this.$el.find(".j_figure_cover_radio.selected").data("type"),
                i = this.$el.find(".j_figure_cover_img img"),
                t = this.$el.find(".j_figure_cover_single img"),
                a = [],
                l = null,
                r = t.length,
                n = i.length;
            if (1 == r && "single" == e) l = { uri: t[0].getAttribute("_src"), origin_uri: t[0].getAttribute("_origin_uri") }, a.push(l);
            else if (3 == n && "multi" == e)
                for (var o = i.length, s = 0; o > s; s++) l = { uri: i[s].getAttribute("_src"), origin_uri: i[s].getAttribute("_origin_uri") }, a.push(l);
            return JSON.stringify(a)
        },
        submitGallery: function() {
            var e, i, t = this.$submit,
                a = this.$itemList,
                r = this.$title,
                s = this.$tag,
                u = this.postContent,
                g = this.postContent.gallery_data,
                c = this;
            t.bind("click", function() {
                d.validBrowser(window.location.pathname + window.location.search, function(d, p) {
                    if (!d) return void l("alert", p);
                    e = n.parseGalleryInfo(g, a), i = n.parseContent({ list: e }), u.title = r.val(), u.content = i, u.tag = s.val(), u.article_ad_type = c.articleAd.getArticleAdType(), u.save = 1, u.recommend_auto_analyse = c.$autoDiagnosis.is(".selected") ? 1 : 0, u.from_diagnosis = c.isFromDiagnosis() ? 1 : 0, u.gallery_info = e, u.pgc_feed_covers = c.figureCoverInfo(), $.extend(u, c.originalTag.value), c.OptimizeHelper.isSelected && (u.add_third_title = 1);
                    var h = c.doubleTitle.postSlaveData.length;
                    if (h) {
                        if (!c.doubleTitle.validate()) return submit_lock = !1, !1;
                        if (c.doubleTitle.postSlaveData[0].title.trim() === u.title) return l("alert", "主标题和副标题不能相同，请修改"), submit_lock = !1, !1
                    }
                    0 != h && c.doubleTitle.postSlaveData[0].title && c.doubleTitle.postSlaveData[0].title.length && $.extend(u, { slave_items: JSON.stringify(c.doubleTitle.postSlaveData) });
                    var f = [];
                    for (var m in g) g[m].ic_uri && f.push(g[m].ic_uri);
                    $.extend(u, { ic_uri_list: f });
                    var _ = t;
                    o.submitCheck(u, c.figureDesc) && (o.checkFigureNote(e) ? o.ajax(o.url, { method: "post", data: u }, _) : o.dialog(function() { o.ajax(o.url, { method: "post", data: u }, _) }))
                })
            })
        },
        storeGallery: function() {
            var e, i, t = this.$store,
                a = this.$itemList,
                r = this.$title,
                s = this.$tag,
                u = this.postContent,
                g = this.postContent.gallery_data,
                c = this;
            t.bind("click", function() {
                d.validBrowser(window.location.pathname + window.location.search, function(d, p) {
                    if (!d) return void l("alert", p);
                    e = n.parseGalleryInfo(g, a), i = n.parseContent({ list: e }), u.title = r.val(), u.content = i, u.tag = s.val(), u.article_ad_type = c.articleAd.getArticleAdType(), u.save = 0, u.recommend_auto_analyse = c.$autoDiagnosis.is(".selected") ? 1 : 0, u.from_diagnosis = c.isFromDiagnosis() ? 1 : 0, $.extend(u, c.originalTag.value), c.OptimizeHelper.isSelected && (u.add_third_title = 1);
                    var h = c.doubleTitle.postSlaveData.length;
                    if (h) {
                        if (!c.doubleTitle.validate()) return submit_lock = !1, !1;
                        if (c.doubleTitle.postSlaveData[0].title.trim() === u.title) return l("alert", "主标题和副标题不能相同，请修改"), submit_lock = !1, !1
                    }
                    0 != h && c.doubleTitle.postSlaveData[0].title && c.doubleTitle.postSlaveData[0].title.length && $.extend(u, { slave_items: JSON.stringify(c.doubleTitle.postSlaveData) });
                    var f = [];
                    for (var m in g) g[m].ic_uri && f.push(g[m].ic_uri);
                    $.extend(u, { ic_uri_list: f }), u.gallery_info = e, u.pgc_feed_covers = c.figureCoverInfo(), o.storeCheck(u, c.figureDesc) && c.postStore(u, t)
                })
            })
        },
        postStore: function(e, i) { o.ajax(o.url, { method: "post", data: e }, i, "store") },
        onSaleAdd: function(e) {
            var i = $(e.target),
                t = i.data("galleryid");
            r.open(this.postContent.gallery_data[t], function(e) { i.html(e.title) })
        }
    })
});;
define("pagelet/force_register/force_register.js", function(e, i, r) {
    var t = e("pagelet/mobile_register/mobile_inherit.js");
    r.exports = Pagelet.extend($.extend(t, { action: { submit: "/bind_mobile/" }, page: "force_register" }))
});;
define("pagelet/forget/forget.js", function(t) {
    var o = t("common/util/util.js"),
        n = t("common/stip/stip.js"),
        a = t("common/vali/vali.js"),
        e = t("pagelet/signform/field.js"),
        i = $("#pagelet_forget").nodes(),
        s = [
            ["email", { label: "登录邮箱", hint: "" }],
            ["name", { hint: "", func: null }]
        ],
        f = e(s);
    i.start.after(f[1].jbox), i.start.after(f[0].jbox);
    var l = a($($.map(f, function(t) {
        return t.jvali.toArray()
    })));
    i.submit.click($.loadDone(function(t) { l(function(a, e, i) { a ? (t(), $("body").animate({ scrollTop: e.offset().top - 10 }, 200, function() { e.focus() })) : o.ajax("/forget_password/", i, function(o, a) { t(), n.popupTip({ status: 0 === o, msg: a }) }) }) }))
});;
define("pagelet/header/header.js", function(require, exports, module) {
    var MESSAGE_LIST_TEMPLATE = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                var len = data.cnt;
                len >= 5 && (len = 5), __p += "\n";
                for (var i = 0; len > i; i++) {
                    var item = data[i];
                    __p += '\n	<li class="sys-msg-item">\n		<div class="sys-msg-info"><a class="sys-msg-viewer" href="/message/#inform">' + (null == (__t = item.content) ? "" : _.escape(__t)) + '</a>\n		</div>\n		<div class="sys-msg-time">' + (null == (__t = item.create_time) ? "" : _.escape(__t)) + "</div>\n	</li>\n"
                }
                __p += "\n"
            }
            return __p
        },
        Vali = require("common/vali/vali.js");
    module.exports = Pagelet.extend({
        el: "#pagelet-header",
        events: { "click $sys_msg_inform": "onSysMsgInformClick", "click $sys_msg_subscribe": "onSysMsgSubscribeClick", "click $sys_msg_collect": "onSysMsgCollectClick", "click $sys_msg_comment": "onSysMsgCommentClick", "click $sys_msg_retransmit": "onSysMsgRetransmitClick", "click .sys-msg-viewer": "onSysMsgViewerClick", "mouseenter $sys_msg_wrapper": "onSysMsgWrapperMouseEnter", "mouseleave $sys_msg_wrapper": "onSysMsgMouseLeave", "click $sys_msg_wrapper": "onSysMsgWrapperClick", "mouseenter $sys_msg_entity": "onSysMsgEntityMouseEnter", "mouseleave $sys_msg_entity": "onSysMsgMouseLeave", "click .j_menu_new_article": "onPostClick", "click .j_menu_new_video": "onPostVideoClick", "click .j_menu_new_figure": "onPostFigureClick", "mouseenter .more-block": "onPostMouseEnter", "mouseleave .more-block": "onPostMouseLeave", "mouseenter $post_box_list": "onPostMouseEnter", "mouseleave $post_box_list": "onPostMouseLeave", "click $sys_msg_entity": "onSysMsgEntityClick", "click .sns_account": "forceStatic", "click $sys_msg_close": "onSysMsgCloseClick" },
        init: function(t) {
            var s = this;
            if (this.from_pgc = 1, this.count = 5, this.openMessagePanel = !1, this.max_cursor = 0, this.improtantInformFlag = !1, this.oneday = 864e5, this.onehour = 36e5, this.oneminute = 6e4, this.sys_local_timegap = !1, this.new_inform_num = $(this.el).find(".new_inform_num"), this.new_comment_num = $(this.el).find(".new_comment_num"), this.new_subscribe_num = $(this.el).find(".new_subscribe_num"), this.new_collect_num = $(this.el).find(".new_collect_num"), this.new_retransmit_num = $(this.el).find(".new_retransmit_num"), this.informNum = this.stringToNum(this.new_inform_num), this.commentNum = this.stringToNum(this.new_comment_num), this.subscribeNum = this.stringToNum(this.new_subscribe_num), this.collectNum = this.stringToNum(this.new_collect_num), this.retransmitNum = this.stringToNum(this.new_retransmit_num), this.typeArray = [2, 4, 5, 6, 43, 72, 84], t._sys_time && t._local_time) {
                var e = t._sys_time.split("-"),
                    n = new Date(e[0], e[1] - 1, e[2], e[3], e[4], e[5]).getTime();
                n && (this.sys_local_timegap = n - t._local_time)
            }
            this.$dom.sys_msg_sum && (this.getNewMessageCount(), this.showMsgSum(), this.toggleMsgNum(), this.getNewImprotantInformCount(), this.hashChange(), $(window).on("hashchange", this.hashChange.bind(s))), this.initHeaderNav()
        },
        onPostClick: function() { Vali.validBrowser("/core/article/new_article/", function() { window.location.href = "/core/article/new_article/" }) },
        onPostVideoClick: function() { Vali.validBrowser("/profile_v2/pure-video", function() { window.location.href = "/profile_v2/pure-video" }) },
        onPostFigureClick: function() { Vali.validBrowser("/profile_v2/figure", function() { window.location.href = "/profile_v2/figure" }) },
        onPostMouseEnter: function() { this.$dom.post_box_list.show(), clearTimeout(this.postTimer) },
        onPostMouseLeave: function() {
            var t = this;
            this.postTimer && clearTimeout(this.postTimer), t.postTimer = setTimeout(function() { t.$dom.post_box_list.hide() }, 100)
        },
        onSysMsgEntityMouseEnter: function() { this.improtantInformFlag || this.$dom.sys_msg_wrapper.show() },
        onSysMsgMouseLeave: function() { this.openMessagePanel = !1, this.$dom.sys_msg_wrapper.hide() },
        onSysMsgEntityClick: function() { window.location.href = "/message/#inform" },
        onSysMsgWrapperMouseEnter: function() { this.improtantInformFlag || (this.openMessagePanel = !0, this.$dom.sys_msg_wrapper.show()) },
        onSysMsgWrapperClick: function() { this.openMessagePanel = !1, this.$dom.sys_msg_wrapper.hide() },
        getNewMessageCount: function() {
            var t = {};
            $.ajax({
                url: "//www.toutiao.com/dongtai/notification/count/?include=2,4,5,6,72,84&detail=1",
                type: "GET",
                dataType: "jsonp",
                context: this,
                data: t,
                success: function(t) {
                    if ("success" == t.message) {
                        var s = t.data.update_count;
                        if (s > 0) {
                            var e = t.data.detail_counts;
                            this.parseObjectToNum(e), this.getHashVal(), this.informNum > 99 && (this.informNum = "99+"), this.subscribeNum > 99 && (this.subscribeNum = "99+"), this.collectNum > 99 && (this.collectNum = "99+"), this.retransmitNum > 99 && (this.retransmitNum = "99+"), this.new_inform_num.text(this.informNum), this.new_subscribe_num.text(this.subscribeNum), this.new_collect_num.text(this.collectNum), this.new_retransmit_num.text(this.retransmitNum), this.toggleMsgNum(), this.showMsgSum()
                        }
                        this.getNewCommentCount()
                    }
                }
            })
        },
        getNewCommentCount: function() {
            var t = this;
            newCommentCountUrl = "//mp.toutiao.com/notification/notification_count/", $.getJSON(newCommentCountUrl).done(function(s) {
                if ("success" == s.message) {
                    var e = s.data.detail_counts[43],
                        n = parseInt($(".sys-msg-sum").text() || 0) + e;
                    e > 99 && (e = "99+"), n > 99 && (n = "99+"), 0 != e && t.new_comment_num.text(e).show(), 0 != n && $(".sys-msg-sum").text(n).show()
                }
            })
        },
        convertTimeFormat: function(t) {
            var s = 0;
            this.sys_local_timegap !== !1 && (s = (new Date).getTime() + this.sys_local_timegap);
            for (var e = 0; e < t.length; e++) {
                var n = new Date(1e3 * t[e].create_time),
                    i = "",
                    o = s - n;
                if (s && o < this.oneday) switch (!0) {
                    case o <= this.oneminute:
                        i = "1分钟内";
                        break;
                    case o < this.onehour:
                        i = parseInt(o / this.oneminute) + "分钟前";
                        break;
                    case o < this.oneday:
                        i = parseInt(o / this.onehour) + "小时前"
                } else {
                    var m = n.getFullYear(),
                        a = n.getMonth() + 1,
                        r = n.getDate(),
                        u = n.getHours(),
                        c = n.getMinutes();
                    i = m + "-" + (a > 9 ? a : "0" + a) + "-" + (r > 9 ? r : "0" + r) + " " + (u > 9 ? u : "0" + u) + ":" + (c > 9 ? c : "0" + c)
                }
                t[e].create_time = i
            }
        },
        parseObjectToNum: function(t) {
            var s = [];
            for (var e in t) s.push(parseInt(e));
            this.setAllTypeNumZero();
            for (var n = 0, i = s.length; i > n; n++) this.parseTypeNum(t, s[n])
        },
        setAllTypeNumZero: function() { this.informNum = 0, this.subscribeNum = 0, this.collectNum = 0, this.retransmitNum = 0, this.commentNum = 0 },
        parseTypeNum: function(t, s) {
            var e = 0,
                n = this.typeArray;
            switch (s) {
                case n[0]:
                    e = t[n[0]], this.subscribeNum = parseInt(e), this.new_subscribe_num.attr("data-num", this.subscribeNum);
                    break;
                case n[1]:
                    e = t[n[1]], this.collectNum = parseInt(e), this.new_collect_num.attr("data-num", this.collectNum);
                    break;
                case n[2]:
                    e = t[n[2]], this.retransmitNum = parseInt(e), this.new_retransmit_num.attr("data-num", this.retransmitNum);
                    break;
                case n[3]:
                    e = t[n[3]], this.informNum += parseInt(e), this.new_inform_num.attr("data-num", this.informNum);
                    break;
                case n[4]:
                    e = t[n[4]], this.commentNum = parseInt(e), this.new_comment_num.attr("data-num", this.commentNum);
                    break;
                case n[5]:
                    e = t[n[5]], this.informNum += parseInt(e), this.new_inform_num.attr("data-num", this.informNum);
                    break;
                case n[6]:
                    e = t[n[6]], this.informNum += parseInt(e), this.new_inform_num.attr("data-num", this.informNum);
                    break;
                default:
                    this.informNum = parseInt(e), this.new_inform_num.attr("data-num", this.informNum)
            }
        },
        getNewImprotantInformCount: function() {
            var t = {};
            $.ajax({
                url: "//www.toutiao.com/dongtai/notification/count/?include=84&detail=1",
                type: "GET",
                dataType: "jsonp",
                context: this,
                data: t,
                success: function(t) {
                    if ("success" == t.message) {
                        var s = t.data.update_count;
                        s > 0 && this.showImportantInformInfo(s)
                    }
                }
            })
        },
        showImportantInformInfo: function(t) {
            var s = { count: this.count, from_pgc: this.from_pgc, reset_count: 0 };
            $.ajax({ url: "//www.toutiao.com/dongtai/notification/list/?include=84", type: "GET", dataType: "jsonp", context: this, data: s, success: function(s) { s = s || {}, "success" === s.message && (s.data.data.cnt = t, this.convertTimeFormat(s.data.data), this.$dom.sys_msg_impor_con.append(MESSAGE_LIST_TEMPLATE(s.data)), this.showMsgSum()) }, error: function() {} }), this.$dom.sys_msg_important_inform.addClass("sys-msg-important-show"), this.improtantInformFlag = !0, this.$dom.sys_msg_wrapper.hide(), this.showMsgSum()
        },
        getHashVal: function() {
            var t = location.hash;
            if ("string" == typeof t && 0 != t.length && "#" == t.substr(0, 1)) switch (t = t.substr(1)) {
                case "inform":
                    this.informNum = 0, this.new_inform_num.attr("data-num", 0);
                    break;
                case "subscribe":
                    this.subscribeNum = 0, this.new_subscribe_num.attr("data-num", 0);
                    break;
                case "collect":
                    this.collectNum = 0, this.new_collect_num.attr("data-num", 0);
                    break;
                case "comment":
                    this.commentNum = 0, this.new_comment_num.attr("data-num", 0);
                    break;
                case "retransmit":
                    this.retransmitNum = 0, this.new_retransmit_num.attr("data-num", 0);
                    break;
                default:
                    this.informNum = 0, this.new_inform_num.attr("data-num", 0)
            }
        },
        hashChange: function() {
            var t = location.hash;
            if ("string" == typeof t && 0 != t.length) {
                "#" == t.substr(0, 1) && (t = t.substr(1));
                var s = { inform: "inform", subscribe: "subscribe", collect: "collect", retransmit: "retransmit", comment: "comment" };
                this.getHashVal(), t in s && this.getNewMessageCount(), this.showMsgSum()
            }
        },
        toggleMsgNum: function() { this.showNum(this.new_inform_num), this.showNum(this.new_comment_num), this.showNum(this.new_subscribe_num), this.showNum(this.new_collect_num), this.showNum(this.new_retransmit_num) },
        showNum: function(t) {
            var s = this.stringToNum(t);
            0 == s ? t.hide() : t.text(s).show()
        },
        stringToNum: function(t) {
            var s = t.text(),
                e = 0;
            return e = 0 == s.length ? 0 : s
        },
        showMsgSum: function() {
            var t = parseInt(this.new_retransmit_num.attr("data-num")) + parseInt(this.new_inform_num.attr("data-num")) + parseInt(this.new_comment_num.attr("data-num")) + parseInt(this.new_subscribe_num.attr("data-num")) + parseInt(this.new_collect_num.attr("data-num"));
            0 != t ? (t > 99 && (t = "99+"), this.$dom.sys_msg_sum.text(t)) : this.$dom.sys_msg_sum.hide()
        },
        onSysMsgInformClick: function() { this.informNum = 0, this.new_inform_num.attr("data-num", 0), this.showMsgSum(), this.new_inform_num.text(0), this.toggleMsgNum() },
        onSysMsgCommentClick: function() { this.commentNum = 0, this.new_comment_num.attr("data-num", 0), this.showMsgSum(), this.new_comment_num.text(0), this.toggleMsgNum() },
        onSysMsgSubscribeClick: function() { this.subscribeNum = 0, this.new_subscribe_num.attr("data-num", 0), this.showMsgSum(), this.new_subscribe_num.text(0), this.toggleMsgNum() },
        onSysMsgCollectClick: function() { this.collectNum = 0, this.new_collect_num.attr("data-num", 0), this.showMsgSum(), this.new_collect_num.text(0), this.toggleMsgNum() },
        onSysMsgRetransmitClick: function() { this.retransmitNum = 0, this.new_retransmit_num.attr("data-num", 0), this.showMsgSum(), this.new_retransmit_num.text(0), this.toggleMsgNum() },
        onSysMsgViewerClick: function() { this.$dom.sys_msg_important_inform.removeClass("sys-msg-important-show"), this.improtantInformFlag = !1 },
        onSysMsgCloseClick: function() { this.improtantInformFlag && (this.$dom.sys_msg_important_inform.removeClass("sys-msg-important-show"), this.improtantInformFlag = !1) },
        forceStatic: function(t) {
            var s, e;
            try { "a" != $(t.target)[0].tagName.toLocaleLowerCase() && (s = $(t.target).closest("a"), e = s.find(".new_user_name"), "未激活用户" == e.html() && t.preventDefault()) } catch (t) {}
        },
        initHeaderNav: function() {
            try {
                var t = $("#pagelet-header .user-panel"),
                    s = t.find(".new_user_name");
                "未激活用户" == s.html() && t.find(".authors_list").remove()
            } catch (e) {}
        }
    })
});;
define("pagelet/history/history.js", function(require, exports, module) {
    var COMPLAIN_TEMPLATE = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) {
            if (__p += '<span class="tab">申诉详情</span>\n<table class="appeal_tbl">\n	<tr>\n		<td>申诉说明</td>\n		<td>' + (null == (__t = text) ? "" : _.escape(__t)) + "</td>\n	</tr>\n	<tr>\n		<td>申诉材料</td>\n		<td>\n		", urls.length) {
                __p += "\n			";
                for (var i = 0; i < urls.length; i++) __p += '\n		<a href="/api/storage_get/?sid=' + (null == (__t = urls[i]) ? "" : _.escape(__t)) + '" title="' + (null == (__t = names[i]) ? "" : _.escape(__t)) + '" target="_blank">' + (null == (__t = names[i]) ? "" : _.escape(__t)) + "</a>\n			";
                __p += "\n		"
            } else __p += "\n		无\n		";
            __p += "\n		</td>\n	</tr>\n</table>"
        }
        return __p
    };
    module.exports = Pagelet.extend({
        el: "#pagelet-history",
        events: { "click $get_complain": "onGetComplainClick" },
        init: function() { $(".event_history").tooltip({ selector: "[data-toggle=tooltip]", container: "body" }) },
        onGetComplainClick: function(t) {
            var e = $(t.target),
                n = e.data("id");
            $.ajax({ type: "POST", async: !0, url: "/api/user_report_and_complain/?" + Date.now(), data: { id: n }, dataType: "json" }).done(function(t) { "success" == t.message ? ($(".appeal_info").html(COMPLAIN_TEMPLATE(JSON.parse(t.pgc_report_and_complain.content))).show(), $(document).scrollTop($(".event_history").offset().top + $(".event_history").height())) : ($(".appeal_info").hide(), alert(t.reason ? t.reason : "查询过程遇到异常，请稍后再试")) }).fail(function() { $(".appeal_info").hide() })
        }
    })
});;
define("pagelet/incubator/incubator.js", function(e) {
    var t = e("common/vali/vali.js"),
        n = (e("common/util/util.js"), e("common/stip/stip.js")),
        a = e("pagelet/signform/field.js"),
        i = e("pagelet/signform/simple/input2.whe"),
        r = e("pagelet/signform/simple/text2.whe"),
        l = e("pagelet/signform/simple/select2.whe"),
        u = $("#incubator_basic"),
        p = "http://space.toutiao.com/space/incubator_apply/",
        o = a([
            ["input", { tpl: i, name: "project_name", require: !0, label: "项目名称" }],
            ["input", { tpl: i, name: "user_name", require: !0, label: "联系人姓名" }],
            ["input", { tpl: i, name: "mobile", require: !0, func: t.returnWrap(t.mobile), label: "联系人电话" }],
            ["input", { tpl: i, name: "email", require: !0, func: t.returnWrap(t.email), label: "联系邮箱", hint: "请输入常用邮箱，审核结果将会以邮件方式通知" }],
            ["input", { tpl: i, name: "from_which", require: !0, label: "从哪里得知今日头条创作空间", hint: "今日头条创作空间微信号、今日头条创作空间头条号、线下活动等渠道" }],
            ["input", { tpl: i, name: "member_num", require: !0, func: t.returnWrap(t._int), label: "您的团队人数" }],
            ["input", { tpl: l, name: "require_city", require: !0, label: "您想入驻的城市", hint: "选择城市", items: [{ text: "北京", value: "北京" }, { text: "上海", value: "上海" }, { text: "深圳", value: "深圳" }, { text: "成都", value: "成都" }] }],
            ["text", {
                tpl: r,
                name: "project_desc",
                require: !0,
                label: "项目介绍",
                limit: [10, 300],
                func: t.returnWrap(function(e) {
                    return t.range(e, 10, 300)
                })
            }],
            ["text", {
                tpl: r,
                name: "require_service",
                require: !0,
                label: "您希望我们为您提供哪些服务",
                limit: [10, 300],
                func: t.returnWrap(function(e) {
                    return t.range(e, 10, 300)
                })
            }]
        ]);
    u.append($($.map(o, function(e) {
        return e.jbox[0]
    }))), o.splice(6, 1);
    var m = t($($.map(o, function(e) {
        return e.jvali[0]
    })));
    $(".form1_text").bind("input propertychange", function() {
        var e = $(this).parent().find(".length_count");
        if (e.html() && "" != e.html()) {
            var t = (Number(e.html()), $(this).val().length);
            e.html(300 - t)
        }
    }), $(".upload_hidden").change(function() {
        var e = $(this).val();
        if (e) {
            var t = e.substring(e.lastIndexOf(".") + 1);
            "pdf" == t || "ppt" == t || "pptx" == t || "key" == t ? ($(".file_hint.error").removeClass("show"), $(".file_hint.normal").addClass("show"), $(".file_hint.normal span").html(e)) : ($(".file_hint.error").addClass("show"), $(".file_hint.normal").removeClass("show"), $(this).val(""))
        }
    }), $("#submit").click($.loadDone(function(e) {
        m(function(t, a, i) {
            if ($(".form1_input.select").addClass("active"), $("#require_city").val() || (t = "必填项"), t) return e(), void $(window).scrollTop(a.offset().top - 50);
            var r = { name: "require_city", value: $("#require_city").val() };
            i.push(r);
            var l = new FormData;
            for (var u in i) l.append(i[u].name, i[u].value);
            $(".upload_hidden").val() && l.append("upload_plan", $("input[name=upload_plan]")[0].files[0]), $.ajax({ url: p, type: "POST", data: l, cache: !1, contentType: !1, processData: !1 }).done(function() { e(), n.popupTip({ msg: "提交成功，我们会认真评审，10个工作日内将邮件告知您评审结果。", status: !0, callback: function() { window.location = "/" } }) }).fail(function(t, a) { e(), n.alert(a) })
        })
    }))
});;
define("pagelet/index/index.js", function(require, exports, module) {
    var pager = require("common/pager/pager.js"),
        Vali = require("common/vali/vali.js"),
        T_NOTICES = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var i = 0, length = notices.length; length > i; i++) {
                    var notice = notices[i];
                    __p += "\n    ", (1 == notice.notice_type || 3 == notice.notice_type) && (__p += '\n        <div class="indexpage_item">\n            <a href="' + (null == (__t = notice.href) ? "" : _.escape(__t)) + '" target="_blank" ga>' + (null == (__t = notice.title) ? "" : _.escape(__t)), notice.fresh && (__p += "<span>new</span>"), __p += '</a>\n            <i class="sn">' + (null == (__t = notice.create_time) ? "" : _.escape(__t)) + "</i>\n        </div>\n    "), __p += "\n"
                }
                __p += "\n"
            }
            return __p
        },
        CAROUSEL_TMPL = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<div class="indexpage_item" style="margin-top:-10px;">\n    <div id="carousel-example-generic" class="carousel slide carousel-fade" data-ride="carousel">\n        <!-- Indicators -->\n        <ol class="carousel-indicators">\n            ';
                for (var i = 0, l = obj.length; l > i; i++) {
                    var item = obj[i];
                    __p += "\n                ", 1 !== l && 0 === i ? __p += '\n                <li data-target="#carousel-example-generic" class="circle active" data-slide-to="' + (null == (__t = i) ? "" : _.escape(__t)) + '"></li>\n                ' : 1 !== l && i > 0 && (__p += '\n                <li data-target="#carousel-example-generic" class="circle" data-slide-to="' + (null == (__t = i) ? "" : _.escape(__t)) + '"></li>\n                '), __p += "\n            "
                }
                __p += '\n        </ol>\n\n        <div class="carousel-inner" role="listbox">\n            ';
                for (var i = 0, l = obj.length; l > i; i++) {
                    var item = obj[i];
                    __p += "\n                ", 1 === l ? __p += '\n                <div class="item active">\n                    <a href="' + (null == (__t = item.href) ? "" : _.escape(__t)) + '" target="_blank" ga="' + (null == (__t = item.pictureTitle) ? "" : _.escape(__t)) + '"><img width="750" height="100" src="' + (null == (__t = item.title) ? "" : _.escape(__t)) + '" alt="..."></a>\n                </div>\n                ' : 1 !== l && 0 === i ? __p += '\n                <div class="item active">\n                    <a href="' + (null == (__t = item.href) ? "" : _.escape(__t)) + '" target="_blank" ga="' + (null == (__t = item.pictureTitle) ? "" : _.escape(__t)) + '"><img width="750" height="100" src="' + (null == (__t = item.title) ? "" : _.escape(__t)) + '" alt="..."></a>\n                </div>\n                ' : 1 !== l && i > 0 && (__p += '\n                <div class="item">\n                    <a href="' + (null == (__t = item.href) ? "" : _.escape(__t)) + '" target="_blank" ga="' + (null == (__t = item.pictureTitle) ? "" : _.escape(__t)) + '"><img width="750" height="100" src="' + (null == (__t = item.title) ? "" : _.escape(__t)) + '" alt="..."></a>\n                </div>\n                '), __p += "\n            "
                }
                __p += "\n        </div>\n        ", obj.length > 1 && (__p += '\n            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n            </a>\n            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n            </a>\n        '), __p += "\n    </div>\n</div>"
            }
            return __p
        };
    $(".indexsum_btn em").hoverTip(), module.exports = Pagelet.extend({
        el: "#pagelet-index",
        events: { "click .j_home_new_article": "homeValidNewArticle" },
        init: function() { this.$content = this.$el.find(".indexpage_content"), this.$pagination = this.$el.find(".pager"), this.$page = this.$el.find(".indexpage"), this.$carousel = this.$el.find("#index-carousel"), this.$tags = this.$el.find(".page_tabs"), this.$noticeTab = this.$tags.find(".page-tab-notice"), this.$collegeTab = this.$tags.find(".page-tab-college"), this.carouselIndexData = [], this.carouselData = [], this.carouselObj = {}, this.carouselHandled = !1, this.arrIndex = [], this.init = !1, this.count = 20, this.listType = "notice", this.tagInit(), this.render(), this.renderStatistic() },
        homeValidNewArticle: function() { Vali.validBrowser("/core/article/new_article/", function() { window.location.href = "/core/article/new_article/" }) },
        render: function() {
            var e = this;
            this.pager = pager({
                jele: e.$pagination,
                cb: function(t, i) {
                    var a = "notice" === e.listType ? "/get_media_notice/" : "/get_college_notice/";
                    $.ajax({ type: "GET", url: a, data: { page_no: t - 1, count: e.count }, dataType: "json" }).done(function(t) {
                        if ("success" === t.message) {
                            i({ length: Math.ceil(t.data.total_count / e.count) });
                            var a = [];
                            if (a.unshift(e.renderList(t.data)), 0 === t.data.page_no && (e.dataProcess(t.data), !e.carouselHandled)) {
                                var n = e.renderCarousel(e.checkData(e.arrIndex, e.carouselObj));
                                e.$carousel.html(n), e.carouselHandled = !0
                            }
                            e.$content.html(a), $("#carousel-example-generic").carousel({ interval: 4e3 })
                        } else e.$content.html("暂无公告")
                    }).fail(function() { e.$content.html("暂无公告") })
                }
            })
        },
        dataProcess: function(e) {
            for (var t, i = "", a = 0, n = 0, r = 0, s = (new Date).getTime(), l = 0, c = e.media_notice.length; c > l; l++) 2 === e.media_notice[l].notice_type && (t = this.filterStr(e.media_notice[l].href), a = parseInt(t.startTime), n = parseInt(t.endTime), s > a && n > s && (i = t.detail, e.media_notice[l].href = t.prev, r = this.filterStr(e.media_notice[l].title).sequence, e.media_notice[l].title = this.filterStr(e.media_notice[l].title).prev, e.media_notice[l].sequence = parseInt(r), e.media_notice[l].pictureTitle = i, this.carouselHandled || (this.carouselObj[e.media_notice[l].sequence] = e.media_notice[l], this.carouselData.unshift(e.media_notice[l]), this.arrIndex.push(e.media_notice[l].sequence))))
        },
        filterStr: function(e) {
            var t = e.indexOf("#analysis#"),
                i = {};
            if (t > 0) {
                i.prev = e.substr(0, t);
                for (var a = e.substr(t + 10).split("&"), n = 0, r = a.length; r > n; n++) {
                    var s = a[n].split("=");
                    i[s[0]] = s[1]
                }
                return i
            }
            return { prev: e, sequence: 0, detail: "", startTime: 0, endTime: 0 }
        },
        compare: function(e, t) {
            return e > t
        },
        checkData: function(e) {
            if (e.length !== Object.keys(this.carouselObj).length) return this.carouselData;
            this.arrIndex.sort(this.compare);
            for (var t = 0, i = this.arrIndex.length; i > t; t++) this.carouselIndexData.push(this.carouselObj[this.arrIndex[t]]);
            return this.carouselIndexData
        },
        renderCarousel: function(e) {
            return $(CAROUSEL_TMPL(e))
        },
        renderList: function(e) {
            var t = $(T_NOTICES({ notices: e.media_notice, start: e.page_no }));
            return t
        },
        renderStatistic: function() {
            var e = this;
            return $.ajax({ url: "/statistic/profile_stat/", dataType: "json", type: "GET" }).then(function(t) {
                if ("success" == t.message && t.data)
                    for (var i in t.data) e.$el.find("#" + i + " b").text($.num3(t.data[i]))
            })
        },
        tagInit: function() {
            var e = this;
            this.$tags.delegate(".page_tab ", "click", function() {
                var t = $(this),
                    i = t,
                    a = t.is(e.$noticeTab) ? "notice" : "college",
                    n = "notice" === a ? e.$collegeTab : e.$noticeTab;
                i.addClass("selected"), n.removeClass("selected"), e.changeListType(a)
            })
        },
        changeListType: function(e) { this.listType = e, this.$content.html(""), this.pager.jump(1) }
    })
});;
define("pagelet/infringement/form.js", function(require, exports, module) {
    function render(a, e) {
        function n() {
            var a = window.location.href.split("#explain_")[1];
            a && Util.ajax({ method: "GET", url: "/infringement/get_infringement_basic_info/", data: { infringement_id: a }, callback: function(a, e, n) { 0 == a && $(".signform_article_url input:first").val(n.url || "") } })
        }
        if (null != a) {
            var t = ["投诉", "申诉"][a],
                i = $("#pagelet_infringement");
            $("#infringement_form").html(formTpl({ COMPLAIN_TEXT: t }));
            var r = i.nodes(),
                l = function() {
                    var a = {},
                        e = r.tabs.find(".form1_checkbox"),
                        n = r.arrowbar,
                        t = n.children(),
                        i = Tab(e, r.group.add(r.person), function(a) {
                            var e = i.tabs[a],
                                r = e.offset();
                            t.css("left", r.left - n.offset().left)
                        }),
                        l = [
                            ["company_name", { label: "权利人名称", hint: "" }],
                            ["input", { name: "identity_number", label: "有效证件号", hint: "请填写有效营业执照或组织机构代码证号码" }],
                            ["license_uri", { name: "identity_uri", label: "有效证件扫描件", hint: "请上传营业执照或组织机构代码证清晰彩色原件扫描件或数码照" }],
                            ["location", { label: "通信地址" }],
                            ["input", { name: "street", label: "", hint: "请填写街道地址" }],
                            ["real_name", { label: "联系人" }],
                            ["mobile", { label: "联系人手机" }],
                            ["email", { hint: "" }]
                        ],
                        o = FieldFac(l);
                    r.group.append($.map(o, function(a) {
                        return "street" === a.name && a.jbox.removeClass("require"), a.jbox.toArray()
                    })), a.group = Vali($($.map(o, function(a) {
                        return a.jvali[0]
                    })));
                    var c = [
                            ["company_name", { label: "权利人姓名", hint: "" }],
                            ["identity_number", { label: "身份证号" }],
                            ["identity_uri", { label: "身份证照片" }],
                            ["location", { label: "通信地址" }],
                            ["input", { name: "street", label: "", hint: "请填写街道地址" }],
                            ["mobile", { label: "手机号码" }],
                            ["email", { hint: "" }]
                        ],
                        s = FieldFac(c);
                    return r.person.append($.map(s, function(a) {
                            return "street" === a.name && a.jbox.removeClass("require"), a.jbox.toArray()
                        })), a.person = Vali($($.map(s, function(a) {
                            return a.jvali[0]
                        }))), setTimeout(function() { i("group"), i.pages.person.hide() }, 1),
                        function(e) {
                            var n = a[i.currentValue];
                            n(function(a, n, t) { e.call(this, a, n, { tab: i.currentValue, data: t }) })
                        }
                }(),
                o = function() {
                    var e = {},
                        n = r.agent_tabs.find(".form1_checkbox"),
                        i = r.agent_arrowbar,
                        l = i.children(),
                        o = Tab(n, r.agent_group.add(r.agent_person), function(a) {
                            var e = o.tabs[a],
                                n = e.offset();
                            l.css("left", n.left - i.offset().left)
                        }),
                        c = [
                            ["company_name", { label: "代理人名称", hint: "" }],
                            ["input", { name: "identity_number", label: "有效证件号", hint: "请填写有效营业执照或组织机构代码证号码" }],
                            ["license_uri", { name: "identity_uri", label: "有效证件扫描件", hint: "请上传营业执照或组织机构代码证清晰彩色原件扫描件或数码照" }],
                            ["location", { label: "通信地址" }],
                            ["input", { name: "street", label: "", hint: "请填写街道地址" }],
                            ["real_name", { label: "联系人" }],
                            ["mobile", { label: "联系人手机" }],
                            ["email", { hint: "" }],
                            ["image", { label: "代理委托书", require: !0, hint: "请上传代理委托书<br/>委托书由提交者拟定，必须明确代理人及权利人全称/姓名、授权委托权限，并含有代理人及权利人的完整签章，能证明代理人有完整权限代表权利人实施本次" + t + "。" }]
                        ],
                        s = FieldFac(c);
                    r.agent_group.append($.map(s, function(a) {
                        return "street" === a.name && a.jbox.removeClass("require"), a.jbox.toArray()
                    })), e.group = Vali($($.map(s, function(a) {
                        return a.jvali[0]
                    })));
                    var _ = [
                            ["company_name", { label: "代理人姓名", hint: "" }],
                            ["identity_number", { label: "身份证号" }],
                            ["identity_uri", { label: "身份证照片" }],
                            ["location", { label: "通信地址" }],
                            ["input", { name: "street", label: "", hint: "请填写街道地址" }],
                            ["mobile", { label: "手机号码" }],
                            ["email", { hint: "" }],
                            ["image", { label: "代理委托书", hint: "请上传代理委托书<br/>委托书由提交者拟定，必须明确代理人及权利人全称/姓名、授权委托权限，并含有代理人及权利人的完整签章，能证明代理人有完整权限代表权利人实施本次" + t + "。" }]
                        ],
                        d = FieldFac(_);
                    return r.agent_person.append($.map(d, function(a) {
                            return "street" === a.name && a.jbox.removeClass("require"), a.jbox.toArray()
                        })), e.person = Vali($($.map(d, function(a) {
                            return a.jvali[0]
                        }))), o("group"), r.agent_cb.change(function() { r.agent.toggle(r.agent_cb.checkbox()) }).checkbox(), setTimeout(function() { o.pages.person.hide(), r.agent_cb.trigger("change") }, 1), 1 === a && r.agent_cb_table.hide(),
                        function(a) {
                            if (r.agent_cb.checkbox()) {
                                var n = e[o.currentValue];
                                n(function(e, n, t) { a.call(this, e, n, { tab: o.currentValue, data: t }) })
                            } else a()
                        }
                }(),
                c = function() {
                    var a = {},
                        e = Tab($(), r.images_tabpages.children(), function() {}),
                        n = [
                            ["images", { name: "evidence_trademark_regis_uri", label: "商标注册书", hint: "商标被冒用，请上传商标权利人资质证明及商标注册证扫描件。" }],
                            ["images", { name: "evidence_other_uri", max: 5, label: "其他证明" }]
                        ],
                        t = FieldFac(n);
                    a.author_fake = Vali($($.map(t, function(a) {
                        return a.jvali[0]
                    }))), e.pages.author_fake.append($.map(t, function(a) {
                        return a.jbox.toArray()
                    }));
                    var i = [
                            ["images", { name: "pub_evidence_uri", label: "出版证明材料", hint: "请上传原创文件的版权证明，如无版权证明的，请提供原创文章首次发表的截图或链接。" }],
                            ["images", { name: "regal_pub_pic_uri", label: "合法出版物照片", hint: "" }],
                            ["images", { name: "original_article_pic_uri", label: "原创文章截图", hint: "请上传原创文件的版权证明，如无版权证明的，请提供原创文章首次发表的截图或链接。" }],
                            ["images", { name: "evidence_other_uri", max: 5, label: "其他证明" }]
                        ],
                        l = FieldFac(i);
                    a.article_fake = Vali($($.map(l, function(a) {
                        return a.jvali[0]
                    }))), e.pages.article_fake.append($.map(l, function(a) {
                        return a.jbox.toArray()
                    }));
                    var o = [
                            ["images", { name: "evidence_other_uri", max: 5, label: "其他证明" }]
                        ],
                        c = FieldFac(o);
                    a.article_low = Vali($($.map(c, function(a) {
                        return a.jvali[0]
                    }))), e.pages.article_low.append($.map(c, function(a) {
                        return a.jbox.toArray()
                    }));
                    var s = [
                            ["images", { name: "evidence_other_uri", max: 5, label: "其他证明" }]
                        ],
                        _ = FieldFac(s);
                    return a.other = Vali($($.map(_, function(a) {
                        return a.jvali[0]
                    }))), e.pages.other.append($.map(_, function(a) {
                        return a.jbox.toArray()
                    })), e.pages.author_fake.hide(), e.pages.article_low.hide(), e.pages.article_fake.hide(), e.pages.other.hide(), [function(n) {
                        var t = a[e.currentValue];
                        t(function(a, t, i) { n.call(this, a, t, { tab: e.currentValue, data: i }) })
                    }, e]
                }(),
                s = c[0],
                _ = c[1],
                d = function() {
                    var e = {},
                        i = Tab(r.complain_tabs.children(), r.complain_tabpages.children(), function(a) { _(a) }),
                        l = [
                            ["id", { contentType: "user", max: 1, name: "infringement_media_name", btn: "添加更多名称", label: "涉嫌侵权名称" }],
                            ["text", {
                                name: "desc",
                                placeholder: "有帐号冒充我，侵犯了我的合法权益，本人已发表《验证链接说明》，并提供验证链接地址。或者我拥有这个名称的商标注册证，已提交我方资料以及该名称的商标注册证，要取回被占用名称",
                                func: Vali.returnWrap(function(a) {
                                    return Vali.range(a, 50)
                                }),
                                label: "" + t + "描述"
                            }]
                        ],
                        o = FieldFac(l);
                    e.author_fake = Vali($($.map(o, function(a) {
                        return a.jvali[0]
                    }))), i.pages.author_fake.append($.map(o, function(a) {
                        return a.jbox.toArray()
                    }));
                    var c = [
                            ["id", { contentType: "article_url", max: 5, name: "infringement_article_uri", btn: "添加更多链接", hint: "如果没有原创首发链接，可在页面下方上传其他有效证明材料扫描件", label: ["涉嫌侵权/违法违规内容链接", "要求恢复的文章链接"][a] }],
                            ["text", {
                                name: "desc",
                                placeholder: ["我的文章首发在某平台，我可以提供我的原创链接以及头条文章链接", "我没有抄袭他人，我的文章首发在某平台，可以证明材料中提交有效的原创证明"][a],
                                func: Vali.returnWrap(function(a) {
                                    return Vali.range(a, 50)
                                }),
                                hint: "",
                                label: "" + t + "描述"
                            }]
                        ],
                        s = FieldFac(c);
                    e.article_fake = Vali($($.map(s, function(a) {
                        return a.jvali[0]
                    }))), i.pages.article_fake.append($.map(s, function(a) {
                        return a.jbox.toArray()
                    }));
                    var d = [
                            ["id", { contentType: "article2", max: 5, name: "infringement_article_uri", btn: "添加更多链接", label: ["涉嫌侵权/违法违规内容链接", "要求恢复的文章链接"][a] }],
                            ["text", {
                                name: "desc",
                                placeholder: "文章中内容不实，请指出文章中具体哪些内容不实或侵权，以及事实是什么，侵犯了您的哪些权益？",
                                func: Vali.returnWrap(function(a) {
                                    return Vali.range(a, 50)
                                }),
                                hint: "如果要投诉多于一篇文章，请将后续链接附在投诉描述中",
                                label: "" + t + "描述"
                            }]
                        ],
                        m = FieldFac(d);
                    e.article_low = Vali($($.map(m, function(a) {
                        return a.jvali[0]
                    }))), i.pages.article_low.append($.map(m, function(a) {
                        return a.jbox.toArray()
                    }));
                    var u = [
                            ["id", { contentType: "url", max: 1, name: "infringement_article_uri", btn: "添加更多链接", label: "涉嫌侵权/违法违规内容链接" }],
                            ["text", {
                                name: "desc",
                                func: Vali.returnWrap(function(a) {
                                    return Vali.range(a, 50)
                                }),
                                hint: "可以提交头条爆料、问答、评论、内涵段子内容相关投诉。如果要投诉多于一篇文章，请将后续链接附在投诉描述中",
                                label: "" + t + "描述"
                            }]
                        ],
                        b = FieldFac(u);
                    return e.other = Vali($($.map(b, function(a) {
                            return a.jvali[0]
                        }))), i.pages.other.append($.map(b, function(a) {
                            return a.jbox.toArray()
                        })), i.pages.author_fake.hide(), i.pages.article_low.hide(), i.pages.article_fake.hide(), i.pages.other.hide(), 1 == a ? (n(), i.tabs.author_fake.hide(), i.tabs.article_low.hide(), i.tabs.other.hide(), i("article_fake")) : i("author_fake"),
                        function(a) {
                            var n = e[i.currentValue];
                            n(function(e, n, t) { a.call(this, e, n, { tab: i.currentValue, data: t }) })
                        }
                }();
            r.submit.click($.loadDone(function(n) {
                var t = $(this);
                t.hasClass("is_disabled") || async.map([l, o, d, s], function(a, e) { a(function(a, n, t) { a ? e([a, n]) : e(null, t) }) }, function(i, r) {
                    if (i) n(), Stip.alert(i[0]), $("body").animate({ scrollTop: i[1].offset().top });
                    else {
                        t.addClass("is_disabled");
                        var l = {},
                            o = $.so(r[0].data);
                        o.tab = r[0].tab;
                        var c = { person: 1, group: 2 };
                        if ($.extend(l, { organization_type: c[o.tab], company_name: o.company_name, identity_number: o.identity_number, identity_uri: o.identity_uri, address: o.location.province_text + (o.location.city_text || "") + o.street, real_name: o.real_name, mobile: o.mobile, email: o.email }), r[1]) {
                            var s = $.so(r[1].data);
                            s.tab = r[1].tab, $.extend(l, { agent: 1, agent_organization_type: c[s.tab], agent_company_name: s.company_name, agent_identity_number: s.identity_number, agent_identity_uri: s.identity_uri, agent_address: s.location.province_text + (s.location.city_text || "") + s.street, agent_real_name: s.real_name, agent_mobile: s.mobile, agent_email: s.email, agent_book_uri: s.image })
                        } else l.agent = 0;
                        var _ = function(a) {
                                for (var e = [], n = [], t = 0; t < a.length; t++) - 1 != a[t].text.indexOf("{left}") ? (t % 2 == 0 ? a[t].text = a[t].text.slice(6) : (n.push(""), a[t].text = a[t].text.slice(6)), t == a.length - 1 && n.push("")) : -1 != a[t].text.indexOf("{right}") && (n.push(a[t].text.slice(7)), a.splice(t, 1));
                                return e.push(a), e.push(n), e
                            },
                            d = { author_fake: 1, article_fake: 2, article_low: 3, other: 4 },
                            m = $.so(r[2].data);
                        if (m.tab = r[2].tab, m.infringement_article_uri && -1 != m.infringement_article_uri[0].text.indexOf("{left}")) {
                            var u = _(m.infringement_article_uri);
                            m.infringement_article_uri = u[0], m.original_article_uri = u[1]
                        }
                        $.extend(l, {
                            infringement_type: d[m.tab],
                            infringement_desc: m.desc,
                            infringement_media_id: $.map(m.infringement_media_name || [], function(a) {
                                return a.value
                            }),
                            infringement_media_name: $.map(m.infringement_media_name || [], function(a) {
                                return a.text
                            }),
                            infringement_article_id: $.map(m.infringement_article_uri || [], function(a) {
                                return a.value
                            }),
                            infringement_article_uri: $.map(m.infringement_article_uri || [], function(a) {
                                return a.text
                            }),
                            original_article_uri: $.map(m.original_article_uri || [], function(a) {
                                return a
                            })
                        });
                        var b = $.so(r[3].data);
                        for (var f in b) {
                            var p = b[f];
                            p && 0 !== p.length, l[f] = $.map(b[f], function(a) {
                                return a.web_uri
                            })
                        }
                        l.complaint_type = a, l.complainId = e, 1 == l.organization_type ? Util.ajax("/infringement/infringement_post/", { json_data: JSON.stringify(l) }, function(a, e) { n(), 0 === a ? window.pageData.media_id ? Stip.popupTip({ status: !0, msg: "提交成功", duration: 0, callback: function() { window.location = "/infringement/history/?type=" + l.complaint_type } }) : window.location = "/infringement/history/?type=" + l.complaint_type : (Stip.alert(e), t.removeClass("is_disabled")) }) : (n(), mainTab("print", l), t.removeClass("is_disabled"))
                    }
                })
            }))
        }
    }
    var formTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<table class="infringement_table">\n    <col class="signform_col_dt" />\n    <col class="signform_col_dd" />\n    <tr class="signform_item require">\n        <td class="signform_dt">权利人类型</td>\n        <td data-node="tabs" class="form1_checkboxtabs">\n            <span class="form1_checkbox" data-node="group_tab" data-tab="group">组织</span>\n            <span class="form1_checkbox" data-node="person_tab" data-tab="person">个人</span>\n        </td>\n    </tr>\n</table>\n<div class="infringement_case_tabs" data-node="arrowbar">\n    <div class="infringement_case_tab"></div>\n</div>\n\n<table class="infringement_table" data-tab="group" data-node="group">\n    <col class="signform_col_dt" />\n    <col class="signform_col_dd" />\n</table>\n<table class="infringement_table" data-tab="person" data-node="person">\n    <col class="signform_col_dt" />\n    <col class="signform_col_dd" />\n</table>\n<table class="infringement_table" data-node="agent_cb_table">\n    <col class="signform_col_dt" />\n    <col class="signform_col_dd" />\n    <tr class="signform_item">\n        <td class="signform_dt">是否为代理人</td>\n        <td>\n            <div class="form1_checkbox" data-node="agent_cb">我是代理人</div>\n        </td>\n    </tr>\n    <tr>\n        <td></td>\n        <td>\n            <div class="signform_hint">代理人：指经权利人合法授权的人。权利人委托代理人发出通知的，代理人必须提供权利人的委托书。代理人发出的每个不同的通知均需获得权利人的分别明确授权。</div>\n        </td>\n    </tr>\n</table>\n<div data-node="agent">\n    <table class="infringement_table">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n        <tr class="signform_item require">\n            <td class="signform_dt">代理人类型</td>\n            <td data-node="agent_tabs" class="form1_checkboxtabs">\n                <span class="form1_checkbox" data-node="group_tab" data-tab="group">组织</span>\n                <span class="form1_checkbox" data-node="person_tab" data-tab="person">个人\n</span>\n            </td>\n        </tr>\n    </table>\n    <div class="infringement_case_tabs" data-node="agent_arrowbar">\n        <div class="infringement_case_tab"></div>\n    </div>\n    <table class="infringement_table" data-tab="group" data-node="agent_group">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n    </table>\n    <table class="infringement_table" data-tab="person" data-node="agent_person">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n    </table>\n</div>\n<div class="page_tabs sclearfix">\n    <div class="page_tab selected">' + (null == (__t = obj.COMPLAIN_TEXT) ? "" : _.escape(__t)) + '内容</div>\n</div>\n\n<table class="infringement_table">\n    <col class="signform_col_dt" />\n    <col class="signform_col_dd" />\n    <tr class="signform_item require">\n        <td class="signform_dt">' + (null == (__t = obj.COMPLAIN_TEXT) ? "" : _.escape(__t)) + '分类</td>\n        <td>\n            <div data-node="complain_tabs" class="form1_checkboxtabs">\n                <span class="form1_checkbox" data-tab="author_fake">冒充他人/占用头条号名称</span>\n                <span class="form1_checkbox" data-tab="article_fake">内容涉嫌抄袭</span>\n                <span class="form1_checkbox top-margin-form" data-tab="article_low">内容涉嫌侵犯名誉/商誉/肖像/隐私权</span>\n                <span class="form1_checkbox top-margin-form" data-tab="other">其他</span>\n            </div>\n        </td>\n    </tr>\n</table>\n<div data-node="complain_tabpages">\n    <table class="infringement_table" data-tab="author_fake">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n    </table>\n    <table class="infringement_table" data-tab="article_fake">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n    </table>\n    <table class="infringement_table" data-tab="article_low">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n    </table>\n    <table class="infringement_table" data-tab="other">\n        <col class="signform_col_dt" />\n        <col class="signform_col_dd" />\n    </table>\n</div>\n\n<div class="page_tabs sclearfix">\n    <div class="page_tab selected">证明材料</div>\n</div>\n\n<table class="infringement_table infringement_proof" data-node="proof">\n    <col class="signform_col_dt" />\n    <col class="signform_col_dd" />\n    <tr>\n        <td class="signform_dt">有效证明材料<br>&nbsp;&nbsp;扫描件(选填)</td>\n        <td>\n            <div class="signform_hint">支持.jpg .jpeg .bmp .gif格式照片，大小不超过2M。</div>\n            <div data-node="images_tabpages">\n                <div data-tab="author_fake"></div>\n                <div data-tab="article_fake"></div>\n                <div data-tab="article_low"></div>\n                <div data-tab="other"></div>\n            </div>\n        </td>\n    </tr>\n</table>\n<div class="infringement_submits">\n    <div class="widget_btn_ok infringement_submit" data-node="submit" ga="保存并下一步">保存并下一步</div>\n</div>';
            return __p
        },
        Tab = require("common/ui/tab.js"),
        Vali = require("common/vali/vali.js"),
        async = require("common/util/async.js"),
        Util = require("common/util/util.js"),
        Stip = require("common/stip/stip.js"),
        FieldFac = require("pagelet/signform/field.js");
    return function() {
        return { render: render }
    }
});;
define("pagelet/infringement/text.js", function(n) {
    var e = n("common/ui/tab.js"),
        i = n("common/util/util.js"),
        t = [];
    return function(n) {
        function a(n) {
            l.explain_tab.show();
            var e = $(wheei(l.complain_list_tpl.html(), n));
            $('[data-node="complain_list_tpl"]').replaceWith(e), $(".infringment_explain_table").replaceWith(e)
        }
        var l = n.nodes();
        l.complain_btn.click(function() { mainTab("form", 0) });
        var o = e(l.tabs.children("[data-tab]"), l.pages.children(), function(n) { window.location.hash = n });
        $.holdReady(!0), i.ajax({
            method: "GET",
            url: "/infringement/history/",
            data: { type: 1, is_json: 1 },
            callback: function(n, e, i) {
                $.holdReady(!1), 0 === n && (t = $.map(i, function(n) {
                    return 2 == n.infringement_type_id ? n : void 0
                }), t.length && a(t))
            }
        });
        var r = (window.location.hash || "").slice(1);
        return setTimeout(function() { l.pages.children().hide(), o(r || "complain"), "explain" == r && $(".page-infringement-filter").css("display", "block") }, 1), $(".infringement-filter").on("click", function() {
            var n = $(this).data("filter");
            if ($(".infringement-filter").removeClass("selected"), $(this).addClass("selected"), "全部" == n) return a(t), !1;
            for (var e = [], i = 0; i < t.length; i++) {
                var l = t[i];
                l.status == n && e.push(l)
            }
            a(e)
        }), { render: function() {} }
    }
});;
define("pagelet/infringement/print.js", function(require, exports, module) {
    var tpl = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="infringement_print_body">\n    <h3>头条号侵权投诉' + (null == (__t = ["", "反"][obj.complaint_type]) ? "" : _.escape(__t)) + '通知书</h3>\n    <table class="infringement_print_table">\n        <colgroup>\n            <col width="100"/>\n            <col width="80"/>\n            <col width="50"/>\n            <col width="100"/>\n            <col width="80"/>\n            <col width="80"/>\n            <col width="100"/>\n        </colgroup>\n        <tbody>\n            <tr>\n                <td rowspan="4">权利人</td>\n                <td>姓名/名称</td>\n                <td colspan="2">' + (null == (__t = obj.company_name) ? "" : _.escape(__t)) + '</td>\n                <td>有效证件(复印件附后)</td>\n                <td colspan="2">' + (null == (__t = obj.identity_number) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td>通信地址</td>\n                <td colspan="3">' + (null == (__t = obj.address) ? "" : _.escape(__t)) + "</td>\n                <td>邮编</td>\n                <td>" + (null == (__t = obj.post_code) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td>联系人</td>\n                <td colspan="2">' + (null == (__t = obj.real_name) ? "" : _.escape(__t)) + '</td>\n                <td>电话</td>\n                <td colspan="2">' + (null == (__t = obj.mobile) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td>E-mail</td>\n                <td colspan="5">' + (null == (__t = obj.email) ? "" : _.escape(__t)) + '</td>\n                <!-- <td>传真</td>\n                <td colspan="2"></td> -->\n            </tr>\n            ', obj.agent && (__p += '\n            <tr>\n                <td rowspan="4">代理人</td>\n                <td>姓名/名称</td>\n                <td colspan="2">' + (null == (__t = obj.agent_company_name) ? "" : _.escape(__t)) + '</td>\n                <td>有效证件(复印件附后)</td>\n                <td colspan="2">' + (null == (__t = obj.agent_identity_number) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td>通信地址</td>\n                <td colspan="3">' + (null == (__t = obj.agent_address) ? "" : _.escape(__t)) + "</td>\n                <td>邮编</td>\n                <td>" + (null == (__t = obj.agent_post_code) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td>联系人</td>\n                <td colspan="2">' + (null == (__t = obj.agent_real_name) ? "" : _.escape(__t)) + '</td>\n                <td>电话</td>\n                <td colspan="2">' + (null == (__t = obj.agent_mobile) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td>E-mail</td>\n                <td colspan="5">' + (null == (__t = obj.agent_email) ? "" : _.escape(__t)) + "</td>\n            </tr>\n            "), __p += '\n            <tr>\n                <td>投诉帐号名称或内容链接</td>\n                <td colspan="6">\n                    ' + (null == (__t = (obj.infringement_media_name || []).join("，")) ? "" : _.escape(__t)) + "\n                    " + (null == (__t = (obj.infringement_article_uri || []).join("，")) ? "" : _.escape(__t)) + '\n                </td>\n            </tr>\n            <tr>\n                <td colspan="2">投诉分类</td>\n                <td colspan="5">' + (null == (__t = ["", "冒充他人", "文章抄袭", "文章造谣诽谤", "其他"][obj.infringement_type]) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td colspan="2">投诉描述</td>\n                <td colspan="5">' + (null == (__t = obj.infringement_desc) ? "" : _.escape(__t)) + '</td>\n            </tr>\n            <tr>\n                <td colspan="2">证明资料</td>\n                <td colspan="5">\n                ', obj.evidence_trademark_regis_uri && (__p += "\n                    商标注册书,\n                "), __p += "\n                ", obj.evidence_business_license_uri && (__p += "\n                    营业执照,\n                "), __p += "\n                ", obj.evidence_identity_uri && (__p += "\n                    身份证,\n                "), __p += "\n                ", obj.pub_evidence_uri && (__p += "\n                    出版证明材料,\n                "), __p += "\n                ", obj.regal_pub_pic_uri && (__p += "\n                    合法出版物照片,\n                "), __p += "\n                ", obj.original_article_pic_uri && (__p += "\n                    原创文章截图,\n                "), __p += "\n                ", obj.evidence_other_uri && (__p += "\n                    其他\n                "), __p += '\n                </td>\n            </tr>\n            <tr>\n                <td colspan="2">保证声明</td>\n                <td colspan="5">\n                    <p>权利人及其代理人（统称为：声明人）诚意作如下保证声明：</p>\n                    <p>声明人在通知书中的陈述和提供的相关材料皆是真实、有效和合法的，并保证承担和赔偿头条号因根据声明人的通知书对相关帐号的处理而给头条号造成的任何损失，包括但不限于头条号因向被投诉方或用户赔偿而产生的损失及头条号名誉、商誉损害等。</p>\n                </td>\n            </tr>\n            <tr>\n                <td colspan="2">权利人(或其代理人)\n                    <br>签名(盖章)</td>\n                <td colspan="5">\n                    <br>\n                    <br>\n                    <br>\n                    <span class="sright">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</span>\n                </td>\n            </tr>\n            <tr>\n                <td colspan="2">备注</td>\n                <td colspan="5">\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan="7">\n                    <strong>填写说明：</strong>\n                    <p>一、“权利人或代理人”，包含自然人、法人和其他组织。权利人：指拥有版权、商标权、专利权等合法权益的原始所有人，代理人：指经权利人合法授权的人。权利人委托代理人发出通知的，代理人必须提供权利人的委托书。代理人发出的每个不同的通知均需获得权利人的分别明确授权。</p>\n                    <p>二、“有效证件”，包括自然人的身份证、护照，法人的工商营业执照、登记证明或其他证明主体资格的合法、有效材料。填写有效证件号码需同时注明证件类型，并将证件的复印件作为本通知的附件一并提供。</p>\n                    <p>三、“投诉头条号”，是指权利人认为未经合法授权，侵犯权利人的合法权益的头条号。</p>\n                    <p>四、“投诉内容”，指权利人认为侵犯其合法权益的服务内容。</p>\n                    <p>五、“证明材料”，包括权利人拥有权利的权属证明材料（包括但不限于相关有权机构颁发的版权、商标权及专利权等登记证明及其他能证明权利人拥有相关权利的有效权属证明等）和被投诉方提供的服务构成侵权的证明（包括但不限于被投诉方提供的服务构成对权利人的版权、商标权或专利权等侵权的有效证明材料等）。填写证明材料应以附件的形式提供证明性文件的原件或复印件。</p>\n                    <p>六、“通知要求”，指发出本通知的一方向接受通知一方提出的需要履行的具体事项。包括要求对被投诉方提供的服务采取何种措施的要求，如保留或删除相关内容、封禁相关帐号等。</p>\n                    <p>七、“权利人或代理人签名（签章）”，指权利人合法、有效的签章（自然人应签名，法人应加盖相应公章或其他合法、有效签章）。</p>\n                    <p>八、权利人或代理人应该提供的材料一般应提供原件，不能提供原件的，应提供复印件，并在相应复印件上有权利人合法、有效的签章（自然人应签名，法人应加盖相应公章或其他合法、有效签章），若材料涉外的，应按照法律的规定进行公证转递，并同时提供相应的公证转递材料。</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>';
        return __p
    };
    return function(n) {
        var t, _ = n.nodes(),
            e = $("#pagelet-feedback");
        return _.back.click(function() { e.show(), mainTab("form") }), _.next.click(function() { e.show(), mainTab("upload", t) }), { render: function(n) { e.hide(), n && (t = n, _.pos.html(tpl(t))) } }
    }
});;
define("pagelet/infringement/upload.js", function(n) {
    var i = n("common/vali/vali.js"),
        t = n("common/util/util.js"),
        o = n("common/stip/stip.js"),
        e = n("common/popup/dialog.js"),
        a = n("pagelet/signform/field.js");
    return function(n) {
        var c, l = n.nodes(),
            r = a.getEle("image", { name: "complaint_notice_uri", label: "投诉通知书扫描件", hint: "投诉通知书请上传加盖公章或签名的《头条号投诉通知书》扫描件，表格中的内容不得修改" });
        l.start.after(r.jbox);
        var p = i(r.jvali);
        return l.back.click(function() { mainTab("print") }), l.submit.click($.loadDone(function(n) { p(function(i, a, l) { i ? n() : (l = $.so(l), $.extend(l, c), t.ajax("/infringement/infringement_post/", { json_data: JSON.stringify(l) }, function(i, t) { n(), 0 === i ? window.pageData.media_id ? o.popupTip({ status: !0, msg: "提交成功", duration: 0, callback: function() { window.location = "/infringement/history/?type=" + l.complaint_type } }) : new e({ title: "提交成功", content: "头条号原创作者有全网维权功能，现在是否要注册一个头条号", btns: [{ type: "ok", click: function() { window.location = "/signup/" } }, { type: "cancel", click: function() { window.location = "/infringement/history/?type=" + l.complaint_type } }] }).show() : o.alert(t) })) }) })), { render: function(n) { c = n, r.jvali.data("value", "").trigger("change") } }
    }
});;
define("pagelet/infringement/infringement.js", function(n) {
    var e = n("common/ui/tab.js"),
        i = {};
    i.text = n("pagelet/infringement/text.js"), i.form = n("pagelet/infringement/form.js"), i.print = n("pagelet/infringement/print.js"), i.upload = n("pagelet/infringement/upload.js");
    var t = $("#infringement_tabs"),
        a = e($(), t.children(), function(n) { i[n].render.apply(null, [].slice.call(arguments, 1)), $(window).scrollTop(0) });
    for (var r in i) i[r] = i[r](a.pages[r]);
    setTimeout(function() {
        t.children().hide();
        var n = location.hash.replace(/^\#/, "").split("_");
        "#complain_form" === location.hash ? a("form", 0) : "explain" === n[0] && n[1] ? a("form", 1, n[1]) : a("text")
    }, 1), window.mainTab = a
});;
define("pagelet/infringement_history/detail.js", function(t) {
    var e = t("pagelet/infringement_history/detail.whe"),
        i = t("common/util/util.js");
    return function(t) { t.formatUrl = i.formatUrl, $("#infingement_h_detail").html(e(t)) }
});;
define("pagelet/infringement_history/infringement_history.js", function(n) {
    var e = n("common/util/util.js");
    $.holdReady(!0), e.ajax({
        method: "GET",
        url: "/infringement/history/",
        data: { type: 2, is_json: 1 },
        callback: function(n, e, i) {
            $.holdReady(!1), 0 === n && (i = $.map(i, function(n) {
                return 2 == n.infringement_type_id ? n : void 0
            }), i.length && $("#pagelet_infingement_history").nodes().explain_tab.show())
        }
    })
});;
define("pagelet/invite/invite.js", function(e, i, n) {
    var t = window.listener;
    n.exports = Pagelet.extend({ el: "#pagelet-invite", events: { "click .invite-friends": "showDialog" }, init: function() {}, showDialog: function() { t.trigger("invite-modal", "show") } })
});;
define("pagelet/invite_modal/invite_modal.js", function(t, e, i) {
    var n = t("common/stip/stip.js"),
        a = window.listener;
    i.exports = Pagelet.extend({
        el: ".invite-modal",
        events: { "click .generate-url": "getUrl", "click .copy-url": "copyUrl", "click .invite-mask": "hideModal" },
        init: function() { this.$account = this.$el.find(".account-info"), this.$url = this.$el.find(".url-info"), this.$generateBtn = this.$el.find(".generate-url"), this.$copyBtn = this.$el.find(".copy-url"), this.eventCenter() },
        eventCenter: function() {
            var t = this;
            a.on("invite-modal", "show", function() { t.showModal() })
        },
        getUrl: function() {
            var t = this,
                e = this.$account.val();
            e ? $.ajax({ type: "POST", url: "/referral_invite/add/", data: { weixin_name: e }, dataType: "json" }).done(function(e) { "success" === e.message ? (t.$url.val(e.data.link), t.changeStatus(1), a.trigger("invite-table", "render")) : n.popupTip({ msg: e.reason, status: !1 }) }).fail(function() { n.popupTip({ msg: "生成链接失败", status: !1 }) }) : n.popupTip({ msg: "请输入被邀请人公众号", status: !1 })
        },
        copyUrl: function() {
            var t;
            this.$url.select();
            try { t = document.execCommand("copy"), n.popupTip(t ? { msg: "复制成功", status: !0, duration: 1e3 } : { msg: "复制失败，使用Ctrl/Cmd + C试试吧！", status: !1 }) } catch (e) { n.popupTip({ msg: "复制失败，使用Ctrl/Cmd + C试试吧！", status: !1 }) }
        },
        showModal: function() { this.clearData(), this.$el.fadeIn(), this.$account.focus() },
        hideModal: function() { this.$el.fadeOut() },
        clearData: function() { this.$account.val(""), this.$url.val(""), this.changeStatus(0) },
        changeStatus: function(t) { t ? (this.$account.addClass("disabled"), this.$account.attr("disabled", !0), this.$generateBtn.hide(), this.$copyBtn.show()) : (this.$account.removeClass("disabled"), this.$account.removeAttr("disabled"), this.$generateBtn.show(), this.$copyBtn.hide()) }
    })
});;
define("pagelet/invite_table/invite_table.js", function(require, exports, module) {
    var Stip = require("common/stip/stip.js"),
        pager = require("common/pager/pager.js"),
        inviteItem = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr>\n    <td class="invite-date">' + (null == (__t = obj.create_time) ? "" : _.escape(__t)) + '</td>\n    <td class="invite-url">' + (null == (__t = obj.invited_weixin_name) ? "" : _.escape(__t)) + '<br><span class="j_show_hide_url hide_url">' + (null == (__t = obj.invited_weixin_url) ? "" : _.escape(__t)) + '</span><span class="j_slide slide_up_down">展开</span></td>\n    <td class="invite-status">' + (null == (__t = obj.status) ? "" : _.escape(__t)) + "</td>\n</tr>";
            return __p
        },
        eventCenter = window.listener;
    module.exports = Pagelet.extend({
        el: ".invite-table",
        events: { "click .j_slide": "showSlideUpDownUrl" },
        init: function() { this.$tbody = this.$el.find("tbody"), this.$pagination = this.$el.find(".invite-pagination"), this.$el.hide(), this.eventCenter(), this.render() },
        showSlideUpDownUrl: function(e) {
            var t, i = $(e.target),
                n = i.parent().find(".j_show_hide_url"),
                s = i.text();
            "收起" === s ? (t = !0, s = "展开") : (t = !1, s = "收起"), n.toggleClass("show_url", !t), n.toggleClass("hide_url", t), i.text(s)
        },
        eventCenter: function() {
            var e = this;
            eventCenter.on("invite-table", "render", function() { e.render() })
        },
        render: function() {
            var e = this;
            pager({ jele: this.$pagination, cb: function(t, i) { $.ajax({ type: "GET", url: "/referral_invite/list/", data: { page_count: t }, dataType: "json" }).done(function(t) { "success" === t.message ? 0 !== t.data.invite_list.length && (e.$el.show(), i({ length: t.data.page_num }), e.renderData(t.data.invite_list)) : Stip.popupTip({ msg: "获取邀请列表失败", status: !1 }) }).fail(function() { Stip.popupTip({ msg: "获取邀请列表失败", status: !1 }) }) } })
        },
        renderData: function(e) {
            for (var t, i = [], n = 0; n < e.length; n++) t = $(inviteItem(e[n])), i.push(t);
            this.$tbody.html(i)
        }
    })
});;
define("pagelet/jialiao/live_create/service.js", function(e, t, a) {
    function s() { i.popupTip({ msg: "网络错误，请重试", status: !1 }) }
    var i = e("common/stip/stip.js");
    a.exports = {
        getLivePushUrl: function() {
            var e = $.Deferred();
            return $.ajax({ type: "get", url: "/get_liveid_pushurl/", dataType: "json", data: { live_user: "chat" } }).then(function(t) { "success" === t.message ? e.resolve(t) : e.reject(t.reason) }, function() { e.reject("网络错误") }), e.promise()
        },
        getLivePullUrl: function(e) {
            var t = $.Deferred();
            return $.ajax({ type: "get", url: "/get_liveid_pullurl/", data: { source_url: e, live_user: "chat" }, dataType: "json" }).then(function(e) { "success" === e.message ? t.resolve(e) : t.reject(e.reason) }, function() { t.reject("网络错误") }), t.promise()
        },
        updateRoleUser: function(e, t, a, n, o) {
            return $.ajax({ url: "/update_jialiao_info/", type: "POST", dataType: "json", data: { role_user: e, jialiao_id: n, item_id: t, group_id: a } }).done(function(e) { "success" == e.message ? (window.onbeforeunload = null, i.popupTip({ msg: "提交成功", status: !0, duration: 0, callback: function() { window.location = "/live/?live_type=" + o } })) : i.popupTip({ msg: "请求错误，请重试", status: !1 }) }).fail(s)
        },
        deleteLive: function(e) {
            return $.ajax({ url: "/delete_article/", data: e, dataType: "json", type: "post" }).then(function(e) { "success" == e.message ? i.popupTip({ msg: "删除成功", status: !0, duration: 0, callback: function() { location.reload() } }) : s() }, s)
        }
    }
});;
define("pagelet/live/preview.js", function(require, exports, module) {
    function Preview(e) { this.$el = $(PREVIEW_TMPL()), this.$el.appendTo($("body")), this.sourceUrl = e }
    var PREVIEW_TMPL = function(obj) {
        {
            var __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="modal preview-modal" data-backdrop="static">\n	<div class="modal-dialog-wrapper">\n		<div class="modal-dialog" style="width: 400px;">\n			<div class="modal-content">\n				<div class="modal-body">\n                    <div class="videoposter-header" style="padding-top: 15px">\n                        <h1 class=\'video_uploader_line\'>直播预览</h1>\n                        <div class="close" style="top: 0; right: 0;"></div>\n                    </div>\n                    <div class="preview tt-video-box" tt-server="" tt-streamname=""></div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n';
        return __p
    };
    module.exports = Preview, $.extend(Preview.prototype, {
        show: function(e) {
            if (this.sourceUrl !== e) {
                this.sourceUrl = e;
                var i = !1;
                "/" === e[e.length - 1] && (i = !0);
                var t = e.split("/"),
                    o = i ? t.splice(-2).join("/") : t.pop(),
                    s = this.$el.find(".preview");
                s.attr("tt-server", t.join("/")), s.attr("tt-streamname", o), $rtmpplayer$(".preview"), this.$el.modal("show");
                var r = this;
                this.$el.on("click", ".close", function() { r.hide() })
            }
        },
        hide: function() { this.$el.modal("hide"), this.$el.find(".preview").empty(), this.sourceUrl = null }
    })
});;
define("pagelet/jialiao/jialiao_live/jialiao_live.js", function(require, exports, module) {
    var stip = require("common/stip/stip.js"),
        Dialog = require("common/popup/dialog.js"),
        ROOM_ITEM_TEMPLATE = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<div class="chat-item">\n    <div class="item-info" data-index="' + (null == (__t = obj.index) ? "" : _.escape(__t)) + '" data-pgc-id="' + (null == (__t = obj.pgc_id) ? "" : _.escape(__t)) + '" data-item-id="' + (null == (__t = obj.item_id) ? "" : _.escape(__t)) + '" data-group-id="' + (null == (__t = obj.group_id) ? "" : _.escape(__t)) + '" data-jialiao-id="' + (null == (__t = obj.talk_live_id) ? "" : _.escape(__t)) + '">\n        <div class="item-image">\n            <img src="' + (null == (__t = obj.cover_url) ? "" : _.escape(__t)) + '">\n            ', "3" == obj.live_type && (__p += '\n            <div class="j_preview preview-mask" data-preview="' + (null == (__t = obj.preview_url) ? "" : _.escape(__t)) + '">\n                <i class="iconfont" title="预览">&#xe640;</i>\n            </div>\n            '), __p += '\n            <p class="figure">\n                <span class="status-desc">' + (null == (__t = obj.status_desc) ? "" : _.escape(__t)), 0 == obj.status && obj.confirm_reason && (__p += '<i style="margin-left: 4px;cursor:pointer;" class="iconfont jtip" title="' + (null == (__t = obj.confirm_reason) ? "" : _.escape(__t)) + '">&#xe632;</i>'), __p += "</span>\n                ", 1 == obj.live_status ? __p += '\n                    <span class="unstart item-status">' + (null == (__t = obj.jialiao_stime.slice(0, -3)) ? "" : _.escape(__t)) + " 开始</span>\n                " : 2 == obj.live_status ? __p += '\n                <span class="ongoing item-status">进行中</span>\n                ' : (__p += '\n                <span class="item-status">已结束 ', 1 == obj.live_replay && (__p += '| <span class="item-download j_item_download" data-time="' + (null == (__t = obj.pass_time) ? "" : _.escape(__t)) + '" data-live-id="' + (null == (__t = talk_live_id) ? "" : _.escape(__t)) + '" data-hovertitle="下载视频"></span>'), __p += "</span>\n                "), __p += "\n                ", "1" == obj.live_type ? __p += '\n                    <span class="people">' + (null == (__t = obj.entering_people_count || 0) ? "" : _.escape(__t)) + "人参与</span>\n                " : "3" == obj.live_type && (__p += '\n                    <span class="people">' + (null == (__t = obj.live_play_count || 0) ? "" : _.escape(__t)) + "人参与</span>\n                "), __p += '\n            </p>\n        </div>\n        <a href="' + (null == (__t = obj.article_url) ? "" : _.escape(__t)) + '" class="item-title" target="_blank">' + (null == (__t = obj.title) ? "" : _.escape(__t)) + '</a>\n        <div class="role-users">\n            ';
                for (var i = 0, role_user = obj.role_user, l = role_user.length; l > i; i++) {
                    __p += "\n                <span>" + (null == (__t = role_user[i].role_name) ? "" : _.escape(__t)) + ": </span>\n                ";
                    for (var j = 0, _l = role_user[i].user.length; _l > j; j++) __p += "\n                <span>" + (null == (__t = role_user[i].user[j].user_name) ? "" : _.escape(__t)) + "</span>\n                ";
                    __p += '\n                <span class="role-users-split"></span>\n            '
                }
                __p += '\n        </div>\n        <div class="item-config">\n            ', __p += 2 == obj.status || 5 == obj.status || 6 == obj.status || 7 == obj.status || 9 == obj.status ? '\n            <span class="config disabled modify no-preview jtip" title="' + (null == (__t = obj.status_desc + ", 禁止修改") ? "" : _.escape(__t)) + '">修改</span>\n            ' : '\n            <span item-id="' + (null == (__t = obj.pgc_id) ? "" : _.escape(__t)) + "\" article-status='" + (null == (__t = obj.status) ? "" : _.escape(__t)) + "' live-status='" + (null == (__t = obj.live_status) ? "" : _.escape(__t)) + '\' class="config modify j_modify_room no-preview">修改</span>\n            ', __p += '\n            <div class="division"></div>\n            <span class="config j_del_live del no-preview">删除</span>\n            ';
                var disabled = !1;
                __p += "\n            ", (0 == obj.status || 2 == obj.status || 5 == obj.status || 6 == obj.status || 7 == obj.status) && (disabled = !0, __p += "\n            "), __p += "\n            ", __p += 1 == obj.live_status ? '\n            <span class="j_start_live btn live-config-btn live-start-btn ' + (null == (__t = disabled ? "disabled" : "") ? "" : _.escape(__t)) + '"><i class="iconfont">&#xe640;</i>开始直播</span>\n            ' : 2 == obj.live_status ? '\n            <span class="j_end_live btn live-config-btn live-end-btn ' + (null == (__t = disabled ? "disabled" : "") ? "" : _.escape(__t)) + '"><i class="iconfont">&#xe63f;</i>结束直播</span>\n            ' : '\n            <span class="btn live-config-btn disabled">直播已结束</span>\n            ', __p += "\n        </div>\n    </div>\n</div>\n"
            }
            return __p
        },
        LIVE_LIST_API = "/get_live_talk_list/",
        LOAD_HEIGHT = 750,
        LIVESTATUS = ["聊天室不存在", "未开始", "进行中", "已结束"],
        service = require("pagelet/jialiao/live_create/service.js"),
        Preview = require("pagelet/live/preview.js"),
        previewer = new Preview;
    module.exports = Pagelet.extend({
        el: "#chat-list",
        events: { "click .j_start_live": "startLiveClick", "click .j_end_live": "endLiveClick", "click .j_del_live": "deleteLive", "click .j_modify_room": "modifyChatRoomClick", "click .j_preview": "previewLive", "click .j_item_download": "downloadVideoClick" },
        init: function(t) {
            this.liveType = t.live_type;
            var e = this;
            this.cacheInit(), this.dataInit(), this.$win.on("scroll", $.proxy(this.onWinScroll, this)), this.$dom.essay_loadmore.show(), this.getLiveList(function() {
                $(function() { window.scrollTo(0, 0) });
                var t = e.$win.scrollTop(),
                    i = e.$doc.height(),
                    s = e.$win.height();
                LOAD_HEIGHT > i - t - s && e.getLiveList()
            })
        },
        cacheInit: function() { this.$contentWrap = this.$el.find(".j_content_wrapper"), this.$blank = this.$el.find("#none-live") },
        dataInit: function() { this.$win = $(window), this.$doc = $(document), this.loading = !1, this.firstPage = !0, this.hasmore = !0, this.scrollTimer = "", this.count = 10, this.currentNum = 1, this.curMaxTime = 0, this.curItemId = 0, this.list = [] },
        downloadVideoClick: function(t) {
            var e = $(t.target).attr("data-time"),
                i = null;
            if (new Date(e).getTime() <= 14978016e5) return void(i = Dialog({ type: "jialiao", title: "下载提示", content: "仅支持2017年6月18日之后发起的直播", btns: [{ type: "ok", click: function() { i.remove() }, text: "关闭" }] }).show());
            var s = $(t.target).attr("data-live-id");
            $.ajax({ url: "/live/video_live_download_url/", dataType: "json", method: "GET", data: { jialiao_id: s } }).then(function(t) { "success" === t.message && t.data.download_url ? i = Dialog({ type: "jialiao", title: "下载提示", content: '<a href="' + t.data.download_url + ' " target="_blank">视频下载地址</a><p class="">请右键“另存为”或点击打开视频地址后保存视频</p><p>下载过程中如果断开，请重试</p>', btns: [{ type: "ok", click: function() { i.remove() }, text: "知道了" }] }).show() : stip.popupTip({ msg: t.reason || "下载获取失败，请刷新后重试", status: !1 }) }, function() { stip.popupTip({ msg: "下载获取失败，请刷新后重试", status: !1 }) })
        },
        getLiveList: function(t, e) {
            var i = this;
            i.loading || (i.loading = !0, $.ajax({ url: LIVE_LIST_API, type: "GET", dataType: "json", context: this, data: { live_type: this.liveType || 1, page_limit: i.count, page_num: i.currentNum || 1 } }).done(function(s) {
                i.$dom.essay_loadmore.hide(), i.loading = !1, s = s || {};
                var a = s.data ? s.data.articles : [];
                return "success" !== s.message && 0 == a.length ? (i.firstPage && (i.$dom.new_live.hide(), i.$blank.show()), void(i.hasmore = !1)) : (e || i.currentNum++, i.firstPage = 1 === this.currentNum, i.dataProcess(a), i.list = i.list.concat(a), i.checkLiveItemStatus(a), void("function" == typeof t && t()))
            }).fail(function() { i.$dom.essay_loadmore.hide(), i.loading = !1 }))
        },
        dataProcess: function(t) {
            for (var e = "", i = 0, s = t.length; s > i; i++) item = t[i], e = t[i].cover_url || "", t[i].cover_url = e.replace(/thumb/g, "large")
        },
        checkLiveItemStatus: function(t) {
            var e = this;
            $.ajax({ url: "/article/get_server_time/", type: "GET", dataType: "json" }).done(function(i) { "success" === i.message && e.render(t, i.data.server_time) }).fail(function() { stip.popupTip({ msg: "获取时间失败，请重试", status: !1 }) })
        },
        render: function(t, e) {
            for (var i, s = [], a = 0, n = t.length; n > a; a++) 1 == t[a].live_status && e > t[a].jialiao_stime && (t[a].live_status = 2), t[a].live_type = this.liveType, t[a].index = this.currentNum * this.count + a + 1, i = $(ROOM_ITEM_TEMPLATE(t[a])), i.find(".item-info").data(t[a]), i.find(".jtip").hoverTip(), s.push(i);
            this.$contentWrap.append(s)
        },
        onWinScroll: function() {
            var t = this;
            t.hasmore && (t.scrollTimer && clearTimeout(t.scrollTimer), t.scrollTimer = setTimeout(function() {
                var e = t.$win.scrollTop(),
                    i = t.$doc.height(),
                    s = t.$win.height();
                LOAD_HEIGHT > i - e - s && (t.$dom.essay_loadmore.show(), t.getLiveList())
            }, 50))
        },
        startLiveClick: function(t) {
            var e = this,
                i = $(t.target),
                s = i.closest(".item-info"),
                a = s.data(),
                n = a.live_status,
                o = a.status,
                l = a.status_desc;
            if (3 === o && 1 === n) e.startLiveRequest(a, s);
            else {
                var _ = null;
                _ = 3 !== o ? l + "，不能开始直播" : "直播" + LIVESTATUS[n], stip.popupTip({ msg: _, status: !1 })
            }
        },
        startLiveRequest: function(t, e) {
            var i = this;
            $.ajax({ type: "POST", dataType: "json", url: "/set_jialiao_status/", data: { item_id: t.pgcId, group_id: t.groupId, jialiao_id: t.jialiaoId, live_status: 2 } }).done(function(s) { "success" == s.message ? i.changeStartTime(e, t) : stip.popupTip({ msg: "网络错误，请重试", status: !1 }) }).fail(function() { stip.popupTip({ msg: "网络错误，请重试", status: !1 }) })
        },
        changeStartTime: function(t, e) {
            $.ajax({ url: "/article/get_server_time/", type: "GET", dataType: "json" }).done(function(i) {
                if ("success" === i.message) {
                    var s = 1e3 * i.data.server_time;
                    s = new Date(s).format("yyyy-mm-dd hh:MM"), e.jialiao_stime = s, e.live_status = 2;
                    var a = $(ROOM_ITEM_TEMPLATE(e));
                    t.parent().replaceWith(a), a.find(".manage-disabled").hoverTip(), a.find(".item-not-modify").hoverTip(), stip.popupTip({ msg: "直播开始设置成功", status: !0 })
                } else stip.popupTip({ msg: "网络繁忙，请重试", status: !1 })
            }).fail(function() { stip.popupTip({ msg: "获取时间失败，请重试", status: !1 }) })
        },
        endLiveClick: function(t) {
            var e = $(t.target),
                i = e.closest(".item-info"),
                s = i.data();
            this.endLiveRequest(s, i)
        },
        endLiveRequest: function(t, e) {
            $.ajax({ type: "POST", dataType: "json", url: "/set_jialiao_status/", data: { item_id: t.pgcId, group_id: t.groupId, jialiao_id: t.jialiaoId, live_status: 3 } }).done(function(i) {
                if ("success" == i.message) {
                    t.live_status = 3;
                    var s = $(ROOM_ITEM_TEMPLATE(t));
                    e.parent().replaceWith(s), s.find(".manage-disabled").hoverTip(), s.find(".item-not-modify").hoverTip(), stip.popupTip({ msg: "直播结束设置成功", status: !0 })
                } else stip.popupTip({ msg: "网络错误，请重试", status: !1 })
            }).fail(function() { stip.popupTip({ msg: "网络错误，请重试", status: !1 }) })
        },
        modifyChatRoomClick: function(t) {
            var e = $(t.target);
            if (e.hasClass("disabled")) return !1;
            var i = e.parents(".item-info");
            window.location = "/edit_jialiao_info/?item_id=" + i.data("itemId") + "&group_id=" + i.data("groupId")
        },
        deleteLive: function(t) {
            var e = $(t.target);
            if (!e.hasClass("disabled")) {
                var i = e.parents(".item-info"),
                    s = i.data("pgcId"),
                    a = i.data("groupId"),
                    n = i.data("jialiaoId") || a;
                Dialog({ title: "确定删除直播?", content: "如果直播未开始，删除也将取消直播。", btns: [{ type: "ok", click: function() { service.deleteLive({ group_id: a, pgc_id: s, jialiao_id: n }).then(function() {}) } }, "cancel"] }).show()
            }
        },
        previewLive: function(t) {
            var e = $(t.currentTarget);
            previewer.show(e.data("preview"))
        }
    })
});;
define("pagelet/jialiao/live_create/preview.js", function(require, exports, module) {
    function Preview(e, t) { this.$el = $(e), this.sourceUrl = t }
    var PREVIEW_TMPL = function(obj) {
        {
            var __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="preview tt-video-box" tt-server="" tt-streamname=""></div>\n';
        return __p
    };
    module.exports = Preview, $.extend(Preview.prototype, {
        show: function(e) {
            if (this.sourceUrl !== e) {
                this.sourceUrl = e;
                var t = !1;
                "/" === e[e.length - 1] && (t = !0), this.hide();
                var r = e.split("/");
                this.$el.html(PREVIEW_TMPL());
                var i = t ? r.splice(-2).join("/") : r.pop(),
                    o = this.$el.find(".preview");
                o.attr("tt-server", r.join("/")), o.attr("tt-streamname", i), $rtmpplayer$(".preview", 354, 612)
            }
        },
        hide: function() { this.$el.empty(), this.sourceUrl = null }
    })
});;
define("pagelet/jialiao/live_create/poster.js", function(require, exports, module) {
    function Poster(i, o) {
        this.$el = $(i), this.$modal = $(POSTER_TMPL()), this.option = o || {};
        var t = this;
        this.id = null, this.uploadUrl = null, this.attr = null, this.pluginId = 0, this.$el.find("input").fileupload(uploadOption).on({
            fileuploadadd: function(i, o) {
                return o.files[0].size && o.files[0].size > o.maxSize ? void Stip.alert("文件过大") : ($(this).prop("disabled", !0), t.$el.find("button").text("上传中"), void o.submit())
            },
            fileuploaddone: function(i, o) {
                $(this).prop("disabled", !1), t.$el.find("button").text("上传");
                var e = o.response().result;
                "string" == typeof e && (e = JSON.parse(e)), image_origin_uri = e.original, t.uploadUrl = e.url, t.pluginInit()
            },
            fileuploaderror: function() { Stip.alert("上传失败"), $(this).prop("disabled", !1), t.$el.find("button").text("上传") }
        }), this.$modal.on("click", ".close", function() { t.$modal.modal("hide"), t.$el.find('input[type="file"]').prop("disabled", !1), t.$el.find("button").text("上传") })
    } {
        var Stip = require("common/stip/stip.js"),
            POSTER_TMPL = function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="modal" data-backdrop="static">\n    <div class="modal-dialog-wrapper">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <h1 class=\'video_uploader_line\'></h1>\n                <div class="modal-body">\n                    <div class="videoposter-header">\n                        <div class="close"></div>\n                    </div>\n                    <div>\n                        <div id=\'modify_video_cover\'>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
                return __p
            },
            image_origin_uri = "",
            uploadOption = { maxSize: 5120, paramName: "upfile", dataType: "json", url: "//mp.toutiao.com/tools/upload_picture/" };
        0 == document.location.href.indexOf("https")
    }
    module.exports = Poster, $.extend(Poster.prototype, {
        pluginInit: function() {
            this.$modal.modal("show");
            var i = this;
            this.initEditor ? xiuxiu.loadPhoto(this.uploadUrl) : (this.initEditor = !0, xiuxiu.setLaunchVars("cropPresets", "750x422"), xiuxiu.setLaunchVars("avatarPreview", { visible: !0, label: "裁剪预览", large: { width: 140, height: 140, label: "大尺寸" } }), xiuxiu.setLaunchVars("cameraEnabled", 0), xiuxiu.setLaunchVars("localFileEnabled", 0), xiuxiu.embedSWF("modify_video_cover", 5, "100%", "400px"), xiuxiu.setUploadURL(uploadOption.url), xiuxiu.setUploadType(2), xiuxiu.setUploadDataFieldName("upfile"), xiuxiu.onInit = function(o) { i.pluginId = o, xiuxiu.loadPhoto(i.uploadUrl) }, xiuxiu.onUploadResponse = function(o) {
                i.response = o = JSON.parse(o), i.option.uploadend && i.option.uploadend(o), i.attr = { src: o.url, uri: o.original, origin_uri: image_origin_uri };
                var t = $("<img></img>").attr(i.attr);
                i.$el.find(".upload-zone").addClass("active").append(t), i.$modal.modal("hide")
            })
        },
        uploadThumb: function(i) {
            var o = { id: this.id, type: 2, thumb_uri: i.original, modify_type: 1 },
                t = this;
            $.ajax({ type: "POST", url: "/video/update_video_thumb/", data: { json_data: JSON.stringify(o) } }).done(function(i) { "success" === i.message ? t.find("image").attr("src", i.url) : Stip.alert("封面更新失败") }).fail(function() { Stip.alert("封面更新失败") }).always(function() { t.$modal.modal("hide") })
        }
    })
});;
define("pagelet/jialiao/live_create/live_create.js", function(e, t, i) {
    var s = e("pagelet/jialiao/live_create/preview.js"),
        r = e("pagelet/jialiao/live_create/poster.js"),
        a = e("common/stip/stip.js"),
        l = e("pagelet/jialiao/live_create/service.js"),
        n = window.listener,
        o = {},
        u = { LIVE_PULL: "拉流：是指服务器上已经有直播内容，用指定地址进行拉取。", LIVE_PUSH: "推流：是指把内容传输到平台指定的服务器地址的过程。" };
    i.exports = Pagelet.extend({
        el: "#pagelet-create-live",
        events: { "click .j_submit": "submitClick", "click .j_type_radio": "videoLiveTypeRadio", "click .test-radio": "testRadio", "click #preview-live": "previewClick", "click .poster-delete": "togglePoster", "change #channel_tags": "selectCategory", "click .j_replay": "replayClick", "keyup .j_live_title": "liveTitleInput", "blur .j_live_title": "liveTitleBlur", "keyup .j_live_abstract": "liveAbstractTextarea", "blur .j_live_abstract": "liveAbstractBlur", "blur .j_start_time": "checkStartTime", "change .j_start_time": "checkStartTime", "click .j_save_cut": "handleSaveCutVideo" },
        init: function(e) {
            this.option = e, this.backInfo = e.background ? JSON.parse(e.background) : {}, this.selectStartTime = 0, this.pushLiveInfo = null, this.liveUrl = "", this.articleType = e.tag_name || "news", this.liveStatus = e.live_status || 1, this.replay = 0 === e.live_replay.length ? 1 : e.live_replay, this.cacheInit(), this.initCoverUrl(e), this.content = this.contentFilter(e.content), this.$el.find(".j_live_abstract").text(this.content), this.pgcId = e.pgc_id, this.lastPullUrl = null, this.poster = new r(this.$el.find(".poster")), this.pgcId ? (this.liveType = e.background_type, this.initVideoLive(e)) : this.liveType = e.create_live_type || "1", this.$el.find(".explain").tooltip({
                html: !0,
                title: function() {
                    return u.LIVE_PUSH + "</br>" + u.LIVE_PULL
                }
            }), this.previewer = new s(this.$el.find(".preview-wrap")), this.eventCenter(), this.getSystemTime(), n.trigger("live_role_user", "render", this.option), window.onbeforeunload = function() {
                return "系统可能不会保存您所做的更改。"
            }, this.option.group_id && this.$urlInput.attr("disabled", !0).addClass("disabled"), 3 == e.live_status && 1 == e.live_replay && e.live_etime && e.live_stime && this.initVideoCutData()
        },
        initVideoCutData: function() {
            var e = this;
            return this.fullTime = parseInt((new Date(this.option.live_etime).getTime() - new Date(this.option.live_stime).getTime()) / 6e4, 10), this.endCutTime = this.fullTime, this.startCutTime = 0, (this.option.playback_stime || this.option.playback_etime) && (this.startCutTime = this.option.playback_stime / 60, this.endCutTime = this.option.playback_etime / 60), this.$cutHint = this.$el.find(".j_cut_hint"), this.$replayCutTime = this.$el.find(".j_replay_cuttime"), this.$startCutTime = this.$el.find(".j_start_cut_time"), this.$endCutTime = this.$el.find(".j_end_cut_time"), this.$endCutTimeValue = this.$endCutTime.find(".j_end_cut_time_value"), this.$startCutTimeValue = this.$startCutTime.find(".j_start_cut_time_value"), this.$saveCutBtn = $(".j_save_cut"), this.$startCutTimeValue.text(this.startCutTime), this.$endCutTimeValue.text(this.endCutTime), this.endCutTime - this.startCutTime < 1 ? ($(".j_no_cut").show(), void $(".j_replay_container").hide()) : ($(".j_no_cut").hide(), $(".j_replay_container").show(), void this.$replayCutTime.slider({ range: !0, min: 0, max: this.fullTime, values: [this.startCutTime, this.endCutTime], create: function() { e.$startCutButton = e.$el.find(".j_replay_cuttime").find(".ui-slider-handle")[0], e.$endCutButton = e.$el.find(".j_replay_cuttime").find(".ui-slider-handle")[1], e.$endCutTime.css({ left: e.$endCutButton.style.left }), e.$startCutTime.css({ left: e.$startCutButton.style.left }) }, start: function() {}, slide: function(t, i) { e.$startCutTimeValue.text(i.values[0]), e.$endCutTimeValue.text(i.values[1]), 0 != i.values[0] || i.values[1] != e.endCutTime ? e.$saveCutBtn.addClass("active") : e.$saveCutBtn.removeClass("active"), e.$endCutTime.css({ left: e.$endCutButton.style.left }), e.$startCutTime.css({ left: e.$startCutButton.style.left }), e.startCutTime = i.values[0], e.endCutTime = i.values[1] }, stop: function() { e.$endCutTime.css({ left: e.$endCutButton.style.left }), e.$startCutTime.css({ left: e.$startCutButton.style.left }) } }))
        },
        handleSaveCutVideo: function(e) {
            if ($(e.target).hasClass("active")) {
                var t = this;
                $.ajax({ url: "/live/edit_live_playback/", type: "POST", dataType: "json", data: { start_time: 60 * t.startCutTime, end_time: 60 * t.endCutTime, jialiao_id: t.option.jialiao_id, group_id: t.option.group_id } }).then(function(e) { t.$cutHint.show().text("success" === e.message ? "剪切已保存" : "剪切保存失败") }, function() { t.$cutHint.show().text("剪切保存失败") })
            }
        },
        initCoverUrl: function(e) {
            var t;
            e.pgc_feed_covers.length > 0 && (t = "//p3.pstatp.com/large/" + e.pgc_feed_covers[0].thumb_url, this.togglePoster({ src: t, uri: e.pgc_feed_covers[0].thumb_url, origin_uri: e.pgc_feed_covers[0].origin_uri }))
        },
        initVideoLive: function(e) {
            if (3 === e.background_type) {
                this.liveVideoType = this.backInfo.video.stream_type || 1, this.poster.id = this.backInfo.video.id;
                var t;
                2 === this.liveVideoType ? (this.$el.find(".j_type_radio.pull").addClass("checked"), t = this.backInfo.video.stream_url, o[t] = { live_id: this.backInfo.video.id, pull_url: t }) : (this.$el.find(".j_type_radio.push").addClass("checked"), t = this.backInfo.video.stream_url, this.pushLiveInfo = { live_id: this.backInfo.video.id, push_url: t, preview_url: e.preview_url || t }), this.$el.find("#source_url").val(t)
            } else this.liveType = "1";
            this.$el.find(".j_type_radio").parentsUntil(".edit-item").addClass("disabled"), e.live_replay || this.$el.find(".j_replay").hasClass("selected") && this.$el.find(".j_replay").removeClass("selected")
        },
        cacheInit: function() { this.$codeManage = this.$el.find(".j_code_manage"), this.$urlInput = this.$el.find('input[name="source_url"]'), this.$editTip = this.$el.find(".j_edit_tip"), this.$abstractTip = this.$el.find(".j_abstract_tip"), this.$startTimeTip = this.$el.find(".j_start_time_tip"), this.$titleInput = this.$el.find(".j_live_title"), this.$abstractTextarea = this.$el.find(".j_live_abstract"), this.$startTimeInput = this.$el.find(".j_start_time"), this.$endTimeInput = this.$el.find(".j_end_time") },
        eventCenter: function() {
            var e = this;
            n.on("live_role_user", "updateData", function(t, i) { e.option.role_user = i })
        },
        getSystemTime: function() {
            var e = this;
            $.ajax({ url: "/article/get_server_time/", type: "GET", dataType: "json" }).done(function(t) { "success" === t.message ? (e.systime = 1e3 * t.data.server_time, e.initStartTime(e.option, e.systime)) : a.popupTip({ msg: "网络繁忙，请重试", status: !1 }) }).fail(function() { a.popupTip({ msg: "获取时间失败，请重试", status: !1 }) })
        },
        replayClick: function(e) {
            var t = $(e.currentTarget);
            t.toggleClass("selected", this.replay), this.replay = t.hasClass("selected") ? 1 : 0
        },
        liveTitleInput: function(e) {
            var t = $(e.currentTarget),
                i = t.val().length;
            i >= 5 && (t.removeClass("error-input"), this.$editTip.removeClass("tip-show"))
        },
        liveTitleBlur: function(e) {
            var t = $(e.currentTarget),
                i = t.val().length;
            0 == i ? (t.addClass("error-input"), this.$editTip.addClass("tip-show").text("请输入直播名称")) : 5 > i && i > 0 ? (t.addClass("error-input"), this.$editTip.addClass("tip-show").text("请输入不要少于5个字")) : (t.removeClass("error-input"), this.$editTip.removeClass("tip-show"))
        },
        liveAbstractTextarea: function(e) {
            var t = $(e.currentTarget),
                i = t.val().length;
            i > 0 && (t.removeClass("error-input"), this.$abstractTip.removeClass("tip-show"))
        },
        liveAbstractBlur: function(e) {
            var t = $(e.currentTarget),
                i = t.val().length;
            0 == i ? (t.addClass("error-input"), this.$abstractTip.addClass("tip-show").text("请输入直播简介")) : (t.removeClass("error-input"), this.$abstractTip.removeClass("tip-show"))
        },
        selectCategory: function(e) {
            var t = $(e.target),
                i = t.val();
            this.articleType = i
        },
        initStartTime: function(e, t) {
            var i = this.$el.find(".j_start_time");
            0 !== e.live_stime.length && i.val(e.live_stime), this.pgcId && "1" != e.live_status || i.datetimepicker({ format: "yyyy-mm-dd hh:ii", autoclose: !0, startDate: new Date(t).format("yyyy-mm-dd hh:MM") })
        },
        checkStartTime: function(e) {
            var t = this,
                i = 0,
                s = $(e.currentTarget),
                r = s.val();
            return r ? void(this.pgcId && "1" != this.option.live_status || (r = Date.parseCN(r).getTime(), $.ajax({ url: "/article/get_server_time/", type: "GET", dataType: "json" }).done(function(e) { "success" === e.message ? (i = 1e3 * e.data.server_time, i > r ? (t.$startTimeTip.addClass("tip-show").text("直播开始时间要大于当前时间"), s.addClass("error-input")) : (t.$startTimeTip.removeClass("tip-show"), s.removeClass("error-input"))) : a.popupTip({ msg: "网络繁忙，请重试", status: !1 }) }).fail(function() { a.popupTip({ msg: "获取时间失败，请重试", status: !1 }) }))) : (t.$startTimeTip.addClass("tip-show").text("请填写直播开始时间"), void s.addClass("error-input"))
        },
        videoLiveTypeRadio: function(e) {
            if (!this.option.group_id) {
                var t = $(e.currentTarget);
                if (e.preventDefault(), !t.hasClass("checked")) {
                    this.$el.find(".j_type_radio.checked").removeClass("checked"), t.addClass("checked");
                    var i = t.find('input[type="radio"]');
                    i.prop("checked", !0), this.liveVideoType = i.val(), this.liveVideoTypeChange()
                }
            }
        },
        liveVideoTypeChange: function() {
            var e = this;
            1 == this.liveVideoType ? (e.lastPullUrl = e.$urlInput.val(), e.pushLiveInfo ? (e.$urlInput.val(e.pushLiveInfo.push_url), e.poster.id = e.pushLiveInfo.live_id) : l.getLivePushUrl().then(function(t) { e.pushLiveInfo = t, e.$urlInput.val(t.push_url), e.poster.id = t.live_id }, function(t) { e.$urlInput.val(""), a.alert(t) })) : e.$urlInput.val(e.lastPullUrl)
        },
        previewClick: function() {
            function e(e) {
                return e ? void i.previewer.show(e) : void a.alert("预览失败，未获取到预览地址")
            }
            var t = null,
                i = this;
            1 == i.liveVideoType ? (i.pushLiveInfo && (t = i.pushLiveInfo.preview_url, i.poster.id = i.pushLiveInfo.live_id), e(t)) : (t = i.$urlInput.val(), l.getLivePullUrl(t).then(function(s) { o[t] = s, i.poster.id = s.live_id, e(s.pull_url) }, function() { e(null) }))
        },
        getCoverInfo: function() {
            var e = this.$el.find(".poster img").attr("uri"),
                t = this.$el.find(".poster img").attr("origin_uri"),
                i = [{ uri: e, origin_uri: t }];
            return JSON.stringify(i)
        },
        togglePoster: function(e) {
            if (!e || this.$el.find(".poster .upload-zone").hasClass("active")) this.$el.find(".poster .upload-zone img").remove(), this.$el.find(".poster .upload-zone").removeClass("active");
            else {
                var t = $("<img></img>").attr(e);
                this.$el.find(".poster .upload-zone").addClass("active").append(t)
            }
        },
        roleUserInfo: function() {
            var e = [];
            return e = this.option.role_user ? this.option.role_user : [{ role_id: 1, role_name: "主持人", user: [] }, { role_id: 2, role_name: "嘉宾", user: [] }], JSON.stringify(e)
        },
        getAllMessage: function() {
            var e = $.Deferred(),
                t = this.$el.find("input,textarea").so();
            t.source_url = this.$el.find("#source_url").val();
            var i = this.getCoverInfo();
            if (this.liveVideoType = this.liveVideoType || "2", "3" == this.liveType) {
                var s = 1 == this.liveVideoType ? this.pushLiveInfo : o[t.source_url];
                if (!s) return e.reject("请先「预览」直播地址"), e.promise()
            }
            var r = this.contentProcess(t.abstract),
                a = this.roleUserInfo(),
                l = "",
                n = "";
            0 !== t.start_time.length && (l = Date.parseCN(t.start_time), n = l.clone().h(l.h() + 168));
            var u = { title: t.title, content: r, tag: this.articleType, pgc_feed_covers: i, article_type: 5, live_status: this.liveStatus, live_stime: l ? l.getTime() / 1e3 : "", live_etime: n ? n.getTime() / 1e3 : "", role_user: a, need_recommend: t.test ? 0 : 1 };
            "3" == this.liveType && (u.live_url = 1 == this.liveVideoType ? s.push_url : s.pull_url, u.preview_url = 1 == this.liveVideoType ? s.preview_url : s.pull_url, u.live_type = this.liveVideoType, u.live_replay = this.replay, u.live_id = this.poster.id), this.pgcId && (u.pgc_id = this.pgcId, u.jialiao_id = this.option.jialiao_id);
            var p = this.$el.find(".poster img").attr("uri"),
                d = null;
            return (d = this.validateMessage(u, p)) ? e.reject(d) : e.resolve(u), e.promise()
        },
        validateMessage: function(e, t) {
            return 0 == e.title.length ? (this.$titleInput.addClass("error-input"), this.$editTip.addClass("tip-show").text("请输入直播名称"), "请填写直播标题") : e.title.length <= 4 && e.title.length > 0 ? (this.$titleInput.addClass("error-input"), this.$editTip.addClass("tip-show").text("请输入不要少于5个字"), "标题长度应该大于5个字") : 0 == e.content.length ? (this.$abstractTextarea.addClass("error-input"), this.$abstractTip.addClass("tip-show").text("请输入直播简介"), "请输入直播简介") : e.live_stime ? e.live_stime > e.live_etime ? "直播开始时间不能大于结束时间" : t && 0 !== t.length ? void 0 : "请设置封面图片" : (this.$startTimeTip.addClass("tip-show"), this.$startTimeInput.addClass("error-input"), "请输入直播开始时间")
        },
        contentProcess: function(e) {
            return e ? e.replace(/\\r\\n/g, "<br>").replace(/\\n/g, "<br>") : ""
        },
        contentFilter: function(e) {
            return e && -1 !== navigator.userAgent.indexOf("Mac") ? e.replace(/<br>/g, "\r\n").replace(/<p>/g, "").replace(/<\/p>/g, "") : e.replace(/<br>/g, "\n").replace(/<p>/g, "").replace(/<\/p>/g, "")
        },
        submitClick: function() { this.submitRequest() },
        submitRequest: function() {
            var e = this;
            this.getAllMessage().then(function(t) {
                return e.isOnlyUserChange(t) ? void l.updateRoleUser(e.roleUserInfo(), e.pgcId, e.option.group_id, e.option.jialiao_id, e.liveType) : void $.ajax({ type: "POST", dataType: "json", url: "/core/article/edit_article_post/?source=mp&type=livecreate", data: t }).done(function(t) { "提交成功" == t.message ? (window.onbeforeunload = null, a.popupTip({ msg: t.message, status: !0, duration: 0, callback: function() { window.location = "/live/?live_type=" + e.liveType } })) : a.alert(t.message) }).fail(function() { a.popupTip({ msg: "服务异常，请稍后再试", status: !1 }) })
            }, function(e) { a.alert(e) })
        },
        testRadio: function(e) {
            var t = $(e.currentTarget);
            t.hasClass("checked") ? (t.removeClass("checked"), t.find("input").prop("checked", !1)) : (t.addClass("checked"), t.find("input").prop("checked", !0)), e.preventDefault()
        },
        isOnlyUserChange: function(e) {
            if (!this.pgcId) return !1;
            if (this.content !== e.content) return !1;
            if (this.option.title !== e.title) return !1;
            if (this.option.need_recommend !== e.need_recommend) return !1;
            if (e.live_stime !== Date.parseCN(this.option.live_stime).getTime() / 1e3) return !1;
            if (JSON.parse(e.pgc_feed_covers)[0].uri !== this.option.pgc_feed_covers[0].thumb_url) return !1;
            if (this.option.tag_name !== e.tag) return !1;
            if (3 == this.option.background_type) {
                var t = this.backInfo.video;
                if (t.id !== e.live_id) return !1
            }
            return !0
        }
    })
});;
define("pagelet/jialiao/live_manage/live_manage.js", function(t, i, e) {
    var n = t("common/stip/stip.js"),
        s = ["聊天室不存在", "未开始", "进行中", "已结束"],
        o = window.listener;
    e.exports = Pagelet.extend({
        el: "#pagelt-manage-live",
        events: { "click .j_submit": "submitClick" },
        init: function() { this.cacheInit(), this.getInitData(), this.eventCenter() },
        cacheInit: function() { this.$liveTitle = this.$el.find(".j_live_title"), this.$liveAbstract = this.$el.find(".j_live_info"), this.$liveStatus = this.$el.find(".j_live_status") },
        eventCenter: function() {
            var t = this;
            o.on("live_role_user", "updateData", function(i, e) { t.option.role_user = e })
        },
        getInitData: function() {
            var t = this;
            t.item_id = t.getQueryString("item_id"), t.group_id = t.getQueryString("group_id"), $.ajax({ url: "/get_jialiao_info/", type: "POST", dataType: "json", data: { item_id: t.item_id, group_id: t.group_id } }).done(function(i) { "success" === i.message ? (t.option = i.data, t.dataInit(t.option), t.renderTop(), o.trigger("live_role_user", "render", t.option)) : n.popupTip({ msg: "网络错误，请重试", status: !1 }) }).fail(function() { n.popupTip({ msg: "网络错误，请重试", status: !1 }) })
        },
        getQueryString: function(t) {
            var i = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                e = window.location.search.substr(1).match(i);
            return null != e ? unescape(e[2]) : null
        },
        dataInit: function(t) { this.role_user = t.role_user, this.role_id = 0 },
        renderTop: function() {
            var t = s[this.option.live_status];
            this.$liveTitle.text(this.option.title), this.$liveAbstract.text(this.option.abstract), this.$liveStatus.text(t)
        },
        roleUserManage: function() {
            var t = [];
            if (this.option.role_user) t = this.option.role_user;
            else var t = [{ role_id: 1, role_name: "主持人", user: [] }, { role_id: 2, role_name: "嘉宾", user: [] }];
            return JSON.stringify(t)
        },
        submitClick: function() {
            var t = this,
                i = t.roleUserManage();
            $.ajax({ url: "/update_jialiao_info/", type: "POST", dataType: "json", data: { role_user: i, item_id: t.item_id, group_id: t.group_id } }).done(function(t) { n.popupTip("success" == t.message ? { msg: "提交成功", status: !0, duration: 0, callback: function() { window.location = "/live/" } } : { msg: "请求错误，请重试", status: !1 }) }).fail(function() { n.popupTip({ msg: "网络错误，请重试", status: !1 }) })
        }
    })
});;
define("pagelet/jialiao/live_role_user/live_role_user.js", function(require, exports, module) {
    var stip = require("common/stip/stip.js"),
        ROLE_USER_TEMPLATE = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr>\n    <td class="role-user-role">' + (null == (__t = obj.role_name) ? "" : _.escape(__t)) + "</td>\n    <td>" + (null == (__t = obj.name) ? "" : _.escape(__t)) + "</td>\n    <td>\n        ", __p += obj.isNew ? "\n            审核后生成地址\n        " : '\n        <a href="' + (null == (__t = obj.user_url) ? "" : _.escape(__t)) + '" target="_blank">点击获取</a>\n        ', __p += '\n    </td>\n    <td>\n        <span role-id="' + (null == (__t = obj.role_id) ? "" : _.escape(__t)) + '" user-id="' + (null == (__t = obj.user_id) ? "" : _.escape(__t)) + '" class="j_delete_user delete-user">删除</span>\n    </td>\n</tr>\n';
            return __p
        },
        eventCenter = window.listener;
    module.exports = Pagelet.extend({
        el: "#live_role_user",
        events: { "click .j_add_role": "addRoleClick", "click .j_add_user": "addUserClick", "click .j_delete_user": "deleteUserClick", "click .j_delete_role": "deleteRoleClick" },
        init: function() { this.userIdList = [], this.option = [{ role_id: 1, role_name: "主持人", user: [] }, { role_id: 2, role_name: "嘉宾", user: [] }], this.initAddUser(), this.cacheInit(), this.eventCenter() },
        cacheInit: function() { this.$roleList = this.$el.find("#role-list"), this.$userList = this.$el.find("#user-list"), this.$addRoleInput = this.$el.find(".j_add_role_input"), this.$addUserInput = this.$el.find(".j_add_user_input"), this.$userSelect = this.$el.find("#user-type") },
        initAddUser: function() {
            var e, t = this;
            this.$el.find(".add-user").selectize({
                valueField: "user_id",
                labelField: "user_email",
                searchField: "user_name",
                create: !1,
                maxItems: 1,
                onItemAdd: function(e) {
                    var r = this.getOption(e);
                    t.addRoleUser({ name: r.data("name"), user_id: e }), this.clearOptions()
                },
                onBlur: function() { this.clearOptions() },
                render: {
                    option: function(e) {
                        return '<div data-name="' + e.user_name + '" class="user-list-item"><img class="user-list-avatar" src=' + e.avatar_url + ">" + e.user_name + "</div>"
                    }
                },
                load: function(r, s) {
                    return e = r, r ? void t.queryUids(r, s) : void s()
                }
            })
        },
        updateDataToLive: function() {
            var e = this;
            eventCenter.trigger("live_role_user", "updateData", e.role_user)
        },
        eventCenter: function() {
            var e = this;
            eventCenter.on("live_role_user", "render", function(t, r) { e.dataInit(r.role_user || []), e.renderUser() })
        },
        dataInit: function(e) { this.role_user = e, this.role_id = 0 },
        renderUser: function() {
            var e = this.role_user;
            this.userIdList = [];
            for (var t, r, s = "", i = 0, n = e.length; n > i; i++)
                if (t = e[i], t.user.length > 0)
                    for (var u = 0, l = t.user.length; l > u; u++) this.userIdList.push(r = { name: t.user[u].user_name, user_id: t.user[u].user_id, role_id: t.role_id, role_name: t.role_name, user_url: t.user[u].user_url }), s += ROLE_USER_TEMPLATE(r);
            this.userIdList.length ? this.$userList.show() : this.$userList.hide(), this.$userList.find("tbody").html(s)
        },
        addRoleUser: function(e) {
            var t = this.$userSelect.val(),
                r = this.getRoleIdByName(t);
            if (0 === t.length) return void stip.popupTip({ msg: "请选择角色类型", status: !1 });
            var s = $.extend({ role_name: t, role_id: r, isNew: !0 }, e),
                i = this.userIdList.some(function(e) {
                    return e.user_id === s.user_id
                });
            i || (this.userIdList.push(s), this.updateRoleUser(s.role_name, s.user_id, s.role_id, s.name), this.updateDataToLive(), this.$el.find("#user-list").append($(ROLE_USER_TEMPLATE(s))), this.$userList.show())
        },
        queryUids: function(e, t) { $.ajax({ url: "/get_jialiao_uid_by_uname/", type: "GET", dataType: "json", data: { user_name: e } }).done(function(e) { "success" === e.message ? t(e.user_id_list) : (stip.popupTip({ msg: "请求错误，请重试", status: !1 }), t()) }).fail(function() { stip.popupTip({ msg: "请求错误，请重试", status: !1 }), t() }) },
        userNameProcess: function(e, t, r, s) {
            var i = this;
            0 !== e.user_id ? (i.user_id = e.user_id, -1 === i.userIdList.indexOf(i.user_id) ? (i.updateRoleUser(t, i.user_id, r, s), i.renderUser()) : stip.popupTip({ msg: "请勿重复添加", status: !1 }), i.clearInput(i.$addUserInput), i.updateDataToLive()) : stip.popupTip({ msg: "该用户名不是头条用户", status: !1 })
        },
        updateRoleUser: function(e, t, r, s) {
            for (var i, n = this.role_user, u = 0, l = n.length; l > u; u++) {
                var o = n[u];
                if (o.role_id == r) return i = { user_id: t, user_name: s }, this.role_user[u].user.push(i), !0
            }
            i = { role_id: r, role_name: e, user: [{ user_id: t, user_name: s }] }, this.role_user.push(i), this.clearInput(this.$addUserInput)
        },
        deleteUserClick: function(e) {
            var t = $(e.target),
                r = t.attr("role-id"),
                s = t.attr("user-id");
            this.deleteUserData(r, s), t.parents("tr").remove(), this.userIdList.length || this.$userList.hide(), this.updateDataToLive()
        },
        deleteUserData: function(e, t) {
            this.userIdList = this.userIdList.filter(function(e) {
                return e.user_id.toString() != t
            });
            for (var r = this.role_user, s = 0; s < r.length; s++)
                if (r[s].role_id == e)
                    for (var i = 0; i < r[s].user.length; i++) r[s].user[i].user_id == t && this.role_user[s].user.splice(i, 1)
        },
        clearInput: function(e) { e.val("") },
        renderRole: function() {
            for (var e, t = this.role_user, r = [], s = 0, i = t.length; i > s; s++) e = t[s], r.push($(ROLE_TYPE_TEMPLATE(e))), this.role_id = e.role_id > this.role_id ? e.role_id : this.role_id;
            this.$roleList.html(r)
        },
        renderSelect: function() {
            for (var e, t = this.role_user, r = "", s = 0, i = t.length; i > s; s++) e = t[s], r += '<option value="' + e.role_name + '">' + e.role_name + "</option>";
            this.$userSelect.html(r)
        },
        userInputChange: function(e) {
            var t = $(e.target);
            t.val().length > 0 ? t.removeClass("error-user-input") : t.addClass("error-user-input")
        },
        addRoleClick: function() {
            var e = this.$addRoleInput.val();
            if (0 !== e.length) {
                this.role_id += 1;
                var t = { role_id: this.role_id, role_name: e, user: [] };
                this.role_user.push(t), this.$roleList.append($(ROLE_TYPE_TEMPLATE(t)));
                var r = "<option value=" + e + ">" + e + "</option>";
                this.$userSelect.append(r), this.clearInput(this.$addRoleInput), this.updateDataToLive()
            }
        },
        getRoleIdByName: function(e) {
            for (var t = this.option, r = 0, s = t.length; s > r; r++)
                if (t[r].role_name == e) return t[r].role_id
        },
        deleteRoleClick: function(e) {
            var t = $(e.target),
                r = t.attr("role-id");
            this.deleteRoleData(r), this.renderUser(), this.renderRole(), this.updateDataToLive()
        },
        deleteRoleData: function(e) {
            for (var t = this.role_user, r = 0; r < t.length; r++) t[r].role_id == e && this.role_user.splice(r, 1)
        }
    })
});;
define("pagelet/list/weitoutiao-share.js", function(require, exports, module) {
    var TuiDialog = require("common/popup/tui-dialog.js"),
        BODY_TMPL = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<textarea class="weitoutiao-share-textarea"></textarea>\n<div class="weitoutiao-share-preview">\n    <div class="weitoutiao-share-preview-img">\n        <img src="https://p1.pstatp.com/large/19f1000550f6b068b6a1" />\n    </div>\n    <div class="weitoutiao-share-preview-title">\n        <p></p>\n    </div>\n</div>\n\n';
            return __p
        },
        Stip = require("common/stip/stip.js");
    module.exports = function() {
        return {
            init: function() { this.item = null },
            getDialog: function() {
                var t = this;
                return this.$dialog || (this.$dialog = new TuiDialog({
                    title: "分享到头条圈",
                    body: BODY_TMPL(),
                    bodyCls: "tui-dialog-gray-bg",
                    hasCancelBtn: !1,
                    submitLabel: "分享",
                    onSubmit: function() {
                        var i = t.$textarea.val();
                        return i.length > 2e3 ? Stip.popupTip({ msg: "不能超过2000字", status: !1 }) : ($.ajax({ url: "/article/repost_weitoutiao/", data: { item_id: t.item.item_id, content: i }, type: "post", dataType: "json" }).done(function(i) {
                            return "success" == i.message ? (Stip.popupTip({ msg: "分享成功", status: !0 }), t.hide()) : void Stip.popupTip({ msg: i.reason || "分享失败", status: !1 })
                        }).fail(function() { Stip.popupTip({ msg: "分享失败", status: !1 }) }), !1)
                    }
                }), this.$textarea = this.$dialog.find("textarea"), this.$previewImg = this.$dialog.find(".weitoutiao-share-preview-img"), this.$previewTitle = this.$dialog.find(".weitoutiao-share-preview-title")), this.$dialog
            },
            setItem: function(t, i, e) { t ? this.$previewImg.show().find("img").attr("src", t) : this.$previewImg.hide(), this.$previewTitle.html(i), this.$textarea.val(e || "") },
            show: function(t) { this.item = t, this.getDialog().modal("show"), t && this.setItem(t.img, t.title, t.text) },
            hide: function() { this.$dialog.modal("hide"), this.$textarea.val(""), this.item = null }
        }
    }
});;
define("pagelet/list/list.js", function(require, exports, module) {
    var Dialog = require("common/popup/dialog.js"),
        bdshare = require("common/util/bdshare.js"),
        util = require("common/util/util.js"),
        Stip = require("common/stip/stip.js"),
        Vali = require("common/vali/vali.js"),
        popalert = require("pagelet/popalert/popalert.js"),
        videoposter = require("common/videoposter/videoposter.js"),
        ESSAY_LIST_API = "/core/article/media_article_list/",
        ESSAY_SEARCH_API = "/search_media_article_list/",
        WeitoutiaoShare = require("pagelet/list/weitoutiao-share.js"),
        LIST_TEMPLATE = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var i = 0; i < data.articles.length; i++) {
                    var item = data.articles[i],
                        now_unix = Math.floor(Date.now() / 1e3);
                    if (item.create_time && now_unix - item.create_time > 604800 && (item.expired_seven_days = 1), __p += '\n<div class="essay-item"\n    data-id="' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + '"\n    data-idd="' + (null == (__t = item.id) ? "" : _.escape(__t)) + '"\n    data-iid="' + (null == (__t = item.item_id) ? "" : _.escape(__t)) + '"\n    data-gid="' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + '"\n    data-pid="' + (null == (__t = item.pgc_id) ? "" : _.escape(__t)) + '"\n    data-atype="' + (null == (__t = item.article_type) ? "" : _.escape(__t)) + '"\n    data-bid="' + (null == (__t = item.book_id) ? "" : _.escape(__t)) + '"\n    data-status="' + (null == (__t = item.status_desc) ? "" : _.escape(__t)) + '"\n    data-pushstatus="' + (null == (__t = item.push_status) ? "" : _.escape(__t)) + '"\n    >\n    <div class="essay-basic-info ', item.large_image_url && (__p += "essay-show-image"), __p += '">\n        <div class="sclearfix">\n        <a class="essay-title" href="' + (null == (__t = item.article_url) ? "" : _.escape(__t)) + '" target="_blank">' + (null == (__t = item.title) ? "" : _.escape(__t)) + '</a>\n        </div>\n\n        <div class="essay-static sclearfix">\n            ', item.is_top_article && (__p += '\n            <span class="essay-top" id="essay-top"></span>\n            '), __p += "\n            ", item.is_fans_article && !item.was_recommended ? __p += '\n                    <span class="essay-fans-article essay-fans-disable" data-title="已占用必见发文篇数，必须已推荐文章才可粉丝必见">必见</span>\n            ' : (__p += "\n                ", item.is_fans_article && (__p += '\n                    <span class="essay-fans-article">必见</span>\n                '), __p += "\n                ", item.was_recommended && (__p += '\n                        <span class="essay-recommended" id="essay-recommended"></span>\n                '), __p += "\n            "), __p += "\n\n            ", item.claim_origin && (__p += '\n                <span class="essay-claim_origin" id="essay-claim_origin"></span>\n            '), __p += '\n\n\n            <span class="essay-type">\n                ', item.has_video && (__p += "\n                  ", item.article_category ? __p += "\n                      " + (null == (__t = item.article_category_cn) ? "" : _.escape(__t)) + "\n                  " : (__p += "\n                      ", __p += item.tag_name ? "" + (null == (__t = item.tag_name) ? "" : _.escape(__t)) : "新闻", __p += "\n                  "), __p += "\n                "), __p += '\n            </span>\n            <span class="essay-time">' + (null == (__t = item.create_time2) ? "" : _.escape(__t)) + "</span>\n            ", "4" == item.article_type && "已发表" == item.status_desc ? (__p += "\n                ", __p += 1e3 * item.live_stime < now_time && 1e3 * item.live_etime > now_time ? '\n                    <span class="essay-status j_essay-status">直播中</span>\n                ' : 1e3 * item.live_etime < now_time ? '\n                    <span class="essay-status j_essay-status">直播结束</span>\n                ' : '\n                    <span class="essay-status j_essay-status">' + (null == (__t = item.status_desc) ? "" : _.escape(__t)) + "</span>\n                ", __p += "\n            ") : "5" == item.article_type && "已发表" == item.status_desc ? (__p += "\n                ", __p += "1" == item.live_status ? '\n                    <span class="essay-status j_essay-status">直播未开始</span>\n                ' : "2" == item.live_status ? '\n                    <span class="essay-status j_essay-status">直播进行中</span>\n                ' : "3" == item.live_status ? '\n                    <span class="essay-status j_essay-status">直播已结束</span>\n                ' : '\n                    <span class="essay-status j_essay-status">' + (null == (__t = item.status_desc) ? "" : _.escape(__t)) + "</span>\n                ", __p += "\n            ") : __p += '\n                <span class="essay-status j_essay-status">' + (null == (__t = item.status_desc) ? "" : _.escape(__t)) + "</span>\n            ", __p += "\n            ", !item.timer_status || "审核中" !== item.status_desc && "定时发表中" !== item.status_desc && "已发表" !== item.status_desc || (__p += '\n                <span class="essay-status">\n                    <i class="essay-timer-icon j_essay_timer_icon" data-title="定时发表时间：<br/>' + (null == (__t = item.timer_time) ? "" : _.escape(__t)) + '"></i>\n                    ', "定时发表中" === item.status_desc && (__p += '\n                        <a href="javascript:;" target="_self" class="essay-static-action j_essay_post_now" data-node="essayPostNow">立即发表</a>\n                    '), __p += "\n                </span>\n            "), __p += "\n\n            ", __p += "\n            ", item.ad_type && !item.push_del_desc && (__p += '\n                <span class="stip_hint ad_hint_class" data-title="该文章投放的广告类型是：' + (null == (__t = "3" == item.ad_type ? "头条广告" : 4 == item.ad_type ? "自营广告" : "不投广告") ? "" : __t) + '"></span>\n            '), __p += '\n\n            <span class="essay-status">' + (null == (__t = 2 == item.push_status ? "(已弹窗)" : "") ? "" : _.escape(__t)) + "</span>\n            ", item.push_del_desc && (__p += '\n                <span class="stip_hint" data-title="' + (null == (__t = item.push_del_desc) ? "" : __t) + '"></span>\n            '), __p += "\n            ", __p += "\n           ", 2 === item.spread_status && (__p += '\n               <a href="http://ad.toutiao.com/ad/?qt=ad_id&q=' + (null == (__t = item.ad_id) ? "" : _.escape(__t)) + '" target="_self" class="essay-static-action essay-link">查看</a>\n            '), __p += "\n\n            ", item.is_unpass && item.confirm_reason && (__p += '\n            <span class="essay-confirm-reason" title="' + (null == (__t = item.confirm_reason) ? "" : _.escape(__t)) + '">' + (null == (__t = item.confirm_reason) ? "" : _.escape(__t)) + "</span>\n            "), __p += "\n\n            ", __p += "\n            ", item.push_del_desc || !item.is_passed && !item.passed_modify_to_verify || (__p += "\n                ", "5" == item.article_type ? (__p += "\n\n                    <!--需要改写逻辑-->\n                    ", "1" == item.live_status && 1 != obj.source_type ? __p += '\n                        <a href="javascript: void(0);" class="essay-static-action essay-modify after-pass-modify" data-node="essay_modify" data-pgc-id=\'' + (null == (__t = item.id) ? "" : _.escape(__t)) + '\' data-passed="true"><i class="essay-modify-icon"  ga=\'列表页－修改\'></i>修改</a>\n                    ' : 1 != obj.source_type && (__p += "\n                        ", __p += "审核中" == item.status_desc || "修改审核中" == item.status_desc ? '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="审核中，禁止修改">\n                        ' : "1" != item.live_status && "已发表" == item.status_desc ? '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="直播进行中/直播已结束，禁止修改">\n                        ' : '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="禁止修改">\n                        ', __p += '\n                            <i class="essay-modify-icon" style="-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray;"  ga=\'列表页－修改\'></i>\n                        修改</span>\n                    '), __p += "\n\n\n                ") : (__p += "\n                    ", 0 != item.column_type && item.can_user_modify && 1 != obj.source_type ? __p += '\n                        <a href="javascript: void(0);" class="essay-static-action essay-modify after-pass-modify" data-node="essay_modify" data-pgc-id=\'' + (null == (__t = item.id) ? "" : _.escape(__t)) + '\' data-passed="true"><i class="essay-modify-icon"  ga=\'列表页－修改\'></i>修改</a>\n                    ' : 1 != obj.source_type && (__p += "\n                        ", __p += "审核中" == item.status_desc || "修改审核中" == item.status_desc ? '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="审核中，禁止修改">\n                        ' : item.confirm_reason ? '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="' + (null == (__t = item.confirm_reason) ? "" : _.escape(__t)) + '，禁止修改">\n                        ' : item.can_not_modify_time_out ? '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="14天前的文章，禁止修改">\n                        ' : 0 == item.column_type ? '\n                            <span class="j_reject_column_opers essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="连载文章暂不可修改、删除">\n                        ' : '\n                            <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="禁止修改">\n                        ', __p += '\n                            <i class="essay-modify-icon" style="-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray;"  ga=\'列表页－修改\'></i>\n                        修改</span>\n                    '), __p += "\n                "), __p += "\n            "), __p += "\n\n            ", __p += "\n            ", item.push_del_desc || (__p += "\n                ", item.was_recommended ? (__p += "\n                    ", __p += obj.data.has_promotion ? '\n                    <a href="\n    http://ad.toutiao.com/pgc_promotion/redirect_page/?group_id=' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + "&item_id=" + (null == (__t = item.item_id) ? "" : _.escape(__t)) + '&from=pcmanage" class="essay-static-action"  target="_blank" ga=\'投放\'> 投放 </a>\n                    ' : '\n                    <a href="https://mp.toutiao.com/spread/apply/?from=pcmanage" class="essay-static-action" target="_blank" ga=\'投放\'> 投放 </a>\n                    ', __p += "\n                ") : __p += '\n                    <span class="essay-static-action"> 投放<span class="stip_hint ad_hint_class" data-title="不是已推荐状态的内容不可投放" ga=\'投放\'></span> </span>\n                ', __p += "\n            "), __p += "\n\n            ", __p += "\n            ", !item.push_del_desc && (item.is_passed || item.passed_modify_to_verify || 1 == obj.source_type || 11 == item.status)) {
                        if (__p += "\n                <div class='essay-static-action more-action-list j_more_action ", 0 == item.column_type && (__p += "disable j_reject_column_opers"), __p += "' data-node=\"more_action\" data-title=\"连载文章暂不可修改、删除\">更多操作\n\n                        <div class ='more-action-list-div'>\n                            <ul class='more-action-list-ul j_more_action_ul' data-node='more_action_ul'>\n                                ", (item.is_passed || 1 == obj.source_type) && (__p += "\n                                    ", item.is_top_article ? __p += '\n                                    <li><a href="javascript:;" class="essay-static-action essay-cancel-top" data-node="essayCancelTop" data-gid="' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + "\" ga='取消顶置'>取消置顶</a></li>\n                                    " : item.group_id && (__p += '\n                                    <li><a href="javascript:;" class="essay-static-action essay-set-top" data-node="essaySetTop" data-gid="' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + '" data-pid="' + (null == (__t = item.id) ? "" : _.escape(__t)) + '" data-tm="' + (null == (__t = item.create_time) ? "" : _.escape(__t)) + "\" ga='列表页－顶置'>置顶</a></li>\n                                    "), __p += "\n                                "), __p += "\n                                ", 0 != item.column_type) {
                            if (__p += "\n                                ", __p += 0 == obj.source_type && 11 == item.status || 1 == obj.source_type && 40 == item.status ? '\n                                    <li>\n                                        <a href="javascript:;" class="essay-static-action j_essay_node_action"  data-node="essay_recovery" can-modify="' + (null == (__t = item.can_user_modify) ? "" : _.escape(__t)) + '" is-top="' + (null == (__t = item.is_top_article) ? "" : _.escape(__t)) + '" can-top="' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + "\"  ga='列表页－恢复到主要'>恢复到主页</a>\n                                    </li>\n                                " : '\n                                    <li>\n                                        <a href="javascript:;" class="essay-static-action j_essay_node_action"  data-node="essay_rollback" can-modify="' + (null == (__t = item.can_user_modify) ? "" : _.escape(__t)) + '" is-top="' + (null == (__t = item.is_top_article) ? "" : _.escape(__t)) + '" can-top="' + (null == (__t = item.group_id) ? "" : _.escape(__t)) + "\" ga='列表页－从主页撤回'>从主页撤回</a>\n                                    </li>\n                                ", __p += "\n                                ", "True" == data.has_hide_comment_permission && 3 === item.status && (__p += "\n                                ", __p += item.article_banned ? '\n                                <li>\n                                    <a href="javascript:;" class="essay-static-action essay-forbidden"  data-node="essay_forbidden" data-item_id="' + (null == (__t = item.id) ? "" : _.escape(__t)) + '" data-is_ban="1" ga=\'列表页－评论解禁\'>恢复评论</a>\n                                </li>\n                                ' : '\n                                <li>\n                                    <a href="javascript:;" class="essay-static-action essay-forbidden"  data-node="essay_forbidden" data-item_id="' + (null == (__t = item.id) ? "" : _.escape(__t)) + '" data-is_ban="0" ga=\'列表页－评论封禁\'>关闭评论</a>\n                                </li>\n                                ', __p += "\n                                "), __p += '\n                                <li>\n                                    <a href="javascript:;" class="essay-static-action essay-delete ', item.can_user_del || (__p += " disable-delete "), __p += ' j_more_essay_delete"  data-node="essay_delete" can-delete="' + (null == (__t = item.can_user_del) ? "" : __t) + '" data-passed="true" ga=\'列表页－删除\'><i class="iconfont icon-delete"></i>删除</a>\n                                </li>\n                                ', item.show_double_title_analyse) {
                                if (__p += "\n                                    ", item.multi_title.length) {
                                    __p += "\n                                        ";
                                    for (var i2 = 0, len = item.multi_title.length; len > i2; i2++) __p += "\n                                            ", 1 == item.multi_title[i2].source && (__p += '\n                                            <li>\n                                                <a target="_blank" href="http://mp.toutiao.com/profile_v2/diff/' + (null == (__t = item.pgc_id) ? "" : _.escape(__t)) + "/" + (null == (__t = item.multi_title[i2].slave_pgc_id_str) ? "" : _.escape(__t)) + '" class="essay-static-action" ga=\'列表页－双标题自动分析\'>双标题自动分析</a>\n                                            </li>\n                                            '), __p += "\n                                        ";
                                    __p += "\n                                    "
                                }
                                __p += "\n                                "
                            }
                            __p += "\n                                "
                        }
                        __p += "\n                            </ul>\n                        </div>\n                </div>\n            "
                    }
                    if (__p += "\n\n\n\n        </div>\n\n        ", item.was_recommended && item.pass_time && 0 == item.impression_count2 && now_time - new Date(item.pass_time.replace(/\s/, "T")).getTime() < 12e5 ? __p += '\n            <div class="essay-dynamic sclearfix">数据计算中，请稍候...</div>\n        ' : (__p += '\n            <ul class="essay-dynamic sclearfix">\n                ', item.is_passed || item.passed_modify_to_verify || 1 == obj.source_type || 11 == item.status ? (__p += '\n                    <li><span data-num="' + (null == (__t = item.impression_count) ? "" : _.escape(__t)) + '">推荐：' + (null == (__t = item.impression_count2) ? "" : _.escape(__t)) + "</span></li>\n\n                    ", "5" == item.article_type ? (__p += "\n                        ", "1" == item.article_live_type ? __p += '\n                            <li><span data-num="' + (null == (__t = item.entering_people_count) ? "" : _.escape(__t)) + '">参与人数：' + (null == (__t = item.entering_people_count) ? "" : _.escape(__t)) + "</span></li>\n                        " : "2" == item.article_live_type && (__p += '\n                            <li><span data-num="' + (null == (__t = item.entering_people_count) ? "" : _.escape(__t)) + '">参与人数：' + (null == (__t = item.entering_people_count) ? "" : _.escape(__t)) + "</span></li>\n                        "), __p += "\n                    ") : (__p += "\n                        ", item.show_go_detail_count && (__p += '\n                            <li><span data-num="' + (null == (__t = item.go_detail_count) ? "" : _.escape(__t)) + '">阅读：' + (null == (__t = item.go_detail_count2) ? "" : _.escape(__t)) + '</span><span class="stip_hint vertical-base" data-title="应用内阅读：' + (null == (__t = item.go_detail_count - item.external_visit_count) ? "" : _.escape(__t)) + "<br/> 应用外阅读：" + (null == (__t = item.external_visit_count) ? "" : _.escape(__t)) + '"></span></li>\n                        '), __p += "\n                        ", item.has_video && (__p += '\n                            <li><span data-num="' + (null == (__t = item.play_effective_count) ? "" : _.escape(__t)) + '">播放：' + (null == (__t = item.play_effective_count) ? "" : _.escape(__t)) + "</span></li>\n                        "), __p += "\n                        ", item.has_voice && (__p += '\n                            <li><span data-num="' + (null == (__t = item.play_voice_count) ? "" : _.escape(__t)) + '">收听：' + (null == (__t = item.play_voice_count) ? "" : _.escape(__t)) + "</span></li>\n                        "), __p += "\n                    "), __p += '\n\n\n                    <li><span data-num="' + (null == (__t = item.comment_count) ? "" : _.escape(__t)) + '">评论：' + (null == (__t = item.comment_count2) ? "" : _.escape(__t)) + '</span></li>\n                    <li><span class="essay-subscribe" data-num="' + (null == (__t = item.subscribe_count) ? "" : _.escape(__t)) + '">', __p += item.subscribe_count >= 0 ? "涨粉量：" + (null == (__t = item.counter_status ? item.subscribe_count : "计算中") ? "" : _.escape(__t)) : "掉粉量：" + (null == (__t = -1 * item.subscribe_count) ? "" : _.escape(__t)), __p += '</span></li>\n                    <li><span class="essay-repin" data-num="' + (null == (__t = item.share_count) ? "" : _.escape(__t)) + '" data-action="1">转发：' + (null == (__t = item.share_count2) ? "" : _.escape(__t)) + '</span></li>\n                    <li><span href="javascript:;" class="essay-fav" data-num="' + (null == (__t = item.favorite_count) ? "" : _.escape(__t)) + '" data-action="2">收藏：' + (null == (__t = item.favorite_count2) ? "" : _.escape(__t)) + "</span></li>\n                    ", parseInt(data.has_abtest_permission) && item.was_recommended && !item.expired_seven_days && 0 == obj.source_type && (__p += '\n                        <li><a target="_blank" href="/profile_v2/diagnosis/' + (null == (__t = item.id) ? "" : _.escape(__t)) + '/0" class="essay-diagnosis" ga="列表页－推荐诊断"><i class="icon-diagnosis"></i>推荐诊断</a></li>\n                    '), __p += "\n                    ", __p += "\n                    ", item.push_del_desc || (__p += '\n                        <li class="share">\n                            <div class="sns-share">\n                                <ul class="sns-share-con sclearfix" data-node="sns_share" data-title="' + (null == (__t = item.title) ? "" : _.escape(__t)) + '" data-item-id="' + (null == (__t = item.item_id) ? "" : _.escape(__t)) + '" data-url="' + (null == (__t = item.article_url) ? "" : _.escape(__t)) + '" data-desc="来自头条 www.toutiao.com" data-text="【' + (null == (__t = item.title) ? "" : _.escape(__t)) + '】（我在 @头条号 发了一篇文章）" ', item.large_image_url && (__p += 'data-pic="' + (null == (__t = item.large_image_url) ? "" : _.escape(__t)) + '"'), __p += '>\n                                    <li><a href="javascript:;" class="sns-weibo" data-type="tsina" data-node="" title="分享到新浪微博" ga=\'列表页－分享到新浪\'></a></li>\n                                    <li><a href="javascript:;" class="sns-qzone" data-type="qzone" data-node="" title="分享到QQ空间" ga=\'列表页－分享到QQ\'></a></li>\n                                    <li><a href="javascript:;" class="sns-weitoutiao" data-type="weitoutiao" data-node="" title="分享到头条圈" ga=\'列表页－分享到头条圈\'></a></li>\n                                </ul>\n                                <div class="sns-share-tri">\n                                    <i></i>\n                                </div>\n                            </div>\n                            <a href="javascript:;" class="essay-share"><i class="essay-share-icon"></i>分享</a>\n                        </li>\n                    '), __p += "\n\n                ") : (__p += "\n                    ", item.can_user_modify ? __p += '\n                    <li><a href="javascript: void(0);" class="essay-modify" data-node="essay_modify" data-pgc-id=\'' + (null == (__t = item.id) ? "" : _.escape(__t)) + '\' data-passed="false"><i class="essay-modify-icon"></i>修改</a></li>\n                    ' : 1 != obj.source_type && (__p += "\n                        <li>\n                            ", __p += "审核中" == item.status_desc || "修改审核中" == item.status_desc ? '\n                                <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="审核中，禁止修改">\n                            ' : item.confirm_reason ? '\n                                <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="' + (null == (__t = item.confirm_reason) ? "" : _.escape(__t)) + '，禁止修改">\n\n                            ' : item.can_not_modify_time_out ? '\n                                <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="14天前的文章，禁止修改">\n                            ' : '\n                                <span class="j_reject_modify essay-static-action essay-modify after-pass-modify" href="javascript:;" data-title="禁止修改">\n                            ', __p += '\n                                <i class="essay-modify-icon" style="-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray;"  ga=\'列表页－修改\'></i>\n                            修改</span>\n                        </li>\n                    '), __p += "\n                    ", item.can_user_del && 11 != item.status && (__p += '\n                        <li><a href="javascript:;" class="essay-delete"  data-node="essay_delete" data-passed="false" ga=\'列表页－删除\' ', item.is_draft && (__p += " data-draft='true'"), __p += '><i class="essay-delete-icon"></i>删除</a></li>\n                    '), __p += "\n                    ", item.can_user_complain && (__p += '\n                        <li><a href="/user_complain/?pgc_id=' + (null == (__t = item.id) ? "" : _.escape(__t)) + '" class="essay-complain"  target="_blank" ga=\'列表页－申诉\'><i class="essay-complain-icon"></i>申诉</a></li>\n                    '), __p += "\n                "), __p += "\n            </ul>\n        "), __p += "\n        ", item.multi_title.length) {
                        __p += "\n            ";
                        for (var i1 = 0, len = item.multi_title.length; len > i1; i1++) __p += '\n                <div class="slave-title-zone">\n                    <div class="slave-title-name">\n                        ', __p += 1 == item.multi_title[i1].source ? '\n                            <i class="stip_hint slave-title-icon" data-title="' + (null == (__t = 2 == item.multi_title[i1].multi_type ? "双封面" : "双标题") ? "" : __t) + '"></i>\n                        ' : '\n                            <i class="stip_hint slave-bulb-icon" data-title="' + (null == (__t = 2 == item.multi_title[i1].multi_type ? "优化助手封面" : "优化助手标题") ? "" : __t) + '"></i>\n                        ', __p += "\n                        ", __p += item.multi_title[i1].slave_article_url ? '\n                                <a href="' + (null == (__t = item.multi_title[i1].slave_article_url) ? "" : _.escape(__t)) + '">' + (null == (__t = item.multi_title[i1].slave_title) ? "" : _.escape(__t)) + "</a>\n\n                        " : '\n                                <a href="/core/article/preview_article/?pgc_id=' + (null == (__t = item.multi_title[i1].slave_pgc_id_str) ? "" : _.escape(__t)) + '">' + (null == (__t = item.multi_title[i1].slave_title) ? "" : _.escape(__t)) + "</a>\n                        ", __p += "\n                        ", 2 == item.multi_title[i1].source && (__p += '\n                            <span class="stip_hint" data-title="（本标题和封面由智能小助手优化而来）"></span>\n                        '), __p += '\n                    </div>\n                    <div class="essay-static sclearfix">\n                                        ', item.is_fans_article && !item.multi_title[i1].slave_was_recommended ? __p += '\n                                                <span class="essay-fans-article essay-fans-disable" data-title="已占用必见发文篇数，必须已推荐文章才可粉丝必见">必见</span>\n                                        ' : (__p += "\n                                            ", item.is_fans_article && (__p += '\n                                                <span class="essay-fans-article">必见</span>\n                                            '), __p += "\n                            ", item.multi_title[i1].slave_was_recommended && (__p += '\n                                <span class="essay-recommended" id="essay-recommended"></span>\n                            '), __p += "\n                                        "), __p += "\n                        ", item.claim_origin && (__p += '\n                            <span class="essay-claim_origin"></span>\n                        '), __p += '\n                        <span class="essay-type">\n                            ', item.has_video && (__p += "\n                              ", item.article_category ? __p += "\n                                  " + (null == (__t = item.article_category_cn) ? "" : _.escape(__t)) + "\n                              " : (__p += "\n                                  ", __p += item.tag_name ? "\n                                      " + (null == (__t = item.tag_name) ? "" : _.escape(__t)) + "\n                                  " : "新闻", __p += "\n                              "), __p += "\n                            "), __p += '\n                        </span>\n                        <span class="essay-time">' + (null == (__t = item.create_time2) ? "" : _.escape(__t)) + "</span>\n                        ", __p += 3 == item.status ? '\n                                            <span class="essay-status j_essay-status">已发表</span>\n                                        ' : '\n                                                <span class="essay-status j_essay-status">' + (null == (__t = item.status_desc) ? "" : _.escape(__t)) + "</span>\n                        ", __p += "\n                        ", 2 == item.multi_title[i1].source && (__p += '\n                            <a href="javascript:;" class="essay-delete" data-id="' + (null == (__t = item.multi_title[i1].slave_item_id) ? "" : _.escape(__t)) + '"  data-node="essay_delete_source" data-passed="false" ga=\'优化标题－删除\' ', (3 == item.status || 9 == item.status) && (__p += " data-draft='true'"), __p += '><i class="essay-delete-icon"></i>删除</a>\n                        '), __p += "\n                    </div>\n                    ", (!item.multi_title[i1].slave_was_recommended || !item.pass_time || item.impression_count2 > 0 || now_time - new Date(item.pass_time.replace(/\s/, "T")).getTime() >= 12e5) && (__p += "\n                        ", (item.is_passed || item.passed_modify_to_verify || 1 == obj.source_type || 11 == item.status) && (__p += '\n                        <div class="slave-title-info">\n                            <ul class="essay-dynamic sclearfix">\n                                <li><span data-num="' + (null == (__t = item.multi_title[i1].slave_impression_count) ? "" : _.escape(__t)) + '">推荐：' + (null == (__t = obj.convertNumberFormat(item.multi_title[i1].slave_impression_count)) ? "" : _.escape(__t)) + "</span></li>\n                                ", item.show_go_detail_count && (__p += '\n                                    <li><span data-num="' + (null == (__t = item.multi_title[i1].slave_go_detail_count) ? "" : _.escape(__t)) + '">阅读：' + (null == (__t = obj.convertNumberFormat(item.multi_title[i1].slave_go_detail_count)) ? "" : _.escape(__t)) + '</span><span class="stip_hint" data-title="应用内阅读：' + (null == (__t = item.multi_title[i1].slave_go_detail_count - item.multi_title[i1].slave_external_visit_count) ? "" : _.escape(__t)) + "<br/> 应用外阅读：" + (null == (__t = item.multi_title[i1].slave_external_visit_count) ? "" : _.escape(__t)) + '"></span></li>\n                                '), __p += "\n                                ", item.has_video && (__p += '\n                                    <li><span data-num="' + (null == (__t = item.multi_title[i1].slave_play_effective_count) ? "" : _.escape(__t)) + '">播放：' + (null == (__t = obj.convertNumberFormat(item.multi_title[i1].slave_play_effective_count)) ? "" : _.escape(__t)) + "</span></li>\n                                "), __p += "\n                                ", item.has_voice && (__p += '\n                                    <li><span data-num="' + (null == (__t = item.multi_title[i1].slave_play_voice_count) ? "" : _.escape(__t)) + '">收听：' + (null == (__t = item.multi_title[i1].slave_play_voice_count) ? "" : _.escape(__t)) + "</span></li>\n                                "), __p += '\n                                <li><span data-num="' + (null == (__t = item.multi_title[i1].slave_comment_count) ? "" : _.escape(__t)) + '">评论：' + (null == (__t = obj.convertNumberFormat(item.multi_title[i1].slave_comment_count)) ? "" : _.escape(__t)) + '</span></li>\n                                <li><span class="essay-subscribe" data-num="' + (null == (__t = item.multi_title[i1].slave_subscribe_count) ? "" : _.escape(__t)) + '">', __p += item.multi_title[i1].slave_subscribe_count >= 0 ? "涨粉量：" + (null == (__t = item.counter_status ? item.multi_title[i1].slave_subscribe_count : "计算中") ? "" : _.escape(__t)) : "掉粉量：" + (null == (__t = -1 * item.multi_title[i1].slave_subscribe_count) ? "" : _.escape(__t)), __p += '</span></li>\n                                <li><span class="essay-repin" data-num="' + (null == (__t = item.multi_title[i1].slave_share_count) ? "" : _.escape(__t)) + '" data-action="1">转发：' + (null == (__t = obj.convertNumberFormat(item.multi_title[i1].slave_share_count)) ? "" : _.escape(__t)) + '</span></li>\n                                <li><span href="javascript:;" class="essay-fav" data-num="' + (null == (__t = item.multi_title[i1].slave_favorite_count) ? "" : _.escape(__t)) + '" data-action="2">收藏：' + (null == (__t = obj.convertNumberFormat(item.multi_title[i1].slave_favorite_count)) ? "" : _.escape(__t)) + "</span></li>\n                                ", parseInt(data.has_abtest_permission) && item.multi_title[i1].slave_was_recommended && !item.expired_seven_days && 0 == obj.source_type && 2 != item.multi_title[i1].source && (__p += '\n                                <li><a target="_blank" href="/profile_v2/diagnosis/' + (null == (__t = item.multi_title[i1].slave_pgc_id_str) ? "" : _.escape(__t)) + "/" + (null == (__t = item.id) ? "" : _.escape(__t)) + '" class="essay-diagnosis" ga="列表页－推荐诊断"><i class="icon-diagnosis"></i>推荐诊断</a></li>\n                                '), __p += "\n                            </ul>\n                        </div>\n                        "), __p += "\n                    "), __p += "\n                </div>\n            ";
                        __p += "\n        "
                    }
                    if (__p += "\n\n        ", item.claim_origin && (__p += '\n        <ul class="essay-dynamic sclearfix">\n            <li>该文章疑似被抄袭 <a href="/article/item_plagiarism_stats/?item_id=' + (null == (__t = item.id) ? "" : _.escape(__t)) + '&from=article_list" class="slink" data-node="essay_dup" target="_blank" ga=\'列表页－抄袭文章管理\'>' + (null == (__t = item.dup_num) ? "" : _.escape(__t)) + "次</a></li>\n        </ul>\n        "), __p += "\n        ", item.large_image_url && (__p += '\n        <div class="essay-image">\n            <a href="' + (null == (__t = item.article_url) ? "" : _.escape(__t)) + '" target="_blank"><img src="' + (null == (__t = item.large_image_url.replace("thumb", "list/126x82")) ? "" : _.escape(__t)) + '">', item.has_video && (__p += '<i class="video-icon"></i>'), __p += "</a>\n            ", item.can_modify_video_cover && item.can_user_modify && 4 != item.article_type && (__p += '\n            <div class="modify-vposter" data-disable-system="' + (null == (__t = 2 == item.multi_type ? 1 : 0) ? "" : __t) + '" data-node="modify_vposter" data-id="' + (null == (__t = item.id) ? "" : _.escape(__t)) + '" ga="2视频封面-列表">修改视频封面</div>\n            '), __p += "\n        </div>\n        "), __p += "\n        ", item.multi_title.length && !item.is_draft && item.large_image_url) {
                        __p += "\n            ";
                        for (var i1 = 0, len = item.multi_title.length; len > i1; i1++) __p += "\n                ", item.multi_title[i1].multi_type && 1 != item.multi_title[i1].multi_type && item.multi_title[i1].slave_thumb_uri && (__p += "\n                ", 2 != item.multi_title[i1].source ? __p += '\n                    <div class="essay-sub-image">\n                ' : (__p += '\n                    <div class="essay-third-image ', len > 1 && (__p += "third-image-top"), __p += '">\n                '), __p += "\n                        ", __p += item.multi_title[i1].slave_article_url ? '\n                            <a target="_blank" href="' + (null == (__t = item.multi_title[i1].slave_article_url) ? "" : _.escape(__t)) + '">\n                        ' : '\n                            <a target="_blank" href="/core/article/preview_article/?pgc_id=' + (null == (__t = item.multi_title[i1].slave_pgc_id_str) ? "" : _.escape(__t)) + '">\n                        ', __p += '\n                                <img src="//p3.pstatp.com/list/126x82/' + (null == (__t = item.multi_title[i1].slave_thumb_uri) ? "" : _.escape(__t)) + '">\n                                ', item.has_video && (__p += '\n                                <i class="video-icon"></i>\n                                '), __p += "\n                            </a>\n                    </div>\n                "), __p += "\n            ";
                        __p += "\n        "
                    }
                    __p += "\n        </div>\n    </div>\n    </div>\n    ";
                    var group_id = item.group_id,
                        cmt = data.cmt_info[group_id];
                    if (cmt && cmt.comments.length && item.is_key_item) {
                        var comments = cmt.comments,
                            has_more = cmt.has_more;
                        __p += '\n    <div class="essay-comments">\n        <span class="essay-comments-tag">热门评论</span>\n        <ul class="essay-comments-con">\n            ';
                        for (var j = 0; j < comments.length; j++) {
                            { comments[j].id, encodeURIComponent(comments[j].user_name), encodeURIComponent(comments[j].text) }
                            __p += '\n            <li><div><a class="essay-comments-author" href="http://web.toutiao.com/user/' + (null == (__t = comments[j].user_id) ? "" : _.escape(__t)) + '/updates/" target="_blank">' + (null == (__t = comments[j].user_name) ? "" : _.escape(__t)), comments[j].user_verified && (__p += "<i>V</i>"), __p += '</a>:<span class="essay-comments-txt">' + (null == (__t = comments[j].text) ? "" : _.escape(__t)) + "</span></div></li>\n            "
                        }
                        __p += "\n        </ul>\n        ", has_more && 0 == obj.source_type && (__p += '\n        <a class="essay-comments-more" href="' + (null == (__t = item.article_url) ? "" : _.escape(__t)) + '#comments-anchor" target="_blank" ga=\'列表页－查看更多精彩评论\'>查看更多精彩评论</a>\n        '), __p += "\n    </div>\n    "
                    }
                    __p += "\n</div>\n"
                }
                __p += "\n"
            }
            return __p
        },
        LOAD_HEIGHT = 750,
        INTERACTIVE_TEMPLATE = '<div class="interactive-users"><ul class="interactive-users-con users-loading sclearfix"></ul><i></i></div>',
        USER_TEMPLATE = '<li><a href="http://web.toutiao.com/user/{{user_id}}/updates/" target="_blank" title="{{screen_name}}的主页"><img src="{{avatar_url}}"></a></li>',
        MORE_TEMPLATE = '<li><a  class="interactive-users-more" href="http://web.toutiao.com/a{{group_id}}/#comments-anchor" title="查看更多" target="_blank">...</a></li>',
        ANONYMOUS_TMP1 = '<li class="anonymous-users">和{{num}}位未登录用户</li>',
        ANONYMOUS_TMP2 = '<li class="anonymous-users">文章被{{num}}位未登录用户{{action}}</li>',
        WEITOUTIAO_SHARE_TYPE = "weitoutiao",
        server_error = "服务异常，请稍后再试";
    module.exports = Pagelet.extend({
        el: "#pagelet-list",
        events: { "click $essay_repin": "onRepinClick", "click $essay_fav": "onFavClick", "click $list_all": "onAllClick", "click $list_passed": "onPassedClick", "click $list_unpassed": "onUnpassedClick", "click $list_draft": "onDraftClick", "click $list_hide": "onHideClick", "click $essay_delete": "onDelete", "click $essay_delete_source": "onDeleteThirdTitle", "click $essay_modify": "onModify", "click $sns_share": "onSnsShare", "click $essaySetTop": "onEssaySetTop", "click $essayCancelTop": "onEssayCancelTop", "click $modify_vposter": "onModifyVPoster", "click $essay_recovery": "onRecovery", "click $essay_rollback": "onRollback", "click $essayPostNow": "onPostNow", "click $essay_forbidden": "onForbidden", "change $list_type": "onTypeChange", "keyup $input_search": "onSearch" },
        init: function(t) {
            var e = this;
            this.$win = $(window), this.$doc = $(document), this.spec = t, this.media_type = t.media_type || 0, this.loading = !1, this.firstPage = !0, this.hasmore = !0, this.scrollTimer = "", this.count = t.count || 10, this.source_type = t.source_type || 0, this.status = t.status || "all", this.curMaxTime = t.from_time || 0, this.curItemId = 0, this.can_urgent_push = t.can_urgent_push || 0, this.urgent_push_remain_times = t.urgent_push_remain_times || 0, this.$push_modal = $("#push-modal"), this.$push_remain = $(".push-remain"), this.curPushId = 0, this.top_group_id = +t.top_group_id || 0, this.$win.on("scroll", $.proxy(this.onWinScroll, this)), this.$dom.essay_loadmore.show(), this.has_comment_banned_permission = t.has_comment_banned_permission, this.has_hide_comment_permission = t.has_hide_comment_permission, this.has_abtest_permission = t.has_abtest_permission, this.$input_search = $("#input_search"), this.issearch = !1, this.params = {}, this.$input_search.show(), this.getArticleList(function() {
                $(function() { window.scrollTo(0, 0) });
                var t = e.$win.scrollTop(),
                    a = e.$doc.height(),
                    s = e.$win.height();
                LOAD_HEIGHT > a - t - s && e.getArticleList()
            }), this.weitoutiaoShare = new WeitoutiaoShare, this.weitoutiaoShare.init()
        },
        render: function(t) {
            t.convertNumberFormat = this.convertNumberFormat, t && t.data && (t.data.has_comment_banned_permission = this.has_comment_banned_permission, t.data.has_hide_comment_permission = this.has_hide_comment_permission, t.data.has_abtest_permission = "True" === this.has_abtest_permission ? 1 : 0);
            var e = $(LIST_TEMPLATE(t));
            e.find(".stip_hint").hoverTip(), e.find(".j_essay_timer_icon").hoverTip(), e.find(".j_reject_modify").hoverTip(), e.find(".j_reject_column_opers").hoverTip(), e.find(".essay-fans-disable").hoverTip(), this.$dom.essayBox.append(e)
        },
        getArticleList: function(t) {
            if (!this.loading) {
                this.loading = !0;
                var e = { count: this.count, source_type: this.source_type, status: this.status, from_time: this.curMaxTime, item_id: this.curItemId, flag: this.firstPage ? 2 : 1 };
                $.ajax({
                    url: ESSAY_LIST_API,
                    type: "GET",
                    dataType: "json",
                    context: this,
                    data: e,
                    success: function(e) {
                        if (this.$dom.essay_loadmore.hide(), this.loading = !1, e = e || {}, "success" === e.message) {
                            var a = e.data.articles,
                                s = a.length,
                                i = e.data.last_time;
                            if (0 == s) return this.firstPage ? this.$dom.essay_none.show() : this.$dom.essay_nomore.show(), void(this.hasmore = !1);
                            this.firstPage = !1, this.curMaxTime = i, this.curItemId = a[s - 1].id, this.article_data_adjust(e), e.media_type = this.media_type, e.source_type = this.source_type, e.can_urgent_push = this.can_urgent_push, e.now_time = (new Date).getTime(), this.render(e), "function" == typeof t && t()
                        }
                    },
                    error: function() { this.$dom.essay_loadmore.hide(), this.loading = !1 }
                })
            }
        },
        getSearchList: function(t, e) {
            if (!this.loading) {
                this.params.keyword || (this.params = t), this.params.keyword = t.keyword, this.loading = !0;
                var a = { search_word: t.keyword, offset: t.offset, limit: t.limit, from_time: this.curMaxTime };
                $.ajax({
                    url: ESSAY_SEARCH_API,
                    type: "GET",
                    dataType: "json",
                    context: this,
                    data: a,
                    success: function(t) {
                        if (this.$dom.essay_loadmore.hide(), this.loading = !1, t = t || {}, "success" === t.message) {
                            t.data.articles || (t.data.articles = []);
                            var a = t.data.articles,
                                s = a.length,
                                i = t.data.last_time || 0;
                            if (0 == s) return this.firstPage ? this.$dom.essay_none.show() : this.$dom.essay_nomore.show(), void(this.hasmore = !1);
                            this.firstPage = !1, this.curMaxTime = i, this.curItemId = a[s - 1].id, this.article_data_adjust(t), t.media_type = this.media_type, t.source_type = this.source_type, t.can_urgent_push = this.can_urgent_push, t.now_time = (new Date).getTime(), this.render(t), "function" == typeof e && e()
                        }
                    },
                    error: function() { this.$dom.essay_loadmore.hide(), this.loading = !1 }
                })
            }
        },
        article_data_adjust: function(t) {
            for (var e = 0; e < t.data.articles.length; e++) {
                var a = t.data.articles[e],
                    s = new Date(1e3 * a.create_time),
                    i = s.getFullYear(),
                    _ = s.getMonth() + 1,
                    n = s.getDate(),
                    l = s.getHours(),
                    c = s.getMinutes();
                a.create_time2 = i + "-" + (_ > 9 ? _ : "0" + _) + "-" + (n > 9 ? n : "0" + n) + " " + (l > 9 ? l : "0" + l) + ":" + (c > 9 ? c : "0" + c), a.impression_count2 = this.convertNumberFormat(a.impression_count), a.go_detail_count2 = this.convertNumberFormat(a.go_detail_count), a.comment_count2 = this.convertNumberFormat(a.comment_count), a.share_count2 = this.convertNumberFormat(a.share_count), a.favorite_count2 = this.convertNumberFormat(a.favorite_count), a.play_effective_count = this.convertNumberFormat(a.play_effective_count), this.multi_title_deal(a)
            }
        },
        multi_title_deal: function(t) {
            t.multi_title = [];
            var e = !1,
                a = null;
            if (t.slave_items && t.slave_items.length) {
                t.slave_items = JSON.parse(t.slave_items);
                for (var s = 0, i = t.slave_items.length; i > s; s++) a = {}, a.multi_type = t.slave_items[s].type || 0, a.slave_go_detail_count = t.slave_items[s].go_detail_count || 0, a.slave_item_id = t.slave_items[s].item_id, a.slave_favorite_count = t.slave_items[s].favorite_count || 0, a.slave_external_visit_count = t.slave_items[s].external_visit_count || 0, a.slave_play_effective_count = t.slave_items[s].play_effective_count || 0, a.slave_play_voice_count = t.slave_items[s].play_voice_count || 0, a.slave_comment_count = t.slave_items[s].comment_count || 0, a.slave_subscribe_count = t.slave_items[s].subscribe_count || 0, a.slave_share_count = t.slave_items[s].share_count || 0, a.slave_pgc_id = t.slave_items[s].pgc_id || "", a.slave_pgc_id_str = t.slave_items[s].pgc_id_str || "", a.slave_ad_type = t.slave_items[s].ad_type || "", a.slave_bury_count = t.slave_items[s].bury_count || "", a.slave_group_id = t.slave_items[s].group_id || "", a.slave_is_key_item = t.slave_items[s].is_key_item || !1, a.slave_was_recommended = t.slave_items[s].was_recommended || !1, a.slave_thumb_uri = 4 == t.slave_items[s].type || 5 == t.slave_items[s].type ? t.slave_items[s].covers && t.slave_items[s].covers[0] && t.slave_items[s].covers[0].origin_uri ? t.slave_items[s].covers[0].origin_uri : "" : t.slave_items[s].thumb_uri || "", a.slave_article_url = t.slave_items[s].article_url || "", a.slave_title = t.slave_items[s].title || "", a.slave_impression_count = t.slave_items[s].impression_count || 0, a.source = t.slave_items[s].source || 0, a.slave_digg_count = t.slave_items[s].digg_count || 0, 1 == a.source ? (t.multi_title.unshift(a), e = !0) : 2 == a.source && 1 !== t.slave_items[s].status && t.multi_title.push(a)
            }
            e || !t.has_slave_item && !t.multi_type || (a = {}, a.multi_type = t.multi_type || 0, a.slave_go_detail_count = t.slave_go_detail_count || 0, a.slave_item_id = t.slave_item_id || "", a.slave_favorite_count = t.slave_favorite_count || 0, a.slave_external_visit_count = t.slave_external_visit_count || 0, a.slave_play_effective_count = t.slave_play_effective_count || 0, a.slave_play_voice_count = t.slave_play_voice_count || 0, a.slave_comment_count = t.slave_comment_count || 0, a.slave_subscribe_count = t.slave_subscribe_count || 0, a.slave_share_count = t.slave_share_count || 0, a.slave_pgc_id = t.slave_pgc_id || "", a.slave_pgc_id_str = t.slave_pgc_id_str || "", a.slave_ad_type = t.slave_ad_type || "", a.slave_bury_count = t.slave_bury_count || "", a.slave_group_id = t.slave_group_id || "", a.slave_is_key_item = t.slave_is_key_item || !1, a.slave_was_recommended = t.slave_was_recommended || !1, a.slave_thumb_uri = t.slave_thumb_uri || "", a.slave_article_url = t.slave_article_url || "", a.slave_title = t.slave_title || "", a.slave_impression_count = t.slave_impression_count || 0, a.slave_digg_count = t.slave_digg_count || 0, a.source = 1, t.multi_title.unshift(a))
        },
        convertNumberFormat: function(t) {
            var e = 1e4;
            return "number" == typeof t ? t >= e ? (t / e).toFixed(1) + "万" : t : void 0
        },
        resetStatus: function(t, e) {
            return this.loading ? void popalert("alert", "当前页面正在加载文章数据，请稍后") : void("string" == typeof t && "" != t && ($(".sort-type-list").each(function(e, a) { $(a).attr("data-node") == "list_" + t ? $(a).addClass("selected") : $(a).removeClass("selected") }), this.firstPage = !0, this.hasmore = !0, this.status = t, this.curMaxTime = 0, this.$dom.essay_loadmore.show(), this.$dom.essay_none.hide(), this.$dom.essay_nomore.hide(), this.$dom.essayBox.html(""), "search" === t && e ? (this.getSearchList({ keyword: e, offset: 0, limit: 10, curMaxTime: 0 }, function() { $(function() { window.scrollTo(0, 0) }) }), this.issearch = !0) : (this.getArticleList(function() { $(function() { window.scrollTo(0, 0) }) }), this.issearch = !1)))
        },
        getInteractiveUsers: function(t, e) {
            var a = $(t.target),
                s = a.parent("li"),
                i = s.find(".interactive-users"),
                _ = i.length ? i.find(".interactive-users-con li") : [],
                n = a.data("action"),
                l = a.parents(".essay-item").attr("data-id"),
                c = a.data("num") || 0,
                o = e + "-" + l,
                r = a.data(o);
            if (err = "互动用户列表数据获取失败", 0 != c) {
                if (r) return i.hide(), void a.data(o, !1);
                if (_.length) return i.show(), void a.data(o, !0);
                if (0 == i.length) {
                    s.prepend(INTERACTIVE_TEMPLATE), i = s.find(".interactive-users");
                    var p = { group_id: l, action: e };
                    $.ajax({
                        url: "//i.snssdk.com/api/2/data/action_users/",
                        type: "GET",
                        dataType: "jsonp",
                        context: this,
                        data: p,
                        success: function(t) {
                            if (t = t || {}, "success" != t.message) return alert(err), a.data(o, !1), void i.remove();
                            for (var e = 0, s = "", _ = 0; _ < t.data.length && 10 > _; _++, e++) {
                                var r = USER_TEMPLATE,
                                    p = t.data[_];
                                r = r.replace("{{user_id}}", util.e(p.user_id)), r = r.replace("{{screen_name}}", util.e(p.screen_name)), r = r.replace("{{avatar_url}}", util.e(p.avatar_url)), s += r
                            }
                            e >= 10 && c > e && (s += MORE_TEMPLATE.replace("{{group_id}}", util.e(l)), e++);
                            var m = i.find(".interactive-users-con"),
                                d = 0;
                            if (e > 0) d = 46 * e - 10, 10 > e && c > e && (d += 170, s += ANONYMOUS_TMP1.replace("{{num}}", util.e(c - e)));
                            else {
                                d = 200;
                                var u = ANONYMOUS_TMP2.replace("{{num}}", util.e(c - e));
                                s += u.replace("{{action}}", util.e(1 == n ? "转发" : "收藏"))
                            }
                            var y = parseInt((d + 22) / 2);
                            m.attr("style", "width:" + d + "px;left:-" + y + "px;"), m.removeClass("users-loading"), m.html(s), a.data(o, !0), $(document).on("click", function(t) {
                                var e = $(t.target);
                                e.is(a) || a.data(o) && (a.data(o, !1), i.hide())
                            })
                        },
                        error: function() { popalert("alert", err), a.data(o, !1), i.remove() }
                    })
                }
            }
        },
        onSearch: function(t) {
            if (13 === t.keyCode) {
                var e = t.target.value;
                this.resetStatus("search", e), ga("send", "event", "click", "文章搜索")
            }
        },
        onTypeChange: function(t) {
            var e = t.target.value,
                a = !1;
            switch (e) {
                case "all":
                    this.onAllClick();
                    break;
                case "passed":
                    a = !0, this.onPassedClick();
                    break;
                case "reject":
                    this.onUnpassedClick();
                    break;
                case "draft":
                    this.onDraftClick();
                    break;
                case "revoke":
                    this.onHideClick();
                    break;
                default:
                    this.onAllClick()
            }
            this.$input_search.show()
        },
        onSnsShare: function(t) {
            var e = $(t.target),
                a = $(t.currentTarget),
                s = e.data("type"),
                i = a.data();
            s && (s === WEITOUTIAO_SHARE_TYPE ? this.weitoutiaoShare.show({ item_id: i.itemId, img: i.pic, text: i.text, title: i.title }) : bdshare(s, a.data()))
        },
        onRepinClick: function(t) { this.getInteractiveUsers(t, "share") },
        onFavClick: function(t) { this.getInteractiveUsers(t, "favorite") },
        onAllClick: function() { this.resetStatus("all") },
        onHideClick: function() { this.resetStatus("hide") },
        onPassedClick: function() { this.resetStatus("passed") },
        onUnpassedClick: function() { this.resetStatus("unpassed") },
        onDraftClick: function() { this.resetStatus("draft") },
        onWinScroll: function() {
            if (this.hasmore) {
                this.scrollTimer && clearTimeout(this.scrollTimer);
                var t = this;
                this.scrollTimer = setTimeout(function() {
                    var e = t.$win.scrollTop(),
                        a = t.$doc.height(),
                        s = t.$win.height();
                    LOAD_HEIGHT > a - e - s && (t.$dom.essay_loadmore.show(), t.issearch ? t.getSearchList(t.params) : t.getArticleList())
                }, 50)
            }
        },
        onModify: function(t) {
            var e = $(t.target).closest(".essay-modify");
            window.gap && window.gap("click", "修改文章按钮点击"), Vali.validBrowser("/core/article/edit_article/?pgc_id=" + e.attr("data-pgc-id"), function() {
                if (e.data("passed")) {
                    t.preventDefault();
                    var a = Dialog({ btns: [{ type: "ok", click: function() { a.remove(), window.location.href = "/core/article/edit_article/?pgc_id=" + e.attr("data-pgc-id") } }, "cancel"], title: "温馨提示", content: "频繁修改会影响读者阅读效率和推荐效果，建议编辑完善后再发表。" }).show()
                } else window.location.href = "/core/article/edit_article/?pgc_id=" + e.attr("data-pgc-id")
            })
        },
        onDelete: function(t) {
            var e, a = $(t.target).closest(".essay-delete"),
                s = a.closest(".essay-item"),
                i = this.getData(t.target),
                _ = "<p>删除的内容不可恢复，将占用当天发文数，且影响头条号指数。重复发表系统不再推荐，请谨慎删除。</p>",
                n = -1 !== ["已发表", "已撤回"].indexOf(s.data("status")) && 2 === s.data("pushstatus");
            n && (_ += '<p class="m-t">这篇文章已被系统弹窗推荐，确认删除，文章将在弹窗推荐的24小时之后才会完全删除。</p>'), window.gap && window.gap("click", "修改删除按钮点击"), e = "a" != t.target.nodeName.toLocaleLowerCase() ? $(t.target).closest("a") : $(t.target);
            var l;
            "true" != e.attr("can-delete") && e.hasClass("j_more_essay_delete") ? (_ = "如果需要删除已发表的文章，请先将该文章从主页撤回。", l = Dialog({ btns: [{ type: "ok", click: function() { l.remove() } }], title: "暂时无法删除", content: _ }).show()) : (e.attr("data-draft") && (_ = "删除的内容不可恢复，确定删除？", n = !1), l = Dialog({
                btns: [{
                    type: "ok",
                    click: function() {
                        l.remove(), Util.ajax("/delete_article/", i, function(t, e, a, i) {
                            if (n) {
                                var _ = $('<span class="essay-status j_essay-status">删除处理中（已弹窗）<span class="stip_hint" data-title="' + i.reason + '"></span></span>');
                                s.find(".j_essay-status").replaceWith(_), s.find(".essay-status, .ad_hint_class, .essay-static-action, .share").not(".j_essay-status").remove(), _.hoverTitle()
                            }
                            return 0 != t && 40001 != t ? Stip.alert(e) : void(n || s.slideUp())
                        })
                    }
                }, "cancel"],
                title: "删除确认",
                content: _
            }).show())
        },
        onDeleteThirdTitle: function(t) {
            var e, a = $(t.target).closest(".essay-delete"),
                s = a.closest(".slave-title-zone"),
                i = this.getData(t.target),
                _ = "<p>删除的内容不可恢复，将占用当天发文数，且影响头条号指数。重复发表系统不再推荐，请谨慎删除。</p>",
                n = -1 !== ["已发表", "已撤回"].indexOf(s.data("status")) && 2 === s.data("pushstatus");
            n && (_ += '<p class="m-t">这篇文章已被系统弹窗推荐，确认删除，文章将在弹窗推荐的24小时之后才会完全删除。</p>'), window.gap && window.gap("click", "修改删除按钮点击"), e = "a" != t.target.nodeName.toLocaleLowerCase() ? $(t.target).closest("a") : $(t.target);
            var l;
            "true" != e.attr("can-delete") && e.hasClass("j_more_essay_delete") ? (_ = "如果需要删除已发表的文章，请先将该文章从主页撤回。", l = Dialog({ btns: [{ type: "ok", click: function() { l.remove() } }], title: "暂时无法删除", content: _ }).show()) : (e.attr("data-draft") && (_ = "优化助手提供的标题/封面如果不满意可删除，但删除后不可恢复，请谨慎操作。", n = !1), i.del_slave_id = e.attr("data-id"), l = Dialog({
                btns: [{
                    type: "ok",
                    click: function() {
                        l.remove(), Util.ajax("/delete_article/", i, function(t, e, a, i) {
                            if (n) {
                                var _ = $('<span class="essay-status j_essay-status">删除处理中（已弹窗）<span class="stip_hint" data-title="' + i.reason + '"></span></span>');
                                s.find(".j_essay-status").replaceWith(_), s.find(".essay-status, .ad_hint_class, .essay-static-action, .share").not(".j_essay-status").remove(), _.hoverTitle()
                            }
                            return 0 != t && 40001 != t ? Stip.alert(e) : void(n || s.slideUp())
                        })
                    }
                }, "cancel"],
                title: "删除确认",
                content: _
            }).show())
        },
        onRecovery: function(t) {
            var e = $(t.target),
                a = t.target,
                s = this,
                i = this.getData(a);
            "a" != a.nodeName.toLocaleLowerCase() && (e = e.find("a")), Util.ajax("/unhide_article/", i, function(t, a) {
                return 0 != t ? Stip.alert(a) : void("all" == s.status ? s.resetStatus("all") : e.closest(".essay-item").slideUp())
            })
        },
        onRollback: function(t) {
            var e = $(t.target),
                a = t.target,
                s = this.getData(a),
                i = this;
            "a" != a.nodeName.toLocaleLowerCase() && (e = e.find("a"));
            var _ = Dialog({
                btns: [{
                    type: "ok",
                    click: function() {
                        Util.ajax("/hide_article/", s, function(t, a) {
                            return 0 != t ? Stip.alert(a) : ("passed" == i.status ? e.closest(".essay-item").slideUp() : "all" == i.status && i._rollBackRecordFix(e), void _.remove())
                        })
                    }
                }, "cancel"],
                title: "确认撤回",
                content: "从主页撤回后，该内容可以正常访问，但不会在主页显示且不计算任何收益。"
            }).show()
        },
        _rollBackRecordFix: function(t) {
            var e = t.closest(".essay-item"),
                a = e.find(".j_essay-status"),
                s = e.find("#essay-top"),
                i = e.find(".j_essay_node_action"),
                _ = e.find(".essay-modify"),
                n = e.find(".essay-set-top"),
                l = e.find(".essay-cancel-top"),
                c = e.find(".essay-link"),
                o = e.find(".j_more_essay_delete");
            i.attr("data-node", "essay_recovery"), i.html("恢复到主页"), a.html("已撤回"), o.removeClass("disable-delete"), o.attr("can-delete", "true"), _.hide(), n.parent().hide(), c.hide(), l.hide(), s.remove()
        },
        _recoveryRecordFix: function(t) {
            var e = t.closest(".essay-item"),
                a = e.find(".j_essay-status"),
                s = e.find("#essay-top"),
                i = e.find(".j_essay_node_action"),
                _ = e.find(".j_more_essay_delete");
            i.attr("data-node", "essay_rollback"), i.html("从主页撤回"), a.html("已发表"), _.addClass("disable-delete"), _.attr("can-delete", "false"), _.find("i").remove(), s.remove()
        },
        onEssaySetTop: function(t) {
            var e = $(t.target),
                a = this.top_group_id,
                s = this,
                i = this.getData(t.target);
            i.create_time = e.data("tm"), a ? popalert("confirm", "同时只支持一篇文章置顶，确认后该文章将取代之前置顶的文章", function() { s.essaySetTopCallback(i) }) : s.essaySetTopCallback(i)
        },
        essaySetTopCallback: function(t) { $.ajax({ url: "/set_top_artcile/", data: t, dataType: "json", type: "post" }).done(function(t) { "success" == t.message ? (window.scrollTo(0, 0), document.location.reload()) : popalert("alert", t.reason) }).fail(function() { popalert("alert", server_error) }) },
        onEssayCancelTop: function(t) { $.ajax({ url: "/cancel_top_article/", data: this.getData(t.target), dataType: "json", type: "post" }).done(function(t) { "success" == t.message ? location.href = location.href : popalert("alert", t.reason) }).fail(function() { popalert("alert", server_error) }) },
        onModifyVPoster: function(t) {
            var e = $(t.target),
                a = e.data("id"),
                s = e.data("disableSystem");
            videoposter().show({
                id: a,
                itemId: a,
                fromList: !0,
                type: 1,
                source: "列表",
                success: function(t, a) {
                    var s = e.parents(".essay-image"),
                        i = s.find("img");
                    i.attr("src", a)
                }
            }, s)
        },
        onPostNow: function(t) {
            var e = this,
                a = "立即发表这篇文章？",
                s = $(t.target),
                i = s.closest(".essay-item").find(".j_essay-status"),
                _ = Dialog({ btns: [{ type: "ok", click: function() { _.remove(), $.ajax({ type: "POST", url: "/article/post_now_article/", data: e.getData(t.target), dataType: "json" }).done(function(t) { "success" == t.message ? (s.hide(), i.text("已发表")) : popalert("alert", t.reason) }).fail(function() { popalert("alert", server_error) }) } }, "cancel"], title: "提示", content: a }).show()
        },
        getData: function(t) {
            var e = $(t),
                a = e.closest(".essay-item"),
                s = {};
            return s.id = a.data("idd"), s.item_id = a.data("iid"), s.group_id = a.data("gid"), s.pgc_id = a.data("pid"), s.book_id = a.data("bid"), s.article_type = a.data("atype"), s.source_type = this.source_type, s
        },
        onForbidden: function(t) {
            var e, a = $(t.target),
                s = this.getData(t.target);
            e = 0 == a.attr("data-is_ban") ? !1 : !0;
            var i, _;
            e ? (i = "恢复后，用户可以重新对该文章评论，历史评论不受影响。", a = "a" != t.target.nodeName.toLocaleLowerCase() ? $(t.target).closest("a") : $(t.target), _ = Dialog({
                btns: [{
                    type: "ok",
                    click: function() {
                        _.remove(), Util.ajax("/article/ban_article_commit/", { item_id: s.item_id, is_ban: 0 }, function(t, e) {
                            return "success" != e ? Stip.alert("恢复评论失败") : (a.text("关闭评论").attr("data-is_ban", 0), Stip.alert("恢复评论成功", !0))
                        })
                    }
                }, "cancel"],
                title: "恢复评论",
                content: i
            }).show()) : (i = "关闭评论后，用户无法再对该文章评论，评论数和推荐量都会相应减少，请谨慎操作。", a = "a" != t.target.nodeName.toLocaleLowerCase() ? $(t.target).closest("a") : $(t.target), _ = Dialog({
                btns: [{
                    type: "ok",
                    click: function() {
                        _.remove(), Util.ajax("/article/ban_article_commit/", { item_id: s.item_id, is_ban: 1 }, function(t, e) {
                            return "success" != e ? Stip.alert("关闭评论失败") : (a.text("恢复评论").attr("data-is_ban", 1), Stip.alert("关闭评论成功", !0))
                        })
                    }
                }, "cancel"],
                title: "关闭评论",
                content: i
            }).show())
        }
    })
});;
define("pagelet/live/poster.js", function(require, exports, module) {
    function Poster(i, t) {
        this.$el = $(i), this.$modal = $(POSTER_TMPL()), this.option = t || {};
        var o = this;
        this.id = null, this.uploadUrl = null, this.pluginId = 0, this.$el.find("input").fileupload(uploadOption).on({
            fileuploadadd: function(i, t) {
                return t.files[0].size && t.files[0].size > t.maxSize ? void Stip.alert("文件过大") : ($(this).prop("disabled", !0), o.$el.find("button").text("上传中"), void t.submit())
            },
            fileuploaddone: function(i, t) {
                $(this).prop("disabled", !1), o.$el.find("button").text("上传");
                var e = t.response().result;
                "string" == typeof e && (e = JSON.parse(e)), o.uploadUrl = e.url, o.pluginInit()
            },
            fileuploaderror: function() { Stip.alert("上传失败"), $(this).prop("disabled", !1), o.$el.find("button").text("上传") }
        }), this.$modal.on("click", ".close", function() { o.$modal.modal("hide"), o.$el.find('input[type="file"]').prop("disabled", !1), o.$el.find("button").text("上传") })
    } {
        var Stip = require("common/stip/stip.js"),
            POSTER_TMPL = function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="modal" data-backdrop="static">\n    <div class="modal-dialog-wrapper">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <h1 class=\'video_uploader_line\'></h1>\n                <div class="modal-body">\n                    <div class="videoposter-header">\n                        <div class="close"></div>\n                    </div>\n                    <div>\n                        <div id=\'modify_video_cover\'>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n';
                return __p
            },
            uploadOption = { maxSize: 5120, paramName: "upfile", dataType: "json", url: "//mp.toutiao.com/tools/upload_picture/?pgc_watermark=0" };
        0 == document.location.href.indexOf("https")
    }
    module.exports = Poster, $.extend(Poster.prototype, {
        pluginInit: function() {
            this.$modal.modal("show");
            var i = this;
            this.initEditor ? xiuxiu.loadPhoto(this.uploadUrl) : (this.initEditor = !0, xiuxiu.setLaunchVars("cropPresets", "640x360"), xiuxiu.setLaunchVars("avatarPreview", { visible: !0, label: "裁剪预览", large: { width: 140, height: 140, label: "大尺寸" } }), xiuxiu.setLaunchVars("cameraEnabled", 0), xiuxiu.setLaunchVars("localFileEnabled", 0), xiuxiu.embedSWF("modify_video_cover", 5, "100%", "400px"), xiuxiu.setUploadURL(uploadOption.url), xiuxiu.setUploadType(2), xiuxiu.setUploadDataFieldName("upfile"), xiuxiu.onInit = function(t) { i.pluginId = t, xiuxiu.loadPhoto(i.uploadUrl) }, xiuxiu.onUploadResponse = function(t) { i.response = t = JSON.parse(t), i.option.uploadend && i.option.uploadend(t), i.$el.find("img").attr("src", t.url), i.$modal.modal("hide") })
        },
        uploadThumb: function(i) {
            var t = { id: this.id, type: 2, thumb_uri: i.original, modify_type: 1 },
                o = this;
            $.ajax({ type: "POST", url: "/video/update_video_thumb/", data: { json_data: JSON.stringify(t) } }).done(function(i) { "success" === i.message ? o.find("image").attr("src", i.url) : Stip.alert("封面更新失败") }).fail(function() { Stip.alert("封面更新失败") }).always(function() { o.$modal.modal("hide") })
        }
    })
});;
define("pagelet/live/service.js", function(e, r, t) {
    t.exports = {
        getLivePushUrl: function() {
            var e = $.Deferred();
            return $.ajax({ type: "get", url: "/get_liveid_pushurl/", dataType: "json" }).then(function(r) { "success" === r.message ? e.resolve(r) : e.reject(r.reason) }, function() { e.reject("网络错误") }), e.promise()
        },
        getLivePullUrl: function(e) {
            var r = $.Deferred();
            return $.ajax({ type: "get", url: "/get_liveid_pullurl/", data: { source_url: e }, dataType: "json" }).then(function(e) { "success" === e.message ? r.resolve(e) : r.reject(e.reason) }, function() { r.reject("网络错误") }), r.promise()
        }
    }
});;
define("pagelet/live/live.js", function(e, i, t) {
    var l = e("common/video_select/video_select.js"),
        r = e("pagelet/live/preview.js"),
        s = e("pagelet/live/poster.js"),
        n = e("common/stip/stip.js"),
        a = e("pagelet/live/service.js"),
        o = {},
        v = "http://p1.pstatp.com/large/9820/3808334921",
        u = { LIVE_PULL: "拉流：是指服务器上已经有直播内容，用指定地址进行拉取。", LIVE_PUSH: "推流：是指把内容传输到平台指定的服务器地址的过程。" };
    t.exports = Pagelet.extend({
        el: "#pagelet-live",
        events: { "click .live-type-radio": "liveTypeRadio", "click #preview": "preview", "click #submit": "submit", "click #cancel": "cancel" },
        init: function(e) {
            this.option = e || {}, this.pushLiveInfo = null, this.liveType = e.live_type || "2", this.liveUrl = e.live_url || "", "2" === e.live_type ? o[this.liveUrl] = { live_id: e.live_id, pull_url: e.live_url } : "1" === e.live_type && (this.pushLiveInfo = { live_id: e.live_id, push_url: e.live_url, preview_url: e.preview_url }), this.pgcId = e.pgc_id, this.lastPullUrl = null, this.initDatePicker(e), this.$el.find(".explain").tooltip({
                html: !0,
                title: function() {
                    return u.LIVE_PUSH + "</br>" + u.LIVE_PULL
                }
            }), this.video_category = e.video_category;
            var i = this.videoDataFilter(),
                t = this.videoDataToObject(i, e.article_category),
                n = new l(i, t);
            this.$el.find(".j_channel_select").prepend(n), this.previewer = new r, this.poster = new s(this.$el.find(".poster")), this.poster.id = e.live_id
        },
        cancel: function() { window.location = "/core/article/index/" },
        videoDataToObject: function(e, i) {
            for (var t = 0; t < e.length; t++)
                if (e[t].key == i) return { key: i, value: e[t].value };
            return {}
        },
        videoDataFilter: function() {
            var e = this.video_category,
                i = [];
            if (e instanceof Array)
                for (var t = 0; t < e.length; t++) i.push({ key: e[t][0], value: e[t][1] });
            return i
        },
        initDatePicker: function() {
            var e = this.$el.find(".start-time");
            this.option.live_stime && e.val(new Date(1e3 * this.option.live_stime).format("yyyy/mm/dd hh:MM")), e.datetimepicker({ format: "yyyy/mm/dd hh:ii", autoclose: !0 });
            var i = this.$el.find(".end-time");
            this.option.live_etime && i.val(new Date(1e3 * this.option.live_etime).format("yyyy/mm/dd hh:MM")), i.datetimepicker({ format: "yyyy/mm/dd hh:ii", autoclose: !0, initialDate: new Date(1e3 * this.option.live_etime) })
        },
        preview: function() {
            function e(e) {
                return e ? void t.previewer.show(e) : void n.alert("预览失败，未获取到预览地址")
            }
            var i = null,
                t = this;
            "1" === this.liveType ? (this.pushLiveInfo && (i = this.pushLiveInfo.preview_url, this.poster.id = this.pushLiveInfo.live_id), e(i)) : (i = this.$el.find('input[name="source_url"]').val(), a.getLivePullUrl(i).then(function(l) { o[i] = l, t.poster.id = l.live_id, e(l.pull_url) }, function() { e(null) }))
        },
        getArticle: function() {
            var e = $.Deferred(),
                i = this.$el.find("input,textarea").so(),
                t = this.$el.find(".poster img").attr("src"),
                l = "1" === this.liveType ? this.pushLiveInfo : o[i.source_url];
            if (!l) return e.reject("请先「预览」直播地址"), e.promise();
            var r = { sp: "toutiao", vid: l.live_id, vu: l.live_id, vname: "", vposter: t, thumb_url: t.substring(t.lastIndexOf("/") + 1, t.length), thumb_height: 360, thumb_width: 640 },
                s = this.$el.find(".j_video_select_dom").val(),
                n = { title: i.title, "abstract": i.abstract, tag: "", article_type: 4, article_category: s, pgc_id: this.pgc_id, content: "<p>{!-- PGC_VIDEO:" + JSON.stringify(r) + " --}</p>", live_stime: Date.parse(i.start_time) / 1e3, live_etime: Date.parse(i.end_time) / 1e3, live_url: "1" === this.liveType ? l.push_url : l.pull_url, preview_url: "1" === this.liveType ? l.preview_url : l.pull_url, live_type: this.liveType },
                a = null;
            return (a = this.validateArticle(n, r)) ? e.reject(a) : e.resolve(n), e.promise()
        },
        validateArticle: function(e, i) {
            return e.title.length <= 4 ? "标题长度应该在5-50字之间" : e.live_stime >= e.live_etime ? "直播结束时间应该大于开始时间" : e.article_category ? i.vposter === v ? "请设置直播封面" : void 0 : "请选择直播分类"
        },
        submit: function() {
            this.submiting = !0;
            var e = this;
            this.getArticle().then(function(i) { $.ajax({ type: "POST", url: "/core/article/edit_article_post/?source=mp&type=live", data: i }).done(function(e) { "保存成功" == e.message || "提交成功" == e.message ? n.popupTip({ msg: e.message, status: !0, duration: 0, callback: function() { window.location = "/core/article/index/" } }) : n.alert(e.message) }).fail(function(e, i, t) { n.alert("服务异常，请稍后再试，异常状态：" + e.status + "," + i + "," + t) }).always(function() { e.submiting = !1 }) }, function(e) { n.alert(e) })
        },
        liveTypeRadio: function(e) {
            var i = $(e.currentTarget);
            if (!i.hasClass("checked")) {
                this.$el.find(".live-type-radio.checked").removeClass("checked"), i.addClass("checked");
                var t = i.find('input[type="radio"]');
                t.prop("checked", !0), this.liveType = t.val(), this.liveTypeChange()
            }
        },
        liveTypeChange: function() {
            var e = this,
                i = this.$el.find('input[name="source_url"]');
            "1" === this.liveType ? (this.lastPullUrl = i.val(), this.pushLiveInfo ? i.val(this.pushLiveInfo.push_url) : a.getLivePushUrl().then(function(t) { e.pushLiveInfo = t, i.val(t.push_url), e.poster.id = t.live_id }, function(e) { i.val(""), n.alert(e) })) : i.val(this.lastPullUrl)
        }
    })
});;
define("pagelet/login/config.js", function(require, exports, module) {
    var tpl = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="login-form-account">\n    <div class="form1_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</div>\n    <div class="form1_dd">\n        <input type="' + (null == (__t = obj.type || "text") ? "" : _.escape(__t)) + '" ', obj.name && (__p += ' name="' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '" '), __p += ' maxlength="50" class="signform_input">\n        <div class="signform_msg jmsg"></div>\n        <div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + "</div>\n    </div>\n</div>\n";
        return __p
    };
    return { email: { tpl: tpl }, password: { tpl: tpl } }
});;
define("pagelet/login/login.js", function(e) {
    var a = e("pagelet/login/config.js"),
        i = e("common/util/util.js"),
        o = e("common/vali/vali.js"),
        l = e("common/stip/stip.js"),
        n = e("pagelet/signform/field.js");
    $(".jpagelet_login").each(function() {
        var e = $(this).nodes();
        e.remember.checkbox();
        var t = n.getEle("password", a.password),
            c = n.getEle("captcha"),
            s = n.getEle("email", $.extend({ require: !0, name: "name_or_email", label: "邮箱", hint: "" }, a.email)),
            r = $.cookie("lemail");
        r ? (s.jvali.val(r), t.jvali.focus()) : s.jvali.focus(), t.jvali.css("display", "inline-block"), c.onClick = function() { $.post("/auth/login_post/", { name_or_email: $.trim(s.jvali.val()) }).done(function(e) { c.render(e.data.captcha) }) }, e.close_btn && e.close_btn.click(function() { $("#pagelet_login_pop").modal("hide") }), e.submit.click(function() { e.form.submit() }), e.fields.append(s.jbox.add(t.jbox).add(c.jbox));
        var m = o(s.jvali.add(t.jvali).add(c.jvali));
        e.form.submit($.loadWrap(function(a) { a.preventDefault(), m(function(a, o, n) { null == a ? (n = $.so(n), i.ajax("/auth/login_post/", n, function(a, o, t) { 0 === a ? (e.remember.checkbox() && $.cookie("lemail", n.name_or_email, { expires: 30, path: "/" }), window.location = i.GET.redirect_url || "/") : (t.captcha && c.render(t.captcha), l.alert(o)) })) : o.focus() }) }))
    })
});;
define("pagelet/login/login_pop.js", function(require, exports, module) {
    var html = function(obj) {
        {
            var __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="modal fade" id="pagelet_login_pop">\n    <div class="modal-dialog login jpagelet_login" gap="^登录框" id="pagelet_login">\n        <a href="javascript:;" class="close" data-node="close_btn"></a>\n        <div class="login_wrap">\n            <div class="login_title">登录</div>\n            <div class="sclearfix">\n                <form action="" data-node="form">\n                    <div data-node="fields">\n\n                    </div>\n                    <input type="submit" value="" style="display:none">\n                </form>\n                <div class="form1_dd">\n                    <div class="form1_checkbox login_remember" data-node="remember">\n                        一个月内免登录\n                    </div>\n                    <a href="/forget/" class="slink login_forget" ga="找回密码$">忘记密码？</a>\n                </div>\n            </div>\n            <div class="signform_btn login_submit" data-node="submit" ga="邮箱登录按钮$">登录</div>\n        </div>\n        <div class="shr"></div>\n        <div class="login_wrap">\n            <div class="login_title2">\n                其他方式登录\n            </div>\n            <div class="login_others">\n                <a href="javascript:void(Util.snsLogin(\'sina_weibo\'))" class="login_other" ga="登录_新浪微博$"><div class="login_other_img login_other_img_sw"></div><div class="login_other_text">新浪微博</div></a>\n                <a href="javascript:void(Util.snsLogin(\'qzone_sns\'))" class="login_other" ga="登录_QQ帐号$"><div class="login_other_img login_other_img_qq"></div><div class="login_other_text">QQ帐号</div></a>\n                <a href="javascript:void(Util.snsLogin(\'qq_weibo\'))" class="j_qq_weibo login_other" ga="登录_腾讯$"><div class="login_other_img login_other_img_tw"></div><div class="login_other_text">腾讯微博</div></a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="modal fade" id="pagelet_login_qq_weibo">\n    <div class="modal-dialog qq_weibo_notify">\n        <div class="modal-content">\n            <div class="modal-header">\n                <span>提示</span>\n            </div>\n            <div class="modal-body qq_weibo_letter">\n                <p class="letter">尊敬的头条号作者：</p>\n                <p class="letter">您好！</p>\n                <p>头条号暂无法通过新浪微博进行登录。请联系头条号官方微信(toutiaohao)或客服邮箱<a href="mailto:mp@toutiao.com">mp@toutiao.com</a>进行处理。</p>\n                <div class="qrcode">\n                    <img src="https://mp.toutiao.com/static/resource/pgc_web/static/style/image/pgcqrcode.4007c61.png" alt=""/>\n                </div>\n            </div>\n            <div class="modal-footer">\n                <div data-dismiss="modal" class="widget_btn">确认</div>\n            </div>\n        </div>\n    </div>\n</div>\n';
        return __p
    }();
    $(html).appendTo("body"), require("pagelet/login/login.js");
    var Login = function() { $("#pagelet_login_pop").modal() };
    return window.Login = Login, Login
});;
define("pagelet/loginindex/author_list.js", function(t, o, p) { p.exports = [{ pic: "//p1.pstatp.com/large/2653/1704904947", author: "吴晓波频道", content: "著名财经作家吴晓波发布的自媒体，涵盖视频、专栏和测试。", url: "http://toutiao.com/m4144384138/" }, { pic: "//p3.pstatp.com/large/1858/980050265", author: "袁腾飞", content: "知名历史老师袁腾飞，读历史即是读人心。", url: "http://toutiao.com/m3790837298/" }, { pic: "//p1.pstatp.com/large/776/8141111946", author: "黄健翔谈", content: "著名主持人黄健翔“玩转”足球的自媒体阵地，图文故事辅以黄健翔的个人动态，构架起专属黄健翔的个人频道。", url: "http://toutiao.com/m3263000978/" }, { pic: "//p2.pstatp.com/large/3678/5928289538", author: "蔡澜的花花世界", content: "《舌尖上的中国》系列总顾问、香港四大才子之一的蔡澜先生。", url: "http://toutiao.com/m4383445805/" }, { pic: "//p2.pstatp.com/large/4306/2602403105", author: "央视新闻", content: "中央电视台新闻中心官方头条号，是央视重大新闻、突发事件、重点报道的发布平台。", url: "http://toutiao.com/m4492956276/" }, { pic: "//p2.pstatp.com/thumb/1370/2077485985", author: "新华社发布", content: "新华社官方头条号，遍布180多个国家的3000多名新华社记者第一时间为你供稿，让你尽览全球新闻。", url: "http://toutiao.com/m3566555656/" }, { pic: "//p2.pstatp.com/large/2401/1424722918", author: "北京发布", content: "北京市政府新闻办公室头条号，传递政府声音 ，提供服务资讯 ，倾听社情民意 ，回应社会关切。", url: "http://toutiao.com/m4052745437/" }, { pic: "//p3.pstatp.com/large/8228/6474552799", author: "中国铁路", content: "中国铁路总公司官方头条号，为你定制权威铁路新闻、铁路文化、出行资讯，用心为你服务，助你愉快出行！", url: "//toutiao.com/m5510943119/" }] });;
define("pagelet/loginindex/countUp.js", function(t, a, e) {
    e.exports = function(t, a, e, n, i, r) {
        for (var o = 0, s = ["webkit", "moz", "ms", "o"], u = 0; u < s.length && !window.requestAnimationFrame; ++u) window.requestAnimationFrame = window[s[u] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[u] + "CancelAnimationFrame"] || window[s[u] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
            var a = (new Date).getTime(),
                e = Math.max(0, 16 - (a - o)),
                n = window.setTimeout(function() { t(a + e) }, e);
            return o = a + e, n
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) }), this.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: "." };
        for (var m in r) r.hasOwnProperty(m) && (this.options[m] = r[m]);
        "" === this.options.separator && (this.options.useGrouping = !1), this.options.prefix || (this.options.prefix = ""), this.options.suffix || (this.options.suffix = ""), this.d = "string" == typeof t ? document.getElementById(t) : t, this.startVal = Number(a), this.endVal = Number(e), this.countDown = this.startVal > this.endVal, this.frameVal = this.startVal, this.decimals = Math.max(0, n || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * Number(i) || 2e3;
        var l = this;
        this.version = function() {
            return "1.6.0"
        }, this.printValue = function(t) {
            var a = isNaN(t) ? "--" : l.formatNumber(t);
            "function" == typeof this.d._getBBox ? this.d.attr({ text: a }) : this.d.innerHTML = a
        }, this.easeOutExpo = function(t, a, e, n) {
            return e * (-Math.pow(2, -10 * t / n) + 1) * 1024 / 1023 + a
        }, this.count = function(t) {
            l.startTime || (l.startTime = t), l.timestamp = t;
            var a = t - l.startTime;
            l.remaining = l.duration - a, l.frameVal = l.options.useEasing ? l.countDown ? l.startVal - l.easeOutExpo(a, 0, l.startVal - l.endVal, l.duration) : l.easeOutExpo(a, l.startVal, l.endVal - l.startVal, l.duration) : l.countDown ? l.startVal - (l.startVal - l.endVal) * (a / l.duration) : l.startVal + (l.endVal - l.startVal) * (a / l.duration), l.frameVal = l.countDown ? l.frameVal < l.endVal ? l.endVal : l.frameVal : l.frameVal > l.endVal ? l.endVal : l.frameVal, l.frameVal = Math.round(l.frameVal * l.dec) / l.dec, l.printValue(l.frameVal), a < l.duration ? l.rAF = requestAnimationFrame(l.count) : l.callback && l.callback()
        }, this.start = function(t) {
            return l.callback = t, l.rAF = requestAnimationFrame(l.count), !1
        }, this.pauseResume = function() { l.paused ? (l.paused = !1, delete l.startTime, l.duration = l.remaining, l.startVal = l.frameVal, requestAnimationFrame(l.count)) : (l.paused = !0, cancelAnimationFrame(l.rAF)) }, this.reset = function() { l.paused = !1, delete l.startTime, l.startVal = a, cancelAnimationFrame(l.rAF), l.printValue(l.startVal) }, this.update = function(t) { cancelAnimationFrame(l.rAF), l.paused = !1, delete l.startTime, l.startVal = l.frameVal, l.endVal = Number(t), l.countDown = l.startVal > l.endVal, l.rAF = requestAnimationFrame(l.count) }, this.formatNumber = function(t) {
            t = t.toFixed(l.decimals), t += "";
            var a, e, n, i;
            if (a = t.split("."), e = a[0], n = a.length > 1 ? l.options.decimal + a[1] : "", i = /(\d+)(\d{3})/, l.options.useGrouping)
                for (; i.test(e);) e = e.replace(i, "$1" + l.options.separator + "$2");
            return l.options.prefix + e + n + l.options.suffix
        }, l.printValue(l.startVal)
    }
});;
define("pagelet/loginindex/feature_list.js", function(e, t, n) { n.exports = [{ type: "quiz", name: "测试", text: "测试、问答多种题型，与读者有趣互动" }, { type: "video", name: "视频", text: "在线视频、本地视频，两种方式便捷上传" }, { type: "img", name: "图文", text: "多种图文编辑格式，操作简易、轻松发表" }, { type: "collection", name: "图集", text: "批量上传图片，随意调整顺序，幻灯片形式展示" }] });;
define("pagelet/loginindex/jquery.mousewheel.js", function(e, t, n) {
    ! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof t ? n.exports = e : e(jQuery) }(function(e) {
        function t(t) {
            var s = t || window.event,
                a = h.call(arguments, 1),
                u = 0,
                f = 0,
                d = 0,
                c = 0,
                g = 0,
                m = 0;
            if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (d = -1 * s.detail), "wheelDelta" in s && (d = s.wheelDelta), "wheelDeltaY" in s && (d = s.wheelDeltaY), "wheelDeltaX" in s && (f = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * d, d = 0), u = 0 === d ? f : d, "deltaY" in s && (d = -1 * s.deltaY, u = d), "deltaX" in s && (f = s.deltaX, 0 === d && (u = -1 * f)), 0 !== d || 0 !== f) {
                if (1 === s.deltaMode) {
                    var w = e.data(this, "mousewheel-line-height");
                    u *= w, d *= w, f *= w
                } else if (2 === s.deltaMode) {
                    var v = e.data(this, "mousewheel-page-height");
                    u *= v, d *= v, f *= v
                }
                if (c = Math.max(Math.abs(d), Math.abs(f)), (!l || l > c) && (l = c, i(s, c) && (l /= 40)), i(s, c) && (u /= 40, f /= 40, d /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / l), f = Math[f >= 1 ? "floor" : "ceil"](f / l), d = Math[d >= 1 ? "floor" : "ceil"](d / l), r.settings.normalizeOffset && this.getBoundingClientRect) {
                    var p = this.getBoundingClientRect();
                    g = t.clientX - p.left, m = t.clientY - p.top
                }
                return t.deltaX = f, t.deltaY = d, t.deltaFactor = l, t.offsetX = g, t.offsetY = m, t.deltaMode = 0, a.unshift(t, u, f, d), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
            }
        }

        function n() { l = null }

        function i(e, t) {
            return r.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
        }
        var o, l, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            h = Array.prototype.slice;
        if (e.event.fixHooks)
            for (var u = s.length; u;) e.event.fixHooks[s[--u]] = e.event.mouseHooks;
        var r = e.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
                else this.onmousewheel = t;
                e.data(this, "mousewheel-line-height", r.getLineHeight(this)), e.data(this, "mousewheel-page-height", r.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var n = e(t),
                    i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return e(t).height()
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
        };
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    })
});;
define("pagelet/loginindex/loginindex.js", function(require, exports, module) {
    var countUp = (require("pagelet/login/login_pop.js"), require("pagelet/loginindex/countUp.js")),
        featureTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "", _.each(obj, function(e) { __p += '\n    <i class="' + (null == (__t = e.type) ? "" : __t) + '" data-text="' + (null == (__t = e.text) ? "" : __t) + '">\n        <span>' + (null == (__t = e.name) ? "" : __t) + "</span>\n    </i>\n" }), __p += "\n\n";
            return __p
        },
        standardWidth = 1100,
        minHeight = 700,
        authorList = require("pagelet/loginindex/author_list.js"),
        featureList = require("pagelet/loginindex/feature_list.js"),
        index = 0,
        width = $(window).width(),
        height = $(window).height();
    ! function() {
        Raphael.fn.addGuides = function() {
            this.ca.guide = function(e) {
                return { guide: e }
            }, this.ca.along = function(e) {
                var t = this.attr("guide"),
                    i = t.getTotalLength(),
                    n = t.getPointAtLength(e * i),
                    a = { transform: "t" + n.x + " " + n.y };
                return a
            }
        }
    }();
    var isIe = function(e) {
        return 8 == e ? /msie 8.0/i.test(navigator.userAgent) : 9 == e ? /msie 9.0/i.test(navigator.userAgent) : "89" == e ? /msie 8.0|9.0/i.test(navigator.userAgent) : window.ActiveXObject || "ActiveXObject" in window ? !0 : void 0
    };
    module.exports = Pagelet.extend({
        el: ".loginindex",
        events: { "mouseenter .slider-box .element": "sliderBoxMouseenter", "click .slider-box .element": "sliderBoxClick", "mouseenter .layer-6 .feature i": "featureHover", "click .logo-jump": "logoJump", "click .nav i": "navJump" },
        fixLayout: function() { $(".sfoot_p").hide() },
        init: function() {
            var e = this;
            this.fixLayout(), this.render(), $(window).on("resize", function() { e.resizeFix() })
        },
        svgRender: function() {
            var e = { stroke: "#f95e58", "stroke-width": "10px", fill: "transparent", "fill-opacity": 0 },
                t = "http://p1.pstatp.com/origin/9515/5065988524";
            Raphael($(".layer-svg-2").get(0), 450, 214).path("M350,0 H0 V214 H450 V114").attr(e), Raphael($(".layer-svg-4").get(0), 520, 220).path("M520,40 L520,0 L0,0 L0,220 L420,220").attr(e), Raphael($(".layer-svg-5").get(0), 730, 230).path("M35,0 H0 V230 H35 M330,0 H730 V230 H330").attr(e), Raphael($(".layer-svg-6").get(0), 670, 250).path("M41,250 L0,250 L0,0 L335,0 M629,250 L670,250 L670,0 L335,0").attr(e);
            var i = Raphael($(".animate-svg-ball").get(0), 625, 362);
            i.addGuides(), this.svg2path = i.path("MM145,285C235,270,325,210,345,180").attr({ "stroke-width": "0px", stroke: "#fff" }), this.svg2circle = i.circle(0, 0, 10).attr({ stroke: "#ddf1ff", "stroke-width": "5px", fill: "#38c6ff" }), this.svg2image = i.image(t, -90, -90, 177, 62), this.svg2text = i.text(10, -60, "0").attr({ "font-size": "18px", fill: "#539fe0" })
        },
        ballAnimate: function() {
            if (!this.svg2path) return !1;
            var e = this.svg2path,
                t = { guide: e, along: 0 };
            this.svg2text.attr(t).animate({ along: 1 }, 1e3, "ease-out"), this.svg2image.attr(t).animate({ along: 1 }, 1e3, "ease-out"), this.svg2circle.attr(t).animate({ along: 1 }, 1e3, "ease-out")
        },
        render: function() { $("body").css("overflow", "hidden"), this.calcStageSize(), this.scaleImg(), this.templateInit(), this.ieFix(), this.mousewheel(), this.navigate(), this.svgRender() },
        logoJump: function() {
            var e = this,
                t = this.$el.find(".stage");
            index = 0, e.stageSlide(t, -index * e.height)
        },
        navJump: function(e) {
            var t = $(e.currentTarget),
                i = this,
                n = this.$el.find(".stage");
            index = t.index(), i.stageSlide(n, -index * i.height)
        },
        navigate: function() {
            for (var e = this.$el.find(".layer").length, t = this.$el.find(".nav"), i = $("<i></i>"), n = 0; e > n; n++) t.append(i.clone());
            $(".nav i").eq(0).addClass("first-dash-current")
        },
        resizeFix: function() {
            -(this.index - 1) * this.height, this.$el.find(".stage");
            this.calcStageSize(), this.scaleImg()
        },
        mousewheel: function() {
            function e(e) {
                var r = new Date;
                if (!(r.getTime() - n.getTime() > 1200)) return !1;
                if (n = new Date, i = -e.originalEvent.wheelDelta, Math.abs(i) >= 40 && (i /= 40), i > 0) {
                    if (6 == index) return !1;
                    index++
                } else if (0 > i) {
                    if (0 == index) return !1;
                    index--
                }
                t.stageSlide(a, -index * t.height)
            } {
                var t = this,
                    i = 0,
                    n = new Date,
                    a = this.$el.find(".stage");
                $(".layer").length
            }
            a.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                return $(e.target).hasClass("stage") ? void t.layerSwitch(index) : !1
            }), $("body").on("mousewheel", function(t) { e(t) }), $("body").on("keydown", function(e) {
                var i = e.keyCode;
                if (40 == i) {
                    if (6 == index) return !1;
                    index++
                }
                if (38 == i) {
                    if (0 == index) return !1;
                    index--
                }
                t.stageSlide(a, -index * t.height)
            })
        },
        stageSlide: function(e, t) {
            var i = this;
            isIe("89") ? e.animate({ top: t }, "500", "swing", function() { i.layerSwitch(t / height) }) : e.css({ transform: "translateY(" + t + "px)" })
        },
        layerSwitch: function(e) {
            var e = Math.round(Math.abs(e || 0) + 1);
            return this.index == e ? !1 : (this.index = e, $(".layer-animation").removeClass("layer-animation"), $(".layer-" + e).addClass("layer-animation"), isIe("89") && ($(".layer").find(".article-content").hide(), $(".layer-" + e).find(".article-content").fadeIn()), 2 === e && (this.count(), this.ballAnimate()), 1 === e ? ($(".nav i").eq(0).addClass("first-dash-current"), $(".nav i").removeClass("other-dash").removeClass("other-dash-current"), $(".stage-header").fadeOut(), $(".ripple").show()) : ($(".nav i").removeClass("first-dash-current"), $(".nav i").addClass("other-dash").removeClass("other-dash-current"), $(".nav i").eq(e - 1).addClass("other-dash-current"), $(".stage-header").fadeIn(), $(".ripple").hide()), 5 === e && this.$el.find(".slider-box .element").eq(0).mouseenter(), 6 === e && this.$el.find(".feature .quiz").mouseenter(), void(7 === e ? ($(".j-top-btn-group").hide(), $(".sfoot_p").show()) : ($(".sfoot_p").hide(), $(".j-top-btn-group").show())))
        },
        calcStageSize: function(e, t) {
            var e = e || $(".stage"),
                t = t || $(".layer");
            this.width = $(window).width(), this.height = $(window).height(), e.width(this.width), t.height(this.height), minHeight > height && this.$el.find(".phone").css("transform", "scale(.6)"), 1160 > width && this.$el.find(".layer-2 .article").css("margin-left", "35px")
        },
        scaleImg: function(e) {
            var t = $(window).width() / standardWidth,
                e = e || $(".scale");
            return t >= .9 ? !1 : (t = .6 > t ? .6 : t.toFixed(2), void e.each(function() { isIe(8) && $(this).css({ zoom: t, "margin-right": "-120px", "margin-bottom": "-20px" }), $(this).css("transform", "scale(" + t + ")") }))
        },
        count: function() {
            var e = new countUp($(".count-num").get(0), 0, 723245, 0, 1),
                t = new countUp(this.svg2text, 0, 623545, 0, 1);
            e.start(), t.start()
        },
        ieFix: function() { isIe(8) && ($(".iphone").css("top", "150px"), $(window).off("mousewheel"), $(".layer-1 .ripple").hide(), $(".circle-inner").remove()), isIe() && $(".animate-ball-svg").remove(), isIe("89") ? ($(".stage").css("position", "absolute"), this.$el.find(".article-content").css("opacity", 1), this.$el.find(".phone").css("opacity", 1), this.$el.find(".slider-box element").css("opacity", 1)) : this.$el.find(".layer-3 .circle").css("top", "-50px") },
        sliderBoxMouseenter: function(e) {
            var t = $(e.currentTarget),
                i = this.$el.find(".layer-5 .phone");
            $(".enter-rotate").css("opacity", .6), $(".enter-rotate").removeClass("enter-rotate"), t.css("opacity", 1), t.addClass("enter-rotate"), i.find("img").attr("src", t.data("image")), i.find("p").text(t.data("author")), i.find(".description p").text(t.data("description"))
        },
        sliderBoxClick: function(e) {
            var t = $(e.currentTarget),
                i = t.data("url");
            window.open(i)
        },
        featureHover: function(e) {
            var t = $(e.currentTarget),
                i = t.data("text"),
                n = this.$el.find(".feature-text");
            n.hide(), n.fadeIn("fast"), n.text(i), $(".feature-hover-current").removeClass("feature-hover-current"), t.addClass("feature-hover-current")
        },
        templateInit: function(e) {
            var e = e || $(".slider-box"),
                t = $(".layer-6 .feature"),
                i = ['<div class="element">', "<img />", '<i class="circle-inner circle"></i>', '<i class="circle-inner"></i>', "</div>"].join(""),
                n = $(i);
            _.each(authorList, function(t) {
                var i = n.clone();
                return t && t.content ? (i.data("description", t.content).data("author", t.author).data("image", t.pic).data("url", t.url), void e.find(".slider").append(i.find("img").attr("src", t.pic).end())) : !1
            }), t.append(featureTemplate(featureList))
        }
    })
});;
define("pagelet/loginindex/sso_login.js", function(require, exports, module) {
    var countUp = require("pagelet/loginindex/countUp.js"),
        featureTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "", _.each(obj, function(e) { __p += '\n    <i class="' + (null == (__t = e.type) ? "" : __t) + '" data-text="' + (null == (__t = e.text) ? "" : __t) + '">\n        <span>' + (null == (__t = e.name) ? "" : __t) + "</span>\n    </i>\n" }), __p += "\n\n";
            return __p
        },
        standardWidth = 1100,
        minHeight = 700,
        authorList = require("pagelet/loginindex/author_list.js"),
        featureList = require("pagelet/loginindex/feature_list.js"),
        index = 0,
        width = $(window).width(),
        height = $(window).height();
    ! function() {
        Raphael.fn.addGuides = function() {
            this.ca.guide = function(e) {
                return { guide: e }
            }, this.ca.along = function(e) {
                var t = this.attr("guide"),
                    i = t.getTotalLength(),
                    n = t.getPointAtLength(e * i),
                    a = { transform: "t" + n.x + " " + n.y };
                return a
            }
        }
    }();
    var isIe = function(e) {
        return 8 == e ? /msie 8.0/i.test(navigator.userAgent) : 9 == e ? /msie 9.0/i.test(navigator.userAgent) : "89" == e ? /msie 8.0|9.0/i.test(navigator.userAgent) : window.ActiveXObject || "ActiveXObject" in window ? !0 : void 0
    };
    module.exports = Pagelet.extend({
        el: ".loginindex",
        events: { "mouseenter .slider-box .element": "sliderBoxMouseenter", "click .slider-box .element": "sliderBoxClick", "mouseenter .layer-6 .feature i": "featureHover", "click .logo-jump": "logoJump", "click .nav i": "navJump" },
        fixLayout: function() { $(".sfoot_p").hide() },
        init: function() {
            var e = this;
            this.fixLayout(), this.render(), $(window).on("resize", function() { e.resizeFix() })
        },
        svgRender: function() {
            var e = { stroke: "#f95e58", "stroke-width": "10px", fill: "transparent", "fill-opacity": 0 },
                t = "http://p1.pstatp.com/origin/9515/5065988524";
            Raphael($(".layer-svg-2").get(0), 450, 214).path("M350,0 H0 V214 H450 V114").attr(e), Raphael($(".layer-svg-4").get(0), 520, 220).path("M520,40 L520,0 L0,0 L0,220 L420,220").attr(e), Raphael($(".layer-svg-5").get(0), 730, 230).path("M35,0 H0 V230 H35 M330,0 H730 V230 H330").attr(e), Raphael($(".layer-svg-6").get(0), 670, 250).path("M41,250 L0,250 L0,0 L335,0 M629,250 L670,250 L670,0 L335,0").attr(e);
            var i = Raphael($(".animate-svg-ball").get(0), 625, 362);
            i.addGuides(), this.svg2path = i.path("MM145,285C235,270,325,210,345,180").attr({ "stroke-width": "0px", stroke: "#fff" }), this.svg2circle = i.circle(0, 0, 10).attr({ stroke: "#ddf1ff", "stroke-width": "5px", fill: "#38c6ff" }), this.svg2image = i.image(t, -90, -90, 177, 62), this.svg2text = i.text(10, -60, "0").attr({ "font-size": "18px", fill: "#539fe0" })
        },
        ballAnimate: function() {
            if (!this.svg2path) return !1;
            var e = this.svg2path,
                t = { guide: e, along: 0 };
            this.svg2text.attr(t).animate({ along: 1 }, 1e3, "ease-out"), this.svg2image.attr(t).animate({ along: 1 }, 1e3, "ease-out"), this.svg2circle.attr(t).animate({ along: 1 }, 1e3, "ease-out")
        },
        render: function() { $("body").css("overflow", "hidden"), this.calcStageSize(), this.scaleImg(), this.templateInit(), this.ieFix(), this.mousewheel(), this.navigate(), this.svgRender() },
        logoJump: function() {
            var e = this,
                t = this.$el.find(".stage");
            index = 0, e.stageSlide(t, -index * e.height)
        },
        navJump: function(e) {
            var t = $(e.currentTarget),
                i = this,
                n = this.$el.find(".stage");
            index = t.index(), i.stageSlide(n, -index * i.height)
        },
        navigate: function() {
            for (var e = this.$el.find(".layer").length, t = this.$el.find(".nav"), i = $("<i></i>"), n = 0; e > n; n++) t.append(i.clone());
            $(".nav i").eq(0).addClass("first-dash-current")
        },
        resizeFix: function() {
            -(this.index - 1) * this.height, this.$el.find(".stage");
            this.calcStageSize(), this.scaleImg()
        },
        mousewheel: function() {
            function e(e) {
                var r = new Date;
                if (!(r.getTime() - n.getTime() > 1200)) return !1;
                if (n = new Date, i = -e.originalEvent.wheelDelta, Math.abs(i) >= 40 && (i /= 40), i > 0) {
                    if (6 == index) return !1;
                    index++
                } else if (0 > i) {
                    if (0 == index) return !1;
                    index--
                }
                t.stageSlide(a, -index * t.height)
            } {
                var t = this,
                    i = 0,
                    n = new Date,
                    a = this.$el.find(".stage");
                $(".layer").length
            }
            a.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                return $(e.target).hasClass("stage") ? void t.layerSwitch(index) : !1
            }), $("body").on("mousewheel", function(t) { e(t) }), $("body").on("keydown", function(e) {
                var i = e.keyCode;
                if (40 == i) {
                    if (6 == index) return !1;
                    index++
                }
                if (38 == i) {
                    if (0 == index) return !1;
                    index--
                }
                t.stageSlide(a, -index * t.height)
            })
        },
        stageSlide: function(e, t) {
            var i = this;
            isIe("89") ? e.animate({ top: t }, "500", "swing", function() { i.layerSwitch(t / height) }) : e.css({ transform: "translateY(" + t + "px)" })
        },
        layerSwitch: function(e) {
            var e = Math.round(Math.abs(e || 0) + 1);
            return this.index == e ? !1 : (this.index = e, $(".layer-animation").removeClass("layer-animation"), $(".layer-" + e).addClass("layer-animation"), isIe("89") && ($(".layer").find(".article-content").hide(), $(".layer-" + e).find(".article-content").fadeIn()), 2 === e && (this.count(), this.ballAnimate()), 1 === e ? ($(".nav i").eq(0).addClass("first-dash-current"), $(".nav i").removeClass("other-dash").removeClass("other-dash-current"), $(".stage-header").fadeOut(), $(".ripple").show()) : ($(".nav i").removeClass("first-dash-current"), $(".nav i").addClass("other-dash").removeClass("other-dash-current"), $(".nav i").eq(e - 1).addClass("other-dash-current"), $(".stage-header").fadeIn(), $(".ripple").hide()), 5 === e && this.$el.find(".slider-box .element").eq(0).mouseenter(), 6 === e && this.$el.find(".feature .quiz").mouseenter(), void(7 === e ? ($(".j-top-btn-group").hide(), $(".sfoot_p").show()) : ($(".sfoot_p").hide(), $(".j-top-btn-group").show())))
        },
        calcStageSize: function(e, t) {
            var e = e || $(".stage"),
                t = t || $(".layer");
            this.width = $(window).width(), this.height = $(window).height(), e.width(this.width), t.height(this.height), minHeight > height && this.$el.find(".phone").css("transform", "scale(.6)"), 1160 > width && this.$el.find(".layer-2 .article").css("margin-left", "35px")
        },
        scaleImg: function(e) {
            var t = $(window).width() / standardWidth,
                e = e || $(".scale");
            return t >= .9 ? !1 : (t = .6 > t ? .6 : t.toFixed(2), void e.each(function() { isIe(8) && $(this).css({ zoom: t, "margin-right": "-120px", "margin-bottom": "-20px" }), $(this).css("transform", "scale(" + t + ")") }))
        },
        count: function() {
            var e = new countUp($(".count-num").get(0), 0, 723245, 0, 1),
                t = new countUp(this.svg2text, 0, 623545, 0, 1);
            e.start(), t.start()
        },
        ieFix: function() { isIe(8) && ($(".iphone").css("top", "150px"), $(window).off("mousewheel"), $(".layer-1 .ripple").hide(), $(".circle-inner").remove()), isIe() && $(".animate-ball-svg").remove(), isIe("89") ? ($(".stage").css("position", "absolute"), this.$el.find(".article-content").css("opacity", 1), this.$el.find(".phone").css("opacity", 1), this.$el.find(".slider-box element").css("opacity", 1)) : this.$el.find(".layer-3 .circle").css("top", "-50px") },
        sliderBoxMouseenter: function(e) {
            var t = $(e.currentTarget),
                i = this.$el.find(".layer-5 .phone");
            $(".enter-rotate").css("opacity", .6), $(".enter-rotate").removeClass("enter-rotate"), t.css("opacity", 1), t.addClass("enter-rotate"), i.find("img").attr("src", t.data("image")), i.find("p").text(t.data("author")), i.find(".description p").text(t.data("description"))
        },
        sliderBoxClick: function(e) {
            var t = $(e.currentTarget),
                i = t.data("url");
            window.open(i)
        },
        featureHover: function(e) {
            var t = $(e.currentTarget),
                i = t.data("text"),
                n = this.$el.find(".feature-text");
            n.hide(), n.fadeIn("fast"), n.text(i), $(".feature-hover-current").removeClass("feature-hover-current"), t.addClass("feature-hover-current")
        },
        templateInit: function(e) {
            var e = e || $(".slider-box"),
                t = $(".layer-6 .feature"),
                i = ['<div class="element">', "<img />", '<i class="circle-inner circle"></i>', '<i class="circle-inner"></i>', "</div>"].join(""),
                n = $(i);
            _.each(authorList, function(t) {
                var i = n.clone();
                return t && t.content ? (i.data("description", t.content).data("author", t.author).data("image", t.pic).data("url", t.url), void e.find(".slider").append(i.find("img").attr("src", t.pic).end())) : !1
            }), t.append(featureTemplate(featureList))
        }
    })
});;
define("pagelet/matrix_manage/matrix_assess_manage_header/matrix_assess_manage_header.js", function(t, a, e) {
    var n = t("common/stip/stip.js"),
        s = t("common/daterange/daterange.js"),
        i = window.listener,
        d = "/statistic/matrix_check_manage/";
    e.exports = Pagelet.extend({
        el: "#assess_manage_header",
        events: { "changeDate #daterange_start_date": "loadByStartDate", "changeDate #daterange_end_date": "loadByEndDate" },
        init: function() { this.cacheInit(), this.dataInit(), this.eventInit(), this.eventCenter(), this.getListData() },
        cacheInit: function() { $(this.$el.find(".daterange_stoggle_span")[0]).addClass("selected"), this.$startDate = this.$el.find("#daterange_start_date"), this.$endDate = this.$el.find("#daterange_end_date") },
        dataInit: function() {
            var t = new Date;
            this.setting = { startDate: t.clone().d(-7).format("date"), endDate: t.clone().d(-1).format("date"), pagenum: 1, page_all: 1, content: [], show_income: !1 }
        },
        eventInit: function() {
            var t = this,
                a = this.setting;
            s({ start_date: a.startDate, end_date: a.endDate, relative: "-1", days: "-360", onchange: function(a) { startDate = a.start_date, endDate = a.end_date, t.updateDateData(startDate, endDate) } })
        },
        eventCenter: function() {
            var t = this;
            i.on("assess_manage_header", "goToPage", function(a, e) { t.setting.pagenum = e, t.getListData() })
        },
        updateDateData: function(t, a) {
            var e = this,
                n = e.setting;
            n.startDate = t, n.endDate = a, n.pagenum = 1, e.getListData()
        },
        getListData: function() {
            var t = this,
                a = this.setting;
            $.ajax({ url: d, type: "GET", data: { start_date: a.startDate, end_date: a.endDate, pagenum: a.pagenum }, dataType: "json" }).done(function(a) { "success" == a.message ? t.dataProcess(a.data) : n.popupTip({ msg: a.message ? a.message : "发生错误，请重试", status: !1 }) }).fail(function() { n.popupTip({ msg: "网络错误，请重试", status: !1 }) })
        },
        dataProcess: function(t) {
            var a = this.setting;
            a.pagenum = t.pagenum, a.page_all = t.total_pagenum, a.content = t.data_list || [], a.total_num = t.total_num || 20 * a.page_all, a.show_income = t.show_income || !1, i.trigger("assess_manage_header", "updateData", a)
        },
        checkDate: function(t, a) {
            new Date(t).getTime(), new Date(a).getTime();
            return t > a
        },
        loadByStartDate: function(t) {
            var a = this,
                e = new Date(t.date).format("yyyy-mm-dd"),
                s = a.setting.endDate;
            a.checkDate(e, s) ? n.popupTip({ msg: "开始日期不能大于结束日期", status: !1 }) : a.updateDateData(e, s)
        },
        loadByEndDate: function(t) {
            var a = this,
                e = a.setting.startDate,
                s = new Date(t.date).format("yyyy-mm-dd");
            a.checkDate(e, s) ? n.popupTip({ msg: "开始日期不能大于结束日期", status: !1 }) : a.updateDateData(e, s)
        }
    })
});;
define("pagelet/matrix_manage/matrix_assess_manage_table/matrix_assess_manage_table.js", function(require, exports, module) {
    var tableTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<div class="table-list">\n    <table class="table-detail">\n        <thead>\n            <tr>\n                <th>头条号</th>\n                <th>发文量</th>\n                <th>推荐量</th>\n                <th>阅读量</th>\n                <th>评论量</th>\n                <th>收藏量</th>\n                <th>转发量</th>\n                ', show_income && (__p += '\n                    <th class="income">收入</th>\n                '), __p += "\n            </tr>\n        </thead>\n        <tbody>\n            ";
                for (var o in content) __p += '\n                <tr>\n                    <td class="user" title="' + (null == (__t = content[o].matrix_account_name) ? "" : _.escape(__t)) + '"><a target="_blank" href="http://www.toutiao.com/m' + (null == (__t = content[o].media_id) ? "" : _.escape(__t)) + '/">' + (null == (__t = content[o].matrix_account_name) ? "" : _.escape(__t)) + "</a></td>\n                    <td>" + (null == (__t = content[o].article_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[o].impression_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[o].go_detail_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[o].comment_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[o].repin_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[o].share_count) ? "" : _.escape(__t)) + "</td>\n                    ", show_income && (__p += '\n                        <td class="income">' + (null == (__t = content[o].income) ? "" : _.escape(__t)) + "</td>\n                    "), __p += "\n                </tr>\n            ";
                __p += "\n        </tbody>\n    </table>\n</div>\n", page_all > 1 && (__p += "\n<div class ='pagination'>\n    <a class='page j_page_pre' page=\"" + (null == (__t = pagenum - 1) ? "" : __t) + "\">上一页</a>\n    <a> <span>第</span><input type='text' class='pagination-input j_pagination_input' value='" + (null == (__t = 0 == page_all ? 0 : pagenum) ? "" : __t) + "'><span>/" + (null == (__t = page_all) ? "" : __t) + "页</span></a>\n    <a class='page j_page_next' page='" + (null == (__t = pagenum + 1) ? "" : __t) + "'>下一页</a>\n</div>\n"), __p += ""
            }
            return __p
        },
        stip = require("common/stip/stip.js"),
        eventCenter = (require("common/popup/dialog.js"), window.listener),
        urls = { content_daily_export: "/statistic/matrix_check_manage_export/" };
    module.exports = Pagelet.extend({
        el: "#assess_manage_table",
        events: { "click .j_excel_export": "exportExcelClick", "keyup .j_pagination_input": "keyToPage", "click .j_page_next": "pageNextClick", "click .j_page_pre": "pagePreClick" },
        init: function() { this.cacheInit(), this.dataInit(), this.eventCenter() },
        cacheInit: function() { this.$contentTable = this.$el.find(".j_content_table") },
        dataInit: function() {
            var t = new Date;
            this.setting = { startDate: t.clone().d(-1).format("date"), endDate: t.clone().d(-1).format("date"), pagenum: 1, page_all: 1, content: [], show_income: !0 }
        },
        eventCenter: function() {
            var t = this;
            eventCenter.on("assess_manage_header", "updateData", function(e, n) { t.setting = n, t.render(n) })
        },
        render: function(t) {
            var e = this;
            e.dataProcess(t.content);
            var n = $(tableTemplate(t));
            e.$contentTable.html(n)
        },
        dataProcess: function(t) {
            for (var e = 0, n = t.length; n > e; e++) t[e].impression_count = this.numberFormat(t[e].impression_count), t[e].go_detail_count = this.numberFormat(t[e].go_detail_count), t[e].comment_count = this.numberFormat(t[e].comment_count), t[e].repin_count = this.numberFormat(t[e].repin_count), t[e].share_count = this.numberFormat(t[e].share_count), t[e].article_count = this.numberFormat(t[e].article_count), t[e].income = this.numberFormat(t[e].income)
        },
        numberFormat: function(t) {
            var e;
            if (t > 1e8) return e = Math.floor(t / 1e7), e / 10 + "亿";
            var e = t + "";
            return e.replace(/\d+?(?=(?:\d{3})+$)/gim, "$&,")
        },
        exportExcelClick: function() {
            var t = this.setting,
                e = t.startDate,
                n = t.endDate,
                a = urls.content_daily_export + "?start_date=" + e;
            a = a + "&end_date=" + n, $("body").append('<iframe style="display:none" src="' + a + '"></iframe>')
        },
        pageNextClick: function() { this.setting.pagenum < this.setting.page_all ? (this.setting.pagenum = this.setting.pagenum + 1, eventCenter.trigger("assess_manage_header", "goToPage", this.setting.pagenum)) : stip.popupTip({ msg: "已经是最后一页", status: !1 }) },
        pagePreClick: function() { this.setting.pagenum > 1 ? (this.setting.pagenum = this.setting.pagenum - 1, eventCenter.trigger("assess_manage_header", "goToPage", this.setting.pagenum)) : stip.popupTip({ msg: "已经是第一页", status: !1 }) },
        keyToPage: function(t) {
            var e = $(t.currentTarget).val();
            13 === t.which && e > 0 && e <= this.setting.page_all ? (this.setting.pagenum = e, eventCenter.trigger("assess_manage_header", "goToPage", this.setting.pagenum)) : 13 === t.which && (0 == e || e > this.setting.page_all) && stip.popupTip({ msg: "请输入符合条件的页数", status: !1 })
        }
    })
});;
define("pagelet/matrix_manage/matrix_content_manage_header/matrix_content_manage_header.js", function(t, a, e) {
    var n = t("common/stip/stip.js"),
        s = t("common/daterange/daterange.js"),
        d = window.listener,
        i = "/statistic/matrix_content_manage/";
    e.exports = Pagelet.extend({
        el: "#content_manage_header",
        events: { "changeDate #daterange_start_date": "loadByStartDate", "changeDate #daterange_end_date": "loadByEndDate" },
        init: function() { this.cacheInit(), this.dataInit(), this.eventInit(), this.getListData(), this.eventCenter() },
        cacheInit: function() { $(this.$el.find(".daterange_stoggle_span")[0]).addClass("selected"), this.$startDate = this.$el.find("#daterange_start_date"), this.$endDate = this.$el.find("#daterange_end_date") },
        dataInit: function() {
            var t = new Date;
            this.setting = { startDate: t.clone().d(-7).format("date"), endDate: t.clone().d(-1).format("date"), content: [], pagenum: 1, page_all: 1, total_num: 0 }
        },
        eventInit: function() {
            var t = this,
                a = t.setting;
            s({ start_date: a.startDate, end_date: a.endDate, relative: "-1", days: "-360", onchange: function(a) { startDate = a.start_date, endDate = a.end_date, t.updateDateData(startDate, endDate) } })
        },
        eventCenter: function() {
            var t = this;
            d.on("content_manage_header", "goToPage", function(a, e) { t.setting.pagenum = e, t.getListData() })
        },
        updateDateData: function(t, a) {
            var e = this.setting;
            e.startDate = t, e.endDate = a, e.pagenum = 1, this.getListData()
        },
        getListData: function() {
            var t = this,
                a = t.setting;
            $.ajax({ url: i, type: "GET", dataType: "json", data: { start_date: a.startDate, end_date: a.endDate, pagenum: a.pagenum } }).done(function(a) { "success" == a.message ? t.dataProcess(a) : n.popupTip({ msg: a.message ? a.message : "发生错误，请重试" }) }).fail(function() { n.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) })
        },
        dataProcess: function(t) {
            var a = this.setting;
            a.pagenum = t.data.pagenum, a.page_all = t.data.total_pagenum, a.content = t.data.data_list ? t.data.data_list : [], a.total_num = t.data.total_num ? t.data.total_num : 10 * a.page_all, d.trigger("content_manage_header", "updateData", a)
        },
        loadByStartDate: function(t) {
            var a = this,
                e = new Date(t.date).format("yyyy-mm-dd");
            a.checkDate(e, a.setting.endDate) ? a.updateDateData(e, a.setting.endDate) : n.popupTip({ msg: "开始日期不能大于结束日期", status: !1 })
        },
        loadByEndDate: function(t) {
            var a = this,
                e = new Date(t.date).format("yyyy-mm-dd");
            a.checkDate(a.setting.startDate, e) ? a.updateDateData(a.setting.startDate, e) : n.popupTip({ msg: "开始日期不能大于结束日期", status: !1 })
        },
        checkDate: function(t, a) {
            var e = new Date(t).getTime(),
                n = new Date(a).getTime();
            return n >= e
        }
    })
});;
define("pagelet/matrix_manage/matrix_content_manage_table/matrix_content_manage_table.js", function(require, exports, module) {
    var tableTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += '<div class="table-list">\n    <table class="table-detail">\n        <thead>\n            <tr>\n                <th>头条号</th>\n                <th>标题</th>\n                <th>类别</th>\n                <th>推荐量</th>\n                <th>阅读量</th>\n                <th>评论量</th>\n                <th>收藏量</th>\n                <th>转发量</th>\n                <th>发表时间</th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            ';
                for (var i = 0, l = content.length; l > i; i++) __p += '\n                <tr>\n                    <td class="user" title="' + (null == (__t = content[i].account_name) ? "" : _.escape(__t)) + '"><span>' + (null == (__t = content[i].account_name) ? "" : _.escape(__t)) + '</span></td>\n                    <td class="title" title="' + (null == (__t = content[i].title) ? "" : _.escape(__t)) + '"><a target="_blank" href="http://toutiao.com/i' + (null == (__t = content[i].item_id) ? "" : __t) + '/">' + (null == (__t = content[i].title) ? "" : _.escape(__t)) + "</a></td>\n                    ", __p += content[i].is_video ? "\n                        <td>视频</td>\n                    " : "\n                        <td>文章</td>\n                    ", __p += "\n                    <td>" + (null == (__t = content[i].impression_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[i].go_detail_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[i].comment_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[i].repin_count) ? "" : _.escape(__t)) + "</td>\n                    <td>" + (null == (__t = content[i].share_count) ? "" : _.escape(__t)) + '</td>\n                    <td class="time">' + (null == (__t = content[i].publish_time) ? "" : _.escape(__t)) + '</td>\n                    <td class="withdraw j_withdraw" articleId="' + (null == (__t = content[i].item_id) ? "" : _.escape(__t)) + '">从主页撤回</td>\n                </tr>\n            ';
                __p += "\n        </tbody>\n    </table>\n</div>\n", page_all > 1 && (__p += "\n<div class ='pagination'>\n    <a class='page j_page_pre' page=\"" + (null == (__t = pagenum - 1) ? "" : __t) + "\">上一页</a>\n    <a> <span>第</span><input type='text' class='pagination-input j_pagination_input' value='" + (null == (__t = pagenum) ? "" : __t) + "'><span>/" + (null == (__t = page_all) ? "" : __t) + "页</span></a>\n    <a class='page j_page_next' page='" + (null == (__t = pagenum + 1) ? "" : __t) + "'>下一页</a>\n</div>\n"), __p += ""
            }
            return __p
        },
        downloadDialog = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="download-dialog j_download_dialog">\n    <div class="mask"></div>\n    <div class="dialog-container j_download_container">\n        <div class=\'title\'>\n            选择文章\n        </div>\n        <div class=\'download_list j_download_list\'>\n            \n        </div>\n\n        <div class=\'edit-btns\'>\n            <button type="button" class="edit-btn btn j_close_download_dialog">关闭</button>\n        </div>\n    </div>\n</div>\n';
            return __p
        },
        detailTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "<ul>\n    ";
                for (var i = 1; i < Math.ceil(total_num / 500) + 1; i++) __p += "\n    <li><a href='/statistic/matrix_content_manage_export/?start_date=" + (null == (__t = startDate) ? "" : __t) + "&end_date=" + (null == (__t = endDate) ? "" : __t) + "&pagenum=" + (null == (__t = i) ? "" : __t) + "'>第" + (null == (__t = 500 * (i - 1) + 1) ? "" : __t) + "篇 - 第" + (null == (__t = 500 * i > total_num ? total_num : 500 * i) ? "" : __t) + "篇</a></li>\n    ";
                __p += "\n</ul>"
            }
            return __p
        },
        stip = require("common/stip/stip.js"),
        eventCenter = (require("common/popup/dialog.js"), require("common/util/util.js"), window.listener),
        urls = { withdrawPage: "/statistic/content_article_export/", content_daily_export: "/statistic/matrix_content_manage_export/" };
    module.exports = Pagelet.extend({
        el: "#content_manage_table",
        events: { "click .j_withdraw": "withdrawClick", "click .j_excel_export": "exportExcelClick", "keyup .j_pagination_input": "keyToPage", "click .j_page_next": "pageNextClick", "click .j_page_pre": "pagePreClick", "click .j_withdraw_ok": "withdrawOkClick", "click .j_withdraw_cancel": "withdrawCancelClick", "blur .j_withdraw_reason": "withdrawReasonBlur", "keyup .j_withdraw_reason": "withdrawReasonKeyup" },
        init: function() { this.cacheInit(), this.dataInit(), this.eventCenter() },
        cacheInit: function() { this.$contentTable = this.$el.find(".j_content_table"), this.$withdrawReason = this.$el.find(".j_withdraw_reason"), this.$withdrawDialog = this.$el.find(".withdraw_dialog") },
        dataInit: function() {
            var t = new Date;
            this.setting = { startDate: t.clone().d(-1).format("date"), endDate: t.clone().d(-1).format("date"), pagenum: 1, content: [], page_all: 1, total_num: 0 }
        },
        eventCenter: function() {
            var t = this;
            eventCenter.on("content_manage_header", "updateData", function(e, n) { t.setting = n, t.render(n) })
        },
        render: function(t) {
            this.dataProcess(t.content);
            var e = $(tableTemplate(t));
            this.$contentTable.html(e)
        },
        dataProcess: function(t) {
            for (var e = 0, n = t.length; n > e; e++) t[e].impression_count = this.numberFormat(t[e].impression_count), t[e].go_detail_count = this.numberFormat(t[e].go_detail_count), t[e].comment_count = this.numberFormat(t[e].comment_count), t[e].repin_count = this.numberFormat(t[e].repin_count), t[e].share_count = this.numberFormat(t[e].share_count), t[e].publish_time = new Date(t[e].publish_time).format("yyyy-mm-dd hh:MM")
        },
        numberFormat: function(t) {
            var e = t + "";
            return e.replace(/\d+?(?=(?:\d{3})+$)/gim, "$&,")
        },
        withdrawClick: function(t) {
            var e = $(t.target).attr("articleId");
            this.$withdrawDialog.show().data({ aritcle_id: e }), eventCenter.on("content_manage_header", "withdrawSuccess", function() { $(t.target).removeClass("withdraw").text("已撤回") })
        },
        withdrawOkClick: function() {
            var t = this,
                e = t.$withdrawDialog.data("aritcle_id"),
                n = t.$withdrawReason.val();
            n.length ? t.withdrawRequest({ item_id: e, withdraw_reason: n }) : t.$withdrawReason.addClass("error")
        },
        withdrawRequest: function(t) {
            var e = this;
            $.ajax({ url: "/statistic/matrix_hide_article/", type: "POST", dataType: "json", data: t }).done(function(t) { "success" == t.message ? (e.$withdrawReason.removeClass("error").val(""), e.$withdrawDialog.data({}).hide(), eventCenter.trigger("content_manage_header", "withdrawSuccess")) : stip.popupTip({ msg: "请求错误，请重试", status: !1 }) }).fail(function() { stip.popupTip({ msg: "请求错误，请重试", status: !1 }) })
        },
        withdrawCancelClick: function() { this.$withdrawReason.removeClass("error").val(""), this.$withdrawDialog.data({}).hide() },
        withdrawReasonBlur: function() { this.$withdrawReason.val().length ? this.$withdrawReason.removeClass("error") : this.$withdrawReason.addClass("error") },
        withdrawReasonKeyup: function() { this.$withdrawReason.val().length ? this.$withdrawReason.removeClass("error") : this.$withdrawReason.addClass("error") },
        exportExcelClick: function() {
            var t = this,
                e = this.setting,
                n = e.startDate,
                a = e.endDate,
                i = e.total_num;
            if (i > 500) t.popupDownload();
            else {
                var o = urls.content_daily_export + "?start_date=" + n;
                o = o + "&end_date=" + a, $("body").append('<iframe style="display:none" src="' + o + '"></iframe>')
            }
        },
        popupDownload: function() {
            var t = this,
                e = t.setting,
                n = (t.setting.total_num, $(downloadDialog()));
            $("body").append(n), $detail = $("body").find(".j_download_container").find(".j_download_list");
            var a = $(detailTemplate(e));
            $detail.html(a), $("body").on("click", ".j_close_download_dialog", function() { t.popHide() })
        },
        popHide: function() { $("body").find(".j_download_dialog").hide() },
        keyToPage: function(t) {
            var e = $(t.currentTarget).val();
            13 === t.which && e > 0 && e <= this.setting.page_all ? (this.setting.pagenum = e, eventCenter.trigger("content_manage_header", "goToPage", this.setting.pagenum)) : 13 === t.which && (0 == e || e > this.setting.page_all) && stip.popupTip({ msg: "请输入符合条件的页数", status: !1 })
        },
        pagePreClick: function() { this.setting.pagenum > 1 ? (this.setting.pagenum = this.setting.pagenum - 1, eventCenter.trigger("content_manage_header", "goToPage", this.setting.pagenum)) : stip.popupTip({ msg: "已经是第一页", status: !1 }) },
        pageNextClick: function() { this.setting.pagenum < this.setting.page_all ? (this.setting.pagenum = this.setting.pagenum + 1, eventCenter.trigger("content_manage_header", "goToPage", this.setting.pagenum)) : stip.popupTip({ msg: "已经是最后一页", status: !1 }) }
    })
});;
define("pagelet/rights/kbanquan-cookie.js", function(e, o, i) {
    i.exports = {
        set: function(e) { $.cookie(e, !0, { path: "/", expires: "" }) },
        exist: function(e) {
            return !!$.cookie(e)
        },
        cookieNames: { KbanquanMenuNoticeCookie: "__RightsMenuNoticeCookie__", KbanquanModelNoticeCookie: "__KbanquanModelNoticeCookie__" }
    }
});;
define("pagelet/rights/rights-status.js", function(t, i, n) {
    var g;
    n.exports = {
        getEl: function(t) {
            return (t || !g) && (g = $("#origin_article_stats")), g
        },
        isSigned: function(t) {
            return 0 !== this.getSignStatus(t)
        },
        getSignStatus: function(t) {
            var i = this.getEl(t),
                n = 2 == i.data("right-knight-sign");
            if (!n) return -1;
            var g = i.data("kbanquan-sign");
            if (!g || 0 == g) return 0;
            var s = +g;
            return 3 === s && (s = 1), s
        },
        isSignedBoth: function() {
            return this.isKbqSigned() && this.isRkSigned()
        },
        isKbqSigned: function() {
            var t = this.getEl();
            return 2 == this.getKbqStatus(t)
        },
        isRkSigned: function() {
            var t = this.getEl();
            return 2 == this.getRightKnightStatus(t)
        },
        getKbqStatus: function(t) {
            return +t.data("kbanquan-sign")
        },
        getRightKnightStatus: function(t) {
            return +t.data("right-knight-sign")
        },
        isNotSignAny: function() {
            var t = this.getEl();
            return !this.getKbqStatus(t) || !this.getRightKnightStatus(t)
        },
        getStatusString: function(t, i) {
            return t.data(i + "-sign")
        }
    }
});;
define("pagelet/menu/menu.js", function(e) {
    var n = e("pagelet/rights/kbanquan-cookie.js"),
        i = e("pagelet/rights/rights-status.js");
    e("common/select/select.js"), $(function() {
        function e(i, t, a) { $.get("/get_im_token/", { webid: t, refresh: a }, function(a) { "success" === a.message && (o = new ByteIM({ wsUrl: "wss://toutiao-frontier.snssdk.com/ws/v2", aid: "13", fpid: "1", appkey: "e92afe409d29ce57cd31b483c25981de", accessSalt: "f8a69f1719916z", did: t, uid: i, token: a.data.token, onInvalidToken: function() { u > s && (e(i, t, 1), s++) }, onError: function() {} }), o.ready(function() { o.login(function() { o.getNewMessage() }), o.onReceive(function() { n() }), n() })) }) }

        function n() {
            var e = 0,
                n = o.getUserInfo();
            n.map(function(n) { e += n.unreadCount }), e > 0 ? (e >= 99 && (e = "99+"), $(".menu-private-letter-item").html(e).css("display", "inline-block")) : $(".menu-private-letter-item").css("display", "none")
        }

        function i(e) { e > 0 ? (d.show(), $("#invite-num") && $("#invite-num").text(e).show()) : d.hide() }

        function t(e, n) { window.localStorage && window.localStorage.getItem(e) ? $("#" + n).find(".new-reddot").addClass("hide") : window.localStorage && $("#" + n).one("click", function() { window.localStorage.setItem(e, 1) }) }
        if ($(".menu").length) {
            var o, a = $(".menu").data("uid").toString(),
                c = $(".menu").data("mid").toString(),
                u = 10,
                s = 0;
            window.ByteIM && e(a, c, 0)
        }
        var d = $(".new-invite-num");
        window.location.href.indexOf("/wenda/invite/") < 0 && $.ajax({ url: "//mp.toutiao.com/wenda/invite/count/" }).done(function(e) {
            var n = e.data.invite_count;
            i(n)
        }), t("click_menu_2003", "menu_toutiao_zone"), t("click_menu_3004", "menu_keyword_analysis"), t("click_menu_2007", "menu_video_rights"), t("commodity_click", "menu_new_commodity"), t("click_menu_4003", "menu_ad_account")
    }), $(function() {
        var e = $("#origin_article_stats");
        i.isNotSignAny() && (n.exist(n.cookieNames.KbanquanMenuNoticeCookie) || (e.append('<i class="notice-badge"></i>'), e.click(function() { n.set(n.cookieNames.KbanquanMenuNoticeCookie) })))
    })
});;
define("pagelet/menum/action.js", function(n) {
    var i = n("common/ui/tab.js"),
        c = n("common/vali/vali.js"),
        e = n("common/popup/dialog.js"),
        o = ["/mp.toutiao.com", "/v.qq.com", "/mp.qq.com", "/mp.weixin.qq.com", "/kuaibao.qq.com", ".yidianzixun.com", "/yidianzixun.com", ".sm.cn", "/sm.cn", ".uc.cn", "/uc.cn", ".uczzd.cn", "/uczzd.cn", "/m.baidu.com", "/haokan.baidu.com", "/baijiahao.baidu.com"];
    return function(n) {
        function t(n, i) {
            return "cant" === n ? void k("cant") : "blank" === n ? void k("blank") : (r = n.type, u = n.value, f = i, void k(u ? r + "show" : "action"))
        }

        function a() {
            b(function(n, i, c) {
                n || (r = "href", u = c[0].value.replace(/^(\w+\:\/\/)?(.*)$/, function(n, i, c) {
                    return (i || "http://") + c
                }), f({ type: r, value: u }), k("hrefshow"))
            })
        }
        var f, r, u, d = n.find(".jhrefbtn"),
            l = n.find(".jhrefinput"),
            m = n.find(".jhrefmsg"),
            h = n.find(".jhrefsave"),
            v = n.find(".jhrefcancel"),
            p = n.find(".jhref"),
            s = n.find(".jhrefedit"),
            j = n.find(".jhrefdel"),
            k = i($(), n.find(".widget_tab_page"), function(n) { "hrefshow" === n ? p.prop("href", u).text(u) : "hrefedit" === n && (b("reset"), l.val(u || "")) });
        d.click(function() { k("hrefedit") }), s.click(function() { k("hrefedit") }), j.click(function() {
            var n = e({ btns: [{ type: "ok", click: function() { r = "", u = "", f({ type: "", value: "" }), k("action"), n.remove() } }, "cancel"], title: "删除确认", content: "删除后可重新设置菜单动作", type: "info" }).show()
        }), v.click(function() { u ? "href" === r && k("hrefshow") : k("action") });
        var b = c(l.data({
            vali_jmsg: m,
            vali_require: !0,
            vali_func: c.returnWrap(function(n) {
                return c.ifLinkValid(n, o)
            })
        }));
        return h.click(a), k("blank"), t
    }
});;
define("pagelet/menum/menum.js", function(require, exports, module) {
    var menumright = require("pagelet/menum/action.js"),
        Util = require("common/util/util.js"),
        Vali = require("common/vali/vali.js"),
        Dialog = require("common/popup/dialog.js"),
        inputDialog = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="menum_input_dialog">\n    <div class="menum_input_dialog_title">请输入菜单名称</div>\n    <input type="text" name="name" class="signform_input menum_input_dialog_input" data-node="input" placeholder="菜单名称不多于4个汉字或8个字符">\n    <div class="sred menum_input_dialog_msg" data-node="msg"></div>\n</div>';
            return __p
        },
        Stip = require("common/stip/stip.js");
    return function(pageData) {
        var modified = !1;
        window.onbeforeunload = function() {
            return modified ? "修改还未发布，如果离开页面，改动将不会生效。" : void 0
        }, $(function() {
            function ex(e, t) {
                var i = e.find(".jitem").eq(0).siblings(".jitem").andSelf();
                if (e.is(jlist1[0])) {
                    for (var n = [], a = 0; a < i.length; a++) ex(i.eq(a), n);
                    return n
                }
                var s = e.data(),
                    o = { type: s.type, value: s.value, name: s.name, children: [] };
                if (o.name) {
                    if (0 === i.length && !o.value) throw e.findAndSelf(".jhead").eq(0).click(), new Error("菜单未设置动作，请检查后重试");
                    t.push(o);
                    for (var a = 0; a < i.length; a++) ex(i.eq(a), o.children)
                }
            }

            function im(e, t) {
                for (var i = [], n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (a.name && a.name.length) {
                        var s = $(tmp1(a));
                        i.push(s[0]), s.data({ type: a.type, value: a.value, name: a.name });
                        var o = s.find(".jbody"),
                            l = s.find(".jhead");
                        sortable(o);
                        for (var m = a.children, d = 0; d < m.length; d++) {
                            var c = m[d],
                                u = $(tmp2(c));
                            o.append(u), u.data({ type: c.type, value: c.value, name: c.name })
                        }
                        0 != m.length && l.addClass("hasson")
                    }
                }
                jlist1.append(i)
            }

            function sortable(e) { e.sortable({ items: ">*", placeholder: "menum_item_placeholder", axis: "y", change: function() { modified = !0 }, forcePlaceholderSize: !0 }), e.disableSelection() }
            $("body").hoverTitle();
            var jmenum = $("#menum"),
                showRight = menumright($("#menumright")),
                menuSwitch = $("#menu_switch"),
                nameDialog = function() {
                    var e, t = $(inputDialog()),
                        i = t.nodes();
                    return function(n) {
                        function a() { o(function(t, i, n) { t || (l.hide(), e($.so(n).name)) }) }
                        e = n.success || $.noop, i.input.val(n.name || ""), i.input.data({ number: n.number ? n.number : 4 });
                        var s = i.input.data("number");
                        s = s ? s : 4, i.input.data({
                            vali_jmsg: i.msg,
                            vali_require: "请填写菜单名称",
                            vali_func: Vali.returnWrap(function(e) {
                                return Vali.emoji(e) ? "菜单名称不可含有表情" : Vali.range(e, 0, s, !0) ? "菜单名称不多于" + s + "个汉字或" + 2 * parseInt(s) + "个字符" : void 0
                            })
                        }), i.input.attr("placeholder", "该级菜单不能大于" + s + "个汉字" + 2 * parseInt(s) + "个字符");
                        var o = Vali(i.input),
                            l = Dialog({ btns: [{ type: "ok", click: a }, { type: "cancel", click: function() { l.hide() } }] }),
                            m = l.jele.find(".spopup_dialog_body");
                        m.append(t), o("reset"), l.show(), i.input.focus()
                    }
                }(),
                switchOpration = function(e) {
                    var t = $(e),
                        i = t.find(".tui-switch-inner"),
                        n = $("#no_menum");
                    t.hasClass("tui-switch-checked") ? (t.removeClass("tui-switch-checked"), i.html("Off"), n.removeClass("hide"), jmenum.addClass("hide")) : (t.addClass("tui-switch-checked"), i.html("On"), n.addClass("hide"), jmenum.removeClass("hide"))
                };
            menuSwitch.click(function() {
                var e = this,
                    t = $(this).hasClass("tui-switch-checked") ? 0 : 1;
                $.ajax({ type: "POST", url: "/service/set_custom_menu_switch/", data: { custom_menu_switch: t }, dataType: "json" }).done(function(t) { "success" == t.message ? switchOpration(e) : Stip.popupTip({ msg: t.reason, status: !1 }) }).fail(function() { Stip.popupTip({ msg: "未知错误", status: !1 }) })
            });
            var tmp1 = function(obj) {
                    {
                        var __t, __p = "";
                        Array.prototype.join
                    }
                    with(obj || {}) __p += '<div class="menum_item jitem">\n    <div class="menum_item_title menum_item_title_1 jhead">\n        <span class="menum_item_text jtitle">' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '</span>\n        <div class="menum_item_btns">\n            <span class="menum_item_btn iconfont icon-add jadd2" data-title="增加子菜单"></span>\n            <span class="menum_item_btn iconfont icon-delete jdel" data-title="删除"></span>\n            <span class="menum_item_btn iconfont icon-edit jedit" data-title="修改名称"></span>\n        </div>\n    </div>\n    <div class="menum_item_body jbody">\n    </div>\n</div>';
                    return __p
                },
                tmp2 = function(obj) {
                    {
                        var __t, __p = "";
                        Array.prototype.join
                    }
                    with(obj || {}) __p += '<div class="menum_item_title menum_item_title_2 jitem jhead">\n    <span class="menum_item_text jtitle">' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '</span>\n    <div class="menum_item_btns">\n        <span class="menum_item_btn iconfont icon-delete jdel" data-title="删除"></span>\n        <span class="menum_item_btn iconfont icon-edit jedit" data-title="修改名称"></span>\n    </div>\n</div>';
                    return __p
                },
                jmenumleft = $("#menumleft"),
                jlist1 = jmenumleft.find(".jlist1");
            jmenumleft.find(".jadd1").click(function() {
                return jlist1.children().length >= 3 ? void Dialog({ btns: ["ok"], title: "一级菜单最多只能3个" }).show() : void nameDialog({
                    success: function(e) {
                        modified = !0;
                        var t = $(tmp1({ name: e })).data("name", e);
                        jlist1.append(t), sortable(t.find(".jbody")), t.findAndSelf(".jhead").click()
                    },
                    number: 4
                })
            });
            var jLastSelect = $();
            jmenumleft.on("click", ".jadd2", function() {
                var e = $(this).closest(".jitem");
                if (e.data("value")) return void Dialog({ btns: ["ok"], title: "已设置动作，无法新增子菜单" }).show();
                var t = e.find(".jbody").eq(0),
                    i = e.find(".jhead").eq(0);
                return t.children().length >= 5 ? void Dialog({ btns: ["ok"], title: "二级菜单最多只能5个" }).show() : void nameDialog({
                    success: function(e) {
                        modified = !0;
                        var n = $(tmp2({ name: e })).data("name", e);
                        t.append(n), i.hasClass("hasson") || i.addClass("hasson"), n.findAndSelf(".jhead").click()
                    },
                    number: 8
                })
            }).on("click", ".jedit", function() {
                var e = $(this).closest(".jitem"),
                    t = e.find(".jtitle").eq(0),
                    i = e.data("name"),
                    n = $(this).closest(".jhead").hasClass("menum_item_title_1") ? 4 : 8;
                nameDialog({ name: i, success: function(i) { modified = !0, t.text(i), e.data("name", i) }, number: n })
            }).on("click", ".jdel", function() {
                var e, t = $(this).closest(".jitem");
                t.hasClass("menum_item_title_2") && (e = t.parent());
                var i = Dialog({ btns: [{ type: "ok", click: function() { modified = !0, t.remove(), e && 0 == e.children().length && e.parent().find(".jhead").removeClass("hasson"), showRight("blank"), i.remove() } }, "cancel"], title: "删除确认", content: "删除后该菜单下的设置将不会保留" }).show()
            }).on("click", ".jhead, .jtitle", function(e) {
                if (jLastSelect.is(this) || (jLastSelect.removeClass("selected"), jLastSelect = $(this).addClass("selected")), this === e.target) {
                    var t = $(this).closest(".jitem");
                    t.find(".jbody").children().length ? showRight("cant") : showRight(t.data(), function(e) { modified = !0, t.data(e) })
                }
            }), jlist1.sortable({ items: ">*", placeholder: "menum_item_placeholder", axis: "y", change: function() { modified = !0 }, forcePlaceholderSize: !0 }), jlist1.disableSelection(), jmenum.find(".jsubmit").click($.loadWrap(function() {
                try {
                    var e = ex(jlist1);
                    return Util.ajax("/service/save_custom_menu/", { data: JSON.stringify(e) }, function(e, t, i, n) { 0 === e ? (modified = !1, Stip.popupTip({ msg: n.reason || "将在24小时内审核生效", status: !0, callback: function() { location.reload() } })) : Stip.popupTip({ msg: t, status: !1 }) })
                } catch (t) {
                    return void Stip.popupTip({ msg: t.message })
                }
            }));
            $("#preview"), $("#preview_menus");
            jmenum.find(".jpreview").click(function() { document.location.href = "http://mp.toutiao.com" }), im(jlist1, pageData.data)
        })
    }
});;
define("pagelet/message/message.js", function(require, exports, module) {
    var popalert = require("pagelet/popalert/popalert.js"),
        LIST_TEMPLATE = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    __p += "\n	", item.content = _.escape(item.content), item.content = item.content.replace(/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?/g, function(t) {
                        var e = "";
                        return -1 !== t.indexOf("bjwhzf.gov.cn") && (e = ' ga="举报跳转"'), '<a class="message-link" target="_blank" href="' + t + '"' + e + ">" + t + "</a>"
                    }), __p += "\n\n	", -1 !== [2, 42, 43, 71, 72, 6, 84, 4, 5, 88, 89, 90].indexOf(item.type) && (__p += '\n	<div class="sys-notice-cell">\n		', 2 == item.type && (__p += '\n		<div class="sys-notice-bar user-bar">\n			<div class="sys-content">\n				<div class="sys-notice-user-avatar"><img class="sys-notice-img" src="', __p += item.user.avatar_url ? "" + (null == (__t = item.user.avatar_url) ? "" : _.escape(__t)) : "http://mat1.gtimg.com/www/mb/images/head_50.jpg", __p += '"></div>\n				<a class="sys-notice-user-name" href="//www.toutiao.com/c/user/' + (null == (__t = item.user.user_id) ? "" : _.escape(__t)) + '/" target="_blank">' + (null == (__t = item.user.screen_name) ? "" : _.escape(__t)) + '</a>\n				<span class="sys-notice-msg">' + (null == (__t = item.content) ? "" : __t) + '</span>\n			</div>\n			<span class="sys-notice-time">' + (null == (__t = item.create_time) ? "" : _.escape(__t)) + "</span>\n		</div>\n		"), __p += "\n		", -1 !== [42, 43, 71, 72, 84, 88, 89, 90].indexOf(item.type) && (__p += '\n		<div class="sys-notice-bar">\n			<div class="sys-content">\n				<i class="sys-notice-sysicon"></i>\n				<span class="sys-notice-msg">' + (null == (__t = item.content) ? "" : __t) + '</span>\n			</div>\n			<span class="sys-notice-time">' + (null == (__t = item.create_time) ? "" : _.escape(__t)) + "</span>\n		</div>\n		"), __p += "\n\n		", (4 == item.type || 6 == item.type) && (__p += '\n		<div class="sys-notice-bar user-bar">\n			<div class="sys-content">\n				<div class="sys-notice-user-avatar"><img class="sys-notice-img" src="', __p += item.user.avatar_url ? "" + (null == (__t = item.user.avatar_url) ? "" : _.escape(__t)) : "http://mat1.gtimg.com/www/mb/images/head_50.jpg", __p += '"></div>\n				<a class="sys-notice-user-name" href="//www.toutiao.com/c/user/' + (null == (__t = item.user.user_id) ? "" : _.escape(__t)) + '/" target="_blank">' + (null == (__t = item.user.screen_name) ? "" : _.escape(__t)) + "</a>\n				" + (null == (__t = item.content) ? "" : _.escape(__t)) + '\n				<a class="sys-msg-article-title" href="' + (null == (__t = item.group.url) ? "" : _.escape(__t)) + '" target="_blank">《' + (null == (__t = item.group.title) ? "" : _.escape(__t)) + '》</a>\n			</div>\n			<span class="sys-notice-time">' + (null == (__t = item.create_time) ? "" : _.escape(__t)) + "</span>\n		</div>\n		"), __p += "\n\n		", 5 == item.type && (__p += '\n		<div class="sys-notice-bar user-bar">\n			<div class="sys-content">\n				<div class="sys-notice-user-avatar"><img class="sys-notice-img" src="', __p += item.user.avatar_url ? "" + (null == (__t = item.user.avatar_url) ? "" : _.escape(__t)) : "http://mat1.gtimg.com/www/mb/images/head_50.jpg", __p += '"></div>\n				<a class="sys-notice-user-name" href="//www.toutiao.com/c/user/' + (null == (__t = item.user.user_id) ? "" : _.escape(__t)) + '/" target="_blank">' + (null == (__t = item.user.screen_name) ? "" : _.escape(__t)) + "</a>\n				" + (null == (__t = item.content) ? "" : _.escape(__t)) + '\n				<a class="sys-msg-article-title" href="' + (null == (__t = item.group.url) ? "" : _.escape(__t)) + '" target="_blank">《' + (null == (__t = item.group.title) ? "" : _.escape(__t)) + '》</a>\n			</div>\n			<span class="sys-notice-time">' + (null == (__t = item.create_time) ? "" : _.escape(__t)) + "</span>\n		</div>\n		"), __p += "\n\n	</div>\n	"), __p += "\n"
                }
                __p += "\n"
            }
            return __p
        },
        LOAD_HEIGHT = 700;
    module.exports = Pagelet.extend({
        el: "#pagelet-message",
        events: {},
        init: function(t) {
            var e = this;
            this.$win = $(window), this.$doc = $(document), this.spec = t, this.loading = !1, this.hasmore = !0, this.scrollTimer = "", this.count = t.count || 10, this.status = t.status || "inform", this.curType = "", this.max_cursor = t.max_cursor || 0, this.from_pgc = t.from_pgc || 1, this.$win.on("scroll", $.proxy(this.onWinScroll, this)), this.$dom.message_loadmore.show(), this.hashChange(), $(window).on("hashchange", $.proxy(this.hashChange, e))
        },
        render: function(t) { this.$dom.messageBox.append(LIST_TEMPLATE(t)) },
        getMessageList: function(t, e) {
            if (!this.loading) {
                this.curType !== t && (this.max_cursor = 0), this.curType = t, this.loading = !0;
                var s = { count: this.count, status: this.status, max_cursor: this.max_cursor, from_pgc: this.from_pgc };
                $.ajax({ url: "//www.toutiao.com/dongtai/notification/list/?include=" + t, type: "GET", dataType: "jsonp", context: this, data: s, success: function(t) { this.$dom.message_loadmore.hide(), this.loading = !1, t = t || {}, "success" === t.message && (this.hasmore = t.data.has_more, this.max_cursor = t.data.max_cursor, this.hasmore || this.$dom.message_nomore.show(), this.convertTimeFormat(t.data.data), this.render(t.data), "function" == typeof e && e()) }, error: function() { this.$dom.message_loadmore.hide(), this.loading = !1 } })
            }
        },
        convertTimeFormat: function(t) {
            for (var e = 0; e < t.length; e++) {
                var s = new Date(1e3 * t[e].create_time),
                    i = s.getFullYear(),
                    a = s.getMonth() + 1,
                    n = s.getDate(),
                    r = s.getHours(),
                    o = s.getMinutes();
                t[e].create_time = i + "-" + (a > 9 ? a : "0" + a) + "-" + (n > 9 ? n : "0" + n) + " " + (r > 9 ? r : "0" + r) + ":" + (o > 9 ? o : "0" + o)
            }
        },
        onWinScroll: function() {
            if (this.hasmore) {
                this.scrollTimer && clearTimeout(this.scrollTimer);
                var t = location.hash;
                if ("string" == typeof t && 0 != t.length) {
                    "#" == t.substr(0, 1) && (t = t.substr(1));
                    var e = this.convertStatusToType(t),
                        s = this;
                    this.scrollTimer = setTimeout(function() {
                        var t = s.$win.scrollTop(),
                            i = s.$doc.height(),
                            a = s.$win.height();
                        LOAD_HEIGHT > i - t - a && (s.$dom.message_loadmore.show(), s.getMessageList(e))
                    }, 50)
                }
            }
        },
        resetStatus: function(t) {
            if (this.loading) return void popalert("alert", "当前页面正在加载文章数据，请稍后");
            if ("string" == typeof t && "" != t) {
                $(".message-type-list").each(function(e, s) { $(s).attr("data-node") == "list_" + t ? $(s).addClass("selected") : $(s).removeClass("selected") }), this.hasmore = !0, this.status = t;
                var e = this.convertStatusToType(t);
                this.$dom.message_loadmore.show(), this.$dom.message_nomore.hide(), this.$dom.messageBox.html(""), this.getMessageList(e, function() { window.scrollTo(0, 0) })
            }
        },
        convertStatusToType: function(t) {
            var e, s = { inform: "6,72,84,88,89,90", subscribe: "2", collect: "4", retransmit: "5", discipline: "90" };
            return e = s[t]
        },
        hashChange: function() {
            var t = location.hash;
            if ("string" == typeof t && 0 != t.length) {
                "#" == t.substr(0, 1) && (t = t.substr(1));
                var e = { inform: "inform", subscribe: "subscribe", collect: "collect", retransmit: "retransmit", discipline: "discipline" };
                t in e && this.resetStatus(t), this.loading = !1
            }
        }
    })
});;
define("pagelet/mobile_register/mobile_register.js", function(e, i, t) {
    var r = e("pagelet/mobile_register/mobile_inherit.js");
    t.exports = Pagelet.extend(r)
});;
define("pagelet/privacy_validate/privacy_ajax.js", function(a) {
    var e, c = a("common/util/util.js"),
        l = a("pagelet/privacy_validate/privacy.js");
    return function(a) {
        e || (e = l.create({ $el: $("body") })), a = $.extend({ callback: $.noop, data: {} }, a);
        var t = a.callback;
        a.callback = function(l, i, n, o) { 9999 == l ? e.show({ mobile: o.mobile || "", callback: function(l, t) { e.hide(), $.extend(a.data, { activate_code: l, picture_code: t || "" }), c.ajax(a) } }) : t.apply(null, arguments) }, c.ajax(a)
    }
});;
define("pagelet/money/bankcard/bankcard.js", function(n) {
    var a = n("common/ui/tab.js"),
        e = n("common/vali/vali.js"),
        i = (n("common/util/util.js"), n("common/stip/stip.js")),
        t = n("pagelet/signform/field.js"),
        r = n("pagelet/privacy_validate/privacy_ajax.js");
    return function(n) {
        function o(a) { a.pay_type = n.pay_type, a.parseLocation = t.parseLocation, v.showbox_dl.html(g(a)) }
        var m = [],
            b = n.canModify;
        m = 1 == n.pay_type ? [
            ["input", { require: !0, label: "公司名称", name: "pay_name" }]
        ] : 1 == b ? [
            ["input", { require: !0, label: "姓名", name: "pay_name" }],
            ["identity_number", { require: !0, label: "身份证", name: "bank_identity_number" }]
        ] : [
            ["input", { require: !1, label: "姓名", name: "pay_name" }],
            ["identity_number", { require: !1, label: "身份证", name: "bank_identity_number" }]
        ], m = m.concat([
            ["input", {
                require: !0,
                label: "银行卡号",
                func: e.returnWrap(function(n) {
                    return e._int(n) && "请输入正确的银行卡号"
                }),
                name: "bank_card_no"
            }],
            ["input", { require: !0, label: "交易银行", name: "bank_name" }],
            ["location", { name: "bank_location" }],
            ["input", { require: !0, label: "开户支行", name: "bank_branch_name" }]
        ]);
        for (var u = t(m, n.form), l = {}, c = [], d = 0; d < n.bank_info.length; d++) {
            var p = n.bank_info[d];
            l[p[0]] = p[1], c.push(p[0])
        }
        if (1 === n.pay_type) {
            var s = _.findWhere(u, { name: "pay_name" });
            s.jvali.prop("disabled", !0)
        }
        var f = _.findWhere(u, { name: "bank_branch_name" }),
            y = f.jbox.find(".jhint").addClass("sred"),
            k = _.findWhere(u, { name: "bank_name" });
        k.jvali.autocomplete({ minLength: 0, source: c }).focus(function() { $(this).trigger("input") }).blur(function() { $(this).trigger("change") }).change(function() {
            var n = $.trim($(this).val()),
                a = l[n];
            y.text(a ? "若遗忘，可拨打" + n + "服务电话" + a + "查询" : "")
        });
        var v = $("#bankcard").nodes(),
            h = a(v.editbtn.add(v.form_cancel), v.showbox.add(v.editbox)),
            g = window.wheei(v.showbox_tpl.html());
        o(n.form);
        var j = e($($.map(u, function(n) {
            return n.jvali.toArray()
        })));
        v.form_btns_tr.before($($.map(u, function(n) {
            return n.jbox.toArray()
        }))), v.form_ok.click(function() {
            j(function(a, e, t) {
                return a ? void i.alert(a) : (t = $.so(t), $.extend(t, t.bank_location), delete t.bank_location, void r({
                    url: "/bank_info/",
                    data: t,
                    callback: function(a, e, r, m) {
                        return 0 != a ? void i.alert(e) : (t.status = m.bank_message, t.bank_location = t.province + "/" + (t.city || ""), t.bank_identity_number = t.bank_identity_number || n.form.bank_identity_number, o(t), h("show"), void i.alert("保存成功", !0))
                    }
                }))
            })
        }), h("show"), b || ($(".signform_input[name=bank_identity_number]").prop("disabled", !0), $(".signform_input[name=pay_name]").prop("disabled", !0))
    }
});;
define("pagelet/my_recommendation/my_recommendation.js", function(require, exports, module) {
    var TABLE = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var i = 0; i < item_data.length; i++) {
                    var item = item_data[i];
                    __p += '\n    <tr class="', i % 2 === 0 && (__p += "odd-tr "), __p += '">\n        <td class="my-recommendation-title"><a href="' + (null == (__t = item.group_url) ? "" : __t) + '" target="_blank">' + (null == (__t = item.title) ? "" : _.escape(__t)) + '</a></td>\n        <td class="my-recommendation-time">' + (null == (__t = item.reprint_time) ? "" : __t) + "</td>\n        <td>" + (null == (__t = item.reprint_impression) ? "" : __t) + "</td>\n        <td>" + (null == (__t = item.reprint_read_count) ? "" : __t) + "</td>\n        <td>" + (null == (__t = item.total_read_count) ? "" : __t) + '</td>\n        <td class="my-recommendation-detail j_toggle_detail"><a href="javascript:void(0)">详细</a><i class=\'j_icon down\' index="' + (null == (__t = i) ? "" : __t) + '"></i></td>\n    </tr>\n'
                }
                __p += "\n"
            }
            return __p
        },
        DETAIL = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="append-recommendation-detail">\n    <td class="j_append_detail append-detail" colspan="6">\n        <div class="recommendation-detail-container">\n            <div class="recommendation-word">\n                <h3>推荐语</h3>\n                <p id="recommendation-word">时代在变，环境在变，模式在变，不变的是人性！消费者遭遇</p>\n            </div>\n            <div class="display-recommendation" id=\'chart-funnel\'>\n                推荐展示量  推荐阅读量\n            </div>\n            <div class="from-my-recommendation" id="chart-bar">\n                来自我的推荐阅读量\n            </div>\n        </div>\n    </td>\n</tr>';
            return __p
        },
        stip = require("common/stip/stip.js"),
        pager = require("common/pager/pager.js"),
        url = (window.listener, "/media_stats/reprint/");
    module.exports = Pagelet.extend({
        el: "#my-recommendation",
        events: { "click .j_toggle_detail": "toggleDetail" },
        init: function() { this.cacheInit(), this.dataInit(), this.getRecommendationList(), this.inited = !1 },
        dataInit: function() { this.setting = [{ recommended_reason: "", reprint_impression: 0, reprint_read_count: 0, total_read_count: 0 }] },
        cacheInit: function() { this.$recommendationContent = this.$el.find(".my-recommendation-content"), this.echartBar, this.echartFunnel },
        getRecommendationList: function() {
            var t = this;
            pager({
                jele: $(".pager-recommendation"),
                cb: function(e, n) {
                    e -= 1;
                    var i = 20;
                    $.ajax({ type: "GET", url: url, dataType: "json", data: { page_no: e, count: i } }).done(function(e) {
                        if ("success" === e.message) {
                            if (!e.data) return;
                            var a = e.data,
                                r = {};
                            $.extend(!0, r, a), total_pages = Math.ceil(a.total_count / i), n({ length: total_pages }), t.setting = a.item_data, t.dataProcess(r.item_data), t.render(r), t.inited && window.scrollTo(window.scrollX, t.$el.offset().top), t.inited = !0
                        }
                    }).fail(function() { stip.popupTip({ msg: "出现错误，请重试", status: !1 }) })
                }
            })
        },
        dataProcess: function(t) {
            for (var e = 0, n = t.length; n > e; e++) t[e].reprint_time = this.convertTimeFormat(t[e].reprint_time), t[e].reprint_impression = this.convertNumFormat(t[e].reprint_impression), t[e].reprint_read_count = this.convertNumFormat(t[e].reprint_read_count), t[e].total_read_count = this.convertNumFormat(t[e].total_read_count)
        },
        convertNumFormat: function(t) {
            var e = t + "";
            return e.replace(/\d+?(?=(?:\d{3})+$)/gim, "$&,")
        },
        convertTimeFormat: function(t) {
            var e = new Date(1e3 * t);
            return t = e.format("yyyy/mm/dd")
        },
        render: function(t) {
            return 0 === t.length ? "" : void this.$recommendationContent.html(TABLE(t))
        },
        toggleDetail: function(t) {
            var e, n, i, a = $(t.target);
            if ("td" !== a[0].nodeName.toLocaleLowerCase() && (a = a.closest("td")), n = this.$el.find(".j_append_detail"), i = a.find(".j_icon"), e = n.closest("tr"), i.hasClass("down")) {
                if (n.length > 0) {
                    var r = n.parent().prev();
                    r.find(".j_toggle_detail a").text("详细"), r.find(".j_toggle_detail i").removeClass("up").addClass("down"), e.remove()
                }
                this.appendDetailDom(a), i.removeClass("down").addClass("up"), a.find("a").text("收起"), this.renderDetail(i.attr("index"))
            } else e = this.$el.find(".j_append_detail").closest("tr"), i.removeClass("up").addClass("down"), a.find("a").text("详细"), e.remove()
        },
        appendDetailDom: function(t) { t.closest("tr").after(DETAIL()) },
        renderDetail: function(t) { this._renderText(t), this._renderFunnel(t), this._renderBar(t) },
        _renderText: function(t) {
            var e = this.setting[t],
                n = this.$el.find("#recommendation-word");
            n.text(e.recommended_reason)
        },
        _renderBar: function(t) {
            var e = this.$el.find("#chart-bar"),
                n = this.setting[t],
                i = this._barDataExchange(n),
                a = { title: { text: "总阅读", subtext: "", y: "bottom", x: "center", textStyle: { fontSize: 14, color: "#595959" } }, color: ["#61B9F6", "#F85959"], tooltip: { trigger: "item", formatter: "{a} <br/>{b} :<br/> {c} ({d}%)" }, legend: { orient: "vertical", x: "right", data: ["来自我推荐的阅读量"] }, toolbox: { show: !1 }, series: [{ name: "访问来源", type: "pie", radius: ["50%", "70%"], itemStyle: { normal: { label: { show: !1 }, labelLine: { show: !1 } }, emphasis: { label: { show: !0, position: "center", textStyle: { fontSize: "14", fontWeight: "bold" } } } }, data: i }] };
            this.echartBar = echarts.init(e[0]), this.echartBar.setOption(a, !0)
        },
        _barDataExchange: function(t) {
            var e, n, i = [];
            return e = t.reprint_read_count, i.push({ value: e, name: "来自我推荐的阅读量" }), n = t.total_read_count, i.push({ value: n, name: "总阅读量" }), i
        },
        _renderFunnel: function(t) {
            var e = this.$el.find("#chart-funnel"),
                n = this.setting[t],
                i = this._funnelDataExchange(n),
                a = { tooltip: { trigger: "axis", axisPointer: { type: "shadow" } }, color: ["#48CCCE", "#FF9B43"], legend: { data: ["推荐展示量", "推荐阅读量"], right: "20px", itemWidth: 10, itemHeight: 10 }, grid: { show: !0, left: "10px", right: "10px", bottom: "10px", containLabel: !0 }, xAxis: { type: "value", show: !1, splitLine: { show: !1 }, axisTick: { show: !1 } }, yAxis: { type: "category", data: [""], show: !1, splitLine: { show: !1 }, axisTick: { show: !1 } }, series: i };
            this.echartFunnel = echarts.init(e[0]), this.echartFunnel.setOption(a, !0)
        },
        _funnelDataExchange: function(t) {
            var e = t.reprint_impression,
                n = t.reprint_read_count,
                i = [{ name: "推荐展示量", type: "bar", data: [e] }, { name: "推荐阅读量", type: "bar", data: [n] }];
            return i
        }
    })
});;
define("pagelet/origin_article_plagiarism/origin_article_plagiarism.js", function(t, i, e) {
    var n = (t("common/stip/stip.js"), window.listener),
        r = t("pagelet/rights/rights-status.js"),
        s = t("common/popup/dialog.js"),
        o = new s({ content: '签约「<span class="color-red">维权赔付</span>」功能后才能正常维权。', btns: [{ type: "ok", text: "一键授权", click: function() { o.hide(), n.trigger("kbanquan-sign", "show") } }, { type: "cancel", text: "我先看看", click: function() { o.hide() } }] });
    e.exports = Pagelet.extend({
        el: "#pagelet-origin_plagiarism",
        events: { "click $sign_now_article": "nowSignClick", "click .other-button": "reportOther" },
        init: function(t) { this.$reportOtherButton = this.$el.find(".other-button"), this.initEvents(), this.eventCenter(), this.$el.hoverTitle(), this.clickTab(t) },
        initEvents: function() { this.$el.on("click", ".list-tab", $.proxy(this.showArticleList, this)) },
        eventCenter: function() {
            var t = this;
            n.on("origin_article_plagiarism", "render", function(i, e) { t.$el.find(".list-tab")[e - 1].click() })
        },
        clickTab: function(t) {
            var i = [];
            i.push(t.inside_count, t.outside_count, t.author_count);
            for (var e = i[0], n = 1; n < i.length; n++) i[n] > e && (e = i[n]);
            this.$el.find(".list-tab").eq(i.indexOf(e)).click()
        },
        nowSignClick: function() { n.trigger("origin_manage_sign_modal_show", "showModal") },
        reportOther: function() {
            return r.isSignedBoth() ? void(this.$reportOtherButton.hasClass("disable") || n.trigger("origin_article_report_other", "show")) : void o.show()
        },
        showArticleList: function(t) {
            var i = $(t.currentTarget);
            i.hasClass("selected") || i.addClass("selected").siblings(".list-tab").removeClass("selected"), n.trigger("origin_article_table", "render", i.attr("data-tab"))
        }
    })
});;
define("pagelet/origin_article_report_other/origin_article_report_other.js", function(require, exports, module) {
    var Stip = require("common/stip/stip.js"),
        OTHER_TMPL = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "";
                for (var i = 0; i < obj.length; i++) __p += '\n    <option value="' + (null == (__t = obj[i][0]) ? "" : _.escape(__t)) + '">' + (null == (__t = obj[i][1]) ? "" : _.escape(__t)) + "</option>\n";
                __p += ""
            }
            return __p
        },
        eventCenter = window.listener;
    module.exports = Pagelet.extend({
        el: "#origin-article-report-other",
        events: { "change .platform-type": "renderName", "click .tip-title": "toggleTipBlock", "blur .article-url": "checkURL", "click .confirm": "submitURL", "click .report-mask": "hideModal", "click .cancel": "hideModal" },
        init: function(t) { this.$type = this.$el.find('select[name="platform-type"]'), this.$tipBlock = this.$el.find(".tip-block"), this.$name = this.$el.find('select[name="platform-name"]'), this.$url = this.$el.find(".article-url"), this.$urlTip = this.$el.find(".url-tip"), this.item_id = t.item_id, this.platformData = {}, this.checkTime = "", this.eventCenter(), t.has_sign_right_status && this.getPlatformData() },
        eventCenter: function() {
            var t = this;
            eventCenter.on("origin_article_report_other", "show", function() { t.showModal() }, t)
        },
        getPlatformData: function() {
            var t = this;
            $.ajax({ type: "GET", url: "/get_competing_platform/" }).done(function(e) { "success" === e.message ? (t.platformData = e.data, t.renderType()) : Stip.popupTip({ msg: "获取平台信息失败", status: !1 }) }).fail(function() { Stip.popupTip({ msg: "获取平台信息失败", status: !1 }) })
        },
        renderType: function() {
            var t = $(OTHER_TMPL(this.platformData.platform_type));
            this.$type.html(t), this.renderName()
        },
        renderName: function() {
            var t = this.$type.val(),
                e = $(OTHER_TMPL(this.platformData.competing_platform[t]));
            this.$name.html(e)
        },
        showModal: function() { this.clearData(), this.renderType(), this.$el.fadeIn() },
        toggleTipBlock: function() { this.$tipBlock.toggleClass("show") },
        checkURL: function() {
            for (var t = this.$type.val(), e = this.$name.val(), i = this.$url.val(), r = "", a = this.platformData.competing_platform[t], s = 0; s < a.length; s++)
                if (a[s][0] === e) {
                    r = a[s][2], this.checkTime = a[s][3];
                    break
                }
            var o = new RegExp(r).test(i);
            return o ? (this.$url.removeClass("error"), this.$urlTip.removeClass("show"), !0) : (this.$url.addClass("error"), this.$urlTip.addClass("show"), !1)
        },
        submitURL: function() {
            if (this.checkURL()) {
                var t = this,
                    e = { item_id: this.item_id, plagiarism_platform: this.$name.val(), plagiarism_url: this.$url.val() };
                $.ajax({ type: "POST", url: "/add_plagiarism_article/", data: e, dataType: "json" }).done(function(e) { "success" === e.message ? (eventCenter.trigger("origin_article_plagiarism", "render", "3"), t.hideModal(), Stip.popupTip({ msg: "预计将于" + t.checkTime + "内维权成功", status: !0 })) : Stip.popupTip({ msg: e.reason, status: !1 }) }).fail(function() { Stip.popupTip({ msg: "提交文章链接失败", status: !1 }) })
            }
        },
        clearData: function() { this.$tipBlock.removeClass("show"), this.$url.val(""), this.$url.removeClass("error"), this.$urlTip.removeClass("show") },
        hideModal: function() { this.$el.fadeOut() }
    })
});;
define("pagelet/origin_article_table/origin_article_table.js", function(require, exports, module) {
    var Stip = require("common/stip/stip.js"),
        util = require("common/util/util.js"),
        Dialog = require("common/popup/dialog.js"),
        pager = require("common/pager/pager.js"),
        rightsStatus = require("pagelet/rights/rights-status.js"),
        TABLE_TMPL = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) {
                __p += "<thead>\n    ", 3 != obj.type ? (__p += '\n        <tr>\n            <td class="name-td">帐号名</td>\n            <td class="platform-td">平台</td>\n            <td>标题</td>\n            <td class="plagiarism-td">是否抄袭</td>\n            ', __p += obj.kbanquanSigned && 2 == obj.type ? '\n                <td>删文状态</td>\n                <td><a href="/profile_introduction/right-process" target="_blank">赔付状态</a></td>\n            ' : '\n                <td class="rights-td">维权状态</td>\n            ', __p += '\n            <td class="doing-td">操作</td>\n        </tr>\n    ') : (__p += '\n        <tr>\n            <td class="platform-td">平台</td>\n            <td class="url-td">链接</td>\n            <td class="rights-td">删文状态</td>\n            ', obj.kbanquanSigned && (__p += '\n                <td><a href="/profile_introduction/right-process" target="_blank">赔付状态</a></td>\n            '), __p += "\n        </tr>\n    "), __p += '\n</thead>\n<tbody id="article_detail_list" class="' + (null == (__t = 3 == obj.type ? "article-report-list" : "") ? "" : _.escape(__t)) + '">\n    ';
                for (var i = 0; i < obj.plagiarism_article_stats_list.length; i++) {
                    var item = obj.plagiarism_article_stats_list[i];
                    __p += "\n        ", 3 != obj.type ? (__p += "\n            <tr>\n                <td>\n                    <span class='account-name' title='" + (null == (__t = item.plagiarism_account) ? "" : _.escape(__t)) + "'>" + (null == (__t = item.plagiarism_account) ? "" : _.escape(__t)) + "</span>\n                </td>\n                <td>" + (null == (__t = item.plagiarism_platform_desc) ? "" : _.escape(__t)) + '</td>\n                <td>\n                    <span class="title" title="' + (null == (__t = item.plagiarism_title) ? "" : _.escape(__t)) + '">\n                        <a href="' + (null == (__t = item.plagiarism_url) ? "" : _.escape(__t)) + '" target="_blank">' + (null == (__t = item.plagiarism_title) ? "" : _.escape(__t)) + "</a>\n                    </span>\n                </td>\n                <td>\n                    ", __p += 1 == item.plagiarism_status ? "\n                        疑似抄袭\n                    " : 2 == item.plagiarism_status ? "\n                        确认抄袭\n                    " : 3 == item.plagiarism_status ? "\n                        非抄袭\n                    " : 4 == item.plagiarism_status ? "\n                        确认抄袭\n                    " : "\n                        不抄袭\n                    ", __p += "\n                </td>\n                ", obj.kbanquanSigned && 2 == obj.type ? (__p += "\n                    <td>\n                        " + (null == (__t = obj.getDeleteLabel(item)) ? "" : _.escape(__t)) + "\n                    </td>\n                    <td>\n                        ", 3 == item.plagiarism_status ? __p += "\n                            已确认转载\n                        " : item.pay_status <= 1 ? __p += "\n                            待确认\n                        " : item.pay_status >= 2 && item.pay_status <= 4 || 11 == item.pay_status ? __p += '\n                            <span data-title="侵权主体所在发文平台拒绝提供侵权主体账号信息，故无法立案">无法获取赔付㊣</span>\n                        ' : 12 == item.pay_status || 20 == item.pay_status ? __p += "\n                            先行赔付成功\n                        " : 21 == item.pay_status || 31 == item.pay_status ? __p += '\n                            <span data-title="侵权平台或侵权主体不予配合">赔付失败㊣</span>\n                        ' : 22 == item.pay_status || 32 == item.pay_status ? __p += "\n                            赔付成功\n                        " : 30 == item.pay_status ? __p += "\n                            诉讼维权\n                        " : 10 == item.pay_status && (__p += "\n                            维权中\n                        "), __p += "\n                    </td>\n                ") : (__p += "\n                    <td>\n                        ", __p += 1 == item.rights_status ? "\n                            待维权\n                        " : 2 == item.rights_status ? "\n                            维权中\n                        " : 3 == item.rights_status ? "\n                            维权成功\n                        " : "\n                            维权失败\n                        ", __p += "\n                    </td>\n                "), __p += "\n                <td>\n                    ", 1 == obj.operateStatus && "toutiao" != item.plagiarism_platform ? (__p += "\n                        ", 1 == item.plagiarism_status || 5 == item.plagiarism_status ? (__p += "\n                            ", __p += "tiantiankuaibao" == item.plagiarism_platform && 1 == item.thousand_status ? " <!--是千人万元的原创作者并且抄袭的是天天快报平台-->\n                                <span class='plagiarism disable-text' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "'>确认抄袭</span>\n                                <span class='reprint disable-text' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "'>确认授权</span>\n                            " : "\n                                <span class='plagiarism td-text' data-node='plagiarism' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "'>确认抄袭</span>\n                                <span class='reprint td-text' data-node='reprint' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "'>确认授权</span>\n                            ", __p += "\n                        ") : (__p += "\n                            ", 2 == item.plagiarism_status ? __p += "\n                                「已确认抄袭」\n                            " : 3 == item.plagiarism_status ? __p += "\n                                「已授权转载」\n                            " : 4 == item.plagiarism_status && (__p += "\n                                ", __p += "tiantiankuaibao" == item.plagiarism_platform && 1 == item.thousand_status ? "\n                                    <span class='reprint disable-text' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "'>确认授权</span>\n                                " : "\n                                    <span class='reprint td-text' data-node='reprint' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "'>确认授权</span>\n                                ", __p += "\n                            "), __p += "\n                        "), __p += "\n                    ") : 1 == obj.operateStatus && "toutiao" == item.plagiarism_platform ? (__p += "\n                        ", __p += 3 == item.rights_status ? "\n                            「已删除」\n                        " : "\n                            <span class='delete td-text' data-node='delete' plagiarism-id='" + (null == (__t = item.plagiarism_id) ? "" : _.escape(__t)) + "' origin-item-id='" + (null == (__t = item.origin_item_id) ? "" : _.escape(__t)) + "' plagiarism-item-id='" + (null == (__t = item.plagiarism_item_id) ? "" : _.escape(__t)) + "'>举报删除</span>\n                        ", __p += "\n                    ") : 0 == obj.operateStatus && (__p += "\n                        ", __p += obj.isSignBoth ? "\n                            无法维权<i class=\"sign-hint-tip\" data-title='签约之前的原创文章无法进行维权'></i>\n                        " : "\n                            无法维权<i class=\"sign-hint-tip\" data-title='签约「维权赔付」功能后才能正常维权'></i>\n                        ", __p += "\n                    "), __p += "\n                </td>\n            </tr>\n        ") : (__p += "\n            <tr>\n                <td>" + (null == (__t = item.plagiarism_platform_desc) ? "" : _.escape(__t)) + '</td>\n                <td>\n                    <a href="' + (null == (__t = item.plagiarism_url) ? "" : _.escape(__t)) + '">' + (null == (__t = item.plagiarism_url.length > 60 ? item.plagiarism_url.slice(0, 60) + "..." : item.plagiarism_url) ? "" : _.escape(__t)) + "</a>\n                </td>\n                <td>\n                    " + (null == (__t = obj.getDeleteLabel(item)) ? "" : _.escape(__t)) + "\n                </td>\n                ", obj.kbanquanSigned && (__p += "\n                    <td>\n                        ", 3 == item.plagiarism_status ? __p += "\n                            已确认转载\n                        " : item.pay_status <= 1 ? __p += "\n                            待确认\n                        " : item.pay_status >= 2 && item.pay_status <= 4 || 11 == item.pay_status ? __p += '\n                            <span data-title="侵权主体所在发文平台拒绝提供侵权主体账号信息，故无法立案">无法获取赔付㊣</span>\n                        ' : 12 == item.pay_status || 20 == item.pay_status ? __p += "\n                            先行赔付成功\n                        " : 21 == item.pay_status || 31 == item.pay_status ? __p += '\n                            <span data-title="侵权平台或侵权主体不予配合">赔付失败㊣</span>\n                        ' : 22 == item.pay_status || 32 == item.pay_status ? __p += "\n                            赔付成功\n                        " : 30 == item.pay_status ? __p += "\n                            诉讼维权\n                        " : 10 == item.pay_status && (__p += "\n                            维权中\n                        "), __p += "\n                    </td>\n                "), __p += "\n            </tr>\n        "), __p += "\n    "
                }
                __p += "\n</tbody>\n\n"
            }
            return __p
        },
        eventCenter = window.listener,
        urlList = "/article/plagiarism_article_list/",
        urlPlagiarism = "/article/confirm_plagiarism_post/",
        urlTransfer = "/article/confirm_transfer_post/";
    module.exports = Pagelet.extend({
        el: "#plagiarism_list",
        events: { "click $plagiarism": "onConfirmPlagiarismClick", "click $reprint": "onConfirmReprintClick", "click $delete": "onConfirmDeleteClick" },
        init: function(t) { this.flag = t, this.$table = this.$el.find(".plagiarism_table"), this.$pager = this.$el.find(".pager-plagiarism"), this.eventCenter() },
        eventCenter: function() {
            var t = this;
            eventCenter.on("origin_article_table", "render", function(a, i) { t.httpRequest(i) })
        },
        httpRequest: function(t) {
            var a = this;
            pager({
                jele: this.$pager,
                cb: function(i, e) {
                    $.ajax({ type: "GET", url: urlList, dataType: "json", data: { item_id: a.flag.item_id, p_type: t, page_no: i - 1 } }).done(function(i) {
                        if ("success" === i.message) {
                            if (!i.data) return;
                            var s = i.data,
                                n = Math.ceil(s.total_count / s.count);
                            e({ length: n });
                            var _ = a.dataProcess(s, t);
                            a.$table.html(_)
                        }
                    }).fail(function() { Stip.popupTip({ msg: "出现错误，请重试", status: !1 }) })
                }
            })
        },
        dataProcess: function(t, a) {
            var i = [],
                e = 1e3 * this.flag.right_knight_sign_modify_time,
                s = 1e3 * this.flag.kbqSignedTime,
                n = new Date(this.flag.create_time.replace(/-/g, "/")).getTime();
            return t.isSignBoth = rightsStatus.isKbqSigned() && rightsStatus.isRkSigned(), t.operateStatus = t.isSignBoth && n > s && n > e ? 1 : 0, t.type = a, t.kbanquanSigned = 2 === rightsStatus.getSignStatus(), t.getDeleteLabel = this.getDeleteLabel, i = $(TABLE_TMPL(t)), i.hoverTitle2(), i
        },
        onConfirmPlagiarismClick: function(t) {
            var a = $(t.target),
                i = a.parent(),
                e = a.attr("plagiarism-id");
            $.ajax({ url: urlPlagiarism, type: "POST", dataType: "json", data: { plagiarism_id: e } }).done(function(t) {
                return "success" !== t.message.toLowerCase() ? void i.html("「已确认抄袭」") : void 0
            }).fail(function() { Stip.popupTip({ msg: "提交错误，请重试", status: !1 }) })
        },
        onConfirmReprintClick: function(t) {
            var a = $(t.target),
                i = a.parent(),
                e = a.attr("plagiarism-id");
            $.ajax({ url: urlTransfer, type: "POST", dataType: "json", data: { plagiarism_id: e } }).done(function(t) {
                return "success" !== t.message.toLowerCase() ? void i.html("「已授权转载」") : void 0
            }).fail(function() { Stip.popupTip({ msg: "提交错误，请重试", status: !1 }) })
        },
        onConfirmDeleteClick: function(t) {
            var a = $(t.target),
                i = a.parent(),
                e = a.attr("plagiarism-id"),
                s = a.attr("origin-item-id"),
                n = a.attr("plagiarism-item-id"),
                _ = new Dialog({
                    title: "提示",
                    content: "确定要删除抄袭文章吗？",
                    btns: [{
                        type: "ok",
                        click: $.loadWrap(function() {
                            return util.ajax("/article/delete_dup_article/", { plagiarism_id: e, origin_item_id: s, plagiarism_item_id: n }, function(t, a) { 0 != t && Stip.alert(a), i.html("「已删除」"), _.remove() })
                        })
                    }, "cancel"]
                });
            _.show()
        },
        getDeleteLabel: function(t) {
            var a;
            return 3 == t.plagiarism_status ? a = "已确认转载" : 1 == t.rights_status ? a = "待确认" : 3 == t.rights_status || 50 == t.rights_status ? a = "删文成功" : 4 == t.rights_status || 51 == t.rights_status ? a = "删文未果" : (1 == t.rights_status || 2 == t.rights_status || 10 == t.rights_status) && (a = "维权中"), a
        }
    })
});;
define("pagelet/origin_manage/origin_manage.js", function(i, t, e) {
    var s = (window.listener, window.comStorage);
    e.exports = Pagelet.extend({
        el: "#pagelet-origin",
        events: { "click .j_select_article_list": "onListClick", "click .j_select_white_list": "onListClick" },
        init: function(i) { this.articleList = this.$el.find(".j_article_list"), this.whiteList = this.$el.find(".j_white_list"), this.getFirstLocalVal(i), this.hasLookWhiteList() || this.$el.find(".j_select_white_list").addClass("red-tip") },
        onListClick: function(i) {
            var t = $(i.target);
            t.addClass("selected").siblings().removeClass("selected"), this.articleList.toggleClass("active", t.hasClass("j_select_article_list")), this.whiteList.toggleClass("active", t.hasClass("j_select_white_list")), this.whiteList.hasClass("active") && (s.set("originWhiteListFlag", "1"), this.$el.find(".j_select_white_list").removeClass("red-tip"))
        },
        hasLookWhiteList: function() {
            return "1" === s.get("originWhiteListFlag")
        },
        getFirstLocalVal: function(i) {
            var t = s.get("originManageFlag");
            "1" !== t && "0" === i.has_sign_right_status && ($("#origin_manage_sign_modal").modal("show"), s.set("originManageFlag", "1"))
        }
    })
});;
define("pagelet/origin_manage_add_white_list/origin_manage_add_white_list.js", function(t, e, i) {
    var n = "/add_plagiarism_white/",
        a = window.listener,
        o = t("common/popup/dialog.js"),
        h = t("common/stip/stip.js"),
        r = ["weixin", "toutiao", "yidianzixun", "tiantiankuaibao", "uc"];
    i.exports = Pagelet.extend({
        el: "#add_white_list",
        events: { "click .btn-ok": "btnOkClick", "click .btn-cancel": "btnCancelClick", "change #platform": "getPlatformVal", "keyup #white-list-hint": "wordNumCheck", "click .j_cancel": "onCancelClick" },
        init: function() { this.$platform = this.$el.find("#platform"), this.$idErronHint = this.$el.find("#id-error-id-hint"), this.$nameErronHint = this.$el.find("#id-error-name-hint"), this.$countName = this.$el.find("#countName"), this.$countId = this.$el.find("#countId"), this.$whiteListHint = this.$el.find("#white-list-hint"), this.$whiteListModal = this.$el.find("#add_white_list_modal"), this.$wordNumCheck = this.$el.find(".j-word-check"), this.platformVal = this.getPlatformVal(), this.eventCenter() },
        eventCenter: function() {
            var t = this;
            a.on("add_white_list_show", "showWhiteList", function(e, i) {
                var n = i.sign_status;
                switch (n) {
                    case "1":
                        var h = o({ btns: [{ type: "ok", click: function() { h.remove() } }], title: "提示", content: "签约中的头条号作者暂时无法使用白名单功能" }).show();
                        break;
                    case "2":
                        t.$whiteListModal.modal("show"), t.dataInit();
                        break;
                    case "0":
                    case "3":
                        var h = o({ btns: [{ type: "ok", text: "去签约", click: function() { a.trigger("origin_manage_sign_modal_show", "showModal"), h.remove() } }, "cancel"], title: "提示", content: "未签约成功的头条号作者无法使用白名单功能，请先进行签约" }).show()
                }
            })
        },
        dataInit: function() {
            var t = this;
            this.platformVal = "1", t.$platform.val("1"), t.clearInputValue(), t.hideElement(t.$idErronHint), t.hideElement(t.$nameErronHint), this.$countName.removeAttr("readonly").removeClass("selectPgc").attr("placeholder", "必须填写"), this.$countId.removeAttr("placeholder"), this.$wordNumCheck.hide()
        },
        showElement: function(t) { t.show() },
        hideElement: function(t) { t.hide() },
        getInputValue: function() {
            var t = $.trim(this.$platform.val());
            return { platform: r[t - 1], authorized_account: $.trim(this.$countName.val()), authorized_account_id: $.trim(this.$countId.val()), remarks: $.trim(this.$whiteListHint.val()) }
        },
        getPlatformVal: function() {
            var t = $.trim(this.$platform.val());
            return this.platformVal = t, this.clearInputValue(), this.clearErrorHint(), "2" === t ? (this.$countName.attr("readonly", "true").addClass("selectPgc").removeAttr("placeholder"), this.$countId.attr("placeholder", "只能填写数字"), this.$wordNumCheck.hide()) : (this.$countName.removeAttr("readonly").removeClass("selectPgc").attr("placeholder", "必须填写"), this.$countId.removeAttr("placeholder"), this.$wordNumCheck.hide()), t
        },
        clearErrorHint: function() { this.hideElement(this.$idErronHint), this.hideElement(this.$nameErronHint) },
        clearInputValue: function() { this.$countName.val(""), this.$countId.val(""), this.$whiteListHint.val("") },
        pgcCheck: function() {
            var t = this.getInputValue();
            return this.$idErronHint.toggle(!this.countIdCheck()), "toutiao" === t.platform && 0 !== t.authorized_account_id.length ? !0 : !1
        },
        weChatCheck: function() {
            var t = this,
                e = t.getInputValue();
            return t.$nameErronHint.toggle(!e.authorized_account), "toutiao" !== e.platform && 0 !== e.authorized_account.length ? !0 : !1
        },
        countIdCheck: function() {
            var t = this.$countId.val(),
                e = /^\d+$/;
            return e.test(t)
        },
        countNameCheck: function(t) {
            return 0 == t.length ? !1 : !0
        },
        inputCheck: function() {
            return "2" === this.platformVal ? this.pgcCheck() && this.countIdCheck() : this.weChatCheck()
        },
        wordNumCheck: function(t) {
            var e = this.$wordNumCheck;
            e.show();
            var i = $(t.target);
            i.val().length >= 50 ? e.addClass("red") : e.removeClass("red"), e.html(i.val().length + "/50")
        },
        btnCancelClick: function() { this.$whiteListModal.modal("hide"), this.$wordNumCheck.hide() },
        addMsgToList: function(t) {
            var e = this.getInputValue();
            e.curTime = (new Date).getTime(), e.whiteId = t, a.trigger("add_white_list_success", "addData", e)
        },
        btnOkClick: function() {
            var t = this;
            if (t.inputCheck()) {
                var e = this.getInputValue();
                $.ajax({ url: n, type: "POST", dataType: "json", data: e }).done(function(e) { "success" === e.message && (t.$whiteListModal.modal("hide"), t.addMsgToList(e.white_id)) }).fail(function() { h.popupTip({ msg: "提交错误，请重试", status: !1 }) })
            }
        },
        onCancelClick: function() { this.$el.find(".spopup_fixed").hide() }
    })
});;
define("pagelet/origin_manage_articles_num/origin_manage_articles_num.js", function(e, i, n) {
    window.listener;
    n.exports = Pagelet.extend({ el: "#origin_manage_article_num", events: {}, init: function(e) { this.$el = $(this.el), this.signFlag = e.has_sign_right_status } })
});;
define("pagelet/origin_manage_articles_table/origin_manage_articles_table.js", function(require, exports, module) {
    {
        var originArticleTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "<tr>\n	<td>" + (null == (__t = create_time) ? "" : _.escape(__t)) + '</td>\n	<td><span class="title" title="' + (null == (__t = title) ? "" : _.escape(__t)) + '">' + (null == (__t = title) ? "" : _.escape(__t)) + "</span></td>\n	<td>" + (null == (__t = suspect_plagiarism_count) ? "" : _.escape(__t)) + "</td>\n	<td>" + (null == (__t = confirm_plagiarism_count) ? "" : _.escape(__t)) + "</td>\n	<td>" + (null == (__t = succ_right_count) ? "" : _.escape(__t)) + '</td>\n	<td><a href="/article/item_plagiarism_stats/?item_id=' + (null == (__t = item_id) ? "" : _.escape(__t)) + "\" tid='" + (null == (__t = item_id) ? "" : _.escape(__t)) + "' target=\"_blank\" data-node='article_detail'>详情</a></td>\n</tr>\n\n";
            return __p
        };
        window.listener
    }
    url_list = "/origin_article_list/", pager = require("common/pager/pager.js"), stip = require("common/stip/stip.js"), module.exports = Pagelet.extend({
        el: "#origin_article",
        events: {},
        init: function() { this.httpRequest() },
        httpRequest: function() {
            var t = this;
            pager({
                jele: $(".pager-articles"),
                cb: function(e, a) {
                    e -= 1;
                    var i = 20;
                    $.ajax({ type: "GET", url: url_list, dataType: "json", data: { page_no: e, count: i } }).done(function(e) {
                        if ("success" === e.message) {
                            if (!e.data) return;
                            var _ = e.data;
                            total_pages = Math.ceil(_.total_count / i), a({ length: total_pages });
                            var r = $("#article_list");
                            origin_article_stats_list = _.origin_article_stats_list;
                            var n = t.dataProcess(origin_article_stats_list);
                            r.html(n)
                        }
                    }).fail(function() { stip.popupTip({ msg: "出现错误，请重试", status: !1 }) })
                }
            })
        },
        dataProcess: function(t) {
            if (0 === t.length) return "";
            for (var e, a, i = [], _ = 0; _ < t.length; _++) e = t[_], e.create_time = this.convertTimeFormat(e.create_time), a = $(originArticleTemplate(e)), i.push(a);
            return i
        },
        convertTimeFormat: function(t) {
            var e = new Date(1e3 * t),
                a = e.getFullYear(),
                i = e.getMonth() + 1,
                _ = e.getDate();
            return t = a + "/" + (i > 9 ? i : "0" + i) + "/" + (_ > 9 ? _ : "0" + _)
        }
    })
});;
define("pagelet/origin_manage_sign/origin_manage_sign.js", function(i, e, t) {
    var n = window.listener,
        r = i("common/util/util.js"),
        a = i("common/popup/dialog.js"),
        o = i("common/stip/stip.js"),
        s = "/rights/sign_up/";
    t.exports = Pagelet.extend({
        el: "#origin_manage_sign_modal",
        events: { "click $btn-exit": "btnExitClick", "click $btn-submit": "btnSubmitClick", "click .front-upload": "uploadFrontImage", "click .reverse-upload": "uploadReverseImage" },
        init: function() { this.id_card_front_img_url = "", this.id_card_behind_img_url = "", this.file_front_name = "", this.file_reverse_name = "", this.upload_front = this.uploadFrontPicture(), this.upload_reverse = this.uploadReversePicture(), this.$name = this.$el.find(".name"), this.$nameErrorHint = this.$el.find("#name-hint"), this.$frontPicErrorHint = this.$el.find("#front-pic-hint"), this.$reversePicErrorHint = this.$el.find("#reverse-pic-hint"), this.eventCenter() },
        eventCenter: function() {
            var i = this;
            n.on("origin_manage_sign_modal_show", "showModal", function(e, t) { i.signType = t, i.$el.modal("show") })
        },
        uploadFrontImage: function() {
            var i = this;
            i.upload_front.input.trigger("click")
        },
        uploadReverseImage: function() {
            var i = this;
            i.upload_reverse.input.trigger("click")
        },
        uploadFrontPicture: function() {
            var i = this,
                e = new Uploader({
                    container: i.$el.find(".j-upload-image-f"),
                    trigger: i.$el.find(".j-upload-image-f"),
                    name: "upfile",
                    action: "/tools/upload_picture/",
                    accept: "image/jpg,image/jpeg,image/png",
                    change: function(e) { i.file_front_name = e[0].name, r.loadingShow(), this.submit() },
                    error: function() { r.loadingHide(), alert("上传失败") },
                    success: function(e) {
                        r.loadingHide();
                        try { "string" == typeof e && (e = JSON.parse(e)), "success" === e.state.toString().toLowerCase() ? (i.id_card_front_img_url = e.url, $("#front_file_name").text(i.file_front_name).prev().hide()) : alert("上传失败") } catch (t) { alert("上传失败") }
                    }
                });
            return e
        },
        uploadReversePicture: function() {
            var i = this,
                e = new Uploader({
                    container: i.$el.find(".j-upload-image-r"),
                    trigger: i.$el.find(".j-upload-image-r"),
                    name: "upfile",
                    action: "/tools/upload_picture/",
                    accept: "image/jpg,image/jpeg,image/png",
                    change: function(e) { i.file_reverse_name = e[0].name, r.loadingShow(), this.submit() },
                    error: function() { r.loadingHide(), alert("上传失败") },
                    success: function(e) {
                        r.loadingHide();
                        try { "string" == typeof e && (e = JSON.parse(e)), "success" === e.state.toString().toLowerCase() ? (i.id_card_behind_img_url = e.url, $("#reverse_file_name").text(i.file_reverse_name).prev().hide()) : alert("上传失败") } catch (t) { alert("上传失败") }
                    }
                });
            return e
        },
        getInputValue: function() {
            return { author_name: $.trim(this.$name.val()), id_card_front_img_url: this.id_card_front_img_url, id_card_behind_img_url: this.id_card_behind_img_url }
        },
        showElement: function(i) { i.show() },
        hideElement: function(i) { i.hide() },
        errorHint: function() {
            var i = $.trim(this.$name.val());
            this.$nameErrorHint.toggle(!i), this.$frontPicErrorHint.toggle(!this.id_card_front_img_url), this.$reversePicErrorHint.toggle(!this.id_card_behind_img_url)
        },
        inputCheck: function() {
            return $.trim(this.$name.val()) && this.id_card_front_img_url && this.id_card_behind_img_url ? !0 : !1
        },
        clearAllValue: function() { this.$name.val(""), this.id_card_front_img_url = "", this.id_card_behind_img_url = "", this.hideElement(this.$nameErrorHint), this.hideElement(this.$frontPicErrorHint), this.hideElement(this.$reversePicErrorHint), $("#front_file_name").text("").hide().prev().show(), $("#reverse_file_name").text("").hide().prev().show() },
        btnExitClick: function() {
            var i = this;
            i.$el.modal("hide"), i.$el.find(".error-hint").removeClass("active-hint"), i.clearAllValue()
        },
        btnSubmitClick: function() {
            var i = this;
            if (this.errorHint(), i.inputCheck()) {
                var e = i.getInputValue();
                $.ajax({ url: s, type: "POST", dataType: "json", data: e }).done(function(e) {
                    if ("success" !== e.message) return void i.$el.find(".error-hint").addClass("active-hint");
                    n.trigger("origin_manage_sign_modal", "success", i.signType);
                    var t = a({ btns: [{ type: "ok", click: function() { t.remove() } }], title: "提示", content: "您已提交签约信息，我们将在24小时内完成签约。" }).show();
                    i.$el.modal("hide"), i.$el.find(".error-hint").removeClass("active-hint")
                }).fail(function() { o.popupTip({ msg: "提交错误，请重试", status: !1 }) })
            }
        }
    })
});;
define("pagelet/origin_manage_white_list/origin_manage_white_list.js", function(require, exports, module) {
    var eventCenter = window.listener,
        url_list = "/plagiarism_white_list/",
        url_delete = "/delete_plagiarism_white/",
        white_list_template = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "<tr>\n	<td>" + (null == (__t = account_type) ? "" : _.escape(__t)) + "</td>\n	<td>" + (null == (__t = authorized_account) ? "" : _.escape(__t)) + "</td>\n	<td>" + (null == (__t = authorized_account_id) ? "" : _.escape(__t)) + "</td>\n	<td>" + (null == (__t = create_time) ? "" : _.escape(__t)) + '</td>\n	<td><a href="javascript:void(0);" whiteId=\'' + (null == (__t = white_id) ? "" : _.escape(__t)) + "' data-node='del_white_id'>删除</a></td>\n</tr>\n\n";
            return __p
        },
        pager = require("common/pager/pager.js"),
        stip = require("common/stip/stip.js"),
        valueToText = { weixin: "微信", toutiao: "头条号", yidianzixun: "一点资讯", tiantiankuaibao: "天天快报", uc: "UC" };
    module.exports = Pagelet.extend({
        el: "#white_list",
        events: { "click $add_white_list": "addWhiteListClick", "click $del_white_id": "deleteWhiteListClick" },
        init: function(t) { this.$el = $(this.el), this.sign_status = t.has_sign_right_status, this.httpRequest(), this.eventCenter() },
        eventCenter: function() {
            var t = this;
            eventCenter.on("add_white_list_success", "addData", function(e, i) {
                i.platform = valueToText[i.platform];
                var a = "<tr><td>" + i.platform + "</td><td>" + i.authorized_account + "</td><td>" + i.authorized_account_id + "</td><td>" + t.convertTimeFormat(i.curTime) + '</td><td><a href="javascript:void(0);" whiteId=' + i.whiteId + ' data-node="del_white_id">删除</a></td></tr>';
                t.$el.find("#white_list_content").append(a)
            })
        },
        httpRequest: function() {
            var t = this;
            pager({
                jele: $(".pager-white"),
                cb: function(e, i) {
                    e -= 1;
                    var a = 20;
                    $.ajax({ type: "GET", url: url_list, dataType: "json", data: { page_no: e, count: a } }).done(function(e) {
                        if ("success" === e.message) {
                            if (!e.data) return;
                            var n = e.data,
                                s = Math.ceil(n.total_count / a);
                            i({ length: s });
                            var _ = $("#white_list_content"),
                                r = n.plagiarism_white_list,
                                o = t.dataProcess(r);
                            _.html(o)
                        }
                    }).fail(function() { stip.popupTip({ msg: "出现错误，请重试", status: !1 }) })
                }
            })
        },
        dataProcess: function(t) {
            var e, i, a = [];
            if (0 === t.length) return "";
            for (var n = 0; n < t.length; n++) e = t[n], e.account_type = valueToText[e.account_type], 0 === e.authorized_account_id && (e.authorized_account_id = ""), e.create_time = this.convertTimeFormat(1e3 * e.create_time), i = $(white_list_template(e)), a.push(i);
            return a
        },
        convertTimeFormat: function(t) {
            var e = new Date(t),
                i = e.getFullYear(),
                a = e.getMonth() + 1,
                n = e.getDate();
            return t = i + "/" + (a > 9 ? a : "0" + a) + "/" + (n > 9 ? n : "0" + n)
        },
        deleteWhiteListClick: function(t) {
            var e = $(t.target),
                i = e.attr("whiteId"),
                a = { white_id: i };
            $.ajax({ url: url_delete, type: "POST", dataType: "json", data: a, success: function(t) { "success" !== t.message }, error: function() { stip.popupTip({ msg: "出现错误，请重试", status: !1 }) } }), this.updataData(e)
        },
        updataData: function(t) { t.text("已删除"), t.addClass("delete_style") },
        addWhiteListClick: function() {
            var t = { sign_status: this.sign_status };
            eventCenter.trigger("add_white_list_show", "showWhiteList", t)
        },
        nowSignClick: function() { eventCenter.trigger("origin_manage_sign_modal_show", "showModal") }
    })
});;
define("pagelet/original_tag/original_apply.js", function(t, i, s) {
    var e = t("common/stip/stip.js");
    s.exports = Pagelet.extend({
        el: ".origin-tag-wrap",
        events: { "click .j_debut_submit": "debutSubmit", "click .debut-notify-dialog .ok": function() { location.href = "/profile_v2/account-status" } },
        init: function(t) {
            this.spec = t;
            var i = this.spec.status;
            this.checkStatus() && (this.formDisabled(), this.showDialog(), this.$el.find(".j-debut-message").text(this.getMessage(i)))
        },
        checkStatus: function() {
            var t = this.spec.status;
            return 1 == t || 2 == t || 4 == t || 5 == t || 6 == t || 7 == t ? !0 : !1
        },
        getMessage: function(t) {
            return 1 == t ? "等待审核" : 2 == t ? "您已经获得原创标签权限" : 4 == t ? "正在审核中" : 5 == t ? "只支持个人、媒体类型头条号申请原创标签" : 6 == t ? "该原创邀请链接已经被使用过" : 7 == t ? "邀请码不存在" : void 0
        },
        formDisabled: function() { this.$el.find(".debut-form-body").find("input").attr("disabled", "disabled"), this.$el.find(".j_debut_submit").addClass("disabled") },
        showDialog: function() { this.$el.find(".debut-notify-dialog").modal({ show: !0, backdrop: "static" }) },
        debutSubmit: function() {
            var t = this,
                i = {},
                s = !0;
            return this.checkStatus() ? !1 : (this.$el.find(".debut-form-body").find("input").each(function() { $.trim($(this).val()) && (s = !1), i[$(this).data("name")] = $(this).val() }), i.other && i.other.replace(/\u003b|\uff1b/g, ";"), s ? (e.popupTip({ msg: "请至少填写一项" }), !1) : (i.invite_code = t.spec.invite_code, void $.post("/apply_claim_origin_post/", i).always(function(t) { t.message && t.reason || (t.reason = "请求失败，请稍后重试"), e.popupTip("success" === t.message ? { msg: t.reason, status: !0, callback: function() { location.href = "/profile_v2/account-status" } } : { msg: t.reason }) })))
        }
    })
});;
define("pagelet/password/password.js", function(o) {
    return function(s) {
        var a = o("common/util/util.js"),
            t = o("common/stip/stip.js"),
            i = o("common/vali/vali.js"),
            e = o("pagelet/signform/field.js"),
            n = $("#pagelet_password").nodes(),
            p = e.getEle("password2", { name: "password" });
        n.start.after(p.jbox);
        var c = i(p.jvali);
        n.submit.click($.loadDone(function(o) { c(function(i, e, n) { i ? (o(), $("body").animate({ scrollTop: e.offset().top - 10 }, 200, function() { e.focus() })) : (n = $.so(n), n.verify_code = s.verify_code, n.email = s.email, a.ajax("/reset_password_post/", n, function(s, a) { o(), t.popupTip(0 === s ? { status: !0, msg: a, callback: function() { window.location = "/" } } : { status: !1, msg: a }) })) }) })), n.resend.click($.loadWrap(function() {
            return a.ajax("/forget_password/", { email: s.email }, function(o, s) { t.popupTip({ status: 0 === o, msg: s }) })
        }))
    }
});;
define("pagelet/preview/preview_content/preview_content.js", function(e, t, n) { n.exports = Pagelet.extend({ el: "#preview-content", events: {}, init: function() { uParse(".article-content", {}) } }) });;
define("pagelet/pureVideo/articlevideoposter.js", function(require, exports, module) {
    function VideoPoster(t, e, s) {
        this.$el = $(t), this.vid = "", this.disableSystem = s || !1, this.options = e, this.posters = [], this.items = {};
        var i = this;
        this.$el.on("click", ".modify-poster", function() {
            var t = $(this),
                e = t.data("index");
            i.showUploader(e)
        }), this.uploaderInstance = instance
    }
    var instance = require("common/videoposter/videoposter.js")(),
        DEFAULT_POSTER = "http://p1.pstatp.com/large/9777/4010962160",
        T_POSTER_ITEM = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="video-poster-wrap">\n    <img class="video-poster" src="' + (null == (__t = thumbUrl) ? "" : __t) + '">\n    <button type="button" data-index="' + (null == (__t = index) ? "" : __t) + '"class="new-btn modify-poster" ga="2视频封面-纯视频">设置视频封面</button>\n</div>\n', hint && (__p += '<div style="margin-top: 20px">视频封面对推荐影响较大，建议额外设置一张封面。</div>'), __p += "\n";
            return __p
        },
        imageToUrl = function(t, e) {
            return e = e || "large", "//p3.pstatp.com/" + e + "/" + t
        };
    VideoPoster.prototype = {
        defaultPosterInfo: { thumbUrl: DEFAULT_POSTER },
        setVid: function(t) { this.vid && this.vid !== t && this.resetPosters(), this.vid = t },
        resetPosters: function() {
            for (var t = 0, e = this.posters.length; e > t; t++) this.setVideoPoster(t, { thumbUrl: DEFAULT_POSTER, thumbUri: "" })
        },
        setVideoPoster: function(t, e) {
            e.thumbUri && !e.thumbUrl && (e.thumbUrl = imageToUrl(e.thumbUri));
            var s = this.posters[t];
            $.extend(s, e), s.$el.find(".video-poster").attr("src", s.thumbUrl)
        },
        showUploader: function(t) {
            if (!this.vid) return this;
            t = t || 0;
            var e, s;
            (e = this.posters[t]) && (s = e.itemId);
            var i = this;
            instance.show({ id: this.vid, itemId: s, type: 2, source: "纯视频", success: function(e, s, r, o, n) { i.setVideoPoster(t, { itemId: o, thumbUrl: s, thumbUri: r, srcThumbUri: n }) } }, i.disableSystem)
        },
        validate: function(t) {
            if (!this.posters.length) return t || "请设置视频封面";
            var e = this.posters[0];
            return e && e.thumbUrl === DEFAULT_POSTER ? t || "请设置视频封面" : void 0
        },
        addPoster: function(t) {
            if (this.posters.length > 1) return this;
            t.thumbUri && !t.thumbUrl && (t.thumbUrl = imageToUrl(t.thumbUri));
            var e = $.extend({}, t);
            e.thumbUrl || (e.thumbUrl = DEFAULT_POSTER), e.index = this.posters.length, e.hint = this.options.hint || !1, e.$el = $(T_POSTER_ITEM(e)), this.$el.append(e.$el), this.posters.push(e)
        },
        changeSystem: function(t) { this.disableSystem = t },
        removePoster: function(t) { this.posters[t].$el.remove(), this.posters.splice(t, 1) },
        getPosterInfo: function() {
            var t = {},
                e = this.posters[0];
            return t.vposter = e.thumbUrl, t.pgc_id = e.itemId, t.thumb_url = e.thumbUri, t.src_thumb_uri = e.srcThumbUri, t
        }
    }, module.exports = VideoPoster
});;
define("pagelet/pureVideo/abtest.js", function(require, exports, module) {
    function Abtest(t, i, e) {
        var s = this,
            a = !1;
        if (this.doubleTitleData = { multi_type: 0, slave_item_id: "", slave_title: "", slave_thumb_uri: "", source: 1 }, this.options = i || {}, this.options.slave_items && this.options.slave_items.length > 0 && (this.options.slave_items = JSON.parse(this.options.slave_items)), this.options.slave_items && this.options.slave_items instanceof Array && this.options.slave_items.length > 0)
            for (var l = 0, o = this.options.slave_items.length; o > l; l++) 1 == this.options.slave_items[l].source && (this.doubleTitleData = { multi_type: 3, slave_item_id: this.options.slave_items[l].item_id, slave_thumb_uri: this.options.slave_items[l].thumb_uri || "", slave_title: this.options.slave_items[l].title || this.options.title, source: 1 }, a = !0);
        !this.options.has_slave_item && !this.options.multi_type || a || (this.doubleTitleData = { multi_type: this.options.multi_type, slave_item_id: this.options.slave_item_id, slave_title: this.options.slave_title, slave_thumb_uri: this.options.slave_thumb_uri, source: 1 }), eventCenter.trigger("has-assistant", "show-article-assistant", { claim_origin_permission: i.claim_origin_permission, abtest_permission: i.abtest_permission, type: 2, origin: i.claim_origin, abtest: !!s.doubleTitleData.slave_item_id.length, pgc_id: i.pgc_id, is_draft: i.is_draft }), this.vposter = e, this.$el = $(t).html(T_ABTEST({})), this.$abtestRadio = this.$el.find(".j_abtest_radio"), this.$abtestRadio.on("click", function(t, i) {
            var e = $(this);
            e.is(".disabled") || s.multiTypeChange(i ? 3 : e.hasClass("selected") ? 0 : 3)
        }), eventCenter.on("assistant-change", "trigger-abtest", function() { s.$abtestRadio.trigger("click", !0), window.scrollTo(window.scrollX, s.$abtestRadio.offset().top) }), this.slaveVideoPoster = new VideoPoster($("#abtest-container"), { hint: !0 }), this.options.vid && this.slaveVideoPoster.setVid(this.options.vid), !this.doubleTitleData.multi_type && this.doubleTitleData.slave_item_id && "0" !== this.doubleTitleData.slave_item_id && (this.options.multi_type = 3, this.doubleTitleData.multi_type = 3), this.multiTypeChange(this.doubleTitleData.multi_type), this.changeable() || this.$abtestRadio.addClass("disabled")
    }
    var T_ABTEST = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="edit-main front-cover">\n    <label class="edit-label" style="line-height: normal">双标题/双封面</label>\n    <div class="edit-input" id="slave-container">\n        <div class="subrow" ga="推荐实验">\n                <i class="gg-radio j_abtest_radio"></i>额外配置“标题+封面”的组合\n                <i class="gg-timer-tip j_timer_tip" data-title="系统将以一组标题和封面，额外发表一篇文章，不占用发文篇数。"></i>\n        </div>\n        <div class="abtest-container j_abtest_container" id="abtest-container">\n            <input maxlength="50" class="subtitle_abtest_input j-subtitle_abtest_input" type="text" placeholder="5-50个字">\n        </div>\n    </div>\n</div>\n';
            return __p
        },
        VideoPoster = require("pagelet/pureVideo/articlevideoposter.js"),
        eventCenter = window.listener;
    Abtest.prototype = {
        changeable: function() {
            var t = this.options;
            return !t.pgc_id || t.pgc_id && t.is_draft
        },
        multiTypeChange: function(t) { 3 === this.multiType && (this.$el.find(".j_abtest_container").hide(), this.slaveVideoPoster.removePoster(0)), 3 === t ? (this.$abtestRadio.addClass("selected"), this.$el.find(".j_abtest_container").show(), this.$el.find(".j-subtitle_abtest_input").val(this.doubleTitleData.slave_title), this.vposter.changeSystem(!0), this.slaveVideoPoster.changeSystem(!0), this.slaveVideoPoster.addPoster({ itemId: this.doubleTitleData.slave_item_id, thumbUri: this.doubleTitleData.slave_thumb_uri })) : 0 === t && (this.$abtestRadio.removeClass("selected"), this.vposter.changeSystem(!1)), eventCenter.trigger("assistant-change", "abtest-change", { abtest: this.$abtestRadio.hasClass("selected") }), this.multiType = t },
        validate: function() {
            if (3 === this.multiType) {
                var t = this.$el.find(".j-subtitle_abtest_input").val(),
                    i = this.slaveVideoPoster.validate("请设置副标题封面");
                if (!t) return "请填写副标题";
                if (t.length < 5 || t.length > 50) return "副标题长度应该在5-50个字之间";
                if (i) return i
            }
        },
        getSlaveInfo: function() {
            var t = {};
            return this.multiType ? (t.type = this.multiType, 3 === this.multiType && (t.title = $.trim(this.$el.find(".j-subtitle_abtest_input").val())), "" === this.options.pgc_id ? (t.item_id = "", t.source = 1) : (t.item_id = this.doubleTitleData.slave_item_id ? this.doubleTitleData.slave_item_id : "", t.source = this.doubleTitleData.source ? this.doubleTitleData.source : 1), t.item_id || (t.item_id = this.slaveVideoPoster.getPosterInfo().pgc_id), t.thumb_uri = this.slaveVideoPoster.getPosterInfo().thumb_url, 3 == this.multiType ? [t] : []) : []
        }
    }, module.exports = Abtest
});;
define("pagelet/pureVideo/video-v2.js", function(e, i, d) {
    function o(e, i, d, o) {
        var a = "{}";
        return $.ajax({ type: o || "POST", async: i, url: "/video/video_api/", data: { json_data: JSON.stringify(e) }, dataType: "json" }).done(function(e) { "success" == e.message ? a = e.data : !d && r("alert", "服务异常：" + e.reason + " 请稍后重试") }).fail(function() { S().log("抱歉，服务异常，请稍后再试", $.getNginxLogId(arguments)), !d && r("alert", "抱歉，服务异常，请稍后再试") }), a
    }

    function a(e, i) {
        if (e > 0) {
            i > e && (i = e);
            var d = (i / e * 100).toFixed(2),
                o = (e / n).toFixed(2) + "MB",
                a = (i / n).toFixed(2) + "MB",
                t = h.data("loaded") || 0;
            i > t && (h.data("loaded", i).text(a + "/" + o), g.get(0).style.width = d + "%")
        }
    }

    function t() { l && (l.abort(), l = null), f.addClass("hide"), p.removeClass("hide").addClass("video-reupload"), g.css("width", "0%"), h.data("loaded", 0), u.trigger("purevideo", "cancel") }

    function s(e) {
        if (!window.__VIDEOINIT) {
            window.__VIDEOINIT = !0, v = e;
            var i = v.submit_video.vid;
            i && (T.removeClass("hide"), p.addClass("hide"), m.removeClass("hide"), $.extend(I, v.submit_video), y.text(I.vname), setTimeout(function() { l = { ref_id: I.vid, _data: {}, abortCheckStatus: function() { clearTimeout(this._data.checkTimeout) } }, $("#video_file").trigger("videouploadsuccess", {}, l) }, 15)), b.on("click", function() { r("confirm", "确认取消上传？", t) }), v.pgc_id && v.after_pass_modify && $("#retry_video_file, .video-feedback-retry").remove(), $("#retry_video_file").click(function(e) {
                var i = I.status;
                ("success" == i || "transcoding" == i) && (window.confirm("重新上传时，当前视频信息会被丢弃，确认？") ? l && (l.abortCheckStatus && l.abortCheckStatus(), l = null) : (e.preventDefault(), e.stopImmediatePropagation()))
            });
            var d = 2;
            $("#retry_video_file,#video_file").videoupload({ redirectParamName: "redirect_url", redirect: (k ? "https://" : "http://") + "mp.toutiao.com/cdiframe_result/?%s", maxFileSize: 1024 * d * n }).bind("videouploadadd", function(i, d) { l && l !== d || (e.provider_type && (d._data = d._data || {}, d._data.apiParams = { provider_type: e.provider_type }), v.submit_video.vid = 0, v.submit_video.vu = "", v.submit_video.vname = "", v.submit_video.vposter = "", v.submit_video.uploading = !0, I.vname = d.files[0].name, I.size = d.files[0].size, I.vposter = "", I.status = "", I.ts = +new Date, upload_auto_retries = 0, p.addClass("hide"), m.addClass("hide"), f.removeClass("hide").focus(), T.removeClass("hide"), h.data("loaded", 0), _.text(I.vname), h.text(""), x.html(""), l = d) }).bind("videouploadprocess", function(e, i) {
                var d = $("#title"),
                    o = $("#abstract");
                d.val() || (d.val(I.vname.replace(/\.\w+$/, "")), d.trigger("blur")), o.val() || o.val(I.vname.replace(/\.\w+$/, "")), i.process().then(function() {
                    if (l === i) {
                        I.vid = i.ref_id, I.vu = i.ref_id;
                        var e = i.uploadedBytes || 0;
                        u.trigger("purevideo", "add", i.ref_id), (!e || i.files[0].size > e) && i.submit(), i.isResumeUpload ? S.log("断点续传", i.uploadedBytes) : S.log("上传文件", i.files[0].size)
                    }
                })
            }).bind("videouploaddone", function(e, i) { S.log("上传结束", (new Date).getTime() - i.uploadStartTime) }).bind("videouploadprogress", function(e, i) { a(i.total, i.loaded) }).bind("videouploadsuccess", function(e, i) { "object" == typeof I && (is_valid_video = !0, $.extend(v.submit_video, I), I.status = "success", x.html(""), C.addClass("video-success").removeClass("video-processing").removeClass("video-fail"), w.text("视频上传成功"), f.addClass("hide"), m.removeClass("hide"), y.text(I.vname), $("body").trigger("_video_upload_status_changed", I), i.uploadStartTime && S.log("转码成功", (new Date).getTime() - i.uploadStartTime)) }).bind("videouploadtranscodingerror", function() { I.status = "fail", S.log("视频处理失败"), C.addClass("video-fail").removeClass("video-processing").removeClass("video-success"), w.text("视频处理失败"), l = null }).bind("videouploadretry", function(e, i) { v.submit_video.uploading = !0, f.addClass("hide"), m.removeClass("hide"), y.text(I.vname), g.css("width", "0%"), l = i }).bind("videouploadcheckstart", function(e, i) { i && i.ref_id !== I.vid && (I.vid = i.ref_id, I.vu = i.ref_id), $.extend(v.submit_video, I), v.submit_video.uploading = !1, I.status = "transcoding", C.addClass("video-processing").removeClass("video-fail").removeClass("video-success"), w.text("视频上传成功，处理中..."), f.addClass("hide"), m.removeClass("hide"), y.text(I.vname), g.get(0).style.width = "0%", ref_id = I.vid, $("body").trigger("_video_upload_status_changed", I) }).bind("videouploadfail", function(e, i) { S.log("视频上传异常 异常原因:" + i.errorThrown), l = null }).bind("videouploadprocessfail", function(e, i) {
                return f.addClass("hide"), p.removeClass("hide").addClass("video-reupload"), g.css("width", "0%"), h.data("loaded", 0), l = null, "toolarge" === i.errorThrown ? void r("alert", "视频不能超过" + d + "G大小") : (r("alert", i.errorMessage), void S.log(i.errorMessage))
            }).bind("videouploaderror", function() { v.submit_video.uploading = !1, r("alert", "视频上传失败"), S.log("视频上传失败"), l = null }).bind("videouploadabort", function() { S.log("用户取消上传") })
        }
    }
    var r = e("pagelet/popalert/popalert.js"),
        l = null,
        n = 1048576,
        v = null,
        u = window.listener,
        c = function() {
            return { log: function(e, i) { ga("send", "event", "video", e, null, i) } }
        },
        p = $("#video-select"),
        f = $("#video-uploading"),
        m = $("#video-uploaded"),
        _ = $("#video-name"),
        g = $("#progressbar-inner"),
        b = $("#video-cancel"),
        h = $("#video-data"),
        C = $("#video-feedback"),
        x = $("#video-feedback-icon"),
        w = $("#video-feedback-text"),
        y = $("#video-feedback-name"),
        T = $("#edit-con"),
        k = "https:" === location.protocol,
        I = { vid: 0, vu: "", vname: "", vposter: "", status: "", md5: "", ts: 0 },
        S = c();
    d.exports = { init: s, validateVideoInfo: "", getVideoInfo: "", exec_api: o }
});;
define("pagelet/pureVideo/videomonitor.js", function(i, t, r) {
    function s(i, t) {
        if (this.$el = $(i), this.$url = this.$el.find(".video-monitor-url"), this.options = t || {}, !this.options.has_video_third_monitor_permission) return void this.$el.hide();
        this.$el.show();
        var r = this;
        this.options.video_third_monitor_url && (this.$el.find(".gg-radio").addClass("selected"), this.$url.show(), this.$url.find("input").val(this.options.video_third_monitor_url), this.$url.find(".url-error").hide()), this.$el.on("click", ".gg-radio", function() {
            var i = $(this);
            i.hasClass("selected") ? (i.removeClass("selected"), r.$url.hide()) : (i.addClass("selected"), r.$url.show())
        });
        var s = /^http(s?):\/\//;
        this.$el.on("blur", ".video-monitor-url input", function() {
            var i = $(this),
                t = i.val();
            !s.test(t) || e.url(t) ? r.$url.find(".url-error").show() : r.$url.find(".url-error").hide()
        })
    }
    var e = i("common/vali/vali.js");
    s.prototype = {
        isValidate: function() {
            return this.isCheck() ? this.$url.find("input").val() && this.$el.find(".url-error").is(":hidden") : !0
        },
        isCheck: function() {
            return this.$el.find(".gg-radio").hasClass("selected")
        },
        getMonitorUrl: function() {
            return this.isCheck() ? this.$url.find("input").val() : ""
        }
    }, r.exports = s
});;
define("pagelet/pureVideo/pureVideo.js", function(i, t, e) {
    var s, a = i("common/stip/stip.js"),
        o = i("pagelet/pureVideo/video-v2.js"),
        n = i("common/video_select/video_select.js"),
        r = i("common/video_tag/video_tag.js"),
        l = i("pagelet/original_tag/original_tag_div.js"),
        d = i("pagelet/original_tag/dialog.js"),
        c = i("pagelet/title_check/title_check.js"),
        h = i("pagelet/articlead/articlead.js"),
        u = i("pagelet/extend_url/extend_url.js"),
        p = i("pagelet/pureVideo/videomonitor.js"),
        v = i("common/vali/vali.js"),
        g = i("pagelet/pureVideo/articlevideoposter.js"),
        f = i("pagelet/pureVideo/abtest.js"),
        m = i("pagelet/optimize_helper/optimize.js"),
        b = window.listener;
    window.__SUBMIT_LOCK = !1, e.exports = Pagelet.extend({
        el: "#pagelet-pureVideo",
        events: { "click .origin-hint": "onOriginHintClick", "focus #title": "onTitleFocus", "blur #title": "onTitleBlur", "focus .j-subtitle_abtest_input": "onTitleFocus", "blur .j-subtitle_abtest_input": "onTitleBlur" },
        channels: { "purevideo add": function(i, t) { this.videoPoster.setVid(t), this.abtest.slaveVideoPoster && this.abtest.slaveVideoPoster.setVid(t) }, "purevideo cancel": function() { this.videoPoster.setVid(""), this.abtest.slaveVideoPoster && this.abtest.slaveVideoPoster.setVid("") } },
        init: function(i) {
            $.support.xhrFormDataFileUpload || a.alert('为保证上传功能的正常使用, 请使用<a href="https://www.baidu.com/s?wd=chrome" class="slink">chrome</a>或升级您的浏览器', 0, 1e4), i.slave_item_id = "0" === i.slave_item_id ? "" : i.slave_item_id;
            var t, e = new d({ media_name: i.media_name });
            i.claim_origin && (t = i), s = new l({ readonly: !!i.after_pass_modify, enable: i.claim_origin_permission, has_praise_permission: i.has_praise_permission, praise: i.praise, can_spread_subsidy: i.can_spread_subsidy, is_spread_subsidy: i.is_spread_subsidy, article_can_change_ad: i.article_can_change_ad, tip: "非原创视频恶意声明原创，将受到平台严厉惩罚。", hint: "（独家、首发的内容将会获得更高的收益和推荐）", dialog: e, value: t }), $("#original_tag_holder").replaceWith(s.$el), this.videoPoster = new g($("#poster-con"), {}), i.vid && this.videoPoster.setVid(i.vid), this.videoPoster.addPoster({ itemId: i.pgc_id, thumbUri: i.vposter, src_thumb_uri: i.src_thumb_uri }), this.optimizeTest = m(s, i), this.mediaAbTest(i), u(i), i.vids_to_del = [], i.submit_video = { vid: i.vid || 0, vu: i.vu || "", vname: i.vname || "", vposter: i.vposter || "", uploading: !1 }, this.spec = i, this.media_id = i.media_id, this.pgc_id = i.pgc_id, this.is_draft = i.is_draft, this.submit_lock = !1, this.$settings = this.$el.find("#video-settings"), this.articleAd = new h(this.$el.find(".j-article-ad"), i), this.articleAd.isShowAds() || i.has_video_third_monitor_permission || i.has_fans_article_permission ? this.$settings.show() : this.$settings.hide(), this.after_pass_modify = i.after_pass_modify ? 1 : 0, this.$title = $("#title"), this.$abstract = $("#abstract"), this.$alert = this.$el.find(".alert"), this.$selectWrap = this.$el.find(".j_channel_select"), this.$tagWrap = this.$el.find("#video-tag-center"), this.video_label = this.spec.video_label, this.video_category = i.video_category, this.tag_name = i.tag_name, this.article_category = i.article_category, this.prev_title = "", this.provider_type && (i.provider_type = this.provider_type), o.init(i), this.tag = null, this.tagInit(), this.bind_click_event(), this.basic_utils(), this.selectInit(), -1 !== [4, 6, 7, 11].indexOf(i.media_status) && $("#videobatch_count").html('（新版功能上线啦，支持<a href="/video/video_batch/" class="slink">批量发表视频</a>，可同时上传10个视频）'), $("#origin-apply-hint").text("（独家、首发的内容将会获得更高的收益和推荐）"), this.checkTitle = new c, this.checkTitle.init({ min: 5, max: 50, el: this.$title }), this.videoMonitor = new p(this.$el.find(".j-video-monitor"), i), this.$fansVisiable = this.$el.find(".gg-fans-visiable-radio"), this.$autoDiagnosis = this.$el.find(".gg-auto-diagnosis-radio"), this._fansVisisable(), this._autoDiagnosis(), this.$timerTip = this.$el.find(".j_timer_tip"), this.$timerTip.hoverTip()
        },
        onTitleFocus: function(i) {
            var t = $(i.target);
            t.data("prevTitle", t.val())
        },
        onTitleBlur: function(i) {
            var t = this,
                e = $(i.target),
                s = e.val();
            s !== e.data("prevTitle") && $.ajax({ type: "GET", url: "/check_title/", data: { title: s } }).done(function(i) { "success" === i.message && (1 === i.status ? fixedAlert("你的内容涉嫌标题夸张，建议修改，继续发表会被限制推荐量。", 3e4) : t.$alert.height(0)) })
        },
        remaining_article_limit: function() {
            var i = {},
                t = this.media_id;
            if ($.ajax({ url: "/core/article/remaining_post_num/", data: { media_id: t, after_pass_modify: this.after_pass_modify }, async: !1, success: function(t) { i = t }, error: function() {} }), i.data) {
                var e = i.data;
                if (e.used_up) {
                    var s = "";
                    return s = 2 == e.is_experience ? '您已被禁言。如有疑问请联系客服 <a href="mailto:mp@toutiao.com">mp@toutiao.com</a>' : 0 == e.post_num ? "暂不可发表，请存草稿。" : "您的帐号已超出每天 " + e.post_num + ' 篇的发表上限，请存草稿明天再发。如有疑问请联系客服 <a href="mailto:mp@toutiao.com">mp@toutiao.com</a>', $("#limit_warning").show().html(s), !1
                }
            }
            return !0
        },
        checkVideo: function() {
            var i = $(this.el),
                t = i.find(".j_video_select_dom").val();
            return t ? !0 : !1
        },
        form_valid_check: function() {
            var i = $.trim($("#title").val()).length,
                t = $.trim($("#title").val()),
                e = 5,
                s = 50,
                o = $.trim($("#abstract").val()).length,
                n = 2e4,
                r = this.spec.submit_video.vid ? !0 : !1,
                l = "",
                d = this.$el.find("#video-tag-center .j-tag-content"),
                c = this.abtest.getSlaveInfo() || [],
                h = this.videoPoster.getPosterInfo();
            return 0 == i ? l = "标题不能为空" : e > i || i > s ? l = "标题长度应该在" + e + "-" + s + "字之间" : o > n ? l = "视频简介不能超过 " + n + " 字" : r ? this.checkVideo() ? this.has_switch_account() ? l = "你已经切换到另一个帐号，请检查是否要在该帐号下发表" : d.length || (l = "请填写视频标签") : l = "请选择视频分类" : l = "请先上传有效视频", this.$el.find(".copy-right-cell").is(":hidden") || this.$el.find(".copy-right-cell input").prop("checked") ? (l || ((l = this.abtest.validate()) ? submit_lock = !1 : (l = this.videoPoster.validate()) ? submit_lock = !1 : c.length && h.thumb_url == c[0].thumb_uri && t == c[0].title && (submit_lock = !1, l = "主副标题和主副封面不能都相同，请修改"), this.videoMonitor.isValidate() || (l = "请输合法的监测链接")), l ? (fixedAlert(l), !1) : !0) : (a.alert("请同意并接受《" + this.spec_name + "服务协议》"), this.submit_lock = !1, !1)
        },
        has_switch_account: function() {
            var i = "";
            return $.readCookie && (i = $.readCookie("currentMediaId")), "" == i || this.spec.media_id == i ? !1 : ($.readCookie && (this.spec.media_id = $.readCookie("currentMediaId")), !0)
        },
        word_count_check: function() {
            $("#abstract").keyup(function() {
                var i = $(this),
                    t = parseInt(i.attr("maxlength")) || 0;
                if (t) {
                    var e = $.trim(this.value),
                        s = e.length,
                        a = this.id,
                        o = t - s;
                    0 > o && (o = 0), $(".for-" + a).text("还可以输入" + o + "字"), this.value = e, s > t && (this.value = e.slice(0, t))
                }
            })
        },
        article_post: function(i) {
            var t, e = $(this.el),
                o = e.find(".j_video_select_dom"),
                n = [],
                r = $("#video-tag-center").find(".j-tag-content");
            if (!window.__SUBMIT_LOCK) {
                window.__SUBMIT_LOCK = !0;
                var l = $.trim($("#title").val()),
                    d = _.escape($.trim($("#abstract").val()) || ""),
                    c = e.find(".j_video_select_dom").val() || "",
                    h = i ? 0 : 1,
                    u = this.pgc_id,
                    p = this.spec.submit_video.vid,
                    v = this.spec.submit_video.vu,
                    g = this.spec.submit_video.vname,
                    f = this.after_pass_modify,
                    m = 1,
                    b = "",
                    w = {},
                    y = $(".gg-extend-url").length && $(".gg-extend-url").hasClass("selected") ? 1 : 0,
                    k = this.videoPoster.getPosterInfo();
                if (p && (w.sp = "toutiao", w.vid = p, w.vposter = k.vposter, w.thumb_url = k.thumb_url, w.src_thumb_uri = k.src_thumb_uri, w.vu = v, w.vname = g, b = "<p>{!-- PGC_VIDEO:" + JSON.stringify(w) + " --}</p>"), "goodvoice" === this.spec_type && !$("#copy-right-confirm").prop("checked")) return a.alert("请同意并接受《" + this.spec_name + "服务协议》"), window.__SUBMIT_LOCK = !1, !1;
                var x = $("#fb"),
                    j = x.text(),
                    T = "提交中...";
                if (i && (x = $("#cg"), j = x.text(), T = "保存中..."), x.attr("disabled", "disabled").text(T), o.val() && (t = o.val()), r.length)
                    for (var C = 0; C < r.length; C++) n.push($.trim(r.eq(C).text()));
                var V = this.abtest.getSlaveInfo(),
                    D = { title: l, "abstract": d, tag: c, save: h, pgc_id: u, article_type: m, content: b, after_pass_modify: f, article_ad_type: this.articleAd.getArticleAdType(), tags: t, article_label: n.join(";"), is_fans_article: this.$fansVisiable.is(".selected") ? 1 : 0, recommend_auto_analyse: this.$autoDiagnosis.is(".selected") ? 1 : 0, from_diagnosis: this.isFromDiagnosis() ? 1 : 0 };
                $.extend(D, s.value), y && (D.extern_link = $("#extend_url_input").val()), V.length && $.extend(D, { slave_items: JSON.stringify(V) }), this.optimizeTest.isSelected && (D.add_third_title = 1), $.extend(D, { pgc_id: k.pgc_id, thumb_url: k.thumb_url, vposter: k.vposter }), this.spec_type && (D["spectype_" + this.spec_type] = 1), this.videoMonitor.isCheck() && (D.video_third_monitor_url = this.videoMonitor.getMonitorUrl()), $.ajax({ type: "POST", url: "/core/article/edit_article_post/?source=mp&type=purevideo", data: D }).done(function(i) { "保存成功" == i.message || "提交成功" == i.message ? (window.onbeforeunload = function() {}, a.popupTip({ msg: i.message, status: !0, duration: 0, callback: function() { window.location = "/core/article/index/" } })) : a.alert(i.message) }).fail(function(i, t, e) { a.alert("服务异常，请稍后再试，异常状态：" + i.status + "," + t + "," + e) }).always(function() { window.__SUBMIT_LOCK = !1, x.removeAttr("disabled").text(j) })
            }
        },
        bind_click_event: function() {
            var i = this;
            $("#fb").click(function() {
                v.validBrowser(window.location.pathname + window.location.search, function(t, e) {
                    return t ? void(i.form_valid_check() && i.article_post(!1)) : void popalert("alert", e)
                })
            }), $("#cg").click(function() {
                v.validBrowser(window.location.pathname + window.location.search, function(t, e) {
                    return t ? void(i.form_valid_check() && i.article_post(!0)) : void popalert("alert", e)
                })
            }), $(".qx").click(function() { location.href = "/" }), $(".gg-radio").click(function() {
                var i = $(this),
                    t = i.data("type"),
                    e = i.is(".selected");
                if (!i.is(".disabled")) switch (t) {
                    case "show":
                        e ? i.removeClass("selected") : i.addClass("selected")
                }
            })
        },
        tagInit: function() { this.tag = new r(this.video_label), this.$tagWrap.prepend(this.tag.getNode()) },
        selectInit: function() {
            for (var i = this.videoDataFilter(), t = 0; t < i.length; t++) "video_author_toutiao" == i[t].key && i.splice(t, 1);
            var e = this.videoDataToObject(i, this.tag_name),
                s = new n(i, e);
            this.$selectWrap.prepend(s), this.spec.claim_origin_permission && this.$selectWrap.append('<a style="display:inline-block;line-height:40px;margin-left:20px;font-size:14px;" class="slink" href="http://jmj.toutiao.com" target="_blank">参加金秒奖，赢得今日头条亿级展示资源</a>');
            var a = this;
            s.on("change", function(i, t) { "video_good_voice" === t ? (a.$el.find(".copy-right-cell").show(), a.spec_name = "中国新唱将") : "good_actor" === t ? (a.$el.find(".copy-right-cell").show(), a.spec_name = "中国好表演") : (a.$el.find(".copy-right-cell").hide(), a.spec_name = "") })
        },
        videoDataToObject: function(i, t) {
            for (var e = 0; e < i.length; e++)
                if (i[e].key == t) return { key: t, value: i[e].value };
            return {}
        },
        videoDataFilter: function() {
            var i = this.video_category,
                t = [];
            if (i instanceof Array)
                for (var e = 0; e < i.length; e++) t.push({ key: i[e][0], value: i[e][1] });
            return t
        },
        basic_utils: function() {
            var i = this;
            window.onbeforeunload = function() {
                var t = $("#edit-con").is(".hide");
                if (!t) {
                    var e = $.trim(i.$title.val()).length,
                        s = $.trim(i.$abstract.val()).length;
                    if (e > 0 || s > 0 || i.spec.submit_video.vid) return "你的内容尚未保存，确认离开？";
                    if (i.spec.submit_video.uploading) return "当前视频尚未上传完毕，确认离开？"
                }
            }, $fixedAlertDiv = $(".alert"), $fixedAlertDiv.length && ($fixedAlertDiv.affix({ offset: { top: $fixedAlertDiv.offset().top } }), fixedAlert = function(i, t) { i && i.length && ($fixedAlertDiv.find("span").text(i).end().height(40), setTimeout(function() { $fixedAlertDiv.height(0) }, t || 4e3)) })
        },
        onOriginHintClick: function() { $("#origin-hint-detail").show().text("非原创视频恶意声明原创，将受到平台严厉惩罚。").css({ color: "#9e9e9e" }) },
        _fansVisisable: function() {
            return this.pgc_id && !this.is_draft ? void this.$fansVisiable.addClass("disabled") : void this.$fansVisiable.on("click", function() {
                var i = $(this);
                i.hasClass("selected") ? i.removeClass("selected") : i.addClass("selected")
            })
        },
        _autoDiagnosis: function() {
            return this.pgc_id && !this.is_draft ? void this.$autoDiagnosis.addClass("disabled") : (this.pgc_id || this.$autoDiagnosis.hasClass("selected") || this.$autoDiagnosis.addClass("selected"), void this.$autoDiagnosis.on("click", function() {
                var i = $(this);
                i.hasClass("selected") ? i.removeClass("selected") : i.addClass("selected")
            }))
        },
        isFromDiagnosis: function() {
            var i = window.location.href,
                t = "from_diagnosis=";
            return -1 !== i.indexOf(t) && i.split(t)[1] ? !!Number(i.split(t)[1].charAt(0)) : !1
        },
        mediaAbTest: function(i) {
            var t = this.$el.find(".j-subtitle-row"),
                e = this.abtest = new f(t, i, this.videoPoster),
                a = i.pgc_id && "0" != i.is_fail;
            i.abtest_permission && (i.has_slave_article || (i.multi_type = 0), i.claim_origin ? t.show() : t.hide(), s.$el.on("origin-confirm", function() { a || (t.show(), t.find(".j_abtest_radio").trigger("click", !0), b.trigger("assistant-change", "origin-change", { origin: !0 })) }), s.$el.on("origin-cancel", function() { e.multiTypeChange(0), t.hide(), b.trigger("assistant-change", "origin-change", { origin: !1 }) }))
        }
    })
});;
define("pagelet/pureVideoForBeautifulVoice/pureVideoForBeautifulVoice.js", function(e, t, o) {
    var p = e("pagelet/pureVideo/pureVideo.js"),
        i = p;
    i.prototype = $.extend(i.prototype, { spec_type: "goodvoice", spec_name: "中国新唱将" });
    var r = i.prototype.init;
    i.prototype.init = function() { r.apply(this, arguments), $(".copy-right-cell").show() };
    var n = i.prototype.selectInit;
    i.prototype.selectInit = function() { n.apply(this, arguments), this.$selectWrap.find('span[value="video_good_voice"]').click() }, o.exports = i
});;
define("pagelet/pureVideoForGoldenSecond/pureVideoForGoldenSecond.js", function(e, t, o) {
    var p = e("pagelet/pureVideo/pureVideo.js"),
        i = p;
    i.prototype = $.extend(i.prototype, { spec_name: "金秒奖", spec_type: "golden_second_awards", provider_type: "2" });
    var n = i.prototype.init;
    i.prototype.init = function() {
        n.apply(this, arguments);
        var e = $(".copy-right-cell");
        e.find("a").html("《金秒奖服务协议》").attr("href", "//jmj.toutiao.com/licence/"), e.show()
    };
    var r = i.prototype.selectInit;
    i.prototype.selectInit = function() { $(".channel-cell").hide(), r.apply(this, arguments), this.$selectWrap.find(".j_video_select_dom").val("video_golden_second_awards"), this.$selectWrap.find(".j_video_select_value").html("金秒奖") }, o.exports = i
});;
define("pagelet/pureVideoForGoodActor/pureVideoForGoodActor.js", function(e, t, o) {
    var p = e("pagelet/pureVideo/pureVideo.js"),
        i = p;
    i.prototype = $.extend(i.prototype, { spec_name: "中国好表演", spec_type: "china_show" });
    var r = i.prototype.init;
    i.prototype.init = function() {
        r.apply(this, arguments);
        var e = $(".copy-right-cell");
        e.find("a").html("《中国好表演服务协议》").attr("href", "//www.toutiao.com/goodvoice/actor/licence"), e.show()
    };
    var c = i.prototype.selectInit;
    i.prototype.selectInit = function() { c.apply(this, arguments), this.$selectWrap.find('span[value="china_show"]').click() }, o.exports = i
});;
define("pagelet/questionnaire/questionnaire.js", function(require, exports, module) {
    var askTmpl = function(obj) {
            {
                var __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="modal fade questionnaire-ask-dialog">\n    <div class="modal-dialog" role="dialog">\n        <div class="modal-content">\n            <div class="spopup_dialog_body">\n                <div class="spopup_dialog_tip">\n                    亲爱的头条号作者，你好！欢迎参与我们的用户体验调研，本调研将占用你大约3分钟的时间，是否愿意参与调研？\n                </div>\n            </div>\n            <div class="spopup_dialog_btns">\n                <div class="spopup_dialog_btn widget_btn_ok j-ask-accept">好的，我参与</div>\n                <div class="spopup_dialog_btn widget_btn_cancel snoshadow" data-dismiss="modal">下次再参与</div>\n                <div class="spopup_dialog_btn widget_btn_cancel snoshadow j-ask-no" data-dismiss="modal">不再提示</div>\n            </div>\n        </div>\n    </div>\n</div>';
            return __p
        },
        questionTmpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="modal fade questionnaire-question-dialog">\n    <div class="modal-dialog" role="dialog" style="width: 700px;">\n        <div class="modal-content">\n            <div class="spopup_dialog_body">\n                <div class="spopup_dialog_tip">\n                    <div class="question-row question-tips">\n                        <div class="question-left">\n                            问题列表（选填）\n                        </div>\n                        <div class="question-right">\n                            <span>很满意</span>\n                            <span>满意</span>\n                            <span>一般</span>\n                            <span>不满意</span>\n                            <span>很不满意</span>\n                        </div>\n                    </div>\n                    ', _.each(questions, function(n) { __p += '\n                    <div class="question-row">\n                        <div class="question-left">' + (null == (__t = n.text) ? "" : __t) + '</div>\n                        <div class="question-right">\n\n                            <span><input type="radio" name="' + (null == (__t = n.id) ? "" : __t) + '" value=5></span>\n                            <span><input type="radio" name="' + (null == (__t = n.id) ? "" : __t) + '" value=4></span>\n                            <span><input type="radio" name="' + (null == (__t = n.id) ? "" : __t) + '" value=3></span>\n                            <span><input type="radio" name="' + (null == (__t = n.id) ? "" : __t) + '" value=2></span>\n                            <span><input type="radio" name="' + (null == (__t = n.id) ? "" : __t) + '" value=1></span>\n                        </div>\n                    </div>\n                    ' }), __p += '\n                    <div class="question-suggest">\n                        <div class="question-suggest-text">\n                            <textarea placeholder="请输入您的建议或意见"></textarea>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="spopup_dialog_btns">\n                <div class="spopup_dialog_btn widget_btn_ok j-question-submit">提交</div>\n                <div class="spopup_dialog_btn widget_btn_cancel snoshadow" data-dismiss="modal">取消</div>\n            </div>\n        </div>\n    </div>\n</div>';
            return __p
        },
        Stip = require("common/stip/stip.js");
    module.exports = Pagelet.extend({
        el: "#pagelet-questionnaire",
        events: {},
        init: function() { $.get("/questionnaire/", function(n) { n.qusetionnaire && (this.bindEvents(), this.$askDialog = $(askTmpl()).appendTo(document.body), this.$askDialog.modal("show"), this.getQuestions()) }.bind(this)) },
        bindEvents: function() { $(document.body).on("click", ".j-ask-accept", this.askConfirm.bind(this)).on("click", ".j-ask-no", this.askNo.bind(this)).on("click", ".j-question-submit", this.questionSubmit.bind(this)) },
        askNo: function() { $.get("/refuse_questionnaire/") },
        askConfirm: function() { this.$askDialog.modal("hide"), this.$questionDialog.modal("show") },
        questionSubmit: function() {
            var n = {};
            $("input[type='radio']:checked").each(function() { n[this.name] = this.value }), n.content = $(".question-suggest-text textarea").val(), $.post("/questionnaire_result/", { anslist: JSON.stringify(n) }, function(n) { 0 == n.code ? (this.$questionDialog.modal("hide"), Stip.popupTip({ msg: "感谢您的反馈", status: 1 })) : Stip.alert("服务器错误请重试") }.bind(this))
        },
        getQuestions: function() {
            var n = this;
            $.get("/questionnaire_question/", function(i) {
                var s = i.ques_list;
                n.$questionDialog = $(questionTmpl({ questions: s })).appendTo(document.body);
                for (var t = [], a = 0; a < s.length; a++) t.push(s[a].id);
                n.keys = t
            })
        }
    })
});;
define("pagelet/quiz/model.js", function(e, i, a) {
    var o = e("common/util/util.js");
    a.exports = function() {
        var e = "/core/article/edit_article_post/?source=mp&type=quiz",
            i = "/quiz/item/preview/";
        return {
            publish: function(i, a, t, n, d, l) {
                var u = { pgc_id: t || o.GET.pgc_id, save: i, tag: n, show_ads: d, subsidy: l, article_type: 2, gov_media_id: 0, quiz_item: a };
                o.loadingShow(), $.ajax({ type: "POST", url: e, data: u, dataType: "json" }).done(function(e) { alert(e.message), ("保存成功" == e.message || "提交成功" == e.message) && (window.onbeforeunload = null, location.href = "/core/article/index/?source_type=0") }).fail(function(e, i, a) { alert("服务器异常，请稍后再试，异常状态：" + e.status + "," + i + "," + a) }).always(function() { o.loadingHide() })
            },
            preview: function(e) {
                var a = { quiz_item: e };
                o.loadingShow(), o.ajax(i, a, function(e, i, a) {
                    if (0 === e) {
                        var t = "出错啦～！请重试";
                        a && (t = a), $(".quiz-preview").find(".content").html(t).end().modal(), window.loadQuiz && window.loadQuiz()
                    } else alert(i);
                    o.loadingHide()
                })
            }
        }
    }
});;
define("pagelet/quiz/viewModel.js", function(e, o, t) {
    t.exports = function(o, t) {
        function i(e, o, t) {
            var n = {};
            return n = _.isFunction(o) ? new o : o, _.each(e, function(e, o) { "" !== e && (o in t ? t[o].ctor ? (n[o].removeAll(), _.each(e, function(e) { n[o].push(t[o].child ? i(e, t[o].ctor, t[o].child) : i(e, t[o].ctor, {})) })) : t[o].child && (n[o] = i(e, n[o], t[o].child)) : o in n && _.isFunction(n[o].peek) ? n[o](e) : o in n && _.isObject(n[o]) && i(e, n[o], {})) }), n
        }

        function n(e) { _.each(e(), function(e, o) { e.num(o + 1) }) }

        function s(e) {
            var o = { ignore: ["tabCheckStatus", "questionCache", "isCollapsed", "isNeedFresh", "errors", "cacheArticleImage", "questionChoiceLength", "tags", "tag_name", "show_ads_option", "mediaType", "show_ads", "has_toutiao_subsidy_permission", "subsidy", "showSubsidy", "emptyImage", "chooseRightAnswer"] },
                t = ko.mapping.toJSON(e, o);
            return t = t.replace(new RegExp(g.image, "g"), "")
        }

        function a() {
            var e = this;
            e.num = ko.observable(0), e.title = ko.observable(""), e.image = ko.observable(g.image), e.explicate = ko.observable("")
        }

        function r() {
            function e(e) { e.length > 0 ? this.choice(e) : o.choice.push(f.call(o, o)) }
            var o = this;
            o.isNeedFresh = !0, o.questionCache = {};
            var s = [],
                r = [];
            o.type = ko.observable(0), o.num = ko.observable(1), o.question = { title: ko.observable(""), image: ko.observable(g.image) }, o.question.title.extend({ required: { message: "问题(" + o.num() + ")标题为空" } }), o.uploadImage = function() { this.question.image && t.uploadImage(this.question.image) }, o.expand = function(e, t) {
                var i = $(t.target).closest(".question-item");
                i.find(".question-wrap").show(), i.find(".option-summary").hide(), i.find(".option-edit").hide(), i.find(".cancel").show(), o.questionCache = ko.mapping.toJSON(o, {}), o.isNeedFresh = !1
            }, o.cancel = function(e, t) {
                var n = JSON.parse(o.questionCache),
                    s = { choice: { ctor: u } };
                i(n, o, s), o.collapse("", t)
            }, o.collapse = function(e, t, i) {
                var n;
                return 0 == o.question.title().length ? !1 : (n = i ? $(i) : $(t.target).closest(".question-item"), n.find(".question-wrap").hide(), n.find(".option-summary").show(), n.find(".option-edit").show(), void(o.isNeedFresh = !0))
            }, o.addOption = function() {
                var e = o.choice().length;
                o.choice.push(f.call(o, o).num(e + 1))
            }, o.removeOption = function(e) { o.choice.remove(e), o.choice().length < 1 && o.addOption(), n(o.choice) }, o.choice = ko.observableArray([]), o.addComment = function() { o.answer.push(new a) }, o.removeComment = function(e) { o.answer.remove(e) }, o.answer = ko.observableArray([]), ko.computed(function() { 1 == this.type() ? (s = this.choice.removeAll(), e.call(this, r)) : (r = this.choice.removeAll(), e.call(this, s)) }, o)
        }

        function u(e) {
            var o = this;
            o.num = ko.observable(1), o.title = ko.observable(""), o.image = ko.observable(g.image), o.answer_num = ko.observable(v), o.chooseRightAnswer = function() { o.answer_num(0 == o.answer_num() ? 1 : 0) }, o.uploadImage = function() { this.image && t.uploadImage(this.image) };
            var i = e ? e.num() : 1;
            o.title.extend({
                required: {
                    message: function() {
                        return "问题(" + i + ")选项(" + o.num() + ")标题、选项图片至少填写一项"
                    },
                    onlyIf: function() {
                        return o.image() == g.image ? !0 : !1
                    }
                }
            })
        }

        function l() {
            var e = this;
            this.answer_format = { p1: ko.observable(""), p2: ko.observable("") }, this.addResult = function() {
                var o = e.data().length;
                e.data.push(f.call(e).num(o + 1))
            }, this.removeResult = function(o) { e.data.remove(o), n(e.data) }, this.data = ko.observableArray([f.call(e)])
        }

        function c() {
            var e = this;
            e.num = ko.observable(1), e.title = ko.observable(""), e.image = ko.observable(g.image), e.range_from = ko.observable("0"), e.range_to = ko.observable("0"), e.explicate = ko.observable("");
            var o = {
                digit: { message: "结果(" + e.num() + ")命中区间请填写数字", params: !0 },
                required: {
                    message: "结果(" + e.num() + ")命中区间不能为空",
                    onlyIf: function() {
                        return 0 == b.type() && b.question().length > 0 && 1 == b.question()[0].type() ? !0 : !1
                    }
                }
            };
            this.range_to.extend(o)
        }
        var m = e("pagelet/quiz/model.js")(),
            h = e("common/vali/vali.js"),
            d = e("pagelet/popalert/popalert.js"),
            b = {},
            p = $({}),
            v = 1,
            g = { image: "https://p1.pstatp.com/origin/6329/4231483611" };
        ko.validation.rules.mustLess = {
            validator: function(e, o) {
                return o >= e
            }
        }, ko.validation.registerExtenders();
        var f = function(e, o, t) {
            o = o || this;
            var i, n = o.constructor.ClassName,
                s = { Question: u, Answer: c };
            return !t && s.hasOwnProperty(n) && (i = new s[n](e, o)), i
        };
        ko.bindingHandlers.collapse = {
            init: function(e, o, t, i) {
                var n = ko.utils.unwrapObservable(i.question.title);
                n.length > 0 && i.isNeedFresh && i.collapse("", "", e)
            }
        }, r.ClassName = "Question", l.ClassName = "Answer";
        var w = function() {
            function e(e) { e.length > 0 ? this.question(e) : i.question.push(new r) }
            var i = this;
            i.owner = "", i.quiz_id = o.quiz_id || "", i.emptyImage = g.image, i.title = ko.observable(""), i.status = ko.observable(0), i.image = ko.observable(g.image), i.quiz_cover_image = {}, i.abstract = ko.observable(""), i.tags = ko.observableArray([]), i.tag_name = ko.observable(""), i.show_ads_option = ko.observable(0), i.show_ads = ko.observable(1), i.mediaType = ko.observable(0), i.subsidy = ko.observable(0), i.has_toutiao_subsidy_permission = ko.observable(0), i.type = ko.observable(0), i.question = ko.observableArray(), i.tabCheckStatus = ko.observable(0), b = i, i.answer = new l;
            var a = [],
                u = [];
            i.questionChoiceLength = ko.pureComputed(function() {
                return i.question().length > 0 && 0 == i.type() ? i.question()[0].choice().length : 1
            }), i.showGg = function() { i.show_ads(1 == i.show_ads() ? 0 : 1) }, i.showSubsidy = function() { i.subsidy(1 == i.subsidy() ? 0 : 1) }, i.title.extend({
                minLength: { params: 5, message: "文章标题不能少于5个字" },
                required: {
                    message: "文章标题、图片、正文，至少一项不为空",
                    onlyIf: function() {
                        return 0 == i.abstract().length && i.image() == g.image ? !0 : !1
                    }
                }
            }), i.abstract.extend({ minLength: { params: 5, message: "文章正文不能少于5个字" } }), p.bind("ko.computed", function() { i.question().length > 0 && (1 == i.type() ? u = i.question.removeAll() : a = i.question.removeAll()), ko.computed(function() { v = 2 == i.type() ? 0 : 1, 1 == i.type() ? (a = i.question.removeAll(), e.call(i, u)) : (u = i.question.removeAll(), e.call(i, a)) }, i) }), i.uploadImage = function() { this.image && (t.uploadImage(this.image), t.cacheArticleImage(this)) }, i.addQuestion = function() {
                var e = i.question().length;
                i.question.push((new r).num(e + 1))
            }, this.removeQuestion = function(e) { i.question.remove(e), n(i.question) }, i.submit = function() {
                h.validBrowser(window.location.pathname + window.location.search, function(e, t) {
                    return e ? (i.status(1), i.errors().length > 0 ? (alert(i.errors()[0]), !1) : void m.publish(1, s(i), o.pgc_id, i.tag_name(), i.show_ads(), i.subsidy())) : void d("alert", t)
                })
            }, i.saveDraft = function() {
                h.validBrowser(window.location.pathname + window.location.search, function(e, t) {
                    return e ? (i.status(0), void m.publish(0, s(i), o.pgc_id, i.tag_name(), i.show_ads(), i.subsidy())) : void d("alert", t)
                })
            }, i.preview = function() { i.status(0), m.preview(s(i)) }, i.displayQuestionMode = function() {
                return "question-template"
            }, i.displayResultMode = function() {
                return "result-template"
            }
        };
        return function(e, o) {
            var t, n = { question: { ctor: r, child: { choice: { ctor: u }, answer: { ctor: a } } }, answer: { child: { data: { ctor: c } } } };
            return t = o.pgc_id ? i(o, new w, n) : new w, p.trigger("ko.computed"), e.onbeforeunload = function() {
                var e = !1;
                return $("input[type=text],textarea").each(function(o, t) {
                    return $.trim($(t).val()).length > 0 ? (e = !0, !1) : void 0
                }), e || $(".quiz-form img").each(function(o, t) {
                    return $(t).attr("src") != g.image ? (e = !0, !1) : void 0
                }), e ? "当前有已编写的内容，确认离开？" : void 0
            }, t.tags(o.tags), t.show_ads_option(o.show_ads_option), t.mediaType(o.mediaType), t.tag_name(o.tag_name), t.subsidy(Number(o.subsidy)), t.show_ads(Number(o.ads_option_checked)), t.has_toutiao_subsidy_permission(o.has_toutiao_subsidy_permission), t
        }(window, o)
    }
});;
define("pagelet/quiz/quiz.js", function(e, t, i) {
    var n = e("pagelet/title_check/title_check.js");
    i.exports = Pagelet.extend({
        el: ".pagelet-quiz",
        events: { "click .quiz-submit .qx": "cancel", "focus #title": "onTitleFocus", "blur #title": "onTitleBlur" },
        init: function(t) {
            var i = this;
            data = $.extend(t, t.quiz_item), delete data.quiz_item, this.$title = this.$el.find("#title"), this.$fixedAlertDiv = this.$el.find(".alert"), this.upload = this.addUpload(), i.viewModel = e("pagelet/quiz/viewModel.js")(data, i), i.knockoutInit(), this.render(), this.checkTitle = new n, this.checkTitle.init({ min: 5, max: 50, el: this.$title })
        },
        onTitleFocus: function() { this.prev_title = this.$title.val() },
        onTitleBlur: function() {
            var e = this,
                t = this.$title.val();
            t !== this.prev_title && $.ajax({ type: "GET", url: "/check_title/", data: { title: t } }).done(function(t) { "success" === t.message && (1 === t.status ? e.fixedAlert("你的内容涉嫌标题夸张，建议修改，继续发表会被限制推荐量。", 3e4) : e.$fixedAlertDiv.height(0)) })
        },
        fixedAlert: function(e, t) {
            var i = this;
            this.$fixedAlertDiv.affix({ offset: { top: this.$fixedAlertDiv.offset().top } }), e && e.length && (this.$fixedAlertDiv.find("span").text(e).end().height(40), setTimeout(function() { i.$fixedAlertDiv.height(0) }, t || 4e3))
        },
        cancel: function() { location.href = location.origin },
        render: function() {},
        uploadImage: function(e) {
            var t = this;
            t.image = e, t.upload.input.trigger("click")
        },
        cacheArticleImage: function(e) {
            var t = this;
            t.cacheImageInfo = e
        },
        addUpload: function() {
            var e = this,
                t = new Uploader({
                    container: e.$el.find(".j-upload"),
                    trigger: e.$el.find(".j-upload"),
                    name: "upfile",
                    action: "/tools/upload_picture/",
                    accept: "image/*",
                    change: function() { Util.loadingShow(), this.submit() },
                    error: function() { Util.loadingHide(), alert("上传失败") },
                    success: function(t) {
                        Util.loadingHide();
                        try { "string" == typeof t && (t = JSON.parse(t)), "success" === t.state.toString().toLowerCase() ? (e.image(t.url), e.cacheImageInfo && e.cacheImageInfo.quiz_cover_image && (e.cacheImageInfo.quiz_cover_image = t)) : alert("上传失败") } catch (i) { alert("上传失败") }
                    }
                });
            return t
        },
        knockoutInit: function() { "undefined" != typeof ko && (ko.validation.rules.pattern.message = "Invalid.", ko.validation.init({ registerExtenders: !0, messagesOnModified: !0, insertMessages: !1, parseInputAttributes: !0, messageTemplate: null }, !0), this.viewModel.errors = ko.validation.group(this.viewModel, { deep: !0, live: !0 }), ko.applyBindings(this.viewModel, document.getElementById("pagelet-quiz"))) }
    })
});;
define("pagelet/rights/sign.js", function(n, i, o) {
    var t = n("common/util/util.js"),
        e = n("common/popup/dialog.js"),
        a = n("pagelet/rights/kbanquan-cookie.js"),
        s = n("pagelet/rights/rights-status.js"),
        d = window.listener;
    o.exports = Pagelet.extend({
        el: "#kbanquan-sign",
        events: { "click .kbq-sign-btn": "showKbqModal", "click $kbq-btn-exit": "hideKbqModel", "click $kbq-btn-submit": "submitSign" },
        init: function() { this.$kbqModal = this.$el.find("#kbanquan-sign-modal .modal"), this.noticeModalInit(), this.bindSignModalEvent() },
        bindSignModalEvent: function() {
            var n = this;
            this.$el.find(".sign-btn, .sign-trigger").click(function() { d.trigger("origin_manage_sign_modal_show", "showModal", 2) }), d.on("origin_manage_sign_modal", "success", function(i, o) { n.afterSigned(o) }), d.on("kbanquan-sign", "show", function() { n.showKbqModal() })
        },
        showKbqModal: function() {
            var n = s.getStatusString(s.getEl(), "kbanquan");
            0 === n.length ? d.trigger("origin_manage_sign_modal_show", "showModal", 2) : this.$kbqModal.modal("show")
        },
        hideKbqModel: function() { this.$kbqModal.modal("hide") },
        submitSign: function() {
            var n = this;
            this.hideKbqModel(), $.ajax({ method: "post", url: "/kbanquan/sign_up/", dataType: "json", data: {}, success: function(i) { "success" === i.message && n.afterSigned(1) }, error: function() {} })
        },
        afterSigned: function(n) {
            var i = this.$el;
            2 === n ? (i.find(".kbq-rk-unsign").hide(), i.find(".rightknights-signerr").hide(), i.find(".kbq-rk-err").hide(), i.find(".kbanquan-signing").show()) : 1 === n && (i.find(".kbanquan-unsign").hide(), i.find(".kbanquan-signing").show())
        },
        noticeModalInit: function() {
            if ("article_list" === t.GET.from && !a.exist(a.cookieNames.KbanquanModelNoticeCookie) && 0 == s.getSignStatus()) {
                var n = this;
                setTimeout(function() {
                    var i = e({ content: '今日头条全新推出<a href="javascript:void(0);" class="color-blue" data-node="sign_now">维权赔付</a>功能，现面向平台优质作者开放，授权后将有专业维权律师为您追缴<span class="color-red">侵权赔偿款</span>', cancelTxt: "不感兴趣", okTxt: "一键授权", btns: [{ type: "cancel", click: function() { i.remove() } }, { type: "ok", click: function() { i.remove(), n.showModal() } }] });
                    i.show(), i.jele.find("[data-node=sign_now]").click(function() { i.remove(), n.showModal() }), a.set(a.cookieNames.KbanquanModelNoticeCookie)
                }, 500)
            }
        }
    })
});;
define("pagelet/sign_email/sign_email.js", function(o) {
    var m = o("common/stip/stip.js");
    $(function() {
        $("#resend").click(function(o) { o.preventDefault(), $.ajax({ url: "/resend_user_verify_email/", success: function(o) { m.popupTip(0 == o.code ? { msg: "成功发送激活邮件", status: !0 } : { msg: "激活邮件发送失败", status: !1 }) }, error: function() { m.popupTip({ msg: "网络错误，请稍后重试", status: !1 }) } }) }),
            function() {
                var o = { "qq.com": "mail.qq.com", "gmail.com": "mail.google.com", "sina.com": "mail.sina.com.cn", "163.com": "mail.163.com", "126.com": "mail.126.com", "yeah.net": "www.yeah.net", "sohu.com": "mail.sohu.com", "tom.com": "mail.tom.com", "sogou.com": "mail.sogou.com", "139.com": "mail.10086.cn", "hotmail.com": "www.hotmail.com", "live.com": "login.live.com", "live.cn": "login.live.cn", "live.com.cn": "login.live.com.cn", "189.com": "webmail16.189.cn/webmail/", "yahoo.com.cn": "mail.cn.yahoo.com", "yahoo.cn": "mail.cn.yahoo.com", "eyou.com": "www.eyou.com", "21cn.com": "mail.21cn.com", "188.com": "www.188.com", "foxmail.com": "mail.qq.com/cgi-bin/loginpage?t=fox_loginpage" },
                    m = $("#jump"),
                    c = m.data("href");
                c = c.slice(c.indexOf("@") + 1);
                var i = o[c];
                i ? m.prop("href", "http://" + i) : m.hide()
            }()
    })
});;
define("pagelet/signbasic/config.js", function(require, exports, module) {
    var tpl = function(obj) {
        {
            var __t, __p = "";
            Array.prototype.join
        }
        with(obj || {}) __p += '<div class="login-form-account">\n    <div class="form1_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</div>\n    <div class="form1_dd">\n        <input type="' + (null == (__t = obj.type || "text") ? "" : _.escape(__t)) + '" ', obj.name && (__p += ' name="' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '" '), __p += ' maxlength="50" class="signform_input">\n        <div class="signform_msg jmsg"></div>\n        <div class="signform_hint">' + (null == (__t = obj.hint) ? "" : _.escape(__t)) + "</div>\n    </div>\n</div>\n";
        return __p
    };
    return { email: { tpl: tpl }, password2: { name: "password", tpl: tpl } }
});;
define("pagelet/signbasic/signbasic.js", function(e) {
    $(function() {
        var i = e("pagelet/signbasic/config.js"),
            a = e("common/vali/vali.js"),
            t = e("common/util/util.js"),
            n = e("common/stip/stip.js"),
            o = e("pagelet/signform/field.js"),
            c = $("#pagelet_signbasic").nodes(),
            l = o.getEle("password2", i.password2),
            s = o.getEle("email", $.extend({ require: "请输入正确的邮箱地址", hint: "请填写本人常用邮箱，该邮箱将作为登录帐号", label: "邮箱" }, i.email)),
            r = o.getEle("captcha");
        r.onClick = function() { t.ajax("/email_register_post/", { email: $.trim(s.jvali.val()) }, function(e, i, a) { a.captcha && r.render(a.captcha) }) }, c.fields.append(s.jbox.add(l.jbox).add(r.jbox));
        var d = a(s.jvali.add(l.jvali).add(r.jvali));
        c.agree.checkbox(), c.submit.click(function() { c.form.submit() }), c.form.submit($.loadDone(function(e, i) {
            i.preventDefault(), d(function(i, a, o) {
                if (i) e(), a.focus();
                else {
                    if (!c.agree.checkbox()) return e(), n.alert("请同意用户协议");
                    t.ajax("/email_register_post/", o, function(i, a, t) { e(), 0 === i ? window.location = "/mobile_register/" : (t.captcha && r.render(t.captcha), n.alert(a)) })
                }
            })
        }))
    })
});;
define("pagelet/signform/type.js", function() {
    return function(i) {
        var e;
        return 1 == i ? e = [
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["media"],
            ["qualification_uri", { hint: wheei.markSafe('<span class="sred">上传品牌授权书、健康/财经等相关资质证明可提高审核通过率，最多可上传5张照片</span><span class="icon1_info" data-hovertitle="健康领域可提供执业医师证、公共营养师/心理咨询师资格证、记者证/采编许可证、公立医院医疗机构执业许可证等；财经领域可提供证券/基金/期货/保险执业资格证、投资分析师/理财规划师资格证、记者证/采编许可证等。"></span>'), require: !1, noconfirm: !0 }],
            ["notes", { name: "other_evidence_notes" }],
            ["company_name", { label: "组织名称", hint: "请与组织机构代码证或营业执照名称一致" }],
            ["license_uri"],
            ["authorize_uri"],
            ["location"],
            ["real_name", { label: "媒体联络人" }],
            ["identity_number", { label: "联络人身份证号码" }],
            ["identity_uri", { label: "联络人身份证照片" }],
            ["mobile", { label: "联络人电话" }],
            ["email"]
        ] : 2 == i ? e = [
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["notes"],
            ["location"],
            ["media"],
            ["real_name"],
            ["identity_number"],
            ["identity_front_uri"],
            ["identity_back_uri"],
            ["identity_uri", { label: "运营者半身照", img: "https://p1.pstatp.com/origin/17f40002ec74b09b0dcd", hint: '请参照<span class="slink" data-hovertitle-html data-hovertitle="' + Util.e('<img style="width:100%;display:block;" src="https://p1.pstatp.com/origin/17f40002ec74b09b0dcd">') + '">示例照片</span>拍摄<br/>大小不超过2M' }],
            ["qualification_uri", { noconfirm: !0, require: !1 }],
            ["mobile"],
            ["email"],
            ["qq"]
        ] : 3 == i ? e = [
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["location"],
            ["company_name", { label: "机构名称" }],
            ["authorize_uri", { hint: "", url: "http://s0.pstatp.com/site/image/pgc/jrttrzgh0720.doc" }],
            ["real_name"],
            ["identity_number"],
            ["identity_uri"],
            ["mobile"],
            ["email"]
        ] : 4 == i ? e = [
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["media"],
            ["company_name"],
            ["authorize_uri"],
            ["address"],
            ["location"],
            ["real_name"],
            ["identity_number"],
            ["identity_uri"],
            ["mobile"],
            ["email"]
        ] : 5 == i ? e = [
            ["name", { hint: "2-10个字，需与企业相关，包含但不限于商标、产品、服务名称" }],
            ["desc", { hint: "10-30个字，需要有明确的企业相关介绍，包括但不限于产品、服务的介绍。要求内容完整通顺，无特殊符号。请勿带有网址、电话、QQ、微信" }],
            ["avatar_uri", { hint: "请勿使用侵犯他人版权及非企业所拥有的注册商标、logo等<br/>请勿使用二维码，最大5M，200x200像素" }],
            ["media"],
            ["qualification_uri", { hint: wheei.markSafe('<span class="sred">上传品牌授权书、健康/财经等相关资质证明可提高审核通过率，最多可上传5张照片</span><span class="icon1_info" data-hovertitle="健康领域可提供执业医师证、公共营养师/心理咨询师资格证、记者证/采编许可证、公立医院医疗机构执业许可证等；财经领域可提供证券/基金/期货/保险执业资格证、投资分析师/理财规划师资格证、记者证/采编许可证等。"></span>'), require: !1, noconfirm: !0 }],
            ["company_name", { hint: "请与营业执照的名称保持一致" }],
            ["license_uri", { label: "企业营业执照扫描件", hint: "企业营业执照信息清晰<br/>最大2M" }],
            ["authorize_uri"],
            ["location"],
            ["real_name"],
            ["identity_number"],
            ["identity_uri"],
            ["mobile"],
            ["email"]
        ] : 6 == i ? e = [
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["media"],
            ["qualification_uri", { hint: wheei.markSafe('<span class="sred">上传品牌授权书、健康/财经等相关资质证明可提高审核通过率，最多可上传5张照片</span><span class="icon1_info" data-hovertitle="健康领域可提供执业医师证、公共营养师/心理咨询师资格证、记者证/采编许可证、公立医院医疗机构执业许可证等；财经领域可提供证券/基金/期货/保险执业资格证、投资分析师/理财规划师资格证、记者证/采编许可证等。"></span>'), require: !1, noconfirm: !0 }],
            ["company_name", { label: "组织名称" }],
            ["license_uri"],
            ["authorize_uri"],
            ["location"],
            ["real_name", { label: "组织联络人" }],
            ["identity_number", { label: "联络人身份证号码" }],
            ["identity_uri", { label: "联络人身份证照片" }],
            ["mobile", { label: "联络人电话" }],
            ["email"]
        ] : 7 == i && (e = [
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["media"],
            ["qualification_uri", { hint: wheei.markSafe('<span class="sred">上传品牌授权书、健康/财经等相关资质证明可提高审核通过率，最多可上传5张照片</span><span class="icon1_info" data-hovertitle="健康领域可提供执业医师证、公共营养师/心理咨询师资格证、记者证/采编许可证、公立医院医疗机构执业许可证等；财经领域可提供证券/基金/期货/保险执业资格证、投资分析师/理财规划师资格证、记者证/采编许可证等。"></span>'), require: !1, noconfirm: !0 }],
            ["company_name", { label: "组织名称", hint: "请与组织机构代码证或营业执照名称一致" }],
            ["license_uri"],
            ["authorize_uri"],
            ["location"],
            ["real_name", { label: "媒体联络人" }],
            ["identity_number", { label: "联络人身份证号码" }],
            ["identity_uri", { label: "联络人身份证照片" }],
            ["mobile", { label: "联络人电话" }],
            ["email"]
        ]), e
    }
});;
define("pagelet/signexpress/type.js", function(e) {
    var i = e("pagelet/signform/type.js"),
        n = { email: !1, notes: !1, other_evidence_notes: !1, license_uri: !1, address: !1, location: !0, position: !1, website: !1, qq: !1, identity_uri: !1, identity_front_uri: !1, identity_back_uri: !1 },
        r = { 1: { website: !0, license_uri: !0 }, 3: { authorize_uri: !1, website: !0 }, 5: { license_uri: !0 }, 7: { website: !0, license_uri: !0 }, 6: { license_uri: !0 } };
    return function(e) {
        var t = i(e),
            s = [];
        s.push(["email", { label: "登录邮箱", hint: "请填写本人常用邮箱，该邮箱将作为登录帐号", require: "请输入正确的邮箱地址" }]), s.push(["password2", { name: "password" }]);
        for (var u = $.extend({}, n, r[e]), a = 0; a < t.length; a++) {
            var o, l = t[a];
            o = l[1] ? l[1].name || l[0] : l[0], u[o] === !1 || s.push(l)
        }
        return s
    }
});;
define("pagelet/signexpress/signexpress.js", function(e) {
    var a = e("common/util/util.js"),
        t = e("common/vali/vali.js"),
        n = e("common/stip/stip.js"),
        i = e("pagelet/signform/field.js"),
        r = e("pagelet/signexpress/type.js");
    return function(e) {
        var s = $("#pagelet_signexpress").nodes(),
            o = e.media_type,
            u = r(o);
        e.weixin_invite && u.push(["weixin", { name: "weixin_source" }]);
        var p = i(u);
        s.start.after($.map(p, function(e) {
            return e.jbox.toArray()
        }));
        var l = $($.map(p, function(e) {
            return e.jvali.toArray()
        }));
        s.agree.checkbox();
        var c = t(l);
        s.submit.click($.loadDone(function(t, i) {
            i.preventDefault(), c(function(i, r, o) {
                if (i) t(), $("body").animate({ scrollTop: r.offset().top - 10 }, 200, function() { r.focus() });
                else {
                    if (!s.agree.checkbox()) return t(), alert("请同意用户协议");
                    var u = {};
                    u.media_type = e.media_type, u.invite_code = e.invite_code, u.website_grant_auth_status = window.website_grant_auth_status;
                    for (var p = [], l = 0; l < o.length; l++) {
                        var c = o[l];
                        "avatar_uri" === c.name ? (p.push(c), p.push({ name: "avatar_url", value: c.value })) : "location" === c.name ? $.extend(u, c.value) : "media" === c.name ? _.each(c.value, function(e) { p.push(e) }) : p.push(c)
                    }
                    for (var l in u) p.push({ name: l, value: u[l] });
                    a.ajax("/greenway_post/", p, function(e, a) { 0 === e ? (window.location = "/", n.popupTip({ msg: "创建成功", status: !0, duration: -1 })) : (t(), n.alert(a)) })
                }
            })
        }))
    }
});;
define("pagelet/signforeign/type.js", function() {
    return function(e) {
        return 2 == e ? [
            ["email", { label: "登录邮箱", hint: "请填写本人常用邮箱，该邮箱将作为登录帐号", require: "请输入正确的邮箱地址" }],
            ["password2", { name: "password" }],
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["notes"],
            ["address", { label: "联系地址" }],
            ["media"],
            ["real_name"],
            ["input", { name: "identity_number", label: "运营者证件号码", require: "请输入证件号码", hint: "身份证、驾照或护照" }],
            ["identity_uri", { label: "运营者证件照片", hint: "请参照示例手持身份证件拍摄<br/>身份证上的信息需清晰可见<br/>大小不超过2M" }],
            ["qualification_uri", { tr: "其他证明", hint: "相关行业从业证书，或雇主证明和工作名片", require: "请上传证明材料" }],
            ["input", { name: "mobile", label: "运营者电话", require: "请输入运营者电话" }],
            ["qq", { name: "qq" }]
        ] : [
            ["email", { label: "登录邮箱", hint: "请填写本人常用邮箱，该邮箱将作为登录帐号", require: "请输入正确的邮箱地址" }],
            ["password2", { name: "password" }],
            ["name"],
            ["desc"],
            ["avatar_uri"],
            ["company_name", { label: "机构名称", hint: "请与营业执照的名称保持一致" }],
            ["qualification_uri", { tr: "机构资质证明", hint: "企业注册证明以及中文翻译件", require: "请上传证明材料" }],
            ["authorize_uri", { url: "http://s0.pstatp.com/site/image/pgc/20160420.doc" }],
            ["website", { label: "网站", require_check: !1, require: !0 }],
            ["address", { label: "机构地址" }],
            ["media"],
            ["real_name"],
            ["position"],
            ["input", { name: "identity_number", label: "运营者证件号码", require: "请输入证件号码", hint: "身份证、驾照或护照" }],
            ["identity_uri", { label: "运营者证件照片", hint: "请参照示例手持身份证件拍摄<br/>身份证上的信息需清晰可见<br/>大小不超过2M" }],
            ["input", { name: "mobile", label: "运营者电话", require: "请输入运营者电话" }],
            ["qq", { name: "qq" }]
        ]
    }
});;
define("pagelet/signforeign/signforeign.js", function(e) {
    var a = e("common/util/util.js"),
        n = e("common/vali/vali.js"),
        i = e("common/stip/stip.js"),
        t = e("pagelet/signform/field.js"),
        o = e("pagelet/signforeign/type.js");
    return function(e) {
        var r = $("#pagelet_signforeign").nodes(),
            u = e.media_type,
            s = o(u);
        e.weixin_invite && s.push(["weixin", { name: "weixin_source" }]);
        var l = t(s);
        r.start.after($.map(l, function(e) {
            return e.jbox.toArray()
        }));
        var c = $($.map(l, function(e) {
            return e.jvali.toArray()
        }));
        r.agree.checkbox();
        var f = n(c);
        r.submit.click($.loadDone(function(n, t) {
            t.preventDefault(), f(function(t, o, u) {
                if (t) n(), $("body").animate({ scrollTop: o.offset().top - 10 }, 200, function() { o.focus() });
                else {
                    if (!r.agree.checkbox()) return n(), alert("请同意用户协议");
                    var s = {};
                    s.media_type = e.media_type, s.invite_code = e.invite_code, s.website_grant_auth_status = window.website_grant_auth_status;
                    for (var l = [], c = 0; c < u.length; c++) {
                        var f = u[c];
                        "avatar_uri" === f.name ? (l.push(f), l.push({ name: "avatar_url", value: f.value })) : "qualification_uri" === f.name ? l.push({
                            name: f.name,
                            value: JSON.stringify($.map(f.value, function(e) {
                                return e.web_uri
                            }))
                        }) : "location" === f.name ? $.extend(s, f.value) : "media" === f.name ? _.each(f.value, function(e) { l.push(e) }) : l.push(f)
                    }
                    for (var c in s) l.push({ name: c, value: s[c] });
                    a.ajax("/abroad_post/", l, function(e, a) { 0 === e ? (window.location = "/", i.popupTip({ msg: "创建成功", status: !0, duration: -1 })) : (n(), i.alert(a)) })
                }
            })
        }))
    }
});;
define("pagelet/signform/sign_use_ocr_in_pc.js", function(t) {
    var i = t("common/util/util.js"),
        n = t("common/stip/stip.js"),
        a = t("common/vali/vali.js"),
        e = t("pagelet/signform/field.js"),
        o = [
            ["real_name"],
            ["identity_number"],
            ["identity_front_uri"],
            ["identity_back_uri"],
            ["identity_uri", { label: "运营者半身照", img: "https://p1.pstatp.com/origin/17f40002ec74b09b0dcd", hint: '请参照<span class="slink" data-hovertitle-html data-hovertitle="' + i.e('<img style="width:100%;display:block;" src="https://p1.pstatp.com/origin/17f40002ec74b09b0dcd">') + '">示例照片</span>拍摄<br/>大小不超过2M' }]
        ];
    return function(t) {
        $("body").hoverTitle();
        var r = t.form,
            s = t.key,
            c = t.mediaType,
            l = $("#pagelet_sign_use_ocr_in_pc").nodes(),
            p = e(o, r);
        l.start.after($.map(p, function(t) {
            return t.jbox.toArray()
        }));
        var m = $('<tr class="signform_pc_name signform_info"><td class="signform_dt">头条号名称</td><td class="signform_dd">' + t.mediaName + "</td></tr>");
        l.start.after(m),
            function() { $(".shead_status").html("") }();
        var d = $($.map(p, function(t) {
                return t.jvali.toArray()
            })),
            f = a(d);
        l.submit.click($.loadDone(function(t, a) {
            a.preventDefault(), f(function(a, e, o) {
                if (a) t(), $("body").animate({ scrollTop: e.offset().top - 10 }, 200, function() { e.focus() });
                else {
                    var r = {};
                    r.media_type = c, r.key = s;
                    for (var l = [], p = 0; p < o.length; p++) {
                        var m = o[p];
                        l.push(m)
                    }
                    for (var d in r) l.push({ name: d, value: r[d] });
                    i.ajax("/pgc/use_ocr_in_pc_post/", l, function(i, a) { 0 === i ? (window.location = "/", n.popupTip({ msg: "申请成功", status: !0, duration: -1 })) : (t(), n.alert(a)) })
                }
            })
        }))
    }
});;
define("pagelet/signform/signform.js", function(require, exports, module) {
    var Tab = require("common/ui/tab.js"),
        Util = require("common/util/util.js"),
        Stip = require("common/stip/stip.js"),
        Vali = require("common/vali/vali.js"),
        Dialog = require("common/popup/dialog.js"),
        phoneCodeTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item">\n    <td class="signform_dt">\n        手机验证\n    </td>\n    <td>\n        <div class="phone-number">\n            ' + (null == (__t = obj.phone) ? "" : _.escape(__t)) + '\n        </div>\n    </td>\n</tr>\n<tr class="signform_sub">\n    <td></td>\n    <td>\n        <div class="captcha-container ', obj.captcha.length && (__p += "picture-active"), __p += '">\n            <input data-node="captcha_picture" type="text" class="picture-captcha captcha" id="captcha" name="captcha" autocomplete="off" spellcheck="false" placeholder="验证码">\n            <div class="img-wrap"><img src="data:image/gif;base64,' + (null == (__t = obj.captcha) ? "" : _.escape(__t)) + '" alt="" class="right"></div>\n            <span class="hint">请输入正确的图片验证码</span>\n        </div>\n        <div class="code-container">\n            <input type="text" class="captcha" id="code" name="code" autocomplete="off" spellcheck="false" placeholder="手机验证码">\n            <span id="code-btn" class="code-btn" data-node="code_btn">获取验证码</span>\n        </div>\n    </td>\n</tr>\n';
            return __p
        },
        typefields = require("pagelet/signform/type.js"),
        fieldFactory = require("pagelet/signform/field.js"),
        codeTimer = null,
        isCodeSending = !1,
        isPictureCaptcha = !1,
        isCodeCheck = !1,
        ocrMediaTypes = [2];
    return function(e) {
        function i() {
            var e = window.location.href,
                i = "need_ad_info=";
            return -1 !== e.indexOf(i) && e.split(i)[1] ? Number(e.split(i)[1].charAt(0)) || 0 : 0
        }

        function a(e) {
            var i = 60;
            codeTimer = setInterval(function() {
                return 0 == i ? (clearInterval(codeTimer), isCodeSending = !1, codeTimer = null, void e.removeClass("active").html("获取验证码")) : (e.addClass("active").html(i + "s重新获取"), void i--)
            }, 1e3)
        }

        function t(e) {
            if (!isCodeSending) {
                var i = $("#code-btn"),
                    t = $(".captcha-container");
                $.ajax({ url: "/get_activate_code/", type: "POST", dataType: "json", data: e }).done(function(e) { "success" == e.message ? (isCodeSending = !0, a(i)) : "请输入图片验证码" == e.message ? (isPictureCaptcha = !0, t.show(), isCodeSending = !1, t.find(".img-wrap").html('<img src="data:image/gif;base64,' + e.data.captcha + '" alt="" class="right">')) : Stip.alert(e.reason) }).fail(function() { Stip.alert("网络错误，请重试") })
            }
        }

        function n() { clearInterval(codeTimer), $("#code-btn").html("获取验证码").removeClass("active"), codeTimer = null, isCodeSending = !1 }
        7 == e.mediaType && (e.mediaType = 1), isCodeCheck = e.form.isCode, $("body").hoverTitle();
        var r = Number(e.mediaType),
            o = e.form,
            s = $("#pagelet_signform").nodes();
        o.qualification = { code: o.certificate_no, name: o.certificate_name };
        var c = fieldFactory(typefields(r), o);
        $("#pagelet_signform").on("click", "#code-btn", function() {
            var e = $("#captcha"),
                i = e.siblings(".hint");
            isPictureCaptcha ? e.val().length ? (i.hide(), t({ type: 3, mobile: "", picture_code: e.val() })) : i.show() : (i.hide(), t({ type: 3, mobile: "", picture_code: "" }))
        });
        var d = $(".signform_dialog_demo_video");
        $("#pagelet_signform").on("click", ".signform_demo_video_close", function() { d.fadeOut(200), d.find("video")[0].pause() });
        var l = ["", "找不到“实名认证”入口", "提示拍照信息不正确不能进入下一步", "其它原因"];
        s.start.after($.map(c, function(e) {
                return "name" === e.name && e.jbox.find(".jhint").append('。见<a class="slink" target="_blank"href="https://mp.toutiao.com/static/v2/resource/pgc/pgc_white_paper/#account-registration-failed">《头条号名称注册规范》</a>'), e.jbox.toArray()
            })),
            function() {
                function e(e) {
                    p.jbox.toggle(!e), p.jvali.data("vali_require", !e);
                    for (var i = 0; i < u.length; i++) u[i].jbox.toggle(!e), u[i].jvali.data("vali_require", !e)
                }

                function i() {
                    var e = g.jbox.find("select").eq(0).val();
                    "news_health" == e || "news_finance" == e ? v.show() : v.hide()
                }

                function a(e) {
                    var i = c.filter(function(e) {
                        return "media" == e.name
                    })[0];
                    if (i) {
                        var a = i.jbox.find("select:first");
                        e || "news_society" != a.val() || (a.val(""), a.change()), e ? ($(s.opt_society).data("data", s.opt_society.data), s.opt_society && a.find('option[value="news_culture"]').after(s.opt_society)) : (s.opt_society = a.find('option[value="news_society"]')[0], s.opt_society.data = $(s.opt_society).data("data"), a.find('option[value="news_society"]').remove());
                        var t = i.jvali;
                        t.data("jchecks_only", !e), "news_military" == a.val() && a.change()
                    }
                }
                $(".shead_status").html("");
                var t, n, d, p = c.filter(function(e) {
                        return "real_name" == e.name
                    })[0],
                    u = c.filter(function(e) {
                        return "identity_number" == e.name || "identity_uri" == e.name || "identity_front_uri" == e.name || "identity_back_uri" == e.name
                    });
                if (-1 !== ocrMediaTypes.indexOf(r) && isCodeCheck) {
                    var f = $(phoneCodeTpl({ phone: o.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1xxxx$2"), captcha: "" }));
                    s.agree.closest("tr").before(f)
                }
                if (-1 !== ocrMediaTypes.indexOf(r))
                    if (o.use_ocr_in_pc) n = $('<tr class="signform_pc_reason require"><td class="signform_dt">客户端未完成理由<div class="signform_dt_msg jmsg"></div></td><td class="signform_checkline"><div><div class="form1_checkbox" data-tab="1">' + l[1] + '</div></div><div><div class="form1_checkbox" data-tab="2">' + l[2] + '</div></div><div><div class="form1_checkbox" data-tab="3">' + l[3] + '</div><div class="reason_detail"></div></div></td></tr>'), s.jpcreason = n, Tab(n.find("[data-tab]"), $(), function(e) { s.use_pc_reason = e, n.find(".jmsg").html(""), n.find(".reason_detail").html(3 == e ? '<input type="text" class="signform_input" placeholder="请输入具体原因，必填" name="use_ocr_in_pc_reason">' : "") }), $(p.jbox[0]).before(n), d = $('<tr class="signform_pc_hint"><td></td><td><div class="signform_hint">注：PC端审核需要5个工作日完成，请耐心等待。</div></td></tr>'), $(".signform_agree_tr").after(d), $(".signform_submit").attr("ga", "实名未完成提交"), e(!1);
                    else {
                        var m = '<div><div class="signform_hint">提交本页面信息后，使用当前登录方式（登录此头条号所使用的微博、微信、QQ、手机号等），登录<span class="red_text">Android 6.1.8或iOS 6.1.9及以上版本</span>的今日头条客户端，点击「我的」-「实名认证」进行认证。</div></div>';
                        o.has_complete_ocr && (m = '<div><div class="signform_complete"><img src="https://p1.pstatp.com/origin/16810004080b322a2b64"/><span>已完成认证</span></div><div class="signform_hint"><table><tr><td>运营者姓名：' + o.real_name + "</td><td>身份证号：" + o.identity_number + '</td></tr><tr><td>运营者身份证正面：<a target="_blank" href="https://p1.pstatp.com/origin/' + (o.identity_front_uri.web_uri || "6329/4231483611") + '">点此查看大图</a></td><td>运营者身份证反面：<a target="_blank" href="https://p1.pstatp.com/origin/' + (o.identity_back_uri.web_uri || "6329/4231483611") + '">点此查看大图</a></td></tr><tr><td colspan="2">运营者身份证照片：<a target="_blank" href="https://p1.pstatp.com/origin/' + (o.identity_uri.web_uri || "6329/4231483611") + '">点此查看大图</a></td></tr></table></div></div>'), t = $('<tr class="signform_use_app"><td class="signform_dt">身份信息<div class="signform_dt_msg jmsg"></div></td><td class="signform_checkline">' + m + "</td></tr>"), $(p.jbox[0]).before(t), $(".signform_submit").attr("ga", "实名认证提交"), e(!0)
                    }
                var v = c.filter(function(e) {
                        return "qualification" == e.name
                    })[0],
                    g = c.filter(function(e) {
                        return "media" == e.name
                    })[0];
                if (3 != r && 4 != r && v && g && (g.jbox.on("change", function() { g.jvali.data("vali_func")(i) }), g.jvali.data("vali_func")(i)), 3 != r && 1 != r && a(!1), 1 == r) {
                    var h = $('<tr class="signform_item require"><td class="signform_dt signform_media_type">媒体属性</td><td class="signform_checkline"><div><div class="form1_checkbox" data-tab="1">群媒体</div><span class="signform_linetip">以公司形式专注于生产的小型创作团体</span></div></div><div><div class="form1_checkbox" data-tab="7">新闻媒体</div><span class="signform_linetip">报纸、杂志、电台、电视台、门户网站等新闻单位。包括大媒体下属品牌或者子栏目</span></div></td></tr>');
                    s.start.after(h);
                    var b = _.findWhere(c, { name: "other_evidence_notes" }),
                        y = b.jvali,
                        x = b.jbox,
                        j = { vali_require: y.data("vali_require"), vali_func: y.data("vali_func") },
                        k = Tab(h.find("[data-tab]"), $(), function(e) { r = e, 1 == r ? (x.show(), y.data(j), a(!1)) : (x.hide(), y.data("vali_require", null).data("vali_func", function(e) { e(null, "") }), a(!0)) });
                    k(1)
                }
            }(), s.agree.checkbox(), 5 == r ? s.ads_agree.checkbox() : s.ads_agree.closest("tr").remove();
        var p = $($.map(c, function(e) {
                return -1 === ocrMediaTypes.indexOf(r) || o.use_ocr_in_pc || "real_name" != e.name && "identity_number" != e.name && "identity_uri" != e.name && "identity_front_uri" != e.name && "identity_back_uri" != e.name ? e.jvali.toArray() : null
            })),
            u = Vali(p);
        s.submit.click($.loadDone(function(e, a) {
            a.preventDefault(), u(function(a, t, c) {
                if (a) e(), $("body").animate({ scrollTop: t.offset().top - 10 }, 200, function() { t.focus() });
                else {
                    if (!s.agree.checkbox()) return e(), Stip.alert("请同意用户协议");
                    if (s.jpcreason && !s.use_pc_reason) return e(), s.jpcreason.find(".jmsg").html("必填项"), $("body").animate({ scrollTop: s.jpcreason.offset().top - 30 }, 200), Stip.alert("请选择客户端未完成认证理由！");
                    var p = $(".reason_detail input");
                    if (s.jpcreason && 3 == s.use_pc_reason && !p.val()) return e(), p.addClass("error"), $("body").animate({ scrollTop: p.offset().top - 30 }, 200), Stip.alert("请填写未完成认证具体原因！");
                    var u = {};
                    u.media_type = r, u.website_grant_auth_status = window.website_grant_auth_status, u.weixin = o.weixin, u.weixin_verify_link = o.weixin_verify_link, -1 !== ocrMediaTypes.indexOf(r) && (u.has_complete_ocr = o.has_complete_ocr, u.use_ocr_in_pc = o.use_ocr_in_pc, o.use_ocr_in_pc ? (u.use_ocr = 0, u.use_ocr_in_pc_reason = 3 == s.use_pc_reason ? p.val() : l[s.use_pc_reason]) : (u.use_ocr = 1, u.identity_number = o.identity_number, u.identity_uri = o.identity_uri.web_uri || "", u.identity_url = o.identity_uri.web_url || "", u.identity_front_uri = o.identity_front_uri.web_uri || "", u.identity_back_uri = o.identity_back_uri.web_uri || "", u.real_name = o.real_name)), 5 == r && (u.be_ader = s.ads_agree.checkbox() ? 1 : 0, u.from_ad = i());
                    for (var f = [], m = 0; m < c.length; m++) {
                        var v = c[m];
                        "avatar_uri" === v.name ? (f.push(v), f.push({ name: "avatar_url", value: v.value })) : "qualification_uri" === v.name ? f.push({
                            name: v.name,
                            value: JSON.stringify($.map(v.value, function(e) {
                                return e.web_uri
                            }))
                        }) : "qualification" === v.name ? (f.push({
                            name: "qualification_uri",
                            value: JSON.stringify(v.value.uri.map(function(e) {
                                return e.web_uri
                            }))
                        }), f.push({ name: "certificate_name", value: v.value.name }), f.push({ name: "certificate_no", value: v.value.code })) : "location" === v.name ? $.extend(u, v.value) : "media" === v.name ? _.each(v.value, function(e) { f.push(e) }) : f.push(v)
                    }
                    for (var g in u) f.push({ name: g, value: u[g] });
                    if (isCodeCheck) {
                        var h = $("#captcha"),
                            b = $("#code");
                        if (isPictureCaptcha && !h.val().length) return Stip.alert("请填写图片验证码"), void e();
                        if (!b.val().length) return Stip.alert("手机验证码错误"), void e();
                        isPictureCaptcha && f.push({ name: "picture_code", value: h.val() }), f.push({ name: "activate_code", value: b.val() })
                    }
                    Util.ajax("/pgc/new_media_account_post/", f, function(i, a) {
                        if (0 === i)
                            if (-1 === ocrMediaTypes.indexOf(r) || o.use_ocr_in_pc || o.has_complete_ocr) window.location = "/", Stip.popupTip({ msg: "申请成功", status: !0, duration: -1 });
                            else {
                                var t = '<div class="signform_dialog_content"><div class="signform_dialog_text"><div class="dialog_title">请参照示例视频，通过客户端验证身份，完成头条号注册</div><div class="dialog_p">请使用注册头条号时所使用的登录方式（手机、微博、微信、QQ等）<br/>登录今日头条<span class="red_text">Android 6.1.8或iOS 6.1.9</span>及以上版本客户端</div></div><img class="signform_dialog_img" src="https://p1.pstatp.com/origin/2eb8000043aba54a7169" /><a class="signform_dialog_link" target="_blank" href="/profile_introduction/selfservice/signup_use_ocr">常见问题</a></div>',
                                    c = Dialog({ btns: [{ type: "ok", click: function() { c.remove(), window.location = "/" } }], content: t }).show();
                                $(".signform_dialog_img").on("click", function() { d.fadeIn(200), d.find("video")[0].play() })
                            }
                        else if (9999 === i) {
                            if (-1 !== ocrMediaTypes.indexOf(r) && !isCodeCheck) {
                                var l = $(phoneCodeTpl({ phone: o.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1xxxx$2"), captcha: "" }));
                                s.agree.closest("tr").before(l), isCodeCheck = !0, isPictureCaptcha = !1, e()
                            } - 1 !== ocrMediaTypes.indexOf(r) && isCodeCheck && (e(), Stip.alert("验证码为空，请填写验证码"))
                        } else e(), Stip.alert(a), "短信验证码错误，请重试" == a && isCodeSending && n()
                    })
                }
            })
        }))
    }
});;
define("pagelet/signform/weixin_invite/weixin_invite.js", function(require, exports, module) {
    var weixin_invite_tpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item weixin ', obj.require && (__p += " require "), __p += ' ">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td><input type="' + (null == (__t = obj.type || "text") ? "" : _.escape(__t)) + '" class="signform_input" ', obj.name && (__p += ' name="' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '" '), __p += ' ><a href="http://toutiao.com/i6282535617578402306/" target="_blank">接入说明</a></td>\n</tr>\n<tr class="signform_sub weixin">\n    <td></td>\n    <td>\n        <div class="form1_msg jmsg"></div>\n        <div class="signform_hint jhint">' + (null == (__t = obj.hint || "") ? "" : _.escape(__t)) + '</div>\n        <ul>\n            <li>\n                <i class="login"></i>\n                <span>1.登陆公众号</span>\n                <span class="sub">登陆具有原创功能的微信公众号</span>\n                <i class="border"></i>\n            </li>\n            <li>\n                <i class="manage"></i>\n                <span>2.打开素材管理</span>\n                <span class="sub">在左侧导航点击素材管理</span>\n                <i class="border"></i>\n            </li>\n            <li>\n                <i class="edit"></i>\n                <span>3.编写文字</span>\n                <span class="sub">编辑一篇为《开通头条号》的消息</span>\n                <i class="border"></i>\n            </li>\n            <li>\n                <i class="copy"></i>\n                <span>4.复制地址链接</span>\n                <span class="sub">将该链接填写到输入框</span>\n            </li>\n        </ul>\n    </td>\n</tr>';
            return __p
        },
        original_article_tpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<tr class="signform_item weixin ', obj.require && (__p += " require "), __p += ' ">\n    <td class="signform_dt">' + (null == (__t = label) ? "" : _.escape(__t)) + '</td>\n    <td><input type="' + (null == (__t = obj.type || "text") ? "" : _.escape(__t)) + '" class="signform_input" ', obj.name && (__p += ' name="' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '" '), __p += ' ><a href="http://toutiao.com/i6282536360641298945/" target="_blank">填写说明</a></td>\n</tr>';
            return __p
        },
        Util = (require("common/ui/tab.js"), require("common/util/util.js")),
        Stip = require("common/stip/stip.js"),
        Vali = require("common/vali/vali.js"),
        typefields = require("pagelet/signform/type.js"),
        fieldFactory = require("pagelet/signform/field.js");
    return function(e) {
        $("body").hoverTitle();
        var n = 2,
            i = $("#pagelet_signform").nodes(),
            t = typefields(n);
        t.push(["url", { tpl: weixin_invite_tpl, require: "请填写一篇文章链接", label: "微信接入", name: "weixin_url", hint: "请填写一篇文章链接" }]), t.push(["url", { tpl: original_article_tpl, require: "请填写一篇原创文章链接", label: "原创文章链接", name: "article_url", hint: "请填写一篇原创文章链接" }]), t.unshift(["password2", { name: "password" }]), t.unshift(["email", { require: "请填写邮箱", label: "登录邮箱", name: "email", hint: "请填写本人常用邮箱，该邮箱将作为登陆帐号" }]), t.splice(13, 2), t.splice(5, 1);
        var a = fieldFactory(t, {});
        i.start.after($.map(a, function(e) {
            return e.jbox.toArray()
        })), i.agree.checkbox();
        var r = $($.map(a, function(e) {
                return e.jvali.toArray()
            })),
            l = Vali(r);
        i.submit.click($.loadDone(function(t, a) {
            a.preventDefault(), l(function(a, r, l) {
                if (a) t(), $("body").animate({ scrollTop: r.offset().top - 10 }, 200, function() { r.focus() });
                else {
                    if (!i.agree.checkbox()) return t(), Stip.alert("请同意用户协议");
                    var s = {};
                    s.media_type = n, s.invite_code = e.invite_code;
                    for (var o = [], p = 0; p < l.length; p++) {
                        var u = l[p];
                        "avatar_uri" === u.name ? (o.push(u), o.push({ name: "avatar_url", value: u.value })) : "qualification_uri" === u.name ? o.push({ name: u.name, value: JSON.stringify([u.value]) }) : "location" === u.name ? $.extend(s, u.value) : "media" === u.name ? _.each(u.value, function(e) { o.push(e) }) : o.push(u)
                    }
                    for (var p in s) o.push({ name: p, value: s[p] });
                    Util.ajax("/new_referral_invite_post/", o, function(e, n) { clearInterval(m), i.invite_hint_modal.fadeOut(), 0 === e ? window.location = "/" : (t(), Stip.alert(n)) }), i.invite_hint_modal.fadeIn();
                    var c = i.wait_time.text(),
                        m = setInterval(function() { i.wait_time.text(c--), 0 === c && (clearInterval(m), i.invite_hint_modal.fadeOut()) }, 1e3)
                }
            })
        }))
    }
});;
define("pagelet/signstep/signstep.js", function() {});;
define("pagelet/signtype/signtype.js", function() {! function() { $(".shead_status").html("") }() });;
define("pagelet/sort/sort.js", function(e, t, n) { n.exports = Pagelet.extend({ el: "#pagelet-sort", events: {}, init: function() {} }) });;
define("pagelet/spread/apply.js", function(t) {
    var o = t("common/sstep/sstep.whe"),
        n = t("common/util/util.js"),
        e = t("common/stip/stip.js"),
        i = t("common/ui/tab.js"),
        a = t("common/popup/dialog.js");
    return function(t) {
        t.is_bind_mobile || a({ title: "提示", content: "需要绑定手机号才能继续申请", btns: [{ type: "ok", text: "绑定", click: function() { window.location = "/profile_v2/account-settings" } }, { type: "cancel", click: function() { window.history.back() } }] }).show();
        var c = { agreement: 0, form: 1 },
            p = i($(), $("#spread_apply_content [data-tab]"), function(t) { $("#spread_apply_step").html(o({ step: c[t], arr: ["确认协议", "完善材料"] })) });
        setTimeout(function() { p("agreement") }, 1), $("#agreement_submit").click($.loadDone(function(t) {
            n.ajax("/spread/confirm/", {}, function(o, n) {
                return t(), 0 != o ? e.alert(n) : void e.popupTip({ msg: "开通成功", status: !0, duration: 0, callback: function() { window.location = "https://ad.toutiao.com/pgc_promotion/overview/" } })
            })
        }))
    }
});;
define("pagelet/spread/basic.js", function(t) {
    var e = t("common/util/util.js"),
        a = (t("common/stip/stip.js"), t("pagelet/daterange/daterange.js")),
        n = t("common/popup/dialog.js");
    return function() {
        function t() {
            e.ajax("/spread/transactions/", s, function(t, e, a) {
                return 0 != t ? void n({ title: "提示", content: e, btns: ["ok"] }).show() : void i.list.html(o(a))
            })
        }
        var i = $("#spread_basic").nodes(),
            o = wheei(i.tpl.html());
        i.invoice_btn.click($.loadWrap(function() {
            i.invoice_btn.hasClass("disabled") || e.ajax("/spread/invoice/", {}, function(t, e) {
                return 0 != t ? void n({ title: "提示", content: e, btns: ["ok"] }).show() : (i.invoice_value.text("0"), i.invoice_btn.addClass("disabled"), void n({ title: "提示", content: "开票成功", btns: ["ok"] }).show())
            })
        }));
        var d = new Date;
        d.d("-1");
        var s = { start_date: d.clone().d("-6").format("date"), end_date: d.format("date"), pagenum: 1 };
        a({ start_date: s.start_date, end_date: s.end_date, relative: -1, onchange: function(e) { s.start_date = e.start_date, s.end_date = e.end_date, s.pagenum = 1, t() } }).trigger()
    }
});;
define("pagelet/spread/invoice.js", function(e) {
    var i = e("pagelet/signform/field.js"),
        n = e("common/vali/vali.js"),
        t = e("common/util/util.js"),
        o = e("common/stip/stip.js");
    return function(e) {
        function a() { l.fields.html(s(r)) }
        var r = e.form,
            l = $("#spread_invoice").nodes(),
            s = wheei(l.tpl.html());
        l.editbtn.click(function() { l.show.hide(), l.edit.show(), _.each(c, function(e) { i.setValue(e.jvali, r[e.name]) }) }), a(r);
        var c = i([
            ["input", { name: "name", label: "姓名" }],
            ["identity_number", { label: "身份证号" }],
            ["mobile"],
            ["input", { name: "address", label: "地址" }]
        ]);
        l.form_start.after($($.map(c, function(e) {
            return e.jbox.toArray()
        })));
        var d = n($($.map(c, function(e) {
            return ("name" === e.name || "identity_number" === e.name) && e.jvali.prop("disbled", !0), e.jvali.toArray()
        })));
        l.cancel.click(function() { l.edit.hide(), l.show.show() }), l.save.click($.loadDone(function(e) {
            d(function(i, n, s) {
                return i ? e() : void t.ajax("/spread/save_invoice_info/", s, function(i, n) {
                    return e(), 0 != i ? void o.alert(n) : (r = $.so(s), a(), l.edit.hide(), void l.show.show())
                })
            })
        }))
    }
});;
define("pagelet/spread/recharge.js", function(n) {
    var o = n("common/popup/dialog.js"),
        e = n("common/popup/input.whe"),
        i = n("common/vali/vali.js");
    return function(n) {
        var t = "原创作者可享受充值每满100元返50元的优惠，不满100元部分不返现";
        n.claim_origin_permission || (t = "");
        var a = o({ title: "充值", content: t, btns: [{ type: "ok", click: function() { p(function(n, o, e) { n || (window.ga && window.ga("send", "号外充值确定按钮点击"), window.open("//ad.toutiao.com/pgc/recharge/?" + $.param(e)), a.remove(), l.show()) }) } }, { type: "cancel", click: function() { window.ga && window.ga("send", "号外充值取消按钮点击"), a.remove() } }] }),
            c = i.simple({ tpl: e, name: "amt", label: "充值金额", require: "请填写金额", hint: "请填写金额", func: i.returnWrap(i._int) }),
            p = i(c.jvali);
        a.jele.find(".spopup_dialog_body").append(c.jbox), a.show();
        var l = o({ title: "提示", content: "请在新开页面完成充值后选择：", btns: [{ type: "ok", text: "充值成功", click: function() { window.location.reload() } }, { type: "cancel", text: "充值失败", click: function() { window.location.reload() } }] })
    }
});;
define("pagelet/spread/summary.js", function(e) {
    return function(a) {
        var t = e("common/pager/pager.js"),
            s = e("common/util/util.js"),
            r = (e("common/stip/stip.js"), e("common/popup/popup.js")),
            c = e("pagelet/spread/recharge.js"),
            n = $("#spread_summary").nodes(),
            l = $("#spread_summary_release"),
            i = wheei(n.tpl.html());
        n.recharge.click(function() { c(a) }), l.on("click", ".spread_summary_release_article", function(e) {
            var a = $(this),
                t = $(this).attr("item"),
                s = !0;
            t ? (e.preventDefault(), $.ajax({ type: "get", url: "/spread/check_article/?item_id=" + t, success: function(e) { s = e && e.data && e.data.can_spread, s ? document.location.href = a.attr("href") : alert("未推荐的文章暂时无法投放，敬请期待") } })) : alert("暂时无法投放")
        }), n.ad_stats.hoverTitle(), t({
            jele: n.pager,
            cb: function(e, a) {
                s.ajax("/spread/ad_stats/", { pagenum: e }, function(e, t, c) {
                    if (0 == e) {
                        n.ad_stats.html(i(c));
                        var l = n.ad_stats.nodes();
                        l.sw && l.sw.each(function() {
                            var e = $(this);
                            e.checkbox(), e.on("change", function() {
                                var a = e.checkbox(),
                                    t = e.closest("tr").data("id");
                                s.ajax({ url: "/spread/update_ad_status/", method: "GET", data: { ad_id: t, opt: a ? "enable" : "disable" }, callback: function(t, s) { 0 != t && (e.checkbox(!a), r.alert(s)) } })
                            })
                        }), a({ length: c.total_pagenum })
                    }
                })
            }
        });
        var o = $("#spread_summary_release").nodes(),
            p = wheei(o.tpl.html());
        n.release.click(function() { o.dialog.modal() }), t({ jele: o.pager, cb: function(e, a) { s.ajax("/spread/select_article/", { pagenum: e }, function(e, t, s) { 0 == e && (o.list.html(p(s.article_list)), a({ length: s.total_pagenum })) }) } })
    }
});;
define("pagelet/spread_activity/spread_activity.js", function(t) {
    var o = t("common/popup/dialog.js"),
        i = "http://toutiao.com/i6332710224884924930/",
        e = function(t) { this.options = t };
    return e.prototype = {
        init: function() { this.checkLocalStorageForPop() && this.popUpDialog() },
        checkLocalStorageForPop: function() {
            var t = window.comStorage;
            return window.comStorage ? (hasPopUp = t.get("hasSpreadActivityPopUp"), hasPopUp ? !1 : !0) : !1
        },
        popUpDialog: function() {
            var t = this,
                e = "激活",
                a = '9.22-9.28期间，激活「号外」功能即可获赠200元试用金，并享受充值每满100元返50元的优惠，<a target="_blank" style="color:#4e7dd2" href="' + i + '">点击查看活动详情</a>';
            t.options.activity && (a = '9.22-9.28期间可享受「号外」充值每满100元返50元的优惠，<a target="_blank" style="color:#4e7dd2" href="' + i + '">点击查看活动详情</a>', e = "前往");
            var c = o({ title: "提示", content: a, btns: [{ type: "cancel", text: "关闭", click: function() { c.hide() } }, { type: "ok", text: e, click: function() { t.activityEvent() } }] });
            this.setSigh("1"), c.show()
        },
        setSigh: function(t) { window.comStorage && comStorage.set("hasSpreadActivityPopUp", t) },
        activityEvent: function() { document.location.href = this.options.activity ? "http://mp.toutiao.com/spread/overview/" : "http://mp.toutiao.com/spread/apply/" }
    }, e
});;
define("pagelet/subsidy/subsidy.js", function(e, t, n) {
    var a = e("common/util/util.js"),
        d = e("pagelet/daterange/daterange.js");
    n.exports = Pagelet.extend({ el: "#pagelet-subsidy", events: {}, init: function(e) { d({ start_date: e.start_date, end_date: e.end_date, onchange: function(e) { window.location = "?" + $.param($.extend({}, a.GET, e, {})) } }) } })
});;
define("pagelet/verify_website/service.js", function(e, t, i) {
    i.exports = {
        verify: function(e) {
            var t = $.Deferred();
            return $.post("/set_media_website/", e).then(function(e) { "success" === e.message ? t.resolve(e) : t.reject(e.data) }, function() { t.reject("网络错误") }), t
        },
        getcname: function(e) {
            var t = e.split("//")[1].split("/")[0],
                i = t.split(".");
            return i.unshift("razqmm2xub"), i.join(".")
        },
        getVerifyFile: function(e) {
            return "/" !== e[e.length - 1] && (e += "/"), e + "toutiaohao_verify.html"
        }
    }
});;
define("pagelet/verify_website/verify_website.js", function(e, i, t) {
    var r = e("common/vali/vali.js"),
        s = e("common/stip/stip.js"),
        a = e("common/ui/tab.js"),
        n = e("pagelet/verify_website/service.js");
    t.exports = Pagelet.extend({
        el: "#pagelet-verify-website",
        events: { "click .checkbox": "checkbox", "click .radio": "radio", "click #verify-btn": "toVerifyPage", "click #submit-btn": "submitVerify", "click #close-verify": "cancelVerify", "click .j-verify-cancel": "cancelVerify", 'input input[name="url"]': "urlChange" },
        init: function() {
            this.currentTab = 1, this.verifyType = "1", this.params = {}, this._inputTimeout = 0;
            var e = this;
            this.tab = a($(), this.$el.find(".tab-contents .tab"), function(i) { e.$el.find(".step-icon").removeClass("step" + (+i - 1)).addClass("step" + i) }), this.tab("1")
        },
        checkUrl: function(e) {
            var i = !1;
            i = r.url(e);
            var t = /^(?:(http|https):\/\/)?(.*)/,
                s = e.match(t),
                a = s[2] ? s[2].split("/") : [];
            return a.length > 1 && "" !== a[1] && (i = !0), i
        },
        urlChange: function(e) {
            this._inputTimeout && clearTimeout(this._inputTimeout);
            var i = this;
            this._inputTimeout = setTimeout(function() {
                var t = $(e.target),
                    r = t.val();
                i.$el.find(".error").text(i.checkUrl(r) ? "请输入正确的url" : "")
            }, 300)
        },
        radio: function(e) {
            var i = $(e.currentTarget),
                t = i.find("input");
            i.hasClass("checked") || (t.attr("name") && this.$el.find('input[name="' + t.attr("name") + '"]').prop("checked", !1).parent(".radio").removeClass("checked"), t.prop("checked", !0), i.addClass("checked"), this.verifyTypeChange(t.val()))
        },
        checkbox: function(e) {
            var i = $(e.currentTarget);
            i.hasClass("checked") ? (i.find("input").prop("checked", !1), i.removeClass("checked")) : (i.find("input").prop("checked", !0), i.addClass("checked"))
        },
        verifyTypeChange: function(e) { this.verifyType = e, "1" === e ? (this.$el.find(".submit .tip.file").show(), this.$el.find(".submit .tip.cname").hide()) : "2" === e && (this.$el.find(".submit .tip.cname").show(), this.$el.find(".submit .tip.file").hide()) },
        submitVerify: function() {
            var e = { type: this.verifyType, url: this.params.url };
            "1" === this.verifyType ? (e.url = this.params.url, e.check_file = n.getVerifyFile(this.params.url)) : e.cname_host = this.params.cname_host;
            var i = this;
            n.verify(e).then(function() { i.tab(3), i.$el.find(".finish .domain").html(i.params.url) }, function(e) { s.popupTip({ msg: e || "网络错误" }) })
        },
        toVerifyPage: function() {
            var e = this.$el.find(".verify input").so();
            return e.accept ? this.checkUrl(e.url) ? void alert("请输入正确的url") : (/^http/.test(e.url) || (e.url = "http://" + e.url), this.$el.find(".submit.tab .domain").html(e.url), this.$el.find(".submit.tab .file-path").attr("href", n.getVerifyFile(e.url)), this.params.url = e.url, this.params.cname_host = n.getcname(e.url), this.$el.find(".submit.tab .cname-domain").html(this.params.cname_host), void this.tab("2")) : void alert("请同意并遵守用户协议")
        },
        cancelVerify: function() {
            var e = window.location.search.split("redirect_url=");
            e.length > 1 && e[1].split("&")[0] ? window.location.href = e[1].split("&")[0] : history.back()
        }
    })
});;
define("pagelet/video_report/video_report.js", function(t, e, i) {
    var a = t("common/util/util.js"),
        n = t("pagelet/daterange/daterange.js");
    i.exports = Pagelet.extend({
        el: "#pagelet-video_report",
        init: function(t) { this.start_date = t.start_date, this.end_date = t.end_date, this.year = t.year - 0, this.month = t.month - 1, this.day = t.day - 0, this.income_list = t.income_list, this.$ad_trend_con = $("#ad-trend-con"), n({ start_date: t.start_date, end_date: t.end_date, relative: -1, onchange: function(t) { window.location = "?" + $.param($.extend({}, a.GET, t, {})) } }), this.hightchart() },
        hightchart: function() {
            var t = [],
                e = ["#FF6F6F", "#669CFF", "#ff001a", "#ffad00", "#22c2af", "#ae5d9d"];
            t[0] = { pointInterval: 864e5, pointStart: Date.parseCN(this.start_date).t(), name: "播放", data: this.income_list }, this.$ad_trend_con.highcharts({ chart: { height: 350 }, title: { text: null }, xAxis: { type: "datetime", dateTimeLabelFormats: { day: "%m/%e" } }, colors: e, yAxis: { title: { text: "" }, min: 0, minTickInterval: null, plotLines: [{ value: 0, width: 1, color: "#808080" }], allowDecimals: !1, tickPixelInterval: 30, gridLineWidth: 0 }, legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 }, plotOptions: { spline: { lineWidth: 1.5, states: { hover: { lineWidth: 2 } } }, series: { marker: { radius: 3, symbol: "circle" } } }, tooltip: { xDateFormat: "%Y-%m-%d", shared: !0 }, series: t })
        }
    })
});;
define("pagelet/videobatch/file.js", function(i) {
    function e(i, e, n) {
        var o = $.Deferred();
        o.file_id = e.id, o.id = n.upload_id, o.name = e.name;
        var t = $.noop,
            d = { UploadProgress: function(i, e) { e.id === o.file_id && o.notify(e) }, FileUploaded: function(i, e) { e.id === o.file_id && o.resolve(e) }, Error: function(i, e) { e.file && e.file.id === o.file_id && o.reject({ type: "err", message: "网络错误" }) } };
        for (var r in d) i.bind(r, d[r]);
        return o.abort = function() { o.reject({ type: "cancel" }) }, o.destory = function() {
            window.vids_to_del.push(o.id);
            for (var e in d) i.unbind(e, d[e]);
            t(), i.removeFile(o.file_id)
        }, o.fail(o.destory), setTimeout(function() { o.notify(e) }, 0), o
    }
    i("common/util/async.js"), i("common/util/util.js");
    return e
});;
define("pagelet/videobatch/form.js", function(e) {
    var a = e("common/util/omap.js"),
        t = e("common/vali/vali.js"),
        n = e("pagelet/signform/field.js"),
        r = e("pagelet/articlead/articlead.js");
    return function() {
        var e = n.getEle("input", {
                name: "title",
                label: "标题",
                require: "请填写标题",
                func: t.returnWrap(function(e) {
                    return t.range(e, 5, 50)
                })
            }),
            l = n.getEle("text", {
                name: "abstract",
                label: "视频简介(选填)",
                require: !1,
                func: t.returnWrap(function(e) {
                    return t.range(e, 0, 140)
                })
            }),
            i = n.getEle("row", { name: "ads", label: "设置" });
        i.jbox.addClass("j-article-ad"), i.jdd.append('<div class="j-ad-container"></div>'), new r(i.jbox, pageData);
        var o = n.getEle("row", { label: "分类", name: "tag" }),
            s = n.getEle("vposter", { source: "批量上传视频" }),
            u = new a;
        return u.set(e.name, e), u.set(l.name, l), u.set(i.name, i), u.set(o.name, o), u.set(s.name, s), u
    }
});;
define("pagelet/videobatch/uploader.js", function(e) {
    function i(e) { t.ajax("/video/video_api/", { json_data: '{"api":"chunk_upload_info"}' }, function(i, t, o) { 0 == i ? e(null, $.parseJSON(o)) : e(t) }) }
    var t = e("common/util/util.js"),
        o = e("common/ui/toastr.js"),
        n = e("pagelet/videobatch/file.js");
    return function(e) {
        var t, r, s = $('<div class="upbtn1"><div class="upbtn1_btn"></div></div>').appendTo("body");
        s.mouseleave(function() { r.removeClass("hover"), $(this).css({ width: "", height: "", top: "", left: "", zIndex: "" }) });
        var a = new plupload.Uploader($.extend({
            browse_button: s.children()[0],
            runtimes: "flash",
            max_retries: 3,
            url: "loooook_preinit_UploadFile",
            chunk_size: "1mb",
            file_data_name: "video_file",
            filters: { max_file_size: "2gb", mime_types: [{ title: "Video files", extensions: "wmv,avi,dat,asf,rm,rmvb,ram,mpg,mpeg,3gp,mov,mp4,m4v,dvix,dv,mkv,flv,vob,qt,cpk,fli,flc,mod,ts,webm,m2ts" }] },
            flash_swf_url: "//mp.toutiao.com/static/resource/pgc_ueditor/plupload_moxie.swf",
            preinit: { UploadFile: function(e, i) { e.setOption("url", i.url) } },
            init: {
                Error: function(e, i) { "Init error" === i.message && $("head").trigger("flasherr") },
                FilesAdded: function(e, r) {
                    var s = t;
                    _.each(r, function(t) {
                        t.url || (e.files.splice(_.indexOf(e.files, t), 1), i(function(i, r) {
                            return i ? (t.destory(), o.warning(i)) : (t.url = r.upload_url, e.addFile(t), e.start(), void s(n(e, t, r)))
                        }))
                    })
                }
            }
        }, e));
        return a.init(),
            function(e, i) {
                e.mouseenter(function() {
                    var e = $(this);
                    if (!e.is(".disabled")) {
                        t = i, r = e, e.addClass("hover");
                        var o = e.offset();
                        o.width = e.outerWidth(), o.height = e.outerHeight(), o.zIndex = 99, s.css(o)
                    }
                })
            }
    }
});;
define("pagelet/videobatch/item.js", function(e) {
    function a(e) {
        var a = [];
        if (e instanceof Array)
            for (var t = 0; t < e.length; t++) a.push({ key: e[t][0], value: e[t][1] });
        return a
    }
    var t = e("common/vali/vali.js"),
        i = e("common/util/async.js"),
        s = e("pagelet/videobatch/videobatch_tpl.whe"),
        n = e("pagelet/videobatch/form.js"),
        o = e("pagelet/videobatch/uploader.js"),
        l = e("pagelet/original_tag/original_tag.js"),
        r = e("common/video_select/video_select.js"),
        d = o({ multi_selection: !1 }),
        u = a(pageData.video_tags);
    return function(e) {
        function a(e) {
            var a = e.find(".gg-radio");
            a.on("click", function() {
                var e = $(this);
                e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
            })
        }

        function o(e) {
            g.file = e, x.jvali.val(e.name.replace(/\.[^.]+$/, "")).change(), m.name.text(e.name), e.progress(function(e, a) {
                m.progress.css("width", e.percent + "%");
                var t;
                t = a ? "文件上传成功，" + a.message : "已上传：" + plupload.formatSize(e.loaded) + "/" + plupload.formatSize(e.size), m.count.text(t)
            }), e.done(function() { m.tip.text("视频上传成功"), c("uploaded") }), e.fail(function(e) { "cancel" !== e.type && (m.tip.text(e.message || "视频上传失败"), c("fail")) }), c("uploading")
        }

        function c(e) { g.status = e, m.sc.prop("class", "videobatch_card_" + e), "blank" === e ? (w.reset(), w.jbox.hide()) : "uploading" === e ? (w.id = g.file.id, w.video_status = "transcoding", w.jbox.show()) : "uploaded" === e && (w.video_status = "done"), g.status_change(g) }

        function _() {
            var e = [];
            return z.find(".gg-auto-diagnosis-radio").each(function() { e.push($(this).is(".selected") ? 1 : 0) }), e
        }

        function p(e, a) {
            if ("submited" === g.status) return e();
            var t = _();
            i.map([j, y], function(e, a) { e(function(e, t, i) { e ? a({ msg: e, jerr: t }) : a(null, i) }) }, function(i, s) {
                if (i) return e(i.msg);
                var n = $.so(s[0]);
                s[1].forEach(function(e) { "vposter" === e.name ? (n[e.name] = e.value.url, n.thumb_url = e.value.thumb_url, n.src_thumb_uri = e.value.src_thumb_uri, n.pgc_id = e.value.pgc_id) : n[e.name] = e.value });
                var o = { sp: "toutiao", vid: n.video_vid, vu: n.video_vid, vname: n.title, vposter: n.vposter, thumb_url: n.thumb_url, src_thumb_uri: n.src_thumb_uri },
                    l = window.vids_to_del;
                window.vids_to_del = [], $.post("/core/article/edit_article_post/?source=mp&type=videobatch", $.extend(n, D.value, { from: "videobatch", vids_to_del: JSON.stringify(l), content: "<p>{!-- PGC_VIDEO:" + JSON.stringify(o) + " --}</p>", video_vu: n.video_vid, video_vposter: n.vposter, save: 1, article_type: 1, recommend_auto_analyse: t[a] ? 1 : 0 })).always(function(a) {
                    return "保存成功" != a.message && "提交成功" != a.message ? (window.vids_to_del = l, e(a.message || "网络错误")) : (m.tip.text("视频发表成功"), c("submited"), void e())
                })
            })
        }

        function v() {
            m.file.data({ vali_name: "video_vid", vali_require: "请上传视频", vali_func: function(e) { "blank" === g.status ? e() : "fail" === g.status ? e("上传失败:" + g.file.name) : "uploading" === g.status ? e("正在上传:" + g.file.name) : e(null, g.file.id) }, vali_effect: $.noop });
            var e = n(),
                i = e.get("vposter"),
                s = e.get("title"),
                o = e.get("abstract"),
                l = e.get("tag"),
                r = e.get("ads");
            if (r.jbox.data({
                    vali_name: "article_ad_type",
                    vali_func: function(e) {
                        var a = r.jdd.find(".gg-item i.selected").parent().data("type");
                        e(null, a)
                    }
                }), l.jbox.data({
                    vali_name: "tag",
                    vali_require: "请选择视频分类",
                    vali_func: function(e) {
                        var a = l.jdd.find(".j_video_select_dom").val();
                        a ? e(null, a) : e("请选择视频分类")
                    }
                }), l.jdd.prepend(b), pageData.claim_origin_permission && b.after('<a style="display:inline-block;line-height:40px;margin-left:20px;font-size:14px;" class="slink" href="http://jmj.toutiao.com" target="_blank">参加金秒奖，赢得今日头条亿级展示资源</a>'), m.table.append($.map(e.values(), function(e) {
                    return e.jbox.toArray()
                })), pageData.has_abtest_permission) {
                var d = $('<tr class="signform_item j-auto-diagnosis"><td></td><td><div class="gg-control gg-auto-diagnosis"><div class="gg-item"><i class="gg-radio gg-auto-diagnosis-radio selected" ga="自动诊断"></i>自动诊断<i class="gg-timer-tip j_timer_tip" data-title="当本文章推荐不好时，系统通知我进行修改"></i></div></div></td></tr>');
                m.table.find(".j-article-ad").after(d), a(d)
            }
            var u = $($.map(e.values(), function(e) {
                return e.jvali.toArray()
            }));
            return [t(m.file), t(u), s, i, o]
        }
        var g = { status_change: $.noop, status: "blank" },
            f = $(s()),
            m = f.nodes(),
            b = new r(u, {}),
            h = v(),
            j = h[0],
            y = h[1],
            x = h[2],
            w = h[3],
            k = h[4],
            D = new l({ enable: pageData.claim_origin_permission, has_praise_permission: pageData.has_praise_permission, praise: pageData.praise, can_spread_subsidy: pageData.can_spread_subsidy, is_spread_subsidy: pageData.is_spread_subsidy, article_can_change_ad: pageData.article_can_change_ad, tip: "非原创视频恶意声明原创，将受到平台严厉惩罚。", hint: "（独家、首发的内容将会获得更高的收益和推荐）", dialog: e.original_dialog }),
            z = $("body.body_videobatch");
        return z.hoverTitle(), k.jbox.eq(-1).after(D.$el), m.cancel.click(function() { g.file.abort(), g.file = null, c("blank") }), d(m.uploadbtn, function(e) { g.file && g.file.destory(), o(e) }), g.autoVali = y, g.bindFile = o, g.jele = f, g.submit = p, g
    }
});;
define("pagelet/videobatch/videobatch.js", function(e) {
    function a() {
        var e = f.count();
        if (0 === e) return d.launch.show(), void d.main.hide();
        d.launch.hide(), d.main.show();
        var a = f.filter(function(e, a) {
            return "uploaded" === a.status
        }).count();
        d.summary_submit.toggleClass("disabled", a !== e), d.summary_progress.css("width", 100 * a / e + "%"), d.summary_count.text("已上传：" + a + "/" + e + "个视频"), d.summary_auto.hasClass("checked") && a === e && (d.summary_auto.removeClass("checked"), d.summary_submit.click())
    }
    var t = e("common/util/util.js"),
        o = e("common/util/omap.js"),
        s = e("common/util/async.js"),
        n = e("common/ui/toastr.js"),
        i = e("common/popup/dialog.js"),
        u = e("pagelet/original_tag/dialog.js"),
        c = e("pagelet/videobatch/uploader.js"),
        l = e("pagelet/videobatch/item.js"),
        m = new u({ media_name: pageData.media_name });
    window.vids_to_del = [];
    var r = c({ multi_selection: !0 }),
        d = $("#videobatch").nodes();
    $("head").on("flasherr", function() { d.flasherr.show(), d.launch.hide() });
    var h = d.launch_submit.add(d.add); - 1 === [4, 6, 7, 11].indexOf(pageData.media_status) ? h.toggleClass("disabled", !0) : h.toggleClass("disabled", !1), d.summary_auto.click(function() {
        return d.summary_auto.hasClass("checked") ? void d.summary_auto.removeClass("checked") : void s.map(f.keys(), function(e, a) { e.autoVali(function(e, t) { e ? a({ msg: e, jerr: t }) : a() }) }, function(e) { e ? (n.warning(e.msg), $(window).scrollTop(e.jerr.offset().top - 50)) : (d.summary_auto.addClass("checked"), a()) })
    });
    var f = new o;
    r(d.launch_submit.add(d.add), function(e) {
        var t = l({ original_dialog: m });
        f.set(t), t.jele.insertBefore(d.bottom), t.status_change = function(e) { "blank" === e.status, ("submited" === e.status || "blank" === e.status) && (e.jele.remove(), f.remove(e)), a() }, t.bindFile(e), d.summary_auto.removeClass("checked")
    }), d.summary_submit.click($.loadDone(function(e) {
        function a(e) { e ? (u.push(e.message), s || (s = e.jele)) : c++, u.length + c === n && o() }

        function o() {
            if (e(), window.ga("send", "event", "click", "PC　批量上传视频", "", c), u = _.map(u, function(e) {
                    return t.e(e)
                }), u.length) $(window).scrollTop(s.offset().top + 50), i({ title: u.length + "个发表失败，" + c + "个发表成功", content: $.safeMark(u.join("<br/>")), btns: ["ok"] }).show();
            else {
                var a = i({ title: "全部发表成功", btns: [{ type: "ok", click: function() { window.location = "/core/article/index/?source_type=0" } }] });
                a.show()
            }
        }
        if (d.summary_submit.hasClass("disabled")) return e();
        var s, n = f.count(),
            u = [],
            c = 0,
            l = 0;
        f.forEach(function(e, t) {
            var o = l;
            setTimeout(function() { t.submit(function(e) { e ? a({ message: e, jele: t.jele }) : a() }, o) }, 500 * l), l++
        })
    })), window.onbeforeunload = function() {
        return 0 !== f.count() ? "当前视频尚未发表完毕，确认离开？" : void 0
    }
});;
define("pagelet/write/article.js", function(e, t, i) {
    function a(e) {
        e.each(function() {
            var e = $(this),
                t = $.trim(e.html());
            e.html(t)
        })
    }

    function r(e) {
        var t = $("<div></div>");
        if (e.find("tr").each(function(e, i) {
                var a = $(i).children();
                return 1 != a.length ? (t = null, !1) : void $("<p></p>").html(a.html()).appendTo(t)
            }), t) {
            var i = t.html().replace(/<p><\/p>/gi, "").replace(/<p><p>/gi, "<p>").replace(/<\/p><\/p>/gi, "</p>");
            return e.after(i), e.remove(), !0
        }
        return !1
    }

    function n(e) {
        var t = $("<div></div>").html(e);
        return t.find("h2, h3, h4, h5, h6").each(function() { $(this).wrapInner("<strong></strong>").find("strong").unwrap() }), t.find("img,strong").each(function() {
            var e = $(this);
            e.parents("p, h1").length || e.wrap("<p></p>")
        }), t.find("p img").each(function() {
            var e = $(this);
            this.getAttribute("src") || e.remove(), e.next().length && e.after("<br>"), e.prev().length && e.before("<br>")
        }), t.find("table").each(function() {
            var e = $(this);
            e.parents("p").length || e.wrap("<p></p>"), r(e) || e.text().length > 20 && (e.addClass("border"), e.find("th,td").each(function(e, t) {
                var i = $(t),
                    a = i.html();
                a = a.replace(/<\/?p>/g, ""), i.html(a)
            }))
        }), a(t.find("strong,span,a,td,th")), a(t.find("p,li")), t.html()
    }

    function o(e) {
        var t = $("<div></div>").html(e);
        return t.find(".mp-vote").each(function(e, t) {
            var i = $(t).attr("data-voteid"),
                a = {};
            a.id = i, $(t).replaceWith("{!-- PGC_VOTE:" + JSON.stringify(a) + " --}")
        }), t.html()
    }

    function d(e) {
        var t = $("<div></div>").html(e);
        return t.find(".online-video").each(function(e, t) {
            var i = $(t),
                a = {};
            a.sp = "youku", a.vid = i.data("id"), a.web_uri = i.data("uri"), i.replaceWith("{!-- PGC_VIDEO:" + JSON.stringify(a) + " --}")
        }), t.find(".local-video").each(function(e, t) {
            var i = $(t),
                a = S.submit_video.vid,
                r = S.submit_video.vu,
                n = S.submit_video.vname,
                o = S.submit_video.vposter,
                d = {};
            a && (d.sp = "toutiao", d.vid = a, d.vu = r, d.vname = n, d.vposter = o, d.thumb_url = S.submit_video.uri, d.src_thumb_uri = S.submit_video.src_thumb_uri, i.replaceWith("{!-- PGC_VIDEO:" + JSON.stringify(d) + " --}"))
        }), t.html()
    }

    function s(e) {
        if (e) {
            var t = j.document,
                i = t.getElementById("local-video-" + e);
            return !!i
        }
    }

    function l(e) {
        var t = $("<div></div>").html(e);
        return t.find(".mp-gallery").each(function(e, t) {
            var i = t.id,
                a = i.replace("gallery-", ""),
                r = {};
            r.list = global_gallery[a], $(t).replaceWith("{!-- PGC_GALLERY:" + JSON.stringify(r) + " --}")
        }), t.html()
    }

    function c(e) {
        var t = $("<div></div>").html(e);
        return t.find(".remoteImageErrorPlaceholder").each(function(e, t) { $(t).remove() }), t.html()
    }

    function u(e) {
        var t = "",
            i = [];
        t = e ? j.getContent() : j.getAllHtml();
        try { i = j.document.getElementsByClassName("mp-ranking") } catch (a) {}
        if (i.length) {
            void 0 == window.frames.ranking_iframe && $("body").append('<iframe id="ranking_iframe" name="ranking_iframe" style="display:none;"></iframe>');
            var r = window.frames.ranking_iframe;
            r.document.open(), r.document.write(t), $(r.document.body).prepend('<link href="http://s2.pstatp.com/css/toutiao/mp_ranking.css" rel="stylesheet">');
            for (var n = i.length - 1; n >= 0; n--) {
                var o = i[n],
                    d = o.id,
                    s = o.contentDocument.getElementsByClassName("ranking-con")[0].outerHTML;
                $(r.document.body).find("#" + d).replaceWith(s)
            }
            t = e ? r.document.body.innerHTML : r.document.documentElement.outerHTML
        }
        return t
    }

    function v(e) {
        var t = $("#gov-tip"),
            i = $("#gov_media_id").val(),
            a = !1,
            r = "";
        return i ? ($.ajax({ type: "POST", url: "/verify_media_name/", data: { gov_media_id: i }, dataType: "json", async: e }).done(function(e) { "success" == e.message ? (r = e.data, a = !0) : r = e.reason, t.text(r).show() }).fail(function() { r = "服务器异常，请稍后再试", t.text(r).show() }), e ? void 0 : a ? window.confirm("您所发表的文章将发表至政府号“" + r + "”，请确认内容、帐号名称均准确无误") : (k("alert", r), !1)) : void t.hide()
    }

    function m() {
        var e = "";
        return $.readCookie && (e = $.readCookie("currentMediaId")), "" == e || S.media_id == e ? !1 : ($.readCookie && (S.media_id = $.readCookie("currentMediaId")), !0)
    }

    function g() {
        var e = $.trim($("#title").val()).length,
            t = $.trim(j.getContentTxt()).length,
            i = "",
            a = 5,
            r = 50,
            n = 5e5,
            o = S.submit_video.vid;
        return i = 0 == e ? "标题不能为空" : a > e || e > r ? "标题长度应该在" + a + "-" + r + "字之间" : ue.hasContents() ? t > n ? "正文不能超过" + n + "字" : o || S.pgcFeedCovers.validate() ? G() ? W() ? H() ? m() ? "你已经切换到另一个帐号，请检查是否要在该帐号下发表" : b() ? h() : "请填写视频标签" : "对不起，视频上传没有完成" : "请选择视频分类" : "对不起推送的标题或者内容不能为空" : "请完成主封面图设置" : "正文不能为空", K ? i ? (fixedAlert(i), !1) : !0 : void fixedAlert(P, !1)
    }

    function f() {
        var e = S.column_data,
            t = "审核期间暂不可发文，请在审核通过后添加章节",
            i = "专栏/连载中有未通过审核的文章，暂不可发表，请保存草稿",
            a = "审核失败暂不可发文，请在审核通过后添加章节";
        return e.column_chosen ? 2 == e.column_verify_status ? (fixedAlert(a), !1) : 4 !== e.column_verify_status ? (fixedAlert(t), !1) : e.column_article_status ? (fixedAlert(i), !1) : !0 : !0
    }

    function h() {
        var e;
        return $('[data-node="audio_list"]').children().each(function() {
            var t = $(this).data("data"),
                i = t.upload_id;
            return "uploading" === t.status ? (e = "音频 " + t.name + " 还没上传完", !1) : 0 === $("[upload_id=" + i + "]", ue.iframe.contentDocument).length ? (e = "音频 " + t.name + " 还没有添加到正文中", !1) : void 0
        }), e
    }

    function p(e) {
        var t = $("body").find(".gg-timer-radio"),
            i = $("body").find(".j_timepicker").val();
        if (t.length && t.hasClass("selected")) {
            var a = "获取时间失败",
                r = "定时发表时间范围错误，请重新设定时间";
            $.ajax({ type: "GET", url: "/article/get_server_time/" }).done(function(t) {
                if ("success" !== t.message) return void fixedAlert(a);
                if (t.data) {
                    var n = new Date(1e3 * t.data.server_time),
                        o = w(i, n);
                    return o ? void e() : void fixedAlert(r)
                }
            }).fail(function() { fixedAlert(a) })
        } else e()
    }

    function w(e, t) {
        var i = t.clone(),
            a = i.h(i.h() + 2).format(),
            r = i.h(i.h() + 22).format(),
            n = new Date(e),
            o = new Date(a),
            d = new Date(r);
        return "disabled" == $("#timepicker").attr("disabled") ? !0 : o > n || n > d ? !1 : !0
    }

    function b() {
        if (S.submit_video.vid) {
            var e = $(".tag-input-center .j-tag-content");
            if (!e.length) return !1
        }
        return !0
    }

    function y(e, t) {
        var i = [];
        if (3 != e.length) return !1;
        for (var a = 0; 3 > a; a++) i[a] = e[a].origin_uri;
        for (a = 0; 3 > a; a++) {
            var r = i.indexOf(t[a].origin_uri); - 1 != r ? i.splice(r, 1) : i.push(t[a].origin_uri)
        }
        return 0 == Object.keys(i).length ? !0 : !1
    }

    function x(e, t, i) {
        if (!window.__SUBMIT_LOCK) {
            window.__SUBMIT_LOCK = !0, t = t || "";
            var a = $.trim($("#title").val()),
                r = $.trim($("#abstract").val()) || "",
                s = j.getContent(),
                v = $.trim($("#author-names").val()),
                m = $("#channel_tags option:selected").val() || "",
                g = e ? 0 : 1,
                f = S.pgc_id || S.new_pgc_id,
                h = S.submit_video.vid,
                p = S.submit_video.vu,
                w = S.submit_video.vname,
                b = S.submit_video.vposter,
                x = S.vids_to_del,
                C = S.statistics,
                D = S.start_time,
                I = S.from_diagnosis,
                N = $(".j-article-ad .gg-item .selected").parent().data("type"),
                L = $(".gg-push").is(".selected") ? 1 : 0,
                B = $(".gg-subsidy").is(".selected") ? 1 : 0,
                E = $(".gg-fans-visiable-radio").is(".selected") ? 1 : 0,
                U = $(".gg-auto-diagnosis-radio").is(".selected") ? 1 : 0,
                J = 0,
                K = $("#self_recommand").checkbox() ? 1 : 0,
                P = $(".j_front_cover .front-cover-radio.selected").data("type"),
                G = $(".j_front_cover .front-cover-img img"),
                H = $(".j_front_cover2 .front-cover-img img"),
                W = $(".j_front_cover .front-cover-single img"),
                V = [],
                q = [],
                R = null,
                z = S.pgc_gov_proxy || 0,
                F = 2,
                Y = S.after_pass_modify ? 1 : 0,
                Q = $(".gg-push-client").length && ($(".gg-push-client").hasClass("selected") ? "1" : "0"),
                X = $(".gg-timer-radio").length && $(".gg-timer-radio").hasClass("selected") ? 1 : 0,
                Z = $(".gg-monitor").length && $(".gg-monitor").hasClass("selected") ? 1 : 0,
                et = $(".gg-extend-url").length && $(".gg-extend-url").hasClass("selected") ? 1 : 0,
                tt = A.postSlaveData.length,
                it = "",
                at = $(".gg-govern-forward-radio").length && $(".gg-govern-forward-radio").hasClass("selected") ? 1 : 0,
                rt = [],
                nt = [];
            if (S.movie_info) {
                var ot = S.movie_info;
                it = ot.movie_id
            }
            var dt;
            if (ic_uri_list = [], ic_map)
                for (dt in ic_map) ic_uri_list.push(ic_map[dt]);
            var st = $("#column-select"),
                lt = st.length ? st.find("option:selected").val() : "",
                ct = $(".j_media_select");
            if ("1" == ct.attr("has-media") && h) {
                var ut = ct.find("select"),
                    _t = [];
                for (dt = 0; dt < ut.length; dt++) _t.push(ut.eq(dt).val());
                _t = _t.join("/")
            } else if ("single" == P) R = { uri: W[0].getAttribute("_src"), origin_uri: W[0].getAttribute("_origin_uri") }, q.push(R);
            else if ("multi" == P) {
                var vt = G.length;
                for (dt = 0; vt > dt; dt++) R = { uri: G[dt].getAttribute("_src"), origin_uri: G[dt].getAttribute("_origin_uri") }, q.push(R)
            }
            if (tt && !lt) {
                if (!A.validate()) return window.__SUBMIT_LOCK = !1, !1;
                var mt = $.trim(A.postSlaveData[0].title) === a;
                if ("1" == ct.attr("has-media") && h) {
                    if ($.extend(!0, nt, A.postSlaveData), nt[0].type = 1, mt) return k("alert", "主标题和副标题不能相同，请修改"), window.__SUBMIT_LOCK = !1, !1
                } else {
                    if (!S.slaveFeedCovers.validate()) return k("alert", "请完成副封面设置"), window.__SUBMIT_LOCK = !1, !1;
                    for (vt = H.length, dt = 0; vt > dt; dt++) R = { uri: H[dt].getAttribute("_src"), origin_uri: H[dt].getAttribute("_origin_uri") }, rt.push(R);
                    if (y(q, rt) && mt) return k("alert", "主副文章封面图和标题至少有一个不同"), window.__SUBMIT_LOCK = !1, !1;
                    $.extend(!0, nt, A.postSlaveData), nt[0].covers = rt, nt[0].type = 4
                }
            }
            $(".gg-spread").length && (F = $(".gg-spread").is(".selected") ? 1 : 0), $.cookie("lasttag", m, { expires: 30, path: "/" }), !e && z && (J = $("#gov_media_id").val()), e && (L = 0), "ranker" == S.author_type && (s = u(!0)), s = t + s, s = n(s), s = o(s), s = d(s), s = l(s), s = c(s);
            var gt = UE.htmlparser(s);
            _.each(gt.getNodesByTagName("iframe"), function(e) {
                var t = e.attrs;
                "audio" === t.tt && e.parentNode.replaceChild(new UE.uNode({ type: "text", data: "{!-- PGC_VOICE:" + JSON.stringify({ upload_id: t.upload_id, title: t.title, duration: t.time || 0, content: t.content || "" }) + " --}" }), e)
            }), s = gt.toHtml();
            var ft = $(".fb"),
                ht = ft.text(),
                pt = "提交中...";
            e && (ft = $(".cg"), ht = ft.text(), pt = "保存中..."), ft.attr("disabled", "disabled").text(pt);
            var $t = { title: a, "abstract": r, content: s, authors: v, tag: m, self_appoint: K, save: g, pgc_id: f, article_ad_type: N, video_vid: h, video_vu: p, video_vname: w, video_vposter: b, vids_to_del: JSON.stringify(x), force_ads: F, after_pass_modify: Y, urgent_push: L, gov_media_id: J, subsidy: B, pgc_feed_covers: JSON.stringify(q), article_category: _t, tags: _t, movie_id: it, is_fans_article: E, recommend_auto_analyse: U, from_diagnosis: I, ic_uri_list: ic_uri_list, govern_forward: at };
            if (O.isSelected && ($t.add_third_title = 1), i && ($t.is_app_preview = 1), f || (C.detalTime = Date.now() - D, C.pasteTimes = pasteTimes, $t.statistics = JSON.stringify(C)), "1" == ct.attr("has-media")) {
                var wt = $(".tag-input-center .j-tag-content");
                if ($t.tag = _t, delete $t.article_category, wt.length)
                    for (dt = 0; dt < wt.length; dt++) V.push($.trim(wt.eq(dt).text()));
                $t.article_label = V.join(";")
            }
            Q && ($t.push_status = Q, $t.push_android_title = $(".j_push_android_title").val(), $t.push_android_summary = $(".j_push_android_textarea").val(), $t.push_ios_summary = $(".j_push_ios_title").val()), X && ($t.timer_status = X, $t.timer_time = $(".j_timepicker").val()), Z && ($t.third_monitor_url = $("#third_monitor_url").val()), et && ($t.extern_link = $("#extend_url_input").val()), lt && ($t.column_chosen = lt), $.extend($t, T.value), 0 != tt && A.postSlaveData[0].title && A.postSlaveData[0].title.length && $.extend($t, { slave_items: JSON.stringify(nt) }), $.ajax({ type: "POST", async: !0, url: "/core/article/edit_article_post/?source=mp&type=article", data: $t, dataType: "json" }).done(function(t) {
                if ("保存成功" == t.message || "提交成功" == t.message) {
                    S.pgc_id = t.data.pgc_id, tt && (A.postSlaveData[0].item_id = t.data.slave_item_id), window.onbeforeunload = function() {}, window.localStorage && window.localStorage.getItem(S.localStorageName) && window.localStorage.removeItem(S.localStorageName);
                    var a = t.data || {};
                    if (a.is_ad_article && !e) a.ad_id ? setTimeout(function() { location.href = "http://ad.toutiao.com/ad/" + a.ad_id + "/" }, 1e3) : setTimeout(function() { location.href = "http://ad.toutiao.com/ad/create_article/?from_pgc_groupid=" + t.msg.group_id }, 1e3);
                    else {
                        if (i) {
                            var r = M({ title: "客户端预览", content: "请用你的头条号账号登录「今日头条」App，在'我的-作品管理'即可打开预览文章", btns: [{ type: "ok", click: function() { window.__SUBMIT_LOCK = !1, r.remove() } }] });
                            return void r.show()
                        }
                        setTimeout(function() { location.href = "/core/article/index/" }, 1e3)
                    }
                } else window.__SUBMIT_LOCK = !1;
                fixedAlert(t.message)
            }).fail(function(e, t, i) { window.__SUBMIT_LOCK = !1, fixedAlert("服务器异常，请稍后再试，异常状态：" + e.status + "," + t + "," + i) }).always(function() { ft.removeAttr("disabled").text(ht) })
        }
    }

    function C(e, t) {
        var i = S.submit_video.vid,
            a = S.submit_video.vu || "",
            r = S.submit_video.vname;
        i && !s(i) ? k("confirm", "视频未添加到正文中，是否默认显示在正文顶部？", function() {
            var n = {};
            n.sp = "toutiao", n.vid = i, n.vu = a, n.vname = r, n.vposter = S.submit_video.vposter, n.thumb_url = S.submit_video.uri, n.src_thumb_uri = S.submit_video.src_thumb_uri, contentHeader = "<p>{!-- PGC_VIDEO:" + JSON.stringify(n) + " --}</p>", x(e, contentHeader, t)
        }) : x(e, void 0, t)
    }
    var k = e("pagelet/popalert/popalert.js"),
        S = null,
        j = null;
    window.__SUBMIT_LOCK = !1;
    var A, O, T, D, I = e("pagelet/original_tag/original_tag_div.js"),
        N = e("pagelet/original_tag/dialog.js"),
        L = e("pagelet/double_title/title.js"),
        B = e("pagelet/optimize_helper/optimize.js"),
        E = e("pagelet/extend_url/extend_url.js"),
        M = e("common/popup/dialog.js"),
        U = window.listener,
        J = e("common/vali/vali.js"),
        K = !0;
    $fixedAlertDiv = $(".alert");
    var P = "图片下载中，请稍候...";
    i.exports = function(e) {
        function t() { e.third_monitor_url ? ($(".gg-monitor").addClass("selected"), $("#third_monitor").show(), $("#third_monitor_url").show()) : $(".gg-monitor").removeClass("selected") }

        function i(e) {
            var t = new Image;
            return function(i) { t.onerror = function() { i(!1) }, t.onload = function() { i(!0) }, t.src = e }
        }
        S = e, video_controler = S.video_controler, j = S.ue || ue;
        var a, r = new N({ media_name: e.media_name });
        if (e.claim_origin && (a = e), T = new I({ readonly: !!e.after_pass_modify, enable: e.claim_origin_permission, has_praise_permission: e.has_praise_permission, praise: e.praise, tip: '<a class="slink" href="http://toutiao.com/a6203926451999359234/" target="_blank">头条号「原创」功能使用攻略</a><br><a class="slink" href="http://toutiao.com/i6226532968077197826/" target="_blank">原创文章管理功能</a>', hint: "（独家、首发的内容将会获得更高的收益和推荐）", dialog: r, value: a }), $("#original_tag_holder").replaceWith(T.$el), "undefined" == typeof ic_map && (ic_map = {}), e.ic_uri_list && e.ic_uri_list.length)
            for (var n in e.ic_uri_list) ic_map[e.ic_uri_list[n]] = e.ic_uri_list[n];
        E(e), t(), $(".gg-monitor").on("click", function() { $(this).toggleClass("selected"), $(this).hasClass("selected") ? ($("#third_monitor").show(), $("#third_monitor_url").show()) : ($("#third_monitor").hide(), $("#third_monitor_url").hide()) }), $("#third_monitor_url").on("blur", function() { i($(this).val())(function(e) { e ? $("#monitor_tip").hide() : $("#monitor_tip").show() }) }), O = B(T, e), A = L(T, e), e.vid ? (U.trigger("has-video", "change-cover", 1), U.trigger("has-video", "double-change", 1)) : (U.trigger("has-video", "change-cover", 0), U.trigger("has-video", "double-change", 0)), $("#column-select").on("change", function() { A.column($(this).val() ? !0 : !1) }), j.addListener("catchRemoteImageStart", function() { K = !1 }), j.addListener("catchRemoteImageEnd", function() { K = !0, $fixedAlertDiv.text() === P && D() })
    }, $fixedAlertDiv.length && ($fixedAlertDiv.affix({ offset: { top: $fixedAlertDiv.offset().top } }), D = function() { $fixedAlertDiv.height(0) }, fixedAlert = function(e, t, i) { e.length && (i || (i = function() {}), $fixedAlertDiv.find("span").html(e).end().height(40), t !== !1 && (setTimeout(D, t || 4e3), i())) }), $("#origin-mark").on("click", ".origin-hint", function() { $("#origin-hint-detail").show() });
    var G = function() {
            var e, t, i, a = $("body").find(".gg-push"),
                r = $("#push-msg-modal");
            return a.length && a.hasClass("selected") ? (e = r.find(".j_push_android_title"), t = r.find(".j_push_android_textarea"), i = r.find(".j_push_ios_title"), e.val() && t.val() && i.val() ? !0 : !1) : !0
        },
        H = function() {
            var e = $(".j_media_select"),
                t = $("#video-uploading");
            return "1" == e.attr("has-media") && "block" == t.css("display") ? !1 : !0
        },
        W = function() {
            for (var e = $(".j_media_select"), t = e.find("select"), i = [], a = 0; a < t.length; a++) t.eq(a).val() && i.push(t.eq(a).val());
            return "1" == e.attr("has-media") ? i.length > 0 ? !0 : !1 : !0
        };
    $(".fb").click(function() {
        var e = !1,
            t = $("#gov_media_id").val();
        J.validBrowser(window.location.pathname + window.location.search, function(i, a) {
            return i ? void p(function() { g() && f() && (t ? v(!1) : !0) && C(e) }) : void k("alert", a)
        })
    }), $(".cg").click(function() {
        var e = !0;
        J.validBrowser(window.location.pathname + window.location.search, function(t, i) {
            return t ? void(g() && C(e)) : void k("alert", i)
        })
    }), $(".yl").click(function() { g() && C(!0, !0) }), $(".understand").click(function() { $("#preview_modal").modal("hide"), C(!1) }), $("#gov_media_id").focusout(function() { v(!0) }), $(".gg-radio").click(function() {
        var e = $(this),
            t = e.data("type"),
            i = e.is(".selected"),
            a = $(".gg-spread-tip"),
            r = $(".channel-cell");
        if (!e.is(".disabled")) switch (t) {
            case "show":
            case "spread":
                i ? (e.removeClass("selected"), "spread" == t && (a.hide(), r.show())) : (e.addClass("selected"), "spread" == t && (a.show(), r.hide(), $("#channel_tags").val("")));
                break;
            case "push":
                var n = e.data("remain");
                if (0 >= n) return;
                i ? e.removeClass("selected") : e.addClass("selected");
                break;
            case "subsidy":
                i ? e.removeClass("selected") : e.addClass("selected")
        }
    })
});;
define("pagelet/write/article_link.js", function(require, exports, module) {
    var Vali = require("common/vali/vali.js"),
        Util = require("common/util/util.js"),
        Dialog = require("common/popup/dialog.js"),
        tuipager = require("common/tuipager/tuipager.js"),
        ARTICLE_TMPL = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="item-tr ', obj.selected === obj.item.item_id && (__p += "checked"), __p += '">\n    <div class="item-check"><span class="select-item active"><i></i></span></div>\n    <div class="item-title"><span class="title" title="' + (null == (__t = obj.item.title) ? "" : _.escape(__t)) + '">' + (null == (__t = obj.item.title) ? "" : _.escape(__t)) + '</span></div>\n    <div class="item-time"><span class="time">' + (null == (__t = obj.item.create_time) ? "" : _.escape(__t)) + "</span></div>\n</div>";
            return __p
        },
        linkType = 1,
        stip = stip = require("common/stip/stip.js"),
        icpVerify = require("pagelet/icp_verify/icp_verify.js"),
        myIcpVerify = icpVerify.getInstance(),
        externIsChecked = !1,
        externPrevUrl = "",
        externIsValid = !1,
        externCurUrl = "",
        fromCancel = !1,
        lock = !1,
        dialog = function() {
            function e() {
                if (!lock) {
                    if (3 === linkType) {
                        if (!a) return void stip.popupTip({ msg: "请选择插入的文章", status: !1, duration: 1e3 });
                        r.result_list.hide(), r.search_input.val("").removeClass("error"), u.hide(), lock = !0, $.ajax({ type: "POST", url: "/article/get_title_by_url/", dataType: "json", data: { url: a.article_url, link_type: 1 } }).done(function(e) { lock = !1, "success" == e.message && _({ href: e.data.url, textValue: e.data.title }) })
                    } else 2 === linkType && externIsChecked ? (externIsValid && _($.so([{ name: "url", value: { href: externCurUrl, title: "" } }]).url), externIsChecked = !1, externIsValid = !1, u.hide()) : 2 === linkType ? o(function(e, t, i) { e || (u.hide(), _($.so(i).url)) }) : c(function(e) { e || o(function(e, t, i) { e || (u.hide(), _($.so(i).url)) }) });
                    a = null
                }
            }

            function t() {
                var e = r.search_input.val();
                e.length ? (i(1, e), r.search_input.removeClass("error"), r.search_hint.text("")) : (r.search_input.addClass("error"), r.search_hint.text("请填写搜索词语"))
            }

            function i(e, t) {
                tuipager({
                    $ele: r.pagination,
                    cb: function(e, i) {
                        var n = 20;
                        $.ajax({ type: "POST", url: "/article_title_search/", dataType: "json", data: { offset: (e - 1) * n, limit: n, search_word: t } }).done(function(e) {
                            if ("success" === e.message) {
                                if (!e.data) return;
                                if (0 === e.data.total) return r.search_hint.text("该搜索词没有对应的发表文章"), void r.result_list.hide();
                                r.search_hint.text(""), i({ length: Math.ceil(e.data.total / n) });
                                var t = l(e.data.article_list);
                                r.list_container.html(t), r.result_list.show()
                            }
                        }).fail(function() { stip.popupTip({ msg: "出现错误，请重试", status: !1, duration: 1e3 }) })
                    }
                })
            }

            function l(e) {
                if (0 === e.length) return "";
                for (var t, i, l = [], s = 0; s < e.length; s++) t = e[s], t.create_time = n(t.create_time), i = $(ARTICLE_TMPL({ item: t, selected: a ? a.item_id : "111" })), l.push(i), i.data(t);
                return l
            }

            function n(e) {
                var t = new Date(1e3 * e),
                    i = t.getFullYear(),
                    l = t.getMonth() + 1,
                    n = t.getDate();
                return e = i + "/" + (l > 9 ? l : "0" + l) + "/" + (n > 9 ? n : "0" + n)
            }
            var s = $("#link-dialog"),
                r = s.nodes(),
                a = null;
            r.inside_tab.click(function() { $(this).addClass("selected").siblings().removeClass("selected"), linkType = 1, r.link_container.removeClass("disabled").siblings(".container").addClass("disabled"), r.input.attr("placeholder", "支持头条内部所有链接地址"), r.input.data({ vali_require: "请输入有效的内部链接" }), r.inside_hint.show(), r.outside_hint.hide(), r.title_input.show(), r.title_msg.show(), c("reset"), o("reset") }), r.outside_tab.click(function() { $(this).addClass("selected").siblings().removeClass("selected"), linkType = 2, r.link_container.removeClass("disabled").siblings(".container").addClass("disabled"), r.input.attr("placeholder", "填写链接地址"), r.input.data({ vali_require: "请输入有效的外部链接" }), r.inside_hint.hide(), r.outside_hint.show(), r.title_input.hide(), r.title_msg.hide(), c("reset"), o("reset") }), r.article_tab.click(function() { $(this).addClass("selected").siblings().removeClass("selected"), linkType = 3, r.article_container.removeClass("disabled").siblings(".container").addClass("disabled"), r.title_input.hide(), r.title_msg.hide(), c("reset"), o("reset") }), r.title_input.placeholder(), r.title_input.data({
                vali_jmsg: r.title_msg,
                vali_require: "请填写链接文字",
                vali_name: "title",
                vali_func: function(e) {
                    var t = $.trim(this.val());
                    e(t.length < 1 || t.length > 50 ? "链接文字限定1-50字" : null)
                }
            });
            var c = Vali(r.title_input);
            r.input.placeholder(), r.input.data({
                vali_jmsg: r.msg,
                vali_require: "请输入有效的内部链接",
                vali_name: "url",
                vali_func: function(e) {
                    if (!lock) {
                        var t = $.trim(this.val());
                        return t != externPrevUrl ? (externIsValid = !1, externIsChecked = !1) : externIsChecked = !0, t ? (externCurUrl = t, void(2 === linkType ? Util.ajax("/article/get_title_by_url/", { url: t, link_type: linkType }, function(i, l, n) {
                            return lock = !1, fromCancel ? void(fromCancel = !1) : void(0 === i ? n.title ? e(null, { href: n.url, textValue: n.title }) : (u.jele.css({ "z-index": 10 }), myIcpVerify.show(t, n, function(i) { e(null, { href: i.url, textValue: i.title }), externCurUrl = i.url, myIcpVerify.hide(), externIsValid = !0, externPrevUrl = t, externIsChecked = !0, u.jele.css({ "z-index": 2040 }) }, function() { e("无备案信息，请输入正确的链接"), externIsValid = !1, externPrevUrl = t, externIsChecked = !0, u.jele.css({ "z-index": 2040 }) }, function() { u.jele.css({ "z-index": 2040 }), externIsValid = !1, externIsChecked = !1 })) : e(l))
                        }) : 1 === linkType && $.ajax("/article/check_internal_link/", {
                            data: { url: t, link_type: linkType },
                            success: function(i) {
                                if ("error" === i.message) {
                                    var l = "请输入有效的内部链接";
                                    lock = !1, e(l)
                                } else lock = !1, e(null, { href: t, textValue: $.trim(r.title_input.val()) })
                            },
                            error: function() { lock = !1, e("网络错误") }
                        }))) : e("请输入有效的内部链接")
                    }
                }
            });
            var o = Vali(r.input),
                u = Dialog({ type: "article_link", btns: [{ type: "ok", click: e }, { type: "cancel", click: function() { fromCancel = !0, a = null, r.result_list.hide(), r.search_hint.text(""), r.search_input.val("").removeClass("error"), u.hide() } }] }),
                d = u.jele.find(".spopup_dialog_body");
            d.append(s), r.search_btn.on("click", t), r.search_input.on("keydown", function(e) { 13 == e.keyCode && t() }), r.result_list.on("click", ".select-item", function() { $(this).closest(".item-tr").hasClass("checked") ? ($(this).closest(".item-tr").removeClass("checked"), a = null) : (r.result_list.find("div.checked.item-tr").removeClass("checked"), $(this).closest(".item-tr").addClass("checked"), a = $(this).closest(".item-tr").data()) });
            var _;
            return function(e) { _ = e.success || $.noop, o("reset"), r.input.val(e.name || ""), r.title_input.val(""), u.show() }
        }();
    ue.addListener("for_article_link", function() { dialog({ success: function(e) { ue.execCommand("link", e) } }) })
});;
define("pagelet/write/audio/uploader.js", function(e) {
    var a = e("common/util/util.js"),
        i = e("common/stip/stip.js"),
        t = /Mac OS X/,
        l = ["mp3", "amr", "wma", "wav", "aiff", "ogg", "aac", "ape"];
    return function(e, o) {
        function n(e, a) {
            return e.size > 3e7 ? "文件大小不能超过30MB" : -1 === l.indexOf(a.toLowerCase()) ? "音频格式只能是：" + l.join("，") : void 0
        }
        e.addClass("fileupload_btn");
        var r = '<input type="file" name="file" accept="audio/*">';
        t.test(navigator.userAgent) && (r = '<input type="file" name="file">');
        var u = $(r);
        e.append(u);
        var p = function(e) {
            $(u).fileupload({
                singleFileUploads: !0,
                replaceFileInput: !1,
                autoUpload: !1,
                maxRetries: 3,
                retryTimeout: 500,
                add: function(t, l) {
                    var d = $(this),
                        s = d.data("blueimp-fileupload"),
                        c = (s.options, $(r)[0]);
                    $(u).replaceWith(c), u = c, p(e + 1);
                    var f, m, v = l.files[0].name,
                        g = v.lastIndexOf("."); - 1 === g ? (m = v, f = "") : (m = v.slice(0, g), f = v.slice(g + 1));
                    var _ = n(l.files[0], f);
                    return _ ? void i.alert(_) : void a.ajax({
                        url: "/voice/get_upload_url/",
                        method: "get",
                        callback: function(e, a, t) {
                            if (0 !== e) return i.alert(a);
                            l.url = t.upload_url.replace(/^http(s)?:/, location.protocol);
                            var n = l.submit();
                            n.uploadProgress = function(e) { d.bind("fileuploadprogress", e) }, o(n, { upload_id: t.upload_id, name: v, title: m, ext: f })
                        }
                    })
                }
            })
        };
        p(1)
    }
});;
define("pagelet/write/audio/audio.js", function(require, exports, module) {
    var Util = require("common/util/util.js"),
        parser = require("common/util/parser.js"),
        uploadable = require("pagelet/write/audio/uploader.js"),
        audioTpl = require("pagelet/write/audio/audio.whe"),
        audioDetailTpl = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div class="audioupload" data-node="root" status="done">\n    <div class="audioupload_done">\n        <div class="audioupload_disk">\n            <div class="audioupload_play"></div>\n            <span class="audioupload_done_status" data-node="status"></span>\n        </div>\n        <div class="audioupload_title">\n            <span class="_title" data-node="name">' + (null == (__t = obj.name) ? "" : _.escape(__t)) + '</span>\n            <span class="_time" data-node="time">' + (null == (__t = obj.ptime) ? "" : _.escape(__t)) + '</span>\n            <span class="_icon"></span>\n        </div>\n        <div class="audioupload_done_btns">\n            <span class="audioupload_remove slink" data-node="remove">删除</span>\n        </div>\n        <span class="audioupload_insert widget_btn_cancel" data-node="insert">添加到正文</span>\n    </div>\n</div>';
            return __p
        },
        audioModalTpl = require("pagelet/write/audio/audio_modal.whe"),
        Dialog = require("common/popup/dialog.js");
    return function(a, t, e) {
        var o = $(audioModalTpl()).appendTo("body"),
            i = o.find("[data-node=submit]");
        o.find("[data-node=close]").click(function() { o.modal("hide") }), a.addListener("for_audio", function() { o.modal("show") }), uploadable(i, function(a, e) {
            function i() { a.uploadProgress(function(a, t) { n("uploading", t) }), a.always(function(a, t) { "success" === t ? s() : "abort" === t.textStatus || n("fail", "上传失败") }) }

            function n(a, t) { r = a, e.status = r, l.root.attr("status", "uploading" === r ? "uploading" : "status"), "uploading" === r ? (l.root.attr("status", "uploading"), l.status.text("上传中"), l.conunt.text((t.loaded / 1e6 + "").slice(0, 5) + "MB/" + (t.total / 1e6 + "").slice(0, 5) + "MB"), l.progress.css("width", parseInt(t.loaded / t.total * 100, 10) + "%")) : "convering" === r ? (l.root.attr("status", "done"), l.status.text("转码中")) : "done" === r ? (l.root.attr("status", "done"), l.status.text("处理成功"), l.time.text(e.ptime), $("head").trigger("_audio_status", e)) : (l.root.attr("status", "error"), l.status.text(t)) }

            function d() {
                var o = $(audioTpl()).data("data", e).prependTo(t);
                $("body").animate({ scrollTop: o.offset().top + o.height() - $(window).height() }), l = o.nodes(), l.name.text(e.name), l.abort.click(function() { clearTimeout(u), a.abort(), o.remove() }), l.remove.click(function() {
                    clearTimeout(u);
                    var a = new Dialog({ title: "提示", content: "确定要删除音频吗？", btns: [{ type: "ok", click: function() { $("head").trigger("_audio_remove", e), o.remove(), a.remove(), a = null } }, "cancel"] }).show()
                }), l.insert.click(function() { $("head").trigger("_audio_insert", e) })
            }

            function s() {
                Util.ajax({
                    url: "/voice/get_voice_info/",
                    method: "get",
                    data: { upload_id: e.upload_id },
                    callback: function(a, t, o) {
                        if (0 !== a) return void(u = setTimeout(s, 1e4));
                        switch (null != o.duration && (e.duration = o.duration, e.ptime = parser.duration(e.duration)), o.statusCode) {
                            case 10:
                                clearTimeout(u), n("done");
                                break;
                            case 4:
                            case 30:
                                u = setTimeout(s, 1e4), n("convering");
                                break;
                            default:
                                clearTimeout(u), n("error", o.reason || "网络错误")
                        }
                    }
                })
            }
            o.modal("hide"), e.status = "uploading";
            var u, r, l;
            i(), d()
        });
        for (var n = e.length, d = 0; n > d; d++) {
            var s = $(audioDetailTpl({ ptime: e[d].ptime, name: e[d].name })).prependTo(t);
            s.data({ data: e[d] }), jnodes = s.nodes(), jnodes.remove.click(function() {
                var a = $(this),
                    t = new Dialog({
                        title: "提示",
                        content: "确定要删除音频吗？",
                        btns: [{
                            type: "ok",
                            click: function() {
                                var e = a.closest(".audioupload").data("data");
                                $("head").trigger("_audio_remove", e), a.closest(".audioupload").remove(), t.remove(), t = null
                            }
                        }, "cancel"]
                    }).show()
            }), jnodes.insert.click(function() {
                var a = $(this).closest(".audioupload").data("data");
                $("head").trigger("_audio_insert", a)
            })
        }
    }
});;
define("pagelet/write/author.js", function(e, t, a) {
    function r(e) {
        var t = e.attr("data-id"),
            a = e.find(".author-name").text();
        if (t)
            for (var r = 0; r < f.length; r++) f[r] == t && f.splice(r, 1);
        else
            for (var r = 0; r < p.length; r++) p[r] == a && p.splice(r, 1);
        m--, e.remove(), h.show()[0].focus(), n()
    }

    function i(e) {
        if (m == A) return void alert("最多" + A + "位作者");
        if ($.isPlainObject(e) && -1 == $.inArray(e.id, f)) {
            f.push(e.id);
            var t = e
        } else if ("string" == typeof e && -1 == $.inArray(e, p)) {
            p.push(e);
            var t = [{ value: e, id: "" }]
        } else {
            if (!$.isArray(e) || !e.length) return;
            for (var t = [], a = 0; a < e.length; a++) - 1 == $.inArray(e[a], p) && (p.push(e[a]), t.push({ value: e[a], id: "" }))
        }
        var r = s(t);
        $(".authors-selected").append(r), n(), ++m == A && h.hide()
    }

    function n() {
        var e = $(".authors-control").width() - $(".authors-selected").width() - 10;
        h.val("").css({ width: e + "px" }), d.val(p.join(",")), v.val(f.join(","))
    }

    function s(e) {
        for (var t = "", a = 0; a < e.length; a++) {
            var r = e[a],
                i = "";
            i += u.replace("{{id}}", o.e(r.id)), t += i.replace("{{name}}", o.e(r.value))
        }
        return t
    } {
        var o = e("common/util/util.js"),
            u = '<div class="authors-selected-item" data-id="{{id}}"><span class="author-name">{{name}}</span><i class="author-remove"></i></div>',
            l = { BACKSPACE: 8, ENTER: 13, NUMPAD_ENTER: 108, SPACE: 32, TAB: 9 },
            c = $(".authors-control"),
            h = $("#authors"),
            v = ($(".authors-selected"), $("#author-ids")),
            d = $("#author-names"),
            f = [],
            p = [],
            m = 0,
            A = 3;
        c.width()
    }
    c.on("click", ".author-remove", function() {
        return r($(this).parent()), !1
    }), $("#authors").on("keydown", function(e) {
        switch (e.keyCode) {
            case l.BACKSPACE:
                var t = this.value;
                if (!t.length) {
                    var a = $(".authors-selected-item:last");
                    r(a), e.preventDefault()
                }
                break;
            case l.ENTER:
            case l.NUMPAD_ENTER:
            case l.SPACE:
            case l.TAB:
                var t = $.trim(h.val());
                t && i(t), e.preventDefault()
        }
    }).on("keyup", function(e) {
        switch (e.keyCode) {
            case l.SPACE:
                this.value = $.trim(this.value), e.preventDefault()
        }
    }).on("blur", function() {
        var e = $.trim(h.val());
        e && i(e)
    }), a.exports = function(e) { i(e.split(",")) }
});;
define("pagelet/write/cover.js", function(require, exports, module) {
    function realview_cover(e, i) {
        if (e && 0 == e.length) return void fixedAlert("请输入文章标题");
        var r = $("#cover-review-tmpl").children().clone(),
            t = r.find(".cover-imgs"),
            o = i.pgc_feed_covers.length;
        switch (i.type) {
            case "single":
                i.pgc_feed_covers.length ? (r.addClass("with-single-img"), t.html('<li class="cover-imgs-0"><img src="' + util.e("//p2.pstatp.com/" + i.pgc_feed_covers[0].crop_type + "/" + i.pgc_feed_covers[0].uri) + '"></li>')) : t.attr("style", "display:none;");
                break;
            case "multi":
                if (3 > o) return void fixedAlert("请先选取3幅封面图后再预览");
                for (var c = 0; 3 > c; c++) t.append('<li class="cover-imgs-' + c + '"><img src="' + util.e("//p2.pstatp.com/" + i.pgc_feed_covers[c].crop_type + "/" + i.pgc_feed_covers[c].uri) + '"></li>')
        }
        r.find(".cover-title").text(e), void 0 == window.frames.realview_iframe && $("body").append('<div id="realview" class="modal fade"  tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"><iframe id="realview_iframe" name="realview_iframe"  scrolling="yes" frameborder="0"></iframe></div></div></div>');
        var n = window.frames.realview_iframe;
        n.document.open(), n.document.write(r.prop("outerHTML")), $(n.document.body).prepend('<style>*{margin:0;padding:0;}ul{list-style:none;}img{border:none;vertical-align:middle;}body{padding:0 10px;font-family:"Microsoft YaHei",simsun,Arial;}.cover-review{position:relative;margin-top:10px;}.cover-review.with-single-img{padding-right:100px;min-height:63px}.cover-title{font-size:17px;font-weight:bold;line-height:1.2em;color:#464646}.with-single-img .cover-title{min-height:2.3em}.cover-imgs{width:100%;overflow:hidden;margin-top:5px}.with-single-img .cover-imgs{position:absolute;top:0;right:0;width:90px;height:63px;margin-top:0}.cover-imgs li{float:left;width:33.33333%;text-align:center;overflow:hidden}.with-single-img .cover-imgs li{float:none;width:100%;height:100%;text-align:center !important}.cover-imgs li:first-child{text-align:left}.cover-imgs li:last-child{text-align:right}.cover-imgs li.cover-imgs-3{text-align:right}.cover-imgs li img{width:94px;max-width:100%;height:66px;vertical-align:middle}.with-single-img .cover-imgs li img{width:100%;height:100%}.cover-info{font-size:11px;color:#999;margin-top:10px;line-height:1em}.cover-info li{display:inline-block}.with-single-img .cover-time{display:none}.cover-author{margin-right:5px}.cover-action{float:right;width:17px;height:12px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAD0SURBVHjajNIxSgNRFIXhbx5pUkiM2IQYEbKF7EL3IFpFyAa0sJDgBgzEKpsQVzB19qAY7SIYYcpoc4VhcJj83Tv3vse5590sz3PBFY7xia16fnCIN8yhhYQ7FHjAh2b6OMcUtwkX2OB+xwfgPfo3uEwYYlZpOgqrWZwzPIZeZoZhigyKSvEbZ1iG9SVOQy9TYJ1qQvzCIMZbhf1B6FW2qWS57ieayFJNoRMO+pFDP760819zwj7aFX0PTxjFKCM8h16mjW7CKyaV4iqW7y+vLcahl5ngJWGBA1yjt+Oe9HAT9xZZae3HOMG6Ye1b6MYEc/gdAOwrORz08d+/AAAAAElFTkSuQmCC);background-size:17px;cursor:pointer}.cover-time{float:right;margin-right:5px}</style>'), n.document.close(), $("#realview").modal()
    }

    function generateEffectUrl(e, i) {
        var r = new Image,
            t = preview_canvas.getContext("2d");
        r.crossOrigin = "Anonymous", r.onload = function() {
            var e = r.width,
                o = r.height;
            preview_canvas.width = e, preview_canvas.height = o, t.drawImage(r, 0, 0);
            var c = ImageProcess.effects.softEnhancement(t, 0, 0, e, o);
            t.putImageData(c, 0, 0), preview_canvas.toBlob(function(e) {
                var r = new FormData;
                r.append("upfile", e), $.ajax({ type: "post", url: "/tools/upload_picture/?pgc_watermark=0", data: r, contentType: !1, processData: !1 }).then(function(e) { i && i(e) })
            })
        }, r.src = e
    }

    function goGenerateEffectUrl() { $crop_process.addClass("disabled"), generateEffectUrl(origin_url, function(e) { e && e.url ? (effect_url = e.url.replace(/\/large\//, "/origin/"), $(".cover-crop-view-img").attr("src", effect_url), $("#cover-jcrop").attr("src", effect_url).attr("_process_uri", effect_url.split("/origin/")[1]), $crop_process.addClass("selected")) : alert("美化失败，请重试"), $crop_process.removeClass("disabled") }) }

    function updateSelectZone(e) {
        if (parseInt(e.w, 10) > 0) {
            var i = jcrop_api.tellSelect(),
                r = jcrop_width / i.w,
                t = jcrop_height / i.h,
                o = { width: Math.round(r * width), height: Math.round(t * height), top: 0 - Math.round(t * i.y), left: 0 - Math.round(r * i.x), maxWidth: "none", maxHeight: "none", right: "auto" };
            $(".cover-crop-view-img").css(o), jcrop_args = { x: Math.round(i.x), y: Math.round(i.y), w: Math.round(i.w), h: Math.round(i.h) }
        }
    }

    function checkRepeat(e, i) {
        var r = [];
        e.parents(".front-cover-upload").siblings(".front-cover-repeat-tip").hide();
        for (var t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("_origin_uri");
            if (-1 === r.indexOf(o)) r.push(o);
            else {
                if (i) return !0;
                $(e[t]).remove()
            }
        }
        return !1
    }

    function setCoverImage(e, i) {
        toggle_cover_loading(e, !0);
        var r = e.find("img"),
            t = i.uri,
            o = i.url,
            c = new Image;
        c.onload = function() {
            if (r.length) r.attr("src", o).attr("_src", t).attr("_origin_uri", t);
            else {
                var i = $("<img>");
                i.attr("src", o).attr("_src", t).attr("_origin_uri", t), e.prepend(i)
            }
            var c = checkRepeat(e.parent().find("img"), !0);
            c ? e.parent().siblings(".front-cover-repeat-tip").show() : e.parent().siblings(".front-cover-repeat-tip").hide(), toggle_cover_loading(e, !1)
        }, c.onerror = function() { toggle_cover_loading(e, !1) }, c.src = o, e.find(".cover-img-modify").show()
    }

    function frontCoverSelectSubmit(e, i) {
        var r = e.length;
        if ("text" !== i && $.ajax({ type: "post", url: "/article/add_pic_source_stat/", data: { pic_src: 4, pic_count: r } }), multi_select_list = e, multi_select) {
            for (var t = $cur_cover_img.parent().find(".front-cover-img"), o = 0; o < multi_select_list.length; o++) setCoverImage(t.eq(o), multi_select_list[o]);
            multi_select_list = []
        } else {
            var c = multi_select_list[0];
            setCoverImage($cur_cover_img, c)
        }
        $select_modal.modal("hide"), text_img_list = [], $select_cover_frame.fetchData({ list: [], maxNum: 1, callback: null, isShow: !1 })
    }

    function toggle_cover_loading(e, i) {
        var r = $cur_cover_img.find("img");
        i ? (crop_doing = !0, e.addClass("cover-loading"), r.length && r.css("opacity", 0)) : (crop_doing = !1, e.removeClass("cover-loading"), r.length && r.css("opacity", 1))
    }

    function reset_cover_crop() { jcrop_api && jcrop_api.destroy(), $crop_main.html('<div class="cover-crop-box"><img id="cover-jcrop"></div><div class="cover-crop-view"><img src="" class="cover-crop-view-img"></div>'), $crop_process.removeClass("selected"), effect_url = "", $crop_modal.modal("hide") }

    function Cover(e, i, r, t, o) { this.$el = $(e), this.$el.html(T_COVER({ tip: o.tip || "", line: o.line || !1 })), this.$cursor = this.$el.find(".front-cover-cur"), this.$coverMain = this.$el.find(".front-cover-main"), this.$coverRadio = this.$el.find(".front-cover-radio"), this.$coverMulti = this.$el.find(".front-cover-multi"), this.$repeat_tip = this.$el.find(".front-cover-repeat-tip"), this.options = o, this.covers = r || [], this.hasPermission = t, this.type = r && !i ? 1 === r.length ? "single" : 3 === r.length ? "multi" : "auto" : i || "auto", this.init() }
    var jcrop_args, jcrop_api, util = require("common/util/util.js"),
        T_COVER = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += '<div>\n    <div class="front-cover-type">\n        <div class="front-cover-item" ga="封面_单图">\n            <i class="front-cover-radio" data-type="single"></i>单图\n        </div>\n        <div class="front-cover-item" ga="封面_三图">\n            <i class="front-cover-radio" data-type="multi"></i>三图\n        </div>\n        <div class="front-cover-item" ga="封面_自动">\n            <i class="front-cover-radio" data-type="auto"></i>自动\n            <i class="gg-timer-tip j_timer_tip" data-title="系统会自动从正文中挑选封面，正文无图会使用无封面模式"></i>\n        </div>\n    </div>\n    <div class="front-cover-main">\n        <i class="front-cover-cur"></i>\n        <div class="front-cover-upload">\n            <div class="front-cover-img front-cover-single"><div class="cover-img-modify" ga="封面设置_进入手动裁剪"><i data-hoverTitle="裁切图片"></i></div></div>\n            <div class="front-cover-img front-cover-multi"><div class="cover-img-modify" ga="封面设置_进入手动裁剪"><i data-hoverTitle="裁切图片"></i></div></div>\n            <div class="front-cover-img front-cover-multi"><div class="cover-img-modify" ga="封面设置_进入手动裁剪"><i data-hoverTitle="裁切图片"></i></div></div>\n        </div>\n        <div class="front-cover-right">\n            <button class="new-btn front-cover-preview cancel">客户端预览</button>\n        </div>\n        <div class="front-cover-tip">' + (null == (__t = tip || "优质的封面有利于推荐，请使用清晰度较高的图片，避免使用GIF、带大量文字的图片。") ? "" : __t) + '</div>\n        <div class="front-cover-repeat-tip">为保证读者体验，请勿选择重复的封面。</div>\n    </div>\n</div>\n';
            return __p
        },
        $cur_cover_img = null,
        $select_modal = $("#cover-select-modal"),
        $crop_modal = $("#cover-crop-modal"),
        $crop_submit = $(".cover-crop-submit"),
        $crop_cancel = $(".cover-crop-cancel"),
        $crop_main = $(".cover-crop-main"),
        $crop_process = $(".cover-process-radio"),
        $select_cover_frame = window.frames["select-cover-frame"],
        crop_doing = !1,
        jcrop_width = 172,
        jcrop_height = 120,
        jcrop_ratio = jcrop_width / jcrop_height,
        preview_canvas = $("#cover-crop-view-canvas")[0],
        origin_url = "",
        effect_url = "",
        multi_select = !1,
        multi_select_list = [],
        text_img_list = [],
        id = 0;
    $crop_process.click(function() {
        var e = $(this),
            i = e.is(".selected");
        e.is(".disabled") || (i ? ($(".cover-crop-view-img").attr("src", origin_url), $("#cover-jcrop").attr("src", origin_url), e.removeClass("selected")) : effect_url ? ($(".cover-crop-view-img").attr("src", effect_url), $("#cover-jcrop").attr("src", effect_url), e.addClass("selected")) : goGenerateEffectUrl())
    }), window.closeFrame = function() { $select_modal.modal("hide"), multi_select_list = [], text_img_list = [], $select_cover_frame.fetchData({ list: [], maxNum: 1, callback: null, isShow: !1 }) }, $crop_submit.click(function() {
        toggle_cover_loading($cur_cover_img, !0);
        var e = $("#cover-jcrop"),
            i = e.attr("_origin_uri");
        process_uri = e.attr("_process_uri"), jcrop_args.image_url = e.attr("src");
        var r = jcrop_args.image_url.split("/origin/");
        return r[1] !== i && r[1] !== process_uri ? void alert("图片有问题，不能用来设置封面图") : ($.ajax({ type: "GET", url: "/crop_photo/", data: jcrop_args, dataType: "json" }).done(function(e) {
            if (e.new_url) {
                var r = $cur_cover_img.find("img"),
                    t = new Image;
                t.onload = function() {
                    if (r.length) r.attr("src", e.new_url).attr("_src", e.new_uri).attr("_origin_uri", i);
                    else {
                        var t = $("<img>");
                        t.attr("src", e.new_url).attr("_src", e.new_uri).attr("_origin_uri", i), $cur_cover_img.prepend(t)
                    }
                    toggle_cover_loading($cur_cover_img, !1), e.origin_uri = i
                }, t.onerror = function() { toggle_cover_loading($cur_cover_img, !1) }, t.src = e.new_url
            } else toggle_cover_loading($cur_cover_img, !1), alert("图像裁切失败，请稍后重试")
        }).fail(function() { toggle_cover_loading($cur_cover_img, !1), alert("服务异常，请稍后重试") }), void reset_cover_crop())
    }), $crop_cancel.click(function() { reset_cover_crop() }), Cover.prototype = {
        init: function() {
            var e = this;
            ue.addListener("contentChange", function() {
                if (!e.$el.is(".j_front_cover2")) {
                    var i = e.getCovers().pgc_feed_covers || [],
                        r = e.$el.find(".front-cover-radio[data-type=single]"),
                        t = e.$el.find(".front-cover-radio[data-type=multi]"),
                        o = e.$el.find(".front-cover-radio[data-type=auto]");
                    if (i.length) return void(1 === i.length ? r.trigger("click") : t.trigger("click"));
                    var c = e.options.getImages();
                    c && c.length ? c.length >= 1 && c.length < 3 ? r.trigger("click") : t.trigger("click") : o.trigger("click")
                }
            }), this.$el.on("click", ".front-cover-radio", function() {
                var i = $(this),
                    r = i.data("type"),
                    t = i.is(".selected"),
                    o = i.is(".disabled"),
                    c = e.$el.find(".front-cover-type").position().left,
                    n = i.position().left,
                    a = e.$el.find(".front-cover-img img");
                t || o || (e.$coverRadio.each(function(e, r) { i.is($(r)) || $(r).removeClass("selected") }), i.addClass("selected"), "auto" !== r ? ("single" === r ? (e.$coverMulti.hide(), e.$repeat_tip.hide()) : (checkRepeat(a, !0) && e.$repeat_tip.show(), e.$coverMulti.show()), e.$coverMain.show(), e.$cursor.animate({ left: n - c }, "fast")) : e.$coverMain.hide(), e.type = r)
            }), this.$el.on("click", ".cover-img-modify", function(e) {
                e.stopPropagation(), $cur_cover_img = $(this).parent();
                var i = $cur_cover_img.find("img");
                i && i.length && (origin_url = "//p3.pstatp.com/origin/" + i[0].getAttribute("_origin_uri"), $("#cover-jcrop").attr("src", origin_url).attr("_origin_uri", i[0].getAttribute("_origin_uri")), $(".cover-crop-view-img").attr("src", origin_url), $crop_modal.modal(), goGenerateEffectUrl(), $("#cover-jcrop").Jcrop({ bgColor: "#000", bgOpacity: .6, aspectRatio: jcrop_ratio, minSize: [jcrop_width, jcrop_height], onChange: updateSelectZone, onSelect: updateSelectZone, boxWidth: 400, boxHeight: 380 }, function() {
                    var e = this.getBounds();
                    width = Math.round(e[0]), height = Math.round(e[1]), jcrop_api = this, size_w = 0, size_h = 0, pos_x = 0, pos_y = 0, width >= Math.floor(height * jcrop_ratio) ? (pos_x = (width - height * jcrop_ratio) / 2, size_h = height, size_w = Math.round(size_h * jcrop_ratio)) : (pos_y = (height - width / jcrop_ratio) / 2, size_w = width, size_h = Math.round(size_w / jcrop_ratio)), this.setSelect([pos_x, pos_y, size_w, size_h]);
                    var i = this.tellSelect();
                    jcrop_args = { x: Math.round(i.x), y: Math.round(i.y), w: Math.round(i.w), h: Math.round(i.h) }
                }))
            }), this.$el.on("click", ".front-cover-img", function() {
                if (crop_doing) return void alert("当前封面裁切正在处理中，请稍后");
                var i = $(this),
                    r = e.options.getImages(),
                    t = r.length;
                $cur_cover_img = i;
                for (var o = 0; t > o; o++) {
                    var c = r[o].src;
                    if (id += 1, /\/large\//.test(c)) {
                        var n = c.replace(/\/large\//, "/origin/"),
                            a = c.split("/large/"),
                            l = { url: util.e(n), uri: util.e(a[1]), id: id };
                        text_img_list.push(l)
                    }
                }
                $select_modal.modal(), multi_select = !(i.parent().find("img[_origin_uri]").length || !e.$el.find(".front-cover-radio[data-type=multi]").is(".selected")), $select_cover_frame.fetchData({ list: text_img_list, maxNum: multi_select ? 3 : 1, callback: frontCoverSelectSubmit, isShow: !0, hasPermission: e.hasPermission })
            }), this.$el.on("click", ".front-cover-preview", $.proxy(this.preview, this)), this.setCovers(this.type, this.covers)
        },
        setCovers: function(e, i) {
            this.$el.find(".front-cover-radio[data-type=" + this.type + "]").trigger("click");
            var r = this.$el.find(".front-cover-img");
            if (i && i.length) {
                i.forEach(function(e, i) {
                    var t = e.crop_type || (e.uri === e.origin_uri ? "list" : "large");
                    r.eq(i).find("img").length ? r.eq(i).find("img").attr({ src: "//p3.pstatp.com/" + t + "/" + e.uri, _src: e.uri, _origin_uri: e.origin_uri }) : r.eq(i).prepend('<img src="//p3.pstatp.com/' + t + "/" + e.uri + '" _src="' + e.uri + '" _origin_uri="' + e.origin_uri + '"></img>'), r.eq(i).find(".cover-img-modify").show()
                });
                var t = checkRepeat(r.find("img"), !0);
                t ? r.parent().siblings(".front-cover-repeat-tip").show() : r.parent().siblings(".front-cover-repeat-tip").hide()
            }
        },
        getCovers: function() {
            return {
                type: this.$el.find(".front-cover-radio.selected").data("type") || "auto",
                pgc_feed_covers: this.$coverMain.find("img").map(function(e, i) {
                    var r = $(i);
                    return { uri: r.attr("_src"), crop_type: -1 !== r.attr("src").indexOf("/list/") ? "list" : "large", origin_uri: r.attr("_origin_uri") }
                }).toArray()
            }
        },
        preview: function() {
            var e = this.options.getTitle(),
                i = this.getCovers();
            realview_cover(e, i)
        },
        validate: function() {
            var e = this.$el.find(".front-cover-img img"),
                i = this.$el.find(".front-cover-single img"),
                r = this.$el.find(".front-cover-img .cover-img-modify"),
                t = e.length,
                o = this.$el.find(".front-cover-radio.selected").data("type");
            if ("auto" == o) return !0;
            if (0 == t) return !1;
            if ("single" == o && 0 == i.length) return !1;
            if (checkRepeat(e), !this.hasPermission) {
                var c, n = this.options.getImages(),
                    a = [];
                for (c = n.length - 1; c >= 0; c--) {
                    var l = n[c].src;
                    if (/\/large\//.test(l)) {
                        var s = l.split("/large/");
                        a.push(s[1])
                    }
                }
                for (c = 0; t > c; c++) {
                    for (var g = e[c].getAttribute("_origin_uri"), d = !1, v = 0; v < a.length; v++) a[v] === g && (d = !0);
                    d || ($(e[c]).remove(), $(r[c]).hide())
                }
            }
            var p = this.$el.find(".front-cover-img img"),
                m = this.$el.find(".front-cover-single img");
            return "single" == o && 0 == m.length ? !1 : "multi" == o && 3 != p.length ? !1 : !0
        }
    }, module.exports = Cover
});;
define("pagelet/write/gallery.js", function(e, a, t) {
    function l() { alert("组图上传功能基于flash插件，在您的浏览器中未检测到相应的flash插件。") }

    function i(e, a) {
        var t = "不会被添加到上传队列中";
        switch (a) {
            case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                alert("您一次上传的图片个数超过了上传队列最大限制，请确保每次批量上传图片数量少于 " + Q.queueSizeLimit + "个");
                break;
            case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                alert("文件：" + e.name + " 超出了文件大小限制（" + Q.fileSizeLimit + "），" + t);
                break;
            case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                alert("文件：" + e.name + " 是空文件，" + t);
                break;
            case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                alert("文件：" + e.name + " 不在允许的图片类型范围（" + Q.fileTypeExts + "），" + t)
        }
    }

    function r(e) {
        var a = M.replace(/{fileID}/g, e.id),
            t = $(a);
        t.find(".gallery-desc").attr("placeholder", "图片说明（不超过" + D + "字）"), t.find(".gallery-del").attr("data-instanceid", e.instanceID), R.append(t)
    }

    function n(e) { e.filesQueued && (_.addClass("gallery-no-empty"), p(), R.scrollTop(1e4)) }

    function o(e, a) {
        var t = $("#gallery-" + e.id),
            l = t.find(".gallery-img"),
            i = new Image;
        a = JSON.parse(a), "SUCCESS" == a.state ? (i.setAttribute("data-uri", a.original), i.setAttribute("data-width", a.width), i.setAttribute("data-height", a.height), i.onload = function() {
            var a = i.width,
                t = i.height,
                r = f(a, t);
            i.setAttribute("style", r), l.prepend(i), l.removeClass("gallery-img-loading"), g(e.id)
        }, i.onerror = function() { s(e, !1) }, i.src = a.url) : s(e, !1)
    }

    function d(e) { e.remove(), p() }

    function s(e, a) {
        var t = (e.id, null),
            l = null;
        a ? (l = $("#" + e.id).parents(".gallery-img"), alert("图片 " + e.name + "更新失败，请重新上传"), l.removeClass("gallery-img-loading")) : (t = $("#gallery-" + e.id), alert("图片 " + e.name + "上传失败，请重新上传"), d(t))
    }

    function g(e) {
        var a = $.extend({}, Q);
        a.multi = !1, a.width = 102, a.height = 78, a.onSelect = c, a.onUploadStart = u, a.onUploadSuccess = h, $("#gallery-modify-" + e).uploadify(a)
    }

    function c(e) {
        var a = e.instanceID,
            t = $("#" + a).parents("li"),
            l = t.find(".gallery-del");
        l.attr("data-instanceid", a), l.attr("data-fileid", e.id)
    }

    function u(e) {
        var a = $("#" + e.id).parents(".gallery-img");
        a.addClass("gallery-img-loading")
    }

    function h(e, a) {
        var t = $("#" + e.id).parents(".gallery-img"),
            l = new Image,
            a = JSON.parse(a);
        "SUCCESS" == a.state ? (l.onload = function() {
            var e = l.width,
                i = l.height,
                r = f(e, i);
            t.removeClass("gallery-img-loading"), t.find("img").attr("src", a.url).attr("data-uri", a.original).attr("data-width", a.width).attr("data-height", a.height).attr("style", r)
        }, l.onerror = function() { s(e, !0) }, l.src = a.url) : s(e, !0)
    }

    function f(e, a) {
        var t = 102,
            l = 78,
            i = 0,
            r = 0,
            n = 0,
            o = "";
        if (!e || !a) return "";
        if (e >= a) {
            if (i = t / e, r = t, n = parseInt(a * i), l > n) {
                var d = parseInt((l - n) / 2);
                o = "height:auto;padding-top:" + d + "px;"
            }
        } else if (i = l / a, n = l, adjust_width = parseInt(e * i), t > adjust_width) {
            { parseInt((t - adjust_width) / 2) }
            o = "width:auto;"
        }
        return o
    }

    function m() {
        var e = $.extend({}, Q);
        e.width = 574, e.height = 280, e.onSelect = r, e.onDialogClose = n, e.onUploadSuccess = o, x.uploadify(e);
        var a = $.extend({}, e);
        a.width = 90, a.height = 16, L.uploadify(a), S.click(function() { R.children().length && (_.addClass("gallery-sorting"), R.sortable({ placeholder: "ui-state-highlight", disabled: !1, handle: ".gallery-sort-icon" }), R.disableSelection()) }), C.click(function() { _.removeClass("gallery-sorting"), R.sortable({ disabled: !0 }), p() }), I.click(function() { _.removeClass("gallery-sorting"), R.sortable({ disabled: !0 }), R.sortable("cancel") }), R.on("click", ".gallery-del", function() {
            var e = $(this).data("instanceid") || "",
                a = $(this).data("fileid") || "";
            e && a ? ($("#" + e).uploadify("cancel", a), $(this).parents("li").remove()) : $(this).parents("li").remove(), 0 == R.children().length ? (_.removeClass("gallery-no-empty"), k.html("")) : p()
        }), R.on("focusout", ".gallery-desc", function() { $(this).is(".new") && this.value.length && $(this).removeClass("new") }), R.on("keypress", ".gallery-desc", function(e) {
            return this.value.length > D ? void e.preventDefault() : void 0
        }), U.click(function() {
            var e = R.find(".gallery-item"),
                a = e.length,
                t = R.find(".gallery-img-loading");
            if (0 != a) {
                if (3 > a) return void k.html("图集至少添加三张图片");
                if (t.length) return void k.html("请等待所有图片上传完毕后提交");
                k.html("");
                var l = [];
                if (e.each(function(e, a) {
                        var t = $(a).find(".gallery-img img"),
                            i = $(a).find(".gallery-desc"),
                            r = {};
                        r.uri = t.attr("data-uri"), r.url = t.attr("src"), r.width = parseInt(t.attr("data-width")), r.height = parseInt(t.attr("data-height")), r.desc = i.val(), l.push(r)
                    }), l.length) {
                    var i = _.data("index"),
                        r = {}; - 1 == i ? (T++, r.type = "new", r.id = T, global_gallery[T] = l) : (r.type = "update", r.id = i, global_gallery[i] = l), r.data = l, _.modal("hide"), E(r)
                }
            }
        })
    }

    function p() {
        for (var e = R.children(), a = e.length, t = 0; a > t; t++) $(e[t]).find(".gallery-no").html(t + 1)
    }

    function y(e) {
        global_gallery = {}, T = -1;
        for (var a = e.gallery_info || [], t = 0; t < a.length; t++) T++, global_gallery[T] = a[t].list
    }

    function v(e) {
        var a = global_gallery[e];
        if (a) {
            _.modal();
            for (var t = 0; t < a.length; t++) {
                var l = M.replace(/{fileID}/g, t),
                    i = $(l);
                i.find(".gallery-no").html(t + 1), i.find(".gallery-img").removeClass("gallery-img-loading").prepend('<img src="' + b.e(a[t].url) + '" data-uri="' + b.e(a[t].uri) + '" data-width="' + a[t].width + '" data-height="' + a[t].height + '" >'), i.find(".gallery-desc").val(a[t].desc).removeClass("new").attr("placeholder", "图片说明（不超过" + b.e(D) + "字）"), R.append(i), g(t)
            }
        }
    }

    function E(e) {
        var a = "/gallery_iframe/?index=" + e.id + "&url=" + e.data[0].url;
        if ("new" == e.type) {
            var t = $("<iframe></iframe>");
            t.attr("id", "gallery-" + e.id), t.attr("class", "mp-gallery"), t.attr("src", a), t.attr("scrolling", "no"), t.attr("frameborder", 0), t.attr("name", "iframe" + e.id), t.attr("onload", "this.height=iframe" + e.id + ".document.body.scrollHeight"), t.attr("style", "display:block;margin:0 auto;"), ue.execCommand("inserthtml", "<p>" + t.prop("outerHTML") + "</p>")
        } else ue.document.getElementById("gallery-" + e.id).src = a
    }

    function w(e) { R.html(""), e ? (_.addClass("gallery-no-empty"), _.data("index", e), v(e)) : (_.removeClass("gallery-no-empty"), _.data("index", -1), _.modal()) }
    var b = e("common/util/util.js"),
        _ = $("#gallery-modal"),
        S = ($(".gallery-new"), $(".gallery-sort"), $(".sort-trigger")),
        C = $(".sort-done"),
        I = $(".sort-cancel"),
        U = $(".gallery-submit"),
        x = $("#gallery-new-trigger"),
        L = $("#gallery-more-trigger"),
        R = ($(".gallery-del"), $("#gallery-items")),
        k = $(".gallery-edit-tip"),
        D = $(".gallery-desc").attr("maxlength") || 200,
        T = -1,
        j = "/tools/upload_picture/",
        F = "/static/uploadify/uploadify.swf",
        O = "upfile",
        M = $("#gallery-item-tpl").children().prop("outerHTML"),
        Q = { swf: F, uploader: j, fileObjName: O, buttonText: "+添加图片", fileSizeLimit: "5MB", fileTypeExts: "*.gif; *.jpg; *.jpeg; *.png", method: "post", multi: !0, uploadLimit: 999, queueSizeLimit: 30, overrideEvents: ["onUploadProgress", "onDialogClose"], removeCompleted: !0, preventCaching: !1, removeTimeout: 1, onFallback: l, onSelectError: i };
    window.global_gallery = {}, t.exports = function(e) { window.create_groupimages = w, window.create_gallery = w, y(e), m() }
});;
define("pagelet/write/rank.js", function(a, n, t) {
    function r(a) { d(a) }

    function d(a) { $("#rank-modal").modal(), a ? e(a) : i() }

    function i() {
        $("#rank-header").html("添加排行榜");
        var a = $("#rank-append-tpl").children().clone(),
            n = $("#rank-header-tpl").children().clone();
        a.find(".rank-delete").remove(), $(".rank-con").html(n), $(".rank-con").append(a), $("#rank-modal").data("iframeid", "")
    }

    function e(a) {
        $("#rank-header").html("更新排行榜"), $("#rank-modal").data("iframeid", a.id);
        var n = a.data,
            t = $("<div></div>"),
            r = $("#rank-header-tpl").children().clone();
        r.find("#rank-main-header").attr("value", a.header), r.find("#rank-main-period").attr("value", a.period), t.append(r);
        for (var d = 0; d < n.length; d++) {
            var i = $("#rank-append-tpl").children().clone(),
                e = i.find(".rank-atom-unfold"),
                l = i.find(".rank-atom-fold"),
                o = d + 1;
            if (i.attr("data-fold-status", 1), i.attr("data-rank-no", o), e.find(".rank-no").html(o), e.find(".rank-avatar-img").attr("src", n[d].avatar), e.find(".rank-avatar-file").attr("id", "rank-avatar-file-" + o), e.find(".rank-main-title").attr("value", n[d].t_1), e.find(".rank-left-title").attr("value", n[d].t_2), e.find(".rank-right-title").attr("value", n[d].t_3), e.find(".rank-link").attr("value", n[d].href), e.hide(), l.find(".rank-fold-no").html(o), l.find(".rank-fold-img").attr("src", n[d].avatar), l.find(".rank-fold-main-up").html(n[d].t_1), "" == n[d].t_3) l.find(".rank-fold-main-down").html(n[d].t_2);
            else {
                var f = '<div class="rank-fold-name">' + k.e(n[d].t_2) + "</div>";
                f = f + '<div class="rank-fold-other">阅读: <span class="rank-fold-num">' + k.e(n[d].t_3) + "</span></div>", l.find(".rank-fold-main-down").html(f)
            }
            l.show(), t.append(i)
        }
        $(".rank-con").html(t.html())
    }

    function l(a) {
        var n = $(a),
            t = n.attr("id"),
            r = n.val(),
            d = n.parent().find("img"),
            i = d.parent(),
            e = "图片上传失败，为您恢复到上传前状态";
        r && (i.addClass("rank-upload-loading"), d.hide(), $.ajaxFileUpload({
            url: "/upload_photo/?type=json",
            secureuri: !1,
            fileElementId: t,
            dataType: "json",
            success: function(a) {
                if ("success" == a.message) {
                    var n = a.web_url,
                        t = new Image;
                    t.src = n, t.onload = function() { d.attr("src", n).attr("style", "height:100%"), o(d, i) }, t.onerror = function() { o(d, i), alert(e) }
                } else o(d, i), alert(e)
            },
            error: function() { o(d, i), alert(e) }
        }))
    }

    function o(a, n) { a.show(), n.removeClass("rank-upload-loading") }

    function f(a) {
        var n = a.find(".rank-atom-unfold"),
            t = n.find(".rank-avatar-img").attr("src"),
            r = $.trim(n.find(".rank-main-title").val()),
            d = $.trim(n.find(".rank-left-title").val()),
            i = $.trim(n.find(".rank-link").val());
        return t && r && d && i && m.test(i) ? !0 : !1
    }

    function u(a) {
        var n = a.attr("data-rank-no"),
            t = a.find(".rank-atom-unfold"),
            r = a.find(".rank-atom-fold"),
            d = t.find(".rank-avatar-img").attr("src"),
            i = $.trim(t.find(".rank-main-title").val()),
            e = $.trim(t.find(".rank-left-title").val()),
            l = $.trim(t.find(".rank-right-title").val()),
            o = $.trim(t.find(".rank-link").val());
        if (r.find(".rank-fold-no").html(n), r.find(".rank-fold-img").attr("src", d), r.find(".rank-fold-main-up").text(i), "" == l) r.find(".rank-fold-main-down").text(e);
        else {
            var f = '<div class="rank-fold-other">阅读:<span class="rank-fold-num">' + k.e(l) + "</span></div>";
            f = f + '<div class="rank-fold-name rank-txt-overflow">' + k.e(e) + "</div>", r.find(".rank-fold-main-down").html(f)
        }
        return /^http:\/\//.test(o) || (o = "http://" + o), r.find(".rank-fold-link").attr("href", o), a.attr("data-fold-status", 1), t.slideUp("fast"), r.show(), !0
    }

    function F(a) {
        var n = "rank-avatar-file-",
            t = 0,
            r = a;
        $("#rank-btn-submit").click(function() {
            var a = !0,
                n = [],
                d = 0,
                i = $.trim($("#rank-main-header").val()),
                e = $.trim($("#rank-main-period").val());
            if (!i.length || !e.length) return void alert("资料不完整");
            if ($(".rank-con .rank-atom").each(function(t, r) {
                    if (!f($(r))) return a = !1, !1;
                    d++;
                    var i = {};
                    i.avatar = $(r).find(".rank-avatar-img").attr("src"), i.t_1 = $.trim($(r).find(".rank-main-title").val()), i.t_2 = $.trim($(r).find(".rank-left-title").val()), i.t_3 = $.trim($(r).find(".rank-right-title").val()), i.href = $.trim($(r).find(".rank-link").val()), i.no = d, /^http:\/\//.test(i.href) || (i.href = "http://" + i.href), n.push(i)
                }), !a) return void alert("您创建的排行榜存在格式不正确，请检查");
            if (0 == n.length) return void alert("请先创建排行榜");
            var l = $("#rank-modal").data("iframeid"),
                o = { data: n, header: i, period: e };
            if (l) {
                o.id = l;
                var u = r.document.getElementById(l);
                u.contentWindow.postMessage(o, "*")
            } else {
                t++;
                var F = $("<iframe></iframe>"),
                    l = "mp-ranking-" + t;
                o.id = l, F.attr("id", l), F.attr("class", "mp-ranking"), F.attr("src", "/tmp_rank_iframe/?query=" + JSON.stringify(o)), F.attr("scrolling", "no"), F.attr("frameborder", 0), F.attr("name", l), F.attr("onload", "this.height=" + l + ".document.body.scrollHeight"), F.attr("style", "display:block;margin:0 auto;"), r.execCommand("inserthtml", "<p>" + iframe_str + "</p>")
            }
            $("#rank-modal").modal("hide")
        }), $("#rank-append").click(function() {
            var a = $(".rank-con"),
                t = a.find(".rank-atom").last(),
                r = t.length ? t.attr("data-fold-status") : 0,
                d = t.length ? parseInt(t.attr("data-rank-no")) : 0;
            if (t.length && 0 == r) {
                if (!f(t)) return void alert("当前榜单不完整，或格式非法，请调整后再添加新的排行");
                u(t)
            }
            var i = $("#rank-append-tpl").children().clone();
            d += 1, i.attr("data-rank-no", d), i.find(".rank-no").html(d), i.find(".rank-avatar-file").attr("id", n + d), a.append(i)
        }), $("#rank-modal").on("click", ".rank-fold", function() {
            var a = $(this).parents(".rank-atom");
            return f(a) ? void u(a) : void alert("当前榜单不完整，或格式非法，请修改")
        }), $("#rank-modal").on("click", ".rank-unfold", function() {
            var a = $(this).parents(".rank-atom"),
                n = a.children(".rank-atom-unfold"),
                t = a.children(".rank-atom-fold");
            a.attr("data-fold-status", 0), n.slideDown("fast"), t.hide()
        }), $("#rank-modal").on("click", ".rank-upload", function() {
            var a = $(this).parent().find(".rank-avatar-file");
            a.trigger("click"), a.one("change", function() { l(this) })
        }), $("#rank-modal").on("click", ".rank-delete", function() {
            for (var a = $(this).parents(".rank-atom"), t = a.nextAll(), r = 0; r < t.length; r++) {
                var d = $(t[r]),
                    i = parseInt(d.attr("data-rank-no")) - 1;
                d.attr("data-rank-no", i), d.find(".rank-avatar-file").attr("id", n + i), d.find(".rank-fold-no").html(i), d.find(".rank-no").html(i)
            }
            a.remove()
        }), $("#rank-btn-cancel").click(function() { $("#rank-modal").modal("hide") })
    }
    var k = a("common/util/util.js"),
        m = /^((https|http|ftp|rtsp|mms):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    window.create_rank = d, window.mp_rank_modify = r, t.exports = function(a) { F(a.ue) }
});;
define("pagelet/write/standard.js", function(e, n, o) {
    function a() {
        var e = $.cookie("seen_standard_cookie");
        e && "seen" == e || setTimeout(function() { i.modal("show") }, 50)
    } {
        var i = (e("common/util/util.js"), $(".standard-dialog")),
            s = $(".standard-known");
        $("#show-standard")
    }
    s.click(function() {
        var e = $.cookie("seen_standard_cookie");
        e && "seen" == e || $.cookie("seen_standard_cookie", "seen", { expires: 365 }), i.modal("hide")
    }), o.exports = function(e) { a(e) }
});;
define("pagelet/write/telephone.js", function() {
    var t = {
        showDialog: function() { this.$modal.modal("show") },
        hideDialog: function() { this.reset(), this.$modal.modal("hide") },
        submit: function() {
            var t = this.formCheck();
            if (t.valid) {
                this.hideDialog();
                var o = '<p><tt-phone-group contact-name="' + t.vals.contactName + '" contact-phone="' + t.vals.contactPhone + '" book-name="' + t.vals.bookName + '" book-url="' + t.vals.bookUrl + '" /></p>';
                ue.execCommand("inserthtml", o), this.reset()
            }
        },
        reset: function() { this.formDom.reset(), $(this.formDom).find(".edit-error").removeClass("edit-error"), this.$errorMsg.html("") },
        formCheck: function() {
            var t = { contactName: this.$contactName.val(), contactPhone: this.$contactPhone.val(), bookName: this.$bookName.val(), bookUrl: this.$bookUrl.val() },
                o = t.contactName || t.contactPhone,
                e = t.bookName || t.bookUrl,
                n = [],
                i = { contactName: !0, contactPhone: !0, bookName: !0, bookUrl: !0 };
            o || e ? (o && (t.contactName ? this.checkName(t.contactName) || (i.contactName = !1, n.push("名称只能填写2-5个字")) : (i.contactName = !1, n.push("请填写联系方式的名称")), this.checkPhoneNum(t.contactPhone) || (i.contactPhone = !1, n.push("请填写正确的联系方式电话号码"))), e && (t.bookName ? this.checkName(t.bookName) || (i.bookName = !1, n.push("名称只能填写2-5个字")) : (i.bookName = !1, n.push("请填写预约方式的名称")), this.checkUrl(t.bookUrl) || (i.bookUrl = !1, n.push("请填写正确的预约方式链接地址")))) : n.push("请至少填写联系方式或者预约方式中的一项");
            var a;
            for (var c in i) i.hasOwnProperty(c) && (a = this["$" + c].parentsUntil(".edit-cell").parent(), i[c] ? a.removeClass("edit-error") : a.addClass("edit-error"));
            var h = n.map(function(t) {
                return "<p>" + t + "</p>"
            }).join("");
            return this.$errorMsg.html(h), { valid: 0 === n.length, vals: t }
        },
        checkName: function(t) {
            return t.length >= 2 && t.length <= 5
        },
        checkUrl: function(t) {
            return /^https?:\/\/[0-9.\-A-Za-z]+(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/.test(t)
        },
        checkPhoneNum: function(t) {
            return /^\d{3}\d{7,8}|\d{4}\d{7,8}$/.test(t) || /^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/.test(t)
        },
        event: function() { ue.addListener("for_telephone", function() { t.showDialog() }), this.$cancel.click(this.hideDialog.bind(this)), this.$submit.click(this.submit.bind(this)) },
        init: function() {
            var t = this.$modal = $("#telephone-dialog");
            this.$cancel = t.find(".widget_btn_cancel"), this.$submit = t.find(".widget_btn_ok"), this.$contactName = t.find("#contact-name"), this.$contactPhone = t.find("#contact-phone"), this.$bookName = t.find("#book-name"), this.$bookUrl = t.find("#book-url"), this.$errorMsg = t.find(".edit-error-msg"), this.formDom = t.find("form")[0], this.event()
        }
    };
    t.init()
});;
define("pagelet/write/video-v2.js", function(e, t, i) {
    function a(e, t, i, a) {
        var o = "{}";
        return $.ajax({ type: a || "POST", async: t, url: "/video/video_api/", data: { json_data: JSON.stringify(e) }, dataType: "json" }).done(function(e) { "success" == e.message ? o = e.data : !i && D("alert", "服务异常：" + e.reason + " 请稍后重试") }).fail(function() {!i && D("alert", "抱歉，服务异常，请稍后再试") }), o
    }

    function o(e) { e && lt("media") }

    function d(e) {
        if (e.length) {
            V.text(e).addClass("error"), Y.html(dt), Q.text("取消"), X.addClass("hide");
            try {
                var t = r();
                t && $(t).remove()
            } catch (i) {}
            vt = { vid: 0, vu: "", vname: "", vposter: "", status: "", md5: "" }
        }
    }

    function r(e) {
        var t = nt.document,
            i = t.getElementById("local-video-" + (e ? e : vt.vid));
        return i
    }

    function s(e) {
        if (e || vt.vid) {
            var t = { api: "meta", ref_id: e ? e : vt.vid },
                i = JSON.parse(a(t, !1, !0)),
                o = !1,
                u = "",
                v = !1;
            if (mp_video_log(i, "get_transcoding_status"), 0 == i.code) {
                var n = i.data,
                    l = n.status;
                if (u = n.video_name || "", "10" == l) {
                    o = !0, vt.status = "success";
                    var c = "http://i.snssdk.com/video/playcode/1/toutiao/" + n.video_id,
                        m = rt.replace(/#href#/, y.e(c));
                    m = m.replace(/#img#/, y.e(vt.vposter)), Y.html(m);
                    try {
                        var p = r(),
                            f = "/video_iframe/?type=local&subtype=self&vid=" + vt.vid + "&img=" + vt.vposter + "&name=" + u;
                        p && p.setAttribute("src", f)
                    } catch (_) {}
                    V.text(at).removeClass("error")
                } else if ("30" == l) {
                    o = !0, vt.status = "transcoding";
                    var F = ot.replace(/#img#/, y.e(vt.vposter));
                    Y.html(F), V.text(at + "（处理中不影响文章发表）").removeClass("error"), j = setTimeout(s, z)
                } else vt.status = "fail", d("视频处理失败")
            } else i.code ? (vt.status = "error", !e && N > 0 ? (mp_video_log("失败重试倒数第：" + N + "次"), N--, j = setTimeout(s, z)) : (vt.status = "fail", d(i.message))) : (v = !0, j = setTimeout(s, z), mp_video_log("转码查询 未返回有效ret"));
            v || (o ? (B.submit_video.vid = vt.vid, B.submit_video.vu = vt.vu, B.submit_video.vname = u, B.submit_video.vposter = vt.vposter) : (B.submit_video.vid = 0, B.submit_video.vu = "", B.submit_video.vname = "", B.submit_video.vposter = ""))
        }
    }

    function u(e, t) {
        if (e > 0) {
            t > e && (t = e);
            var i = (t / e * 100).toFixed(2),
                a = (e / R).toFixed(2) + "MB",
                o = (t / R).toFixed(2) + "MB",
                d = i + "%",
                r = P.data("loaded") || 0;
            t > r && (P.data("loaded", t).text(o + "/" + a + " " + d), W.get(0).style.width = d)
        }
    }

    function v(e) {
        if ("delete" == e || "reupload" == e) try {
            var t = r();
            t && $(t).remove()
        } catch (i) {}
        upload_auto_retries = 0, N = 2, j && clearTimeout(j), T && clearInterval(T), vt = { vid: 0, vu: "", vname: "", vposter: "", status: "", md5: "" }, B.submit_video = { vid: 0, vu: "", vname: "", vposter: "", uploading: !1 }, ("delete" == e || "cancel" == e) && H.addClass("hide"), K.text(""), P.data("loaded", 0).text(""), W.get(0).style.width = "0%", Y.html(""), L.text(""), Q.text("添加到正文"), V.text(at).removeClass("error"), I.removeClass("hide"), J.addClass("hide"), X.removeClass("hide")
    }

    function n() { O && (O.abort(), O.abortCheckStatus && O.abortCheckStatus(), v("cancel"), lt("article"), O = null) }

    function l() { A.trigger("has-video", "change-cover", 0), A.trigger("has-video", "double-change", 0), v("delete"), lt("article"), O && O.abortCheckStatus && O.abortCheckStatus() }

    function c(e) {
        if ("object" == typeof e && e.vposter) {
            var t = "http://i.snssdk.com/video/playcode/1/toutiao/" + e.vid,
                i = rt.replace(/#href#/, y.e(t));
            i = i.replace(/#img#/, y.e(e.vposter)), Y.html(i);
            try {
                nt.ready(function() {
                    var t = r();
                    if (t) {
                        var i = $(t),
                            a = "/video_iframe/?type=local&subtype=self&vid=" + e.vid + "&img=" + e.vposter + "&name=" + e.vname;
                        i.attr("data-vposter", e.vposter).attr("src", a)
                    }
                })
            } catch (a) {}
        }
    }

    function m(e) {
        B = e, mt.test(navigator.userAgent) && $("#video_file").prop("accept", "*"), B.claim_origin_permission && tt.append('<a style="display:inline-block;line-height:40px;margin-left:20px;font-size:14px;" class="slink" href="http://jmj.toutiao.com" target="_blank">参加金秒奖，赢得今日头条亿级展示资源</a>');
        var t = B.submit_video.vid;
        if (t)
            if (vt.vid = B.submit_video.vid, vt.vu = B.submit_video.vu, vt.vname = B.submit_video.vname, vt.vposter = B.submit_video.vposter, vt.vposter) c(vt), vt.status = "success";
            else try { nt.ready(function() { s(t) }) } catch (i) { setTimeout(function() { s(t) }, 1e3) }
        e.pgc_id && e.after_pass_modify ? (X.addClass("disable"), $(".video-feedback-retry").addClass("disable"), $("#retry_video_file").remove()) : (!e.pgc_id || e.is_draft || e.after_pass_modify || X.remove(), G.on("click", function() { O && D("confirm", "确认取消上传？", n) }), X.on("click", function() { D("confirm", "确认删除该视频？", l) }), $("#retry_video_file").click(function(e) {
            var t = vt.status;
            ("success" == t || "transcoding" == t) && (window.confirm("重新上传时，当前视频信息会被丢弃，确认？") || e.preventDefault())
        })), Q.on("click", function() {
            var e = vt.status;
            if ("success" == e || "transcoding" == e) {
                if (r()) return void D("alert", "当前视频 “" + vt.vname + "” 已经添加到正文中，请勿重复添加");
                var t = st.replace(/#vid#/g, vt.vid);
                t = t.replace(/#vu#/g, vt.vu), t = t.replace(/#url#/g, vt.vposter), t = t.replace(/#name#/g, vt.vname), nt.execCommand("inserthtml", "<p>" + t + "</p>")
            } else v("cancel")
        }), q.on("click", function() {
            w().show({
                id: vt.vid,
                itemId: B.pgc_id || B.new_pgc_id,
                type: 2,
                source: "普通",
                success: function(e, t, i, a, o) {
                    vt.vposter = t, B.submit_video.vposter = t, B.new_pgc_id = a, B.submit_video.uri = i, B.submit_video.src_thumb_uri = o, $("#video-feedback-status").find("img").attr("src", t);
                    try {
                        var d = r();
                        if (d) {
                            var s = $(d),
                                u = "/video_iframe/?type=local&subtype=self&vid=" + vt.vid + "&img=" + t + "&name=" + vt.vname;
                            s.attr("data-vposter", t).attr("src", u)
                        }
                    } catch (v) {}
                },
                video_status: vt.status
            })
        }), $("#retry_video_file,#video_file").videoupload({ redirectParamName: "redirect_url", redirect: (ut ? "https://" : "http://") + "mp.toutiao.com/cdiframe_result/?%s" }).bind("videouploadprocess", function(e, t) {
            A.trigger("has-video", "change-cover", 1), A.trigger("has-video", "double-change", 1), t.process().then(function() {
                var e = t.files[0];
                o(e);
                var i = t.uploadedBytes || 0;
                (!i || t.files[0].size > i) && t.submit(), v("reupload"), vt.vid = t.ref_id, vt.vu = t.ref_id, vt.vname = e.name, vt.ts = +new Date, B.submit_video.uploading = !0, pt.modal("hide"), H.removeClass("hide"), I.removeClass("hide"), K.text(vt.vname), O = t, setTimeout(function() {
                    var e = null,
                        t = window.innerHeight || document.documentElement.clientHeight;
                    try {
                        e = H.get(0).getBoundingClientRect();
                        var i = e.top,
                            a = e.bottom,
                            o = a - i;
                        if (i > t - o) {
                            var d = $(document).scrollTop() + a - t;
                            window.scrollTo(0, d)
                        }
                    } catch (r) {}
                }, 300)
            })
        }).bind("videouploadprogress", function(e, t) { u(t.total, t.loaded) }).bind("videouploadcheckstart", function(e, t) {
            B.submit_video.uploading = !1, vt.vposter = x;
            var i = ot.replace(/#img#/, y.e(vt.vposter));
            Y.html(i), V.text(at).removeClass("error"), U = vt.vid, I.addClass("hide"), J.removeClass("hide"), L.text(vt.vname), W.get(0).style.width = "0%", p(200, vt, t, M.END_AUTO), B.submit_video.vid = vt.vid, B.submit_video.vu = vt.vu, B.submit_video.vname = vt.vname, B.submit_video.vposter = vt.vposter
        }).bind("videouploadabort", function(e, t) { p(M.UNKNOW_ERROR_CODE, vt, t, M.END_BY_ABORT) }).bind("videouploadprocessfail", function(e, t) {
            return "toolarge" === t.errorThrown ? void D("alert", "视频不能超过2G大小") : void D("alert", t.errorMessage)
        }).bind("videouploadtranscodingerror", function() { vt.status = "fail", d("视频处理失败") }).bind("videouploaderror", function(e, t) {
            return U && U == vt.vid ? !1 : (B.submit_video.uploading = !1, D("alert", "视频上传失败"), void p(M.UNKNOW_ERROR_CODE, vt, t, M.END_AUTO))
        }).bind("videouploadsuccess", function(e, t) {
            is_valid_video = !0, vt.status = "success", vt.vu = t.ref_id, B.submit_video.uploading = !1, vt.vposter = x;
            var i = ot.replace(/#img#/, y.e(vt.vposter));
            Y.html(i), U = vt.vid, I.addClass("hide"), J.removeClass("hide"), L.text(vt.vname), W.get(0).style.width = "0%", $.extend(B.submit_video, vt), p(200, vt, t, M.END_AUTO);
            var a = "http://i.snssdk.com/video/playcode/1/toutiao/" + t.ref_id,
                o = rt.replace(/#href#/, y.e(a));
            o = o.replace(/#img#/, y.e(vt.vposter)), Y.html(o);
            try {
                var d = r(),
                    s = "/video_iframe/?type=local&subtype=self&vid=" + vt.vid + "&img=" + vt.vposter + "&name=" + v_name;
                d && d.setAttribute("src", s)
            } catch (u) {}
            V.text(at).removeClass("error")
        })
    }

    function p(e, t, i, o) {
        var d = i.files[0],
            r = { ref_id: t.vid, f: t.vname, e: e, fs: d.size || 0, ufs: i.uploadedBytes || 0, r: S ? 1 : 0, et: o, ts: t.ts, te: +new Date, ua: navigator.userAgent, mid: B.media_id },
            s = { api: "upload_error", ref_id: t.vid, error_info: JSON.stringify(r) };
        a(s, !0, !0)
    }

    function f() {
        var e = $.trim(_t.val()),
            t = "";
        return 0 != e.length && Dt.test(e) || (t = "请输入有效的视频地址", ft.text(t)), t.length ? !1 : !0
    }

    function _(e) {
        if (e.length) {
            var t = $(e);
            t.attr("width", "450"), t.attr("height", "253"), nt && (nt.execCommand("inserthtml", "<p>" + t.prop("outerHTML") + "</p>"), pt.modal("hide"))
        }
    }

    function F(e) {
        _t.data("reset", !1);
        var t = "视频获取失败",
            i = f();
        if (i) {
            if (!e && bt) return void _(bt);
            var a = $.trim(_t.val());
            ft.text("视频信息获取中..."), $.ajax({ type: "GET", async: !1, url: "/api/video/cover_info/", data: { url: a }, dataType: "json" }).done(function(i) {
                if ("success" == i.message) {
                    var a = i.data,
                        o = a.vid,
                        d = a.web_url,
                        r = a.web_uri;
                    bt = yt.replace(/#vid#/g, y.e(o)), bt = bt.replace(/#uri#/g, y.e(r)), bt = bt.replace(/#url#/g, y.e(d)), e && (gt.html(bt).show(), ft.text(""))
                } else {
                    var s = i.reason ? i.reason : t;
                    ft.text(s), e && gt.hide()
                }
            }).fail(function() { ft.text(t), e && gt.hide() }), !e && _(bt)
        }
    }

    function g() { ht.click(function() { F(!1) }), Ft.click(function() { F(!0) }), _t.on("keyup change", function() { _t.data("reset") || (ft.text(""), gt.html("").hide(), bt = "", _t.data("reset", !0)) }), $("#video_file").click(function(e) { vt.vid && (D("alert", k), e.preventDefault()) }) }

    function h() {
        return $.support.xhrFormDataFileUpload ? B.pgc_id && !B.is_draft ? void D("alert", "修改文章禁止添加视频") : (ft.text(""), _t.val(""), gt.html("").hide(), bt = "", void pt.modal()) : void D("alert", "您的浏览器版本过低, 请升级")
    }

    function b(e) {
        var t = e.video_tag_name;
        t ? (lt("media", e.media_tag), t = t.split("/")) : lt("article", e.media_tag), !t && e.goodvoice && (t = "video_ent/video_music/video_good_voice", t = t.split("/")), new C($t(e), t, $(".j_media_select"));
        var i = new E(e.video_lable);
        Z.append(i.getNode()), nt = e.ue, m(e), g(), window.upload_video = function() {
            return vt.vid ? void D("alert", k) : (window.ga("send", "event", "发表文章[pc]", "点插入视频"), void h())
        }
    }
    var y = e("common/util/util.js"),
        D = e("pagelet/popalert/popalert.js"),
        C = e("common/select/select.js"),
        w = e("common/videoposter/videoposter.js"),
        x = "http://p1.pstatp.com/large/9820/3808334921",
        E = e("common/video_tag/video_tag.js"),
        k = "正文只能上传一个视频，要修改视频请删除或重新上传",
        A = window.listener,
        O = null,
        T = 0,
        j = 0,
        N = 2,
        z = 1e4,
        R = 1048576,
        S = $.support.blobSlice && "object" == typeof window.localStorage,
        B = null,
        U = "",
        M = { UNKNOW_ERROR_CODE: -2, NO_CODE: -1, END_BY_ABORT: 1, END_AUTO: 0 },
        H = $("#video-card"),
        I = $("#video-uploading"),
        J = $("#video-uploaded"),
        K = $("#video-name"),
        W = $("#progressbar-inner"),
        G = $("#video-cancel"),
        P = $("#video-data"),
        Y = $("#video-feedback-status"),
        L = $("#video-feedback-name"),
        X = $("#video-delete"),
        q = $("#video-modify-poster"),
        Q = $("#video-feedback-btn"),
        V = $("#video-card-tip"),
        Z = $("#video-tag-center"),
        et = $(".j_class_select"),
        tt = $(".j_media_select"),
        it = $(".master_cover"),
        at = "请将上传的视频添加到正文所需位置",
        ot = '<div class="video-processing"><img src="#img#" width="100%" height="100%"></div>',
        dt = '<div class="video-fail"></div>',
        rt = '<a class="video-success" href="javascript:void(0)" target="_blank"><i></i><img src="#img#" width="100%" height="100%"></a>',
        st = '<iframe class="local-video" id="local-video-#vid#" data-id="#vid#" data-vu="#vu#" data-vname="#name#" data-vposter="#url#" src="/video_iframe/?type=local&subtype=self&vid=#vid#&vu=#vu#&img=#url#&name=#name#" width="450px" height="253px" frameborder="0" scrolling="no" style="display:block;margin:0 auto;max-width:100%;"></iframe>',
        ut = "https:" === location.protocol,
        vt = { vid: 0, vu: "", vname: "", vposter: "", status: "", md5: "", ts: 0 },
        nt = null,
        lt = function(e, t) { "media" == e ? (it.find(".front-cover-radio.selected").removeClass("selected"), it.find('.front-cover-radio[data-type="auto"]').addClass("selected"), it.find(".front-cover-main").hide(), et.hide(), it.hide(), tt.show(), tt.attr("has-media", "1"), $("#article_type").show()) : (et.show(), it.show(), tt.hide(), tt.removeAttr("has-media"), "government" == t ? $("#article_type").show() : $("#article_type").hide()), ct(e) },
        ct = function(e) { "media" == e ? Z.show() : Z.hide() },
        mt = /Mac OS X/,
        pt = $("#video-modal"),
        ft = $("#online-url-tip"),
        _t = $("#online-url"),
        Ft = $("#online-preview-btn"),
        gt = $("#online-preview-box"),
        ht = $("#online-video-submit"),
        bt = "",
        yt = '<iframe class="online-video" data-id="#vid#" data-uri="#uri#" src="/video_iframe/?vid=#vid#&img=#url#" width="100%" height="100%" frameborder="0" scrolling="no" style="display:block;margin:0 auto;"></iframe>',
        Dt = /^((https|http|ftp|rtsp|mms):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        $t = function(e) {
            for (var t = e.video_tags, i = {}, a = 0; a < t.length; a++) i[t[a][0]] = { value: t[a][1] };
            return i
        };
    i.exports = { init: b, exec_api: a }
});;
define("pagelet/write/vote.js", function(e, t, o) {
    function a(e, t) {
        var o = f.document.getElementById("mp-vote-" + e);
        o.height = t, o.width = "450"
    }

    function i(e) {
        window.ga("send", "event", "发表文章[pc]", "点插入投票"), $("#vote-modal").modal(), $("#vote-form").find("label.error").remove();
        var t = "添加投票";
        e ? ($("#vote-form").data("mp_vote_id", e), t = "更新投票", $("#vote-header").html(t), $(".vote-pulldata").show().addClass("vote-pulling").html(""), $("#vote-main").hide(), old_vote_info = d(e), 0 == old_vote_info.status ? ($("#vote-btn-submit").html(t), $(".vote-pulldata").hide(), $("#vote-main").show(), v(old_vote_info.data)) : $(".vote-pulldata").removeClass("vote-pulling").html(old_vote_info.message)) : ($("#vote-form").data("mp_vote_id", ""), $(".vote-pulldata").hide(), $("#vote-main").show(), $("#vote-header").html(t), $("#vote-title").val(""), $(".vote-radio-single").addClass("vote-radio-checked"), $(".vote-radio-multi").removeClass("vote-radio-checked"), $(".vote-options .vote-cell").each(function(e, t) {
            if (2 > e) {
                var o = e + 1;
                $(".vote-item", t).val("").attr("data-val", o).attr("id", "vote-itemid-" + o)
            } else $(t).remove()
        }), $("#vote-expire-time").val(""), $("#vote-btn-submit").html(t))
    }

    function r(e) {
        var t = $.trim($("#vote-title").val()),
            o = "after_vote",
            a = !1,
            i = $.trim($("#vote-expire-time").val()),
            r = 1,
            v = 1,
            d = !1,
            m = [],
            s = $(".vote-radio-checked").attr("data-vote-type"),
            c = 0,
            u = "/vote/item/add/",
            p = e ? !0 : !1;
        if ($(".vote-options .vote-item").each(function(e, t) {
                var o = $(t).attr("data-val"),
                    a = $.trim($(t).val()),
                    i = "";
                m.push({ text: a, image_uri: i, value: "" + o })
            }), m.length < 2) return void alert("每个有效投票至少需要2个选项");
        "m" == s && (v = m.length), i = n(i, !0);
        var f = { title: t, option: m, max_checked: v, min_checked: r, custom_input: d, expire_time: i, display_stat: o, require_login: a };
        if (p) {
            u = "/vote/item/update/";
            var h = f;
            f = { id: e, vote_item: h }
        }
        if ($.ajax({ type: "POST", url: u, data: JSON.stringify(f), contentType: "application/json", dataType: "json", async: !1 }).done(function(t) {
                if ("ok" == t.result) c = p ? e : t.id;
                else {
                    var o = "投票创建失败，原因：";
                    p && (o = "投票更新失败，原因："), alert(o + t.result)
                }
            }).fail(function() { alert("抱歉，服务器异常，请稍后重试") }), 0 != c) {
            var g = { id: c, type: p ? "update" : "new" };
            return l(g), !0
        }
    }

    function n(e, t) {
        var o = e.split(/\s+/),
            a = o[0],
            i = o[1],
            r = a.split("-"),
            n = i.split(":"),
            v = r[0] - 0,
            l = r[1] - 1,
            d = r[2] - 0,
            m = n[0] - 0,
            s = n[1] - 0,
            c = new Date(v, l, d, m, s).getTime();
        return t ? parseInt(c / 1e3) : c
    }

    function v(e) {
        var t = e.title,
            o = e.expire_time,
            a = e.option,
            i = 1 == e.max_checked ? "s" : "m",
            r = new Date(1e3 * o),
            n = r.getFullYear(),
            v = r.getMonth() + 1,
            l = r.getDate(),
            d = r.getHours(),
            m = r.getMinutes(),
            s = n + "-" + (10 > v ? "0" + v : v) + "-" + (10 > l ? "0" + l : l) + " " + (10 > d ? "0" + d : d) + ":" + (10 > m ? "0" + m : m);
        $("#vote-title").val(t), "s" == i ? ($(".vote-radio-single").addClass("vote-radio-checked"), $(".vote-radio-multi").removeClass("vote-radio-checked")) : ($(".vote-radio-single").removeClass("vote-radio-checked"), $(".vote-radio-multi").addClass("vote-radio-checked"));
        for (var u = $("<div>"), p = 0; p < a.length; p++) {
            var f = $("#vote-append-tpl").children().clone();
            f.find(".vote-item").attr("value", c.e(a[p].text)).attr("data-val", c.e(a[p].value)).attr("id", "vote-itemid-" + c.e(a[p].value)), 2 > p && (0 == p && f.find(".vote-lebal").html("选项"), f.find(".vote-delete").remove()), u.append(f)
        }
        $(".vote-options").html(u.html()), $("#vote-expire-time").val(s)
    }

    function l(e) {
        $("#vote-btn-cancel").click();
        var t = "/vote/item/get/?voteid=" + e.id;
        if ("new" == e.type) {
            var o = $("<iframe></iframe>");
            o.attr("id", "mp-vote-" + e.id), o.attr("data-voteid", e.id), o.attr("class", "mp-vote"), o.attr("src", t), o.attr("scrolling", "no"), o.attr("frameborder", 0), o.attr("name", "iframe" + e.id), o.attr("onload", "this.height=iframe" + e.id + ".document.body.scrollHeight"), o.attr("style", "display:block;margin:0 auto;"), f.execCommand("inserthtml", "<p>" + o.prop("outerHTML") + "</p>")
        } else f.document.getElementById("mp-vote-" + e.id).src = t
    }

    function d(e) {
        var t = { status: 0, message: "", data: null },
            o = { id_list: [e] };
        return $.ajax({ type: "POST", url: "/vote/item/get/", data: JSON.stringify(o), contentType: "application/json", dataType: "json", async: !1 }).done(function(o) {
            if ("ok" == o.result) {
                var a = o.vote_items;
                t.data = a[e]
            } else t.status = 1, t.message = o.result
        }).fail(function() { t.status = 1, t.message = "服务器异常，请稍后重试" }), t
    }

    function m() {
        if (!s()) return alert("投票截止时间只能在当前时间之后"), !1;
        var e = $("#vote-form").data("mp_vote_id");
        return r(e), !0
    }

    function s() {
        var e = $.trim($("#vote-expire-time").val()),
            t = (new Date).valueOf(),
            o = t - p + u;
        return e = n(e), e > o
    }
    e("common/util/formcheck.js");
    var c = e("common/util/util.js");
    "function" != typeof Array.prototype.indexOf && (Array.prototype.indexOf = function(e) {
        for (var t = 0, o = this; t < o.length; t++)
            if (o[t] == e) return t;
        return -1
    });
    var u, p, f;
    o.exports = function(e) {
        u = 1e3 * e.systime, f = e.ue, p = (new Date).valueOf(), window.mp_vote_iframe_height_adjust = a, window.create_vote = i, $("#vote-form").form_check(m), $("#vote-expire-time").datetimepicker({ format: "yyyy-mm-dd hh:ii", autoclose: !0, minView: 0, maxView: 4 }), $(".vote-type-label").click(function() {
            var e = this;
            $(".vote-type-label").each(function(t, o) { o == e ? $(".vote-radio", o).addClass("vote-radio-checked") : $(".vote-radio", o).removeClass("vote-radio-checked") })
        }), $("#vote-append-item").click(function() {
            var e = $("#vote-append-tpl").children().clone(),
                t = parseInt($(".vote-options .vote-item").last().attr("data-val"));
            isNaN(t) && (t = 0), e.find(".vote-item").attr("data-val", t + 1).attr("id", "vote-itemid-" + (t + 1)), e.appendTo($(".vote-options"))
        }), $(".vote-options").on("click", ".vote-delete", function() { $(this).parents(".vote-cell").remove() }), $("#vote-btn-cancel").click(function() { $("#vote-modal").modal("hide") })
    }
});;
define("pagelet/write/write.js", function(require, exports, module) {
    function testZcKey(e) {
        for (var t = zcKey.length, i = 0; t > i; i++)
            if (-1 !== e.indexOf(zcKey[i])) return zcKey[i];
        return !1
    }
    var parser = require("common/util/parser.js");
    require("common/stip/stip.js"), require("pagelet/write/article_link.js");
    var audioupload = require("pagelet/write/audio/audio.js"),
        Stip = require("common/stip/stip.js"),
        Dialog = require("common/popup/dialog.js");
    require("common/util/parser.js");
    var pushTemplate = function(obj) {
            {
                var __t, __p = "";
                Array.prototype.join
            }
            with(obj || {}) __p += "<div class=\"modal cover-modal push-msg-modal in\" id=\"push-msg-modal\">\n	<div class='modal-dialog-wrapper'>\n		<div class='modal-dialog'>\n			<div class='modal-content'>\n				<div class='modal-header push_title'>填写弹窗信息</div>\n				<div class='modal-body'>\n					<div class ='edit-cell push-cell'>\n						<div class ='edit-main'>\n							<div class='edit-label'>Android</div>\n							<div class='edit-input'>\n								<input type='text' class='push_input form-control j_push_android_title' maxlength='15' value='" + (null == (__t = push_android_title) ? "" : _.escape(__t)) + "' placeholder='弹窗标题'>\n							</div>\n							<div class='j_check_label right_label'></div>\n						</div>\n						<div class ='edit-main'>\n							<div class='edit-label'></div>\n							<div class='edit-input'>\n								<textarea class='j_push_android_textarea push_input form-control push_content' maxlength='45' placeholder='弹窗文案'>" + (null == (__t = push_android_summary) ? "" : _.escape(__t)) + "</textarea>\n							</div>\n							<div class='j_check_label right_label'></div>\n						</div>\n					</div>\n					<div class ='edit-cell push-cell'>\n						<div class ='edit-main'>\n							<div class='edit-label'>iOS</div>\n							<div class='edit-input'>\n								<textarea class='j_push_ios_title push_input form-control push_content' maxlength='42' placeholder='弹窗文案'>" + (null == (__t = push_ios_summary) ? "" : _.escape(__t)) + '</textarea>\n							</div>\n							<div class=\'j_check_label right_label\'></div>\n						</div>\n					</div>\n				</div>\n				<div class =\'modal-footer\'>\n					<div class=\'push_dialog_btns\'>\n						<button type="button" class="push_btn j_push" ga="推送确定$">保存</button>\n						<button type="button" class="push_btn close_btn j_close" ga="推送关闭$">取消</button>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n<div class=\'modal-backdrop in j_push_back_modal\'> </div>\n';
            return __p
        },
        edit_article = require("pagelet/write/article.js"),
        create_vote = require("pagelet/write/vote.js"),
        create_rank = require("pagelet/write/rank.js"),
        create_video = require("pagelet/write/video-v2.js");
    require("pagelet/write/gallery.js"), require("pagelet/write/telephone.js");
    var show_standard = require("pagelet/write/standard.js");
    require("pagelet/tabNewGuide/tabNewGuide.js");
    var eventCenter = window.listener,
        ArticleAd = require("pagelet/articlead/articlead.js"),
        TitleCheck = require("pagelet/title_check/title_check.js"),
        Cover = require("pagelet/write/cover.js"),
        jautosave = $();
    ue.ready(function() { jautosave = $("#myautosave") });
    var zcKey = "上海上港,上港,山东鲁能,鲁能,广州富力,富力,上海申花,申花,广州恒大,恒大,辽宁开新,开新,贵州恒丰,恒丰,河南建业,建业,河北华夏,华夏幸福,重庆力帆,北京国安,国安,天津权健,权健,天津泰达,泰达,延边富德,富德,江苏苏宁,长春亚泰,亚泰,中超,中国足球超级联赛,中超赛场,U23新政,虹口足球场,鲁能大球场,越秀山,东校场,广州恒大淘宝,上海绿地申花,绿地申花,山东鲁能泰山,鲁能泰山,斯科拉里,博阿斯,波耶特,马加特,斯托伊科维奇,郑智,胡尔克,莫雷诺,吉尔,扎哈维,保利尼奥,特维斯,王大雷,雷纳迪尼奥,高拉特,埃尔克森,瓜林,刘彬彬,乌索,阿兰,艾哈迈多夫,曹赟定,佩莱,姜至鹏,黄博文,武磊,柏佳骏,西塞,程月磊,冯潇霆,吕文君,李建滨,塔尔德利,吉安努,J-马丁内斯,颜骏凌,孙世林,蒿俊闵,肖智,曾诚,王燊超,秦升,戴琳,黄政宇,廖力生,石柯,毛剑卿,王彤,唐淼,梅方,于海,马丁斯,郑铮,卢琳,郜林,蔡慧康,李帅,吴兴涵,张琳芃,傅欢,吕征,周海滨,郑龙,张卫,李运秋,于汉超,邹正,李学鹏,张成林,金亨镒,辽宁宏运,黎兵,佩莱格里尼,法图斯,赵明剑,乌贾,耶拉维奇,金洋洋,阿萨尼,奥伦加,金周荣,克鲁泽,埃尔纳内斯,霍兰德,切里,姆比亚,杨旭,麦克格文,拉维奇,石笑天,常飞亚,阿洛伊西奥,郎征,任航,尹鸿博,张呈栋,姜宁,丁海峰,江苏苏宁易购,北京中赫国安,中赫国安,重庆当代力帆,延边足球,崔龙洙,何塞-冈萨雷斯,张外龙,朴泰夏,拉米雷斯,克里梅茨,费尔南多,特谢拉,伊尔马兹,卡尔德克,金承大,洪正好,索里亚诺,米洛维奇,伊比加兰,R-马丁内斯,奥古斯托,郑又荣,古兹米奇,吴曦,拉尔夫,邓小飞,斯蒂夫,顾超,杨智,尤里,池忠国,李昂,张稀哲,彭欣力,池文一,张晓彬,张池明,吉翔,朴成,汪嵩,于大宝,刘建业,赵和靖,张思鹏".split(",");
    ! function() {
        var e = $("#self_recommand");
        e.checkbox();
        var t = Dialog({ title: "自荐上头条", content: $.safeMark('<p>选择自荐上头条，需承诺如下：</p><p>1、本文描述的事实真实可靠，不含虚假消息。</p><p>2、内容标题相符，不是抄袭拼凑，标题夸张。</p><p>3、不涉及任何商业目的，不是软文、黑稿。</p><br/><p class="sred">如文章被读者投诉，会影响后续文章的推荐效果。</p>'), btns: [{ type: "ok", click: function() { e.checkbox(!0), t.remove(), t = null } }, { type: "cancel", click: function() { e.checkbox(!1), t.hide() } }] });
        e.change(function() { t && t.show() })
    }(), module.exports = Pagelet.extend({
        el: "#pagelet-write",
        events: { "focus #title": "onTitleFocus", "blur #title": "onTitleBlur" },
        init: function(e) {
            function t() { jautosave.removeClass("on"), clearTimeout(a), a = setTimeout(function() { i.autosave(), jautosave.addClass("on") }, 2e3) }
            if (e.has_spread_promotion && "false" !== e.has_spread_promotion) return void this.isSpreadPromotion(e.has_spread_promotion);
            ue.ready(function() {
                $("#edit_body [title]").each(function() {
                    var e = $(this),
                        t = e.attr("title");
                    e.attr("ga", "按钮_" + t), e.removeAttr("title"), e.attr("data-title", t)
                }), $("#edit_body").hoverTitle()
            });
            var i = this;
            e.showTimerAssistant = new Date(1e3 * parseInt(e.systime)).getHours() > 21 || new Date(1e3 * parseInt(e.systime)).getHours() < 6, this.audioData = [], this.getAudioData(e), e.vids_to_del = [], e.submit_video = { vid: e.vid || 0, vu: e.vu || "", vname: e.vname || "", vposter: e.vposter || "", uploading: !1 }, e.video_controler = create_video, this.spec = e, this.$mp_title = $("#title"), this.$mp_show_ads = $(".gg-show"), this.$mp_force_ads = $(".gg-spread"), this.$mp_push = $(".gg-push"), this.$mp_tag_name = $("#channel_tags"), this.$mp_subsidy = $(".gg-subsidy"), this.$timer_radio = $(i.el).find(".gg-timer-radio"), this.$fansVisiable = $(i.el).find(".gg-fans-visiable-radio"), this.$autoDiagnosis = $(i.el).find(".gg-auto-diagnosis-radio"), this.$alert = this.$el.find(".alert"), this.$third_monitor_url = $(i.el).find("#third_monitor_url"), this.$mp_apply_create_modal = $("#apply_create_label_modal"), this.$governForward = $(".gg-govern-forward-radio"), this.articleAd = new ArticleAd(this.$el.find(".j-article-ad"), e), this.pgc_id = e.pgc_id, this.media_id = e.media_id, this.localStorageName = "mpdraft", this.triggerStore = !1, e.localStorageName = this.localStorageName, this.saveInterval = 9e4, this.localStorage = "object" == typeof localStorage, this.remain_push_num = e.remain_push_num, this.push_article_permission = e.push_article_permission, this.push_android_title = e.push_android_title, this.push_android_summary = e.push_android_summary, this.push_ios_summary = e.push_ios_summary, this.push_verify_users = e.push_verify_users, this.push_status = e.push_status, this.timer_permission = e.timer_permission, this.timer_status = e.timer_status, this.prev_title = "", this.timer_time = e.timer_time, this.is_passed = e.is_passed, this.is_draft = e.is_draft, this.doubleTitleStatus = 0, this.has_video = 0, e.after_pass_modify = e.after_pass_modify ? !0 : !1, e.from_diagnosis = this.isFromDiagnosis() ? 1 : 0, this.$mp_tag_name.val(e.tag_name || $.cookie("lasttag") || e.media_tag || "news"), this.third_monitor_url = e.third_monitor_url || "", e.pgcFeedCovers = this.pgcFeedCovers = new Cover(this.$el.find(".j_front_cover"), null, e.pgc_feed_covers, e.has_set_external_cover_permission, {
                getImages: function() {
                    return ue.document.getElementsByTagName("img")
                },
                getTitle: function() {
                    return s.$mp_title.val()
                }
            }), this.eventCenter(), e.slaveFeedCovers = new Cover(this.$el.find(".j_front_cover2"), "multi", [], e.has_set_external_cover_permission, {
                getImages: function() {
                    return ue.document.getElementsByTagName("img")
                },
                getTitle: function() {
                    return s.$el.find(".j-subtitle_abtest_input").val()
                },
                tip: "由于三图模式的推荐效果更好，所以副封面仅支持三图模式，建议额外设置一组封面。",
                line: !0
            }), e.slaveFeedCovers.$el.find(".front-cover-type,.front-cover-cur").hide(), edit_article(e), create_vote(e), create_rank(e), create_video.init(e), this.$third_monitor_url.val(this.third_monitor_url), this.checkTitle = new TitleCheck;
            var s = this;
            this.checkTitle.init({ min: 5, max: 50, el: this.$mp_title });
            var a, n = this.loadLocalStorage() || e.content;
            ue.ready(function() {
                var e = baidu.editor.utils,
                    t = UE.htmlparser(n);
                e.each(t.getNodesByTagName("li"), function(e) { e.setAttr("class", "") }), e.each(t.getNodesByTagName("ol"), function(e) { e.setAttr("class", " list-paddingleft-2") }), e.each(t.getNodesByTagName("ul"), function(e) { e.setAttr("class", " list-paddingleft-2") }), e.each(t.getNodesByTagName("tt-audio"), function(e) { e.tagName = "iframe", $.extend(e.attrs, { src: "/editor_widget/", tt: "audio", ptime: parser.duration(e.attrs.time), upload_id: e.attrs["data-id"] }) }), ue.setContent(t.toHtml())
            }), ue.ready(function() { setTimeout(function() { ue.addListener("contentchange", t) }, 1e4), ue.addListener("blur", function() { eventCenter.trigger("assistant-change", "picture-change", { picture: !!ue.document.getElementsByTagName("img").length }) }) }), setInterval(t, this.saveInterval), $(".qx").click(function() { $(document).data("abort_draft", !0), location.href = "/" }), window.onbeforeunload = function() {
                if (e.submit_video.uploading) return "当前视频尚未上传完毕，确认离开？";
                if ($(document).data("abort_draft")) {
                    if (i.clearLocalStorage(), $(document).data("abort_draft", !1), ue.getContentLength()) return "你的文章尚未发表，或存草稿。"
                } else {
                    var t = $.trim(i.$mp_title.val()).length,
                        s = 0;
                    try { s = ue.getContentLength() } catch (a) {}
                    if (t || s || e.submit_video.vid) return i.autosave(), "已自动保存" + i.getTime() + "时的内容。";
                    i.clearLocalStorage()
                }
            }, $(document).on("click", "#ic_search", function() {
                var e = $(this).data("zckey");
                UE.getEditor("editor").fireEvent("imags-ic", e)
            }), $(document).on("click", ".abort-autosave", function() { i.clearLocalStorage(), window.onbeforeunload = null, location.reload() }), show_standard(e), $(".front-cover em").hoverTip(), this._pushArticleInit(), this._timerArticleInit(), this._fansVisisable(), this._autoDiagnosis(), this.audioEventInit(e.media_name), this.columnEventInit(e.column_data, e.pgc_id), this._governForward()
        },
        isSpreadPromotion: function(e) { e && "false" != e && Dialog({ btns: [{ type: "ok", click: function() { window.location.href = "/core/article/index/?source_type=0" } }], type: "promotion", title: "提示", content: "已投放号外文章<span>不允许修改</span>" }).show() },
        columnEventInit: function(e, t) {
            if (e.column_chosen && !t) {
                var i = e.column_type,
                    s = e.column_book_name;
                Dialog({ btns: ["ok"], okTxt: "我知道了", title: "添加章节", content: "本文将添加到" + (i ? "专栏：" : "连载：") + s }).show(), 0 === i && this.$mp_title.attr("placeholder", "请输入章节号和章节名 示例：“第一章 初出茅庐”")
            }
        },
        titleFixAlert: function(e) {
            var t = this.$el.find(".alert");
            if (t.length) {
                if (t.affix({ offset: { top: t.offset().top } }), !e) return;
                t.find("span").html(e).end().height(40), setTimeout(function() { t.height(0) }, 4e3)
            }
        },
        getAudioData: function(e) {
            var t = $(e.content).find("tt-audio");
            if (t.length)
                for (var i = null, s = 0, a = 0, n = t.length; n > a; a++) s = Number(t.eq(a).attr("time")), i = { upload_id: t.eq(a).attr("data-id"), duration: s, title: t.eq(a).attr("title"), name: t.eq(a).attr("title") + ".mp3", ext: "mp3", ptime: parser.duration(s), status: "done" }, this.audioData.push(i)
        },
        getAudio: function(e) {
            return $("[upload_id=" + e + "]", ue.iframe.contentDocument)
        },
        audioEventInit: function(e) {
            var t = this;
            t.audioData = t.audioData || [], ue.ready(function() { audioupload(ue, t.$el.find("[data-node=audio_list]"), t.audioData) }), $("head").on("_audio_insert", function(i, s) {
                if (t.getAudio(s.upload_id).length) return void fixedAlert("文章中已有该音频");
                var a = new UE.uNode({ type: "element", tagName: "iframe", attrs: { src: "/editor_widget/", tt: "audio", time: s.duration + "", ptime: s.ptime, upload_id: s.upload_id, title: s.title, content: s.content ? s.content : "来自" + e } });
                ue.execCommand("inserthtml", "<p>" + a.toHtml() + "</p>")
            }).on("_audio_status", function(e, i) { t.getAudio(i.upload_id).attr("time", i.duration).attr("ptime", i.ptime).trigger("change") }).on("_audio_remove", function(e, i) { t.getAudio(i.upload_id).remove() })
        },
        eventCenter: function() {
            var e = this;
            eventCenter.on("double-title", "change", function(t, i) {
                e.doubleTitleStatus = i.is_doubleTitle;
                var s = i.feed_covers || [];
                i.is_doubleTitle && !e.has_video ? (e.spec.slaveFeedCovers.$el.show(), e.spec.slaveFeedCovers.setCovers("multi", s)) : e.spec.slaveFeedCovers.$el.hide()
            }), eventCenter.on("has-video", "change-cover", function(t, i) { e.has_video = i, !i && e.doubleTitleStatus ? e.spec.slaveFeedCovers.$el.show() : e.spec.slaveFeedCovers.$el.hide() }), eventCenter.on("assistant-change", "trigger-timer", function() { e.$timer_radio.trigger("click"), window.scrollTo(window.scrollX, e.$timer.offset().top) })
        },
        onTitleFocus: function() { this.prev_title = this.$mp_title.val() },
        onTitleBlur: function() {
            var e = this,
                t = this.$mp_title.val(),
                i = testZcKey(t);
            return i ? (fixedAlert('中超相关的内容配图，请使用中超独家授权图片社东方IC免费正版图片 <a id="ic_search" ga="中超_搜索" data-zckey="' + i + '" class="slink" href="#">立即搜索</a>', 1e4), !1) : void(t !== this.prev_title && $.ajax({ type: "GET", url: "/check_title/", data: { title: t } }).done(function(t) { "success" === t.message && (1 === t.status ? fixedAlert("你的内容涉嫌标题夸张，建议修改，继续发表会被限制推荐量。", 3e4) : e.$alert.height(0)) }))
        },
        _timerArticleInit: function() {
            var e = $("body");
            this.$timer = e.find(".gg-timer"), this.$timerTip = e.find(".j_timer_tip"), this.$timePicker = e.find(".j_timer_datetimepicker"), this.$timeInput = e.find(".j_timepicker"), this.$timerTip.hoverTip(), this._timerBtnEvent(), this.timer_status && this._timePickerInit()
        },
        _timerBtnEvent: function() {
            var e = this;
            $("body").on("click", ".gg-timer-radio", function() {
                var t = this;
                if ("disabled" == $(this).attr("disabled")) return !1;
                if ($(this).hasClass("selected")) var i = Dialog({ btns: [{ type: "ok", click: function() { i.remove(), $(t).removeClass("selected").parent().parent().removeClass("selected"), e._hideTimePicker(), eventCenter.trigger("timer", "change", 0), eventCenter.trigger("assistant-change", "timer-change", { timer: !e.spec.showTimerAssistant || $(this).hasClass("selected") }) } }, "cancel"], title: "提示", content: "取消定时发表?" }).show();
                else $(this).addClass("selected").parent().parent().addClass("selected"), e._timePickerInit(), eventCenter.trigger("timer", "change", 1);
                eventCenter.trigger("assistant-change", "timer-change", { timer: !e.spec.showTimerAssistant || $(this).hasClass("selected") })
            })
        },
        _fansVisisable: function() {
            return this.pgc_id && !this.is_draft ? void this.$fansVisiable.addClass("disabled") : void this.$fansVisiable.on("click", function() {
                var e = $(this);
                e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
            })
        },
        _autoDiagnosis: function() {
            return this.pgc_id && !this.is_draft ? void this.$autoDiagnosis.addClass("disabled") : (this.pgc_id || this.$autoDiagnosis.hasClass("selected") || this.$autoDiagnosis.addClass("selected"), void this.$autoDiagnosis.on("click", function() {
                var e = $(this);
                e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
            }))
        },
        isFromDiagnosis: function() {
            var e = window.location.href,
                t = "from_diagnosis=";
            return -1 !== e.indexOf(t) && e.split(t)[1] ? !!Number(e.split(t)[1].charAt(0)) : !1
        },
        _timePickerInit: function() { this._getServerTime() },
        _governForward: function() {
            return this.pgc_id && !this.is_draft ? void this.$governForward.addClass("disabled") : void this.$governForward.on("click", function() {
                var e = $(this);
                e.hasClass("selected") ? e.removeClass("selected") : e.addClass("selected")
            })
        },
        _getServerTime: function() {
            var e = "获取时间失败",
                t = this;
            $.ajax({ type: "GET", url: "/article/get_server_time/" }).done(function(i) {
                if ("success" !== i.message) return t._ajaxFeedback(e), t.$timer_radio.removeClass("selected"), void eventCenter.trigger("assistant-change", "timer-change", { timer: !1 || !t.spec.showTimerAssistant });
                if (i.data) {
                    var s = new Date(1e3 * i.data.server_time),
                        a = s.getHours();
                    t.spec.isShowTimerAssistant = a > 21 || 6 > a ? !0 : !1, t._showTimePicker(s)
                }
            }).fail(function() { t._ajaxFeedback(e), t.$timer_radio.removeClass("selected"), eventCenter.trigger("assistant-change", "timer-change", { timer: !1 || !t.spec.showTimerAssistant }) })
        },
        _showTimePicker: function(e) {
            var t = e.clone(),
                i = t.h(t.h() + 2).format(),
                s = t.h(t.h() + 10).format(),
                a = t.h(t.h() + 12).format();
            this.$timeInput.datetimepicker({ format: "yyyy-mm-dd hh:ii", weekStart: 1, autoclose: !0, maxView: 2, startDate: i, endDate: a }), this.$timePicker.addClass("active"), this.timer_time && (s = this.timer_time, this.is_passed && !this.is_draft && (this.$timeInput.attr("disabled", "disabled"), this.$timer_radio.attr("disabled", "disabled"))), this.$timeInput.val(s)
        },
        _hideTimePicker: function() { this.$timePicker.removeClass("active") },
        _ajaxFeedback: function(e) { Stip.popupTip({ msg: e, status: !1 }) },
        _pushArticleInit: function() { "1" == this.push_article_permission && (this._pushButtonEvent(), this._pushTemplateInit(), "1" == this.push_status && $(this.el).find(".j_push_num").hide()) },
        _pushTemplateInit: function() {
            var e = { push_android_title: this.push_android_title, push_android_summary: this.push_android_summary, push_ios_summary: this.push_ios_summary, push_verify_users: this.push_verify_users },
                t = pushTemplate(e),
                i = $("body");
            i.append(t), this.pushModal = i.find("#push-msg-modal"), this.dropBack = i.find(".j_push_back_modal"), this.dropBack.hide(), this.$androidTitle = this.pushModal.find(".j_push_android_title"), this.$androidContent = this.pushModal.find(".j_push_android_textarea"), this.$iosTitle = this.pushModal.find(".j_push_ios_title"), this._dialogEvent(), this._modifyPushEvent(), this._keyPressEvent()
        },
        _pushTemplateShow: function() { this.templateData = { push_android_title: this.$androidTitle.val(), push_android_summary: this.$androidContent.val(), push_ios_title: this.$iosTitle.val() }, this.dropBack.show(), this.pushModal.show() },
        _pushTemplateHide: function() { this.dropBack.hide(), this.pushModal.hide() },
        _pushButtonEvent: function() {
            var e = this,
                t = $(e.el).find(".j_modify_push"),
                i = $(e.el).find(".j_push_num");
            $("body").on("click", ".gg-push-client", function() {
                e.isCreatPush = !0;
                var s = this;
                if ($(this).hasClass("selected")) var a = Dialog({ btns: [{ type: "ok", click: function() { e._clearPushData(), a.remove(), $(s).toggleClass("selected"), e.isCreatPush = !1, t.hide(), i.show() } }, "cancel"], title: "提示", content: "确认取消弹窗申请?" }).show();
                else $(this).toggleClass("selected"), e._pushTemplateShow(), t.show(), i.hide()
            })
        },
        _modifyPushEvent: function() {
            var e = this;
            $("body").on("click", ".j_modify_push", function() { e._pushTemplateShow(), e.isCreatPush = !1 })
        },
        _keyPressEvent: function() {
            var e, t = { j_push_ios_title: 42, j_push_android_title: 15, j_push_android_textarea: 45 };
            this.pushModal.on("keyup", ".push_input", function() {
                for (var i in t) $(this).hasClass(i) && (e = $(this).closest(".edit-main").find(".j_check_label"), $(this).val().length >= t[i] ? e.addClass("red") : e.removeClass("red"), e.html($(this).val().length + "/" + t[i]))
            })
        },
        _clearPushData: function() {
            var e = this.$androidTitle,
                t = this.$androidContent,
                i = this.$iosTitle;
            e.length && e.val(""), t.length && t.val(""), i.length && i.val(""), this.pushModal.find(".j_check_label").html("")
        },
        _checkPushContent: function() {
            var e = this.$androidTitle.val(),
                t = this.$androidContent.val(),
                i = this.$iosTitle.val();
            return e && t && i ? !0 : !1
        },
        _dialogEvent: function() {
            var e = this,
                t = $("body").find(".gg-push-client"),
                i = $(e.el).find(".j_modify_push"),
                s = $(e.el).find(".j_push_num");
            this.pushModal.find(".j_push").bind("click", function() { e._checkPushContent() ? e._pushTemplateHide() : alert("推送的标题或者内容不能为空") }), this.pushModal.find(".j_close").bind("click", function() { e._pushTemplateHide(), e._clearPushData(), e.isCreatPush && (t.removeClass("selected"), i.hide(), s.show(), e.isCreatPush = !1), e._resetTemplate() })
        },
        _resetTemplate: function() {
            var e = this.templateData;
            e && (this.$androidTitle.val(e.push_android_title), this.$androidContent.val(e.push_android_summary), this.$iosTitle.val(e.push_ios_title))
        },
        autosave: function() {
            if (this.localStorage) {
                var e = {},
                    t = this.getTime();
                e.mid = this.media_id, e.id = this.pgc_id, e.title = $.trim(this.$mp_title.val()), e.content = ue.getContent(), e.article_ad_type = this.articleAd.getArticleAdType(), e.subsidy = this.$mp_subsidy.is(".selected") ? 1 : 0, e.is_fans_article = this.$fansVisiable.is(".selected") ? 1 : 0, e.recommend_auto_analyse = this.$autoDiagnosis.is(".selected") ? 1 : 0, e.from_diagnosis = this.isFromDiagnosis() ? 1 : 0, e.tag_name = this.$mp_tag_name.val() || "", e.time = t, e.covers = this.pgcFeedCovers.getCovers(), window.localStorage.setItem(this.localStorageName, JSON.stringify(e))
            }
        },
        getTime: function() {
            var e = new Date,
                t = e.getMonth() + 1,
                i = e.getDate(),
                s = e.getHours(),
                a = e.getMinutes(),
                n = e.getSeconds(),
                o = e.getFullYear() + "-" + (t > 9 ? t : "0" + t) + "-" + (i > 9 ? i : "0" + i) + " " + (s > 9 ? s : "0" + s) + ":" + (a > 9 ? a : "0" + a) + ":" + (n > 9 ? n : "0" + n);
            return o
        },
        clearLocalStorage: function() { this.localStorage && window.localStorage.getItem(this.localStorageName) && window.localStorage.removeItem(this.localStorageName) },
        loadLocalStorage: function() {
            if (this.localStorage) {
                var e = window.localStorage.getItem(this.localStorageName);
                if (e) {
                    if (e = JSON.parse(e), this.media_id != e.mid) return void this.clearLocalStorage();
                    if (this.pgc_id && this.pgc_id != e.id) return;
                    if (!this.pgc_id && e.id) return;
                    return this.$mp_title.val(e.title), eventCenter.trigger("title_check", "resetTip"), e.article_ad_type = this.articleAd.getArticleAdType(), e.subsidy ? this.$mp_subsidy.addClass("selected") : this.$mp_subsidy.removeClass("selected"), e.is_fans_article ? this.$fansVisiable.addClass("selected") : this.$fansVisiable.removeClass("selected"), e.recommend_auto_analyse ? this.$autoDiagnosis.addClass("selected") : this.$autoDiagnosis.removeClass("selected"), e.tag_name && this.$mp_tag_name.val(e.tag_name), e.covers && this.pgcFeedCovers.setCovers(e.covers.type, e.covers.pgc_feed_covers), fixedAlert('已载入上次的草稿 <span class="abort-autosave slink">撤销</span>', 1e4), e.content
                }
            }
        }
    })
});
