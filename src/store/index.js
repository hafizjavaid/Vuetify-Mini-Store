// import { indexOf } from "core-js/core/array";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedIcon: "ES - Guia de tallas",
        sizeCharts: [{
                id: 1,
                title: "Long armed Shirt",
                published: true,
                content: "<p>Teste: id 1</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 2,
                title: "Short Dress",
                published: false,
                content: "teste: id 2",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
        ],
        templates: [{
                id: 1,
                title: "Template - Tops",
                published: true,
                content: "<p>This is the Tops template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 2,
                title: "Template - Bottoms",
                published: true,
                content: "<p>This is the Bottoms template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 3,
                title: "Template - Blazer",
                published: true,
                content: "<p>This is the Blazer template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 4,
                title: "Template - Jacket",
                published: true,
                content: "<p>This is the Jacket template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 5,
                title: "Template - Brief",
                published: true,
                content: "<p>This is the Brief template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            }, {
                id: 6,
                title: "Template - Bikini",
                published: true,
                content: "<p>This is the Bikini template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 7,
                title: "Template - Dress",
                published: true,
                content: "<p>This is the Dress template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 8,
                title: "Template - Bra",
                published: true,
                content: "<p>This is the Bra template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 9,
                title: "Template - Shoes",
                published: true,
                content: "<p>This is the Shoes template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 10,
                title: "Template - Pet",
                published: true,
                content: "<p>This is the Pet template</p>",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
            {
                id: 11,
                title: "New Size Chart",
                published: true,
                content: "",
                iconText: "Size guide",
                sizeGuideIcon: "",
            },
        ],
        //To be validated after checking Shopify's Product API
        product_links: [{
            shopId: "",
            productId: "",
            collectionId: "",
            sizeChartId: "",
        }, ],
        shop: {
            shopId: "",
            plan: "",
        }
    },
    mutations: {
        deleteSizeChart(state, payload) {
            state.sizeCharts.splice(payload, 1);
        },
        duplicateSizeChart(state, payload) {
            state.sizeCharts.push(payload);
        },
        toggleSizeChartStatus(state, id) {
            let chart = state.sizeCharts.filter((chart) => chart.id === id)[0];
            chart.published = !chart.published;
        },
        EditChart(state, { chart, index }) {
            state.sizeCharts[index] = chart;
        },
        saveSelectedIcon(state, payload) {
            state.selectedIcon = payload;
        }

    },
    actions: {

        // Duplicate Chart
        duplicateSizeChart({ commit, getters }, id) {
            // To Avoid Code Duplication
            let originChart = getters.getChart(id);
            let duplicateChart = {
                id: Date.now(),
                title: "Copy of " + originChart.title,
                published: false,
                content: originChart.content,
            };

            commit("duplicateSizeChart", duplicateChart);
        },

        // Delete Chart
        deleteSizeChart({ commit, getters }, id) {

            // To Avoid Code Duplication
            let chart = getters.getChart(id);
            let index = this.state.sizeCharts.indexOf(chart);
            commit("deleteSizeChart", index);
        },

        EditChart({ commit, getters }, payload) {
            let chart = getters.getChart(payload.id);
            if (chart) {
                let index = this.state.sizeCharts.indexOf(payload);
                commit('EditChart', {
                    chart,
                    index
                });
            } else {
                commit('duplicateSizeChart', payload);
            }
        },
        // Create new Chart from a Template
        newSizeChartFromTemplate({ commit, getters }, id) {
            let template = getters.getTemplate(parseInt(id));
            let newChart = {
                id: Date.now(),
                title: "Copy of " + template.title,
                published: false,
                content: template.content,
            };
            return newChart;
        },
        saveSelectedIcon({ commit }, payload) {
            commit('saveSelectedIcon', payload);
        }
    },
    modules: {},
    getters: {
        getChart: (state) => (id) => {
            return state.sizeCharts.filter((originChart) => originChart.id === id)[0];
        },
        getTemplate: (state) => (id) => {
            return state.templates.filter((originChart) => originChart.id === id)[0];
        },
        getType: (state) => {

            return state.selectedIcon;

        }
    },
});