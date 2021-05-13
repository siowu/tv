(function(t) {
	function a(a) {
		for (var s, n, o = a[0], r = a[1], l = a[2], p = 0, u = []; p < o.length; p++) n = o[p], Object.prototype.hasOwnProperty
			.call(i, n) && i[n] && u.push(i[n][0]), i[n] = 0;
		for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
		d && d(a);
		while (u.length) u.shift()();
		return c.push.apply(c, l || []), e()
	}

	function e() {
		for (var t, a = 0; a < c.length; a++) {
			for (var e = c[a], s = !0, o = 1; o < e.length; o++) {
				var r = e[o];
				0 !== i[r] && (s = !1)
			}
			s && (c.splice(a--, 1), t = n(n.s = e[0]))
		}
		return t
	}
	var s = {},
		i = {
			app: 0
		},
		c = [];

	function n(a) {
		if (s[a]) return s[a].exports;
		var e = s[a] = {
			i: a,
			l: !1,
			exports: {}
		};
		return t[a].call(e.exports, e, e.exports, n), e.l = !0, e.exports
	}
	n.m = t, n.c = s, n.d = function(t, a, e) {
		n.o(t, a) || Object.defineProperty(t, a, {
			enumerable: !0,
			get: e
		})
	}, n.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, a) {
		if (1 & a && (t = n(t)), 8 & a) return t;
		if (4 & a && "object" === typeof t && t && t.__esModule) return t;
		var e = Object.create(null);
		if (n.r(e), Object.defineProperty(e, "default", {
				enumerable: !0,
				value: t
			}), 2 & a && "string" != typeof t)
			for (var s in t) n.d(e, s, function(a) {
				return t[a]
			}.bind(null, s));
		return e
	}, n.n = function(t) {
		var a = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return n.d(a, "a", a), a
	}, n.o = function(t, a) {
		return Object.prototype.hasOwnProperty.call(t, a)
	}, n.p = "/";
	var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
		r = o.push.bind(o);
	o.push = a, o = o.slice();
	for (var l = 0; l < o.length; l++) a(o[l]);
	var d = r;
	c.push([0, "chunk-vendors"]), e()
})({
	0: function(t, a, e) {
		t.exports = e("56d7")
	},
	1831: function(t, a, e) {
		t.exports = e.p + "media/switch.7da37659.mp3"
	},
	2395: function(t, a, e) {},
	4416: function(t, a, e) {
		"use strict";
		e("cea8")
	},
	"56d7": function(t, a, e) {
		"use strict";
		e.r(a);
		e("e623"), e("e379"), e("5dc8"), e("37e1");
		var s = e("2b0e"),
			i = function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", [e("Television")], 1)
			},
			c = [],
			n = function() {
				
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "all"
				}, [e("div", {
					staticClass: "old-tv",
					class: {
						off: !t.power
					}
				}, [e("div", {
					staticClass: "antenna"
				}), e("main", [e("div", {
					staticClass: "error-noise"
				}, [e("div", {
					staticClass: "error-effect"
				}, [e("video", {
					ref: "video",
					attrs: {
						loop: "",
						playsinline: "",
						src: t.videoSrc
					},
					on: {
						canplay: t.canplay
					}
				}), e("div", {
					staticClass: "old-tv-content"
				}, [t.power ? e("div", {
					staticClass: "text-layout"
				}, [t.loaded ? t._e() : e("p", [t._v("无信号")])]) : t._e()])])])]), e("div", {
					staticClass: "speaker"
				}), t._m(0), t._m(1), e("nav", {
					staticClass: "power"
				}, [e("button", {
					on: {
						touchend: t.handlePowerOn
					}
				})]), e("nav"), e("footer")]), t._m(2)])
			},
			o = [function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					staticClass: "volume"
				}, [e("input", {
					attrs: {
						type: "range",
						min: "0",
						max: "100",
						value: "0"
					}
				})])
			}, function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("nav", {
					staticClass: "channel"
				}, [e("input", {
					attrs: {
						type: "range",
						min: "0",
						max: "100",
						value: "0"
					}
				})])
			}, function() {
				var t = this,
					a = t.$createElement,
					e = t._self._c || a;
				return e("div", {
					attrs: {
						id: "table-tv"
					}
				}, [e("div", {
					staticClass: "scene"
				}, [e("div", {
					staticClass: "shape cuboid-1 cub-1"
				}, [e("div", {
					staticClass: "face ft",
					staticStyle: {
						"box-shadow": "inset 0 1px rgba(255,255,255,0.2)"
					}
				}), e("div", {
					staticClass: "face bk"
				}), e("div", {
					staticClass: "face rt"
				}), e("div", {
					staticClass: "face lt"
				}), e("div", {
					staticClass: "face bm"
				}), e("div", {
					staticClass: "face tp",
					staticStyle: {
						"box-shadow": "inset 0 100px 20px rgba(0,0,0,0.3), inset 0 300px rgba(0,0,0,0.3)"
					}
				})]), e("div", {
					staticClass: "shape cuboid-3 cub-3"
				}, [e("div", {
					staticClass: "face ft",
					staticStyle: {
						"box-shadow": "inset 0 300px rgba(0,0,0,0.6), 10px 2px 10px rgba(0,0,0,0.8)"
					}
				}), e("div", {
					staticClass: "face bk"
				}), e("div", {
					staticClass: "face rt"
				}), e("div", {
					staticClass: "face lt",
					staticStyle: {
						"box-shadow": "inset 0 300px rgba(0,0,0,0.8)"
					}
				}), e("div", {
					staticClass: "face bm"
				}), e("div", {
					staticClass: "face tp"
				})]), e("div", {
					staticClass: "shape cuboid-4 cub-4"
				}, [e("div", {
					staticClass: "face ft",
					staticStyle: {
						"box-shadow": "inset 0 20px 5px rgba(0,0,0,0.6), 5px 2px 8px rgba(0,0,0,0.4)"
					}
				}), e("div", {
					staticClass: "face bk"
				}), e("div", {
					staticClass: "face rt"
				}), e("div", {
					staticClass: "face lt",
					staticStyle: {
						"box-shadow": "inset 0 300px rgba(0,0,0,0.3)"
					}
				}), e("div", {
					staticClass: "face bm"
				}), e("div", {
					staticClass: "face tp"
				})]), e("div", {
					staticClass: "shape cuboid-5 cub-5"
				}, [e("div", {
					staticClass: "face ft",
					staticStyle: {
						"box-shadow": "inset 0 300px rgba(0,0,0,0.6), -10px 2px 10px rgba(0,0,0,0.8)"
					}
				}), e("div", {
					staticClass: "face bk"
				}), e("div", {
					staticClass: "face rt",
					staticStyle: {
						"box-shadow": "inset 0 300px rgba(0,0,0,0.8)"
					}
				}), e("div", {
					staticClass: "face lt"
				}), e("div", {
					staticClass: "face bm"
				}), e("div", {
					staticClass: "face tp"
				})]), e("div", {
					staticClass: "shape cuboid-6 cub-6"
				}, [e("div", {
					staticClass: "face ft",
					staticStyle: {
						"box-shadow": "inset 0 20px 5px rgba(0,0,0,0.6), -5px 2px 8px rgba(0,0,0,0.4)"
					}
				}), e("div", {
					staticClass: "face bk"
				}), e("div", {
					staticClass: "face rt",
					staticStyle: {
						"box-shadow": "inset 0 300px rgba(0,0,0,0.3)"
					}
				}), e("div", {
					staticClass: "face lt"
				}), e("div", {
					staticClass: "face bm"
				}), e("div", {
					staticClass: "face tp"
				})]), e("div", {
					staticClass: "shape cuboid-2 cub-2"
				}, [e("div", {
					staticClass: "face ft",
					staticStyle: {
						"box-shadow": "inset 0 1px rgba(255,255,255,0.2)"
					}
				}), e("div", {
					staticClass: "face bk"
				}), e("div", {
					staticClass: "face rt"
				}), e("div", {
					staticClass: "face lt"
				}), e("div", {
					staticClass: "face bm"
				}), e("div", {
					staticClass: "face tp",
					staticStyle: {
						"box-shadow": "inset 0 50px 20px rgba(0,0,0,0.5), inset 0 150px rgba(0,0,0,0.4)"
					}
				})])])])
			}],
			r = e("1da1"),
			l = (e("96cf"), e("1831")),
			d = e.n(l),
			p = e("f5c5"),
			u = e.n(p),
			f = {};

		function v(t) {
			return Math.floor(Math.random() * t)
		}
		f.switch = new Audio(d.a), f.noise = new Audio(u.a), f.noise.loop = !0;
		var b = {
				data: function() {
					return {
						videos: ["http://alimov2.a.yximgs.com/upic/2021/05/13/09/BMjAyMTA1MTMwOTQ5MzhfMTA3OTc0MzI4MV80OTUwMDczMjMwM18xXzM=_b_B1add9704503316f77e2c82cb1b5030eb.mp4?tag=1-1620870621-std-1-ucyzixawdw-fd442506ffdefe67&clientCacheKey=3x3q3xfjvsra369_b.mp4&tt=b&di=6525166d&bp=12681"],
						videoSrc: "",
						power: !1,
						loaded: !1
					}
				},
				methods: {
					handlePowerOn: function() {
						console.log(123)
						var t = this;
						return Object(r["a"])(regeneratorRuntime.mark((function a() {
							var e, s;
							e.play()
							return regeneratorRuntime.wrap((function(a) {
								while (1) switch (a.prev = a.next) {
									case 0:
										if (f.switch.pause(), f.switch.currentTime = 0, f.switch.play(), t.power = !t.power, e = t.$refs.video,
											!t.power) {
											a.next = 14;
											break
										}
										return t.toWaitState(), s = t.videos[v(t.videos.length)], t.videoSrc === s ? t.toPlayState() : t.videoSrc =
											s, a.next = 11, t.$nextTick();
									case 11:
										e.play(), a.next = 15;
										break;
									case 14:
										t.toStopState();
									case 15:
									case "end":
										return a.stop()
								}
							}), a)
						})))()
					},
					canplay: function() {
						this.toPlayState()
					},
					toPlayState: function() {
						f.noise.pause(), this.loaded = !0
					},
					toWaitState: function() {
						f.noise.play(), this.loaded = !1
					},
					toStopState: function() {
						f.noise.pause(), this.$refs.video.pause()
					}
				}
			},
			h = b,
			x = (e("4416"), e("2877")),
			C = Object(x["a"])(h, n, o, !1, null, "b00225d8", null),
			m = C.exports,
			w = {
				name: "App",
				components: {
					Television: m
				}
			},
			y = w,
			g = (e("7c55"), Object(x["a"])(y, i, c, !1, null, null, null)),
			S = g.exports;
		s["a"].config.productionTip = !1, new s["a"]({
			render: function(t) {
				return t(S)
			}
		}).$mount("#app")
	},
	"7c55": function(t, a, e) {
		"use strict";
		e("2395")
	},
	cea8: function(t, a, e) {},
	f5c5: function(t, a, e) {
		t.exports = e.p + "media/noise.488d9968.mp3"
	}
});
