!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n(require("dayjs")))
    : "function" == typeof define && define.amd
      ? define(["dayjs"], n)
      : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_locale_fr = n(e.dayjs));
})(this, function (e) {
  "use strict";
  function n(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var t = n(e),
    i = {
      name: "zh-cn",
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      months:
        "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
          "_"
        ),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
        "_"
      ),
      ordinal: (number, period) => {
        switch (period) {
          case "W":
            return `${number}週`;
          default:
            return `${number}日`;
        }
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah時mm分",
        LLLL: "YYYY年M月D日ddddAh時mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm",
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "幾秒",
        m: "1 分鐘",
        mm: "%d 分鐘",
        h: "1 小時",
        hh: "%d 小時",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年",
      },
      meridiem: (hour, minute) => {
        const hm = hour * 100 + minute;
        if (hm < 600) {
          return "凌晨";
        } else if (hm < 900) {
          return "早上";
        } else if (hm < 1100) {
          return "上午";
        } else if (hm < 1300) {
          return "中午";
        } else if (hm < 1800) {
          return "下午";
        }
        return "晚上";
      },
    };
  return t.default.locale(i, null, !0), i;
});