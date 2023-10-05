
import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let effects = [];
let currentEffectOrder = 0;

let rootComponent = null;
let rootContainer = null;
let rootLayout = null;

let states = [];
let currentStateOrder = 0;

const debounce = (fn, timeout = 100) => {
    let timeId = null;

    return (...rest) => {
        if (timeId) clearTimeout(timeId);

        timeId = setTimeout(() => fn(...rest), timeout);
    };
};

const render = (layout, container, component) => {
    container.innerHTML = layout(component);

    rootComponent = component;
    rootContainer = container;
    rootLayout = layout;

    effects.forEach((effect) => {
        effect.cb();
    });
};

const rerender = debounce(() => {
    currentStateOrder = 0;
    currentEffectOrder = 0;
    rootContainer.innerHTML = rootLayout(rootComponent);

    effects.forEach((effect) => {
        // shouldRunEffect = true khi không truyền deps hoặc deps khác nhau
        const shouldRunEffect =
            !effect.nextDeps ||
            effect.nextDeps?.some((dep, i) => {
                return dep !== effect?.prevDeps?.[i];
            });

        if (shouldRunEffect) {
            effect.cb();
        }
    });
});

const useState = (initialState) => {
    let state;
    let stateOrder = currentStateOrder;

    if (states[stateOrder] !== undefined) {
        state = states[stateOrder];
    } else {
        state = states[stateOrder] = initialState;
    }

    const updater = (newState) => {
        if (newState === undefined) {
            throw new Error("New state must not be undefined");
        }

        states[stateOrder] =
            typeof newState === "function" ? newState(states[stateOrder]) : newState;

        rerender();
    };

    currentStateOrder++;

    return [state, updater];
};

const useEffect = (cb, deps) => {
    let effectOrder = currentEffectOrder;

    if (!effects[effectOrder]) {
        effects.push({
            cb: cb,
            prevDeps: null,
            nextDeps: deps,
        });
    } else {
        effects[effectOrder] = {
            cb: cb,
            prevDeps: effects[effectOrder].nextDeps,
            nextDeps: deps,
        };
    }

    currentEffectOrder++;
};

router.on("/*", () => { }, {
    before(done, match) {
        states = [];
        currentStateOrder = 0;
        effects = [];
        currentEffectOrder = 0;

        done();
    },
});

export { render, useState, useEffect, router, $, $$ };