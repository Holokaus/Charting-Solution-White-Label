/**
 * Module: 10845
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.208Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 10845 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

10845: (exports, t, i) => {
    "use strict";
    i.d(t, {
      availableTimezones: () => l,
      timezoneIsAvailable: () => u,
      timezoneIsSupported: () => _,
      timezoneTitle: () => p,
      updateAvailableTimezones: () => d
    });
    var state = i(95523),
      o = i(11542);
    const nextValue = [{
        id: "Etc/UTC",
        get title() {
          return o.t(null, void 0, i(1833))
        }
      }, {
        id: "exchange",
        get title() {
          return o.t(null, void 0, i(86905))
        }
      }],
      r = [{
        id: "Africa/Cairo",
        get title() {
          return o.t(null, void 0, i(65736))
        },
        offset: 0
      }, {
        id: "Africa/Casablanca",
        get title() {
          return o.t(null, void 0, i(70409))
        },
        offset: 0
      }, {
        id: "Africa/Johannesburg",
        get title() {
          return o.t(null, void 0, i(39585))
        },
        offset: 0
      }, {
        id: "Africa/Lagos",
        get title() {
          return o.t(null, void 0, i(19931))
        },
        offset: 0
      }, {
        id: "Africa/Nairobi",
        get title() {
          return o.t(null, void 0, i(40977))
        },
        offset: 0
      }, {
        id: "Africa/Tunis",
        get title() {
          return o.t(null, void 0, i(21007))
        },
        offset: 0
      }, {
        id: "America/Anchorage",
        get title() {
          return o.t(null, void 0, i(42630))
        },
        offset: 0
      }, {
        id: "America/Argentina/Buenos_Aires",
        get title() {
          return o.t(null, void 0, i(25282))
        },
        offset: 0
      }, {
        id: "America/Bogota",
        get title() {
          return o.t(null, void 0, i(73905))
        },
        offset: 0
      }, {
        id: "America/Caracas",
        get title() {
          return o.t(null, void 0, i(30948))
        },
        offset: 0
      }, {
        id: "America/Chicago",
        get title() {
          return o.t(null, void 0, i(72452))
        },
        offset: 0
      }, {
        id: "America/El_Salvador",
        get title() {
          return o.t(null, void 0, i(55502))
        },
        offset: 0
      }, {
        id: "America/Juneau",
        get title() {
          return o.t(null, void 0, i(67560))
        },
        offset: 0
      }, {
        id: "America/Lima",
        get title() {
          return o.t(null, void 0, i(59444))
        },
        offset: 0
      }, {
        id: "America/Los_Angeles",
        get title() {
          return o.t(null, void 0, i(28733))
        },
        offset: 0
      }, {
        id: "America/Mexico_City",
        get title() {
          return o.t(null, void 0, i(73332))
        },
        offset: 0
      }, {
        id: "America/New_York",
        get title() {
          return o.t(null, void 0, i(40544))
        },
        offset: 0
      }, {
        id: "America/Phoenix",
        get title() {
          return o.t(null, void 0, i(14055))
        },
        offset: 0
      }, {
        id: "America/Santiago",
        get title() {
          return o.t(null, void 0, i(30231))
        },
        offset: 0
      }, {
        id: "America/Sao_Paulo",
        get title() {
          return o.t(null, void 0, i(91912))
        },
        offset: 0
      }, {
        id: "America/Toronto",
        get title() {
          return o.t(null, void 0, i(10095))
        },
        offset: 0
      }, {
        id: "America/Vancouver",
        get title() {
          return o.t(null, void 0, i(32838))
        },
        offset: 0
      }, {
        id: "US/Mountain",
        get title() {
          return o.t(null, void 0, i(27358))
        },
        offset: 0
      }, {
        id: "Asia/Almaty",
        get title() {
          return o.t(null, void 0, i(98128))
        },
        offset: 0
      }, {
        id: "Asia/Ashkhabad",
        get title() {
          return o.t(null, void 0, i(63627))
        },
        offset: 0
      }, {
        id: "Asia/Bahrain",
        get title() {
          return o.t(null, void 0, i(90594))
        },
        offset: 0
      }, {
        id: "Asia/Bangkok",
        get title() {
          return o.t(null, void 0, i(47045))
        },
        offset: 0
      }, {
        id: "Asia/Chongqing",
        get title() {
          return o.t(null, void 0, i(50349))
        },
        offset: 0
      }, {
        id: "Asia/Colombo",
        get title() {
          return o.t(null, void 0, i(10871))
        },
        offset: 0
      }, {
        id: "Asia/Dhaka",
        get title() {
          return o.t(null, void 0, i(24959))
        },
        offset: 0
      }, {
        id: "Asia/Dubai",
        get title() {
          return o.t(null, void 0, i(23650))
        },
        offset: 0
      }, {
        id: "Asia/Ho_Chi_Minh",
        get title() {
          return o.t(null, void 0, i(34491))
        },
        offset: 0
      }, {
        id: "Asia/Hong_Kong",
        get title() {
          return o.t(null, void 0, i(48861))
        },
        offset: 0
      }, {
        id: "Asia/Jakarta",
        get title() {
          return o.t(null, void 0, i(14995))
        },
        offset: 0
      }, {
        id: "Asia/Jerusalem",
        get title() {
          return o.t(null, void 0, i(36057))
        },
        offset: 0
      }, {
        id: "Asia/Karachi",
        get title() {
          return o.t(null, void 0, i(70913))
        },
        offset: 0
      }, {
        id: "Asia/Kabul",
        get title() {
          return o.t(null, void 0, i(99563))
        },
        offset: 0
      }, {
        id: "Asia/Kathmandu",
        get title() {
          return o.t(null, void 0, i(54533))
        },
        offset: 0
      }, {
        id: "Asia/Kolkata",
        get title() {
          return o.t(null, void 0, i(31561))
        },
        offset: 0
      }, {
        id: "Asia/Kuala_Lumpur",
        get title() {
          return o.t(null, void 0, i(38561))
        },
        offset: 0
      }, {
        id: "Asia/Kuwait",
        get title() {
          return o.t(null, void 0, i(76614))
        },
        offset: 0
      }, {
        id: "Asia/Manila",
        get title() {
          return o.t(null, void 0, i(48991))
        },
        offset: 0
      }, {
        id: "Asia/Muscat",
        get title() {
          return o.t(null, void 0, i(9865))
        },
        offset: 0
      }, {
        id: "Asia/Nicosia",
        get title() {
          return o.t(null, void 0, i(94600))
        },
        offset: 0
      }, {
        id: "Asia/Qatar",
        get title() {
          return o.t(null, void 0, i(28756))
        },
        offset: 0
      }, {
        id: "Asia/Riyadh",
        get title() {
          return o.t(null, void 0, i(37974))
        },
        offset: 0
      }, {
        id: "Asia/Seoul",
        get title() {
          return o.t(null, void 0, i(26820))
        },
        offset: 0
      }, {
        id: "Asia/Shanghai",
        get title() {
          return o.t(null, void 0, i(1852))
        },
        offset: 0
      }, {
        id: "Asia/Singapore",
        get title() {
          return o.t(null, void 0, i(77377))
        },
        offset: 0
      }, {
        id: "Asia/Taipei",
        get title() {
          return o.t(null, void 0, i(11034))
        },
        offset: 0
      }, {
        id: "Asia/Tehran",
        get title() {
          return o.t(null, void 0, i(6686))
        },
        offset: 0
      }, {
        id: "Asia/Tokyo",
        get title() {
          return o.t(null, void 0, i(69122))
        },
        offset: 0
      }, {
        id: "Asia/Yangon",
        get title() {
          return o.t(null, void 0, i(53168))
        },
        offset: 0
      }, {
        id: "Atlantic/Azores",
        get title() {
          return o.t(null, void 0, i(87580))
        },
        offset: 0
      }, {
        id: "Atlantic/Reykjavik",
        get title() {
          return o.t(null, void 0, i(13386))
        },
        offset: 0
      }, {
        id: "Australia/Adelaide",
        get title() {
          return o.t(null, void 0, i(37265))
        },
        offset: 0
      }, {
        id: "Australia/Brisbane",
        get title() {
          return o.t(null, void 0, i(79336))
        },
        offset: 0
      }, {
        id: "Australia/Perth",
        get title() {
          return o.t(null, void 0, i(24436))
        },
        offset: 0
      }, {
        id: "Australia/Sydney",
        get title() {
          return o.t(null, void 0, i(31622))
        },
        offset: 0
      }, {
        id: "Europe/Amsterdam",
        get title() {
          return o.t(null, void 0, i(36485))
        },
        offset: 0
      }, {
        id: "Europe/Athens",
        get title() {
          return o.t(null, void 0, i(73702))
        },
        offset: 0
      }, {
        id: "Europe/Belgrade",
        get title() {
          return o.t(null, void 0, i(71797))
        },
        offset: 0
      }, {
        id: "Europe/Berlin",
        get title() {
          return o.t(null, void 0, i(64313))
        },
        offset: 0
      }, {
        id: "Europe/Bratislava",
        get title() {
          return o.t(null, void 0, i(70876))
        },
        offset: 0
      }, {
        id: "Europe/Brussels",
        get title() {
          return o.t(null, void 0, i(91499))
        },
        offset: 0
      }, {
        id: "Europe/Bucharest",
        get title() {
          return o.t(null, void 0, i(33672))
        },
        offset: 0
      }, {
        id: "Europe/Budapest",
        get title() {
          return o.t(null, void 0, i(20313))
        },
        offset: 0
      }, {
        id: "Europe/Copenhagen",
        get title() {
          return o.t(null, void 0, i(38917))
        },
        offset: 0
      }, {
        id: "Europe/Dublin",
        get title() {
          return o.t(null, void 0, i(79716))
        },
        offset: 0
      }, {
        id: "Europe/Helsinki",
        get title() {
          return o.t(null, void 0, i(48203))
        },
        offset: 0
      }, {
        id: "Europe/Istanbul",
        get title() {
          return o.t(null, void 0, i(78326))
        },
        offset: 0
      }, {
        id: "Europe/Lisbon",
        get title() {
          return o.t(null, void 0, i(53375))
        },
        offset: 0
      }, {
        id: "Europe/London",
        get title() {
          return o.t(null, void 0, i(19439))
        },
        offset: 0
      }, {
        id: "Europe/Luxembourg",
        get title() {
          return o.t(null, void 0, i(81038))
        },
        offset: 0
      }, {
        id: "Europe/Madrid",
        get title() {
          return o.t(null, void 0, i(52066))
        },
        offset: 0
      }, {
        id: "Europe/Malta",
        get title() {
          return o.t(null, void 0, i(38365))
        },
        offset: 0
      }, {
        id: "Europe/Moscow",
        get title() {
          return o.t(null, void 0, i(64039))
        },
        offset: 0
      }, {
        id: "Europe/Oslo",
        get title() {
          return o.t(null, void 0, i(75722))
        },
        offset: 0
      }, {
        id: "Europe/Paris",
        get title() {
          return o.t(null, void 0, i(61879))
        },
        offset: 0
      }, {
        id: "Europe/Prague",
        get title() {
          return o.t(null, void 0, i(81248))
        },
        offset: 0
      }, {
        id: "Europe/Riga",
        get title() {
          return o.t(null, void 0, i(94022))
        },
        offset: 0
      }, {
        id: "Europe/Rome",
        get title() {
          return o.t(null, void 0, i(52961))
        },
        offset: 0
      }, {
        id: "Europe/Stockholm",
        get title() {
          return o.t(null, void 0, i(86716))
        },
        offset: 0
      }, {
        id: "Europe/Tallinn",
        get title() {
          return o.t(null, void 0, i(79995))
        },
        offset: 0
      }, {
        id: "Europe/Vienna",
        get title() {
          return o.t(null, void 0, i(23160))
        },
        offset: 0
      }, {
        id: "Europe/Vilnius",
        get title() {
          return o.t(null, void 0, i(60534))
        },
        offset: 0
      }, {
        id: "Europe/Warsaw",
        get title() {
          return o.t(null, void 0, i(5959))
        },
        offset: 0
      }, {
        id: "Europe/Zurich",
        get title() {
          return o.t(null, void 0, i(62859))
        },
        offset: 0
      }, {
        id: "Pacific/Auckland",
        get title() {
          return o.t(null, void 0, i(66103))
        },
        offset: 0
      }, {
        id: "Pacific/Chatham",
        get title() {
          return o.t(null, void 0, i(36549))
        },
        offset: 0
      }, {
        id: "Pacific/Fakaofo",
        get title() {
          return o.t(null, void 0, i(98549))
        },
        offset: 0
      }, {
        id: "Pacific/Honolulu",
        get title() {
          return o.t(null, void 0, i(79668))
        },
        offset: 0
      }, {
        id: "Pacific/Norfolk",
        get title() {
          return o.t(null, void 0, i(67891))
        },
        offset: 0
      }];

    function a(exports, t, i) {
      const o = function(exports) {
          return exports.map((exports => {
            const {
              id: t
            } = exports, {
              string: i,
              offset: o
            } = (0, state.parseTzOffset)(t);
            return {
              id: t,
              offset: o,
              get title() {
                return `(${i}) ${exports.title}`
              }
            }
          }))
        }(exports),
        nextValue = i.filter((({
          alias: e
        }) => Boolean(exports))).map((exports => {
          const {
            alias: t,
            id: i
          } = exports, {
            string: o,
            offset: n
          } = (0, state.parseTzOffset)(t);
          return {
            id: i,
            offset: nextValue,
            get title() {
              return `(${o}) ${exports.title}`
            },
            alias: t
          }
        })),
        r = function(exports) {
          return exports.sort(((exports, t) => {
            const i = exports.offset - t.offset;
            return 0 !== i ? i : exports.title.localeCompare(t.title)
          }))
        }(o.concat(nextValue));
      return t.concat(r)
    }
    const l = a(r, nextValue, []),
      c = new Map;
    l.forEach((exports => {
      c.set(exports.id, !0)
    }));
    const h = new Map;
    nextValue.concat(r).forEach((exports => {
      h.set(exports.id, !0)
    }));
    const d = exports => {
      l.splice(0, l.length, ...a(r, nextValue, e)), l.forEach((exports => {
        c.set(exports.id, !0)
      }))
    };

    function u(exports) {
      return c.has(exports)
    }

    function _(exports) {
      return h.get(exports) || !1
    }

    function p(exports) {
      for (const {
          id: t,
          title: i
        }
        of r)
        if (t === e) {
          return `${i} (${(0,state.parseTzOffset)(exports).string})`
        } for (const {
          id: t,
          title: i
        }
        of l)
        if (t === e) return `${i}`;
      return e
    }