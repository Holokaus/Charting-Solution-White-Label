/**
 * Module 34840 - Auto-beautified from TradingView webpack bundle
 *
 * @module 34840
 * @date 2026-04-23
 * @size 6874 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 9343, 39058
 *
 * Exports:
 *   - favorStandardStudyTemplate (internal: E)
 *   - favorStudyTemplate (internal: k)
 *   - getChartContent (internal: C)
 *   - getCharts (internal: S)
 *   - getChartsCount (internal: v)
 *   - getCustomAdapter (internal: g)
 *   - getDrawingTemplates (internal: R)
 *   - getStandardStudyTemplateById (internal: D)
 *   - getStorageURL (internal: p)
 *   - getStudyTemplateById (internal: M)
 *   - getStudyTemplatesList (internal: A)
 *   - initialize (internal: f)
 *   - invalidateStudyTemplatesList (internal: L)
 *   - isThemeExist (internal: j)
 *   - loadDrawingTemplate (internal: N)
 *   - loadLayout (internal: T)
 *   - loadTheme (internal: W)
 *   - loadThemes (internal: H)
 *   - openLayoutLink (internal: P)
 *   - removeChart (internal: b)
 *   - removeDrawingTemplate (internal: O)
 *   - removeStudyTemplate (internal: x)
 *   - removeTheme (internal: U)
 *   - renameStudyTemplate (internal: B)
 *   - replaceStudyTemplate (internal: V)
 *   - saveChart (internal: w)
 *   - saveDrawingTemplate (internal: F)
 *   - saveStudyTemplate (internal: I)
 *   - saveTheme (internal: z)
 *   - setCustomAdapter (internal: m)
 *   - updateUser (internal: y)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.r(t), i.d(t, {
  favorStandardStudyTemplate: () => E,
  favorStudyTemplate: () => k,
  getChartContent: () => C,
  getCharts: () => S,
  getChartsCount: () => v,
  getCustomAdapter: () => g,
  getDrawingTemplates: () => R,
  getStandardStudyTemplateById: () => D,
  getStorageURL: () => p,
  getStudyTemplateById: () => M,
  getStudyTemplatesList: () => A,
  initialize: () => f,
  invalidateStudyTemplatesList: () => L,
  isThemeExist: () => j,
  loadDrawingTemplate: () => N,
  loadLayout: () => T,
  loadTheme: () => W,
  loadThemes: () => H,
  openLayoutLink: () => P,
  removeChart: () => b,
  removeDrawingTemplate: () => O,
  removeStudyTemplate: () => x,
  removeTheme: () => U,
  renameStudyTemplate: () => B,
  replaceStudyTemplate: () => V,
  saveChart: () => w,
  saveDrawingTemplate: () => F,
  saveStudyTemplate: () => I,
  saveTheme: () => z,
  setCustomAdapter: () => m,
  updateUser: () => y
});
var s = i(9343),
  o = i(39058),
  n = i(1765);
const r = (0, s.getLogger)("Chart.SaveloadAdapter.Library"),
  a = {
    error: ""
  };
let l, c, h, d, u = null,
  _ = null;

function p(e) {
  return `${h}/${encodeURIComponent(d)}/${e}?client=${encodeURIComponent(l)}&user=${encodeURIComponent(c)}`
}

function m(e) {
  u = e
}

function g() {
  return u
}

function f(e, t, i, s) {
  l = e, c = t, h = i, d = s
}

function y(e) {
  c = e
}

function v(e, t) {
  throw new Error("Not implemented")
}
async function S() {
  const e = e => e.map((e => ({
    id: e.id,
    name: e.name,
    image_url: String(e.id),
    modified_iso: e.timestamp,
    short_symbol: e.symbol,
    interval: e.resolution
  })));
  if (u) return u.getAllCharts().then(e);
  try {
    const t = await fetch(`${p("charts")}`, {
      credentials: "same-origin"
    });
    if (!t.ok) throw new Error(`Getting chart content response was not OK. Status: ${t.status}.`);
    const i = await t.json();
    if ("ok" !== i.status) throw new Error("Get chart content request failed: " + i.message);
    return e(i.data)
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function b(e) {
  if (u) return u.removeChart(e);
  try {
    const t = await fetch(`${p("charts")}&chart=${encodeURIComponent(e)}`, {
      method: "DELETE",
      credentials: "same-origin"
    });
    if (!t.ok) throw new Error(`Remove chart response was not OK. Status: ${t.status}.`);
    const i = await t.json();
    if ("ok" !== i.status) throw new Error("Remove drawing template request failed: " + i.message)
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function w(e, t, i, s, n) {
  const a = n.id,
    l = {
      name: e,
      content: JSON.stringify(s),
      symbol: t,
      resolution: i
    };
  try {
    if (u) {
      return {
        result: await u.saveChart({
          ...l,
          id: a,
          timestamp: Math.round(Date.now() / 1e3)
        })
      }
    }
    const e = new FormData;
    for (const t in l) e.append(t, l[t]);
    let t = p("charts");
    null != a && (t += `&chart=${encodeURIComponent(a)}`);
    const i = await fetch(t, {
      credentials: "same-origin",
      method: "POST",
      body: e
    });
    if (!i.ok) throw new Error(`Saving chart content response was not OK. Status: ${i.status}.`);
    const s = await i.json();
    if ("ok" !== s.status) throw new Error("Saving chart content request failed: " + s.message);
    return {
      result: (s.id ?? a).toString(),
      response: i
    }
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function C(e) {
  const t = t => {
    const i = JSON.parse(t);
    return i.uid = e.id, i
  };
  if (u) return u.getChartContent(e.id).then((e => t(e)));
  try {
    const i = await fetch(`${p("charts")}&chart=${encodeURIComponent(e.id)}`, {
      credentials: "same-origin"
    });
    if (!i.ok) throw new Error(`Getting chart content response was not OK. Status: ${i.status}.`);
    const s = await i.json();
    if ("ok" !== s.status) throw new Error("Get chart content request failed: " + s.message);
    return t(s.data.content)
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function T(e) {
  try {
    return {
      chartWidgetCollectionState: await C(e),
      description: e.name,
      id: e.id,
      lastModified: e.modified_iso,
      name: e.name,
      uid: e.url,
      username: "",
      isPrivate: !0
    }
  } catch (e) {
    throw r.logWarn("Error loading chart"), e
  }
}

function P(e, t) {
  throw new Error("Opening layout link is not supported")
}
async function x(e) {
  try {
    const t = G().filter((t => t !== e));
    if (u) return q(t), u.removeStudyTemplate({
      name: e
    });
    const i = await fetch(`${p("study_templates")}&template=${encodeURIComponent(e)}`, {
      method: "DELETE",
      credentials: "same-origin"
    });
    if (!i.ok) throw new Error(`Remove study template response was not OK. Status: ${i.status}.`);
    const s = await i.json();
    if ("ok" !== s.status) throw new Error("Remove study template request failed: " + s.message);
    q(t)
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function M(e) {
  try {
    if (u) {
      return {
        content: await u.getStudyTemplateContent({
          name: e
        })
      }
    }
    const t = await fetch(`${p("study_templates")}&template=${encodeURIComponent(e)}`, {
      credentials: "same-origin"
    });
    if (!t.ok) throw new Error(`Get study template response was not OK. Status: ${t.status}.`);
    const i = await t.json();
    if ("ok" !== i.status) throw new Error("Get study template request failed: " + i.message);
    return i.data
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function I(e) {
  try {
    if (u) return u.saveStudyTemplate(e).then((() => ({
      error: ""
    }))).catch((e => ({
      error: null != e ? (0, o.errorToString)(e) : "error"
    })));
    const t = new FormData;
    t.append("name", e.name), t.append("content", e.content);
    const i = await fetch(p("study_templates"), {
      method: "POST",
      body: t,
      credentials: "same-origin"
    });
    if (!i.ok) throw new Error(`Save study template response was not OK. Status: ${i.status}.`);
    const s = await i.json();
    return {
      error: "ok" === s.status ? "" : s.status
    }
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}
async function A() {
  try {
    if (_) return _;
    _ = [];
    const e = e => (_ = e.map((e => {
      const t = G().indexOf(e.name);
      return {
        id: e.name,
        is_default: !1,
        is_fundamental: !1,
        name: e.name,
        favorite_date: -1 !== t ? t : null
      }
    })), _);
    if (u) return u.getAllStudyTemplates().then(e);
    const t = await fetch(p("study_templates"), {
      method: "GET",
      credentials: "same-origin"
    });
    if (!t.ok) throw new Error(`Study templates list response was not OK. Status: ${t.status}.`);
    const i = await t.json();
    if ("ok" !== i.status) throw new Error("Study templates list request failed: " + i.message);
    return e(i.data)
  } catch (e) {
    throw r.logWarn((0, o.errorToString)(e)), e
  }
}

function L() {
  _ = null
}

function k(e, t, i) {
  const s = G();
  q(t ? [...s, e] : s.filter((t => t !== e))), i?.(null)
}

function E(e, t, i) {
  k(e, t, i)
}
async function D(e, t) {
  throw new Error("Not implemented")
}

function B(e, t, i) {
  throw new Error("Not implemented")
}

function V(e, t, i) {
  throw new Error("Not implemented")
}
async function R(e) {
  throw new Error("Not implemented")
}
async function N(e, t) {
  throw new Error("Not implemented")
}
async function O(e, t) {
  throw new Error("Not implemented")
}
async function F(e, t, i) {
  throw new Error("Not implemented")
}

function W(e) {
  if (null !== u) return u.getChartTemplateContent(e);
  throw new Error("Not implemented")
}

function H() {
  return null !== u ? u.getAllChartTemplates() : Promise.resolve([])
}
async function z(e, t) {
  if (null !== u) try {
    return await u.saveChartTemplate(e, t), a
  } catch (e) {
    return console.error(e), {
      error: e instanceof Error ? e.message : e.toString()
    }
  }
  throw new Error("Not implemented")
}
async function U(e) {
  if (null !== u) try {
    return await u.removeChartTemplate(e), a
  } catch (e) {
    return console.error(e), {
      error: e instanceof Error ? e.message : e.toString()
    }
  }
  throw new Error("Not implemented")
}

function j(e) {
  return W(e).then((e => Boolean(e.content)))
}

function G() {
  return n.getJSON("StudyTemplates.quicks", [])
}

function q(e) {
  n.setJSON("StudyTemplates.quicks", e)
