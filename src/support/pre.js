function centerimg(t, h, a) {
    h ? a || (a = h) : h = a = 150;
    var i, o, r = h / a,
        l = t.naturalWidth || t.width,
        e = t.naturalHeight || t.height,
        n = l / e;
    n > r ? (i = h, o = h / n) : (o = a, i = a * n);
    var d = t.style;
    d.width = Math.floor(i) + "px", d.height = Math.floor(o) + "px", d.padding = Math.floor((a - o) / 2) + "px " + Math.floor((h - i) / 2) + "px"
}

function squareimg(t) {
    var h, a, i = 1,
        o = t.clientWidth,
        r = o,
        l = t.naturalWidth || t.width,
        e = t.naturalHeight || t.height,
        n = l / e;
    n > i ? (h = o, a = o / n) : (a = r, h = r * n);
    var d = t.style;
    d.width = Math.floor(h) + "px", d.height = Math.floor(a) + "px", d.padding = Math.floor((r - a) / 2) + "px " + Math.floor((o - h) / 2) + "px"
}
