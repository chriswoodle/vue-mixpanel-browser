
import Vue from 'vue';
import { PluginObject } from 'vue/types/umd';

import * as mixpanel from 'mixpanel-browser';

export interface MixpanelPluginOptions {
    token: string;
    config: Partial<mixpanel.Config>;
}

export default class Mixpanel extends Vue {
    public static Mixpanel: PluginObject<any> = {
        install(vue: Vue.VueConstructor<Vue>, options?: MixpanelPluginOptions) {
            Vue.prototype.$mixpanel = mixpanel;
            if (options?.token) {
                Vue.prototype.$mixpanel.init(options.token)

                const config = options?.config || {}
                Vue.prototype.$mixpanel.set_config(config)
            }
        }
    };
}

declare module 'vue/types/vue' {
    interface Vue {
        $mixpanel: mixpanel.Mixpanel;
    }
}