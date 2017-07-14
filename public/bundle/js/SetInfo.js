webpackJsonp([18], {
    0: function(e, t, i) {
        e.exports = i(45)
    },
    10: function(e, t, i) {
        var n = i(3);
        e.exports = n("Org/tpl/OrgExam/BeLearnTest", function(e, t) {
            "use strict";
            var i = this
                , n = (i.$helpers,
                i.$each)
                , r = (e.$value,
                e.$index,
                i.$escape)
                , s = "";
            return s += " ",
                n(e, function(e, t) {
                    s += " ",
                        0 == e.StrDefault ? (s += ' <span class="level-name" id="',
                            s += r(e.DimID),
                            s += '" data-is="',
                            s += r(e.StrDefault),
                            s += '">',
                            s += r(e.DimName),
                            s += "</span> ") : (s += ' <span class="level-on" id="',
                            s += r(e.DimID),
                            s += '" data-is="',
                            s += r(e.StrDefault),
                            s += '">',
                            s += r(e.DimName),
                            s += "</span> </div> "),
                        s += " "
                }),
                s += " ",
                new String(s)
        })
    },
    44: function(e, t) {
        /*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
         * Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
        !function(e) {
            e.extend(e.fn, {
                validate: function(t) {
                    if (!this.length)
                        return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                    var i = e.data(this[0], "validator");
                    return i ? i : (this.attr("novalidate", "novalidate"),
                        i = new e.validator(t,this[0]),
                        e.data(this[0], "validator", i),
                    i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                        i.settings.submitHandler && (i.submitButton = t.target),
                        e(t.target).hasClass("cancel") && (i.cancelSubmit = !0),
                        void 0 !== e(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
                    }),
                        this.submit(function(t) {
                            function n() {
                                var n;
                                return !i.settings.submitHandler || (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)),
                                        i.settings.submitHandler.call(i, i.currentForm, t),
                                    i.submitButton && n.remove(),
                                        !1)
                            }
                            return i.settings.debug && t.preventDefault(),
                                i.cancelSubmit ? (i.cancelSubmit = !1,
                                    n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                                    !1) : n() : (i.focusInvalid(),
                                    !1)
                        })),
                        i)
                },
                valid: function() {
                    if (e(this[0]).is("form"))
                        return this.validate().form();
                    var t = !0
                        , i = e(this[0].form).validate();
                    return this.each(function() {
                        t = t && i.element(this)
                    }),
                        t
                },
                removeAttrs: function(t) {
                    var i = {}
                        , n = this;
                    return e.each(t.split(/\s/), function(e, t) {
                        i[t] = n.attr(t),
                            n.removeAttr(t)
                    }),
                        i
                },
                rules: function(t, i) {
                    var n = this[0];
                    if (t) {
                        var r = e.data(n.form, "validator").settings
                            , s = r.rules
                            , a = e.validator.staticRules(n);
                        switch (t) {
                            case "add":
                                e.extend(a, e.validator.normalizeRule(i)),
                                    delete a.messages,
                                    s[n.name] = a,
                                i.messages && (r.messages[n.name] = e.extend(r.messages[n.name], i.messages));
                                break;
                            case "remove":
                                if (!i)
                                    return delete s[n.name],
                                        a;
                                var o = {};
                                return e.each(i.split(/\s/), function(e, t) {
                                    o[t] = a[t],
                                        delete a[t]
                                }),
                                    o
                        }
                    }
                    var u = e.validator.normalizeRules(e.extend({}, e.validator.classRules(n), e.validator.attributeRules(n), e.validator.dataRules(n), e.validator.staticRules(n)), n);
                    if (u.required) {
                        var l = u.required;
                        delete u.required,
                            u = e.extend({
                                required: l
                            }, u)
                    }
                    return u
                }
            }),
                e.extend(e.expr[":"], {
                    blank: function(t) {
                        return !e.trim("" + e(t).val())
                    },
                    filled: function(t) {
                        return !!e.trim("" + e(t).val())
                    },
                    unchecked: function(t) {
                        return !e(t).prop("checked")
                    }
                }),
                e.validator = function(t, i) {
                    this.settings = e.extend(!0, {}, e.validator.defaults, t),
                        this.currentForm = i,
                        this.init()
                }
                ,
                e.validator.format = function(t, i) {
                    return 1 === arguments.length ? function() {
                        var i = e.makeArray(arguments);
                        return i.unshift(t),
                            e.validator.format.apply(this, i)
                    }
                        : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
                    i.constructor !== Array && (i = [i]),
                        e.each(i, function(e, i) {
                            t = t.replace(RegExp("\\{" + e + "\\}", "g"), function() {
                                return i
                            })
                        }),
                        t)
                }
                ,
                e.extend(e.validator, {
                    defaults: {
                        messages: {},
                        groups: {},
                        rules: {},
                        errorClass: "error",
                        validClass: "valid",
                        errorElement: "label",
                        focusInvalid: !0,
                        errorContainer: e([]),
                        errorLabelContainer: e([]),
                        onsubmit: !0,
                        ignore: ":hidden",
                        ignoreTitle: !1,
                        onfocusin: function(e) {
                            this.lastActive = e,
                            this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                                this.addWrapper(this.errorsFor(e)).hide())
                        },
                        onfocusout: function(e) {
                            this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                        },
                        onkeyup: function(e, t) {
                            (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
                        },
                        onclick: function(e) {
                            e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                        },
                        highlight: function(t, i, n) {
                            "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
                        },
                        unhighlight: function(t, i, n) {
                            "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
                        }
                    },
                    setDefaults: function(t) {
                        e.extend(e.validator.defaults, t)
                    },
                    messages: {
                        required: "This field is required.",
                        remote: "Please fix this field.",
                        email: "Please enter a valid email address.",
                        url: "Please enter a valid URL.",
                        date: "Please enter a valid date.",
                        dateISO: "Please enter a valid date (ISO).",
                        number: "Please enter a valid number.",
                        digits: "Please enter only digits.",
                        creditcard: "Please enter a valid credit card number.",
                        equalTo: "Please enter the same value again.",
                        maxlength: e.validator.format("Please enter no more than {0} characters."),
                        minlength: e.validator.format("Please enter at least {0} characters."),
                        rangelength: e.validator.format("允许的长度为{0}和{1}之间"),
                        range: e.validator.format("Please enter a value between {0} and {1}."),
                        max: e.validator.format("Please enter a value less than or equal to {0}."),
                        min: e.validator.format("Please enter a value greater than or equal to {0}.")
                    },
                    autoCreateRanges: !1,
                    prototype: {
                        init: function() {
                            function t(t) {
                                var i = e.data(this[0].form, "validator")
                                    , n = "on" + t.type.replace(/^validate/, "");
                                i.settings[n] && i.settings[n].call(i, this[0], t)
                            }
                            this.labelContainer = e(this.settings.errorLabelContainer),
                                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                                this.submitted = {},
                                this.valueCache = {},
                                this.pendingRequest = 0,
                                this.pending = {},
                                this.invalid = {},
                                this.reset();
                            var i = this.groups = {};
                            e.each(this.settings.groups, function(t, n) {
                                "string" == typeof n && (n = n.split(/\s/)),
                                    e.each(n, function(e, n) {
                                        i[n] = t
                                    })
                            });
                            var n = this.settings.rules;
                            e.each(n, function(t, i) {
                                n[t] = e.validator.normalizeRule(i)
                            }),
                                e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t),
                            this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                        },
                        form: function() {
                            return this.checkForm(),
                                e.extend(this.submitted, this.errorMap),
                                this.invalid = e.extend({}, this.errorMap),
                            this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                                this.showErrors(),
                                this.valid()
                        },
                        checkForm: function() {
                            this.prepareForm();
                            for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                                this.check(t[e]);
                            return this.valid()
                        },
                        element: function(t) {
                            t = this.validationTargetFor(this.clean(t)),
                                this.lastElement = t,
                                this.prepareElement(t),
                                this.currentElements = e(t);
                            var i = this.check(t) !== !1;
                            return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0,
                            this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                                this.showErrors(),
                                i
                        },
                        showErrors: function(t) {
                            if (t) {
                                e.extend(this.errorMap, t),
                                    this.errorList = [];
                                for (var i in t)
                                    this.errorList.push({
                                        message: t[i],
                                        element: this.findByName(i)[0]
                                    });
                                this.successList = e.grep(this.successList, function(e) {
                                    return !(e.name in t)
                                })
                            }
                            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                        },
                        resetForm: function() {
                            e.fn.resetForm && e(this.currentForm).resetForm(),
                                this.submitted = {},
                                this.lastElement = null,
                                this.prepareForm(),
                                this.hideErrors(),
                                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                        },
                        numberOfInvalids: function() {
                            return this.objectLength(this.invalid)
                        },
                        objectLength: function(e) {
                            var t = 0;
                            for (var i in e)
                                t++;
                            return t
                        },
                        hideErrors: function() {
                            this.addWrapper(this.toHide).hide()
                        },
                        valid: function() {
                            return 0 === this.size()
                        },
                        size: function() {
                            return this.errorList.length
                        },
                        focusInvalid: function() {
                            if (this.settings.focusInvalid)
                                try {
                                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                                } catch (t) {}
                        },
                        findLastActive: function() {
                            var t = this.lastActive;
                            return t && 1 === e.grep(this.errorList, function(e) {
                                    return e.element.name === t.name
                                }).length && t
                        },
                        elements: function() {
                            var t = this
                                , i = {};
                            return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                                return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                                !(this.name in i || !t.objectLength(e(this).rules())) && (i[this.name] = !0,
                                    !0)
                            })
                        },
                        clean: function(t) {
                            return e(t)[0]
                        },
                        errors: function() {
                            var t = this.settings.errorClass.replace(" ", ".");
                            return e(this.settings.errorElement + "." + t, this.errorContext)
                        },
                        reset: function() {
                            this.successList = [],
                                this.errorList = [],
                                this.errorMap = {},
                                this.toShow = e([]),
                                this.toHide = e([]),
                                this.currentElements = e([])
                        },
                        prepareForm: function() {
                            this.reset(),
                                this.toHide = this.errors().add(this.containers)
                        },
                        prepareElement: function(e) {
                            this.reset(),
                                this.toHide = this.errorsFor(e)
                        },
                        elementValue: function(t) {
                            var i = e(t).attr("type")
                                , n = e(t).val();
                            return "radio" === i || "checkbox" === i ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
                        },
                        check: function(t) {
                            t = this.validationTargetFor(this.clean(t));
                            var i, n = e(t).rules(), r = !1, s = this.elementValue(t);
                            for (var a in n) {
                                var o = {
                                    method: a,
                                    parameters: n[a]
                                };
                                try {
                                    if (i = e.validator.methods[a].call(this, s, t, o.parameters),
                                        "dependency-mismatch" === i) {
                                        r = !0;
                                        continue
                                    }
                                    if (r = !1,
                                        "pending" === i)
                                        return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                                    if (!i)
                                        return this.formatAndAdd(t, o),
                                            !1
                                } catch (u) {
                                    throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + o.method + "' method.", u),
                                        u
                                }
                            }
                            return r ? void 0 : (this.objectLength(n) && this.successList.push(t),
                                !0)
                        },
                        customDataMessage: function(t, i) {
                            return e(t).data("msg-" + i.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + i.toLowerCase())
                        },
                        customMessage: function(e, t) {
                            var i = this.settings.messages[e];
                            return i && (i.constructor === String ? i : i[t])
                        },
                        findDefined: function() {
                            for (var e = 0; arguments.length > e; e++)
                                if (void 0 !== arguments[e])
                                    return arguments[e]
                        },
                        defaultMessage: function(t, i) {
                            return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
                        },
                        formatAndAdd: function(t, i) {
                            var n = this.defaultMessage(t, i.method)
                                , r = /\$?\{(\d+)\}/g;
                            "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)),
                                this.errorList.push({
                                    message: n,
                                    element: t
                                }),
                                this.errorMap[t.name] = n,
                                this.submitted[t.name] = n
                        },
                        addWrapper: function(e) {
                            return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                                e
                        },
                        defaultShowErrors: function() {
                            var e, t;
                            for (e = 0; this.errorList[e]; e++) {
                                var i = this.errorList[e];
                                this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                                    this.showLabel(i.element, i.message)
                            }
                            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                                    this.settings.success)
                                for (e = 0; this.successList[e]; e++)
                                    this.showLabel(this.successList[e]);
                            if (this.settings.unhighlight)
                                for (e = 0,
                                         t = this.validElements(); t[e]; e++)
                                    this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                            this.toHide = this.toHide.not(this.toShow),
                                this.hideErrors(),
                                this.addWrapper(this.toShow).show()
                        },
                        validElements: function() {
                            return this.currentElements.not(this.invalidElements())
                        },
                        invalidElements: function() {
                            return e(this.errorList).map(function() {
                                return this.element
                            })
                        },
                        showLabel: function(t, i) {
                            var n = this.errorsFor(t);
                            n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                                n.html(i)) : (n = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""),
                            this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                            this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, e(t)) : n.insertAfter(t))),
                            !i && this.settings.success && (n.text(""),
                                "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, t)),
                                this.toShow = this.toShow.add(n)
                        },
                        errorsFor: function(t) {
                            var i = this.idOrName(t);
                            return this.errors().filter(function() {
                                return e(this).attr("for") === i
                            })
                        },
                        idOrName: function(e) {
                            return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                        },
                        validationTargetFor: function(e) {
                            return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]),
                                e
                        },
                        checkable: function(e) {
                            return /radio|checkbox/i.test(e.type)
                        },
                        findByName: function(t) {
                            return e(this.currentForm).find("[name='" + t + "']")
                        },
                        getLength: function(t, i) {
                            switch (i.nodeName.toLowerCase()) {
                                case "select":
                                    return e("option:selected", i).length;
                                case "input":
                                    if (this.checkable(i))
                                        return this.findByName(i.name).filter(":checked").length
                            }
                            return t.length
                        },
                        depend: function(e, t) {
                            return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                        },
                        dependTypes: {
                            "boolean": function(e) {
                                return e
                            },
                            string: function(t, i) {
                                return !!e(t, i.form).length
                            },
                            "function": function(e, t) {
                                return e(t)
                            }
                        },
                        optional: function(t) {
                            var i = this.elementValue(t);
                            return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                        },
                        startRequest: function(e) {
                            this.pending[e.name] || (this.pendingRequest++,
                                this.pending[e.name] = !0)
                        },
                        stopRequest: function(t, i) {
                            this.pendingRequest--,
                            0 > this.pendingRequest && (this.pendingRequest = 0),
                                delete this.pending[t.name],
                                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                                    this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                                    this.formSubmitted = !1)
                        },
                        previousValue: function(t) {
                            return e.data(t, "previousValue") || e.data(t, "previousValue", {
                                    old: null,
                                    valid: !0,
                                    message: this.defaultMessage(t, "remote")
                                })
                        }
                    },
                    classRuleSettings: {
                        required: {
                            required: !0
                        },
                        email: {
                            email: !0
                        },
                        url: {
                            url: !0
                        },
                        date: {
                            date: !0
                        },
                        dateISO: {
                            dateISO: !0
                        },
                        number: {
                            number: !0
                        },
                        digits: {
                            digits: !0
                        },
                        creditcard: {
                            creditcard: !0
                        }
                    },
                    addClassRules: function(t, i) {
                        t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
                    },
                    classRules: function(t) {
                        var i = {}
                            , n = e(t).attr("class");
                        return n && e.each(n.split(" "), function() {
                            this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
                        }),
                            i
                    },
                    attributeRules: function(t) {
                        var i = {}
                            , n = e(t)
                            , r = n[0].getAttribute("type");
                        for (var s in e.validator.methods) {
                            var a;
                            "required" === s ? (a = n.get(0).getAttribute(s),
                            "" === a && (a = !0),
                                a = !!a) : a = n.attr(s),
                            /min|max/.test(s) && (null === r || /number|range|text/.test(r)) && (a = Number(a)),
                                a ? i[s] = a : r === s && "range" !== r && (i[s] = !0)
                        }
                        return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
                            i
                    },
                    dataRules: function(t) {
                        var i, n, r = {}, s = e(t);
                        for (i in e.validator.methods)
                            n = s.data("rule-" + i.toLowerCase()),
                            void 0 !== n && (r[i] = n);
                        return r
                    },
                    staticRules: function(t) {
                        var i = {}
                            , n = e.data(t.form, "validator");
                        return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}),
                            i
                    },
                    normalizeRules: function(t, i) {
                        return e.each(t, function(n, r) {
                            if (r === !1)
                                return void delete t[n];
                            if (r.param || r.depends) {
                                var s = !0;
                                switch (typeof r.depends) {
                                    case "string":
                                        s = !!e(r.depends, i.form).length;
                                        break;
                                    case "function":
                                        s = r.depends.call(i, i)
                                }
                                s ? t[n] = void 0 === r.param || r.param : delete t[n]
                            }
                        }),
                            e.each(t, function(n, r) {
                                t[n] = e.isFunction(r) ? r(i) : r
                            }),
                            e.each(["minlength", "maxlength"], function() {
                                t[this] && (t[this] = Number(t[this]))
                            }),
                            e.each(["rangelength", "range"], function() {
                                var i;
                                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/),
                                    t[this] = [Number(i[0]), Number(i[1])]))
                            }),
                        e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
                            delete t.min,
                            delete t.max),
                        t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
                            delete t.minlength,
                            delete t.maxlength)),
                            t
                    },
                    normalizeRule: function(t) {
                        if ("string" == typeof t) {
                            var i = {};
                            e.each(t.split(/\s/), function() {
                                i[this] = !0
                            }),
                                t = i
                        }
                        return t
                    },
                    addMethod: function(t, i, n) {
                        e.validator.methods[t] = i,
                            e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t],
                        3 > i.length && e.validator.addClassRules(t, e.validator.normalizeRule(t))
                    },
                    methods: {
                        required: function(t, i, n) {
                            if (!this.depend(n, i))
                                return "dependency-mismatch";
                            if ("select" === i.nodeName.toLowerCase()) {
                                var r = e(i).val();
                                return r && r.length > 0
                            }
                            return this.checkable(i) ? this.getLength(t, i) > 0 : e.trim(t).length > 0
                        },
                        email: function(e, t) {
                            return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                        },
                        url: function(e, t) {
                            return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                        },
                        date: function(e, t) {
                            return this.optional(t) || !/Invalid|NaN/.test("" + new Date(e))
                        },
                        dateISO: function(e, t) {
                            return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                        },
                        number: function(e, t) {
                            return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                        },
                        digits: function(e, t) {
                            return this.optional(t) || /^\d+$/.test(e)
                        },
                        creditcard: function(e, t) {
                            if (this.optional(t))
                                return "dependency-mismatch";
                            if (/[^0-9 \-]+/.test(e))
                                return !1;
                            var i = 0
                                , n = 0
                                , r = !1;
                            e = e.replace(/\D/g, "");
                            for (var s = e.length - 1; s >= 0; s--) {
                                var a = e.charAt(s);
                                n = parseInt(a, 10),
                                r && (n *= 2) > 9 && (n -= 9),
                                    i += n,
                                    r = !r
                            }
                            return 0 === i % 10
                        },
                        minlength: function(t, i, n) {
                            var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                            return this.optional(i) || r >= n
                        },
                        maxlength: function(t, i, n) {
                            var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                            return this.optional(i) || n >= r
                        },
                        rangelength: function(t, i, n) {
                            var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                            return this.optional(i) || r >= n[0] && n[1] >= r
                        },
                        min: function(e, t, i) {
                            return this.optional(t) || e >= i
                        },
                        max: function(e, t, i) {
                            return this.optional(t) || i >= e
                        },
                        range: function(e, t, i) {
                            return this.optional(t) || e >= i[0] && i[1] >= e
                        },
                        equalTo: function(t, i, n) {
                            var r = e(n);
                            return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                                e(i).valid()
                            }),
                            t === r.val()
                        },
                        remote: function(t, i, n) {
                            if (this.optional(i))
                                return "dependency-mismatch";
                            var r = this.previousValue(i);
                            if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                                    r.originalMessage = this.settings.messages[i.name].remote,
                                    this.settings.messages[i.name].remote = r.message,
                                    n = "string" == typeof n && {
                                            url: n
                                        } || n,
                                r.old === t)
                                return r.valid;
                            r.old = t;
                            var s = this;
                            this.startRequest(i);
                            var a = {};
                            return a[i.name] = t,
                                e.ajax(e.extend(!0, {
                                    url: n,
                                    mode: "abort",
                                    port: "validate" + i.name,
                                    data: a,
                                    success: function(n) {
                                        s.settings.messages[i.name].remote = r.originalMessage;
                                        var a = n === !0 || "true" === n;
                                        if (a) {
                                            var o = s.formSubmitted;
                                            s.prepareElement(i),
                                                s.formSubmitted = o,
                                                s.successList.push(i),
                                                delete s.invalid[i.name],
                                                s.showErrors()
                                        } else {
                                            var u = {}
                                                , l = n || s.defaultMessage(i, "remote");
                                            u[i.name] = r.message = e.isFunction(l) ? l(t) : l,
                                                s.invalid[i.name] = !0,
                                                s.showErrors(u)
                                        }
                                        r.valid = a,
                                            s.stopRequest(i, a)
                                    }
                                }, n)),
                                "pending"
                        }
                    }
                }),
                e.format = e.validator.format
        }(jQuery),
            function(e) {
                var t = {};
                if (e.ajaxPrefilter)
                    e.ajaxPrefilter(function(e, i, n) {
                        var r = e.port;
                        "abort" === e.mode && (t[r] && t[r].abort(),
                            t[r] = n)
                    });
                else {
                    var i = e.ajax;
                    e.ajax = function(n) {
                        var r = ("mode"in n ? n : e.ajaxSettings).mode
                            , s = ("port"in n ? n : e.ajaxSettings).port;
                        return "abort" === r ? (t[s] && t[s].abort(),
                            t[s] = i.apply(this, arguments),
                            t[s]) : i.apply(this, arguments)
                    }
                }
            }(jQuery),
            function(e) {
                e.extend(e.fn, {
                    validateDelegate: function(t, i, n) {
                        return this.bind(i, function(i) {
                            var r = e(i.target);
                            return r.is(t) ? n.apply(r, arguments) : void 0
                        })
                    }
                })
            }(jQuery)
    },
    45: function(module, exports, __webpack_require__) {
        function GetInfo() {
            return date >= 5 && date < 8 ? "早上好" : date >= 8 && date < 12 ? "上午好" : date >= 12 && date < 13 ? "中午好" : date >= 13 && date < 18 ? "下午好" : "晚上好"
        }
        function GetMark(e) {
            return date >= 5 && date < 8 ? "一日之计在于晨，一年之计在于春" : date >= 8 && date < 12 ? "不积跬步无以至千里，不积小流无以成江海" : date >= 12 && date < 13 ? "明日复明日，明日何其多" : date >= 13 && date < 18 ? "业精于勤而荒于嬉，行成于思而毁于随" : "冰冻三尺，非一日之寒"
        }
        function validateData() {
            $("#form1").validate({
                submitHandler: function() {},
                rules: {
                    Age: {
                        digits: !0,
                        min: 1,
                        max: 120
                    },
                    Phone: {
                        required: !0,
                        phone: !0
                    },
                    Name: {
                        required: !0,
                        rangelength: [1, 5]
                    },
                    School: {
                        rangelength: [1, 20]
                    },
                    Email: {
                        email: !0
                    }
                },
                messages: {
                    Age: {
                        digits: '<div class="error-tip">您输入的信息有误！</div>',
                        min: '<div class="error-tip">您输入的信息有误！</div>',
                        max: '<div class="error-tip">您输入的信息有误！</div>'
                    },
                    Phone: {
                        required: '<div class="error-tip">您未输入信息！</div>',
                        phone: '<div class="error-tip" id="phonetip">您输入的信息有误！</div>'
                    },
                    Name: {
                        required: '<div class="error-tip">您未输入信息！</div>',
                        rangelength: '<div class="error-tip">您输入的信息有误！</div>'
                    },
                    School: {
                        rangelength: '<div class="error-tip">您输入的长度过长最长为20！</div>'
                    },
                    Email: {
                        email: '<div class="error-tip">您输入的信息有误！</div>'
                    }
                }
            })
        }
        function NextStep() {
            $("#nextStep").click(function() {
                $("#form1").valid() && submitResult()
            })
        }
        function submitResult() {
            var e = ($("#StageID").val(),
                $("#ExamID").val())
                , t = $("#ExamType").val()
                , i = $("#UTrim").val()
                , n = {};
            n.PaperID = e,
                n.TempName = $("#SName").val(),
                n.Phone = $("#SPhone").val();
            var r = $("input[name='sex']:checked")[0].id;
            "man" == r ? n.Gender = 0 : n.Gender = 1,
                n.Age = $("#SAge").val(),
            "" == n.Age && (n.Age = 0),
                n.School = $("#School").val(),
                n.Adddress = $("#SAdr").val(),
                n.Email = $("#Email").val(),
                n.ExamType = t,
                // $.ajax({
                //     url: "https://oms.mofangge.com/Subject/SubCreateExam/CheckPhone",
                //     type: "post",
                //     data: {
                //         'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                //         StuPhone: $("#SPhone").val().trim(),
                //         Type: 1
                //     },
                //     success: function(e) {
                //         return 1 == e.result.Data ? (pop.PopTipShow("已经存在非学生账号手机号"),
                //             void $("#SPhone").append('<div class="error-tip" id="phonetip">您输入的信息有误！</div>')) : void
                //             $.ajax({
                //             type: "post",
                //             url: "https://oms.mofangge.com/Subject/SubCreateExam/SaveSetInfo",
                //             data: {
                //                 'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                //                 data: JSON.stringify(n)
                //             },
                //             success: function(e) {
                //                 location.href = "/OrgExam/Index/ConfirmationInfo?U=" + i + "&ExamType=" + t + "&ExamID=" + n.PaperID + "&TempID=" + e.ID
                //             }
                //         })
                //     }
                // }),
                $.ajax({
                    type: "post",
                    url: "https://oms.mofangge.com/Subject/SubCreateExam/SaveSetInfo",
                    data: {
                        'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                        data: JSON.stringify(n)
                    },
                    success: function(e) {
                        location.href = "/OrgExam/Index/ConfirmationInfo?U=" + i + "&ExamType=" + t + "&ExamID=" + n.PaperID + "&TempID=" + e.ID
                    }
                })
                $.cookie("json", JSON.stringify(n), {
                    expires: 7,
                    path: "/"
                })
        }
        function clearForm() {
            $("#clearStu").click(function() {
                for (var e = $("#form1").children().find("input"), t = 0; t < e.length; t++)
                    $(e[t]).val("");
                $("input:radio[name=sex]").attr("checked", !1),
                    $("#man").prop("checked", !0),
                    $.cookie("json", "", {
                        expires: 7,
                        path: "/"
                    }),
                    $(".error-tip").each(function() {
                        $(this).css("display", "none")
                    })
            })
        }
        function OptHourBlur() {
            $("#SPhone").blur(function() {
                1 == chkForm("SPhone") && $("#SPhone").append()
            })
        }
        function IsMobile(e) {
            return /^1[3|4|5|7|8]\d{9}$/.test(e)
        }
        function chkForm(e) {
            var t = $("#" + e).val();
            IsMobile(t) && $.ajax({
                url: "https://oms.mofangge.com/Subject/SubCreateExam/CheckPhone",
                type: "post",
                data: {
                    'userInfo': '{"AuthID":"47K41D5885D","OrgID":"2","UserID":"3","StructureID":"3"}',
                    StuPhone: $("#SPhone").val().trim(),
                    Type: 1
                },
                success: function(e) {
                    1 == e.result.Data && (alert("已经存在手机号"),
                        $("#SPhone").append('<div class="error-tip" id="phonetip">您输入的信息有误！</div>'))
                }
            })
        }
        var pop = __webpack_require__(9)
            , PT = __webpack_require__(10);
        __webpack_require__(44);
        var En, data, examID, module = {
            init: function() {
                this.render(),
                    this.initBtns()
            },
            render: function() {},
            initBtns: function() {
                $("#main-content-wrapper").delegate("#subjecturl", "click", function() {
                    window.location.href = "/OrgExam/Index/SubjectTest"
                })
            }
        };
        $(function() {
            if (module.init(),
                    $("#M1").text(GetInfo()),
                    $("#N1").text(GetMark(date)),
                    NextStep(),
                    validateData(),
                    clearForm(),
                "" != $.cookie("json")) {
                var json = eval("(" + $.cookie("json") + ")");
                null != json && "" != json && ($("#SName").val(json.TempName),
                    0 == json.Gender ? $("#man").prop("checked", !0) : $("#woman").prop("checked", !0),
                0 != json.Age && $("#SAge").val(json.Age),
                    $("#SPhone").val(json.Phone),
                    $("#School").val(json.School),
                    $("#SAdr").val(json.Adddress),
                    $("#Email").val(json.Email))
            }
        });
        var date = (new Date).getHours();
        jQuery.validator.addMethod("phone", function(e, t) {
            var i = e.length
                , n = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            return this.optional(t) || 11 == i && n.test(e)
        }, "请正确填写您的手机号码")
    }
});
