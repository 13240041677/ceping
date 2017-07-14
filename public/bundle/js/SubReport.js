webpackJsonp([27], {
    0: function(t, e, a) {
        t.exports = a(65)
    },
    24: function(t, e) {
        !function(t) {
            function e(e, a, n, r) {
                var i = {
                    data: r || 0 === r || r === !1 ? r : a ? a.data : {},
                    _wrap: a ? a._wrap : null,
                    tmpl: null,
                    parent: a || null,
                    nodes: [],
                    calls: u,
                    nest: s,
                    wrap: m,
                    html: c,
                    update: f
                };
                return e && t.extend(i, e, {
                    nodes: [],
                    parent: a
                }),
                n && (i.tmpl = n,
                    i._ctnt = i._ctnt || i.tmpl(t, i),
                    i.key = ++x,
                    (S.length ? b : g)[x] = i),
                    i
            }
            function a(e, r, i) {
                var o, l = i ? t.map(i, function(t) {
                    return "string" == typeof t ? e.key ? t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + $ + '="' + e.key + '" $2') : t : a(t, e, t._ctnt)
                }) : e;
                return r ? l : (l = l.join(""),
                    l.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(e, a, r, i) {
                        o = t(r).get(),
                            p(o),
                        a && (o = n(a).concat(o)),
                        i && (o = o.concat(n(i)))
                    }),
                    o ? o : n(l))
            }
            function n(e) {
                var a = document.createElement("div");
                return a.innerHTML = e,
                    t.makeArray(a.childNodes)
            }
            function r(e) {
                return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + t.trim(e).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(e, a, n, r, i, l, p) {
                        var u, s, m, c = t.tmpl.tag[n];
                        if (!c)
                            throw "Unknown template tag: " + n;
                        return u = c._default || [],
                        l && !/\w$/.test(i) && (i += l,
                            l = ""),
                            i ? (i = o(i),
                                p = p ? "," + o(p) + ")" : l ? ")" : "",
                                s = l ? i.indexOf(".") > -1 ? i + o(l) : "(" + i + ").call($item" + p : i,
                                m = l ? s : "(typeof(" + i + ")==='function'?(" + i + ").call($item):(" + i + "))") : m = s = u.$1 || "null",
                            r = o(r),
                        "');" + c[a ? "close" : "open"].split("$notnull_1").join(i ? "typeof(" + i + ")!=='undefined' && (" + i + ")!=null" : "true").split("$1a").join(m).split("$1").join(s).split("$2").join(r || u.$2 || "") + "__.push('"
                    }) + "');}return __;")
            }
            function i(e, n) {
                e._wrap = a(e, !0, t.isArray(n) ? n : [y.test(n) ? n : t(n).html()]).join("")
            }
            function o(t) {
                return t ? t.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
            }
            function l(t) {
                var e = document.createElement("div");
                return e.appendChild(t.cloneNode(!0)),
                    e.innerHTML
            }
            function p(a) {
                function n(a) {
                    function n(t) {
                        t += u,
                            o = s[t] = s[t] || e(o, g[o.parent.key + u] || o.parent)
                    }
                    var r, i, o, l, p = a;
                    if (l = a.getAttribute($)) {
                        for (; p.parentNode && 1 === (p = p.parentNode).nodeType && !(r = p.getAttribute($)); )
                            ;
                        r !== l && (p = p.parentNode ? 11 === p.nodeType ? 0 : p.getAttribute($) || 0 : 0,
                        (o = g[l]) || (o = b[l],
                            o = e(o, g[p] || b[p]),
                            o.key = ++x,
                            g[x] = o),
                        D && n(l)),
                            a.removeAttribute($)
                    } else
                        D && (o = t.data(a, "tmplItem")) && (n(o.key),
                            g[o.key] = o,
                            p = t.data(a.parentNode, "tmplItem"),
                            p = p ? p.key : 0);
                    if (o) {
                        for (i = o; i && i.key != p; )
                            try {
                                void 0 != i.nodes && i.nodes.push(a),
                                    i = i.parent
                            } catch (o) {
                                return
                            }
                        delete o._ctnt,
                            delete o._wrap,
                            t.data(a, "tmplItem", o)
                    }
                }
                var r, i, o, l, p, u = "_" + D, s = {};
                for (o = 0,
                         l = a.length; o < l; o++)
                    if (1 === (r = a[o]).nodeType) {
                        for (i = r.getElementsByTagName("*"),
                                 p = i.length - 1; p >= 0; p--)
                            n(i[p]);
                        n(r)
                    }
            }
            function u(t, e, a, n) {
                return t ? void S.push({
                    _: t,
                    tmpl: e,
                    item: this,
                    data: a,
                    options: n
                }) : S.pop()
            }
            function s(e, a, n) {
                return t.tmpl(t.template(e), a, n, this)
            }
            function m(e, a) {
                var n = e.options || {};
                return n.wrapped = a,
                    t.tmpl(t.template(e.tmpl), e.data, n, e.item)
            }
            function c(e, a) {
                var n = this._wrap;
                return t.map(t(t.isArray(n) ? n.join("") : n).filter(e || "*"), function(t) {
                    return a ? t.innerText || t.textContent : t.outerHTML || l(t)
                })
            }
            function f() {
                var e = this.nodes;
                t.tmpl(null, null, null, this).insertBefore(e[0]),
                    t(e).remove()
            }
            var d, h = t.fn.domManip, $ = "_tmplitem", y = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, g = {}, b = {}, v = {
                key: 0,
                data: {}
            }, x = 0, D = 0, S = [];
            t.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, a) {
                t.fn[e] = function(n) {
                    var r, i, o, l, p = [], u = t(n), s = 1 === this.length && this[0].parentNode;
                    if (d = g || {},
                        s && 11 === s.nodeType && 1 === s.childNodes.length && 1 === u.length)
                        u[a](this[0]),
                            p = this;
                    else {
                        for (i = 0,
                                 o = u.length; i < o; i++)
                            D = i,
                                r = (i > 0 ? this.clone(!0) : this).get(),
                                t(u[i])[a](r),
                                p = p.concat(r);
                        D = 0,
                            p = this.pushStack(p, e, u.selector)
                    }
                    return l = d,
                        d = null,
                        t.tmpl.complete(l),
                        p
                }
            }),
                t.fn.extend({
                    tmpl: function(e, a, n) {
                        return t.tmpl(this[0], e, a, n)
                    },
                    tmplItem: function() {
                        return t.tmplItem(this[0])
                    },
                    template: function(e) {
                        return t.template(e, this[0])
                    },
                    domManip: function(e, a, n) {
                        if (e[0] && t.isArray(e[0])) {
                            for (var r, i = t.makeArray(arguments), o = e[0], l = o.length, p = 0; p < l && !(r = t.data(o[p++], "tmplItem")); )
                                ;
                            r && D && (i[2] = function(e) {
                                    t.tmpl.afterManip(this, e, n)
                                }
                            ),
                                h.apply(this, i)
                        } else
                            h.apply(this, arguments);
                        return D = 0,
                        !d && t.tmpl.complete(g),
                            this
                    }
                }),
                t.extend({
                    tmpl: function(n, r, o, l) {
                        var p, u = !l;
                        if (u)
                            l = v,
                                n = t.template[n] || t.template(null, n),
                                b = {};
                        else if (!n)
                            return n = l.tmpl,
                                g[l.key] = l,
                                l.nodes = [],
                            l.wrapped && i(l, l.wrapped),
                                t(a(l, null, l.tmpl(t, l)));
                        return n ? ("function" == typeof r && (r = r.call(l || {})),
                        o && o.wrapped && i(o, o.wrapped),
                            p = t.isArray(r) ? t.map(r, function(t) {
                                return t ? e(o, l, n, t) : null
                            }) : [e(o, l, n, r)],
                            u ? t(a(l, null, p)) : p) : []
                    },
                    tmplItem: function(e) {
                        var a;
                        for (e instanceof t && (e = e[0]); e && 1 === e.nodeType && !(a = t.data(e, "tmplItem")) && (e = e.parentNode); )
                            ;
                        return a || v
                    },
                    template: function(e, a) {
                        return a ? ("string" == typeof a ? a = r(a) : a instanceof t && (a = a[0] || {}),
                        a.nodeType && (a = t.data(a, "tmpl") || t.data(a, "tmpl", r(a.innerHTML))),
                            "string" == typeof e ? t.template[e] = a : a) : e ? "string" != typeof e ? t.template(null, e) : t.template[e] || t.template(null, y.test(e) ? e : t(e)) : null
                    },
                    encode: function(t) {
                        return ("" + t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
                    }
                }),
                t.extend(t.tmpl, {
                    tag: {
                        tmpl: {
                            _default: {
                                $2: "null"
                            },
                            open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
                        },
                        wrap: {
                            _default: {
                                $2: "null"
                            },
                            open: "$item.calls(__,$1,$2);__=[];",
                            close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
                        },
                        each: {
                            _default: {
                                $2: "$index, $value"
                            },
                            open: "if($notnull_1){$.each($1a,function($2){with(this){",
                            close: "}});}"
                        },
                        "if": {
                            open: "if(($notnull_1) && $1a){",
                            close: "}"
                        },
                        "else": {
                            _default: {
                                $1: "true"
                            },
                            open: "}else if(($notnull_1) && $1a){"
                        },
                        html: {
                            open: "if($notnull_1){__.push($1a);}"
                        },
                        "=": {
                            _default: {
                                $1: "$data"
                            },
                            open: "if($notnull_1){__.push($.encode($1a));}"
                        },
                        "!": {
                            open: ""
                        }
                    },
                    complete: function() {
                        g = {}
                    },
                    afterManip: function(e, a, n) {
                        var r = 11 === a.nodeType ? t.makeArray(a.childNodes) : 1 === a.nodeType ? [a] : [];
                        n.call(e, a),
                            p(r),
                            D++
                    }
                })
        }(jQuery)
    },
    65: function(t, e, a) {
        function n(t, e) {
            h.ShowDownLoading("下载中，请耐心等待…");
            var a = $("#TempName").text();
            r(t, e, !0, a, subject, function() {
                h.HideDownLoading()
            })
        }
        function r(t, e, a, n, r, i) {
            $("body").append("<iframe id='myiframe" + a + "' name='myiframe" + a + '\' style="display:none;"></iframe>');
            var o = $("<form id='myform" + a + "'>");
            o.attr("style", "display:none"),
                o.attr("target", "myiframe" + a),
                o.attr("method", "post"),
                o.attr("action", "/Exam/Exam/GetReView1?r=" + (new Date).getTime());
            var l = '<input type="hidden" name="ExamID" value="' + t + '" />'
                , p = '<input type="hidden" name="T" value="' + e + '" />'
                , u = '<input type="hidden" name="hasways" value="' + a + '" />'
                , s = '<input type="hidden" name="username" value="' + n + '" />'
                , m = '<input type="hidden" name="Subject" value="' + r + '" />';
            $("body").append(o),
                o.append(l),
                o.append(p),
                o.append(u),
                o.append(s),
                o.append(m);
            var c = $("#myform" + a).find("input[name='ExamID']").val()
                , f = $("#myform" + a).find("input[name='T']").val()
                , a = $("#myform" + a).find("input[name='hasways']").val()
                , d = $("#myform" + a).find("input[name='username']").val();
            $.post("/OrgExam/exam/GetReView1", {
                ExamID: c,
                T: f,
                hasways: a,
                username: d,
                Subject: r
            }, function(t) {
                $("<form>").attr("action", t).submit(),
                i && i()
            }).error(function() {
                h.ShowDownLoading("服务器很忙，请稍后重试！"),
                    setTimeout(function() {
                        i && i()
                    }, 3e3)
            })
        }
        function i() {
            h.ShowLoading($("#popItemContent")),
                $("#popItem,.pop-mask").show(),
                $.ajax({
                    url: "https://oms.mofangge.com/Report/Index/GetReportInfo",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        MeasureID: PaperID,
                        ExamType: 0,
                        TId: $("#TId").val()
                    },
                    type: "post",
                    success: function(t) {
                        $("#popItemContent").html(""),
                        t && ($("#popItems").tmpl(t.Data).appendTo("#popItemContent"),
                            $(":checkbox[class='middle']").bind("click", function(t, e) {
                                var a = $.map($("#popItemContent").find("input:checked").parent(), function(t, e) {
                                    if (t)
                                        return $(t).attr("data-paperid")
                                }).join(",");
                                return "" == a ? ($("#nextOpt2").remove(),
                                    void $("#nextOpt").parent().before('<div class="login-pop-tip center mt10" id="nextOpt2"><div id="org-code" class="error-tip">请选择要下载的报告项！</div></div>')) : void $("#nextOpt2").remove()
                            }))
                    }
                })
        }
        function o() {
            var t = $.map($("#popItemContent").find("input:checked").parent(), function(t, e) {
                if (t)
                    return $(t).attr("data-paperid")
            }).join(",");
            if ("" == t)
                return $("#nextOpt2").remove(),
                    void $("#nextOpt").parent().before('<div class="login-pop-tip center mt10" id="nextOpt2"><div id="org-code" class="error-tip">请选择要下载的报告项！</div></div>');
            $("#nextOpt2").remove();
            var e = $("#cepinghref").attr("href");
            $("#popItem,.pop-mask").hide(),
                window.open("/OrgExam/Index/Report?org=1&id=" + t + "&ReturnUrl=" + encodeURI(e))
        }
        function l() {
            h.ShowLoading($("#pointWeightChart,#pointGotChart1,#pointDiffChart,#pointRightChart")),
                $.ajax({
                    url: "https://oms.mofangge.com/Report/Index/GetSubReport",
                    data: {
                        'userInfo':'{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        MeasureID: PaperID
                    },
                    type: "post",
                    success: function(t) {
                        if (all = t,
                                t.Data) {
                            subject = f(t.Data.SubjectID, 2),
                                $("#subjectbnum").val(subject),
                                $("#TempName").html(t.Data.TempName),
                                $("#SubjectID,#Sub").html(t.Data.SubjectIDN),
                                $("#levelSub").html(t.Data.ResultLevel),
                                $("#StageIDN").html(d(t.Data.GradeID)),
                                $("#StageSubN").html(t.Data.StageSubN),
                                $("#EditTimeN").html(t.Data.EditTimeN);
                            var e = new Array
                                , a = "";
                            $.each(t.Data.SubGrasp, function(t, n) {
                                e[n.ParentPointName] || (e[n.ParentPointName] = !0,
                                    a += t > 0 ? "、" + n.ParentPointName : n.ParentPointName)
                            }),
                                $("#points").html(a),
                                $("#bottomSub").tmpl(t.Data).appendTo("#bottomSubs"),
                                $("#bottomDiff").tmpl(t.Data.SubDiff).appendTo("#bottomDiffs"),
                                $("#bottomImp").tmpl(t.Data.SubGrasp).appendTo("#bottomImps"),
                                $("#pointWeightChart,#pointGotChart1,#pointDiffChart,#pointRightChart").html("");
                            var n = all.Data.SubDiff.length;
                            $("#pointRightChart").css({
                                height: 1 == n ? "280px" : 2 == n ? "333px" : 3 == n ? "386px" : 4 == n ? "440px" : "493px"
                            });
                            var r = g.init($("#pointWeightChart").get(0));
                            r.setOption(p());
                            var i = g.init($("#pointGotChart1").get(0));
                            i.setOption(s());
                            var o = g.init($("#pointDiffChart").get(0));
                            o.setOption(m());
                            var l = g.init($("#pointRightChart").get(0));
                            l.setOption(c()),
                                window.addEventListener("resize", function() {
                                    r.resize(),
                                        i.resize(),
                                        o.resize(),
                                        l.resize()
                                })
                        }
                    }
                })
        }
        function p() {
            for (var t = [], e = [], a = new Array, n = 0; n < all.Data.SubGrasp.length; n++)
                a[all.Data.SubGrasp[n].ParentPointName] ? a[all.Data.SubGrasp[n].ParentPointName] += parseInt(all.Data.SubGrasp[n].PTotalCount) : a[all.Data.SubGrasp[n].ParentPointName] = parseInt(all.Data.SubGrasp[n].PTotalCount);
            for (var r in a)
                t.push(r),
                    e.push({
                        value: a[r],
                        name: r
                    });
            var i = u(t, e);
            return i.legend = {
                orient: "vertical",
                x: "54%",
                y: 40,
                data: t
            },
                i.series[0].itemStyle.normal.labelLine.show = !0,
                i.series[0].itemStyle.normal.label.position = "outer",
                i.title = {
                    text: "本测评知识模块权重比例",
                    x: "center",
                    textStyle: {
                        fontSize: 14,
                        fontWeight: "normal",
                        fontFamily: "Microsoft YaHei"
                    }
                },
                i.color = y.baseColor,
                i
        }
        function u(t, e) {
            var a = {
                tooltip: {
                    trigger: "item",
                    axisPointer: {
                        type: "shadow"
                    },
                    formatter: function(t) {
                        return t.percent + "%"
                    }
                },
                legend: {
                    orient: "vertical",
                    x: "54%",
                    y: "10%",
                    data: t
                },
                calculable: !1,
                series: [{
                    type: "pie",
                    center: ["30%", "50%"],
                    radius: ["30%", "70%"],
                    itemStyle: {
                        normal: {
                            label: {
                                show: !0,
                                position: "inside",
                                formatter: function(t) {
                                    return t.percent + "%"
                                }
                            },
                            labelLine: {
                                show: !1
                            }
                        }
                    },
                    data: e
                }]
            };
            return a
        }
        function s() {
            var t = []
                , e = []
                , a = new Array(3);
            a["未掌握"] = 0,
                a["部分掌握"] = 0,
                a["已掌握"] = 0;
            for (var n = 0; n < all.Data.SubGrasp.length; n++)
                parseInt(all.Data.SubGrasp[n].PRightCount) == parseInt(all.Data.SubGrasp[n].PTotalCount) ? a["已掌握"]++ : parseInt(all.Data.SubGrasp[n].PRightCount) > 0 ? a["部分掌握"]++ : a["未掌握"]++;
            for (var r in a)
                0 != a[r] && (t.push(r),
                    e.push({
                        value: a[r],
                        name: r
                    }));
            var i = u(t, e);
            return i.title = {
                text: "知识点掌握程度图",
                x: "center",
                textStyle: {
                    fontSize: 14,
                    fontWeight: "normal",
                    fontFamily: "Microsoft YaHei"
                }
            },
                i.series[0].radius = "80%",
                i.legend.x = "70%",
                i.series[0].itemStyle.normal.label.position = "outer",
                i.series[0].itemStyle.normal.labelLine.show = !0,
                i.color = y.baseColor,
                i
        }
        function m() {
            for (var t = [], e = [], a = new Array(3), n = new Array(3), r = 0; r < all.Data.SubDiff.length; r++)
                n[all.Data.SubDiff[r].DiffictyName] = all.Data.SubDiff[r].TotalCount,
                    a[all.Data.SubDiff[r].DiffictyName] = parseInt(all.Data.SubDiff[r].ExpectRate);
            for (var i in n)
                0 != a[i] && (t.push(i),
                    e.push({
                        value: n[i],
                        name: i
                    }));
            var o = u(t, e);
            return o.series[0].center = ["30%", "50%"],
                o.title = {
                    text: "本试卷难度分布图",
                    x: "360",
                    y: "150",
                    textStyle: {
                        fontSize: 14,
                        fontWeight: "normal",
                        fontFamily: "Microsoft YaHei"
                    }
                },
                o.legend.x = "75%",
                o.color = y.baseColor,
                o.series[0].itemStyle.normal.label.position = "outer",
                o.series[0].itemStyle.normal.labelLine.show = !0,
                o
        }
        function c() {
            for (var t = [], e = [], a = new Array(3), n = new Array(3), r = all.Data.SubDiff.length - 1; r >= 0; r--)
                a[all.Data.SubDiff[r].DiffictyName] = parseInt(all.Data.SubDiff[r].ExpectRate),
                    n[all.Data.SubDiff[r].DiffictyName] = parseInt(all.Data.SubDiff[r].RightRate);
            var i = [];
            for (var o in n)
                t.push(o),
                    e.push(a[o]),
                    i.push(n[o]);
            var l = {
                name: "您的正确率",
                type: "bar",
                itemStyle: {
                    normal: {
                        label: {
                            show: !0,
                            position: "right",
                            formatter: function(t) {
                                return t.value + "%"
                            }
                        },
                        labelLine: {
                            show: !1
                        }
                    }
                },
                data: i
            }
                , p = b(t, e);
            return p.title = {
                text: "不同难度分布答题正确率",
                padding: [40, 40, 60, 40],
                x: "center",
                textStyle: {
                    fontSize: 14,
                    fontWeight: "normal",
                    fontFamily: "Microsoft YaHei"
                }
            },
                p.grid = {
                    top: 120
                },
                p.series[0].name = "目标正确率",
                p.xAxis[0].max = 100,
                p.series.push(l),
                p.legend = {
                    padding: 60,
                    right: "7%",
                    data: ["目标正确率", "您的正确率"]
                },
                p.color = y.baseColor,
                p
        }
        function f(t, e) {
            for (var a = t.toString().length; a < e; )
                t = "0" + t,
                    a++;
            return t
        }
        function d(t) {
            var e = "";
            switch (t) {
                case "x1":
                    e = "一年级";
                    break;
                case "x2":
                    e = "二年级";
                    break;
                case "x3":
                    e = "三年级";
                    break;
                case "x4":
                    e = "四年级";
                    break;
                case "x5":
                    e = "五年级";
                    break;
                case "x6":
                    e = "六年级";
                    break;
                case "c1":
                    e = "七年级";
                    break;
                case "c2":
                    e = "八年级";
                    break;
                case "c3":
                case "c4":
                    e = "九年级";
                    break;
                case "g1":
                    e = "高一";
                    break;
                case "g2":
                    e = "高二";
                    break;
                case "g3":
                    e = "高三"
            }
            return e
        }
        var h = a(15)
            , y = a(22)
            , g = a(7);
        a(24),
            $(function() {
                l(),
                    $("#printSmartReport").click(function() {
                        i()
                    }),
                    $("#popClose").click(function() {
                        $("#popItem,.pop-mask").hide()
                    }),
                    $("#nextOpt").click(function() {
                        o()
                    });
                var t = $.trim($("#org-paperid").val());
                $("#downExamPaper").click(function() {
                    n(t, 1)
                }),
                    $("#printExamPaper").click(function() {
                        window.open("/OrgExam/Index/PrintPreSee?org=1&PaperID=" + t + "&SubjectId=" + $("#subjectbnum").val() + "&TempName=" + $("#TempName").text())
                    })
            });
        var b = function(t, e) {
            var a = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    },
                    formatter: function(t, e) {
                        return t[0].name
                    }
                },
                xAxis: [{
                    type: "value",
                    max: 100,
                    axisLabel: {
                        formatter: function(t) {
                            return t + "%"
                        }
                    }
                }],
                yAxis: [{
                    type: "category",
                    data: t,
                    axisLabel: {
                        formatter: function(t) {
                            return t.length >= 6 && (t = t.substring(0, 6)),
                                t
                        }
                    }
                }],
                calculable: !1,
                series: [{
                    type: "bar",
                    itemStyle: {
                        normal: {
                            label: {
                                show: !0,
                                position: "right",
                                formatter: function(t) {
                                    return t.value + "%"
                                }
                            },
                            labelLine: {
                                show: !1
                            }
                        }
                    },
                    data: e
                }]
            };
            return a
        }
    }
});
