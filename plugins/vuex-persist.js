import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    new VuexPersistence({
        key: 'store',
        modules: ['app', 'notes']
    /* your options */
    }).plugin(store);
  }