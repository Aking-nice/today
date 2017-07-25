! function() {
    var e = UE.dom.domUtils,
        n = (baidu.editor.ui.uiUtils, UE.utils),
        t = 50;
    UE.plugins["image-caption"] = function() {
        function a(e) { return e.replace(/<br\/?>/g, "") }

        function i() {
            var n = c.selection.getRange(),
                t = "IMG" === n.startContainer.tagName ? n.startContainer.parentNode : n.startContainer.getElementsByTagName && 0 !== n.startContainer.getElementsByTagName("img").length ? n.startContainer : null,
                a = !1;
            !t || t.nextSibling && e.hasClass(t.nextSibling, d) || (e.insertAfter(t, r()), o(t), a = !0);
            var i = e.findParent(n.endContainer, function(n) { return e.hasClass(n, d) }, !0);
            i || (i = e.getNextDomNode(n.endContainer), i && !e.hasClass(i, d) && (i = null)), i && (!i.previousSibling || i.previousSibling.getElementsByTagName && 0 === i.previousSibling.getElementsByTagName("img").length) && (e.remove(i), a = !0), a && c.fireEvent("saveScene")
        }

        function r(n) { var t; return n ? (t = new UE.uNode({ tagName: "p", attrs: { "class": d }, type: "element" }), t.innerHTML(u)) : (t = e.createElement(c.document, "p"), e.addClass(t, d), t.innerHTML = u), t }

        function o(t) { n.each([t.nextSibling, t.previousSibling], function(n) { n && e.isZeroWidthSpace(e.getTextContent(n)) && e.remove(n) }) }

        function s(n) { if (!n) return null; var t = e.findParent(n, function(e) { return "P" === e.tagName }); if (t) { for (var a;;) { if (t = e.getNextDomNode(t), !t) break; if (e.hasClass(t, d)) { a = t; break } if (0 !== e.getElementsByTagName(t, "img").length) break } return a } }

        function l(t) {
            try {
                var a = t.document.getElementsByClassName(d),
                    i = [];
                n.each(a, function(n) {
                    try {
                        if (!n) return;
                        var t = n.previousSibling;
                        t && 0 !== e.getElementsByTagName(t, "img").length || i.push(n)
                    } catch (a) {}
                }), n.each(i, function(n) { e.remove(n) })
            } catch (r) {}
        }
        var c = this,
            d = c.options.imgCaptionClass,
            u = "请点击此处输入图片描述<br>";

        // 图片插入后触发
        c.on("afterinsertimage", function() {
            var n = c.selection.getRange(),
                t = n.startContainer.previousSibling;
            if (t && "IMG" === t.tagName) {
                if (t.parentNode) {
                    var a = r();
                    e.insertAfter(t.parentNode, a), n = new UE.dom.Range(c.document);
                    var i = a.nextSibling;
                    i || (i = e.createElement(c.document, "p"), i.innerHTML = "<br>", e.insertAfter(a, i)), n.setStart(i, 0), n.setEnd(i, 0), n.select()
                }
                o(t), c.fireEvent("saveScene")
            }
        });


        // var f, g = !1;
        // c.on("keydown", function(n, t) {
        //     if (13 === t.keyCode) {
        //         var a = c.selection.getRange().startContainer,
        //             i = e.findParent(a, function(n) { return e.hasClass(n, d) }, !0);
        //         f = i
        //     }
        // }), c.on("keyup", function(n, t) {
        //     if (13 === t.keyCode || f) {
        //         if (g) return void(g = !1);
        //         g = !1;
        //         var a = c.selection.getRange().startContainer,
        //             i = e.findParent(a, function(n) { return e.hasClass(n, d) }, !0);
        //         i && (i !== f ? e.removeClasses(i, d) : i.previousSibling && e.hasClass(i.previousSibling, d) && e.remove(i.previousSibling), c.fireEvent("saveScene")), f = null
        //     }
        // }), c.on("ready", function() { e.on(c.body, "compositionend", function() { g = !0 }) }), c.on("keydown", function(n, t) {
        //     if (8 === t.keyCode) {
        //         var a = c.selection.getRange().cloneRange(),
        //             i = e.findParent(a.endContainer, function(n) { return e.hasClass(n, d) }, !0);
        //         i && i.previousSibling && 0 !== i.previousSibling.getElementsByTagName("img").length && (i === a.endContainer || e.isFirstChild(i, a.endContainer)) && (0 === a.endOffset || 1 === a.endOffset && 0 === a.endContainer.childNodes.length && 8203 === (a.endContainer.innerHTML || e.getTextContent(a.endContainer)).charCodeAt(0)) && t.preventDefault()
        //     }
        // }), c.on("keyup", function(e, n) { 8 === n.keyCode && i() }), c.on("ready", function() {
        //     var n = !1;
        //     e.on(c.body, "cut", function() { n = !0 }), c.on("keyup", function() { n && (i(), n = !1) })
        // }), c.on("keyup", function(n, t) {
        //     if (8 === t.keyCode) {
        //         var a = c.selection.getRange().cloneRange(),
        //             i = e.findParent(a.endContainer, function(n) { return e.hasClass(n, d) }, !0);
        //         i && e.isEmptyContentNode(i) && (i.innerHTML = u, a = new UE.dom.Range(c.document), a.setStart(i, 0), a.setEnd(i, i.childNodes.length), a.select(), c.fireEvent("saveScene"))
        //     }
        // });
        // var m;
        // c.addListener("selectionchange mousedown", function(n, t) {
        //     var i;
        //     if ("selectionchange" === n) {
        //         var r = c.selection.getRange();
        //         if (m && e.isEmptyContentNode(m) && (m.innerHTML = u), !r.collapsed) return;
        //         i = r.startContainer
        //     } else "mousedown" === n && (i = t.target);
        //     var o = e.findParent(i, function(n) { return e.hasClass(n, d) }, !0);
        //     m = o, o && a(o.innerHTML) === a(u) && (o.innerHTML = "<br>")
        // }), c.on("keydown", function(n, t) {
        //     if (13 === t.keyCode) {
        //         var a = c.selection.getRange(),
        //             i = a.startOffset,
        //             r = a.startContainer;
        //         if (r && (r.nodeType === r.TEXT_NODE && (i = Array.prototype.slice.call(r.parentNode.childNodes).indexOf(r) + 1, r = r.parentNode), r && 0 !== r.getElementsByTagName("img").length && a.collapsed && r.childNodes.length === i && r.nextSibling && e.hasClass(r.nextSibling, d))) {
        //             t.preventDefault();
        //             var o = e.createElement(c.document, "p");
        //             o.innerHTML = "<br>", e.insertAfter(r.nextSibling, o), a = new UE.dom.Range(c.document), a.setStart(o, 0), a.setEnd(o, 0), a.select()
        //         }
        //     }
        // }), c.addOutputRule(function(e) { e.traversal(function(e) { "p" === e.tagName && e.hasClass(d) && e.innerText() === a(u) && e.parentNode.removeChild(e) }) });
        // var v = !1;
        // c.addInputRule(function(e) {
        //     v = !1, n.each(e.getNodesByTagName("img"), function(e) {
        //         try {
        //             if ("root" !== e.parentNode.type) {
        //                 var n = e.parentNode.nextSibling();
        //                 n && n.hasClass(d) || e.parentNode.parentNode.insertAfter(r(!0), e.parentNode)
        //             } else v = !0
        //         } catch (t) {}
        //     })
        // });
        // var p = !1;
        // c.on("beforeinserthtml", function(e, n) {
        //     if (p) return void(p = !1);
        //     if (v) {
        //         var t = /<p.*?>.*?<img.*?\/>.*?<\/p>/g,
        //             a = new RegExp("^<p.*?class=[\"'].*?" + d + "[s\"']>"),
        //             i = !1;
        //         return n = n.replace(t, function(e, n, t) { i = !0; var o = t.substr(n + e.length); return a.test(o) ? e : e + r().outerHTML }), i ? (p = !0, c.execCommand("inserthtml", n), !0) : void 0
        //     }
        // }), c.addListener("keydown afterinserthtml", function(n, a) {
        //     setTimeout(function() {
        //         var n = c.selection.getRange().cloneRange(),
        //             i = n.startOffset < t ? n.startOffset : t,
        //             r = e.findParent(n.endContainer, function(n) { return e.hasClass(n, d) }, !0);
        //         if (r) {
        //             var o = e.getTextContent(r);
        //             o.length > t && (r.innerHTML = o.slice(0, t), n = new UE.dom.Range(c.document), n.setStart(r.firstChild, i), n.setEnd(r.firstChild, i), n.select(), a.preventDefault && a.preventDefault())
        //         }
        //     }, 0)
        // }), c.addListener("keydown", function(n, t) {
        //     if (8 === t.keyCode) {
        //         var a = c.selection.getRange(),
        //             i = e.findParent(a.startContainer, function(e) { return "BODY" === e.parentNode.tagName }, !0);
        //         if (i) {
        //             var r = i.previousSibling;
        //             if (r && e.hasClass(r, d) && 0 === a.startOffset && a.collapsed === !0 && (e.isFirstChild(i, a.startContainer) || a.startContainer === i)) {
        //                 t.preventDefault();
        //                 var o = r.childNodes.length;
        //                 a = new UE.dom.Range(c.document), a.setStart(r, 0), a.setEnd(r, o), a.select()
        //             }
        //         }
        //     }
        // }), c.on("catchRemoteImageEnd afterSetContent", function(t, a) {
        //     if ("catchRemoteImageEnd" === t) { var i = a.failedImageCount; if (0 === i) return }
        //     var r = e.getElementsByTagName(c.document, "img"),
        //         o = [];
        //     n.each(r, function(e) {
        //         if ("remoteImageErrorPlaceholder" === e.className || -1 !== e.src.indexOf("//s0.pstatp.com/site/image/pgc/upload_fail.png")) {
        //             var n = s(e);
        //             n && o.push(n)
        //         }
        //     }), n.each(o, function(n) { e.remove(n) }), l(c)
        // })
    }
}();;